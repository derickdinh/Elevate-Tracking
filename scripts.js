const heroData = {
    title: "Elevate Your Fitness<br>Launch Coming Soon!",
    subtitle: "Join the waitlist to unlock custom workouts, smart meal plans, and progress tracking — all in one AI-driven fitness app.",
    integrations: []
};

const features = [
    { icon: `<img src="/icons/dumbbell.png" alt="Dumbbell Icon" class="h-14 mx-auto">`, title: "Workouts", desc: "Effortlessly track your workouts, logging every set, and review your progress.", href: "#workout-showcase" },
    { icon: `<img src="/icons/Nutrition.png" alt="Nutrition Icon" class="h-14 mx-auto">`, title: "Nutrition", desc: "Easily log your meals, tracking your nutrition and feel better than ever.", href: "#nutrition-showcase" },
    { icon: `<img src="/icons/social 2.png" alt="Social Icon" class="h-14 mx-auto">`, title: "Social", desc: "Follow and compete with your friends and other athletes", href: "#social-showcase" }
];

const stats = [
    { value: "500K+", desc: "Waitlist Sign-Ups" },
    { svg: `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h"></svg>`, desc: "Syncs with your favorite fitness tools" },
    { title: "Your Fitness Revolution", desc: "Strength, endurance, and transformation—all in one app.", image: true }
];

const proSteps = [
    { step: "1", desc: "Join Elevate PRO to access exclusive features designed to supercharge your fitness journey." },
    { step: "2", desc: "Unlock premium tools like advanced analytics, AI coaching, and community leaderboards." },
    { step: "3", desc: "Get personalized expert guidance to optimize your workouts and nutrition plans." }
];

const missionStats = [
    { value: "80%", desc: "Users See Results" },
    { value: "1M+", desc: "Workouts Logged" },
    { value: "50K+", desc: "Community Members" }
];

const ctaData = {
    title: "Have Questions? Reach Out!",
    subtitle: "Contact our team for inquiries about Elevate, beta testing, or partnership opportunities."
};

function populateHero() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroIntegrations = document.getElementById('hero-integrations');

    if (!heroTitle || !heroSubtitle || !heroIntegrations) {
        console.warn('Hero section elements not found:', { heroTitle: !!heroTitle, heroSubtitle: !!heroSubtitle, heroIntegrations: !!heroIntegrations });
        return;
    }

    heroTitle.innerHTML = heroData.title;
    heroSubtitle.textContent = heroData.subtitle;
    heroIntegrations.innerHTML = heroData.integrations.map(item => `<span class="bg-gray-100 px-3 py-1 rounded-full">${item}</span>`).join('');
    console.log('Hero section populated successfully');
}

function populateFeatures() {
    const container = document.getElementById('features-container');
    if (container) {
        container.innerHTML = features.map(feature => `
            <div class="feature-card p-8 custom-shadow text-center hover:scale-105 transition-transform duration-300 ${feature.href ? 'cursor-pointer' : ''}" onclick="${feature.href ? `scrollToSection('${feature.href}')` : ''}">
                <div class="text-blue-600 mb-6">${feature.icon}</div>
                <h3 class="text-2xl font-semibold mb-4 text-gray-900">${feature.title}</h3>
                <p class="text-gray-600">${feature.desc}</p>
            </div>
        `).join('');
    } else {
        console.warn('Features container not found');
    }
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.warn(`Section not found: ${sectionId}`);
    }
}

function populateProSteps() {
    const container = document.getElementById('pro-steps');
    if (container) {
        container.innerHTML = proSteps.map(step => `
            <div class="p-8 text-center">
                <p class="text-3xl font-semibold text-blue-200 mb-4">${step.step}</p>
                <p class="text-gray-100">${step.desc}</p>
            </div>
        `).join('');
    } else {
        console.warn('Pro steps container not found');
    }
}

function populateMissionStats() {
    const container = document.getElementById('mission-stats');
    if (container) {
        container.innerHTML = missionStats.map(stat => `
            <div class="p-6">
                <h3 class="text-5xl font-bold text-blue-600 mb-4">${stat.value}</h3>
                <p class="text-gray-600">${stat.desc}</p>
            </div>
        `).join('');
    } else {
        console.warn('Mission stats container not found');
    }
}

function populateCTA() {
    const title = document.getElementById('cta-title');
    const subtitle = document.getElementById('cta-subtitle');
    if (title) title.innerHTML = ctaData.title;
    if (subtitle) subtitle.textContent = ctaData.subtitle;
    if (!title || !subtitle) {
        console.warn('CTA elements not found:', { title: !!title, subtitle: !!subtitle });
    }
}

