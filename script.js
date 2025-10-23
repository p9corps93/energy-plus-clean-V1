// Clean ENERGY+ Dashboard JavaScript

// Wrap leadsData to avoid redeclaration issues
(function() {
    window.leadsData = [
    {
        id: 1,
        name: "John Smith",
        email: "john@example.com",
        phone: "+1 (555) 123-4567",
        location: "Los Angeles, CA",
        energyUsage: 1200,
        source: "Website",
        status: "new",
        score: 85,
        dateAdded: "2024-01-15"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah@example.com",
        phone: "+1 (555) 234-5678",
        location: "San Francisco, CA",
        energyUsage: 1800,
        source: "Referral",
        status: "qualified",
        score: 92,
        dateAdded: "2024-01-14"
    },
    {
        id: 3,
        name: "Mike Wilson",
        email: "mike@example.com",
        phone: "+1 (555) 345-6789",
        location: "San Diego, CA",
        energyUsage: 950,
        source: "Social Media",
        status: "proposal",
        score: 78,
        dateAdded: "2024-01-13"
    }
    ];
})();

// Wrap clientsData to avoid redeclaration issues
(function() {
    window.clientsData = [
    {
        id: 1,
        name: "Robert Davis",
        email: "robert@example.com",
        phone: "+1 (555) 456-7890",
        location: "Austin, TX",
        systemType: "Solar",
        systemSize: "5kW",
        status: "active",
        installationDate: "2023-06-15",
        monthlySavings: 150
    },
    {
        id: 2,
        name: "Lisa Brown",
        email: "lisa@example.com",
        phone: "+1 (555) 567-8901",
        location: "Phoenix, AZ",
        systemType: "Solar",
        systemSize: "8kW",
        status: "qualified",
        installationDate: "2023-08-20",
        monthlySavings: 240
    },
    {
        id: 3,
        name: "David Miller",
        email: "david@example.com",
        phone: "+1 (555) 678-9012",
        location: "Denver, CO",
        systemType: "Wind",
        systemSize: "3kW",
        status: "active",
        installationDate: "2023-09-10",
        monthlySavings: 120
    }
    ];
})();

// Initialize AI Content Generation
function initializeAIContentGeneration() {
    console.log('🎨 Initializing AI Content Generation...');
    
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tesla-tab-btn[data-content-type]');
    const contentTabs = document.querySelectorAll('.content-tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentType = this.getAttribute('data-content-type');
            
            // Remove active class from all tabs and buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            contentTabs.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            this.classList.add('active');
            const targetTab = document.getElementById(`${contentType}-tab`);
            if (targetTab) {
                targetTab.classList.add('active');
            }
            
            console.log(`Switched to ${contentType} tab`);
        });
    });
    
    // Provider selection functionality
    const providerCards = document.querySelectorAll('.provider-card');
    providerCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all provider cards in the same grid
            const grid = this.closest('.provider-grid');
            if (grid) {
                grid.querySelectorAll('.provider-card').forEach(c => c.classList.remove('active'));
            }
            
            // Add active class to clicked card
            this.classList.add('active');
            
            const provider = this.getAttribute('data-provider');
            console.log(`Selected provider: ${provider}`);
        });
    });
    
    // Generate content functionality
    const generateButtons = document.querySelectorAll('.tesla-btn-primary');
    generateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const contentType = this.closest('.content-tab').id.replace('-tab', '');
            const textarea = this.closest('.content-input').querySelector('.tesla-textarea');
            const prompt = textarea.value.trim();
            
            if (!prompt) {
                alert('Please enter a prompt first!');
                return;
            }
            
            // Show loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            this.disabled = true;
            
            // Simulate AI generation (replace with actual API calls)
            setTimeout(() => {
                const outputArea = this.closest('.content-tab').querySelector('.output-area');
                const placeholder = outputArea.querySelector('.output-placeholder');
                
                // Hide placeholder and show generated content
                placeholder.style.display = 'none';
                
                let generatedContent;
                if (contentType === 'copywriting') {
                    generatedContent = `
                        <div class="generated-content">
                            <h3>Generated Blog Post</h3>
                            <p>${prompt}</p>
                            <p>This is a sample AI-generated blog post based on your prompt. In a real implementation, this would be generated by the selected AI provider.</p>
                            <div class="content-actions">
                                <button class="tesla-btn-small">Copy</button>
                                <button class="tesla-btn-small">Edit</button>
                                <button class="tesla-btn-small">Save</button>
                            </div>
                        </div>
                    `;
                } else if (contentType === 'image') {
                    generatedContent = `
                        <div class="generated-content">
                            <div class="image-placeholder">
                                <i class="fas fa-image"></i>
                                <p>Generated Image: ${prompt}</p>
                                <p>This would be the actual AI-generated image</p>
                            </div>
                            <div class="content-actions">
                                <button class="tesla-btn-small">Download</button>
                                <button class="tesla-btn-small">Regenerate</button>
                                <button class="tesla-btn-small">Save</button>
                            </div>
                        </div>
                    `;
                } else if (contentType === 'video') {
                    generatedContent = `
                        <div class="generated-content">
                            <div class="video-placeholder">
                                <i class="fas fa-video"></i>
                                <p>Generated Video: ${prompt}</p>
                                <p>This would be the actual AI-generated video</p>
                            </div>
                            <div class="content-actions">
                                <button class="tesla-btn-small">Download</button>
                                <button class="tesla-btn-small">Regenerate</button>
                                <button class="tesla-btn-small">Save</button>
                            </div>
                        </div>
                    `;
                }
                
                outputArea.innerHTML = generatedContent;
                
                // Reset button
                this.innerHTML = originalText;
                this.disabled = false;
                
                console.log(`Generated ${contentType} content`);
            }, 2000);
        });
    });
    
    console.log('✅ AI Content Generation initialized');
}

// Add to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 ENERGY+ Clean Dashboard Loading...');
    

    // Initialize navigation immediately
    initializeNavigation();
    
    // Set dashboard as default active page
    switchToPage('dashboard');
    
    // Initialize other features
    initializeStaticMap();
    initializeContentTabs();
    initializeAIContentGeneration();
    
    console.log('✅ Dashboard initialized successfully!');
});

// Navigation functionality
function initializeNavigation() {

    console.log('🔗 Initializing navigation...');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    console.log('Found', navLinks.length, 'navigation links');
    

    // Add click event to each navigation link
    navLinks.forEach((link, index) => {
        console.log(`Setting up link ${index + 1}:`, link.getAttribute('data-page'));
        
        link.addEventListener('click', function(e) {
            e.preventDefault();

            e.stopPropagation();
            
            const pageId = this.getAttribute('data-page');
            
            console.log('🖱️ Clicked navigation:', pageId);
            

            // Remove active class from all nav links
            navLinks.forEach(nav => nav.classList.remove('active'));

            
            // Add active class to clicked link
            this.classList.add('active');
            

            // Switch to the page
            switchToPage(pageId);
        });
        
        // Add hover effect
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            }
        });
    });
    
    console.log('✅ Navigation initialized successfully');
}

// Switch to page function
function switchToPage(pageId) {
    console.log('📄 Switching to page:', pageId);
    
    // Debug: Check if page exists
    const targetPage = document.getElementById(pageId);
    console.log('Target page found:', targetPage ? 'yes' : 'no');
    if (targetPage) {
        console.log('Target page classes before:', targetPage.className);
        console.log('Target page display before:', targetPage.style.display);
    }

    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    console.log('Total pages found:', allPages.length);
    allPages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
        page.style.visibility = 'hidden';
        page.style.opacity = '0';
    });
    
    // Show target page
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'block';
        targetPage.style.visibility = 'visible';
        targetPage.style.opacity = '1';
        console.log('✅ Page switched to:', pageId);
        console.log('Target page classes after:', targetPage.className);
        console.log('Target page display after:', targetPage.style.display);
        
        // Force visibility with CSS classes
        targetPage.style.setProperty('display', 'block', 'important');
        targetPage.style.setProperty('visibility', 'visible', 'important');
        targetPage.style.setProperty('opacity', '1', 'important');
        
        // Initialize page-specific features
        initializePageFeatures(pageId);
    } else {
        console.error('❌ Page not found:', pageId);
    }
}

// Initialize page-specific features
function initializePageFeatures(pageId) {
    switch(pageId) {
        case 'dashboard':
            initializeDashboard();
            break;
        case 'automation-hub':
            initializeAutomationHub();
            break;
        case 'ai-virtual-assistant':
            initializeAIVirtualAssistant();
            break;
        case 'marketing-tracker':
            initializeTeslaMarketingTracker();
            break;
        case 'content-calendar':
            initializeContentCalendar();
            break;
        case 'installation':
            initializeTeslaInstallation();
            break;
        case 'contact':
            initializeContact();
            break;
        case 'ai-content-generation':
            initializeAIContentGeneration();
            break;
        default:
            console.log('No specific initialization for:', pageId);
    }
}

// Dashboard Functions
function initializeDashboard() {
    console.log('📊 Initializing Dashboard...');
    
    // Add click handlers for dashboard cards
    const dashboardCards = document.querySelectorAll('.dashboard-card');
    dashboardCards.forEach(card => {
        card.addEventListener('click', function() {
            const cardType = this.getAttribute('data-type');
            if (cardType) {
                console.log(`Dashboard card clicked: ${cardType}`);
                // You can add specific actions for each card type here
                showNotification(`${cardType} dashboard feature clicked!`);
            }
        });
    });
    
    // Add click handlers for quick action buttons
    const quickActions = document.querySelectorAll('.quick-action-btn');
    quickActions.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            console.log(`Quick action clicked: ${action}`);
            showNotification(`Quick action: ${action}`);
        });
    });
}

// Initialize static map
function initializeStaticMap() {
    console.log('🗺️ Initializing static map...');
    
    const mapContainer = document.getElementById('leadfinder-map');
    if (!mapContainer) {
        console.log('Map container not found');
        return;
    }
    
    // Add click handlers to markers
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => {
        marker.addEventListener('click', function() {
            const leadId = this.getAttribute('data-lead');
            selectLeadFromMap(leadId);
        });
    });
    
    // Add click handlers to lead items
    const leadItems = document.querySelectorAll('.lead-item');
    leadItems.forEach(item => {
        item.addEventListener('click', function() {
            const leadId = this.getAttribute('data-lead-id');
            selectLeadFromPanel(leadId);
        });
    });
    
    console.log('✅ Static map initialized with', markers.length, 'markers');
}

// Select lead from map marker
function selectLeadFromMap(leadId) {
    console.log('📍 Selected lead from map:', leadId);
    
    // Find corresponding lead in panel
    const leadItems = document.querySelectorAll('.lead-item');
    leadItems.forEach(item => {
        if (item.getAttribute('data-lead-id') === leadId) {
            item.classList.add('active');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            item.classList.remove('active');
        }
    });
    
    // Highlight corresponding marker
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => {
        if (marker.getAttribute('data-lead') === leadId) {
            marker.style.transform = 'translate(-50%, -50%) scale(1.3)';
            marker.style.zIndex = '20';
        } else {
            marker.style.transform = 'translate(-50%, -50%) scale(1)';
            marker.style.zIndex = '10';
        }
    });
}

// Select lead from panel
function selectLeadFromPanel(leadId) {
    console.log('📍 Selected lead from panel:', leadId);
    
    // Find corresponding marker on map
    const markers = document.querySelectorAll('.map-marker');
    markers.forEach(marker => {
        if (marker.getAttribute('data-lead') === leadId) {
            marker.style.transform = 'translate(-50%, -50%) scale(1.3)';
            marker.style.zIndex = '20';
        } else {
            marker.style.transform = 'translate(-50%, -50%) scale(1)';
            marker.style.zIndex = '10';
        }
    });
    
    // Highlight lead item
    const leadItems = document.querySelectorAll('.lead-item');
    leadItems.forEach(item => {
        if (item.getAttribute('data-lead-id') === leadId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Find leads function
function findLeads() {
    console.log('🔍 Finding leads...');
    
    const searchInput = document.getElementById('location-search');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        console.log('Searching for:', searchTerm);
        
        // Simulate search
        setTimeout(() => {
            console.log('✅ Search completed for:', searchTerm);
            
            // Update results count
            const resultsCount = document.querySelector('.results-count');
            if (resultsCount) {
                resultsCount.textContent = '4 leads found';
            }
            
            // Show success message
            showNotification('Found 4 leads for: ' + searchTerm);
        }, 1000);
    } else {
        showNotification('Please enter a search term');
    }
}

// Initialize content generator tabs
function initializeContentTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId + '-tab') {
                    content.classList.add('active');
                }
            });
        });
    });
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-size: 0.9rem;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Debug function
function debugDashboard() {
    console.log('=== ENERGY+ Dashboard Debug ===');
    console.log('Navigation links:', document.querySelectorAll('.nav-link').length);
    console.log('Pages:', document.querySelectorAll('.page').length);
    console.log('Map markers:', document.querySelectorAll('.map-marker').length);
    console.log('Lead items:', document.querySelectorAll('.lead-item').length);
    console.log('AI tool cards:', document.querySelectorAll('.ai-tool-card').length);
    console.log('=== End Debug ===');
}


