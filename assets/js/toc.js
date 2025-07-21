// Table of Contents Functionality
(function() {
    'use strict';
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTOC);
    } else {
        initTOC();
    }
    
    function initTOC() {
        const tocContainer = document.querySelector('.table-of-contents');
        if (!tocContainer) return;
        
        // Initialize mobile collapsible behavior
        initMobileCollapse();
        
        // Add IDs to headings that don't have them
        addHeadingIDs();
        
        // Initialize active section highlighting
        initActiveSection();
        
        // Initialize smooth scrolling
        initSmoothScrolling();
    }
    
    function initMobileCollapse() {
        const tocTitle = document.querySelector('.toc-title');
        const tocList = document.querySelector('.toc-list');
        
        if (!tocTitle || !tocList) return;
        
        // Only on mobile devices
        if (window.innerWidth < 768) {
            tocTitle.classList.add('collapsed');
            tocList.classList.remove('expanded');
            
            tocTitle.addEventListener('click', function() {
                const isCollapsed = tocTitle.classList.contains('collapsed');
                
                if (isCollapsed) {
                    tocTitle.classList.remove('collapsed');
                    tocList.classList.add('expanded');
                } else {
                    tocTitle.classList.add('collapsed');
                    tocList.classList.remove('expanded');
                }
            });
        }
    }
    
    function addHeadingIDs() {
        const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4');
        
        headings.forEach(function(heading) {
            if (!heading.id) {
                // Create ID from heading text
                const id = heading.textContent
                    .toLowerCase()
                    .replace(/[^\w\s-]/g, '') // Remove special characters
                    .replace(/\s+/g, '-') // Replace spaces with hyphens
                    .trim();
                heading.id = id;
            }
        });
    }
    
    function initActiveSection() {
        const tocLinks = document.querySelectorAll('.toc-list a');
        const headings = document.querySelectorAll('.post-content h2, .post-content h3, .post-content h4');
        
        if (tocLinks.length === 0 || headings.length === 0) return;
        
        // Create intersection observer for headings
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -75% 0px',
            threshold: 0
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                const id = entry.target.id;
                const tocLink = document.querySelector('.toc-list a[href="#' + id + '"]');
                
                if (tocLink) {
                    if (entry.isIntersecting) {
                        // Remove active class from all links
                        tocLinks.forEach(function(link) {
                            link.classList.remove('active');
                        });
                        
                        // Add active class to current link
                        tocLink.classList.add('active');
                    }
                }
            });
        }, observerOptions);
        
        // Observe all headings
        headings.forEach(function(heading) {
            observer.observe(heading);
        });
        
        // Handle manual clicking
        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                // Remove active class from all links
                tocLinks.forEach(function(l) {
                    l.classList.remove('active');
                });
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Close mobile TOC after clicking
                if (window.innerWidth < 768) {
                    const tocTitle = document.querySelector('.toc-title');
                    const tocList = document.querySelector('.toc-list');
                    
                    if (tocTitle && tocList) {
                        tocTitle.classList.add('collapsed');
                        tocList.classList.remove('expanded');
                    }
                }
            });
        });
    }
    
    function initSmoothScrolling() {
        const tocLinks = document.querySelectorAll('.toc-list a[href^="#"]');
        
        tocLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80; // Adjust based on your header height
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Re-initialize mobile behavior if needed
        const tocTitle = document.querySelector('.toc-title');
        const tocList = document.querySelector('.toc-list');
        
        if (window.innerWidth >= 768) {
            // Desktop: ensure TOC is always visible
            if (tocTitle) tocTitle.classList.remove('collapsed');
            if (tocList) tocList.classList.add('expanded');
        } else {
            // Mobile: start collapsed
            if (tocTitle && !tocTitle.classList.contains('collapsed')) {
                tocTitle.classList.add('collapsed');
                tocList.classList.remove('expanded');
            }
        }
    });
    
})();