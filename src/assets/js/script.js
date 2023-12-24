'use strict';

// Scroll Progress Indicator
document.addEventListener('scroll', function () {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolledPercentage + '%';
});

// Smooth scroll into view of sections
const contactDetails = document.getElementById('connect-directly');
const portfolioSection = document.getElementById('my-portfolio');
const connectButton = document.querySelector('.btn--connect');
const portfolioButton = document.querySelector('.btn--my-portfolio');
connectButton.addEventListener('click', () => {
    contactDetails.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
});
portfolioButton.addEventListener('click', () => {
    portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        scrollTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    });
});
