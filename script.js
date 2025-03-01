document.addEventListener('DOMContentLoaded', () => {
    // Add click handler to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const url = card.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
        
        // Add random subtle tilt for a personal, non-corporate feel
        const randomRotation = (Math.random() * 2 - 1) * 0.3;
        card.style.transform = `rotate(${randomRotation}deg)`;
        
        // Reset rotation on hover but keep the hover effect from CSS
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotate(${randomRotation}deg)`;
        });
    });
    
    // Get avatar and emoji but remove particle effects
    const avatar = document.querySelector('.avatar');
    const emoji = document.querySelector('.emoji');
    
    if (emoji) {
        // Occasional subtle animation of the main emoji
        setInterval(() => {
            emoji.style.transform = 'scale(1.1)';
            setTimeout(() => {
                emoji.style.transform = 'scale(1)';
            }, 150);
        }, 5000);
    }
    
    // Add enhanced background effects
    createBackgroundEffects();
    
    // Add a random welcome message in the console for fellow developers
    const welcomeMessages = [
        "👋 Hey fellow dev! Welcome to my little corner of the web.",
        "🐸 ribbit... I mean, hello! Thanks for checking out my projects.",
        "💻 Inspect element, eh? I see you're a developer of culture as well.",
        "🚀 Feel free to fork any of these projects on GitHub!",
        "🔮 If you're reading this, we probably share similar interests in coding."
    ];
    
    console.log(
        "%c" + welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)],
        "color: #8c52ff; font-size: 14px; font-weight: bold;"
    );
    
    // Function to create enhanced background effects
    function createBackgroundEffects() {
        // Create floating particles container
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        particlesContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: -3;
        `;
        
        document.body.appendChild(particlesContainer);
        
        // Create particles
        const particleCount = 250; // Increased from 50
        const colors = [
            'rgba(140, 82, 255, 0.3)',
            'rgba(140, 82, 255, 0.1)',
            'rgba(255, 94, 120, 0.3)',
            'rgba(255, 94, 120, 0.1)',
            'rgba(255, 255, 255, 0.05)'
        ];
        
        for (let i = 0; i < particleCount; i++) {
            createParticle(particlesContainer, colors);
        }
        
        document.body.appendChild(scanlines);
        document.body.appendChild(noise);
        
        // Add a subtle glow around the page edges
        const edgeGlow = document.createElement('div');
        edgeGlow.className = 'edge-glow';
        edgeGlow.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            pointer-events: none;
            z-index: -1;
            box-shadow: 
                inset 0 0 100px rgba(140, 82, 255, 0.15),
                inset 0 0 30px rgba(255, 94, 120, 0.1);
        `;
        
        document.body.appendChild(edgeGlow);     
        document.body.appendChild(grid);
        
        // Add stars effect
        const starsContainer = document.createElement('div');
        starsContainer.className = 'stars-container';
        starsContainer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            pointer-events: none;
            z-index: -5;
        `;
        
        document.body.appendChild(starsContainer);
        
        // Create stars
        const starCount = 300;
        for (let i = 0; i < starCount; i++) {
            createStar(starsContainer);
        }
    }
    
    // Function to create a floating particle
    function createParticle(container, colors) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 1; // Reduced max size for subtlety
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomize starting position
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        
        // Randomize animation properties
        const duration = Math.random() * 60 + 30;
        const delay = Math.random() * 10;
        
        particle.style.cssText = `
            position: absolute;
            top: ${startY}%;
            left: ${startX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: ${color};
            border-radius: 50%;
            filter: blur(${Math.random() * 2 + 1}px);
            opacity: ${Math.random() * 1 + 2};
            animation: float ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        container.appendChild(particle);
    }
    
    // Function to create a twinkling star
    function createStar(container) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        
        // Position randomly
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Timing for twinkling
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: twinkle ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        container.appendChild(star);
    }
    
    // Add animations to the document
    const animations = document.createElement('style');
    animations.textContent = `
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.1;
            }
            25% {
                transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 20}deg);
                opacity: ${Math.random() * 0.4 + 0.2};
            }
            50% {
                transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) rotate(${Math.random() * 40}deg);
                opacity: ${Math.random() * 0.6 + 0.1};
            }
            75% {
                transform: translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px) rotate(${Math.random() * 20}deg);
                opacity: ${Math.random() * 0.4 + 0.2};
            }
            100% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0.9;
            }
        }
        
        @keyframes twinkle {
            0%, 100% { 
                opacity: 0.1;
                transform: scale(0.8);
            }
            100% { 
                opacity: 1; 
                transform: scale(1.2);
            }
        }
    `;
    
    document.head.appendChild(animations);
}); 