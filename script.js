
// ---------------------- Desktop & Mobile Sticky Navbar ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".desktop-navbar");
    const mobileNavbar = document.querySelector(".mobile-navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar?.classList.add("sticky-navbar");
            mobileNavbar?.classList.add("sticky-navbar");
        } else {
            navbar?.classList.remove("sticky-navbar");
            mobileNavbar?.classList.remove("sticky-navbar");
        }
    });
});

// ---------------------- Mobile Home Slider ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".image-slider-mob");
    const cards = Array.from(document.querySelectorAll(".image-card-mob"));
    let cardWidth = 0;
    let currentIndex = 0;

    if (!slider || cards.length === 0) return;

    function updateCardWidth() {
        cardWidth = cards[0].getBoundingClientRect().width + 30;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function slideCards() {
        currentIndex = (currentIndex + 1) % cards.length;
        slider.style.transition = "transform 0.5s ease-in-out";
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function resetSlider() {
        slider.style.transition = "none";
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    let resizeTimeout;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            updateCardWidth();
            resetSlider();
        }, 200);
    });

    updateCardWidth();
    setInterval(slideCards, 3000);
});

// ---------------------- Maharaj YouTube Video Click ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector('.maha img');
    const videoContainer = document.getElementById('video-container');
    const iframe = videoContainer?.querySelector('iframe');
    const youtubeIcon = document.querySelector('.maha i');
    const videoTrigger = document.querySelector('.maha a');

    if (videoTrigger && iframe && image && videoContainer && youtubeIcon) {
        videoTrigger.addEventListener('click', () => {
            videoContainer.style.display = 'block';
            image.style.display = 'none';
            youtubeIcon.style.opacity = '0';

            const youtubeUrl = new URL(iframe.src);
            youtubeUrl.searchParams.set('autoplay', 1);
            iframe.src = youtubeUrl.toString();
        });
    }
});

// ---------------------- Plus to Minus Toggle ----------------------
document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const icon = this.querySelector('.toggle-icon');
            if (icon) {
                icon.classList.toggle('bi-plus-circle');
                icon.classList.toggle('bi-dash-circle');
            }
        });
    });
});
    
// ---------------------- Reusable Carousel (All Pages) ----------------------
function initializeCarousel(wrappeSelector, carouselSelector) {
    const wrappe = document.querySelector(wrappeSelector);
    const carousel = document.querySelector(carouselSelector);
    if (!wrappe || !carousel) return;

    const firstCard = carousel.querySelector(".card1");
    if (!firstCard) return;

    const firstCardWidth = firstCard.offsetWidth;
    const arrowBtns = wrappe.querySelectorAll("i");
    const carouselChildren = [...carousel.children];
    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

    const cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

    // Clone cards for seamless loop
    carouselChildren.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });
    carouselChildren.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        carousel.classList.remove("dragging");
    };

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if (!wrappe.matches(":hover")) autoPlay();
    };

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 3000);
    };

    autoPlay();
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("scroll", infiniteScroll);
    wrappe.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrappe.addEventListener("mouseleave", autoPlay);
}

// Initialize carousels
// initializeCarousel(".wrapper1", ".carousel1");
initializeCarousel(".wrapper2", ".carousel2");
initializeCarousel(".wrapper3", ".carousel3");
initializeCarousel(".wrapper4", ".carousel4");
initializeCarousel(".wrapper5", ".carousel5");

function spirit_Out(){
    initializeCarousel(".wrapper4", ".carousel4");
}
function develope_work(){
    initializeCarousel(".wrapper5", ".carousel5");
}