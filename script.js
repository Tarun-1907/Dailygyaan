// Utility Functions
function updateCurrentDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString('en-US', options);
    }
}

function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Theme Management
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme') || 
                       (prefersDarkScheme.matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Content Data
const contentData = {
    facts: [
        {
            id: 'fact-1',
            title: "The Human Brain's Storage Capacity",
            content: "The human brain's memory capacity is estimated to be around 2.5 petabytes (or a million gigabytes). That's enough to store three million hours of TV shows.",
            source: "Scientific American",
            date: "2023-11-15",
            tags: ["science", "biology"]
        },
        {
            id: 'fact-2',
            title: "The World's Oceans",
            content: "More than 80% of the world's oceans remain unexplored and unmapped. We know more about the surface of Mars than we do about our own ocean floor.",
            source: "NOAA",
            date: "2023-11-14",
            tags: ["science", "ocean"]
        },
        {
            id: 'fact-3',
            title: "Honey Never Spoils",
            content: "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
            source: "National Geographic",
            date: "2023-11-13",
            tags: ["history", "food"]
        },
        {
            id: 'fact-4',
            title: "The Speed of Light",
            content: "Light travels at about 300,000 kilometers per second. At this speed, it could go around the Earth 7.5 times in just one second.",
            source: "NASA",
            date: "2023-11-12",
            tags: ["science", "physics"]
        },
        {
            id: 'fact-5',
            title: "Bananas Are Berries",
            content: "Botanically speaking, bananas are berries, while strawberries aren't. In botanical terms, a berry is a fruit produced from the ovary of a single flower.",
            source: "University of California",
            date: "2023-11-11",
            tags: ["science", "biology"]
        },
        {
            id: 'fact-6',
            title: "The Earth's Rotation",
            content: "The Earth's rotation is gradually slowing down at about 17 milliseconds per hundred years. This means that in the age of dinosaurs, a day was only about 23 hours long.",
            source: "NASA",
            date: "2023-10-21",
            tags: ["science", "earth"]
        },
        {
            id: 'fact-7',
            title: "Octopus Intelligence",
            content: "Octopuses have three hearts, nine brains, and blue blood. Two hearts pump blood to the gills, while the third pumps it to the rest of the body. When an octopus swims, the heart that delivers blood to the body stops beating.",
            source: "National Geographic",
            date: "2023-10-20",
            tags: ["biology", "ocean"]
        },
        {
            id: 'fact-8',
            title: "The Great Pyramid",
            content: "The Great Pyramid of Giza can expand and contract up to 2.5 cm due to temperature changes. The pyramid was originally covered with casing stones that formed a smooth outer surface.",
            source: "Smithsonian",
            date: "2023-10-19",
            tags: ["history", "architecture"]
        },
        {
            id: 'fact-9',
            title: "Human DNA Similarity",
            content: "All humans share 99.9% of the same DNA. The 0.1% difference accounts for all the genetic variation between individuals, including eye color, height, and susceptibility to certain diseases.",
            source: "NIH",
            date: "2023-10-18",
            tags: ["science", "biology"]
        },
        {
            id: 'fact-10',
            title: "The Coldest Temperature",
            content: "The coldest temperature ever recorded on Earth was -128.6°F (-89.2°C) at the Soviet Vostok Station in Antarctica on July 21, 1983.",
            source: "WMO",
            date: "2023-10-17",
            tags: ["science", "weather"]
        },
        {
            id: 'fact-11',
            title: "The Human Eye",
            content: "The human eye can distinguish about 10 million different colors and can detect a single photon of light in perfect conditions.",
            source: "MIT",
            date: "2023-10-16",
            tags: ["biology", "science"]
        },
        {
            id: 'fact-12',
            title: "The Internet's Weight",
            content: "If you could weigh the entire internet, it would only be about 50 grams - roughly the weight of a strawberry. This is based on the weight of all the electrons in motion that make up the internet's data.",
            source: "Scientific American",
            date: "2023-10-15",
            tags: ["technology", "physics"]
        },
        {
            id: 'fact-13',
            title: "Venus' Rotation",
            content: "Venus is the only planet in our solar system that rotates clockwise. A day on Venus (one full rotation) is longer than its year (one orbit around the Sun).",
            source: "NASA",
            date: "2023-10-14",
            tags: ["space", "science"]
        },
        {
            id: 'fact-14',
            title: "The World's Oldest Living Organism",
            content: "The world's oldest known living organism is a grove of quaking aspen trees in Utah named Pando, estimated to be around 80,000 years old. The entire grove is a single organism connected by a massive root system.",
            source: "US Forest Service",
            date: "2023-10-13",
            tags: ["biology", "nature"]
        },
        {
            id: 'fact-15',
            title: "The Speed of Thought",
            content: "Nerve impulses in the human body travel at speeds up to 250 mph (400 km/h). The fastest nerve impulses are those that tell your muscles to move.",
            source: "Harvard Medical School",
            date: "2023-10-12",
            tags: ["biology", "neuroscience"]
        }
    ],
    quotes: [
        {
            id: 'quote-1',
            content: "The more I learn, the more I realize how much I don't know.",
            author: "Albert Einstein",
            date: "2023-11-10",
            tags: ["wisdom", "learning"]
        },
        {
            id: 'quote-2',
            content: "You can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future.",
            author: "Steve Jobs",
            date: "2023-11-09",
            tags: ["inspiration", "future"]
        },
        {
            id: 'quote-3',
            content: "The only true wisdom is in knowing you know nothing.",
            author: "Socrates",
            date: "2023-11-08",
            tags: ["philosophy", "wisdom"]
        },
        {
            id: 'quote-4',
            content: "Education is the most powerful weapon which you can use to change the world.",
            author: "Nelson Mandela",
            date: "2023-11-07",
            tags: ["education", "inspiration"]
        },
        {
            id: 'quote-5',
            content: "The beautiful thing about learning is that no one can take it away from you.",
            author: "B.B. King",
            date: "2023-11-06",
            tags: ["learning", "wisdom"]
        },
        {
            id: 'quote-6',
            content: "The only way to do great work is to love what you do.",
            author: "Steve Jobs",
            date: "2023-10-11",
            tags: ["work", "passion"]
        },
        {
            id: 'quote-7',
            content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
            author: "Winston Churchill",
            date: "2023-10-10",
            tags: ["success", "perseverance"]
        },
        {
            id: 'quote-8',
            content: "The mind is everything. What you think you become.",
            author: "Buddha",
            date: "2023-10-09",
            tags: ["mindset", "wisdom"]
        },
        {
            id: 'quote-9',
            content: "Life is what happens when you're busy making other plans.",
            author: "John Lennon",
            date: "2023-10-08",
            tags: ["life", "wisdom"]
        },
        {
            id: 'quote-10',
            content: "The best way to predict the future is to invent it.",
            author: "Alan Kay",
            date: "2023-10-07",
            tags: ["future", "innovation"]
        },
        {
            id: 'quote-11',
            content: "Do not watch the clock. Do what it does. Keep going.",
            author: "Sam Levenson",
            date: "2023-10-06",
            tags: ["perseverance", "time"]
        },
        {
            id: 'quote-12',
            content: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt",
            date: "2023-10-05",
            tags: ["future", "confidence"]
        },
        {
            id: 'quote-13',
            content: "You miss 100% of the shots you don't take.",
            author: "Wayne Gretzky",
            date: "2023-10-04",
            tags: ["opportunity", "sports"]
        },
        {
            id: 'quote-14',
            content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela",
            date: "2023-10-03",
            tags: ["resilience", "success"]
        },
        {
            id: 'quote-15',
            content: "The future belongs to those who believe in the beauty of their dreams.",
            author: "Eleanor Roosevelt",
            date: "2023-10-02",
            tags: ["dreams", "future"]
        }
    ],
    puzzles: [
        {
            id: 'puzzle-1',
            title: "Math Riddle",
            content: "I am an odd number. Take away a letter and I become even. What number am I?",
            answer: "Seven (remove the 's' and it becomes 'even')",
            date: "2023-11-05",
            tags: ["math", "riddle"]
        },
        {
            id: 'puzzle-2',
            title: "Word Puzzle",
            content: "What word in the English language has three consecutive double letters?",
            answer: "Bookkeeper",
            date: "2023-11-04",
            tags: ["language", "wordplay"]
        },
        {
            id: 'puzzle-3',
            title: "Logic Puzzle",
            content: "A man lives on the 10th floor of a building. Every day he takes the elevator to go down to the ground floor to go to work. When he returns, he takes the elevator to the 7th floor and walks up the stairs to reach his apartment on the 10th floor. Why?",
            answer: "The man is of short stature and can only reach the button for the 7th floor in the elevator. On rainy days, he uses his umbrella to press the 10th floor button.",
            date: "2023-11-03",
            tags: ["logic", "lateral"]
        },
        {
            id: 'puzzle-4',
            title: "Lateral Thinking",
            content: "A man walks into a bar and asks the bartender for a glass of water. The bartender pulls out a gun and points it at the man. The man says 'Thank you' and leaves. What happened?",
            answer: "The man had hiccups. The bartender scared them away by pulling out the gun.",
            date: "2023-11-02",
            tags: ["lateral", "thinking"]
        },
        {
            id: 'puzzle-5',
            title: "Number Sequence",
            content: "What comes next in this sequence: 1, 11, 21, 1211, 111221, ...?",
            answer: "312211 (Each number describes the previous number. 1 = one 1 = 11, 11 = two 1s = 21, etc.)",
            date: "2023-11-01",
            tags: ["math", "sequence"]
        },
        {
            id: 'puzzle-6',
            title: "River Crossing",
            content: "A farmer needs to transport a wolf, a goat, and a cabbage across a river. His boat can only carry one item at a time. If left alone, the wolf will eat the goat, and the goat will eat the cabbage. How does he get all three across safely?",
            answer: "1. Take goat across first. 2. Return alone. 3. Take wolf across. 4. Bring goat back. 5. Take cabbage across. 6. Return alone. 7. Take goat across.",
            date: "2023-10-31",
            tags: ["logic", "classic"]
        },
        {
            id: 'puzzle-7',
            title: "Light Switch Riddle",
            content: "There are three light switches outside a room. Only one controls a bulb inside the room. You can flip switches but once you open the door, you can't change them. How can you determine which switch controls the bulb with just one attempt?",
            answer: "Turn on first switch for 5 minutes, then turn it off and turn on second switch. The bulb that's on is controlled by second switch, warm but off is first switch, cold is third switch.",
            date: "2023-10-30",
            tags: ["logic", "practical"]
        },
        {
            id: 'puzzle-8',
            title: "Two Doors",
            content: "You're in a room with two doors. One leads to safety, the other to certain death. Each door has a guard. One always lies, one always tells the truth. You can ask one guard one question to find the safe door. What do you ask?",
            answer: "Ask either guard: 'What would the other guard say is the safe door?' Then choose the opposite door.",
            date: "2023-10-29",
            tags: ["logic", "classic"]
        },
        {
            id: 'puzzle-9',
            title: "The Missing Dollar",
            content: "Three people check into a hotel room that costs $30. They each contribute $10. Later, the clerk realizes it should have been $25, so gives $5 to the bellboy to return. The bellboy keeps $2 and gives $1 to each guest. Now each guest paid $9 ($27 total) and the bellboy has $2 - where's the missing dollar?",
            answer: "The $27 includes the $25 for the room plus the $2 kept by the bellboy. There is no missing dollar - the math is misleading.",
            date: "2023-10-28",
            tags: ["math", "trick"]
        },
        {
            id: 'puzzle-10',
            title: "Tennis Tournament",
            content: "There are 128 players in a single-elimination tennis tournament. How many matches must be played to determine the champion?",
            answer: "127 matches (every match eliminates one player, and you need to eliminate 127 players to leave one champion).",
            date: "2023-10-27",
            tags: ["math", "sports"]
        },
        {
            id: 'puzzle-11',
            title: "Poisoned Wine",
            content: "You have 1000 bottles of wine, one of which is poisoned. You have 10 rats to test which bottle is poisoned. The poison takes exactly 1 hour to show effects. How can you find the poisoned bottle in just one hour?",
            answer: "Number bottles 1-1000. Assign each rat a binary digit. Have each rat drink from bottles where their digit is 1. The dead rats' positions reveal the poisoned bottle in binary.",
            date: "2023-10-26",
            tags: ["logic", "binary"]
        },
        {
            id: 'puzzle-12',
            title: "The Monty Hall Problem",
            content: "You're on a game show with 3 doors. Behind one is a car, behind others, goats. You pick a door (say Door 1). The host, who knows what's behind the doors, opens another door (say Door 3) revealing a goat. He then asks if you want to switch to Door 2. Should you switch?",
            answer: "Yes, you should switch. Switching gives you a 2/3 chance of winning, while staying gives only 1/3 chance.",
            date: "2023-10-25",
            tags: ["probability", "counterintuitive"]
        },
        {
            id: 'puzzle-13',
            title: "The Burning Ropes",
            content: "You have two ropes that each take exactly 60 minutes to burn. However, they don't burn at consistent speeds. How can you measure exactly 45 minutes using these ropes?",
            answer: "Light the first rope at both ends and the second rope at one end simultaneously. When the first rope burns out (after 30 minutes), light the other end of the second rope. It will then take 15 more minutes to burn out, totaling 45 minutes.",
            date: "2023-10-24",
            tags: ["time", "practical"]
        },
        {
            id: 'puzzle-14',
            title: "The Prisoner's Hat Puzzle",
            content: "Three prisoners are lined up so the first can see the other two, the middle sees one, and the last sees none. They're each given a red or blue hat randomly. They can't communicate. Starting from the back, each must guess their hat color. How can they guarantee at least one correct answer?",
            answer: "The last prisoner says 'red' if he sees an odd number of red hats, or 'blue' if even. Each subsequent prisoner can deduce their hat color based on previous answers and what they see.",
            date: "2023-10-23",
            tags: ["logic", "prisoners"]
        },
        {
            id: 'puzzle-15',
            title: "The Impossible Chessboard",
            content: "A prison warden places 64 coins randomly on a chessboard, each showing heads or tails. He points to one coin he wants flipped. A prisoner sees the board, flips one coin, and leaves. Another prisoner enters later and must identify the marked coin just by looking at the board. How can they communicate this information?",
            answer: "They use the board as a binary matrix where heads=1 and tails=0. The first prisoner flips a coin to make the XOR of all heads point to the marked square.",
            date: "2023-10-22",
            tags: ["math", "binary", "advanced"]
        }
    ]
};

// Content Generation
function generatePageContent() {
    const path = window.location.pathname.split('/').pop();
    
    if (path === 'facts.html') {
        generateContentGrid('facts-feed', contentData.facts, 'fact');
    } else if (path === 'quotes.html') {
        generateContentGrid('quotes-feed', contentData.quotes, 'quote');
    } else if (path === 'puzzles.html') {
        generateContentGrid('puzzles-feed', contentData.puzzles, 'puzzle');
    } else if (path === 'archive.html') {
        setupArchive();
    } else if (path === 'index.html' || path === '') {
        generateHomeContent();
    }
}

function generateContentGrid(containerId, items, type) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `content-card ${type}`;
        card.style.animationDelay = `${index * 0.1}s`;
        
        let cardContent = '';
        if (type === 'fact') {
            cardContent = `
                <div class="card-header">Amazing Fact</div>
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    ${item.source ? `<p class="source"><em>Source: ${item.source}</em></p>` : ''}
                </div>
                <div class="card-footer">
                    <span class="card-type">Fact</span>
                    <button class="share-btn" data-id="${item.id}" aria-label="Share this fact">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            `;
        } else if (type === 'quote') {
            cardContent = `
                <div class="card-header">Inspirational Quote</div>
                <div class="card-body">
                    <blockquote>${item.content}</blockquote>
                    ${item.author ? `<p class="author">— ${item.author}</p>` : ''}
                </div>
                <div class="card-footer">
                    <span class="card-type">Quote</span>
                    <button class="share-btn" data-id="${item.id}" aria-label="Share this quote">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            `;
        } else if (type === 'puzzle') {
            cardContent = `
                <div class="card-header">Brain Teaser</div>
                <div class="card-body">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    <button class="btn primary show-answer">
                        <i class="fas fa-eye"></i> Show Answer
                    </button>
                    <div class="answer" style="display: none;">
                        <p><strong>Answer:</strong> ${item.answer}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="card-type">Puzzle</span>
                    <button class="share-btn" data-id="${item.id}" aria-label="Share this puzzle">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            `;
        }

        card.innerHTML = cardContent;
        container.appendChild(card);
    });
}

