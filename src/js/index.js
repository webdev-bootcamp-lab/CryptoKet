// Load Component Function
async function loadComponent(componentName, targetId) {
  try {
    const response = await fetch(`./src/components/${componentName}.html`);
    const html = await response.text();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${componentName} component:`, error);
  }
}

// Load all components on page load
document.addEventListener("DOMContentLoaded", async () => {
  // Load the Hot Bids component
  await loadComponent("hotbids", "hotbids-component");
  
  // Initialize all event listeners after components are loaded
  initializeEventListeners();
});

// Initialize all event listeners
function initializeEventListeners() {
  // Add smooth scroll behavior
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))?.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Initialize carousel navigation
  initializeCarousel();
  
  // Initialize load more functionality
  initializeLoadMore();
  
  // Initial attachment of like listeners
  attachLikeListeners();
}

// Top Sellers Carousel Navigation
function initializeCarousel() {
  const sellersContainer = document.getElementById("sellers-container");
  const prevBtn = document.getElementById("sellers-prev");
  const nextBtn = document.getElementById("sellers-next");

  if (sellersContainer && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      sellersContainer.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });

    nextBtn.addEventListener("click", () => {
      sellersContainer.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    });
  }
}

// Load More / See Less Functionality
function initializeLoadMore() {
  const loadMoreBtn = document.getElementById('load-more-btn');
  const nftGrid = document.getElementById('nft-grid');
  let isExpanded = false;
  let clonedCards = [];

  if (loadMoreBtn && nftGrid) {
    loadMoreBtn.addEventListener("click", function () {
      if (!isExpanded) {
        // Load More - Duplicate the cards
        const allCards = Array.from(nftGrid.children);
        
        // Clone each card and store references
        allCards.forEach(card => {
          const clonedCard = card.cloneNode(true);
          clonedCards.push(clonedCard);
          nftGrid.appendChild(clonedCard);
        });
        
        // Re-attach like button event listeners to cloned cards
        attachLikeListeners();
        
        // Change button text
        this.textContent = "See Less";
        isExpanded = true;
      } else {
        // See Less - Remove cloned cards
        clonedCards.forEach(card => {
          card.remove();
        });
        clonedCards = [];
        
        // Change button text back
        this.textContent = "Load More";
        isExpanded = false;
        
        // Scroll to Hot Bids section
        const hotBidsSection = document.querySelector('section.mb-12:nth-of-type(2)');
        if (hotBidsSection) {
          hotBidsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  }
}


// Heart Icon Like Functionality
function attachLikeListeners() {
  document.querySelectorAll(".like-btn").forEach((likeBtn) => {
    // Remove existing listeners by cloning
    const newLikeBtn = likeBtn.cloneNode(true);
    likeBtn.parentNode.replaceChild(newLikeBtn, likeBtn);
    
    newLikeBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent card click

      const isLiked = this.classList.contains("liked");
      const likeCountSpan = this.nextElementSibling;
      const currentCount = parseInt(likeCountSpan.textContent);

      if (isLiked) {
        // Unlike
        this.classList.remove("liked");
        this.style.color = "";
        likeCountSpan.textContent = currentCount - 1;
      } else {
        // Like with animation
        this.classList.add("liked");
        this.style.color = "#FF4191";
        likeCountSpan.textContent = currentCount + 1;

        // Add pulse animation
        this.style.transform = "scale(1.3)";
        setTimeout(() => {
          this.style.transform = "";
        }, 200);
      }
    });
  });
}
