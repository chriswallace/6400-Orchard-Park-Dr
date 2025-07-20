import Alpine from "alpinejs";

// Image gallery data with captions
const imageGallery = {
  images: [
    {
      id: 2,
      caption:
        "Freshly painted columns, shutters, and lights with a traditional feel",
      alt: "Property view 2",
    },
    {
      id: 3,
      caption: "Situated at the end of a quiet cul-de-sac",
      alt: "Property view 3",
    },
    {
      id: 33,
      caption:
        "Million-dollar views of McKinney from the exquisite formal dining room",
      alt: "Property view 33",
    },
    {
      id: 34,
      caption:
        "Entering the home, you're greeted by a large dining room and staircase with 30-foot ceilings",
      alt: "Property view 34",
    },
    {
      id: 35,
      caption: "Natural light fills the spacious dining room",
      alt: "Property view 35",
    },
    {
      id: 36,
      caption: "A beautiful nook with window for more light in the entryway",
      alt: "Property view 36",
    },
    {
      id: 37,
      caption:
        "An office with french doors, tall ceilings and view of the cul-de-sac and trees",
      alt: "Property view 37",
    },
    {
      id: 14,
      caption:
        "Large living room with large windows to the outdoor living space",
      alt: "Property view 14",
    },
    {
      id: 15,
      caption: "Open-concept floor plan allows for easy entertaining",
      alt: "Property view 15",
    },
    {
      id: 16,
      caption: "Floor-to-ceiling fireplace",
      alt: "Property view 16",
    },
    {
      id: 17,
      caption:
        "A stunning custom island with granite countertops is the heart of the home",
      alt: "Property view 17",
    },
    {
      id: 18,
      caption: "Hardwood flooring was recently extended into the kitchen",
      alt: "Property view 18",
    },
    {
      id: 19,
      caption: "Champagne gold accents and custom above/below cabinet lighting",
      alt: "Property view 19",
    },
    {
      id: 20,
      caption: "Brand new dishwasher recently installed",
      alt: "Property view 20",
    },
    {
      id: 21,
      caption:
        "Gorgeous white cabinets and white tile backsplash are always in style",
      alt: "Property view 21",
    },
    {
      id: 22,
      caption: "Beautiful nature views from the eat-in kitchen",
      alt: "Property view 22",
    },
    {
      id: 6,
      caption: "Primary bedroom with cathedral-style vaulted ceiling",
      alt: "Property view 6",
    },
    {
      id: 7,
      caption:
        "Large windows overlooking the backyard and Ecobee smart thermostat",
      alt: "Property view 7",
    },
    {
      id: 8,
      caption: "Double doors connect the primary suite's bathroom and bedroom",
      alt: "Property view 8",
    },
    {
      id: 9,
      caption:
        "Primary bathroom features quartz countertops, a soaker tub, and tumbled travertine.",
      alt: "Property view 9",
    },
    {
      id: 10,
      caption: "Shower with large glass picture window and door",
      alt: "Property view 10",
    },
    {
      id: 11,
      caption: "His and hers vanities with a large makeup station",
      alt: "Property view 11",
    },
    {
      id: 12,
      caption: "Extra-deep closet connected to the primary bathroom",
      alt: "Property view 12",
    },
    {
      id: 13,
      caption: "Laundry room connects to the primary closet and main hallway",
      alt: "Property view 13",
    },
    {
      id: 4,
      caption:
        "Guest suite or multigenerational living space with ensuite bathroom",
      alt: "Property view 4",
    },
    {
      id: 5,
      caption: "Large ensuite bathroom with tile shower and tub",
      alt: "Property view 5",
    },
    {
      id: 23,
      caption: "Art niches and a large window add to the elegant staircase",
      alt: "Property view 23",
    },
    {
      id: 24,
      caption: "A two-station built-in desk with beautiful shelves",
      alt: "Property view 24",
    },
    {
      id: 25,
      caption: "Upstairs bedroom #1 with cathedral ceiling",
      alt: "Property view 25",
    },
    {
      id: 26,
      caption: "Upstairs bedroom #2 with cathedral ceiling",
      alt: "Property view 26",
    },
    {
      id: 27,
      caption: "Jack-and-jill bathroom with double sinks",
      alt: "Property view 27",
    },
    {
      id: 28,
      caption: "Bonus room with picture window and custom bench",
      alt: "Property view 28",
    },
    {
      id: 29,
      caption:
        "Game room with large windows to the backyard overlooking the greenbelt",
      alt: "Property view 29",
    },
    {
      id: 30,
      caption: "Game room includes a beverage fridge and cabinets",
      alt: "Property view 30",
    },
    {
      id: 31,
      caption: "Media room wired for 7.1 surround sound",
      alt: "Property view 31",
    },
    {
      id: 32,
      caption: "Perfect for date night or gaming with friends",
      alt: "Property view 32",
    },
    {
      id: 43,
      caption: "Brand new flagstone patio for outdoor living",
      alt: "Property view 43",
    },
    {
      id: 44,
      caption: "Stay cool with two built-in ceiling fans",
      alt: "Property view 44",
    },
    {
      id: 45,
      caption: "A large, private backyard",
      alt: "Property view 45",
    },
    {
      id: 38,
      caption:
        "Situated at the highest point in McKinney, the home offers stunning views of the city and surrounding areas",
      alt: "Property view 38",
    },
    {
      id: 39,
      caption: "Full brick side elevation and HOA-maintained fence",
      alt: "Property view 39",
    },
    {
      id: 40,
      caption: "Newer roof installed 5 years ago",
      alt: "Property view 40",
    },
    {
      id: 41,
      caption: "Quiet cul-de-sac, perfect for kids and pets",
      alt: "Property view 41",
    },
    {
      id: 42,
      caption: "Wrapped in the heart of luxury and nature in Stonebridge Ranch",
      alt: "Property view 42",
    },
    {
      id: "beach-club",
      caption: "The Stonebridge Ranch Beach Club",
      alt: "The Stonebridge Ranch Beach Club",
      customUrl: "https://ik.imagekit.io/UltraDAO/6400/24020778-170926.jpg",
    },
    {
      id: "aquatic-center",
      caption: "The Stonebridge Ranch Aquatic Center",
      alt: "The Stonebridge Ranch Aquatic Center",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/sbr_pool-feet_013_1920_1200.webp",
    },
    {
      id: "golf-course",
      caption: "27 holes of championship golf at your fingertips",
      alt: "27 holes of championship golf at your fingertips",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/sbr_golf_golfcourse_21_1920_1200.jpg",
    },
    {
      id: "dye-course-1",
      caption: "Stonebridge Ranch's Famous Dye Course",
      alt: "Stonebridge Ranch's Famous Dye Course",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/stonebridge_golf-dye_drone_003_1920_1200.webp",
    },
    {
      id: "dye-course-2",
      caption: "Stonebridge Ranch's Famous Dye Course",
      alt: "Stonebridge Ranch's Famous Dye Course",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/sbr_golf_homepage_life_at_the_dye_1920_1200.webp",
    },
    {
      id: "adriatica",
      caption: "Adriatica Village is just a five-minute walk away",
      alt: "Adriatica Village is just a five-minute walk away",
      customUrl:
        "https://ik.imagekit.io/UltraDAO/6400/Stonebridge-Ranch-Neighborhood.jpg",
    },
    {
      id: "tennis-courts",
      caption: "HOA-maintained Tennis Courts just around the corner",
      alt: "HOA-maintained Tennis Courts just around the corner",
      customUrl: "https://ik.imagekit.io/UltraDAO/6400/maxresdefault.jpg",
    },
  ],
};

