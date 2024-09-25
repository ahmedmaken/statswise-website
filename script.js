// Register GSAP ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    // Show the banner if the user has not interacted with it
    if (!localStorage.getItem('cookieConsentStatus')) {
        document.getElementById('cookieConsentBanner').style.display = 'block';
    }

    // Handle accept
    document.getElementById('acceptCookies').addEventListener('click', function () {
        localStorage.setItem('cookieConsentStatus', 'accepted');
        document.getElementById('cookieConsentBanner').style.display = 'none';
    });

    // Handle decline
    document.getElementById('declineCookies').addEventListener('click', function () {
        localStorage.setItem('cookieConsentStatus', 'declined');
        document.getElementById('cookieConsentBanner').style.display = 'none';
    });
});

// Animating Home Section Heading and Button
gsap.from(".home-section h1", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out",
});

gsap.from(".home-section p", {
    duration: 1.5,
    delay: 0.5,
    y: 100,
    opacity: 0,
    ease: "power3.out",
});

gsap.from(".home-section a", {
    duration: 1.5,
    delay: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out",
});

// Animating Service Section
gsap.from("#services h2", {
    scrollTrigger: {
        trigger: "#services",
        start: "top center",
    },
    duration: 1,
    y: 50,
    opacity: 0,
});

gsap.from(".services-section .col-md-4", {
    scrollTrigger: {
        trigger: ".services-section",
        start: "top 75%",
    },
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
});

// Animating Industries Section
gsap.from("#industries h2", {
    scrollTrigger: {
        trigger: "#industries",
        start: "top center",
    },
    duration: 1,
    y: 50,
    opacity: 0,
});

gsap.from(".industries-section .industry-box", {
    scrollTrigger: {
        trigger: ".industries-section",
        start: "top 75%",
    },
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    ease: "power2.out",
});

// About and Contact Sections Animation
if (window.innerWidth <= 768) { // Adjust based on your mobile breakpoint
    // Ensure immediate visibility for mobile devices
    gsap.from("#about h2, #contact h2", {
        opacity: 1,
        duration: 0,
    });
} else {
    // About and Contact Sections Animation for larger screens
    gsap.from("#about h2", {
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%", // Trigger earlier, when the top of the section is 80% down the viewport
        },
        duration: 1,
        y: 50,
        opacity: 0,
    });

    gsap.from("#contact h2", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 90%", // Trigger earlier
            toggleActions: "play none none none" // Ensure it only plays once
        },
        duration: 1,
        y: 50,
        opacity: 0,
    });
    ScrollTrigger.refresh();

}