function generateHomeContent() {
    const container = document.getElementById('content-feed');
    if (!container) return;

    container.innerHTML = '';

    // Get random items from each category
    const randomFact = contentData.facts[Math.floor(Math.random() * contentData.facts.length)];
    const randomQuote = contentData.quotes[Math.floor(Math.random() * contentData.quotes.length)];
    const randomPuzzle = contentData.puzzles[Math.floor(Math.random() * contentData.puzzles.length)];

    const featuredContent = [
        { type: 'fact', data: randomFact },
        { type: 'quote', data: randomQuote },
        { type: 'puzzle', data: randomPuzzle }
    ];

    featuredContent.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `content-card ${item.type}`;
        card.style.animationDelay = `${index * 0.1}s`;

        let cardContent = '';
        if (item.type === 'fact') {
            cardContent = `
                <div class="card-header">Today's Fact</div>
                <div class="card-body">
                    <h3>${item.data.title}</h3>
                    <p>${item.data.content}</p>
                    ${item.data.source ? `<p class="source"><em>Source: ${item.data.source}</em></p>` : ''}
                </div>
                <div class="card-footer">
                    <span class="card-type">Fact</span>
                    <button class="share-btn" data-id="${item.data.id}" aria-label="Share this fact">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            `;
        } else if (item.type === 'quote') {
            cardContent = `
                <div class="card-header">Quote of the Day</div>
                <div class="card-body">
                    <blockquote>${item.data.content}</blockquote>
                    ${item.data.author ? `<p class="author">— ${item.data.author}</p>` : ''}
                </div>
                <div class="card-footer">
                    <span class="card-type">Quote</span>
                    <button class="share-btn" data-id="${item.data.id}" aria-label="Share this quote">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            `;
        } else if (item.type === 'puzzle') {
            cardContent = `
                <div class="card-header">Daily Puzzle</div>
                <div class="card-body">
                    <h3>${item.data.title}</h3>
                    <p>${item.data.content}</p>
                    <button class="btn primary show-answer">
                        <i class="fas fa-eye"></i> Show Answer
                    </button>
                    <div class="answer" style="display: none;">
                        <p><strong>Answer:</strong> ${item.data.answer}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <span class="card-type">Puzzle</span>
                    <button class="share-btn" data-id="${item.data.id}" aria-label="Share this puzzle">
                        <i class="fas fa-share-alt"></i> Share
                    </button>
                </div>
            `;
        }

        card.innerHTML = cardContent;
        container.appendChild(card);
    });
}

