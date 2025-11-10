// Grab elements
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const nextBtn = document.querySelector('.lightbox .next');
const prevBtn = document.querySelector('.lightbox .prev');

let currentIndex = 0;

// Convert NodeList to Array for easier indexing
const images = Array.from(galleryItems);

// Open lightbox on click
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox(images[currentIndex].src);
  });
});

function showLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Next/Previous logic
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showLightbox(images[currentIndex].src);
});
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showLightbox(images[currentIndex].src);
});

// Clicking outside image closes
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Filter functionality
const filterButtons = document.querySelectorAll('.filter-menu button');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter-menu button.active').classList.remove('active');
    btn.classList.add('active');
    
    const filter = btn.getAttribute('data-filter');
    galleryItems.forEach(item => {
      const category = item.parentElement.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        item.parentElement.style.display = 'block';
      } else {
        item.parentElement.style.display = 'none';
      }
    });
  });
});
