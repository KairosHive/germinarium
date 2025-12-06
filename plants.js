/* THE CELESTIAL APOTHECARY - MASTER DATABASE (100 ENTRIES)
   --------------------------------------------------------
   Features:
   - Full Latin Breakdown (Genus + Species)
   - Narrative Etymology
   - Herbal Actions & Energetics
   - Biomes: Mediterranean, Woodlands, Wetlands, Fields, Tropical, Mountains, Gardens.
*/

const plantDatabase = [

    // =========================================================================
    // THE LAMIACEAE CLAN (THE MINTS)
    // Trait: Square stems, opposite leaves, aromatic.
    // =========================================================================
    {
        id: 'lavender',
        commonName: 'Lavender',
        commonName_FR: 'Lavande',
        commonName_ES: 'Lavanda',
        latinName: 'Lavandula angustifolia',
        family: 'Lamiaceae',
        habitat: 'Mediterranean',
        actions: ['Nervine', 'Carminative', 'Antispasmodic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Lavare', meaning: 'To wash (Latin)' },
            { word: 'Angusti-folia', meaning: 'Narrow-leaf' }
        ],
        etymology: "From the Latin 'lavare' (to wash), as Romans scented their communal baths with these flowers. The epithet 'angustifolia' distinguishes this species by its slender, needle-like leaves, contrasting with broad-leaved cousins.",
        commonNameHint: "Purple spikes of calm. The Roman bath-keeper.",
        image: 'https://source.unsplash.com/featured/?lavandula,lavender'
    },
    {
        id: 'rosemary',
        commonName: 'Rosemary',
        commonName_FR: 'Romarin',
        commonName_ES: 'Romero',
        latinName: 'Salvia rosmarinus',
        family: 'Lamiaceae',
        habitat: 'Mediterranean',
        actions: ['Nootropic', 'Carminative', 'Rubefacient'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Salvia', meaning: 'To save/heal' },
            { word: 'Ros-marinus', meaning: 'Dew of the Sea' }
        ],
        etymology: "The name is pure poetry: 'Ros Marinus' means 'Dew of the Sea,' as this plant thrives on the mist of the Mediterranean coast. Recently moved to the Salvia genus, marking it as a supreme healer.",
        commonNameHint: "Needle-like leaves. Used for memory ('Remember me').",
        image: 'https://source.unsplash.com/featured/?rosemary,herb'
    },
    {
        id: 'peppermint',
        commonName: 'Peppermint',
        commonName_FR: 'Menthe poivrée',
        commonName_ES: 'Menta piperita',
        latinName: 'Mentha x piperita',
        family: 'Lamiaceae',
        habitat: 'Wetlands',
        actions: ['Carminative', 'Analgesic', 'Antiemetic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Mentha', meaning: 'Minthe (Greek Nymph)' },
            { word: 'Piperita', meaning: 'Peppery' }
        ],
        etymology: "Named for the Nymph Minthe, who was transformed into a plant by a jealous Persephone. 'Piperita' refers to the sharp, pepper-like bite of the high menthol content.",
        commonNameHint: "High menthol punch. A hybrid that loves wet feet.",
        image: 'https://source.unsplash.com/featured/?peppermint,plant'
    },
    {
        id: 'lemonbalm',
        commonName: 'Lemon Balm',
        commonName_FR: 'Mélisse',
        commonName_ES: 'Melisa',
        latinName: 'Melissa officinalis',
        family: 'Lamiaceae',
        habitat: 'Gardens',
        actions: ['Nervine', 'Antiviral', 'Trophorestorative'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Melissa', meaning: 'Honeybee' },
            { word: 'Officinalis', meaning: 'Of the Workshop/Pharmacy' }
        ],
        etymology: "Greek for 'Honeybee.' Ancient beekeepers rubbed hives with this herb to keep the swarm happy and grounded. 'Officinalis' denotes its status as a standard tool in the apothecary's workshop.",
        commonNameHint: "The bees' favorite. Citrus scent, heals the heart.",
        image: 'https://source.unsplash.com/featured/?lemon-balm'
    },
    {
        id: 'sage',
        commonName: 'Garden Sage',
        commonName_FR: 'Sauge',
        commonName_ES: 'Salvia',
        latinName: 'Salvia officinalis',
        family: 'Lamiaceae',
        habitat: 'Mediterranean',
        actions: ['Astringent', 'Antiseptic', 'Antihidrotic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Salvere', meaning: 'To save/be healthy' },
            { word: 'Officinalis', meaning: 'Of the Workshop/Pharmacy' }
        ],
        etymology: "The 'Salvia' genus name comes from the Latin 'salvere,' meaning 'to save,' referring to its reputation as a panacea (cure-all). A medieval saying goes: 'Why should a man die who has sage in his garden?'",
        commonNameHint: "The Savior. Soft grey-green leaves, savory scent.",
        image: 'https://source.unsplash.com/featured/?sage,herb'
    },
    {
        id: 'thyme',
        commonName: 'Thyme',
        commonName_FR: 'Thym',
        commonName_ES: 'Tomillo',
        latinName: 'Thymus vulgaris',
        family: 'Lamiaceae',
        habitat: 'Mediterranean',
        actions: ['Expectorant', 'Antimicrobial', 'Carminative'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Thymos', meaning: 'Courage / To Fumigate' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "From the Greek 'thymos,' which means both 'courage' and 'to fumigate.' Roman soldiers bathed in it for bravery, while priests burned it to purify temples.",
        commonNameHint: "Tiny leaves, huge courage. Fumigates illness.",
        image: 'https://source.unsplash.com/featured/?thyme,plant'
    },
    {
        id: 'tulsi',
        commonName: 'Holy Basil',
        commonName_FR: 'Basilic sacré',
        commonName_ES: 'Albahaca sagrada',
        latinName: 'Ocimum tenuiflorum',
        family: 'Lamiaceae',
        habitat: 'Tropical',
        actions: ['Adaptogen', 'Carminative', 'Immunomodulator'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Ether' },
        latinBreakdown: [
            { word: 'Ocimum', meaning: 'Fragrant (Greek)' },
            { word: 'Tenui-florum', meaning: 'Slender-flowered' }
        ],
        etymology: "While 'Ocimum' refers to the intense fragrance, the common name Tulsi means 'The Incomparable One' in Sanskrit. It is considered an avatar of the Goddess Lakshmi.",
        commonNameHint: "Sacred in India. The Incomparable One.",
        image: 'https://source.unsplash.com/featured/?tulsi,holy-basil'
    },
    {
        id: 'skullcap',
        commonName: 'Skullcap',
        commonName_FR: 'Scutellaire',
        commonName_ES: 'Escutelaria',
        latinName: 'Scutellaria lateriflora',
        family: 'Lamiaceae',
        habitat: 'Wetlands',
        actions: ['Nervine', 'Trophorestorative', 'Antispasmodic'],
        energetics: { temperature: 'Cool', moisture: 'Neutral', element: 'Water' },
        latinBreakdown: [
            { word: 'Scutella', meaning: 'Little Dish/Shield' },
            { word: 'Lateri-flora', meaning: 'Side-flowering' }
        ],
        etymology: "Named for the calyx (flower base) which has a small ridge looking like a medieval helmet or 'little dish.' 'Lateriflora' describes how the small purple flowers grow along the side of the stem.",
        commonNameHint: "Caps the mind's racing thoughts. Helmet-shaped seed pods.",
        image: 'https://source.unsplash.com/featured/?scutellaria'
    },
    {
        id: 'motherwort',
        commonName: 'Motherwort',
        commonName_FR: 'Agripaume',
        commonName_ES: 'Agripalma',
        latinName: 'Leonurus cardiaca',
        family: 'Lamiaceae',
        habitat: 'Fields',
        actions: ['Nervine', 'Emmenagogue', 'Cardiotonic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Leonurus', meaning: 'Lion\'s Tail' },
            { word: 'Cardiaca', meaning: 'For the Heart' }
        ],
        etymology: "The leaves resemble the tufted tail of a lion ('Leonurus'). The species name 'cardiaca' explicitly states its ancient use: to settle the heart palpitations of anxious mothers.",
        commonNameHint: "Lion-hearted herb. Soothes palpitations.",
        image: 'https://source.unsplash.com/featured/?motherwort'
    },
    {
        id: 'hyssop',
        commonName: 'Hyssop ',
        commonName_FR: 'Hysope',
        commonName_ES: 'Hisopo',
        latinName: 'Hyssopus officinalis',
        family: 'Lamiaceae',
        habitat: 'Mediterranean',
        actions: ['Expectorant', 'Diaphoretic', 'Antiviral'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Ezob', meaning: 'Holy Herb (Hebrew)' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "Derived from the Hebrew 'ezob,' the holy herb used for ritual cleansing in the Bible ('Purge me with hyssop, and I shall be clean'). It purges the lungs of phlegm just as it purged temples.",
        commonNameHint: "Biblical cleansing herb. Purges the lungs.",
        image: 'https://source.unsplash.com/featured/?hyssop,flower'
    },
    {
        id: 'oregano',
        commonName: 'Oregano',
        commonName_FR: 'Origan',
        commonName_ES: 'Orégano',
        latinName: 'Origanum vulgare',
        family: 'Lamiaceae',
        habitat: 'Mediterranean',
        actions: ['Antimicrobial', 'Carminative', 'Expectorant'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Oros-Ganos', meaning: 'Joy of the Mountain' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "From the Greek 'oros' (mountain) and 'ganos' (joy/brightness). It covers Mediterranean hillsides, making them look bright and joyful. 'Vulgaris' simply means it is the common variety.",
        commonNameHint: "The pizza herb. Wild marjoram.",
        image: 'https://source.unsplash.com/featured/?oregano'
    },
    {
        id: 'catnip',
        commonName: 'Catnip',
        commonName_FR: 'Cataire',
        commonName_ES: 'Hierba gatera',
        latinName: 'Nepeta cataria',
        family: 'Lamiaceae',
        habitat: 'Fields',
        actions: ['Carminative', 'Nervine', 'Sedative'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Nepeta', meaning: 'From Nepete (Etruscan city)' },
            { word: 'Cataria', meaning: 'Of a Cat' }
        ],
        etymology: "Named after the ancient Etruscan city of Nepete where it grew wild. 'Cataria' is a direct nod to the plant's strange ability to intoxicate felines.",
        commonNameHint: "Intoxicates cats, sedates kids.",
        image: 'https://source.unsplash.com/featured/?catnip'
    },
    {
        id: 'prunella',
        commonName: 'Self-Heal',
        commonName_FR: 'Brunelle',
        commonName_ES: 'Consuelda menor',
        latinName: 'Prunella vulgaris',
        family: 'Lamiaceae',
        habitat: 'Fields',
        actions: ['Vulnerary', 'Astringent', 'Immunomodulator'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Brunella', meaning: 'Brown (German)' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "Originally 'Brunella' from the German 'Die Bräune' (The Brown), a throat disease characterized by a brown coating, which this plant was famous for curing.",
        commonNameHint: "Heal-All. Low growing purple lawn flower.",
        image: 'https://source.unsplash.com/featured/?prunella-vulgaris'
    },
    {
        id: 'betony',
        commonName: 'Wood Betony',
        commonName_FR: 'Bétoine',
        commonName_ES: 'Betónica',
        latinName: 'Stachys officinalis',
        family: 'Lamiaceae',
        habitat: 'Woodlands',
        actions: ['Nervine', 'Bitter', 'Vulnerary'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Stachys', meaning: 'Spike of grain' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "'Stachys' refers to the flower head which looks like an ear of wheat/grain. It was once so highly valued that the Italians had a proverb: 'Sell your coat and buy Betony.'",
        commonNameHint: "Grounded energy. Once more valuable than gold.",
        image: 'https://source.unsplash.com/featured/?wood-betony'
    },

    // =========================================================================
    // THE ASTERACEAE CLAN (THE ASTERS)
    // Trait: Composite heads, often Bitter/Cooling.
    // =========================================================================
    {
        id: 'chamomile',
        commonName: 'German Chamomile',
        commonName_FR: 'Camomille',
        commonName_ES: 'Manzanilla',
        latinName: 'Matricaria chamomilla',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Nervine', 'Anti-inflammatory', 'Vulnerary'],
        energetics: { temperature: 'Cool', moisture: 'Neutral', element: 'Water' },
        latinBreakdown: [
            { word: 'Matricaria', meaning: 'Womb / Mother' },
            { word: 'Chamai-melon', meaning: 'Earth Apple' }
        ],
        etymology: "'Matricaria' comes from 'matrix' (womb), referring to its ancient use for women's ailments. 'Chamomilla' is Greek for 'Earth Apple,' describing the sweet, apple-like scent of the flowers.",
        commonNameHint: "Apple-scented flowers. Soothes the belly and the baby.",
        image: 'https://source.unsplash.com/featured/?chamomile'
    },
    {
        id: 'echinacea',
        commonName: 'Purple Coneflower',
        commonName_FR: 'Échinacée',
        commonName_ES: 'Equinácea',
        latinName: 'Echinacea purpurea',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Immunostimulant', 'Alterative', 'Sialagogue'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Echinos', meaning: 'Hedgehog / Sea Urchin' },
            { word: 'Purpurea', meaning: 'Purple' }
        ],
        etymology: "The center cone of the flower is sharp and spiky, resembling a hedgehog ('Echinos'). 'Purpurea' simply describes the drooping violet petals.",
        commonNameHint: "Spiky center tingles the tongue.",
        image: 'https://source.unsplash.com/featured/?echinacea'
    },
    {
        id: 'yarrow',
        commonName: 'Yarrow',
        commonName_FR: 'Achillée millefeuille',
        commonName_ES: 'Milenrama',
        latinName: 'Achillea millefolium',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Styptic', 'Diaphoretic', 'Vulnerary'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Achillea', meaning: 'Of Achilles (Hero)' },
            { word: 'Mille-folium', meaning: 'Thousand-leaves' }
        ],
        etymology: "Dedicated to the Greek hero Achilles, who used this plant to staunch the bleeding wounds of his soldiers (Styptic). 'Millefolium' describes the finely divided, feathery leaves.",
        commonNameHint: "Warrior's Herb. Stops bleeding.",
        image: 'https://source.unsplash.com/featured/?yarrow'
    },
    {
        id: 'dandelion',
        commonName: 'Dandelion',
        commonName_FR: 'Pissenlit',
        commonName_ES: 'Diente de león',
        latinName: 'Taraxacum officinale',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Diuretic', 'Hepatic', 'Bitter Tonic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Taraxacum', meaning: 'Remedy for disorders' },
            { word: 'Officinale', meaning: 'Of the Pharmacy' }
        ],
        etymology: "The genus name comes from the Persian 'talkh chakok' (bitter herb). The common name Dandelion is French: 'Dent de Lion' (Lion's Tooth), referring to the jagged leaves.",
        commonNameHint: "Lion's Tooth. Liver cleanser.",
        image: 'https://source.unsplash.com/featured/?dandelion,root'
    },
    {
        id: 'calendula',
        commonName: 'Calendula',
        commonName_FR: 'Souci',
        commonName_ES: 'Caléndula',
        latinName: 'Calendula officinalis',
        family: 'Asteraceae',
        habitat: 'Gardens',
        actions: ['Vulnerary', 'Lymphagogue', 'Antifungal'],
        energetics: { temperature: 'Warm', moisture: 'Neutral', element: 'Fire' },
        latinBreakdown: [
            { word: 'Calendae', meaning: 'First day of the month' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "From 'Calends' (the calendar/clock). The Romans noted that it seemed to be in bloom on the first day of every month, marking the passage of time.",
        commonNameHint: "Pot Marigold. Skin savior.",
        image: 'https://source.unsplash.com/featured/?calendula'
    },
    {
        id: 'burdock',
        commonName: 'Burdock',
        commonName_FR: 'Bardane',
        commonName_ES: 'Bardana',
        latinName: 'Arctium lappa',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Alterative', 'Diuretic', 'Prebiotic'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Earth' },
        latinBreakdown: [
            { word: 'Arktos', meaning: 'Bear' },
            { word: 'Lappa', meaning: 'To seize' }
        ],
        etymology: "A rugged name for a rugged plant. 'Arktos' (Bear) refers to its rough, burly nature, while 'Lappa' (to seize) describes how the seed burrs grab onto your clothes (inspiring Velcro).",
        commonNameHint: "Velcro inspiration. Deep detox root.",
        image: 'https://source.unsplash.com/featured/?burdock'
    },
    {
        id: 'mugwort',
        commonName: 'Mugwort',
        commonName_FR: 'Armoise',
        commonName_ES: 'Artemisa',
        latinName: 'Artemisia vulgaris',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Emmenagogue', 'Oneirogen', 'Bitter'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Moon' },
        latinBreakdown: [
            { word: 'Artemis', meaning: 'Goddess of the Hunt/Moon' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "Named for Artemis, the Greek goddess of the moon and protector of women, as this herb is famous for regulating the menstrual cycle. 'Mugwort' may refer to its historical use flavoring 'mugs' of beer.",
        commonNameHint: "Silvery leaves. Dream herb.",
        image: 'https://source.unsplash.com/featured/?mugwort'
    },
    {
        id: 'wormwood',
        commonName: 'Wormwood',
        commonName_FR: 'Absinthe',
        commonName_ES: 'Ajenjo',
        latinName: 'Artemisia absinthium',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Anthelmintic', 'Bitter', 'Choleretic'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Artemisia', meaning: 'Of Artemis' },
            { word: 'Absinthium', meaning: 'Undrinkable/Without Sweetness' }
        ],
        etymology: "The bitterest herb in the garden. 'Absinthium' means 'undrinkable' in Greek, warning of its intense flavor. It is the defining ingredient in Absinthe (The Green Fairy).",
        commonNameHint: "The Green Fairy. Expels parasites.",
        image: 'https://source.unsplash.com/featured/?wormwood'
    },
    {
        id: 'elecampane',
        commonName: 'Elecampane',
        commonName_FR: 'Aunée',
        commonName_ES: 'Énula campana',
        latinName: 'Inula helenium',
        family: 'Asteraceae',
        habitat: 'Wetlands',
        actions: ['Expectorant', 'Antimicrobial', 'Tonic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Inula', meaning: 'To empty/purge' },
            { word: 'Helenium', meaning: 'Of Helen of Troy' }
        ],
        etymology: "Legend says this plant sprang from the tears of Helen of Troy when she was kidnapped. Its massive leaves and sunny flowers hide a root that smells of violet and camphor.",
        commonNameHint: "Horse-heal. Root smells like violet bananas.",
        image: 'https://source.unsplash.com/featured/?elecampane'
    },
    {
        id: 'feverfew',
        commonName: 'Feverfew',
        commonName_FR: 'Grande camomille',
        commonName_ES: 'Matricaria',
        latinName: 'Tanacetum parthenium',
        family: 'Asteraceae',
        habitat: 'Gardens',
        actions: ['Anti-inflammatory', 'Vasodilator', 'Bitter'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Tanacetum', meaning: 'Immortal' },
            { word: 'Parthenos', meaning: 'Virgin/Maiden' }
        ],
        etymology: "The Parthenon in Athens is the temple of the Virgin Goddess (Athena); 'Parthenium' refers to this herb's use for young women. 'Feverfew' is a corruption of 'Febrifuge' (Fever reducer).",
        commonNameHint: "Migraine herb. Looks like a daisy.",
        image: 'https://source.unsplash.com/featured/?feverfew'
    },
    {
        id: 'arnica',
        commonName: 'Arnica',
        commonName_FR: 'Arnica',
        commonName_ES: 'Árnica',
        latinName: 'Arnica montana',
        family: 'Asteraceae',
        habitat: 'Mountains',
        actions: ['Vulnerary', 'Anti-inflammatory', 'Traumatic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Arnakis', meaning: 'Lamb\'s skin' },
            { word: 'Montana', meaning: 'Of the Mountain' }
        ],
        etymology: "'Arnakis' means 'Lamb's skin' in Greek, describing the soft, fuzzy texture of the leaves. 'Montana' tells you exactly where to find it: high up on alpine slopes.",
        commonNameHint: "Mountain Daisy. For trauma and bruises.",
        image: 'https://source.unsplash.com/featured/?arnica,flower'
    },
    {
        id: 'boneset',
        commonName: 'Boneset',
        commonName_FR: 'Eupatoire perfoliée',
        commonName_ES: 'Eupatorio',
        latinName: 'Eupatorium perfoliatum',
        family: 'Asteraceae',
        habitat: 'Wetlands',
        actions: ['Diaphoretic', 'Immunostimulant', 'Febrifuge'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Eupator', meaning: 'Mithridates Eupator (King)' },
            { word: 'Per-foliatum', meaning: 'Through-the-leaf' }
        ],
        etymology: "'Perfoliatum' is the visual key: the stem appears to pierce right through the center of the joined leaves. Named 'Boneset' not for setting bones, but for treating 'Breakbone Fever' (Dengue/Flu).",
        commonNameHint: "Stem grows through the leaf. Flu remedy.",
        image: 'https://source.unsplash.com/featured/?eupatorium'
    },
    {
        id: 'milkthistle',
        commonName: 'Milk Thistle',
        commonName_FR: 'Chardon-Marie',
        commonName_ES: 'Cardo mariano',
        latinName: 'Silybum marianum',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Hepatic', 'Hepatoprotective', 'Demulcent'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Fire' },
        latinBreakdown: [
            { word: 'Silybum', meaning: 'Tuft/Tassel' },
            { word: 'Marianum', meaning: 'Of Mary' }
        ],
        etymology: "The species is named for the Virgin Mary. Folklore says the white marbling veins on the green leaves were caused by a drop of her milk falling onto the plant while she nursed Jesus.",
        commonNameHint: "White veins on leaf. Liver guardian.",
        image: 'https://source.unsplash.com/featured/?milk-thistle'
    },
    {
        id: 'goldenrod',
        commonName: 'Goldenrod',
        commonName_FR: 'Verge d\'or',
        commonName_ES: 'Vara de oro',
        latinName: 'Solidago virgaurea',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Diuretic', 'Anticatarrhal', 'Vulnerary'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Solidago', meaning: 'To make whole' },
            { word: 'Virga-aurea', meaning: 'Rod of Gold' }
        ],
        etymology: "'Solidago' comes from 'solido' (to make whole), referring to its wound-healing abilities. 'Virgaurea' describes the flower spikes which look like golden wands or rods.",
        commonNameHint: "Heals sinus and kidneys. Not a ragweed.",
        image: 'https://source.unsplash.com/featured/?goldenrod'
    },
    {
        id: 'coltsfoot',
        commonName: 'Coltsfoot',
        commonName_FR: 'Tussilage',
        commonName_ES: 'Tusilago',
        latinName: 'Tussilago farfara',
        family: 'Asteraceae',
        habitat: 'Wetlands',
        actions: ['Antitussive', 'Demulcent', 'Expectorant'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Tussis-Ago', meaning: 'Cough-dispeller' },
            { word: 'Farfara', meaning: 'Floury/Mealy' }
        ],
        etymology: "'Tussilago' literally translates to 'I drive away the cough.' 'Farfara' may refer to the white, flour-like felt on the underside of the leaves. The common name describes the leaf shape.",
        commonNameHint: "Hoof shaped leaf. Cough dispeller.",
        image: 'https://source.unsplash.com/featured/?coltsfoot'
    },
    {
        id: 'sunflower',
        commonName: 'Sunflower',
        commonName_FR: 'Tournesol',
        commonName_ES: 'Girasol',
        latinName: 'Helianthus annuus',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Nutritive', 'Diuretic', 'Expectorant'],
        energetics: { temperature: 'Neutral', moisture: 'Moist', element: 'Fire' },
        latinBreakdown: [
            { word: 'Helios-Anthos', meaning: 'Sun-Flower' },
            { word: 'Annuus', meaning: 'Annual/Yearly' }
        ],
        etymology: "A literal translation: 'Helios' (Sun) and 'Anthos' (Flower). 'Annuus' indicates it completes its entire massive life cycle—germination to death—in a single year.",
        commonNameHint: "Watcher of the day star.",
        image: 'https://source.unsplash.com/featured/?sunflower'
    },
    {
        id: 'tansy',
        commonName: 'Tansy',
        commonName_FR: 'Tanaisie',
        commonName_ES: 'Tanaceto',
        latinName: 'Tanacetum vulgare',
        family: 'Asteraceae',
        habitat: 'Fields',
        actions: ['Anthelmintic', 'Emmenagogue', 'Bitter'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Athanasia', meaning: 'Immortality' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "Derived from the Greek 'Athanasia' (without death). Tansy flowers dry beautifully and keep their golden color for a long time, looking 'immortal.' Historically used to preserve corpses.",
        commonNameHint: "Golden buttons. Repels insects.",
        image: 'https://source.unsplash.com/featured/?tansy,plant'
    },

    // =========================================================================
    // THE APIACEAE CLAN (THE UMBELS)
    // Trait: Hollow stems, Umbrellas.
    // =========================================================================
    {
        id: 'fennel',
        commonName: 'Fennel',
        commonName_FR: 'Fenouil',
        commonName_ES: 'Hinojo',
        latinName: 'Foeniculum vulgare',
        family: 'Apiaceae',
        habitat: 'Mediterranean',
        actions: ['Carminative', 'Galactagogue', 'Diuretic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Foenum', meaning: 'Hay' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "'Foeniculum' is a diminutive of 'foenum' (hay), referring to the sweet, hay-like smell of the dried leaves. It was the food of the gladiators, believed to prevent obesity.",
        commonNameHint: "Anise taste. Seeds soothe babies.",
        image: 'https://source.unsplash.com/featured/?fennel'
    },
    {
        id: 'angelica',
        commonName: 'Angelica',
        commonName_FR: 'Angélique',
        commonName_ES: 'Angélica',
        latinName: 'Angelica archangelica',
        family: 'Apiaceae',
        habitat: 'Wetlands',
        actions: ['Carminative', 'Bitter', 'Expectorant'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Angelica', meaning: 'Angelic' },
            { word: 'Archangelica', meaning: 'Of the Archangels' }
        ],
        etymology: "A plant so powerful it was named twice for the divine. Folklore states an Archangel (Raphael or Michael) revealed this plant in a dream as a cure for the plague.",
        commonNameHint: "Massive hollow stems. Root of angels.",
        image: 'https://source.unsplash.com/featured/?angelica-archangelica'
    },
    {
        id: 'parsley',
        commonName: 'Parsley',
        commonName_FR: 'Persil',
        commonName_ES: 'Perejil',
        latinName: 'Petroselinum crispum',
        family: 'Apiaceae',
        habitat: 'Gardens',
        actions: ['Diuretic', 'Nutritive', 'Emmenagogue'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Petros-Selinon', meaning: 'Rock-Celery' },
            { word: 'Crispum', meaning: 'Curly' }
        ],
        etymology: "Greek 'Petros' (Rock) and 'Selinon' (Celery). It is essentially 'Rock Celery' because it loves to grow in rocky, stony ground. 'Crispum' refers to the curly-leaved variety.",
        commonNameHint: "Kidney flush. More than a garnish.",
        image: 'https://source.unsplash.com/featured/?parsley'
    },
    {
        id: 'dill',
        commonName: 'Dill',
        commonName_FR: 'Aneth',
        commonName_ES: 'Eneldo',
        latinName: 'Anethum graveolens',
        family: 'Apiaceae',
        habitat: 'Gardens',
        actions: ['Carminative', 'Galactagogue', 'Antispasmodic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Anethon', meaning: 'Dill (Greek)' },
            { word: 'Grave-olens', meaning: 'Heavy-scented' }
        ],
        etymology: "'Graveolens' means 'strong smelling' or 'heavy scented.' The common name Dill comes from the Norse 'dilla,' meaning 'to lull,' because it was used to lull babies to sleep (and settle their tummies).",
        commonNameHint: "The pickle herb. Lulls stomach aches.",
        image: 'https://source.unsplash.com/featured/?dill'
    },
    {
        id: 'gotukola',
        commonName: 'Gotu Kola',
        commonName_FR: 'Centella',
        commonName_ES: 'Centella asiática',
        latinName: 'Centella asiatica',
        family: 'Apiaceae',
        habitat: 'Wetlands',
        actions: ['Vulnerary', 'Nootropic', 'Adaptogen'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Centella', meaning: 'Little Coin / 100' },
            { word: 'Asiatica', meaning: 'Of Asia' }
        ],
        etymology: "'Centella' likely refers to the round, coin-like shape of the leaves (resembling a penny). It is the 'Herb of Enlightenment' in Ayurveda, growing in the wetlands of Asia.",
        commonNameHint: "Brain food. Fan-shaped swamp leaf.",
        image: 'https://source.unsplash.com/featured/?gotu-kola'
    },
    {
        id: 'cumin',
        commonName: 'Cumin',
        commonName_FR: 'Cumin',
        commonName_ES: 'Comino',
        latinName: 'Cuminum cyminum',
        family: 'Apiaceae',
        habitat: 'Mediterranean',
        actions: ['Carminative', 'Stimulant', 'Antimicrobial'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Cuminum', meaning: 'Cumin (Semitic origin)' },
            { word: 'Cyminum', meaning: 'Cumin' }
        ],
        etymology: "One of the few words that has stayed almost the same for thousands of years (Sumerian 'gamun'). A repetition in the name emphasizes its ancient, singular identity as a spice.",
        commonNameHint: "Earthy taco scent.",
        image: 'https://source.unsplash.com/featured/?cumin'
    },
    {
        id: 'hemlock',
        commonName: 'Poison Hemlock',
        commonName_FR: 'Ciguë',
        commonName_ES: 'Cicuta',
        latinName: 'Conium maculatum',
        family: 'Apiaceae',
        habitat: 'Wetlands',
        actions: ['POISON', 'Sedative'],
        energetics: { temperature: 'Cold', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Koneion', meaning: 'Spinning Top' },
            { word: 'Maculatum', meaning: 'Spotted' }
        ],
        etymology: "Greek 'Koneion' (spinning top) refers to the vertigo and dizziness induced by the poison before death. 'Maculatum' (spotted) is the warning sign: purple blotches on the stem, known as 'The Mark of Cain.'",
        commonNameHint: "Purple spots on stem. Socrates' cup.",
        image: 'https://source.unsplash.com/featured/?conium-maculatum'
    },
    {
        id: 'coriander',
        commonName: 'Coriander/Cilantro',
        commonName_FR: 'Coriandre',
        commonName_ES: 'Cilantro',
        latinName: 'Coriandrum sativum',
        family: 'Apiaceae',
        habitat: 'Gardens',
        actions: ['Carminative', 'Chelator', 'Appetizer'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Earth' },
        latinBreakdown: [
            { word: 'Koris', meaning: 'Bedbug' },
            { word: 'Sativum', meaning: 'Cultivated' }
        ],
        etymology: "The name comes from the Greek 'Koris' (Bedbug), because the unripe seeds and leaves were thought to smell like squashed bugs! 'Sativum' indicates it has been grown in gardens for millennia.",
        commonNameHint: "Soap taste to some. Heavy metal detox.",
        image: 'https://source.unsplash.com/featured/?cilantro'
    },

    // =========================================================================
    // THE ROSACEAE CLAN (THE ROSE)
    // Trait: 5 Petals, Astringent, Thorns.
    // =========================================================================
    {
        id: 'rose',
        commonName: 'Rose',
        commonName_FR: 'Rose',
        commonName_ES: 'Rosa',
        latinName: 'Rosa spp.',
        family: 'Rosaceae',
        habitat: 'Gardens',
        actions: ['Astringent', 'Nervine', 'Cardiotonic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Rosa', meaning: 'Rose / Red' },
            { word: 'Spp.', meaning: 'Species (Plural)' }
        ],
        etymology: "The word 'Rosa' is ancient, likely coming from the Greek 'rodon' (red). It is the archetype of the family. The 'spp.' means this entry applies to many wild species (Dog Rose, Damask Rose, etc.).",
        commonNameHint: "Queen of flowers. Heals the heart.",
        image: 'https://source.unsplash.com/featured/?wild-rose'
    },
    {
        id: 'hawthorn',
        commonName: 'Hawthorn',
        commonName_FR: 'Aubépine',
        commonName_ES: 'Espino blanco',
        latinName: 'Crataegus monogyna',
        family: 'Rosaceae',
        habitat: 'Woodlands',
        actions: ['Cardiotonic', 'Trophorestorative', 'Relaxant'],
        energetics: { temperature: 'Neutral', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Kratos', meaning: 'Strength' },
            { word: 'Mono-gyna', meaning: 'One-woman (One seed)' }
        ],
        etymology: "'Kratos' (Strength) refers to the incredible hardness of the wood. 'Monogyna' (One Woman) is a botanical term meaning the flower has only one pistil, leading to a berry with a single seed.",
        commonNameHint: "Faerie Tree. Berries feed the heart muscle.",
        image: 'https://source.unsplash.com/featured/?hawthorn,berry'
    },
    {
        id: 'raspberry',
        commonName: 'Red Raspberry Leaf',
        commonName_FR: 'Framboise',
        commonName_ES: 'Frambuesa',
        latinName: 'Rubus idaeus',
        family: 'Rosaceae',
        habitat: 'Woodlands',
        actions: ['Uterine Tonic', 'Astringent', 'Nutritive'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Ruber', meaning: 'Red' },
            { word: 'Idaeus', meaning: 'Of Mount Ida' }
        ],
        etymology: "Named 'Idaeus' because it grew in abundance on Mount Ida in Crete, the mythological nurse-maid mountain of Zeus. The leaves are the supreme tonic for the uterus (the 'womb' of the mountain).",
        commonNameHint: "Tones the womb.",
        image: 'https://source.unsplash.com/featured/?raspberry-leaf'
    },
    {
        id: 'meadowsweet',
        commonName: 'Meadowsweet',
        commonName_FR: 'Reine-des-prés',
        commonName_ES: 'Reina de los prados',
        latinName: 'Filipendula ulmaria',
        family: 'Rosaceae',
        habitat: 'Wetlands',
        actions: ['Antacid', 'Anti-inflammatory', 'Stomachic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Filum-Pendula', meaning: 'Thread-Hanging' },
            { word: 'Ulmaria', meaning: 'Elm-like' }
        ],
        etymology: "'Filipendula' describes the root tubers that hang together by threads. 'Ulmaria' means the leaves look like those of the Elm tree. It contains salicylic acid (aspirin) but protects the stomach lining.",
        commonNameHint: "Natural safe aspirin. Queen of the Meadow.",
        image: 'https://source.unsplash.com/featured/?meadowsweet'
    },
    {
        id: 'agrimony',
        commonName: 'Agrimony',
        commonName_FR: 'Aigremoine',
        commonName_ES: 'Agrimonia',
        latinName: 'Agrimonia eupatoria',
        family: 'Rosaceae',
        habitat: 'Fields',
        actions: ['Astringent', 'Vulnerary', 'Hepatic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Argemone', meaning: 'Eye-healer' },
            { word: 'Eupatoria', meaning: 'Mithridates Eupator (King)' }
        ],
        etymology: "Like Boneset, this species is named for King Mithridates Eupator, a famous toxicologist/herbalist king. It is used for 'tension held in the body'—people who smile while suffering.",
        commonNameHint: "Yellow spikes. For hiding torture with a smile.",
        image: 'https://source.unsplash.com/featured/?agrimony'
    },
    {
        id: 'ladysmantle',
        commonName: 'Lady\'s Mantle',
        commonName_FR: 'Alchémille',
        commonName_ES: 'Alquimila',
        latinName: 'Alchemilla vulgaris',
        family: 'Rosaceae',
        habitat: 'Gardens',
        actions: ['Astringent', 'Styptic', 'Emmenagogue'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Alchemilla', meaning: 'Little Alchemist' },
            { word: 'Vulgaris', meaning: 'Common' }
        ],
        etymology: "The 'Little Alchemist.' The pleated leaves are hydrophobic, catching dew/rain in a perfect sparkling pearl in the center. Alchemists believed this water was the purest solvent for turning metal to gold.",
        commonNameHint: "Catches dew like pearls. Woman's herb.",
        image: 'https://source.unsplash.com/featured/?alchemilla'
    },
    {
        id: 'blackberry',
        commonName: 'Blackberry Root',
        commonName_FR: 'Mûre',
        commonName_ES: 'Zarzamora',
        latinName: 'Rubus fruticosus',
        family: 'Rosaceae',
        habitat: 'Woodlands',
        actions: ['Astringent', 'Antidiarrheal', 'Tonic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Ruber', meaning: 'Red' },
            { word: 'Fruticosus', meaning: 'Bushy/Shrubby' }
        ],
        etymology: "While the fruit is black, the genus 'Rubus' (Red) refers to the juice. 'Fruticosus' simply means it grows as a dense bush. The root is so astringent it 'puckers' the gut to stop diarrhea.",
        commonNameHint: "Thorny canes. Root stops 'the runs'.",
        image: 'https://source.unsplash.com/featured/?blackberry,plant'
    },
    {
        id: 'cherrybark',
        commonName: 'Wild Cherry Bark',
        commonName_FR: 'Cerisier sauvage',
        commonName_ES: 'Cerezo silvestre',
        latinName: 'Prunus serotina',
        family: 'Rosaceae',
        habitat: 'Woodlands',
        actions: ['Antitussive', 'Sedative', 'Astringent'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Prunus', meaning: 'Plum/Cherry' },
            { word: 'Serotina', meaning: 'Late-blooming' }
        ],
        etymology: "'Serotina' means 'late,' as this cherry blooms and fruits later than other species. The bark contains cyanogenic glycosides—smelling of bitter almonds—which sedate the cough reflex.",
        commonNameHint: "Almond scent. Quiets the 'hot' cough.",
        image: 'https://source.unsplash.com/featured/?prunus-serotina'
    },
    {
        id: 'peach',
        commonName: 'Peach Leaf',
        commonName_FR: 'Pêcher',
        commonName_ES: 'Melocotonero',
        latinName: 'Prunus persica',
        family: 'Rosaceae',
        habitat: 'Gardens',
        actions: ['Demulcent', 'Sedative', 'Cooling'],
        energetics: { temperature: 'Cold', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Prunus', meaning: 'Plum/Stone Fruit' },
            { word: 'Persica', meaning: 'Persian' }
        ],
        etymology: "The Romans called the peach 'Malum persicum' (Persian Apple), believing it originated in Persia (Iran), though it actually came from China. The leaves are a supreme cooling remedy for heat.",
        commonNameHint: "Cooling relief for hot itch.",
        image: 'https://source.unsplash.com/featured/?peach,leaves'
    },

    // =========================================================================
    // THE SOLANACEAE CLAN (NIGHTSHADES)
    // Trait: Star flowers, alkaloids. Magic & Poison.
    // =========================================================================
    {
        id: 'ashwagandha',
        commonName: 'Ashwagandha',
        commonName_FR: 'Ashwagandha',
        commonName_ES: 'Ashwagandha',
        latinName: 'Withania somnifera',
        family: 'Solanaceae',
        habitat: 'Tropical',
        actions: ['Adaptogen', 'Sedative', 'Tonic'],
        energetics: { temperature: 'Warm', moisture: 'Moist', element: 'Earth' },
        latinBreakdown: [
            { word: 'Withania', meaning: 'Honor of H. Witham' },
            { word: 'Somnifera', meaning: 'Sleep-bringing' }
        ],
        etymology: "While the Latin 'Somnifera' refers to its ability to induce sleep, the common name 'Ashwagandha' is Sanskrit for 'Smell of the Horse'—implying it gives you the stamina and vitality of a stallion.",
        commonNameHint: "Smell of the Horse. Stamina root.",
        image: 'https://source.unsplash.com/featured/?ashwagandha'
    },
    {
        id: 'cayenne',
        commonName: 'Cayenne',
        commonName_FR: 'Piment de Cayenne',
        commonName_ES: 'Pimienta de Cayena',
        latinName: 'Capsicum annuum',
        family: 'Solanaceae',
        habitat: 'Tropical',
        actions: ['Stimulant', 'Rubefacient', 'Sialagogue'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Kapto', meaning: 'To bite/swallow' },
            { word: 'Annuus', meaning: 'Annual' }
        ],
        etymology: "From the Greek 'Kapto' (to bite), referring to the pungent heat that bites the tongue. It moves blood rapidly, used to shock the system back to life or warm cold extremities.",
        commonNameHint: "Red fire. Stops heart attacks.",
        image: 'https://source.unsplash.com/featured/?cayenne'
    },
    {
        id: 'belladonna',
        commonName: 'Deadly Nightshade',
        commonName_FR: 'Belladone',
        commonName_ES: 'Belladona',
        latinName: 'Atropa belladonna',
        family: 'Solanaceae',
        habitat: 'Woodlands',
        actions: ['Anticholinergic', 'Narcotic', 'POISON'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Saturn' },
        latinBreakdown: [
            { word: 'Atropos', meaning: 'Fate who cuts the thread' },
            { word: 'Bella-Donna', meaning: 'Beautiful Lady' }
        ],
        etymology: "A name of contrasts. 'Atropa' is the Greek Fate who cuts the thread of life (Death). 'Belladonna' (Beautiful Lady) refers to Italian women using the berry juice to dilate their pupils for beauty.",
        commonNameHint: "Dilates pupils, ends lives.",
        image: 'https://source.unsplash.com/featured/?atropa-belladonna'
    },
    {
        id: 'datura',
        commonName: 'Datura',
        commonName_FR: 'Datura',
        commonName_ES: 'Estramonio',
        latinName: 'Datura stramonium',
        family: 'Solanaceae',
        habitat: 'Fields',
        actions: ['Deliriant', 'Antispasmodic', 'POISON'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Saturn' },
        latinBreakdown: [
            { word: 'Dhatura', meaning: 'Thorn Apple (Sanskrit)' },
            { word: 'Stramonium', meaning: 'Stinkweed' }
        ],
        etymology: "Known as the 'Devil's Trumpet.' 'Dhatura' describes the spiky seed pods. 'Stramonium' refers to the foul odor of the leaves. A plant of dark shamanic history, causing delirium.",
        commonNameHint: "Moonflower. Hallucinogenic trumpet.",
        image: 'https://source.unsplash.com/featured/?datura'
    },
    {
        id: 'tobacco',
        commonName: 'Tobacco',
        commonName_FR: 'Tabac',
        commonName_ES: 'Tabaco',
        latinName: 'Nicotiana tabacum',
        family: 'Solanaceae',
        habitat: 'Tropical',
        actions: ['Stimulant', 'Emetic', 'Insecticide'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Nicotiana', meaning: 'Jean Nicot (Diplomat)' },
            { word: 'Tabacum', meaning: 'Pipe/Tobacco' }
        ],
        etymology: "Named after Jean Nicot, the French ambassador to Portugal who sent seeds to Paris in 1560. He promoted it as a medicinal panacea, unknowingly introducing one of the world's most addictive substances.",
        commonNameHint: "Sacred offering, addictive vice.",
        image: 'https://source.unsplash.com/featured/?tobacco,plant'
    },
    {
        id: 'mandrake',
        commonName: 'Mandrake',
        commonName_FR: 'Mandragore',
        commonName_ES: 'Mandrágora',
        latinName: 'Mandragora officinarum',
        family: 'Solanaceae',
        habitat: 'Mediterranean',
        actions: ['Narcotic', 'Hypnotic', 'POISON'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Mandragora', meaning: 'Man-dragon/Stallion' },
            { word: 'Officinarum', meaning: 'Of the Workshop' }
        ],
        etymology: "The most magical plant in history. The root frequently bifurcates to look like human legs. Legend says it screams when pulled from the earth, killing the harvester.",
        commonNameHint: "Screaming root. Human shaped.",
        image: 'https://source.unsplash.com/featured/?mandrake,root'
    },
    {
        id: 'henbane',
        commonName: 'Henbane',
        commonName_FR: 'Jusquiame',
        commonName_ES: 'Beleño',
        latinName: 'Hyoscyamus niger',
        family: 'Solanaceae',
        habitat: 'Fields',
        actions: ['Sedative', 'Antispasmodic', 'POISON'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Saturn' },
        latinBreakdown: [
            { word: 'Hyo-kyamos', meaning: 'Hog-bean' },
            { word: 'Niger', meaning: 'Black' }
        ],
        etymology: "'Hog Bean.' It was observed that pigs could eat this toxic plant without dying, but it would kill chickens (hence 'Hen-bane'). 'Niger' refers to the dark purple veins in the flowers.",
        commonNameHint: "Sticky, stinking. Witch's flight.",
        image: 'https://source.unsplash.com/featured/?henbane'
    },
    {
        id: 'goji',
        commonName: 'Goji / Wolfberry',
        commonName_FR: 'Baies de Goji',
        commonName_ES: 'Bayas de Goji',
        latinName: 'Lycium barbarum',
        family: 'Solanaceae',
        habitat: 'Mountains',
        actions: ['Nutritive', 'Antioxidant', 'Hepatic'],
        energetics: { temperature: 'Neutral', moisture: 'Moist', element: 'Wood' },
        latinBreakdown: [
            { word: 'Lycos', meaning: 'Wolf' },
            { word: 'Barbarum', meaning: 'Foreign/Barbarian' }
        ],
        etymology: "Greek 'Lycos' (Wolf). Why? perhaps because it grows wild in remote gorges. 'Barbarum' suggests it came from outside the Greco-Roman world (Asia). A sweet, tonic member of a deadly family.",
        commonNameHint: "Red raisins of immortality.",
        image: 'https://source.unsplash.com/featured/?goji'
    },

    // =========================================================================
    // THE FABACEAE CLAN (PEAS & LEGUMES)
    // Trait: Pods, Nitrogen fixers.
    // =========================================================================
    {
        id: 'licorice',
        commonName: 'Licorice',
        commonName_FR: 'Réglisse',
        commonName_ES: 'Regaliz',
        latinName: 'Glycyrrhiza glabra',
        family: 'Fabaceae',
        habitat: 'Mediterranean',
        actions: ['Demulcent', 'Adaptogen', 'Antiviral'],
        energetics: { temperature: 'Neutral', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Glykys-Rhiza', meaning: 'Sweet-Root' },
            { word: 'Glabra', meaning: 'Smooth/Hairless' }
        ],
        etymology: "'Glycyrrhiza' is literally 'Sweet Root.' It contains glycyrrhizin, a compound 50 times sweeter than sugar. 'Glabra' means the pods are smooth, not hairy.",
        commonNameHint: "Sweet Root. Soothes everything.",
        image: 'https://source.unsplash.com/featured/?licorice,plant'
    },
    {
        id: 'redclover',
        commonName: 'Red Clover',
        commonName_FR: 'Trèfle rouge',
        commonName_ES: 'Trébol rojo',
        latinName: 'Trifolium pratense',
        family: 'Fabaceae',
        habitat: 'Fields',
        actions: ['Alterative', 'Phytoestrogen', 'Antispasmodic'],
        energetics: { temperature: 'Cool', moisture: 'Neutral', element: 'Earth' },
        latinBreakdown: [
            { word: 'Tri-folium', meaning: 'Three-leaves' },
            { word: 'Pratense', meaning: 'Of the Meadow' }
        ],
        etymology: "The generic 'Trifolium' describes the iconic three-leaf cluster (shamrock style). 'Pratense' tells you its habitat: it belongs in the open meadows.",
        commonNameHint: "Pink pom-poms. Menopause ally.",
        image: 'https://source.unsplash.com/featured/?red-clover'
    },
    {
        id: 'astragalus',
        commonName: 'Astragalus',
        commonName_FR: 'Astragale',
        commonName_ES: 'Astrágalo',
        latinName: 'Astragalus membranaceus',
        family: 'Fabaceae',
        habitat: 'Mountains',
        actions: ['Adaptogen', 'Immunomodulator', 'Cardiotonic'],
        energetics: { temperature: 'Warm', moisture: 'Moist', element: 'Earth' },
        latinBreakdown: [
            { word: 'Astragalos', meaning: 'Ankle Bone / Dice' },
            { word: 'Membranaceus', meaning: 'Membranous (Root skin)' }
        ],
        etymology: "The root shape resembled the 'astragalus' (ankle bone) of a sheep, which ancients used as dice for gaming. The 'Yellow Leader' of Chinese medicine.",
        commonNameHint: "Yellow Leader. Deep immunity.",
        image: 'https://source.unsplash.com/featured/?astragalus,root'
    },
    {
        id: 'fenugreek',
        commonName: 'Fenugreek',
        commonName_FR: 'Fenugrec',
        commonName_ES: 'Fenogreco',
        latinName: 'Trigonella foenum-graecum',
        family: 'Fabaceae',
        habitat: 'Mediterranean',
        actions: ['Galactagogue', 'Hypoglycemic', 'Demulcent'],
        energetics: { temperature: 'Warm', moisture: 'Moist', element: 'Air' },
        latinBreakdown: [
            { word: 'Trigonella', meaning: 'Little Triangle' },
            { word: 'Foenum-graecum', meaning: 'Greek Hay' }
        ],
        etymology: "The Romans called it 'Greek Hay' (Foenum-graecum) because it was a common fodder crop in Greece. 'Trigonella' refers to the triangular shape of the small flowers.",
        commonNameHint: "Maple syrup smell. Milk maker.",
        image: 'https://source.unsplash.com/featured/?fenugreek'
    },
    {
        id: 'mimosa',
        commonName: 'Mimosa',
        commonName_FR: 'Arbre à soie',
        commonName_ES: 'Acacia de Constantinopla',
        latinName: 'Albizia julibrissin',
        family: 'Fabaceae',
        habitat: 'Tropical',
        actions: ['Nervine', 'Antidepressant', 'Sedative'],
        energetics: { temperature: 'Neutral', moisture: 'Neutral', element: 'Air' },
        latinBreakdown: [
            { word: 'Albizi', meaning: 'Filippo degli Albizzi (Nobleman)' },
            { word: 'Gul-i abrisham', meaning: 'Silk Flower (Persian)' }
        ],
        etymology: "Named after the Italian nobleman who brought it to Europe. 'Julibrissin' is a corruption of the Persian 'Gul-i abrisham' meaning 'Silk Flower,' describing its pink, thread-like blooms.",
        commonNameHint: "Tree of Happiness. Pink powder-puffs.",
        image: 'https://source.unsplash.com/featured/?albizia'
    },
    {
        id: 'senna',
        commonName: 'Senna',
        commonName_FR: 'Séné',
        commonName_ES: 'Sen',
        latinName: 'Senna alexandrina',
        family: 'Fabaceae',
        habitat: 'Tropical',
        actions: ['Cathartic', 'Laxative'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Sana', meaning: 'To heal (Arabic)' },
            { word: 'Alexandrina', meaning: 'Of Alexandria (Egypt)' }
        ],
        etymology: "Derived from the Arabic 'Sana.' 'Alexandrina' points to the ancient port of Alexandria, the trade hub where this powerful laxative was shipped to Europe.",
        commonNameHint: "Powerful bowel mover.",
        image: 'https://source.unsplash.com/featured/?senna'
    },
    {
        id: 'kudzu',
        commonName: 'Kudzu',
        commonName_FR: 'Kudzu',
        commonName_ES: 'Kudzu',
        latinName: 'Pueraria montana',
        family: 'Fabaceae',
        habitat: 'Fields',
        actions: ['Antispasmodic', 'Febrifuge', 'Relaxant'],
        energetics: { temperature: 'Cool', moisture: 'Neutral', element: 'Wood' },
        latinBreakdown: [
            { word: 'Puerarius', meaning: 'Relating to youth' },
            { word: 'Montana', meaning: 'Of the Mountain' }
        ],
        etymology: "While known as the invasive vine, the Latin 'Pueraria' is related to 'puer' (boy/child), hinting at its use in staying youthful or treating children's fevers in Traditional Chinese Medicine.",
        commonNameHint: "Vine that ate the South. Stiffness.",
        image: 'https://source.unsplash.com/featured/?kudzu'
    },

    // =========================================================================
    // THE ROOT WORKERS & SPICES
    // =========================================================================
    {
        id: 'ginger',
        commonName: 'Ginger',
        commonName_FR: 'Gingembre',
        commonName_ES: 'Jengibre',
        latinName: 'Zingiber officinale',
        family: 'Zingiberaceae',
        habitat: 'Tropical',
        actions: ['Stimulant', 'Carminative', 'Antiemetic'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Sringavera', meaning: 'Horn-root (Sanskrit)' },
            { word: 'Officinale', meaning: 'Of the Pharmacy' }
        ],
        etymology: "The name traveled from Sanskrit 'Sringavera' (Horn Body) to Greek 'Zingiberis'. It perfectly describes the knobby, antler-like shape of the rhizome.",
        commonNameHint: "Antler root. Warms core.",
        image: 'https://source.unsplash.com/featured/?ginger'
    },
    {
        id: 'turmeric',
        commonName: 'Turmeric',
        commonName_FR: 'Curcuma',
        commonName_ES: 'Cúrcuma',
        latinName: 'Curcuma longa',
        family: 'Zingiberaceae',
        habitat: 'Tropical',
        actions: ['Anti-inflammatory', 'Hepatic', 'Antioxidant'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Kurkum', meaning: 'Saffron (Arabic)' },
            { word: 'Longa', meaning: 'Long' }
        ],
        etymology: "Called 'Kurkum' in Arabic because its yellow color resembled Saffron. 'Longa' distinguishes this species by its long, finger-like rhizomes compared to rounder varieties.",
        commonNameHint: "Golden Goddess. Stains yellow.",
        image: 'https://source.unsplash.com/featured/?turmeric'
    },
    {
        id: 'cardamom',
        commonName: 'Cardamom',
        commonName_FR: 'Cardamome',
        commonName_ES: 'Cardamomo',
        latinName: 'Elettaria cardamomum',
        family: 'Zingiberaceae',
        habitat: 'Tropical',
        actions: ['Carminative', 'Expectorant', 'Stimulant'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Elettari', meaning: 'Cardamom seeds (Dravidian)' },
            { word: 'Kardamon', meaning: 'Spice plant' }
        ],
        etymology: "Queen of Spices. The name derives from the root words in Tamil and Sanskrit for the specific, highly valued seed pods grown in the Cardamom Hills of India.",
        commonNameHint: "Queen of Spices. Green pods.",
        image: 'https://source.unsplash.com/featured/?cardamom'
    },
    {
        id: 'cinnamon',
        commonName: 'Cinnamon',
        commonName_FR: 'Cannelle',
        commonName_ES: 'Canela',
        latinName: 'Cinnamomum verum',
        family: 'Lauraceae',
        habitat: 'Tropical',
        actions: ['Astringent', 'Carminative', 'Hypoglycemic'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Kinnamon', meaning: 'Tube / Pipe' },
            { word: 'Verum', meaning: 'True' }
        ],
        etymology: "'Kinnamon' likely refers to the way the bark curls into a tube or pipe when dried. 'Verum' (True) distinguishes Ceylon Cinnamon from the cheaper Cassia variety.",
        commonNameHint: "Bark quills. Blood sugar stabilizer.",
        image: 'https://source.unsplash.com/featured/?cinnamon'
    },
    {
        id: 'calamus',
        commonName: 'Calamus',
        commonName_FR: 'Acore odorant',
        commonName_ES: 'Cálamo aromático',
        latinName: 'Acorus calamus',
        family: 'Acoraceae',
        habitat: 'Wetlands',
        actions: ['Nootropic', 'Carminative', 'Bitter'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Acoron', meaning: 'Plant with Iris-like leaves' },
            { word: 'Kalamos', meaning: 'Reed/Cane' }
        ],
        etymology: "From the Greek myth of Kalamos, a young man who turned into a reed to mourn his lover. The plant grows like a reed in water but smells sweet.",
        commonNameHint: "Sweet Sedge. Sharpens the voice.",
        image: 'https://source.unsplash.com/featured/?acorus-calamus'
    },
    {
        id: 'garlic',
        commonName: 'Garlic',
        commonName_FR: 'Ail',
        commonName_ES: 'Ajo',
        latinName: 'Allium sativum',
        family: 'Amaryllidaceae',
        habitat: 'Gardens',
        actions: ['Antimicrobial', 'Hypotensive', 'Expectorant'],
        energetics: { temperature: 'Hot', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Allium', meaning: 'To burn (Celtic)' },
            { word: 'Sativum', meaning: 'Cultivated' }
        ],
        etymology: "The name 'Allium' comes from the Celtic 'all' meaning 'burning/hot,' describing the taste. It is one of the oldest 'Sativum' (cultivated) crops in human history.",
        commonNameHint: "Stinking Rose. Wards off vampires.",
        image: 'https://source.unsplash.com/featured/?garlic'
    },

    // =========================================================================
    // TREES AND SHRUBS
    // =========================================================================
    {
        id: 'elderberry',
        commonName: 'Elder',
        commonName_FR: 'Baies de sureau',
        commonName_ES: 'Bayas de saúco',
        latinName: 'Sambucus nigra',
        family: 'Adoxaceae',
        habitat: 'Woodlands',
        actions: ['Antiviral', 'Diaphoretic', 'Diuretic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Sambuca', meaning: 'Flute/Wind Instrument' },
            { word: 'Nigra', meaning: 'Black' }
        ],
        etymology: "The stems have a soft pith that can be easily hollowed out to make flutes ('Sambuca'). 'Nigra' refers to the deep purple-black berries.",
        commonNameHint: "Old Lady of woods. Flu remedy.",
        image: 'https://source.unsplash.com/featured/?elderberry'
    },
    {
        id: 'willow',
        commonName: 'White Willow',
        commonName_FR: 'Saule',
        commonName_ES: 'Sauce',
        latinName: 'Salix alba',
        family: 'Salicaceae',
        habitat: 'Wetlands',
        actions: ['Analgesic', 'Anti-inflammatory', 'Febrifuge'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Salix', meaning: 'To leap / Spring' },
            { word: 'Alba', meaning: 'White' }
        ],
        etymology: "'Salix' refers to the rapid growth of the tree ('leaping' up). 'Alba' describes the white underside of the leaves. The bark contains salicin, the chemical parent of aspirin.",
        commonNameHint: "Nature's Aspirin. Weeps.",
        image: 'https://source.unsplash.com/featured/?willow,tree'
    },
    {
        id: 'poplar',
        commonName: 'Poplar / Cottonwood',
        commonName_FR: 'Peuplier',
        commonName_ES: 'Álamo',
        latinName: 'Populus spp.',
        family: 'Salicaceae',
        habitat: 'Wetlands',
        actions: ['Analgesic', 'Vulnerary', 'Expectorant'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Populus', meaning: 'The People' },
            { word: 'Spp.', meaning: 'Species' }
        ],
        etymology: "The 'Tree of the People' (Arbor Populi). It was planted in public squares in Rome. The buds produce a sticky, pain-relieving resin known as the 'Balm of Gilead'.",
        commonNameHint: "Balm of Gilead. Sticky buds.",
        image: 'https://source.unsplash.com/featured/?cottonwood'
    },
    {
        id: 'linden',
        commonName: 'Linden',
        commonName_FR: 'Tilleul',
        commonName_ES: 'Tilo',
        latinName: 'Tilia europaea',
        family: 'Malvaceae',
        habitat: 'Woodlands',
        actions: ['Nervine', 'Demulcent', 'Diaphoretic'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Air' },
        latinBreakdown: [
            { word: 'Tilia', meaning: 'Broad' },
            { word: 'Europaea', meaning: 'European' }
        ],
        etymology: "The 'Lime Tree' (no relation to the fruit). The heart-shaped leaves and intoxicatingly sweet flowers make it a supreme remedy for the heart and nerves.",
        commonNameHint: "Heart-shaped leaves. Gentle tea.",
        image: 'https://source.unsplash.com/featured/?linden'
    },
    {
        id: 'ginkgo',
        commonName: 'Ginkgo',
        commonName_FR: 'Ginkgo',
        commonName_ES: 'Ginkgo',
        latinName: 'Ginkgo biloba',
        family: 'Ginkgoaceae',
        habitat: 'Gardens',
        actions: ['Nootropic', 'Circulatory Stimulant', 'Vasodilator'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Gin-Kyo', meaning: 'Silver Apricot (Japanese)' },
            { word: 'Bi-loba', meaning: 'Two-lobed' }
        ],
        etymology: "A living fossil. 'Gin-Kyo' refers to the fruit which looks like a silver apricot. 'Biloba' describes the unique split (two lobes) in the fan-shaped leaf.",
        commonNameHint: "Living Fossil. Fan leaves.",
        image: 'https://source.unsplash.com/featured/?ginkgo'
    },
    {
        id: 'oak',
        commonName: 'White Oak',
        commonName_FR: 'Chêne blanc',
        commonName_ES: 'Roble blanco',
        latinName: 'Quercus alba',
        family: 'Fagaceae',
        habitat: 'Woodlands',
        actions: ['Astringent', 'Hemostatic', 'Antiseptic'],
        energetics: { temperature: 'Neutral', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Quer-Cuez', meaning: 'Fine Tree (Celtic)' },
            { word: 'Alba', meaning: 'White' }
        ],
        etymology: "The 'Fine Tree.' Sacred to Druids and Zeus/Jupiter. The bark is incredibly astringent (drying), used to tan leather and 'tan' human tissue (tighten wounds).",
        commonNameHint: "King of Trees. Acorns.",
        image: 'https://source.unsplash.com/featured/?white-oak'
    },
    {
        id: 'witchhazel',
        commonName: 'Witch Hazel',
        commonName_FR: 'Hamamélis',
        commonName_ES: 'Hamamelis',
        latinName: 'Hamamelis virginiana',
        family: 'Hamamelidaceae',
        habitat: 'Woodlands',
        actions: ['Astringent', 'Anti-inflammatory', 'Hemostatic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Hama-Melis', meaning: 'Together-with-Apple' },
            { word: 'Virginiana', meaning: 'Of Virginia' }
        ],
        etymology: "Strange name: 'Together with fruit.' It blooms in late autumn/winter at the same time last year's fruit is maturing. The common name 'Witch' comes from 'Wych' (pliable), used for dowsing rods.",
        commonNameHint: "Winter blooms. Varicose veins.",
        image: 'https://source.unsplash.com/featured/?witch-hazel'
    },
    {
        id: 'slipperyelm',
        commonName: 'Slippery Elm',
        commonName_FR: 'Orme rouge',
        commonName_ES: 'Olmo resbaladizo',
        latinName: 'Ulmus rubra',
        family: 'Ulmaceae',
        habitat: 'Woodlands',
        actions: ['Demulcent', 'Emollient', 'Nutritive'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Ulmus', meaning: 'Elm' },
            { word: 'Rubra', meaning: 'Red' }
        ],
        etymology: "'Rubra' refers to the reddish heartwood. The inner bark becomes a nutritious, slippery slime when mixed with water, used to feed the sick who couldn't keep food down.",
        commonNameHint: "Healing slime bark. Endangered.",
        image: 'https://source.unsplash.com/featured/?slippery-elm'
    },
    {
        id: 'juniper',
        commonName: 'Juniper',
        commonName_FR: 'Genévrier',
        commonName_ES: 'Enebro',
        latinName: 'Juniperus communis',
        family: 'Cupressaceae',
        habitat: 'Mountains',
        actions: ['Diuretic', 'Antiseptic', 'Carminative'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Juniperus', meaning: 'Youth-producing' },
            { word: 'Communis', meaning: 'Common' }
        ],
        etymology: "From Latin 'Junior' (Younger) + 'Parere' (To produce). The evergreen nature suggested the tree never aged, or 'produced youth.' The berries give Gin its flavor.",
        commonNameHint: "Gin flavor. Blue berries.",
        image: 'https://source.unsplash.com/featured/?juniper'
    },
    {
        id: 'pine',
        commonName: 'Pine',
        commonName_FR: 'Pin',
        commonName_ES: 'Pino',
        latinName: 'Pinus spp.',
        family: 'Pinaceae',
        habitat: 'Woodlands',
        actions: ['Expectorant', 'Antiseptic', 'Rubefacient'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Pinus', meaning: 'Pine/Resin-tree' },
            { word: 'Spp.', meaning: 'Species' }
        ],
        etymology: "The classic resinous tree. Needles are high in Vitamin C; the pitch (resin) is a potent antiseptic glue used by ancients to seal wounds and ships alike.",
        commonNameHint: "Vitamin C needles. Resin.",
        image: 'https://source.unsplash.com/featured/?pine'
    },
    {
        id: 'teatree',
        commonName: 'Tea Tree',
        commonName_FR: 'Arbre à thé',
        commonName_ES: 'Árbol del té',
        latinName: 'Melaleuca alternifolia',
        family: 'Myrtaceae',
        habitat: 'Wetlands',
        actions: ['Antifungal', 'Antiseptic', 'Antiviral'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Melas-Leukos', meaning: 'Black-White' },
            { word: 'Alterni-folia', meaning: 'Alternating leaves' }
        ],
        etymology: "'Black-White' refers to the black trunk and white branches/flowers. Captain Cook brewed the leaves into a tea, hence 'Tea Tree', but it's an intense antifungal topical.",
        commonNameHint: "Australian Swamp Scrub.",
        image: 'https://source.unsplash.com/featured/?tea-tree'
    },

    // =========================================================================
    // RANUNCULACEAE & PAPAVERACEAE (Buttercups & Poppies)
    // =========================================================================
    {
        id: 'blackcohosh',
        commonName: 'Black Cohosh',
        commonName_FR: 'Actée à grappes',
        commonName_ES: 'Cimicífuga',
        latinName: 'Actaea racemosa',
        family: 'Ranunculaceae',
        habitat: 'Woodlands',
        actions: ['Antispasmodic', 'Emmenagogue', 'Nervine'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Actaea', meaning: 'Elder-like' },
            { word: 'Racemosa', meaning: 'Clusters' }
        ],
        etymology: "The leaves look like Elder ('Actaea'). 'Racemosa' describes the white flowers growing in a raceme (spike). 'Cohosh' is an Algonquian word meaning 'rough,' referring to the gnarly black root.",
        commonNameHint: "Black Snakeroot. Menopause gloom.",
        image: 'https://source.unsplash.com/featured/?black-cohosh'
    },
    {
        id: 'goldenseal',
        commonName: 'Goldenseal',
        commonName_FR: 'Hydraste',
        commonName_ES: 'Sello de oro',
        latinName: 'Hydrastis canadensis',
        family: 'Ranunculaceae',
        habitat: 'Woodlands',
        actions: ['Antimicrobial', 'Bitter', 'Alterative'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Hydrastis', meaning: 'Water-acting' },
            { word: 'Canadensis', meaning: 'Of Canada' }
        ],
        etymology: "The 'Golden' seal refers to the bright yellow scars left on the rootstock which look like wax seals. 'Hydrastis' implies it drives water, used for boggy, infected mucous membranes.",
        commonNameHint: "Yellow root. Mucous membrane king.",
        image: 'https://source.unsplash.com/featured/?goldenseal'
    },
    {
        id: 'poppy',
        commonName: 'California Poppy',
        commonName_FR: 'Pavot de Californie',
        commonName_ES: 'Amapola de California',
        latinName: 'Eschscholzia californica',
        family: 'Papaveraceae',
        habitat: 'Fields',
        actions: ['Sedative', 'Anodyne', 'Nervine'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Eschscholtz', meaning: 'J.F. von Eschscholtz (Botanist)' },
            { word: 'Californica', meaning: 'Of California' }
        ],
        etymology: "A tongue-twister name honoring a Baltic German botanist. Unlike its opium cousin, this 'Golden Cup' provides gentle sedation without addiction.",
        commonNameHint: "Golden cup. Safe sedative.",
        image: 'https://source.unsplash.com/featured/?california-poppy'
    },
    {
        id: 'opiumpoppy',
        commonName: 'Opium Poppy',
        commonName_FR: 'Pavot somnifère',
        commonName_ES: 'Adormidera',
        latinName: 'Papaver somniferum',
        family: 'Papaveraceae',
        habitat: 'Gardens',
        actions: ['Narcotic', 'Sedative', 'Anodyne'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Water' },
        latinBreakdown: [
            { word: 'Pappa', meaning: 'Milk/Porridge' },
            { word: 'Somniferum', meaning: 'Sleep-bringing' }
        ],
        etymology: "'Pappa' refers to the milky white latex that bleeds from the cut pod, which ancient fathers mixed into children's food to make them sleep ('Somniferum'). Source of morphine.",
        commonNameHint: "Milky latex. Morphine source.",
        image: 'https://source.unsplash.com/featured/?papaver-somniferum'
    },
    {
        id: 'celandine',
        commonName: 'Greater Celandine',
        commonName_FR: 'Grande chélidoine',
        commonName_ES: 'Celidonia mayor',
        latinName: 'Chelidonium majus',
        family: 'Papaveraceae',
        habitat: 'Fields',
        actions: ['Choleretic', 'Antiwart', 'Bitter'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Fire' },
        latinBreakdown: [
            { word: 'Chelidon', meaning: 'Swallow (Bird)' },
            { word: 'Majus', meaning: 'Greater' }
        ],
        etymology: "The 'Swallow Wort.' Folklore said it bloomed when swallows arrived and withered when they left. The bright orange latex looks like bile, signaling its use for the liver.",
        commonNameHint: "Orange sap. Dissolves warts.",
        image: 'https://source.unsplash.com/featured/?chelidonium-majus'
    },
    {
        id: 'fumitory',
        commonName: 'Fumitory',
        commonName_FR: 'Fumeterre',
        commonName_ES: 'Fumaria',
        latinName: 'Fumaria officinalis',
        family: 'Papaveraceae',
        habitat: 'Fields',
        actions: ['Alterative', 'Diuretic', 'Hepatic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Fumus', meaning: 'Smoke' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "'Earth Smoke.' The greyish leaves look like smoke rising from the ground. It was anciently used to clear the 'smoke' (toxins) from the eyes and the liver.",
        commonNameHint: "Earth Smoke. Skin cleanser.",
        image: 'https://source.unsplash.com/featured/?fumaria'
    },

    // =========================================================================
    // THE OTHERS (UNIQUE FAMILIES & FUNGI)
    // =========================================================================
    {
        id: 'nettle',
        commonName: 'Stinging Nettle',
        commonName_FR: 'Ortie',
        commonName_ES: 'Ortiga',
        latinName: 'Urtica dioica',
        family: 'Urticaceae',
        habitat: 'Fields',
        actions: ['Nutritive', 'Alterative', 'Antiallergic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Mars' },
        latinBreakdown: [
            { word: 'Uro', meaning: 'To burn' },
            { word: 'Di-oica', meaning: 'Two Houses (Male/Female separate)' }
        ],
        etymology: "From 'Uro' (to burn), describing the sting of the formic acid in its hairs. 'Dioica' means male and female flowers live in 'two different houses' (separate plants).",
        commonNameHint: "Touch creates fire. Iron builder.",
        image: 'https://source.unsplash.com/featured/?stinging-nettle'
    },
    {
        id: 'horsetail',
        commonName: 'Horsetail',
        commonName_FR: 'Prêle',
        commonName_ES: 'Cola de caballo',
        latinName: 'Equisetum arvense',
        family: 'Equisetaceae',
        habitat: 'Wetlands',
        actions: ['Diuretic', 'Astringent', 'Vulnerary'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Saturn' },
        latinBreakdown: [
            { word: 'Equus-Seta', meaning: 'Horse-Bristle' },
            { word: 'Arvense', meaning: 'Of the Field' }
        ],
        etymology: "A living fossil from the dinosaur era. The jointed stems look like a horse's tail. High in silica, it was used to scour pots and pans ('Scouring Rush').",
        commonNameHint: "Living Fossil. High silica.",
        image: 'https://source.unsplash.com/featured/?equisetum'
    },
    {
        id: 'comfrey',
        commonName: 'Comfrey',
        commonName_FR: 'Consoude',
        commonName_ES: 'Consuelda',
        latinName: 'Symphytum officinale',
        family: 'Boraginaceae',
        habitat: 'Fields',
        actions: ['Vulnerary', 'Demulcent', 'Cell Proliferant'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Earth' },
        latinBreakdown: [
            { word: 'Symphyo', meaning: 'To grow together' },
            { word: 'Officinale', meaning: 'Of the Pharmacy' }
        ],
        etymology: "The 'Knitbone.' 'Symphyo' means 'to make grow together,' referring to its legendary ability to heal broken bones and wounds rapidly via cell proliferation.",
        commonNameHint: "Knit-Bone. Hairy leaves.",
        image: 'https://source.unsplash.com/featured/?comfrey'
    },
    {
        id: 'borage',
        commonName: 'Borage',
        commonName_FR: 'Bourrache',
        commonName_ES: 'Borraja',
        latinName: 'Borago officinalis',
        family: 'Boraginaceae',
        habitat: 'Gardens',
        actions: ['Adrenal Tonic', 'Demulcent', 'Galactagogue'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Air' },
        latinBreakdown: [
            { word: 'Corago', meaning: 'Courage' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "Thought to be a corruption of 'Corago' (I bring courage). Pliny said, 'Borage brings always courage.' The star-shaped blue flowers taste like cool cucumber.",
        commonNameHint: "Starflower. Cucumber taste.",
        image: 'https://source.unsplash.com/featured/?borage'
    },
    {
        id: 'plantain',
        commonName: 'Plantain',
        commonName_FR: 'Plantain',
        commonName_ES: 'Llantén',
        latinName: 'Plantago major',
        family: 'Plantaginaceae',
        habitat: 'Fields',
        actions: ['Vulnerary', 'Demulcent', 'Astringent'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Earth' },
        latinBreakdown: [
            { word: 'Planta', meaning: 'Sole of the foot' },
            { word: 'Major', meaning: 'Greater' }
        ],
        etymology: "Named for the 'Sole of the foot' because the leaves grow flat to the ground (and thrive being walked on). Known as 'White Man's Footprint' by Native Americans as it followed settlers.",
        commonNameHint: "Green Bandage. Bug bites.",
        image: 'https://source.unsplash.com/featured/?plantago-major'
    },
    {
        id: 'mullein',
        commonName: 'Mullein',
        commonName_FR: 'Bouillon-blanc',
        commonName_ES: 'Gordolobo',
        latinName: 'Verbascum thapsus',
        family: 'Scrophulariaceae',
        habitat: 'Fields',
        actions: ['Expectorant', 'Demulcent', 'Anodyne'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Air' },
        latinBreakdown: [
            { word: 'Barbascum', meaning: 'Bearded' },
            { word: 'Thapsus', meaning: 'From Thapsos (Ancient city)' }
        ],
        etymology: "Latin 'Barbascum' (Bearded) became Verbascum. It describes the fuzzy, velvet leaves. The tall yellow flower spike was dipped in tallow and used as a torch by Romans.",
        commonNameHint: "Velvet leaf. Lungs and earaches.",
        image: 'https://source.unsplash.com/featured/?mullein'
    },
    {
        id: 'aloevera',
        commonName: 'Aloe Vera',
        commonName_FR: 'Aloès',
        commonName_ES: 'Áloe vera',
        latinName: 'Aloe vera',
        family: 'Asphodelaceae',
        habitat: 'Tropical',
        actions: ['Vulnerary', 'Demulcent', 'Laxative'],
        energetics: { temperature: 'Cold', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Alloeh', meaning: 'Shining bitter substance (Arabic)' },
            { word: 'Vera', meaning: 'True' }
        ],
        etymology: "A 'True' specimen of the 'Bitter Shining' plant. The inner gel is healing, but the outer leaf skin contains a yellow latex that is a potent laxative.",
        commonNameHint: "Burn plant. Succulent gel.",
        image: 'https://source.unsplash.com/featured/?aloe-vera'
    },
    {
        id: 'marshmallow',
        commonName: 'Marshmallow',
        commonName_FR: 'Guimauve',
        commonName_ES: 'Malvavisco',
        latinName: 'Althaea officinalis',
        family: 'Malvaceae',
        habitat: 'Wetlands',
        actions: ['Demulcent', 'Emollient', 'Diuretic'],
        energetics: { temperature: 'Cool', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Althos', meaning: 'Healing' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "The 'Healer' of the 'Marsh.' The root is thick with mucilage (slime) that coats inflamed tissues. The original confection was made from this root, not gelatin.",
        commonNameHint: "Soft and slimy. Soothes gut.",
        image: 'https://source.unsplash.com/featured/?marshmallow-plant'
    },
    {
        id: 'valerian',
        commonName: 'Valerian',
        commonName_FR: 'Valériane',
        commonName_ES: 'Valeriana',
        latinName: 'Valeriana officinalis',
        family: 'Caprifoliaceae',
        habitat: 'Wetlands',
        actions: ['Sedative', 'Hypnotic', 'Antispasmodic'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Valere', meaning: 'To be strong/healthy' },
            { word: 'Officinalis', meaning: 'Of the Pharmacy' }
        ],
        etymology: "From 'Valere' (To be strong), referring to its potent smell and strong sedative effect. In medieval times, it was called 'All-Heal.'",
        commonNameHint: "Gym Socks smell. Knock-out drops.",
        image: 'https://source.unsplash.com/featured/?valerian'
    },
    {
        id: 'passiflora',
        commonName: 'Passionflower',
        commonName_FR: 'Passiflore',
        commonName_ES: 'Pasiflora',
        latinName: 'Passiflora incarnata',
        family: 'Passifloraceae',
        habitat: 'Tropical',
        actions: ['Nervine', 'Sedative', 'Anodyne'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Passio', meaning: 'Suffering/Passion' },
            { word: 'Incarnata', meaning: 'Flesh-colored' }
        ],
        etymology: "Spanish missionaries saw the instruments of Christ's Passion (Suffering) in the flower's complex structure (nails, crown of thorns, apostles). 'Incarnata' means 'made flesh' (pinkish color).",
        commonNameHint: "Circular thoughts. Alien flower.",
        image: 'https://source.unsplash.com/featured/?passionflower'
    },
    {
        id: 'hops',
        commonName: 'Hops',
        commonName_FR: 'Houblon',
        commonName_ES: 'Lúpulo',
        latinName: 'Humulus lupulus',
        family: 'Cannabaceae',
        habitat: 'Fields',
        actions: ['Sedative', 'Bitter', 'Estrogenic'],
        energetics: { temperature: 'Cold', moisture: 'Dry', element: 'Earth' },
        latinBreakdown: [
            { word: 'Humus', meaning: 'Earth/Soil' },
            { word: 'Lupulus', meaning: 'Little Wolf' }
        ],
        etymology: "'Humus' implies it creeps along the ground if not supported. 'Lupulus' (Little Wolf) refers to the way the vine 'strangles' other plants like a wolf taking down prey.",
        commonNameHint: "Beer ingredient. Sleepy strobiles.",
        image: 'https://source.unsplash.com/featured/?hops'
    },
    {
        id: 'reishi',
        commonName: 'Reishi Mushroom',
        commonName_FR: 'Reishi',
        commonName_ES: 'Reishi',
        latinName: 'Ganoderma lucidum',
        family: 'Ganodermataceae',
        habitat: 'Woodlands',
        actions: ['Adaptogen', 'Immunomodulator', 'Hepatic'],
        energetics: { temperature: 'Neutral', moisture: 'Neutral', element: 'Spirit' },
        latinBreakdown: [
            { word: 'Ganos-Derma', meaning: 'Bright-Skin' },
            { word: 'Lucidum', meaning: 'Shining' }
        ],
        etymology: "The 'Bright Skinned' mushroom. 'Lucidum' emphasizes the varnished, shiny appearance of the cap. Known in China as 'Ling Zhi' (Spirit Mushroom).",
        commonNameHint: "Mushroom of Immortality.",
        image: 'https://source.unsplash.com/featured/?reishi'
    },
    {
        id: 'stjohnswort',
        commonName: 'St. John\'s Wort',
        commonName_FR: 'Millepertuis',
        commonName_ES: 'Hipérico',
        latinName: 'Hypericum perforatum',
        family: 'Hypericaceae',
        habitat: 'Fields',
        actions: ['Nervine', 'Antidepressant', 'Vulnerary'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: 'Sun' },
        latinBreakdown: [
            { word: 'Hyper-Eikon', meaning: 'Above-the-Icon' },
            { word: 'Perforatum', meaning: 'Punctured' }
        ],
        etymology: "Hung 'Above the Icon' to ward off evil spirits. 'Perforatum' refers to the leaves which, when held to the light, appear to have tiny pin-prick holes (oil glands).",
        commonNameHint: "Brings Sun to nerves. Bleeds red.",
        image: 'https://source.unsplash.com/featured/?hypericum-perforatum'
    },
    {
        id: 'schisandra',
        commonName: 'Schisandra',
        commonName_FR: 'Schisandra',
        commonName_ES: 'Esquizandra',
        latinName: 'Schisandra chinensis',
        family: 'Schisandraceae',
        habitat: 'Mountains',
        actions: ['Adaptogen', 'Hepatoprotective', 'Astringent'],
        energetics: { temperature: 'Warm', moisture: 'Dry', element: '5 Elements' },
        latinBreakdown: [
            { word: 'Schisis-Andra', meaning: 'Split-Man (Anther)' },
            { word: 'Chinensis', meaning: 'Of China' }
        ],
        etymology: "Botanically refers to the cleft anthers of the flower ('Split Man'). However, the Chinese name 'Wu Wei Zi' (Five Flavor Fruit) is more famous, as it tastes sweet, sour, salty, bitter, and pungent.",
        commonNameHint: "Five flavor berry. Body tonic.",
        image: 'https://source.unsplash.com/featured/?schisandra'
    },
    {
        id: 'rhodiola',
        commonName: 'Rhodiola',
        commonName_FR: 'Rhodiole',
        commonName_ES: 'Rhodiola',
        latinName: 'Rhodiola rosea',
        family: 'Crassulaceae',
        habitat: 'Mountains',
        actions: ['Adaptogen', 'Antidepressant', 'Nootropic'],
        energetics: { temperature: 'Cool', moisture: 'Dry', element: 'Air' },
        latinBreakdown: [
            { word: 'Rhodon', meaning: 'Rose' },
            { word: 'Rosea', meaning: 'Rosy' }
        ],
        etymology: "The 'Rose Root.' Though it is not related to roses, the fresh rootstock smells intensely of roses when cut. It grows in the arctic, giving Vikings endurance.",
        commonNameHint: "Arctic Root. Viking endurance.",
        image: 'https://source.unsplash.com/featured/?rhodiola'
    },
    {
        id: 'monstera',
        commonName: 'Swiss Cheese Plant',
        commonName_FR: 'Monstera',
        commonName_ES: 'Costilla de Adán',
        latinName: 'Monstera deliciosa',
        family: 'Araceae',
        habitat: 'Tropical',
        actions: ['Ornamental'],
        energetics: { temperature: 'Warm', moisture: 'Moist', element: 'Water' },
        latinBreakdown: [
            { word: 'Monstera', meaning: 'Monstrous/Strange' },
            { word: 'Deliciosa', meaning: 'Delicious' }
        ],
        etymology: "A 'Monster' of a plant due to its huge size and strange holes. 'Deliciosa' refers to its fruit, which tastes like a mix of pineapple and banana (but can sting if unripe).",
        commonNameHint: "Jungle beast with holes.",
        image: 'https://source.unsplash.com/featured/?monstera'
    }
];

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = plantDatabase;
}