// Archive Functionality
let currentArchivePage = 1;
const itemsPerPage = 6;

function setupArchive() {
    if (!document.getElementById('archive-feed')) return;

    renderArchiveContent();
    setupArchiveEventListeners();
    setupPaginationControls();
}

function renderArchiveContent(page = 1, filter = 'all', searchTerm = '', sortOrder = 'recent') {
    const archiveFeed = document.getElementById('archive-feed');
    if (!archiveFeed) return;

    // Get filtered and sorted content
    const filteredContent = getFilteredArchiveContent(filter, searchTerm, sortOrder);
    const totalPages = Math.ceil(filteredContent.length / itemsPerPage);
    currentArchivePage = Math.min(page, totalPages);

    // Get paginated content
    const startIndex = (currentArchivePage - 1) * itemsPerPage;
    const paginatedContent = filteredContent.slice(startIndex, startIndex + itemsPerPage);

    // Clear existing content
    archiveFeed.innerHTML = '';

    // Add new content
    paginatedContent.forEach(item => {
        const card = document.createElement('div');
        card.className = 'archive-card';

        let cardContent = '';
        if (item.type === 'fact') {
            cardContent = `
                <div class="archive-card-header">
                    <span>Fact</span>
                    <span class="archive-date">${formatDisplayDate(item.date)}</span>
                </div>
                <div class="archive-card-body">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    ${item.source ? `<p class="source"><em>Source: ${item.source}</em></p>` : ''}
                </div>
                <div class="archive-card-footer">
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="share-btn" data-id="${item.id}" aria-label="Share this content">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            `;
        } else if (item.type === 'quote') {
            cardContent = `
                <div class="archive-card-header">
                    <span>Quote</span>
                    <span class="archive-date">${formatDisplayDate(item.date)}</span>
                </div>
                <div class="archive-card-body">
                    <blockquote>${item.content}</blockquote>
                    ${item.author ? `<p class="author">— ${item.author}</p>` : ''}
                </div>
                <div class="archive-card-footer">
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="share-btn" data-id="${item.id}" aria-label="Share this content">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            `;
        } else if (item.type === 'puzzle') {
            cardContent = `
                <div class="archive-card-header">
                    <span>Puzzle</span>
                    <span class="archive-date">${formatDisplayDate(item.date)}</span>
                </div>
                <div class="archive-card-body">
                    <h3>${item.title}</h3>
                    <p>${item.content}</p>
                    <button class="btn primary show-answer">
                        <i class="fas fa-eye"></i> Show Answer
                    </button>
                    <div class="answer" style="display: none;">
                        <p><strong>Answer:</strong> ${item.answer}</p>
                    </div>
                </div>
                <div class="archive-card-footer">
                    <div class="tags">
                        ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <button class="share-btn" data-id="${item.id}" aria-label="Share this content">
                        <i class="fas fa-share-alt"></i>
                    </button>
                </div>
            `;
        }

        card.innerHTML = cardContent;
        archiveFeed.appendChild(card);
    });

    // Update pagination UI
    updatePaginationUI(totalPages);
}