// Alpine.js components
Alpine.data("imageGallery", () => ({
  currentImage: null,
  showModal: false,
  images: imageGallery.images,

  init() {
    // Add keyboard event listeners when component initializes
    this.setupKeyboardNavigation();
  },

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      if (!this.showModal) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          this.closeModal();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          this.prevImage();
          break;
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          this.nextImage();
          break;
        case "Home":
          e.preventDefault();
          this.goToFirstImage();
          break;
        case "End":
          e.preventDefault();
          this.goToLastImage();
          break;
        case " ": // Spacebar
          e.preventDefault();
          this.nextImage();
          break;
      }
    });
  },

  openModal(imageId) {
    this.currentImage = this.images.find((img) => img.id === imageId);
    this.showModal = true;
    document.body.style.overflow = "hidden";

    // Focus the modal for better accessibility
    this.$nextTick(() => {
      const modal = document.querySelector("[data-modal]");
      if (modal) modal.focus();
    });
  },

  closeModal() {
    this.showModal = false;
    this.currentImage = null;
    document.body.style.overflow = "auto";

    // Return focus to the gallery
    this.$nextTick(() => {
      const gallery = document.querySelector("#gallery");
      if (gallery) gallery.focus();
    });
  },

  nextImage() {
    const currentIndex = this.images.findIndex(
      (img) => img.id === this.currentImage.id
    );
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.currentImage = this.images[nextIndex];
  },

  prevImage() {
    const currentIndex = this.images.findIndex(
      (img) => img.id === this.currentImage.id
    );
    const prevIndex =
      currentIndex === 0 ? this.images.length - 1 : currentIndex - 1;
    this.currentImage = this.images[prevIndex];
  },

  goToFirstImage() {
    this.currentImage = this.images[0];
  },

  goToLastImage() {
    this.currentImage = this.images[this.images.length - 1];
  },

  getCurrentImageIndex() {
    return this.images.findIndex((img) => img.id === this.currentImage.id);
  },

  getImageUrl(imageId, transformation = "") {
    // Find the image object to check if it has a custom URL
    const imageObj = this.images.find((img) => img.id === imageId);

    if (imageObj && imageObj.customUrl) {
      // For custom URLs, return as-is with optional transformation
      return transformation
        ? `${imageObj.customUrl}?${transformation}`
        : imageObj.customUrl;
    }

    // For numbered images, use the original logic
    const baseUrl = `https://ik.imagekit.io/UltraDAO/6400/${imageId}-6400Orchard_${String(
      imageId
    ).padStart(3, "0")}.jpg`;
    return transformation
      ? `${baseUrl}?${transformation}`
      : `${baseUrl}?updatedAt=1752969198065`;
  },

  // Generate responsive srcset for gallery images
  getGallerySrcSet(imageId) {
    // Find the image object to check if it has a custom URL
    const imageObj = this.images.find((img) => img.id === imageId);

    let baseUrl;
    if (imageObj && imageObj.customUrl) {
      baseUrl = imageObj.customUrl;
    } else {
      baseUrl = `https://ik.imagekit.io/UltraDAO/6400/${imageId}-6400Orchard_${String(
        imageId
      ).padStart(3, "0")}.jpg`;
    }

    // Generate multiple sizes for different screen densities and widths
    const sizes = [
      { w: 400, desc: "400w" },
      { w: 600, desc: "600w" },
      { w: 800, desc: "800w" },
      { w: 1000, desc: "1000w" },
      { w: 1200, desc: "1200w" },
      { w: 1600, desc: "1600w" },
      { w: 2000, desc: "2000w" },
    ];

    return sizes
      .map((size) => `${baseUrl}?tr=w-${size.w},c-at_max,q-70 ${size.desc}`)
      .join(", ");
  },

  // Generate responsive srcset for modal images (larger sizes)
  getModalSrcSet(imageId) {
    // Find the image object to check if it has a custom URL
    const imageObj = this.images.find((img) => img.id === imageId);

    let baseUrl;
    if (imageObj && imageObj.customUrl) {
      baseUrl = imageObj.customUrl;
    } else {
      baseUrl = `https://ik.imagekit.io/UltraDAO/6400/${imageId}-6400Orchard_${String(
        imageId
      ).padStart(3, "0")}.jpg`;
    }

    // Generate larger sizes for modal viewing
    const sizes = [
      { w: 800, desc: "800w" },
      { w: 1200, desc: "1200w" },
      { w: 1600, desc: "1600w" },
      { w: 2000, desc: "2000w" },
      { w: 2400, desc: "2400w" },
    ];

    return sizes
      .map((size) => `${baseUrl}?tr=w-${size.w},c-at_max,q-70 ${size.desc}`)
      .join(", ");
  },
}));

// Navigation scroll effect
Alpine.data("navigation", () => ({
  scrolled: false,
  mobileMenuOpen: false,

  init() {
    window.addEventListener("scroll", () => {
      this.scrolled = window.scrollY > 50;
    });
  },

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    // Prevent body scroll when mobile menu is open
    if (this.mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  },

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = "auto";
  },
}));

// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// Initialize Alpine.js
Alpine.start();