// Initialize Automation Hub
function initializeAutomationHub() {
    console.log('⚡ Initializing Automation Hub...');
    
    // Add click handlers to toggle switches
    const toggleSwitches = document.querySelectorAll('.toggle-switch');
    toggleSwitches.forEach(toggle => {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            const statusText = this.parentElement.querySelector('.status-text');
            const automationName = this.closest('.automation-card').querySelector('h3').textContent;
            
            if (this.classList.contains('active')) {
                statusText.textContent = 'Status • Active';
                showNotification(`${automationName} automation enabled!`);
            } else {
                statusText.textContent = 'Status • Inactive';
                showNotification(`${automationName} automation disabled!`);
            }
        });
    });
    
    // Add click handlers for automation cards
    const automationCards = document.querySelectorAll('.automation-card');
    automationCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking the toggle switch
            if (e.target.closest('.toggle-switch')) return;
            
            const automationName = this.querySelector('h3').textContent;
            console.log(`Automation card clicked: ${automationName}`);
            
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            showNotification(`Opening ${automationName} settings...`);
        });
    });
    
    // Add search functionality
    const searchInput = document.querySelector('.automation-search input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            console.log(`Searching for: ${searchTerm}`);
            
            // Filter automation cards based on search term
            automationCards.forEach(card => {
                const cardText = card.textContent.toLowerCase();
                if (cardText.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    console.log('✅ Automation Hub initialized with', toggleSwitches.length, 'toggle switches');
}

// Initialize Marketing Tracker
function initializeMarketingTracker() {
    console.log('📊 Initializing Marketing Tracker...');
    
    // Add change handlers to dropdowns
    const campaignDropdown = document.querySelector('.campaign-dropdown');
    const dateDropdown = document.querySelector('.date-dropdown');
    
    if (campaignDropdown) {
        campaignDropdown.addEventListener('change', function() {
            console.log('Campaign changed to:', this.value);
            updateCampaignMetrics(this.value);
        });
    }
    
    if (dateDropdown) {
        dateDropdown.addEventListener('change', function() {
            console.log('Date range changed to:', this.value);
            updateDateRange(this.value);
        });
    }
    
    // Add click handlers to platform cards
    const platformCards = document.querySelectorAll('.platform-card');
    platformCards.forEach(card => {
        card.addEventListener('click', function() {
            const platform = this.classList[1]; // Get platform class (instagram, facebook, etc.)
            console.log('Platform clicked:', platform);
            showPlatformDetails(platform);
        });
    });
    
    console.log('✅ Marketing Tracker initialized with', platformCards.length, 'platform cards');
}

// Update campaign metrics
function updateCampaignMetrics(campaignId) {
    console.log('Updating metrics for campaign:', campaignId);
    // Here you would typically fetch new data from an API
    showNotification('Campaign metrics updated for: ' + campaignId);
}

// Update date range
function updateDateRange(dateRange) {
    console.log('Updating date range to:', dateRange);
    // Here you would typically fetch new data for the selected date range
    showNotification('Date range updated to: ' + dateRange);
}

// Show platform details
function showPlatformDetails(platform) {
    console.log('Showing details for platform:', platform);
    showNotification('Opening detailed analytics for ' + platform.charAt(0).toUpperCase() + platform.slice(1));
}

// Content Calendar functionality
// Wrap calendar variables to avoid redeclaration issues
(function() {
    window.currentDate = new Date();
    window.currentMonth = window.currentDate.getMonth();
    window.currentYear = window.currentDate.getFullYear();
})();

// Sample content data
const sampleContent = {
    '2024-12-15': [
        { platform: 'instagram', title: 'Solar Panel Installation', time: '10:00 AM' },
        { platform: 'facebook', title: 'Energy Efficiency Tips', time: '2:00 PM' }
    ],
    '2024-12-18': [
        { platform: 'linkedin', title: 'Industry Insights Article', time: '9:00 AM' },
        { platform: 'youtube', title: 'Wind Energy Documentary', time: '3:00 PM' }
    ],
    '2024-12-22': [
        { platform: 'tiktok', title: 'Quick Energy Facts', time: '6:00 PM' },
        { platform: 'twitter', title: 'Sustainability News', time: '12:00 PM' }
    ],
    '2024-12-25': [
        { platform: 'instagram', title: 'Holiday Energy Savings', time: '11:00 AM' }
    ],
    '2024-12-28': [
        { platform: 'facebook', title: 'Year-End Review', time: '1:00 PM' },
        { platform: 'linkedin', title: '2025 Predictions', time: '4:00 PM' }
    ]
};

// Initialize Content Calendar
function initializeContentCalendar() {
    console.log('📅 Initializing Content Calendar...');
    
    // Add event listeners
    document.getElementById('prev-month').addEventListener('click', previousMonth);
    document.getElementById('next-month').addEventListener('click', nextMonth);
    document.getElementById('add-content').addEventListener('click', addContent);
    document.getElementById('view-mode').addEventListener('click', toggleViewMode);
    
    // Generate calendar
    generateCalendar();
    
    console.log('✅ Content Calendar initialized');
}

// Generate calendar grid
function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    // Update month display
    document.getElementById('current-month').textContent = 
        `${monthNames[window.currentMonth]} ${window.currentYear}`;
    
    // Clear existing calendar
    calendarGrid.innerHTML = '';
    
    // Get first day of month and number of days
    const firstDay = new Date(window.currentYear, window.currentMonth, 1);
    const lastDay = new Date(window.currentYear, window.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        const prevMonthDay = new Date(window.currentYear, window.currentMonth, -startingDayOfWeek + i + 1);
        const dayElement = createDayElement(prevMonthDay.getDate(), true, prevMonthDay);
        calendarGrid.appendChild(dayElement);
    }
    
    // Add days of current month
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(window.currentYear, window.currentMonth, day);
        const isToday = isSameDay(date, new Date());
        const dayElement = createDayElement(day, false, date, isToday);
        calendarGrid.appendChild(dayElement);
    }
    
    // Add empty cells for days after month ends
    const totalCells = calendarGrid.children.length;
    const remainingCells = 42 - totalCells; // 6 weeks * 7 days
    for (let i = 1; i <= remainingCells; i++) {
        const nextMonthDay = new Date(window.currentYear, window.currentMonth + 1, i);
        const dayElement = createDayElement(i, true, nextMonthDay);
        calendarGrid.appendChild(dayElement);
    }
}

// Create day element
function createDayElement(dayNumber, isOtherMonth, date, isToday = false) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    
    if (isOtherMonth) {
        dayElement.classList.add('other-month');
    }
    
    if (isToday) {
        dayElement.classList.add('today');
    }
    
    // Create day number
    const dayNumberElement = document.createElement('div');
    dayNumberElement.className = 'day-number';
    if (isOtherMonth) {
        dayNumberElement.classList.add('other-month');
    }
    dayNumberElement.textContent = dayNumber;
    dayElement.appendChild(dayNumberElement);
    
    // Add content items if they exist
    const dateString = formatDate(date);
    if (sampleContent[dateString]) {
        const contentItems = document.createElement('div');
        contentItems.className = 'content-items';
        
        sampleContent[dateString].forEach(content => {
            const contentItem = document.createElement('div');
            contentItem.className = `content-item ${content.platform}`;
            contentItem.textContent = `${content.time} - ${content.title}`;
            contentItem.title = `${content.platform.toUpperCase()}: ${content.title}`;
            contentItems.appendChild(contentItem);
        });
        
        dayElement.appendChild(contentItems);
    }
    
    // Add click handler
    dayElement.addEventListener('click', () => {
        selectDay(date, dayElement);
    });
    
    return dayElement;
}

// Helper functions
function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
}

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function previousMonth() {
    window.currentMonth--;
    if (window.currentMonth < 0) {
        window.currentMonth = 11;
        window.currentYear--;
    }
    generateCalendar();
}

function nextMonth() {
    window.currentMonth++;
    if (window.currentMonth > 11) {
        window.currentMonth = 0;
        window.currentYear++;
    }
    generateCalendar();
}

function addContent() {
    showNotification('Add Content feature coming soon!');
}

function toggleViewMode() {
    showNotification('View mode toggle coming soon!');
}

function selectDay(date, dayElement) {
    // Remove previous selection
    document.querySelectorAll('.calendar-day.selected').forEach(day => {
        day.classList.remove('selected');
    });
    
    // Add selection to clicked day
    dayElement.classList.add('selected');
    
    const dateString = formatDate(date);
    console.log('Selected date:', dateString);
    showNotification(`Selected ${dateString}`);
}

// Initialize AI Virtual Assistant
function initializeAIVirtualAssistant() {
    console.log('🤖 Initializing AI Virtual Assistant...');
    
    // Add tab click handlers
    const aiTabButtons = document.querySelectorAll('.ai-tab-btn');
    console.log('Found AI tab buttons:', aiTabButtons.length);
    
    aiTabButtons.forEach((button, index) => {
        console.log(`Setting up tab button ${index}:`, button.textContent.trim());
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-ai-tab');
            console.log('Tab clicked:', tabId);
            switchAITab(tabId);
        });
    });
    
    // Initialize static map for lead finder
    initializeStaticMap();
    
    // Test dialer functions
    const dialButton = document.querySelector('.btn-dial');
    if (dialButton) {
        console.log('✅ Dial button found:', dialButton);
    } else {
        console.log('❌ Dial button NOT found');
    }
    
    const callButtons = document.querySelectorAll('.call-btn');
    console.log('Found call buttons:', callButtons.length);
    
    console.log('✅ AI Virtual Assistant initialized with', aiTabButtons.length, 'tabs');
}

// Switch AI tabs
function switchAITab(tabId) {
    console.log('🔄 Switching to AI tab:', tabId);
    
    // Update active tab button
    const aiTabButtons = document.querySelectorAll('.ai-tab-btn');
    aiTabButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-ai-tab="${tabId}"]`).classList.add('active');
    
    // Show corresponding tab content
    const aiTabContents = document.querySelectorAll('.ai-tab-content');
    aiTabContents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId + '-tab').classList.add('active');
    
    console.log('✅ AI tab activated:', tabId);
}

// AI Dialer functions
function startCall() {
    console.log('📞 startCall function called!');
    const phoneNumber = document.getElementById('phone-number').value;
    console.log('Phone number input:', phoneNumber);
    
    if (phoneNumber) {
        console.log('📞 Starting call to:', phoneNumber);
        showNotification(`Calling ${phoneNumber}...`);
        
        // Add to call history
        addCallToHistory(phoneNumber, 'Unknown Contact', '2:15', 'completed');
        
        // Clear input
        document.getElementById('phone-number').value = '';
    } else {
        console.log('❌ No phone number entered');
        showNotification('Please enter a phone number');
    }
}

function answerCall() {
    console.log('📞 Answering call');
    showNotification('Call answered');
}

function endCall() {
    console.log('📞 Ending call');
    showNotification('Call ended');
}

function hangupCall() {
    console.log('📞 Hanging up call');
    showNotification('Call ended');
}

function toggleMute() {
    console.log('🔇 Toggling mute');
    showNotification('Mute toggled');
}

function redialCall(phoneNumber, contactName) {
    console.log('📞 Redialing:', phoneNumber);
    document.getElementById('phone-number').value = phoneNumber;
    showNotification(`Redialing ${contactName} (${phoneNumber})`);
}

function deleteCall(callId) {
    console.log('🗑️ Deleting call:', callId);
    const callItem = document.querySelector(`[data-call-id="${callId}"]`);
    if (callItem) {
        callItem.remove();
        showNotification('Call deleted from history');
    }
}

function clearCallHistory() {
    console.log('🗑️ Clearing call history');
    const historyList = document.getElementById('call-history-list');
    historyList.innerHTML = '';
    showNotification('Call history cleared');
}

function addCallToHistory(phoneNumber, contactName, duration, status) {
    const historyList = document.getElementById('call-history-list');
    const callId = Date.now(); // Simple ID generation
    
    const callItem = document.createElement('div');
    callItem.className = 'history-item';
    callItem.setAttribute('data-call-id', callId);
    callItem.onclick = () => redialCall(phoneNumber, contactName);
    
    callItem.innerHTML = `
        <div class="call-info">
            <span class="call-number">${phoneNumber}</span>
            <span class="call-name">${contactName}</span>
        </div>
        <div class="call-details">
            <span class="call-time">${duration}</span>
            <span class="call-status ${status}">${status.charAt(0).toUpperCase() + status.slice(1)}</span>
        </div>
        <div class="call-actions">
            <button class="action-btn redial" onclick="event.stopPropagation(); redialCall('${phoneNumber}', '${contactName}')">
                <i class="fas fa-phone"></i>
            </button>
            <button class="action-btn delete" onclick="event.stopPropagation(); deleteCall(${callId})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    historyList.insertBefore(callItem, historyList.firstChild);
}

// AI Chatbot functions
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message) {
        addMessageToChat(message, 'user');
        messageInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate bot response
        setTimeout(() => {
            hideTypingIndicator();
            const responses = getBotResponse(message);
            addMessageToChat(responses, 'bot');
        }, 1500);
    }
}

function toggleChatbotSettings() {
    console.log('🤖 Toggling chatbot settings');
    showNotification('Chatbot settings toggled');
    // Placeholder for chatbot settings functionality
}