function populateFooter() {
    const container = document.getElementById('footer-links');
    if (container) {
        container.innerHTML = [
            { text: 'Privacy Policy', href: '/privacy-policy' },
            { text: 'Terms of Service', href: '/terms-of-service' }
        ].map(item => `<a href="${item.href}" class="hover:text-white transition-colors duration-200">${item.text}</a>`).join('');
    } else {
        console.warn('Footer links container not found');
    }
}

function openPopup(element, title, description, imageSrc, features = []) {
    const overlay = document.getElementById('popup-overlay');
    const popupContent = document.querySelector('.popup-content');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupFeatures = document.getElementById('popup-features');

    if (!overlay || !popupContent || !popupImage || !popupTitle || !popupDescription || !popupFeatures) {
        console.error('Popup elements missing:', {
            overlay: !!overlay,
            popupContent: !!popupContent,
            popupImage: !!popupImage,
            popupTitle: !!popupTitle,
            popupDescription: !!popupDescription,
            popupFeatures: !!popupFeatures
        });
        return;
    }

    try {
        popupImage.src = imageSrc || '';
        popupImage.onerror = () => {
            popupImage.src = 'icons/fallback-icon.png';
            console.warn(`Failed to load image: ${imageSrc}`);
        };
        if (title === 'Track your Progress') {
            popupImage.style.filter = 'brightness(100%)';
        } else {
            popupImage.style.filter = 'none';
        }

        popupTitle.textContent = title || 'No Title Provided';
        popupDescription.textContent = description || 'No description available';

        popupFeatures.innerHTML = features.map((feature, index) => {
            const featureImage = feature.image || 'icons/default-feature-icon.png';
            const featureText = feature.text || 'No feature text provided';

            console.log(`Feature ${index + 1}: image=${featureImage}, text=${featureText}`);

            const lines = featureText.split(' – ');
            const heading = lines[0] || '';
            const rest = lines.length > 1 ? ' – ' + lines.slice(1).join(' – ') : '';

            return `
                <li class="popup-feature">
                    <img src="${featureImage}" alt="Feature Icon" class="popup-feature-icon" onerror="this.src='icons/fallback-icon.png'; console.warn('Failed to load icon: ${featureImage}')">
                    <span><strong>${heading}</strong>${rest}</span>
                </li>
            `;
        }).join('');

        document.body.classList.add('no-scroll');

        overlay.style.display = 'flex';
        requestAnimationFrame(() => {
            overlay.classList.add('visible');
            popupContent.classList.add('appear');
        });

        overlay.onclick = (e) => {
            if (e.target === overlay) {
                closePopup();
            }
        };

        popupContent.addEventListener('animationend', () => {
            popupContent.classList.remove('appear');
        }, { once: true });
    } catch (error) {
        console.error('Error in openPopup:', error);
    }
}

function closePopup() {
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        try {
            overlay.classList.remove('visible');
            overlay.addEventListener('transitionend', () => {
                overlay.style.display = 'none';
                document.body.classList.remove('no-scroll');
                overlay.onclick = null;
            }, { once: true });
        } catch (error) {
            console.error('Error in closePopup:', error);
        }
    }
}

