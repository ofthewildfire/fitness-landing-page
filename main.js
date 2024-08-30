document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion-button');
  
  accordions.forEach(button => {
      button.addEventListener('click', function () {
          // Close any open accordion content
          document.querySelectorAll('.accordion-content').forEach(content => {
              if (content !== this.nextElementSibling) {
                  content.style.display = 'none';
              }
          });

          // Toggle the clicked accordion content
          const content = this.nextElementSibling;
          if (content.style.display === 'block') {
              content.style.display = 'none';
          } else {
              content.style.display = 'block';
          }
      });
  });
});