function sendQuickResponse(responseText) {
    addMessageToChat(responseText, 'user');
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate bot response
    setTimeout(() => {
        hideTypingIndicator();
        const responses = getBotResponse(responseText);
        addMessageToChat(responses, 'bot');
    }, 1500);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function clearChat() {
    console.log('🗑️ Clearing chat');
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    
    // Add welcome message back
    addMessageToChat("Hello! I'm your AI assistant. How can I help you with your energy needs today?", 'bot');
    showNotification('Chat cleared');
}

function exportChat() {
    console.log('📥 Exporting chat');
    const chatMessages = document.getElementById('chat-messages');
    const messages = chatMessages.querySelectorAll('.message');
    
    let chatText = 'ENERGY+ AI Chatbot Conversation\n';
    chatText += '=====================================\n\n';
    
    messages.forEach(message => {
        const sender = message.classList.contains('user-message') ? 'User' : 'AI Assistant';
        const content = message.querySelector('.message-content').textContent;
        const time = message.querySelector('.message-time').textContent;
        
        chatText += `[${time}] ${sender}: ${content}\n\n`;
    });
    
    // Create and download file
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `energy-plus-chat-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Chat exported successfully');
}

function toggleTyping() {
    const typingStatus = document.getElementById('typing-status');
    const isOn = typingStatus.textContent === 'ON';
    typingStatus.textContent = isOn ? 'OFF' : 'ON';
    showNotification(`Typing indicator ${isOn ? 'disabled' : 'enabled'}`);
}

function showTypingIndicator() {
    const chatMessages = document.getElementById('chat-messages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.id = 'typing-indicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('solar') || message.includes('panel')) {
        return "Great! Solar panels are an excellent renewable energy solution. They can reduce your electricity bills by up to 90% and have a lifespan of 25-30 years. What's your average monthly electricity consumption?";
    } else if (message.includes('wind') || message.includes('turbine')) {
        return "Wind energy is perfect for areas with consistent wind patterns. Small wind turbines can generate 1-10 kW of power. Do you live in a windy area?";
    } else if (message.includes('rate') || message.includes('price') || message.includes('cost')) {
        return "Our energy rates are competitive and transparent. We offer flexible pricing plans starting from $0.08/kWh. Would you like to see our pricing calculator?";
    } else if (message.includes('consultation') || message.includes('schedule')) {
        return "I'd be happy to schedule a consultation! Our energy experts can assess your property and recommend the best renewable energy solutions. What's your preferred time?";
    } else if (message.includes('help') || message.includes('support')) {
        return "I'm here to help! I can assist with solar panels, wind energy, energy rates, consultations, and more. What specific information do you need?";
    } else {
        const responses = [
            "That's interesting! I'd be happy to help you with that. Could you provide more details?",
            "I understand your question. Let me provide you with the most relevant information.",
            "Great question! Here's what I can tell you about that topic.",
            "I can definitely help you with that. What specific aspect would you like to know more about?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">${message}</div>
            <div class="message-time">${timeString}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">${message}</div>
            <div class="message-time">${timeString}</div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Make functions globally accessible
window.debugDashboard = debugDashboard;

window.startCall = startCall;
window.answerCall = answerCall;
window.hangupCall = hangupCall;
window.toggleMute = toggleMute;
window.redialCall = redialCall;
window.deleteCall = deleteCall;
window.clearCallHistory = clearCallHistory;
window.sendMessage = sendMessage;
window.sendQuickResponse = sendQuickResponse;
window.handleKeyPress = handleKeyPress;
window.clearChat = clearChat;
window.exportChat = exportChat;
window.toggleTyping = toggleTyping;
window.initializeTeslaInstallation = initializeTeslaInstallation;
window.showTeslaInstallationDetails = showTeslaInstallationDetails;
window.toggleTeslaSmartMeter = toggleTeslaSmartMeter;
// window.addInstallation = addInstallation; // Function removed - no longer needed

// Tesla Installation Dashboard Functions
function initializeTeslaInstallation() {
    console.log('🚗 Initializing Tesla Installation Dashboard...');
    
    // Add click handlers to Tesla installation markers
    const teslaMarkers = document.querySelectorAll('.tesla-marker');
    teslaMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const installationId = this.getAttribute('data-installation');
            console.log('Tesla installation clicked:', installationId);
            showTeslaInstallationDetails(installationId);
        });
    });
    
    // Initialize smart meter toggle
    const smartMeterToggle = document.getElementById('smart-meter-toggle');
    if (smartMeterToggle) {
        smartMeterToggle.classList.add('active');
    }
    
    console.log('✅ Tesla Installation Dashboard initialized with', teslaMarkers.length, 'installations');
}

function showTeslaInstallationDetails(installationId) {
    console.log('📋 Showing Tesla installation details:', installationId);
    
    const installationData = {
        '1': {
            name: 'Solar Farm Alpha',
            installer: 'Tesla Energy',
            progress: 'Completed',
            location: 'Lagos, Nigeria',
            date: 'Dec 15, 2024',
            energyProduced: '1,247 kWh',
            co2Saved: '623 tons',
            costSavings: '$37,410'
        },
        '2': {
            name: 'Wind Turbine Beta',
            installer: 'Tesla Energy',
            progress: '75% Complete',
            location: 'Abuja, Nigeria',
            date: 'Dec 20, 2024',
            energyProduced: '892 kWh',
            co2Saved: '446 tons',
            costSavings: '$26,760'
        },
        '3': {
            name: 'Solar Array Gamma',
            installer: 'Tesla Energy',
            progress: 'Pending',
            location: 'Port Harcourt, Nigeria',
            date: 'Dec 25, 2024',
            energyProduced: '0 kWh',
            co2Saved: '0 tons',
            costSavings: '$0'
        },
        '4': {
            name: 'Hybrid System Delta',
            installer: 'Tesla Energy',
            progress: 'Completed',
            location: 'Kano, Nigeria',
            date: 'Dec 10, 2024',
            energyProduced: '1,892 kWh',
            co2Saved: '946 tons',
            costSavings: '$56,760'
        }
    };
    
    const data = installationData[installationId];
    if (data) {
        showNotification(`Tesla ${data.name}: ${data.progress} • ${data.energyProduced} produced • ${data.costSavings} saved`);
    }
}

function toggleTeslaSmartMeter() {
    console.log('📊 Toggling Tesla Smart Meter');
    const smartMeterToggle = document.getElementById('smart-meter-toggle');
    const statusText = document.getElementById('smart-meter-status');
    
    if (smartMeterToggle.classList.contains('active')) {
        smartMeterToggle.classList.remove('active');
        statusText.textContent = 'Smart Meter Not Connected ❌';
        showNotification('Smart Meter disconnected');
    } else {
        smartMeterToggle.classList.add('active');
        statusText.textContent = 'Smart Meter Connected ✅';
        showNotification('Smart Meter connected');
    }
}

// AI Content Generation functions removed

function selectTeslaProvider(provider) {
    console.log(`🎯 Selected provider: ${provider}`);
    
    // Remove active class from all cards in current grid
    const activeGrid = document.querySelector('.provider-grid.active');
    activeGrid.querySelectorAll('.provider-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Add active class to selected card
    document.querySelector(`[data-provider="${provider}"]`).classList.add('active');
}

function generateTeslaContent() {
    console.log('✨ Generating Tesla content...');
    
    const prompt = document.getElementById('ai-prompt').value;
    const activeTab = document.querySelector('.tesla-tab.active');
    const activeCard = document.querySelector('.provider-grid.active .provider-card.active');
    
    if (!prompt.trim()) {
        showNotification('Please enter a prompt to generate content!');
        return;
    }
    
    const contentType = activeTab.getAttribute('data-type');
    const provider = activeCard.getAttribute('data-provider');
    
    console.log(`Generating ${contentType} content using ${provider} with prompt: "${prompt}"`);
    
    // Show loading state
    showTeslaGenerationLoading();
    
    // Simulate generation process
    setTimeout(() => {
        showTeslaGeneratedResult(contentType, provider, prompt);
    }, 2000);
}

function showTeslaGenerationLoading() {
    const outputPreview = document.querySelector('.output-preview');
    const outputStatus = document.querySelector('.output-status');
    
    outputPreview.innerHTML = `
        <div class="tesla-loading">
            <div class="tesla-spinner"></div>
            <p>Generating your content...</p>
        </div>
    `;
    
    outputStatus.innerHTML = `
        <div class="status-dot"></div>
        <span>Generating</span>
    `;
}

function showTeslaGeneratedResult(contentType, provider, prompt) {
    const outputPreview = document.querySelector('.output-preview');
    const outputStatus = document.querySelector('.output-status');
    
    let resultHTML = '';
    
    switch(contentType) {
        case 'copywriting':
            resultHTML = `
                <div class="tesla-result">
                    <h4>Generated Copy</h4>
                    <div class="result-content">
                        <p><strong>Prompt:</strong> "${prompt}"</p>
                        <div class="generated-text">
                            <p>🚀 Transform your energy business with cutting-edge AI solutions that deliver unprecedented efficiency and sustainability. Our advanced platform integrates seamlessly with your existing infrastructure, providing real-time insights and automated optimization that drives measurable results.</p>
                            <p>💡 Experience the future of energy management today. Join thousands of forward-thinking companies already leveraging our innovative technology to reduce costs, increase productivity, and achieve their sustainability goals.</p>
                            <p>⚡ Ready to revolutionize your energy operations? Contact us now for a personalized demo and discover how our AI-powered solutions can transform your business.</p>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'image':
            resultHTML = `
                <div class="tesla-result">
                    <h4>Generated Image</h4>
                    <div class="result-content">
                        <p><strong>Prompt:</strong> "${prompt}"</p>
                        <div class="image-placeholder">
                            <i class="fas fa-image"></i>
                            <p>AI-generated image would appear here</p>
                            <small>Generated using ${provider}</small>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'video':
            resultHTML = `
                <div class="tesla-result">
                    <h4>Generated Video</h4>
                    <div class="result-content">
                        <p><strong>Prompt:</strong> "${prompt}"</p>
                        <div class="video-placeholder">
                            <i class="fas fa-play-circle"></i>
                            <p>AI-generated video would appear here</p>
                            <small>Generated using ${provider}</small>
                            ${provider === 'veo3' ? '<div class="veo3-feature"><strong>🎬 Google VEO3:</strong> Next-generation text-to-video creation with advanced AI capabilities</div>' : ''}
                        </div>
                    </div>
                </div>
            `;
            break;
    }
    
    outputPreview.innerHTML = resultHTML;
    outputStatus.innerHTML = `
        <div class="status-dot"></div>
        <span>Complete</span>
    `;
    
    showNotification('Content generated successfully!');
}

// Tesla Marketing Tracker Functions
function initializeTeslaMarketingTracker() {
    console.log('Initializing Tesla Marketing Tracker...');
    
    // Initialize campaign selector
    const campaignSelector = document.getElementById('campaign-selector');
    if (campaignSelector) {
        campaignSelector.addEventListener('change', function() {
            updateCampaignData(this.value);
        });
    }
    
    // Initialize graph controls
    const graphButtons = document.querySelectorAll('.tesla-btn[data-period]');
    graphButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            graphButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update graph data based on period
            updateTeslaGraph(this.dataset.period);
        });
    });
    
    // Initialize Tesla performance graph
    initializeTeslaPerformanceGraph();
    
    // Start live data updates
    startTeslaLiveUpdates();
}

function initializeTeslaPerformanceGraph() {
    const canvas = document.getElementById('tesla-performance-graph');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    // Draw Tesla-style performance graph
    drawTeslaGraph(ctx, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
}

function drawTeslaGraph(ctx, width, height) {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Set up graph area
    const padding = 40;
    const graphWidth = width - (padding * 2);
    const graphHeight = height - (padding * 2);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    
    // Vertical grid lines
    for (let i = 0; i <= 10; i++) {
        const x = padding + (graphWidth / 10) * i;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, padding + graphHeight);
        ctx.stroke();
    }
    
    // Horizontal grid lines
    for (let i = 0; i <= 6; i++) {
        const y = padding + (graphHeight / 6) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(padding + graphWidth, y);
        ctx.stroke();
    }
    
    // Sample performance data (impressions over time)
    const dataPoints = [
        { x: 0, y: 0.3 },
        { x: 1, y: 0.4 },
        { x: 2, y: 0.35 },
        { x: 3, y: 0.5 },
        { x: 4, y: 0.6 },
        { x: 5, y: 0.55 },
        { x: 6, y: 0.7 },
        { x: 7, y: 0.8 },
        { x: 8, y: 0.75 },
        { x: 9, y: 0.9 },
        { x: 10, y: 1.0 }
    ];
    
    // Draw Tesla-style glowing line
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, 'rgba(0, 255, 204, 0.8)');
    gradient.addColorStop(0.5, 'rgba(0, 255, 204, 1)');
    gradient.addColorStop(1, 'rgba(0, 255, 204, 0.8)');
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00ffcc';
    ctx.shadowBlur = 10;
    
    ctx.beginPath();
    dataPoints.forEach((point, index) => {
        const x = padding + (graphWidth / 10) * point.x;
        const y = padding + graphHeight - (graphHeight * point.y);
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
    // Draw data points
    ctx.shadowBlur = 0;
    dataPoints.forEach((point, index) => {
        const x = padding + (graphWidth / 10) * point.x;
        const y = padding + graphHeight - (graphHeight * point.y);
        
        ctx.fillStyle = '#00ffcc';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
        
        // Add glow effect to active point
        if (index === dataPoints.length - 1) {
            ctx.shadowColor = '#00ffcc';
            ctx.shadowBlur = 15;
            ctx.beginPath();
            ctx.arc(x, y, 6, 0, 2 * Math.PI);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    });
    
    // Draw axis labels
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    // Y-axis labels
    const yLabels = ['0', '200K', '400K', '600K', '800K', '1M', '1.2M'];
    yLabels.forEach((label, index) => {
        const y = padding + graphHeight - (graphHeight / 6) * index;
        ctx.fillText(label, padding - 20, y + 4);
    });
    
    // X-axis labels
    ctx.textAlign = 'center';
    const xLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    xLabels.forEach((label, index) => {
        const x = padding + (graphWidth / 7) * index + (graphWidth / 14);
        ctx.fillText(label, x, padding + graphHeight + 20);
    });
}

function updateTeslaGraph(period) {
    console.log(`Updating Tesla graph for period: ${period}`);
    
    // Re-draw graph with new data based on period
    setTimeout(() => {
        initializeTeslaPerformanceGraph();
    }, 300);
}

function startTeslaLiveUpdates() {
    // Simulate live data updates every 30 seconds
    setInterval(() => {
        updateTeslaKPIs();
        updateTeslaSocialMetrics();
    }, 30000);
}

function updateTeslaKPIs() {
    const kpiCards = document.querySelectorAll('.kpi-card');
    kpiCards.forEach(card => {
        // Add subtle animation to indicate update
        card.style.transform = 'scale(1.02)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Update timestamp
    const kpiStatus = document.querySelector('.kpi-status span:last-child');
    if (kpiStatus) {
        kpiStatus.textContent = 'Updated just now';
    }
}

function updateTeslaSocialMetrics() {
    const socialPlatforms = document.querySelectorAll('.social-platform');
    socialPlatforms.forEach(platform => {
        // Add subtle animation to indicate update
        platform.style.transform = 'translateY(-2px) scale(1.02)';
        setTimeout(() => {
            platform.style.transform = 'translateY(0) scale(1)';
        }, 200);
    });
}

// Campaign Management Functions
function updateCampaignData(campaignId) {
    console.log(`Updating data for campaign: ${campaignId}`);
    
    // Sample campaign data
    const campaignData = {
        'solar-summer-2024': {
            leads: '1,247',
            conversion: '4.7%',
            costPerLead: '$156',
            adSpend: '$12.4K',
            roi: '$45.2K',
            ctr: '3.2%',
            solarInquiries: '234',
            appointments: '89',
            kWhImpacted: '2.3M',
            impressions: '2.4M',
            videoViews: '156K',
            engagement: '6.8%',
            traffic: '89K'
        },
        'wind-energy-q3': {
            leads: '892',
            conversion: '3.8%',
            costPerLead: '$189',
            adSpend: '$8.7K',
            roi: '$32.1K',
            ctr: '2.9%',
            solarInquiries: '156',
            appointments: '67',
            kWhImpacted: '1.8M',
            impressions: '1.9M',
            videoViews: '98K',
            engagement: '5.2%',
            traffic: '67K'
        },
        'green-tech-launch': {
            leads: '1,567',
            conversion: '5.2%',
            costPerLead: '$134',
            adSpend: '$15.2K',
            roi: '$58.7K',
            ctr: '4.1%',
            solarInquiries: '312',
            appointments: '124',
            kWhImpacted: '3.1M',
            impressions: '3.2M',
            videoViews: '234K',
            engagement: '8.3%',
            traffic: '124K'
        },
        'sustainability-drive': {
            leads: '1,089',
            conversion: '4.1%',
            costPerLead: '$167',
            adSpend: '$9.8K',
            roi: '$38.9K',
            ctr: '3.5%',
            solarInquiries: '198',
            appointments: '78',
            kWhImpacted: '2.1M',
            impressions: '2.3M',
            videoViews: '145K',
            engagement: '7.1%',
            traffic: '95K'
        },
        'winter-efficiency': {
            leads: '756',
            conversion: '3.2%',
            costPerLead: '$203',
            adSpend: '$6.4K',
            roi: '$24.6K',
            ctr: '2.6%',
            solarInquiries: '134',
            appointments: '45',
            kWhImpacted: '1.4M',
            impressions: '1.6M',
            videoViews: '87K',
            engagement: '4.8%',
            traffic: '58K'
        }
    };
    
    const data = campaignData[campaignId] || campaignData['solar-summer-2024'];
    
    // Update KPI values with animation
    updateKPIValue('.kpi-card:nth-child(1) .kpi-value', data.leads);
    updateKPIValue('.kpi-card:nth-child(2) .kpi-value', data.conversion);
    updateKPIValue('.kpi-card:nth-child(3) .kpi-value', data.costPerLead);
    updateKPIValue('.kpi-group:nth-child(2) .kpi-card:nth-child(1) .kpi-value', data.adSpend);
    updateKPIValue('.kpi-group:nth-child(2) .kpi-card:nth-child(2) .kpi-value', data.roi);
    updateKPIValue('.kpi-group:nth-child(2) .kpi-card:nth-child(3) .kpi-value', data.ctr);
    updateKPIValue('.kpi-group:nth-child(3) .kpi-card:nth-child(1) .kpi-value', data.solarInquiries);
    updateKPIValue('.kpi-group:nth-child(3) .kpi-card:nth-child(2) .kpi-value', data.appointments);
    updateKPIValue('.kpi-group:nth-child(3) .kpi-card:nth-child(3) .kpi-value', data.kWhImpacted);
    
    // Update social metrics if visible
    const socialGroup = document.getElementById('social-metrics-group');
    if (socialGroup && socialGroup.style.display !== 'none') {
        updateKPIValue('#social-metrics-group .kpi-card:nth-child(1) .kpi-value', data.impressions);
        updateKPIValue('#social-metrics-group .kpi-card:nth-child(2) .kpi-value', data.videoViews);
        updateKPIValue('#social-metrics-group .kpi-card:nth-child(3) .kpi-value', data.engagement);
        updateKPIValue('#social-metrics-group .kpi-card:nth-child(4) .kpi-value', data.traffic);
    }
    
    // Update graph point value
    const pointValue = document.querySelector('.point-value');
    if (pointValue) {
        pointValue.textContent = data.impressions;
    }
    
    // Re-draw graph with new data
    setTimeout(() => {
        initializeTeslaPerformanceGraph();
    }, 300);
}

function updateKPIValue(selector, newValue) {
    const element = document.querySelector(selector);
    if (element) {
        // Add animation effect
        element.style.transform = 'scale(1.1)';
        element.style.color = '#00ffcc';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
            element.style.color = '#ffffff';
        }, 150);
    }
}

function toggleSocialMetrics() {
    const toggle = document.getElementById('social-metrics-toggle');
    const socialGroup = document.getElementById('social-metrics-group');
    
    if (toggle && socialGroup) {
        if (toggle.checked) {
            socialGroup.style.display = 'block';
            // Update social metrics with current campaign data
            const campaignSelector = document.getElementById('campaign-selector');
            if (campaignSelector) {
                updateCampaignData(campaignSelector.value);
            }
        } else {
            socialGroup.style.display = 'none';
        }
    }
}

function addNewCampaign() {
    console.log('Opening add campaign modal...');
    // Placeholder for add campaign functionality
    showNotification('Add Campaign feature coming soon!');
}

function manageCampaigns() {
    console.log('Opening campaign management...');
    // Placeholder for campaign management functionality
    showNotification('Campaign Management feature coming soon!');
}

// Make functions globally accessible
window.initializeTeslaMarketingTracker = initializeTeslaMarketingTracker;
window.updateTeslaGraph = updateTeslaGraph;
window.toggleSocialMetrics = toggleSocialMetrics;
window.addNewCampaign = addNewCampaign;
window.manageCampaigns = manageCampaigns;
window.generateTeslaContent = generateTeslaContent;
window.switchToPage = switchToPage;
window.initializeDashboard = initializeDashboard;
window.initializeAutomationHub = initializeAutomationHub;
window.initializeMarketingTracker = initializeMarketingTracker;
window.initializeContentCalendar = initializeContentCalendar;
window.initializeAIVirtualAssistant = initializeAIVirtualAssistant;
window.initializeTeslaInstallation = initializeTeslaInstallation;
window.initializeTeslaMarketingTracker = initializeTeslaMarketingTracker;
window.showNotification = showNotification;
window.toggleTeslaSmartMeter = toggleTeslaSmartMeter;
window.updateCampaignData = updateCampaignData;
window.updateKPIValue = updateKPIValue;
window.startCall = startCall;
window.answerCall = answerCall;
window.endCall = endCall;
window.sendMessage = sendMessage;
window.toggleChatbotSettings = toggleChatbotSettings;
window.previousMonth = previousMonth;
window.nextMonth = nextMonth;
window.addContent = addContent;
window.toggleViewMode = toggleViewMode;
window.showTeslaInstallationDetails = showTeslaInstallationDetails;

// ========================================
// CONTACT MANAGEMENT FUNCTIONS
// ========================================

// Initialize Contact Management
function initializeContact() {
    console.log('📞 Initializing Contact Management...');
    
    // Check if contact page exists
    const contactPage = document.getElementById('contact');
    if (!contactPage) {
        console.error('Contact page not found');
        return;
    }
    
    // Load data from localStorage or use sample data
    const savedLeads = localStorage.getItem('energyLeads');
    const savedClients = localStorage.getItem('energyClients');
    
    if (savedLeads) {
        window.leadsData = JSON.parse(savedLeads);
    } else {
        localStorage.setItem('energyLeads', JSON.stringify(window.leadsData));
    }
    
    if (savedClients) {
        window.clientsData = JSON.parse(savedClients);
    } else {
        localStorage.setItem('energyClients', JSON.stringify(window.clientsData));
    }
    
    // Initialize displays
    displayLeads();
    displayClients();
    updateMetrics();
    
    // Add search functionality
    const leadSearch = document.getElementById('lead-search');
    const clientSearch = document.getElementById('client-search');
    
    if (leadSearch) {
        leadSearch.addEventListener('input', filterLeads);
    }
    
    if (clientSearch) {
        clientSearch.addEventListener('input', filterClients);
    }
    
    console.log('Contact Management initialized');
}

// Display leads in pipeline
function displayLeads() {
    const newLeads = window.leadsData.filter(lead => lead.status === 'new');
    const qualifiedLeads = window.leadsData.filter(lead => lead.status === 'qualified');
    const proposalLeads = window.leadsData.filter(lead => lead.status === 'proposal');
    
    // Update counts
    const newCountElement = document.querySelector('#new-leads')?.previousElementSibling;
    const qualifiedCountElement = document.querySelector('#qualified-leads')?.previousElementSibling;
    const proposalCountElement = document.querySelector('#proposal-leads')?.previousElementSibling;
    
    if (newCountElement) newCountElement.textContent = newLeads.length;
    if (qualifiedCountElement) qualifiedCountElement.textContent = qualifiedLeads.length;
    if (proposalCountElement) proposalCountElement.textContent = proposalLeads.length;
    
    // Display lead cards
    displayLeadCards('new-leads', newLeads);
    displayLeadCards('qualified-leads', qualifiedLeads);
    displayLeadCards('proposal-leads', proposalLeads);
}

// Display lead cards
function displayLeadCards(containerId, leads) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`Container with id '${containerId}' not found`);
        return;
    }
    
    container.innerHTML = '';
    
    leads.forEach(lead => {
        const leadCard = createLeadCard(lead);
        container.appendChild(leadCard);
    });
}

// Create lead card element
function createLeadCard(lead) {
    const card = document.createElement('div');
    card.className = 'lead-card';
    card.innerHTML = `
        <h5>${lead.name}</h5>
        <p><i class="fas fa-envelope"></i> ${lead.email}</p>
        <p><i class="fas fa-phone"></i> ${lead.phone}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${lead.location}</p>
        <p><i class="fas fa-bolt"></i> ${lead.energyUsage} kWh/month</p>
        <div class="lead-score">Score: ${lead.score}</div>
        <div class="lead-actions">
            <button class="action-btn" onclick="callLead('${lead.phone}')" title="Call">
                <i class="fas fa-phone"></i>
            </button>
            <button class="action-btn" onclick="emailLead('${lead.email}')" title="Email">
                <i class="fas fa-envelope"></i>
            </button>
            <button class="action-btn" onclick="convertToClient(${lead.id})" title="Convert">
                <i class="fas fa-user-check"></i>
            </button>
        </div>
    `;
    return card;
}

// Display clients
function displayClients() {
    const clientsGrid = document.getElementById('clients-grid');
    clientsGrid.innerHTML = '';
    
    window.clientsData.forEach(client => {
        const clientCard = createClientCard(client);
        clientsGrid.appendChild(clientCard);
    });
}

// Create client card element
function createClientCard(client) {
    const card = document.createElement('div');
    card.className = 'client-card';
    card.innerHTML = `
        <div class="client-info">
            <h4>${client.name}</h4>
            <p><i class="fas fa-envelope"></i> ${client.email}</p>
            <p><i class="fas fa-phone"></i> ${client.phone}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${client.location}</p>
            <p><i class="fas fa-solar-panel"></i> ${client.systemType} ${client.systemSize}</p>
            <p><i class="fas fa-calendar"></i> Installed: ${new Date(client.installationDate).toLocaleDateString()}</p>
            <div class="client-status ${client.status}">${client.status}</div>
        </div>
        <div class="client-actions">
            <button class="action-btn" onclick="viewClient(${client.id})" title="View Details">
                <i class="fas fa-eye"></i>
            </button>
            <button class="action-btn" onclick="editClient(${client.id})" title="Edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="action-btn" onclick="scheduleService(${client.id})" title="Schedule Service">
                <i class="fas fa-calendar"></i>
            </button>
        </div>
    `;
    return card;
}

// Update metrics
function updateMetrics() {
    const totalClients = window.clientsData.length;
    const systemUsers = window.clientsData.filter(client => client.status === 'active').length;
    const qualifiedUsers = window.clientsData.filter(client => client.status === 'qualified').length;
    
    document.getElementById('total-clients').textContent = totalClients;
    document.getElementById('system-users').textContent = systemUsers;
    document.getElementById('qualified-users').textContent = qualifiedUsers;
}

// Filter leads
function filterLeads() {
    const searchTerm = document.getElementById('lead-search').value.toLowerCase();
    const filteredLeads = window.leadsData.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm) ||
        lead.email.toLowerCase().includes(searchTerm) ||
        lead.location.toLowerCase().includes(searchTerm)
    );
    
    // Update display with filtered results
    displayFilteredLeads(filteredLeads);
}

// Display filtered leads
function displayFilteredLeads(filteredLeads) {
    const newLeads = filteredLeads.filter(lead => lead.status === 'new');
    const qualifiedLeads = filteredLeads.filter(lead => lead.status === 'qualified');
    const proposalLeads = filteredLeads.filter(lead => lead.status === 'proposal');
    
    displayLeadCards('new-leads', newLeads);
    displayLeadCards('qualified-leads', qualifiedLeads);
    displayLeadCards('proposal-leads', proposalLeads);
}

// Filter clients
function filterClients() {
    const searchTerm = document.getElementById('client-search').value.toLowerCase();
    const filteredClients = window.clientsData.filter(client => 
        client.name.toLowerCase().includes(searchTerm) ||
        client.email.toLowerCase().includes(searchTerm) ||
        client.location.toLowerCase().includes(searchTerm) ||
        client.systemType.toLowerCase().includes(searchTerm)
    );
    
    displayFilteredClients(filteredClients);
}

// Display filtered clients
function displayFilteredClients(filteredClients) {
    const clientsGrid = document.getElementById('clients-grid');
    clientsGrid.innerHTML = '';
    
    filteredClients.forEach(client => {
        const clientCard = createClientCard(client);
        clientsGrid.appendChild(clientCard);
    });
}

// Add new lead
function addLead() {
    const name = prompt('Enter lead name:');
    if (!name) return;
    
    const email = prompt('Enter email:');
    const phone = prompt('Enter phone:');
    const location = prompt('Enter location:');
    const energyUsage = prompt('Enter monthly energy usage (kWh):');
    
    const newLead = {
        id: Date.now(),
        name: name,
        email: email || '',
        phone: phone || '',
        location: location || '',
        energyUsage: parseInt(energyUsage) || 0,
        source: 'Manual',
        status: 'new',
        score: calculateLeadScore(parseInt(energyUsage) || 0),
        dateAdded: new Date().toISOString()
    };
    
    window.leadsData.push(newLead);
    localStorage.setItem('energyLeads', JSON.stringify(window.leadsData));
    
    displayLeads();
    showNotification('Lead added successfully!');
}

// Add new client
function addClient() {
    const name = prompt('Enter client name:');
    if (!name) return;
    
    const email = prompt('Enter email:');
    const phone = prompt('Enter phone:');
    const location = prompt('Enter location:');
    const systemType = prompt('Enter system type (Solar/Wind/Hybrid):');
    const systemSize = prompt('Enter system size (kW):');
    
    const newClient = {
        id: Date.now(),
        name: name,
        email: email || '',
        phone: phone || '',
        location: location || '',
        systemType: systemType || 'Solar',
        systemSize: systemSize || '5kW',
        status: 'active',
        installationDate: new Date().toISOString(),
        monthlySavings: calculateSavings(parseInt(systemSize) || 5)
    };
    
    window.clientsData.push(newClient);
    localStorage.setItem('energyClients', JSON.stringify(window.clientsData));
    
    displayClients();
    updateMetrics();
    showNotification('Client added successfully!');
}

// Calculate lead score
function calculateLeadScore(energyUsage) {
    let score = 50; // Base score
    
    if (energyUsage > 2000) score += 30;
    else if (energyUsage > 1500) score += 25;
    else if (energyUsage > 1000) score += 20;
    else if (energyUsage > 500) score += 10;
    
    return Math.min(score, 100);
}

// Calculate monthly savings
function calculateSavings(systemSize) {
    return Math.round(systemSize * 30); // $30 per kW per month
}

// Lead actions
function callLead(phone) {
    showNotification(`Calling ${phone}...`);
    // Integration with AI Dialer would go here
}

function emailLead(email) {
    showNotification(`Opening email to ${email}...`);
    // Integration with email system would go here
}

function convertToClient(leadId) {
    const lead = window.leadsData.find(l => l.id === leadId);
    if (!lead) return;
    
    const systemType = prompt('Enter system type (Solar/Wind/Hybrid):');
    const systemSize = prompt('Enter system size (kW):');
    
    const newClient = {
        id: Date.now(),
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        location: lead.location,
        systemType: systemType || 'Solar',
        systemSize: systemSize || '5kW',
        status: 'active',
        installationDate: new Date().toISOString(),
        monthlySavings: calculateSavings(parseInt(systemSize) || 5)
    };
    
    window.clientsData.push(newClient);
    window.leadsData = window.leadsData.filter(l => l.id !== leadId);
    
    localStorage.setItem('energyClients', JSON.stringify(window.clientsData));
    localStorage.setItem('energyLeads', JSON.stringify(window.leadsData));
    
    displayLeads();
    displayClients();
    updateMetrics();
    showNotification('Lead converted to client successfully!');
}

// Client actions
function viewClient(clientId) {
    const client = clientsData.find(c => c.id === clientId);
    if (!client) return;
    
    alert(`Client Details:\n\nName: ${client.name}\nEmail: ${client.email}\nPhone: ${client.phone}\nLocation: ${client.location}\nSystem: ${client.systemType} ${client.systemSize}\nStatus: ${client.status}\nMonthly Savings: $${client.monthlySavings}`);
}

function editClient(clientId) {
    const client = clientsData.find(c => c.id === clientId);
    if (!client) return;
    
    const newName = prompt('Enter new name:', client.name);
    if (newName) {
        client.name = newName;
        localStorage.setItem('energyClients', JSON.stringify(clientsData));
        displayClients();
        showNotification('Client updated successfully!');
    }
}

function scheduleService(clientId) {
    const client = clientsData.find(c => c.id === clientId);
    if (!client) return;
    
    showNotification(`Scheduling service for ${client.name}...`);
    // Integration with service scheduling would go here
}

// Metric actions
function viewAllClients() {
    showNotification('Showing all clients...');
    // Could implement filtering or detailed view
}

function viewSystemUsers() {
    showNotification('Showing system users...');
    // Could implement filtering for active clients
}

function viewQualifiedUsers() {
    showNotification('Showing qualified users...');
    // Could implement filtering for qualified clients
}

// Make functions globally accessible
window.initializeContact = initializeContact;
window.addLead = addLead;
window.addClient = addClient;
window.callLead = callLead;
window.emailLead = emailLead;
window.convertToClient = convertToClient;
window.viewClient = viewClient;
window.editClient = editClient;
window.scheduleService = scheduleService;
window.viewAllClients = viewAllClients;
window.viewSystemUsers = viewSystemUsers;
window.viewQualifiedUsers = viewQualifiedUsers;

// ========================================
// AI CONTENT GENERATION FUNCTIONS
// ========================================

// Initialize AI Content Generation (Tesla Powerwall Style)
function initializeAIContentGeneration() {
    console.log('🚀 Initializing Tesla Powerwall AI Content Generation...');
    
    // Set up Tesla-style tab navigation
    setupTeslaTabNavigation();
    
    // Set up content generation
    setupTeslaContentGeneration();
    
    console.log('✅ Tesla Powerwall AI Content Generation initialized successfully');
}

// ========================================
// TESLA POWERWALL AI CONTENT GENERATION FUNCTIONS
// ========================================

let currentTeslaTab = 'copywriting';

// Set up Tesla-style tab navigation
function setupTeslaTabNavigation() {
    const tabItems = document.querySelectorAll('.tab-item');
    
    tabItems.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTeslaTab(tabName);
        });
    });
}

// Switch Tesla tab
function switchTeslaTab(tabName) {
    console.log(`🔄 Switching to Tesla tab: ${tabName}`);
    
    // Update current tab
    currentTeslaTab = tabName;
    
    // Update tab items
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    
    // Update content tabs
    document.querySelectorAll('.content-tab').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelector(`#${tabName}-content`).classList.add('active');
    
    // Add smooth transition effect
    const activeContent = document.querySelector(`#${tabName}-content`);
    activeContent.style.opacity = '0';
    activeContent.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        activeContent.style.opacity = '1';
        activeContent.style.transform = 'translateY(0)';
    }, 50);
}

