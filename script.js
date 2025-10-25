// Website Kenangan Kita - JavaScript Functions

// Initialize Vanta.js background
document.addEventListener("DOMContentLoaded", function () {
  if (typeof VANTA !== "undefined") {
    VANTA.BIRDS({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xfef7f7,
      color1: 0xe8b4b8,
      color2: 0xd4a574,
      colorMode: "lerp",
      birdSize: 1.2,
      wingSpan: 25.0,
      speedLimit: 3.0,
      separation: 20.0,
      alignment: 20.0,
      cohesion: 20.0,
      quantity: 3.0,
    });
  }
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".fade-in, .timeline-item").forEach((el) => {
    observer.observe(el);
  });
});

// Smooth scroll function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}

// Timeline animation
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

// Add timeline observer
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".timeline-item").forEach((item) => {
    timelineObserver.observe(item);
  });
});

// Add parallax effect to hero
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero-section");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Add floating hearts animation
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.style.opacity = "0.7";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "1000";
  heart.style.animation = "floatUp 3s linear forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Add floating hearts occasionally
setInterval(createFloatingHeart, 5000);

// Add CSS for floating hearts animation
const style = document.createElement("style");
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add click effect on memory cards
document.addEventListener("DOMContentLoaded", function () {
  const memoryCards = document.querySelectorAll(".memory-card");
  memoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.transform = "scale(1.05)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });
  });
});

// Add love quote rotation
const loveQuotes = [
  "Cinta sejati adalah ketika dua hati menjadi satu",
  "Denganmu, setiap hari adalah hari Valentine",
  "Kau adalah alasan di balik senyumanku setiap pagi",
  "Cinta kita seperti bintang - terus bersinar bahkan di kegelapan",
  "Dalam pelukanmu, aku menemukan rumahku",
  "Waktu berlalu, tapi cintaku padamu bertambah setiap hari",
];

let currentQuoteIndex = 0;

function rotateLoveQuote() {
  const quoteElements = document.querySelectorAll(".love-quote");
  quoteElements.forEach((element) => {
    element.style.opacity = "0";
    setTimeout(() => {
      element.textContent = loveQuotes[currentQuoteIndex];
      element.style.opacity = "1";
    }, 300);
  });

  currentQuoteIndex = (currentQuoteIndex + 1) % loveQuotes.length;
}

// Rotate quotes every 5 seconds
setInterval(rotateLoveQuote, 5000);

// Add responsive menu toggle (if needed)
function toggleMobileMenu() {
  const menu = document.querySelector(".mobile-menu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

// Add smooth transitions for all interactive elements
document.addEventListener("DOMContentLoaded", function () {
  // Add hover effects to buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });
    button.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });

  // Add loading animation
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });
});

// Add scroll progress indicator
window.addEventListener("scroll", () => {
  const scrolled =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  const progressBar = document.querySelector(".progress-bar");
  if (progressBar) {
    progressBar.style.width = scrolled + "%";
  }
});

// Music Player Functions
let isPlaying = false;

