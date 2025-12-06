const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Initialize database table
async function initDB() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                progress JSONB DEFAULT '{}',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Database initialized');
    } catch (err) {
        console.error('Database initialization error:', err);
    }
}

// Routes

// Login/Register - just provide username, creates if doesn't exist
app.post('/api/login', async (req, res) => {
    const { username } = req.body;
    
    if (!username || username.length < 2 || username.length > 50) {
        return res.status(400).json({ error: 'Username must be 2-50 characters' });
    }
    
    const cleanUsername = username.toLowerCase().trim();
    
    try {
        // Try to find existing user
        let result = await pool.query(
            'SELECT id, username, progress FROM users WHERE username = $1',
            [cleanUsername]
        );
        
        // If not found, create new user
        if (result.rows.length === 0) {
            result = await pool.query(
                'INSERT INTO users (username, progress) VALUES ($1, $2) RETURNING id, username, progress',
                [cleanUsername, JSON.stringify({ 1: { collected: [], score: 0 }, 2: { collected: [], score: 0 }, 3: { collected: [], score: 0 } })]
            );
        }
        
        const user = result.rows[0];
        res.json({
            success: true,
            username: user.username,
            progress: user.progress
        });
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Save progress
app.post('/api/save', async (req, res) => {
    const { username, progress } = req.body;
    
    if (!username) {
        return res.status(400).json({ error: 'Username required' });
    }
    
    try {
        await pool.query(
            'UPDATE users SET progress = $1, updated_at = CURRENT_TIMESTAMP WHERE username = $2',
            [JSON.stringify(progress), username.toLowerCase().trim()]
        );
        
        res.json({ success: true });
    } catch (err) {
        console.error('Save error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Load progress
app.get('/api/load/:username', async (req, res) => {
    const { username } = req.params;
    
    try {
        const result = await pool.query(
            'SELECT progress FROM users WHERE username = $1',
            [username.toLowerCase().trim()]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        res.json({ success: true, progress: result.rows[0].progress });
    } catch (err) {
        console.error('Load error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await initDB();
});