// Set up Tesla content generation
function setupTeslaContentGeneration() {
    const generateBtns = document.querySelectorAll('.tesla-generate-btn');
    
    generateBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            generateTeslaContent();
        });
    });
}

// Generate Tesla content
function generateTeslaContent() {
    console.log(`🎨 Generating ${currentTeslaTab} content with Tesla style`);
    
    const textarea = document.querySelector(`#${currentTeslaTab}-content .tesla-textarea`);
    const prompt = textarea.value.trim();
    
    if (!prompt) {
        showTeslaNotification('Please enter a prompt', 'warning');
        return;
    }
    
    // Show loading state
    showTeslaLoadingState();
    
    // Simulate content generation
    setTimeout(() => {
        const content = generateTeslaMockContent(currentTeslaTab, prompt);
        displayTeslaGeneratedContent(content);
        hideTeslaLoadingState();
    }, 2000);
}

// Generate Tesla mock content
function generateTeslaMockContent(type, prompt) {
    switch(type) {
        case 'copywriting':
            return generateTeslaCopywritingContent(prompt);
        case 'image':
            return generateTeslaImageContent(prompt);
        case 'video':
            return generateTeslaVideoContent(prompt);
        default:
            return 'Generated content';
    }
}

// Generate Tesla copywriting content
function generateTeslaCopywritingContent(prompt) {
    const templates = [
        `Based on your prompt "${prompt}", here's professional energy marketing copy:\n\n"Transform your energy future with our cutting-edge solar solutions. Experience the power of clean, renewable energy that saves you money while protecting the planet. Join thousands of satisfied customers who've made the switch to sustainable living."\n\nKey Benefits:\n• 30% reduction in energy costs\n• 25-year warranty protection\n• Government incentives available\n• Professional installation team`,
        `Here's your energy marketing copy for "${prompt}":\n\n"Revolutionary solar technology meets exceptional value. Our advanced photovoltaic systems deliver maximum efficiency with minimal environmental impact. Get your free energy assessment today and discover how much you could save."\n\nTechnical Specifications:\n• 97.5% solar-to-grid efficiency\n• 11.5 kW continuous power\n• Seamless backup transition\n• 13.5 kWh energy capacity`,
        `Creative energy copy for "${prompt}":\n\n"Power your home with the sun's unlimited energy. Our state-of-the-art solar installations provide reliable, clean power for decades. With flexible financing options and expert installation, going solar has never been easier."\n\nWhy Choose Us:\n• Industry-leading technology\n• Certified installation team\n• Comprehensive warranty\n• 24/7 monitoring support`
    ];
    
    return templates[Math.floor(Math.random() * templates.length)];
}