async function loadIncludes(attempt = 1, maxAttempts = 3) {
    const elements = document.querySelectorAll('[include-html]');
    if (!elements.length) {
        console.warn('No elements with include-html attribute found');
        return true;
    }

    const promises = Array.from(elements).map(async (elem) => {
        const file = elem.getAttribute('include-html');
        try {
            const response = await fetch(file);
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status} for ${file}`);
            }
            const html = await response.text();
            elem.outerHTML = html;
            console.log(`Successfully loaded ${file} on attempt ${attempt}`);
            return true;
        } catch (error) {
            console.error(`Failed to load ${file} on attempt ${attempt}:`, error);
            if (attempt < maxAttempts) {
                console.log(`Retrying ${file} (attempt ${attempt + 1}/${maxAttempts})`);
                await new Promise(resolve => setTimeout(resolve, 200));
                return false;
            } else {
                elem.innerHTML = `<p class="text-red-500">Error loading ${file}</p>`;
                return true;
            }
        }
    });

    const results = await Promise.all(promises);
    if (results.some(result => !result) && attempt < maxAttempts) {
        console.log(`Retrying includes load (attempt ${attempt + 1}/${maxAttempts})`);
        return loadIncludes(attempt + 1, maxAttempts);
    }
    return results.every(result => result);
}

function normalizePath(path) {
    return path.replace(/^\/+|\/+$/, '').replace(/\.html$/, '') || 'index';
}

function setActiveNav() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    const currentPath = normalizePath(window.location.pathname);
    const pageMap = {
        '': 'index',
        '/': 'index',
        'index': 'index',
        'features': 'features',
        'elevate-pro': 'elevate-pro',
        'blog': 'blog',
        'contact-us': 'index'
    };

    const currentPage = pageMap[currentPath] || currentPath;

    navLinks.forEach(link => {
        const href = normalizePath(link.getAttribute('href'));
        link.classList.toggle('active', href === currentPage);
    });
}

function handleNavClick(event, link) {
    event.preventDefault();
    const href = link.getAttribute('href');
    const normalizedLink = normalizePath(href);
    const currentPath = normalizePath(window.location.pathname);

    if (normalizedLink !== currentPath) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        setTimeout(() => {
            window.location.href = href;
        }, 200);
    }
}

function setupNav() {
    const navMenu = document.getElementById('nav-menu');
    const logoLink = document.getElementById('header-logo-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');

    if (navMenu) {
        navMenu.addEventListener('click', (e) => {
            const link = e.target.closest('.nav-link');
            if (link) {
                handleNavClick(e, link);
            }
        });
    } else {
        console.warn('Nav menu not found');
    }

    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            handleNavClick(e, logoLink);
        });
    } else {
        console.warn('Logo link not found');
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });
    } else {
        console.warn('Mobile menu button not found');
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.querySelector('header');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!mobileMenu || !header || !hamburgerIcon || !closeIcon) {
        console.warn('Mobile menu elements missing:', {
            mobileMenu: !!mobileMenu,
            header: !!header,
            hamburgerIcon: !!hamburgerIcon,
            closeIcon: !!closeIcon
        });
        return;
    }

    if (mobileMenu.dataset.toggling === 'true') return;
    mobileMenu.dataset.toggling = 'true';

    const isHidden = mobileMenu.classList.contains('hidden');

    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.opacity = '1';
        mobileMenu.style.transform = 'scaleY(1)';
        mobileMenu.classList.remove('menu-close');
        mobileMenu.classList.add('menu-open');
        header.classList.remove('rounded-b');
        header.classList.add('open');
        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-close');
        header.classList.add('rounded-b');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'scaleY(0)';
        }, 400);
    }

    setTimeout(() => {
        mobileMenu.dataset.toggling = 'false';
    }, 400);
}

function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            const link = e.target.closest('.mobile-nav-link');
            if (link) {
                e.preventDefault();
                e.stopPropagation();
                handleNavClick(e, link);
                toggleMobileMenu();
            } else if (e.target === mobileMenu) {
                e.stopPropagation();
                toggleMobileMenu();
            }
        });
    } else {
        console.warn('Mobile menu not found');
    }
}

function setupPopupListeners(attempt = 1, maxAttempts = 3) {
    const featureBlocks = document.querySelectorAll('.feature-block');
    const overlay = document.getElementById('popup-overlay');
    console.log(`Setting up popup listeners (attempt ${attempt}/${maxAttempts}) for ${featureBlocks.length} blocks`);

    if (!overlay) {
        console.warn('Popup overlay not found. Retrying setup after delay...');
        if (attempt < maxAttempts) {
            setTimeout(() => setupPopupListeners(attempt + 1, maxAttempts), 200);
        } else {
            console.error('Failed to find popup overlay after maximum attempts');
        }
        return;
    }

    if (featureBlocks.length === 0) {
        console.warn('No feature blocks found with class .feature-block');
        return;
    }

    featureBlocks.forEach(block => {
        const popupData = block.dataset.popup;
        if (popupData) {
            try {
                const data = JSON.parse(popupData);
                block.addEventListener('click', () => {
                    console.log('Popup triggered for block:', block);
                    if (typeof openPopup === 'function') {
                        openPopup(block, data.title, data.description, data.image, data.features);
                    } else {
                        console.error('openPopup function is not defined');
                    }
                });
            } catch (error) {
                console.error('Error parsing popup data for block:', block, error);
            }
        } else {
            console.warn('No data-popup attribute found on block:', block);
        }
    });
}

async function initialize() {
    try {
        const includesLoaded = await loadIncludes();
        if (includesLoaded) {
            populateHero();
            populateFeatures();
            populateProSteps();
            populateMissionStats();
            populateCTA();
            populateFooter();
            setupNav();
            setupMobileMenu();
            setupPopupListeners();
            setActiveNav();
        } else {
            console.error('Failed to load all includes after retries');
            setupPopupListeners(); // Attempt to setup listeners even if includes fail
        }
    } catch (error) {
        console.error('Initialization failed:', error);
        setupNav();
        setupMobileMenu();
        setupPopupListeners();
        setActiveNav();
    }
}

document.addEventListener('DOMContentLoaded', initialize);
window.addEventListener('load', setActiveNav);
window.addEventListener('popstate', setActiveNav);
