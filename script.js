        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Gallery hover effects
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-15px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Contact form handling
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const inputs = this.querySelectorAll('input, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff6b6b';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Simulate form submission
                const button = this.querySelector('button');
                const originalText = button.textContent;
                button.textContent = 'Message envoyé !';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    this.reset();
                }, 3000);
            } else {
                alert('Veuillez remplir tous les champs obligatoires.');
            }
        });

        // Add floating animation to hero elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.fontSize = '3rem';
            element.style.opacity = '0.6';
            element.style.cursor = 'pointer';
            
            element.addEventListener('click', () => {
                element.style.animation = 'none';
                setTimeout(() => {
                    element.style.animation = 'float 2s ease-in-out infinite';
                }, 100);
            });
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Add typing effect to hero title
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Initialize typing effect when page loads
        window.addEventListener('load', () => {
            const heroTitle = document.querySelector('.hero-text h1');
            if (heroTitle) {
                const originalText = heroTitle.textContent;
                setTimeout(() => {
                    typeWriter(heroTitle, originalText, 80);
                }, 1000);
            }
        });

        // Add interactive elements to skills
        document.querySelectorAll('.skill').forEach(skill => {
            skill.addEventListener('click', () => {
                skill.style.background = 'linear-gradient(135deg, #FFB347, #D2691E)';
                skill.style.color = 'white';
                skill.style.transform = 'scale(1.1)';
                
                setTimeout(() => {
                    skill.style.background = '';
                    skill.style.color = '';
                    skill.style.transform = '';
                }, 1000);
            });
        });

        // Add image loading effect
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';
                setTimeout(() => {
                    img.style.opacity = '1';
                }, 100);
            });
        });

        // Easter egg: Konami code for special animation
        let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        let konamiIndex = 0;

        document.addEventListener('keydown', (e) => {
            if (e.keyCode === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    document.body.style.animation = 'rainbow 2s ease-in-out';
                    setTimeout(() => {
                        document.body.style.animation = '';
                    }, 2000);
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });

        // Add rainbow animation for easter egg
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        // Add loading screen
        window.addEventListener('load', () => {
            const loader = document.createElement('div');
            loader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #F5F5DC, #FEFEFE);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                font-size: 3rem;
                animation: fadeOut 1s ease-in-out forwards;
                animation-delay: 0.5s;
            `;
            loader.innerHTML = '🧁';
            document.body.appendChild(loader);

            const fadeOutStyle = document.createElement('style');
            fadeOutStyle.textContent = `
                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        visibility: hidden;
                    }
                }
            `;
            document.head.appendChild(fadeOutStyle);

            setTimeout(() => {
                loader.remove();
            }, 1500);
        });