// Generate Tesla image content
function generateTeslaImageContent(prompt) {
    return {
        type: 'image',
        url: 'https://via.placeholder.com/800x600/00ff88/000000?text=Tesla+Solar+Installation',
        alt: `Generated Tesla-style image for: ${prompt}`,
        prompt: prompt
    };
}

// Generate Tesla video content
function generateTeslaVideoContent(prompt) {
    return {
        type: 'video',
        url: 'https://via.placeholder.com/800x450/00ccff/000000?text=Tesla+Energy+Video',
        alt: `Generated Tesla-style video for: ${prompt}`,
        prompt: prompt
    };
}

// Display Tesla generated content
function displayTeslaGeneratedContent(content) {
    const outputSection = document.querySelector(`#${currentTeslaTab}-content .tesla-output-section`);
    
    if (typeof content === 'string') {
        // Text content
        outputSection.innerHTML = `
            <div class="tesla-generated-content">
                <h3 style="color: #00ff88; margin-bottom: 1.5rem; font-weight: 300; font-size: 1.5rem;">Generated Content</h3>
                <div style="background: rgba(0, 255, 136, 0.05); padding: 2rem; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.2);">
                    <pre style="color: #ffffff; font-family: inherit; white-space: pre-wrap; margin: 0; line-height: 1.6; font-size: 1rem;">${content}</pre>
                </div>
                <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                    <button class="tesla-generate-btn" onclick="copyTeslaContent('${content.replace(/'/g, "\\'")}')">
                        <span class="btn-text">Copy Content</span>
                        <div class="btn-indicator"></div>
                    </button>
                    <button class="tesla-generate-btn" onclick="downloadTeslaContent('${content.replace(/'/g, "\\'")}')">
                        <span class="btn-text">Download</span>
                        <div class="btn-indicator"></div>
                    </button>
                </div>
            </div>
        `;
    } else if (content.type === 'image') {
        // Image content
        outputSection.innerHTML = `
            <div class="tesla-generated-content">
                <h3 style="color: #00ff88; margin-bottom: 1.5rem; font-weight: 300; font-size: 1.5rem;">Generated Image</h3>
                <div style="text-align: center;">
                    <img src="${content.url}" alt="${content.alt}" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                    <p style="color: #888888; margin-top: 1rem; font-size: 1rem;">${content.prompt}</p>
                    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                        <button class="tesla-generate-btn" onclick="downloadTeslaImage('${content.url}')">
                            <span class="btn-text">Download</span>
                            <div class="btn-indicator"></div>
                        </button>
                        <button class="tesla-generate-btn" onclick="regenerateTeslaContent()">
                            <span class="btn-text">Regenerate</span>
                            <div class="btn-indicator"></div>
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else if (content.type === 'video') {
        // Video content
        outputSection.innerHTML = `
            <div class="tesla-generated-content">
                <h3 style="color: #00ff88; margin-bottom: 1.5rem; font-weight: 300; font-size: 1.5rem;">Generated Video</h3>
                <div style="text-align: center;">
                    <video controls style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3); box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);">
                        <source src="${content.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p style="color: #888888; margin-top: 1rem; font-size: 1rem;">${content.prompt}</p>
                    <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center;">
                        <button class="tesla-generate-btn" onclick="downloadTeslaVideo('${content.url}')">
                            <span class="btn-text">Download</span>
                            <div class="btn-indicator"></div>
                        </button>
                        <button class="tesla-generate-btn" onclick="regenerateTeslaContent()">
                            <span class="btn-text">Regenerate</span>
                            <div class="btn-indicator"></div>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add success animation
    outputSection.style.transform = 'scale(0.98)';
    setTimeout(() => {
        outputSection.style.transform = 'scale(1)';
    }, 150);
}