function getFilteredArchiveContent(filter, searchTerm, sortOrder) {
    let allContent = [];

    // Combine content based on filter
    if (filter === 'all' || filter === 'fact') {
        allContent = allContent.concat(contentData.facts.map(item => ({
            ...item,
            type: 'fact'
        })));
    }

    if (filter === 'all' || filter === 'quote') {
        allContent = allContent.concat(contentData.quotes.map(item => ({
            ...item,
            type: 'quote'
        })));
    }

    if (filter === 'all' || filter === 'puzzle') {
        allContent = allContent.concat(contentData.puzzles.map(item => ({
            ...item,
            type: 'puzzle'
        })));
    }

    // Apply search filter
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        allContent = allContent.filter(item => 
            (item.title && item.title.toLowerCase().includes(term)) ||
            (item.content && item.content.toLowerCase().includes(term)) ||
            (item.author && item.author.toLowerCase().includes(term)) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(term)))
        );
    }

    // Sort by date
    allContent.sort((a, b) => {
        return sortOrder === 'recent' ? 
            new Date(b.date) - new Date(a.date) : 
            new Date(a.date) - new Date(b.date);
    });

    return allContent;
}

function formatDisplayDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function setupArchiveEventListeners() {
    const searchInput = document.getElementById('archive-search');
    const searchBtn = document.getElementById('search-btn');
    const contentTypeFilter = document.getElementById('content-type-filter');
    const dateFilter = document.getElementById('date-filter');

    const handleFilterChange = () => {
        currentArchivePage = 1;
        renderArchiveContent(
            currentArchivePage,
            contentTypeFilter.value,
            searchInput.value,
            dateFilter.value
        );
    };

    if (searchBtn) searchBtn.addEventListener('click', handleFilterChange);
    if (searchInput) searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleFilterChange();
    });
    if (contentTypeFilter) contentTypeFilter.addEventListener('change', handleFilterChange);
    if (dateFilter) dateFilter.addEventListener('change', handleFilterChange);
}

