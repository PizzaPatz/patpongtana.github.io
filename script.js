// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
  mainNav.classList.toggle('active');
});

const personalProjects = [
  {
    id: 1,
    title: "Blood Vessels Segmentation - Machine Learning",
    description: "The experiment on convolutional neural network using U-Net architecture. The objective of this machine learning project is to train the neural network to recognize blood vessels on retina. Given limited of 20 images to train the model, the segmentation is the best approach to this particular dataset. Segmentation is a way of patching small areas of an image to increase inputs number, this allows the neural network to learn in depth for specific patterns.",
    images: [
      "images/Blood_Vessels_Segmentation_Result.jpg"
    ],
    tags: ["Python", "TensorFlow", "Keras", "Machine Learning"],
    links: {
      github: "https://github.com/PizzaPatz/Blood_Vessels_Segmentation"
    }
  },
  {
    id: 2,
    title: "Rent My Book - University Database & Authenthication Project",
    description: "Group project from Mobile Application Development course at California State University, Long Beach. The app helps a student to organizes their rental to another student via the app. The authentication system is linked directly to students account via Microsoft API. We use Firebase to keep track on extra user data beside name, email, and phone number from their student account, such as profile picture, reward points, and books that the user own.",
    images: [
      "images/RentMyBook.png"
    ],
    tags: ["Java", "Firebase", "Authenthication", "OAuth Integration", "Mobile Application Development"],
    links: {
      github: "https://github.com/PizzaPatz/RentMyBook_Mobile_Application"
    }
  },
  {
    id: 3,
    title: "Retro Games - University Senior Project Project",
    description: "Group project from Senior Project course at California State University, Long Beach, using Java and several libraries to detect mouse and keyboard inputs. There are 7 games in total that can be picked from the main menu. Multi-player is available with sharing keyboard/mouse inputs, for example, in Chess game, the players have to exchange the touch pad to move the pieces.",
    images: [
      "images/Birdstufz.png"
    ],
    tags: ["Java", "Collaboration", "Object-Oriented Programming", "JDK"],
    links: {
      github: "https://github.com/PizzaPatz/Retro_Games"
    }
  },
  {
    id: 4,
    title: "Silver Asters - Godot Game Development (In Progress)",
    description: "The game development project I am creating during my leisure time. The game will be pixelated 2Ds with story driven. The inspiration comes from the game Deltarune and Pokemon.",
    images: [
      "images/Silver_Asters.jpg"
    ],
    tags: ["C++", ".NET", "Design", "2D Art"],
    links: {

    }
  },
];

// ============================================
// PROJECT RENDERING FUNCTIONS
// ============================================

function createCarouselHTML(images, projectId) {
  // If no images, show placeholder
  if (!images || images.length === 0) {
    return `
      <div class="project-carousel">
        <div class="carousel-track">
          <div class="carousel-slide">
            <div class="placeholder-image">📁</div>
          </div>
        </div>
      </div>
    `;
  }

  const slides = images.map((img, index) => `
    <div class="carousel-slide">
      <img src="${img}" alt="Project screenshot ${index + 1}" loading="lazy" />
    </div>
  `).join('');

  const indicators = images.map((_, index) => `
    <div class="carousel-indicator ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
  `).join('');

  return `
    <div class="project-carousel" data-project-id="${projectId}">
      <div class="carousel-track">
        ${slides}
      </div>
      ${images.length > 1 ? `
        <button class="carousel-btn prev" aria-label="Previous image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="carousel-btn next" aria-label="Next image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div class="carousel-indicators">
          ${indicators}
        </div>
      ` : ''}
    </div>
  `;
}

function createProjectLinksHTML(links) {
  if (!links || (!links.github && !links.demo)) return '';

  let linksHTML = '';
  
  if (links.github) {
    linksHTML += `
      <a href="${links.github}" target="_blank" rel="noopener noreferrer" class="project-link">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    `;
  }
  
  if (links.demo) {
    linksHTML += `
      <a href="${links.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
        Live Demo
      </a>
    `;
  }

  return `<div class="project-links">${linksHTML}</div>`;
}

function createProjectCardHTML(project) {
  const tagsHTML = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
  
  return `
    <article class="personal-project-card">
      ${createCarouselHTML(project.images, project.id)}
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tags">${tagsHTML}</div>
        ${createProjectLinksHTML(project.links)}
      </div>
    </article>
  `;
}

function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  if (!projectsGrid) return;

  if (personalProjects.length === 0) {
    projectsGrid.innerHTML = `
      <div class="projects-empty">
        <div class="projects-empty-icon">🚧</div>
        <h3>Coming Soon</h3>
        <p>I'm currently working on some exciting personal projects. Stay tuned for updates!</p>
      </div>
    `;
    return;
  }

  projectsGrid.innerHTML = personalProjects.map(createProjectCardHTML).join('');
  
  // Initialize carousels after rendering
  initializeCarousels();
}

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

function initializeCarousels() {
  const carousels = document.querySelectorAll('.project-carousel');
  
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    
    if (slides.length <= 1) return;
    
    let currentIndex = 0;
    
    function goToSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update indicators
      indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === currentIndex);
      });
    }
    
    if (prevBtn) {
      prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    }
    
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
    }
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Optional: Auto-play (uncomment if desired)
    // setInterval(() => goToSlide(currentIndex + 1), 5000);
  });
}

// Initialize projects on page load
document.addEventListener('DOMContentLoaded', renderProjects);