// Show Tesla loading state
function showTeslaLoadingState() {
    const outputSection = document.querySelector(`#${currentTeslaTab}-content .tesla-output-section`);
    outputSection.innerHTML = `
        <div class="tesla-loading-state" style="text-align: center; color: #888888; padding: 3rem 2rem;">
            <div style="display: inline-block; width: 50px; height: 50px; border: 3px solid rgba(0, 255, 136, 0.3); border-top: 3px solid #00ff88; border-radius: 50%; animation: teslaSpin 1s linear infinite; margin-bottom: 1.5rem;"></div>
            <p style="font-size: 1.1rem; margin: 0;">Generating ${currentTeslaTab} content...</p>
        </div>
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes teslaSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Hide Tesla loading state
function hideTeslaLoadingState() {
    // Loading state will be replaced by generated content
}

// Tesla utility functions
function copyTeslaContent(text) {
    navigator.clipboard.writeText(text).then(() => {
        showTeslaNotification('Content copied to clipboard', 'success');
    }).catch(() => {
        showTeslaNotification('Failed to copy content', 'error');
    });
}

function downloadTeslaContent(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tesla-content-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showTeslaNotification('Content downloaded', 'success');
}

function downloadTeslaImage(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `tesla-image-${Date.now()}.png`;
    a.click();
    showTeslaNotification('Image downloaded', 'success');
}

function downloadTeslaVideo(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `tesla-video-${Date.now()}.mp4`;
    a.click();
    showTeslaNotification('Video downloaded', 'success');
}

function regenerateTeslaContent() {
    const textarea = document.querySelector(`#${currentTeslaTab}-content .tesla-textarea`);
    const prompt = textarea.value.trim();
    if (prompt) {
        generateTeslaContent();
    }
}

// Show Tesla notification
function showTeslaNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `tesla-notification tesla-notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4444' : '#00ccff'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: 500;
        font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        animation: teslaSlideIn 0.3s ease;
        letter-spacing: 0.01em;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'teslaSlideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes teslaSlideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes teslaSlideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ========================================
// APPLE × TESLA AI BOARD LAYOUT FUNCTIONS
// ========================================

let currentContentType = 'copywriting';
let currentProvider = 'openai';
let currentTemplate = '';

// AI Providers with Real Logos and Colors
const aiProviders = {
    copywriting: [
        {
            id: 'openai',
            name: 'OpenAI GPT-4',
            logo: '🤖',
            color: '#00A67E',
            status: 'Active',
            description: 'Advanced language model for text generation'
        },
        {
            id: 'claude',
            name: 'Claude 3.5',
            logo: '🧠',
            color: '#FF6B35',
            status: 'Active',
            description: 'Anthropic\'s conversational AI'
        },
        {
            id: 'gemini',
            name: 'Google Gemini',
            logo: '💎',
            color: '#4285F4',
            status: 'Active',
            description: 'Google\'s multimodal AI model'
        }
    ],
    image: [
        {
            id: 'dalle',
            name: 'DALL-E 3',
            logo: '🎨',
            color: '#00A67E',
            status: 'Active',
            description: 'OpenAI\'s image generation model'
        },
        {
            id: 'midjourney',
            name: 'Midjourney',
            logo: '🖌️',
            color: '#FF6B35',
            status: 'Active',
            description: 'AI-powered image creation'
        },
        {
            id: 'stable',
            name: 'Stable Diffusion',
            logo: '🖼️',
            color: '#4285F4',
            status: 'Active',
            description: 'Open-source image generation'
        }
    ],
    video: [
        {
            id: 'sora',
            name: 'Sora',
            logo: '🎬',
            color: '#00A67E',
            status: 'Active',
            description: 'OpenAI\'s video generation model'
        },
        {
            id: 'runway',
            name: 'Runway ML',
            logo: '🎭',
            color: '#FF6B35',
            status: 'Active',
            description: 'AI video editing and generation'
        },
        {
            id: 'pika',
            name: 'Pika Labs',
            logo: '🎪',
            color: '#4285F4',
            status: 'Active',
            description: 'AI video creation platform'
        }
    ]
};

// Energy Industry Templates
const energyTemplates = {
    copywriting: [
        {
            id: 'solar-residential',
            title: 'Residential Solar Installation',
            prompt: 'Create compelling marketing copy for residential solar panel installation services, highlighting cost savings, environmental benefits, and government incentives.',
            category: 'Solar'
        },
        {
            id: 'commercial-wind',
            title: 'Commercial Wind Energy',
            prompt: 'Write persuasive content for commercial wind energy projects, focusing on ROI, sustainability goals, and energy independence.',
            category: 'Wind'
        },
        {
            id: 'energy-efficiency',
            title: 'Energy Efficiency Consultation',
            prompt: 'Develop engaging copy for energy efficiency consultation services, emphasizing reduced costs and improved building performance.',
            category: 'Efficiency'
        },
        {
            id: 'green-marketing',
            title: 'Green Energy Marketing',
            prompt: 'Create social media content promoting green energy solutions, targeting environmentally conscious consumers.',
            category: 'Marketing'
        }
    ],
    image: [
        {
            id: 'solar-panels',
            title: 'Modern Solar Installation',
            prompt: 'Generate an image of a modern residential home with sleek solar panels on the roof, showcasing clean energy technology.',
            category: 'Solar'
        },
        {
            id: 'wind-farm',
            title: 'Wind Energy Farm',
            prompt: 'Create an image of a wind farm with turbines against a sunset sky, representing renewable energy progress.',
            category: 'Wind'
        },
        {
            id: 'energy-efficiency',
            title: 'Energy Efficient Building',
            prompt: 'Design an image of an energy-efficient commercial building with green technology features and solar panels.',
            category: 'Efficiency'
        },
        {
            id: 'green-future',
            title: 'Sustainable Future',
            prompt: 'Generate an image representing a sustainable energy future with clean technology and green landscapes.',
            category: 'Future'
        }
    ],
    video: [
        {
            id: 'solar-demo',
            title: 'Solar Installation Process',
            prompt: 'Create a video showing the solar panel installation process, from assessment to completion, highlighting professionalism.',
            category: 'Solar'
        },
        {
            id: 'energy-savings',
            title: 'Energy Savings Journey',
            prompt: 'Produce a video demonstrating how a family reduces their energy bills and carbon footprint with solar power.',
            category: 'Savings'
        },
        {
            id: 'commercial-case',
            title: 'Commercial Success Story',
            prompt: 'Generate a video case study of a successful commercial solar installation, showing ROI and environmental impact.',
            category: 'Commercial'
        },
        {
            id: 'green-transition',
            title: 'Green Energy Transition',
            prompt: 'Create an animated video explaining the transition to renewable energy and its benefits for businesses.',
            category: 'Education'
        }
    ]
};

// Set up content type selection
function setupContentTypeSelection() {
    const contentTypeCards = document.querySelectorAll('.content-type-card');
    
    contentTypeCards.forEach(card => {
        card.addEventListener('click', function() {
            const contentType = this.dataset.type;
            selectContentType(contentType);
        });
    });
}

// Select content type
function selectContentType(type) {
    console.log(`🎯 Selecting content type: ${type}`);
    
    // Update current type
    currentContentType = type;
    
    // Update content type cards
    document.querySelectorAll('.content-type-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-type="${type}"]`).classList.add('active');
    
    // Load providers and templates for this content type
    loadProviders(type);
    loadTemplates(type);
    
    // Add selection animation
    const activeCard = document.querySelector(`[data-type="${type}"]`);
    activeCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        activeCard.style.transform = 'scale(1)';
    }, 150);
}

// Load content type (initialization)
function loadContentType(type) {
    selectContentType(type);
}

// Load providers based on content type
function loadProviders(type) {
    const providerGrid = document.getElementById('provider-grid');
    if (!providerGrid) return;
    
    const providers = aiProviders[type] || [];
    
    providerGrid.innerHTML = providers.map(provider => `
        <div class="provider-card" data-provider="${provider.id}">
            <div class="provider-logo" style="background: linear-gradient(135deg, ${provider.color}20, ${provider.color}10); border-color: ${provider.color}40;">
                <span style="font-size: 1.5rem;">${provider.logo}</span>
            </div>
            <div class="provider-info">
                <div class="provider-name">${provider.name}</div>
                <div class="provider-status">${provider.status}</div>
            </div>
        </div>
    `).join('');
    
    // Set up provider selection
    setupProviderSelection();
    
    // Select first provider by default
    if (providers.length > 0) {
        selectProvider(providers[0].id);
    }
}

// Set up provider selection
function setupProviderSelection() {
    const providerCards = document.querySelectorAll('.provider-card');
    
    providerCards.forEach(card => {
        card.addEventListener('click', function() {
            const provider = this.dataset.provider;
            selectProvider(provider);
        });
    });
}

// Select provider
function selectProvider(provider) {
    console.log(`🎯 Selecting provider: ${provider}`);
    
    // Update current provider
    currentProvider = provider;
    
    // Update provider cards
    document.querySelectorAll('.provider-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-provider="${provider}"]`).classList.add('active');
    
    // Add selection animation
    const activeCard = document.querySelector(`[data-provider="${provider}"]`);
    activeCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        activeCard.style.transform = 'scale(1)';
    }, 150);
}

// Load templates based on content type
function loadTemplates(type) {
    const templateGrid = document.getElementById('template-grid');
    if (!templateGrid) return;
    
    const templates = energyTemplates[type] || [];
    
    templateGrid.innerHTML = templates.map(template => `
        <div class="template-card" data-template="${template.id}">
            <h5>${template.title}</h5>
            <p>${template.category}</p>
        </div>
    `).join('');
    
    // Set up template selection
    setupTemplateSelection();
}

// Set up template selection
function setupTemplateSelection() {
    const templateCards = document.querySelectorAll('.template-card');
    
    templateCards.forEach(card => {
        card.addEventListener('click', function() {
            const templateId = this.dataset.template;
            selectTemplate(templateId);
        });
    });
}

// Select template
function selectTemplate(templateId) {
    console.log(`🎯 Selecting template: ${templateId}`);
    
    // Update current template
    currentTemplate = templateId;
    
    // Update template cards
    document.querySelectorAll('.template-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-template="${templateId}"]`).classList.add('active');
    
    // Load template prompt into textarea
    const templates = energyTemplates[currentContentType] || [];
    const template = templates.find(t => t.id === templateId);
    
    if (template) {
        const textarea = document.getElementById('content-prompt');
        if (textarea) {
            textarea.value = template.prompt;
        }
    }
    
    // Add selection animation
    const activeCard = document.querySelector(`[data-template="${templateId}"]`);
    activeCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        activeCard.style.transform = 'scale(1)';
    }, 150);
}

// Set up content generation
function setupContentGeneration() {
    const generateBtn = document.querySelector('.ai-generate-btn');
    
    if (generateBtn) {
        generateBtn.addEventListener('click', function() {
            generateContent();
        });
    }
}