function setupPaginationControls() {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentArchivePage > 1) {
                currentArchivePage--;
                renderArchiveContent(
                    currentArchivePage,
                    document.getElementById('content-type-filter')?.value || 'all',
                    document.getElementById('archive-search')?.value || '',
                    document.getElementById('date-filter')?.value || 'recent'
                );
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentArchivePage++;
            renderArchiveContent(
                currentArchivePage,
                document.getElementById('content-type-filter')?.value || 'all',
                document.getElementById('archive-search')?.value || '',
                document.getElementById('date-filter')?.value || 'recent'
            );
        });
    }
}

function updatePaginationUI(totalPages) {
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');

    if (prevBtn) prevBtn.disabled = currentArchivePage <= 1;
    if (nextBtn) nextBtn.disabled = currentArchivePage >= totalPages;
    if (pageIndicator) pageIndicator.textContent = `Page ${currentArchivePage} of ${totalPages}`;
}

// Interactive Elements
function setupAnswerButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.show-answer')) {
            const button = e.target.closest('.show-answer');
            const answer = button.nextElementSibling;
            
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                button.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
            } else {
                answer.style.display = 'none';
                button.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
            }
        }
    });
}

function setupShareButtons() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.share-btn')) {
            const button = e.target.closest('.share-btn');
            const card = button.closest('.content-card, .archive-card');
            const contentId = button.getAttribute('data-id');
            
            let title, text;
            
            if (card.querySelector('h3')) {
                title = card.querySelector('h3').textContent;
                text = card.querySelector('.card-body, .archive-card-body').textContent.trim();
            } else {
                title = card.querySelector('.card-header, .archive-card-header').textContent;
                text = card.querySelector('blockquote').textContent.trim();
            }
            
            const shareText = `${title}: ${text.substring(0, 100)}...`;
            shareContent(shareText, contentId);
        }
    });
}

