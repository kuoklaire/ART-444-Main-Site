const observer = new IntersectionObserver(
    (entries) => {
     entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("in-view")
        } else {
            entry.target.classList.remove('in-view')
        }
     })
    },
    {
    rootMargin: "0px",
    threshold: [0,0.1,1],
    }, 
)

const tags= document.querySelectorAll('figure')

tags.forEach((tag) => {
    observer.observe(tag)
})

const faqToggle = document.querySelectorAll('.faq-question-answer');

for (let i = 0; i < faqToggle.length; i++) {
    faqToggle[i].addEventListener("click", faqOpen);
    }
function faqOpen () {
    var FAQButton = document.querySelectorAll('.faq-open');
    iconDrop = null;
    lastOpened = null;

    var dropCont = this.nextElementSibling;
    let icon = this.querySelector('.down-button');
    icon.classList.toggle('up-button');

    if (lastOpened && lastOpened !== dropCont)
    lastOpened.classList.remove("down-button");
    lastOpened = dropCont;

    if (iconDrop && iconDrop !== icon)
    iconDrop.classlist.remove("up-button");
    iconDrop = icon;

    this.classList.toggle('faq-open');
}


function myMenu() {
    document.getElementById("mymenu").classList.toggle("open");
    document.getElementById('menuButton').classList.toggle('close');
}
function myMenuLinks() {
    document.getElementById("mymenu").classList.remove("open");
    document.getElementById('menuButton').classList.remove('close');
}
function lmButton() {
    document.getElementById("lmbutton").classList.toggle("activated-LMbutton");
    document.getElementById("mymenu").classList.toggle("darkmode-mobile-menu-popout");
   
    const mainnavlinksDark = document.querySelectorAll('.main-nav-links')
        for (let i = 0; i < mainnavlinksDark.length; i++) {
            mainnavlinksDark[i].classList.toggle('darkmode-main-nav-links');
        }
    const buttonprimaryDark = document.querySelectorAll('.button-primary')
        for (let i = 0; i < buttonprimaryDark.length; i++) {
            buttonprimaryDark[i].classList.toggle('darkmode-button-primary');
        }
     const subheadingDark = document.querySelectorAll('.subheading')
        for (let i = 0; i < subheadingDark.length; i++) {
            subheadingDark[i].classList.toggle('darkmode-subheading');
        }
    const experiencecardDark = document.querySelectorAll('.experience-card-front')
        for (let i = 0; i < experiencecardDark.length; i++) {
            experiencecardDark[i].classList.toggle('darkmode-experience-card-front');
        }
    const experiencecarddatelocationDark = document.querySelectorAll('.experience-card-date-location')
        for (let i = 0; i < experiencecarddatelocationDark.length; i++) {
            experiencecarddatelocationDark[i].classList.toggle('darkmode-experience-card-date-location');
        }
    const portfoliodatelocationDark = document.querySelectorAll('.portfolio-date-location')
        for (let i = 0; i < portfoliodatelocationDark.length; i++) {
            portfoliodatelocationDark[i].classList.toggle('darkmode-portfolio-date-location');
        }
    const portfoliotitleDark = document.querySelectorAll('.portfolio-title')
        for (let i = 0; i < portfoliotitleDark.length; i++) {
            portfoliotitleDark[i].classList.toggle('darkmode-portfolio-title');
        }
    const portfoliodescriptionDark = document.querySelectorAll('.portfolio-description')
        for (let i = 0; i < portfoliodescriptionDark.length; i++) {
            portfoliodescriptionDark[i].classList.toggle('darkmode-portfolio-description');
        }
    const copyrightDark = document.querySelectorAll('.copyright')
        for (let i = 0; i < copyrightDark.length; i++) {
            copyrightDark[i].classList.toggle('darkmode-copyright');
        }
    const honeDark = document.querySelectorAll('.h1')
        for (let i = 0; i < honeDark.length; i++) {
            honeDark[i].classList.toggle('darkmode-h1');
        }
    const darkmodetitleDark = document.querySelectorAll('.dark-mode-title')
        for (let i = 0; i < darkmodetitleDark.length; i++) {
            darkmodetitleDark[i].classList.toggle('darkmode-dark-mode-title');
        }
    const labelDark = document.querySelectorAll('label')
        for (let i = 0; i < labelDark.length; i++) {
            labelDark[i].classList.toggle('darkmode-label');
        }
    const bodyDark = document.querySelectorAll('body')
        for (let i = 0; i < bodyDark.length; i++) {
            bodyDark[i].classList.toggle('darkmode-body');
        }
    const sectionheaderDark = document.querySelectorAll('section#header')
        for (let i = 0; i < sectionheaderDark.length; i++) {
            sectionheaderDark[i].classList.toggle('darkmode-sectionheader');
        }
    const sectionaboutDark = document.querySelectorAll('section#about')
        for (let i = 0; i < sectionaboutDark.length; i++) {
            sectionaboutDark[i].classList.toggle('darkmode-sectionabout');
        }
    const aboutmeheaderDark = document.querySelectorAll('.aboutme-header')
        for (let i = 0; i < aboutmeheaderDark.length; i++) {
            aboutmeheaderDark[i].classList.toggle('darkmode-aboutme-header');
        }
    const aboutmedescriptionDark = document.querySelectorAll('.aboutme-paragraph')
        for (let i = 0; i < aboutmedescriptionDark.length; i++) {
            aboutmedescriptionDark[i].classList.toggle('darkmode-aboutme-paragraph');
        }
    const socialmedialinkedinDark = document.querySelectorAll('.social_media_linkedin')
        for (let i = 0; i < socialmedialinkedinDark.length; i++) {
            socialmedialinkedinDark[i].classList.toggle('darkmode-social_media_linkedin');
        }
    const socialmediainstagramDark = document.querySelectorAll('.social_media_Instagram')
        for (let i = 0; i < socialmediainstagramDark.length; i++) {
            socialmediainstagramDark[i].classList.toggle('darkmode-social_media_Instagram');
        }
    const socialmediapinterestDark = document.querySelectorAll('.social_media_Pinterest')
        for (let i = 0; i < socialmediapinterestDark.length; i++) {
            socialmediapinterestDark[i].classList.toggle('darkmode-social_media_Pinterest');
        }
    const footerlinkDark = document.querySelectorAll('.footerlink')
        for (let i = 0; i < footerlinkDark.length; i++) {
            footerlinkDark[i].classList.toggle('darkmode-footerlink');
        }
} 