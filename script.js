// // slider 
// // JavaScript to create seamless infinite scrolling
// const slider = document.querySelector('.slider');
// const slideTrack = document.querySelector('.slide-track');
// const slides = Array.from(slideTrack.children);

// // Clone slides to make the slider seamless
// slides.forEach(slide => {
//     const clone = slide.cloneNode(true);
//     slideTrack.appendChild(clone);
// });

// // Variables for scrolling
// let currentPosition = 0;
// let speed = 0.3; // Adjust this value to control speed (smaller = slower, larger = faster)
// let slideWidth = slides[0].offsetWidth; // Dynamically updated
// let totalWidth = slideTrack.scrollWidth; // Dynamically updated

// // Function to update dimensions dynamically
// function updateDimensions() {
//     slideWidth = slides[0].offsetWidth;
//     totalWidth = slideTrack.scrollWidth;
// }

// // Continuous scrolling function
// function scrollSlides() {
//     currentPosition -= speed; // Adjust speed here
//     if (Math.abs(currentPosition) >= totalWidth / 2) {
//         currentPosition = 0; // Reset to the start
//     }
//     slideTrack.style.transform = `translateX(${currentPosition}px)`;
//     requestAnimationFrame(scrollSlides);
// }

// // Event listener for dynamic speed adjustment
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowUp') {
//         speed += 0.3; // Increase speed
//     } else if (event.key === 'ArrowDown') {
//         speed = Math.max(0.3, speed - 0.3); // Decrease speed, but not below 0.5
//     }
// });

// // Update dimensions on window resize
// window.addEventListener('resize', updateDimensions);

// // Start the scrolling
// updateDimensions();
// scrollSlides();

// document.addEventListener("DOMContentLoaded", function () {
//     const navbar = document.querySelector(".desktop-navbar"); // Select the desktop navbar
//     const mobileNavbar = document.querySelector(".mobile-navbar"); // Select the mobile navbar

//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 50) {
//             navbar.classList.add("sticky-navbar");
//             mobileNavbar.classList.add("sticky-navbar");
//         } else {
//             navbar.classList.remove("sticky-navbar");
//             mobileNavbar.classList.remove("sticky-navbar");
//         }
//     });
// });
// ----------------------------------------------
// main home for mobile
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".image-slider-mob");
    const cards = Array.from(document.querySelectorAll(".image-card-mob"));
    let cardWidth = 0;
    let currentIndex = 0;

    // Function to update card width dynamically
    function updateCardWidth() {
        cardWidth = cards[0].getBoundingClientRect().width + 30; // Include the gap
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Slide to the next card
    function slideCards() {
        currentIndex = (currentIndex + 1) % cards.length; // Loop back to the first card
        slider.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Reset position when resizing
    function resetSlider() {
        slider.style.transition = "none"; // Disable transition temporarily
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    // Attach resize event listener
    window.addEventListener("resize", () => {
        updateCardWidth();
        resetSlider();
    });

    // Initialize card width and start sliding
    updateCardWidth();
    setInterval(slideCards, 3000); // Change card every 3 seconds
});


// maharaj yt video
const image = document.querySelector('.maha img');
const videoContainer = document.getElementById('video-container');
const iframe = videoContainer.querySelector('iframe');
const youtubeIcon = document.querySelector('.maha i'); // Select the YouTube icon
const videoTrigger = document.querySelector('.maha a'); // Select the entire anchor tag

videoTrigger.addEventListener('click', () => {
  videoContainer.style.display = 'block'; // Show the video container
  image.style.display = 'none'; // Hide the image
  youtubeIcon.style.opacity = '0'; // Hide the YouTube icon

  // Start playing the video automatically when the container is shown
  const youtubeUrl = new URL(iframe.src);
  youtubeUrl.searchParams.set('autoplay', 1);
  iframe.src = youtubeUrl.toString();
});


// + to -
// Select all dropdown toggles
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

// Add click event listener to each toggle
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
        const icon = this.querySelector('.toggle-icon');
        if (icon.classList.contains('bi-plus-circle')) {
            icon.classList.remove('bi-plus-circle');
            icon.classList.add('bi-dash-circle');
        } else {
            icon.classList.remove('bi-dash-circle');
            icon.classList.add('bi-plus-circle');
        }
    });
});


// filter content for wisdom page
