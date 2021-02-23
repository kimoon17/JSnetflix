//1
const netflixTitle = document.querySelector('h1.our-story-card-title')
netflixTitle.setAttribute('style', 'color: #e50914')

//2
const footerLinks = document.querySelectorAll('.footer-links.structural > li')

const distinctFooterLinks = []
footerLinks.forEach((item, key) => {
    if (key === 2 || key === 8 || key === 12) {
        distinctFooterLinks.push(item);
    }
})

distinctFooterLinks.forEach((item) => item.setAttribute('style', 'display: none'))