function toggleMusic() {
  const audio = document.getElementById("backgroundMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicText = document.getElementById("musicText");

  if (!audio) return;

  if (isPlaying) {
    audio.pause();
    musicText.textContent = "Play Playlist";
    isPlaying = false;
  } else {
    audio.play().catch((e) => {
      console.log("Audio play failed:", e);
      // Fallback jika autoplay diblokir
      musicText.textContent = "Play Playlist";
      isPlaying = false;
    });
    musicText.textContent = "Pause Playlist";
    isPlaying = true;
  }
}

// Surprise Button Functions
function showSurprise() {
  const modal = document.getElementById('surpriseModal');
  const modalContent = document.getElementById('modalContent');
  const video = document.getElementById('surpriseVideo');

  if (modal) {
    // tampilkan modal
    modal.classList.remove('hidden');

    // animasi muncul
    setTimeout(() => {
      modalContent.classList.remove('opacity-0', 'scale-95');
      modalContent.classList.add('opacity-100', 'scale-100');
    }, 50);

    // jalankan confetti kalau ada
    if (typeof triggerConfetti === 'function') {
      triggerConfetti();
    }

    // mainkan video setelah sedikit delay
    setTimeout(() => {
      if (video) {
        video.currentTime = 0;
        video.play();
      }
    }, 500);
  }
}

function closeSurprise() {
  const modal = document.getElementById('surpriseModal');
  const modalContent = document.getElementById('modalContent');
  const video = document.getElementById('surpriseVideo');

  // animasi keluar
  modalContent.classList.add('opacity-0', 'scale-95');
  modalContent.classList.remove('opacity-100', 'scale-100');

  // pause video
  if (video) video.pause();

  // sembunyikan modal setelah animasi selesai
  setTimeout(() => {
    if (modal) modal.classList.add('hidden');
  }, 300);
}// Confetti Animation
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  const colors = ["#e8b4b8", "#d4a574", "#f9f2f2", "#fce7f3", "#fecaca"];

  // Create confetti particles
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: -10,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    });
  }

  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = confetti.length - 1; i >= 0; i--) {
      const particle = confetti[i];

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;

      // Draw confetti
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.fillStyle = particle.color;
      ctx.fillRect(
        -particle.size / 2,
        -particle.size / 2,
        particle.size,
        particle.size
      );
      ctx.restore();

      // Remove confetti that are off screen
      if (particle.y > canvas.height + 10) {
        confetti.splice(i, 1);
      }
    }

    if (confetti.length > 0) {
      requestAnimationFrame(animateConfetti);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animateConfetti();
}

// Function to open letter
function openLetter() {
  const letterClosed = document.getElementById("letterClosed");
  const letterOpened = document.getElementById("letterOpened");

  if (letterClosed && letterOpened) {
    letterClosed.classList.add("hidden");
    letterOpened.classList.remove("hidden");

    // Add animation effect
    letterOpened.style.opacity = "0";
    letterOpened.style.transform = "translateY(20px)";

    setTimeout(() => {
      letterOpened.style.transition = "all 0.6s ease-out";
      letterOpened.style.opacity = "1";
      letterOpened.style.transform = "translateY(0)";
    }, 100);
  }
}

// Function to open WhatsApp
function openWhatsApp() {
  // Ganti nomor WhatsApp dengan nomor Anda
  const phoneNumber = "6289646450789"; // Contoh nomor, ganti dengan nomor Anda
  const message = "Hai! Aku baru saja melihat website kenangan kita ❤️";
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

// Function to open letter
function openLetter() {
  const letterClosed = document.getElementById("letterClosed");
  const letterOpened = document.getElementById("letterOpened");

  if (letterClosed && letterOpened) {
    letterClosed.classList.add("hidden");
    letterOpened.classList.remove("hidden");

    // Add animation effect
    letterOpened.style.opacity = "0";
    letterOpened.style.transform = "translateY(20px)";

    setTimeout(() => {
      letterOpened.style.transition = "all 0.6s ease-out";
      letterOpened.style.opacity = "1";
      letterOpened.style.transform = "translateY(0)";
    }, 100);
  }
}

// Function to open WhatsApp
function openWhatsApp() {
  // Ganti nomor WhatsApp dengan nomor Anda
  const phoneNumber = "6289646450789"; // Contoh nomor, ganti dengan nomor Anda
  const message = "Hai! Aku baru saja melihat website kenangan kita ❤️";
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

// Add keyboard navigation support
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowDown" || e.key === " ") {
    e.preventDefault();
    window.scrollBy(0, window.innerHeight);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    window.scrollBy(0, -window.innerHeight);
  }
});

// Add touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", function (e) {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener("touchend", function (e) {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe up - scroll down
      window.scrollBy(0, window.innerHeight);
    } else {
      // Swipe down - scroll up
      window.scrollBy(0, -window.innerHeight);
    }
  }
}
