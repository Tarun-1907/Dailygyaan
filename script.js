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