function shareContent(text, contentId) {
    const shareUrl = `${window.location.origin}?content=${contentId}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'DailyGyaan Knowledge',
            text: text,
            url: shareUrl
        }).catch(err => {
            console.log('Error sharing:', err);
            fallbackShare(text, shareUrl);
        });
    } else {
        fallbackShare(text, shareUrl);
    }
}

function fallbackShare(text, url) {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank', 'width=550,height=420');
}

// Newsletter Subscription
function setupNewsletter() {
    const form = document.getElementById('newsletter-form');
    const subscribeBtn = document.getElementById('subscribe-btn');
    const exploreBtn = document.getElementById('explore-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input').value;
            
            if (validateEmail(email)) {
                // In a real app, you would send this to your server
                console.log('Subscribing email:', email);
                alert('Thank you for subscribing to DailyGyaan! You\'ll receive your first knowledge bite tomorrow morning.');
                form.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }

    if (exploreBtn) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'archive.html';
        });
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Content Deep Linking
function checkForDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const contentId = params.get('content');
    
    if (contentId) {
        // Find the content in our data
        let content = null;
        let type = null;
        
        // Check facts
        const fact = contentData.facts.find(f => f.id === contentId);
        if (fact) {
            content = fact;
            type = 'fact';
        }
        
        // Check quotes
        const quote = contentData.quotes.find(q => q.id === contentId);
        if (quote) {
            content = quote;
            type = 'quote';
        }
        
        // Check puzzles
        const puzzle = contentData.puzzles.find(p => p.id === contentId);
        if (puzzle) {
            content = puzzle;
            type = 'puzzle';
        }
        
        if (content) {
            // Show a modal with the content
            showContentModal(content, type);
        }
    }
}

function showContentModal(content, type) {
    // Create modal elements
    const modal = document.createElement('div');
    modal.className = 'content-modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    let modalHTML = '';
    if (type === 'fact') {
        modalHTML = `
            <h3>${content.title}</h3>
            <p>${content.content}</p>
            ${content.source ? `<p class="source"><em>Source: ${content.source}</em></p>` : ''}
        `;
    } else if (type === 'quote') {
        modalHTML = `
            <blockquote>${content.content}</blockquote>
            ${content.author ? `<p class="author">— ${content.author}</p>` : ''}
        `;
    } else if (type === 'puzzle') {
        modalHTML = `
            <h3>${content.title}</h3>
            <p>${content.content}</p>
            <div class="answer">
                <p><strong>Answer:</strong> ${content.answer}</p>
            </div>
        `;
    }
    
    modalContent.innerHTML = `
        <button class="close-modal">&times;</button>
        ${modalHTML}
        <div class="modal-footer">
            <span class="content-type">${type.charAt(0).toUpperCase() + type.slice(1)}</span>
            <span class="content-date">${formatDisplayDate(content.date)}</span>
        </div>
    `;
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .content-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: var(--light-color);
            padding: 30px;
            border-radius: var(--radius-md);
            max-width: 600px;
            width: 90%;
            position: relative;
            box-shadow: var(--shadow-lg);
        }
        .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-color);
        }
        .modal-footer {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
            font-size: 0.9rem;
            color: var(--text-light);
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.close-modal')) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
            
            // Clean up URL
            const url = new URL(window.location);
            url.searchParams.delete('content');
            window.history.replaceState({}, '', url);
        }
    });
}

// Initialize the app
function init() {
    updateCurrentDate();
    setCurrentYear();
    setupThemeToggle();
    generatePageContent();
    setupAnswerButtons();
    setupShareButtons();
    setupNewsletter();
    checkForDeepLink();
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
