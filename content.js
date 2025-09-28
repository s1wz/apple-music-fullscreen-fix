// Apple Music Fullscreen Lyrics extension active
console.log("Apple Music Fullscreen Lyrics extension active");

/**
 * MutationObserver watches for changes in the DOM tree
 * It detects when the lyrics modal (#modal-content-wrapper) is added to the page
 * and applies fallback styles to ensure fullscreen display
 */
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Check if any added nodes contain the modal wrapper
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        // Check if the added node is the modal wrapper itself
        if (node.id === 'modal-content-wrapper') {
          applyFullscreenStyles(node);
        }
        // Check if the modal wrapper is added as a child of this node
        const modalWrapper = node.querySelector('#modal-content-wrapper');
        if (modalWrapper) {
          applyFullscreenStyles(modalWrapper);
        }
      }
    });
  });
});

/**
 * Applies inline styles to force the modal to fullscreen
 * This serves as a fallback in case Apple changes their CSS class names
 */
function applyFullscreenStyles(modalElement) {
  if (modalElement) {
    // Force modal to fill entire viewport
    modalElement.style.width = '100vw';
    modalElement.style.height = '100vh';
    modalElement.style.maxWidth = 'none';
    modalElement.style.maxHeight = 'none';
    modalElement.style.borderRadius = '0';
    
    // Find and style the modal container
    const modal = modalElement.querySelector('.modal');
    if (modal) {
      modal.style.inset = '0';
    }
    
    // Find and style the lyrics container
    const lyricsContainer = modalElement.querySelector('.lyrics__container');
    if (lyricsContainer) {
      lyricsContainer.style.height = '100%';
    }
    
    console.log("Lyrics fullscreen fix applied");
  }
}

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true
});

