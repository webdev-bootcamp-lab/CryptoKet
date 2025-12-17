// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Top Sellers Carousel Navigation
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

// Load More / See Less Functionality
const loadMoreBtn = document.querySelector('.bg-transparent.border-2.border-\\[\\#FF4191\\]');
const nftGrid = document.querySelector('.grid.grid-cols-1');
let isExpanded = false;
let clonedCards = [];

if (loadMoreBtn && nftGrid) {
  loadMoreBtn.addEventListener("click", function () {
    if (!isExpanded) {
      // Load More - Duplicate the cards
      const allCards = Array.from(nftGrid.children).filter(card => !card.classList.contains('load-more-btn'));
      
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
      document.querySelector('section.mb-12:nth-of-type(2) h2').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
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

// Initial attachment of like listeners
attachLikeListeners();
