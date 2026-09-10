// Code copy functionality for Code Club Missions
(function() {
  'use strict';
  
  window.copyAllCodeBlocks = function(button) {
    console.log('[CopyCode] Button clicked');
    
    try {
      // Find all code blocks
      const codes = document.querySelectorAll('.highlight code');
      console.log('[CopyCode] Found', codes.length, 'code blocks');
      
      if (codes.length === 0) {
        alert('No code blocks found on this page.');
        return;
      }
      
      // Combine code
      const allCode = Array.from(codes)
        .map(code => code.textContent.trim())
        .filter(text => text.length > 0)
        .join('\n\n');
      
      console.log('[CopyCode] Ready to copy', allCode.length, 'characters');
      
      // Copy to clipboard
      if (!navigator.clipboard) {
        alert('Clipboard API not available.');
        return;
      }
      
      navigator.clipboard.writeText(allCode)
        .then(() => {
          console.log('[CopyCode] Success!');
          const original = button.textContent;
          button.textContent = '✅ Copied!';
          button.classList.add('copy-success');
          setTimeout(() => {
            button.textContent = original;
            button.classList.remove('copy-success');
          }, 2000);
        })
        .catch(err => {
          console.error('[CopyCode] Failed:', err);
          alert('Failed to copy: ' + err.message);
        });
    } catch (error) {
      console.error('[CopyCode] Error:', error);
      alert('Error: ' + error.message);
    }
  };
  
  // Attach listeners to buttons
  function attachListeners() {
    document.querySelectorAll('.copy-btn:not([data-copy-ready])').forEach(btn => {
      btn.setAttribute('data-copy-ready', '1');
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.copyAllCodeBlocks(this);
      });
    });
  }
  
  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachListeners);
  } else {
    attachListeners();
  }
  
  // Watch for dynamic button additions
  new MutationObserver(attachListeners).observe(document.body, {
    childList: true,
    subtree: true
  });
})();