// Generate content
function generateContent() {
    console.log(`🎨 Generating ${currentContentType} content with ${currentProvider}`);
    
    const textarea = document.getElementById('content-prompt');
    const prompt = textarea.value.trim();
    
    if (!prompt) {
        showNotification('Please enter a prompt or select a template', 'warning');
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate content generation
    setTimeout(() => {
        const content = generateMockContent(currentContentType, prompt);
        displayGeneratedContent(content);
        hideLoadingState();
    }, 2000);
}

// Generate mock content
function generateMockContent(type, prompt) {
    switch(type) {
        case 'copywriting':
            return generateCopywritingContent(prompt);
        case 'image':
            return generateImageContent(prompt);
        case 'video':
            return generateVideoContent(prompt);
        default:
            return 'Generated content';
    }
}

// Generate copywriting content
function generateCopywritingContent(prompt) {
    const templates = [
        `Based on your prompt "${prompt}", here's compelling copy:\n\n"Transform your energy future with our cutting-edge solar solutions. Experience the power of clean, renewable energy that saves you money while protecting the planet. Join thousands of satisfied customers who've made the switch to sustainable living."`,
        `Here's your marketing copy for "${prompt}":\n\n"Revolutionary solar technology meets exceptional value. Our advanced photovoltaic systems deliver maximum efficiency with minimal environmental impact. Get your free energy assessment today and discover how much you could save."`,
        `Creative copy for "${prompt}":\n\n"Power your home with the sun's unlimited energy. Our state-of-the-art solar installations provide reliable, clean power for decades. With flexible financing options and expert installation, going solar has never been easier."`
    ];
    
    return templates[Math.floor(Math.random() * templates.length)];
}

// Generate image content
function generateImageContent(prompt) {
    return {
        type: 'image',
        url: 'https://via.placeholder.com/600x400/00ff88/000000?text=Generated+Solar+Image',
        alt: `Generated image for: ${prompt}`,
        prompt: prompt
    };
}

// Generate video content
function generateVideoContent(prompt) {
    return {
        type: 'video',
        url: 'https://via.placeholder.com/600x400/00ccff/000000?text=Generated+Solar+Video',
        alt: `Generated video for: ${prompt}`,
        prompt: prompt
    };
}

// Display generated content
function displayGeneratedContent(content) {
    const outputArea = document.getElementById('output-area');
    
    if (typeof content === 'string') {
        // Text content
        outputArea.innerHTML = `
            <div class="generated-text">
                <h4 style="color: #00ff88; margin-bottom: 1rem;">Generated Content</h4>
                <div style="background: rgba(0, 255, 136, 0.1); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                    <pre style="color: #ffffff; font-family: inherit; white-space: pre-wrap; margin: 0;">${content}</pre>
                </div>
                <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
                    <button class="ai-generate-btn" onclick="copyToClipboard('${content.replace(/'/g, "\\'")}')">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="ai-generate-btn" onclick="downloadContent('${content.replace(/'/g, "\\'")}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        `;
    } else if (content.type === 'image') {
        // Image content
        outputArea.innerHTML = `
            <div class="generated-image">
                <h4 style="color: #00ff88; margin-bottom: 1rem;">Generated Image</h4>
                <div style="text-align: center;">
                    <img src="${content.url}" alt="${content.alt}" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                    <p style="color: #cccccc; margin-top: 1rem;">${content.prompt}</p>
                    <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
                        <button class="ai-generate-btn" onclick="downloadImage('${content.url}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="ai-generate-btn" onclick="regenerateImage()">
                            <i class="fas fa-redo"></i> Regenerate
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else if (content.type === 'video') {
        // Video content
        outputArea.innerHTML = `
            <div class="generated-video">
                <h4 style="color: #00ff88; margin-bottom: 1rem;">Generated Video</h4>
                <div style="text-align: center;">
                    <video controls style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <source src="${content.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p style="color: #cccccc; margin-top: 1rem;">${content.prompt}</p>
                    <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
                        <button class="ai-generate-btn" onclick="downloadVideo('${content.url}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="ai-generate-btn" onclick="regenerateVideo()">
                            <i class="fas fa-redo"></i> Regenerate
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add success animation
    outputArea.style.transform = 'scale(0.95)';
    setTimeout(() => {
        outputArea.style.transform = 'scale(1)';
    }, 150);
}

// Show loading state
function showLoadingState() {
    const outputArea = document.getElementById('output-area');
    outputArea.innerHTML = `
        <div class="loading-state" style="text-align: center; color: #888888;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid rgba(0, 255, 136, 0.3); border-top: 3px solid #00ff88; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem;"></div>
            <p>Generating ${currentContentType} content...</p>
        </div>
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Hide loading state
function hideLoadingState() {
    // Loading state will be replaced by generated content
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Content copied to clipboard', 'success');
    }).catch(() => {
        showNotification('Failed to copy content', 'error');
    });
}

function downloadContent(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-content-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Content downloaded', 'success');
}

function downloadImage(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-image-${Date.now()}.png`;
    a.click();
    showNotification('Image downloaded', 'success');
}

function downloadVideo(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-video-${Date.now()}.mp4`;
    a.click();
    showNotification('Video downloaded', 'success');
}

function regenerateImage() {
    const textarea = document.getElementById('content-prompt');
    const prompt = textarea.value.trim();
    if (prompt) {
        generateContent();
    }
}

function regenerateVideo() {
    const textarea = document.getElementById('content-prompt');
    const prompt = textarea.value.trim();
    if (prompt) {
        generateContent();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4444' : '#00ccff'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Update providers based on content type
function updateProvidersForType(type) {
    const providerGrid = document.querySelector('.provider-grid');
    if (!providerGrid) return;
    
    let providers = [];
    
    switch(type) {
        case 'copywriting':
            providers = [
                { id: 'openai', name: 'OpenAI GPT-4', icon: 'fas fa-brain', status: 'Active' },
                { id: 'claude', name: 'Claude 3.5', icon: 'fas fa-robot', status: 'Active' },
                { id: 'gemini', name: 'Google Gemini', icon: 'fas fa-gem', status: 'Active' }
            ];
            break;
        case 'image':
            providers = [
                { id: 'dalle', name: 'DALL-E 3', icon: 'fas fa-palette', status: 'Active' },
                { id: 'midjourney', name: 'Midjourney', icon: 'fas fa-paint-brush', status: 'Active' },
                { id: 'stable', name: 'Stable Diffusion', icon: 'fas fa-image', status: 'Active' }
            ];
            break;
        case 'video':
            providers = [
                { id: 'sora', name: 'Sora', icon: 'fas fa-video', status: 'Active' },
                { id: 'runway', name: 'Runway ML', icon: 'fas fa-film', status: 'Active' },
                { id: 'pika', name: 'Pika Labs', icon: 'fas fa-play', status: 'Active' }
            ];
            break;
    }
    
    // Update provider cards
    providerGrid.innerHTML = providers.map(provider => `
        <div class="provider-card" data-provider="${provider.id}">
            <div class="provider-logo">
                <i class="${provider.icon}"></i>
            </div>
            <div class="provider-name">${provider.name}</div>
            <div class="provider-status">${provider.status}</div>
        </div>
    `).join('');
    
    // Set up provider selection
    setupProviderSelection();
}

// Set up provider selection
function setupProviderSelection() {
    const providerCards = document.querySelectorAll('.provider-card');
    
    providerCards.forEach(card => {
        card.addEventListener('click', function() {
            const provider = this.dataset.provider;
            selectProvider(provider);
        });
    });
    
    // Select first provider by default
    if (providerCards.length > 0) {
        selectProvider(providerCards[0].dataset.provider);
    }
}

// Select provider
function selectProvider(provider) {
    console.log(`🎯 Selecting provider: ${provider}`);
    
    // Update current provider
    currentProvider = provider;
    
    // Update provider cards
    document.querySelectorAll('.provider-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelector(`[data-provider="${provider}"]`).classList.add('active');
    
    // Add selection animation
    const activeCard = document.querySelector(`[data-provider="${provider}"]`);
    activeCard.style.transform = 'scale(0.95)';
    setTimeout(() => {
        activeCard.style.transform = 'scale(1)';
    }, 150);
}

// Set up content generation
function setupContentGeneration() {
    const generateButtons = document.querySelectorAll('.tesla-btn-primary');
    
    generateButtons.forEach(button => {
        button.addEventListener('click', function() {
            generateContent();
        });
    });
}

// Generate content
function generateContent() {
    console.log(`🎨 Generating ${currentContentType} content with ${currentProvider}`);
    
    const textarea = document.querySelector('.tesla-textarea');
    const prompt = textarea.value.trim();
    
    if (!prompt) {
        showNotification('Please enter a prompt', 'warning');
        return;
    }
    
    // Show loading state
    showLoadingState();
    
    // Simulate content generation
    setTimeout(() => {
        const content = generateMockContent(currentContentType, prompt);
        displayGeneratedContent(content);
        hideLoadingState();
        addToRecentGenerations(currentContentType, prompt, content);
    }, 2000);
}

// Generate mock content
function generateMockContent(type, prompt) {
    switch(type) {
        case 'copywriting':
            return generateCopywritingContent(prompt);
        case 'image':
            return generateImageContent(prompt);
        case 'video':
            return generateVideoContent(prompt);
        default:
            return 'Generated content';
    }
}

// Generate copywriting content
function generateCopywritingContent(prompt) {
    const templates = [
        `Based on your prompt "${prompt}", here's compelling copy:\n\n"Transform your energy future with our cutting-edge solar solutions. Experience the power of clean, renewable energy that saves you money while protecting the planet. Join thousands of satisfied customers who've made the switch to sustainable living."`,
        `Here's your marketing copy for "${prompt}":\n\n"Revolutionary solar technology meets exceptional value. Our advanced photovoltaic systems deliver maximum efficiency with minimal environmental impact. Get your free energy assessment today and discover how much you could save."`,
        `Creative copy for "${prompt}":\n\n"Power your home with the sun's unlimited energy. Our state-of-the-art solar installations provide reliable, clean power for decades. With flexible financing options and expert installation, going solar has never been easier."`
    ];
    
    return templates[Math.floor(Math.random() * templates.length)];
}

// Generate image content
function generateImageContent(prompt) {
    return {
        type: 'image',
        url: 'https://via.placeholder.com/600x400/00ff88/000000?text=Generated+Solar+Image',
        alt: `Generated image for: ${prompt}`,
        prompt: prompt
    };
}

// Generate video content
function generateVideoContent(prompt) {
    return {
        type: 'video',
        url: 'https://via.placeholder.com/600x400/00ccff/000000?text=Generated+Solar+Video',
        alt: `Generated video for: ${prompt}`,
        prompt: prompt
    };
}

// Display generated content
function displayGeneratedContent(content) {
    const outputArea = document.querySelector('.output-area');
    
    if (typeof content === 'string') {
        // Text content
        outputArea.innerHTML = `
            <div class="generated-text">
                <h4 style="color: #00ff88; margin-bottom: 1rem;">Generated Content</h4>
                <div style="background: rgba(0, 255, 136, 0.1); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                    <pre style="color: #ffffff; font-family: inherit; white-space: pre-wrap; margin: 0;">${content}</pre>
                </div>
                <div style="margin-top: 1rem; display: flex; gap: 1rem;">
                    <button class="tesla-btn-primary" onclick="copyToClipboard('${content.replace(/'/g, "\\'")}')">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                    <button class="tesla-btn-primary" onclick="downloadContent('${content.replace(/'/g, "\\'")}')">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        `;
    } else if (content.type === 'image') {
        // Image content
        outputArea.innerHTML = `
            <div class="generated-image">
                <h4 style="color: #00ff88; margin-bottom: 1rem;">Generated Image</h4>
                <div style="text-align: center;">
                    <img src="${content.url}" alt="${content.alt}" style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                    <p style="color: #cccccc; margin-top: 1rem;">${content.prompt}</p>
                    <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
                        <button class="tesla-btn-primary" onclick="downloadImage('${content.url}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="tesla-btn-primary" onclick="regenerateImage()">
                            <i class="fas fa-redo"></i> Regenerate
                        </button>
                    </div>
                </div>
            </div>
        `;
    } else if (content.type === 'video') {
        // Video content
        outputArea.innerHTML = `
            <div class="generated-video">
                <h4 style="color: #00ff88; margin-bottom: 1rem;">Generated Video</h4>
                <div style="text-align: center;">
                    <video controls style="max-width: 100%; border-radius: 12px; border: 1px solid rgba(0, 255, 136, 0.3);">
                        <source src="${content.url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <p style="color: #cccccc; margin-top: 1rem;">${content.prompt}</p>
                    <div style="margin-top: 1rem; display: flex; gap: 1rem; justify-content: center;">
                        <button class="tesla-btn-primary" onclick="downloadVideo('${content.url}')">
                            <i class="fas fa-download"></i> Download
                        </button>
                        <button class="tesla-btn-primary" onclick="regenerateVideo()">
                            <i class="fas fa-redo"></i> Regenerate
                        </button>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add success animation
    outputArea.style.transform = 'scale(0.95)';
    setTimeout(() => {
        outputArea.style.transform = 'scale(1)';
    }, 150);
}

// Show loading state
function showLoadingState() {
    const outputArea = document.querySelector('.output-area');
    outputArea.innerHTML = `
        <div class="loading-state" style="text-align: center; color: #888888;">
            <div style="display: inline-block; width: 40px; height: 40px; border: 3px solid rgba(0, 255, 136, 0.3); border-top: 3px solid #00ff88; border-radius: 50%; animation: spin 1s linear infinite; margin-bottom: 1rem;"></div>
            <p>Generating ${currentContentType} content...</p>
        </div>
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}

// Hide loading state
function hideLoadingState() {
    // Loading state will be replaced by generated content
}

// Set up recent generations
function setupRecentGenerations() {
    const generationCards = document.querySelectorAll('.generation-card');
    
    generationCards.forEach(card => {
        card.addEventListener('click', function() {
            const type = this.dataset.type;
            const title = this.querySelector('.generation-title').textContent;
            loadRecentGeneration(type, title);
        });
    });
}

// Add to recent generations
function addToRecentGenerations(type, prompt, content) {
    const generationsGrid = document.querySelector('.generations-grid');
    if (!generationsGrid) return;
    
    const newGeneration = document.createElement('div');
    newGeneration.className = 'generation-card';
    newGeneration.dataset.type = type;
    
    const typeIcon = type === 'copywriting' ? 'fas fa-pen' : 
                     type === 'image' ? 'fas fa-image' : 'fas fa-video';
    
    newGeneration.innerHTML = `
        <div class="generation-type">
            <i class="${typeIcon}"></i>
            ${type.charAt(0).toUpperCase() + type.slice(1)}
        </div>
        <div class="generation-title">${prompt.substring(0, 30)}${prompt.length > 30 ? '...' : ''}</div>
        <div class="generation-time">Just now</div>
    `;
    
    // Add click handler
    newGeneration.addEventListener('click', function() {
        loadRecentGeneration(type, prompt);
    });
    
    // Insert at the beginning
    generationsGrid.insertBefore(newGeneration, generationsGrid.firstChild);
    
    // Remove excess cards (keep only 3)
    const cards = generationsGrid.querySelectorAll('.generation-card');
    if (cards.length > 3) {
        cards[cards.length - 1].remove();
    }
}

// Load recent generation
function loadRecentGeneration(type, title) {
    console.log(`📂 Loading recent generation: ${type} - ${title}`);
    
    // Switch to the appropriate content type
    switchContentType(type);
    
    // Fill the textarea with the title
    const textarea = document.querySelector('.tesla-textarea');
    if (textarea) {
        textarea.value = title;
    }
    
    showNotification('Recent generation loaded', 'success');
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Content copied to clipboard', 'success');
    }).catch(() => {
        showNotification('Failed to copy content', 'error');
    });
}

function downloadContent(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-content-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    showNotification('Content downloaded', 'success');
}

function downloadImage(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-image-${Date.now()}.png`;
    a.click();
    showNotification('Image downloaded', 'success');
}

function downloadVideo(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-video-${Date.now()}.mp4`;
    a.click();
    showNotification('Video downloaded', 'success');
}

function regenerateImage() {
    const textarea = document.querySelector('.tesla-textarea');
    const prompt = textarea.value.trim();
    if (prompt) {
        generateContent();
    }
}

function regenerateVideo() {
    const textarea = document.querySelector('.tesla-textarea');
    const prompt = textarea.value.trim();
    if (prompt) {
        generateContent();
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00ff88' : type === 'error' ? '#ff4444' : '#00ccff'};
        color: ${type === 'success' ? '#000000' : '#ffffff'};
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
    
    // Add animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Generate copy
function generateCopy() {
    const copyType = document.getElementById('copy-type').value;
    const targetAudience = document.getElementById('target-audience').value;
    const keyMessage = document.getElementById('key-message').value;
    
    if (!targetAudience || !keyMessage) {
        showNotification('Please fill in all fields');
        return;
    }
    
    const generatedCopy = generateCopyContent(copyType, targetAudience, keyMessage);
    document.getElementById('generated-copy').innerHTML = generatedCopy;
    
    showNotification('Copy generated successfully!');
}

// Generate copy content
function generateCopyContent(type, audience, message) {
    const templates = {
        email: `
            <h4>Email Campaign</h4>
            <p><strong>Subject:</strong> Transform Your Energy Future with Solar Power</p>
            <p><strong>Dear ${audience},</strong></p>
            <p>${message}</p>
            <p>Join thousands of satisfied customers who have already made the switch to clean, renewable energy. Our solar solutions are designed specifically for your needs and budget.</p>
            <p><strong>Key Benefits:</strong></p>
            <ul>
                <li>Reduce your electricity bills by up to 90%</li>
                <li>Increase your property value</li>
                <li>Protect the environment for future generations</li>
                <li>Take advantage of government incentives and tax credits</li>
            </ul>
            <p>Ready to make the switch? Contact us today for a free consultation and personalized quote.</p>
            <p><strong>Call to Action:</strong> Schedule Your Free Solar Assessment</p>
        `,
        social: `
            <h4>Social Media Post</h4>
            <p>🌞 <strong>${message}</strong></p>
            <p>Are you tired of rising electricity bills? It's time to take control of your energy future! ☀️</p>
            <p>Our solar solutions are perfect for ${audience} who want to:</p>
            <p>✅ Save money on monthly bills<br>
            ✅ Reduce their carbon footprint<br>
            ✅ Increase home value<br>
            ✅ Enjoy energy independence</p>
            <p>Don't wait - the sun is shining and incentives are available now! 🌟</p>
            <p>#SolarPower #CleanEnergy #SaveMoney #GreenLiving #RenewableEnergy</p>
        `,
        website: `
            <h4>Website Content</h4>
            <h3>Why Choose Solar Energy?</h3>
            <p>${message}</p>
            <p>At EnergyPlus, we specialize in providing cutting-edge solar solutions for ${audience}. Our team of certified professionals ensures every installation meets the highest standards of quality and efficiency.</p>
            <h3>Our Services</h3>
            <ul>
                <li>Residential Solar Installations</li>
                <li>Commercial Solar Solutions</li>
                <li>Solar Panel Maintenance</li>
                <li>Energy Storage Systems</li>
            </ul>
            <h3>Get Started Today</h3>
            <p>Ready to join the clean energy revolution? Contact us for a free consultation and discover how solar power can transform your energy future.</p>
        `,
        proposal: `
            <h4>Sales Proposal</h4>
            <h3>Solar Energy Solution for ${audience}</h3>
            <p><strong>Executive Summary:</strong></p>
            <p>${message}</p>
            <h3>Proposed Solution</h3>
            <p>We propose a comprehensive solar energy system designed specifically for your needs:</p>
            <ul>
                <li>System Size: 8kW solar array</li>
                <li>Estimated Annual Production: 12,000 kWh</li>
                <li>Expected Monthly Savings: $180</li>
                <li>Payback Period: 6.5 years</li>
            </ul>
            <h3>Investment Breakdown</h3>
            <p>Total System Cost: $24,000<br>
            Federal Tax Credit (30%): -$7,200<br>
            State Incentives: -$2,000<br>
            <strong>Your Net Investment: $14,800</strong></p>
            <h3>Next Steps</h3>
            <p>1. Site assessment and design<br>
            2. Permitting and approvals<br>
            3. Installation (1-2 days)<br>
            4. System activation and monitoring</p>
        `
    };
    
    return templates[type] || '<p>Content generated successfully!</p>';
}

// Generate image
function generateImage() {
    const imageStyle = document.getElementById('image-style').value;
    const imageDescription = document.getElementById('image-description').value;
    
    if (!imageDescription) {
        showNotification('Please enter an image description');
        return;
    }
    
    const generatedImage = generateImageContent(imageStyle, imageDescription);
    document.getElementById('generated-image').innerHTML = generatedImage;
    
    showNotification('Image generated successfully!');
}

// Generate image content
function generateImageContent(style, description) {
    const imagePlaceholders = {
        'solar-panels': '🏠☀️',
        'wind-turbines': '🌪️⚡',
        'green-energy': '🌱💚',
        'modern-home': '🏡✨'
    };
    
    return `
        <h4>Generated Image</h4>
        <div style="background: #333; padding: 2rem; text-align: center; border-radius: 8px; margin: 1rem 0;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${imagePlaceholders[style]}</div>
            <p><strong>Style:</strong> ${style}</p>
            <p><strong>Description:</strong> ${description}</p>
            <p style="color: #888; font-style: italic;">AI-generated image would appear here</p>
        </div>
        <p><strong>Image Details:</strong></p>
        <ul>
            <li>Resolution: 1920x1080</li>
            <li>Format: High-quality PNG</li>
            <li>Style: ${style}</li>
            <li>Optimized for web and print</li>
        </ul>
    `;
}

// Generate video
function generateVideo() {
    const videoType = document.getElementById('video-type').value;
    const videoScript = document.getElementById('video-script').value;
    
    if (!videoScript) {
        showNotification('Please enter a video script');
        return;
    }
    
    const generatedVideo = generateVideoContent(videoType, videoScript);
    document.getElementById('generated-video').innerHTML = generatedVideo;
    
    showNotification('Video generated successfully!');
}

// Generate video content
function generateVideoContent(type, script) {
    return `
        <h4>Generated Video</h4>
        <div style="background: #333; padding: 2rem; text-align: center; border-radius: 8px; margin: 1rem 0;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🎬</div>
            <p><strong>Video Type:</strong> ${type}</p>
            <p><strong>Duration:</strong> 60 seconds</p>
            <p style="color: #888; font-style: italic;">AI-generated video would appear here</p>
        </div>
        <h5>Video Script:</h5>
        <div style="background: #222; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
            <p>${script}</p>
        </div>
        <p><strong>Video Specifications:</strong></p>
        <ul>
            <li>Resolution: 1080p HD</li>
            <li>Duration: 60 seconds</li>
            <li>Format: MP4</li>
            <li>Optimized for social media</li>
        </ul>
    `;
}

// ========================================
// CONTACT MANAGEMENT FUNCTIONALITY
// ========================================

// Contact Management Tab Switching
function initializeContactManagement() {
    const contactTabBtns = document.querySelectorAll('.tesla-tab-btn[data-contact-tab]');
    const contactTabs = document.querySelectorAll('.tesla-contact-tab');
    
    contactTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-contact-tab');
            
            // Remove active class from all tabs and buttons
            contactTabBtns.forEach(b => b.classList.remove('active'));
            contactTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            btn.classList.add('active');
            document.getElementById(`${targetTab}-tab`).classList.add('active');
        });
    });
    
    // Initialize lead scoring animations
    initializeLeadScoring();
    
    // Initialize client search
    initializeClientSearch();
    
    // Initialize analytics
    initializeContactAnalytics();
}

// Lead Scoring Animation
function initializeLeadScoring() {
    const scoreBars = document.querySelectorAll('.score-fill');
    
    scoreBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Client Search Functionality
function initializeClientSearch() {
    const searchInput = document.querySelector('.tesla-search input');
    const clientCards = document.querySelectorAll('.client-card');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            clientCards.forEach(card => {
                const clientName = card.querySelector('.client-info h5').textContent.toLowerCase();
                const clientLocation = card.querySelector('.client-info p').textContent.toLowerCase();
                
                if (clientName.includes(searchTerm) || clientLocation.includes(searchTerm)) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Contact Analytics
function initializeContactAnalytics() {
    // Animate conversion chart segments
    const segments = document.querySelectorAll('.chart-segment');
    
    segments.forEach((segment, index) => {
        const fill = segment.querySelector('.segment-fill');
        if (fill) {
            const width = fill.style.width || '100%';
            fill.style.width = '0%';
            
            setTimeout(() => {
                fill.style.width = width;
            }, index * 200 + 500);
        }
    });
    
    // Animate metric values
    const metricValues = document.querySelectorAll('.metric-value, .revenue-value');
    
    metricValues.forEach(value => {
        const text = value.textContent;
        const numericValue = parseFloat(text.replace(/[^\d.]/g, ''));
        
        if (!isNaN(numericValue)) {
            animateCounter(value, 0, numericValue, 1000);
        }
    });
}

// Counter Animation
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    const isPercentage = element.textContent.includes('%');
    const isCurrency = element.textContent.includes('$');
    const isTime = element.textContent.includes('hours');
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = start + (end - start) * progress;
        let displayValue = Math.round(current * 100) / 100;
        
        if (isPercentage) {
            element.textContent = `${displayValue}%`;
        } else if (isCurrency) {
            element.textContent = `$${displayValue.toLocaleString()}`;
        } else if (isTime) {
            element.textContent = `${displayValue} hours`;
        } else {
            element.textContent = displayValue.toLocaleString();
        }
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Lead Actions
function handleLeadAction(action, leadId) {
    switch(action) {
        case 'call':
            console.log(`Calling lead ${leadId}`);
            break;
        case 'email':
            console.log(`Emailing lead ${leadId}`);
            break;
        case 'view':
            console.log(`Viewing lead ${leadId}`);
            break;
    }
}

// Client Actions
function handleClientAction(action, clientId) {
    switch(action) {
        case 'call':
            console.log(`Calling client ${clientId}`);
            break;
        case 'email':
            console.log(`Emailing client ${clientId}`);
            break;
        case 'analytics':
            console.log(`Viewing client analytics ${clientId}`);
            break;
    }
}

// Add Lead Functionality
function addLead() {
    console.log('Adding new lead');
}

// Add Client Functionality
function addClient() {
    console.log('Adding new client');
}

// Filter Leads Functionality
function filterLeads() {
    console.log('Filtering leads');
}

// Neon Button Effects
function initializeNeonEffects() {
    const neonButtons = document.querySelectorAll('.neon-btn, .action-btn, .tesla-btn-small');
    
    neonButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.boxShadow = '';
        });
        
        btn.addEventListener('click', () => {
            // Create ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(0, 255, 136, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation CSS
const rippleCSS = `
@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Initialize contact management when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeContactManagement();
    initializeNeonEffects();
});

// Export functions for global access
window.handleLeadAction = handleLeadAction;
window.handleClientAction = handleClientAction;
window.addLead = addLead;
window.addClient = addClient;
window.filterLeads = filterLeads;
window.initializeContactManagement = initializeContactManagement;

