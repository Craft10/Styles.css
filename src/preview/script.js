class UI {
  static highlightCodeBlock() {
    const codeBlock = document.querySelector('.code-block');
    const keywords = ['const', 'let', 'var', 'function', 'return'];

    codeBlock.innerHTML = codeBlock.innerHTML
      .replace(/"(.*?)"/g, '<span class="string">"$1"</span>') // Resalta strings
      .split('\n')
      .map((line, i) => {
        const lineNumber = i + 1;
        const highlightedLine = keywords.reduce((line, keyword) => {
          const re = new RegExp(`\\b${keyword}\\b`, 'g');
          return line.replace(re, `<span class="keyword">${keyword}</span>`);
        }, line);
        return `<span class="line-count">${lineNumber}</span>${highlightedLine}`;
      })
      .join('\n');
  }

  static setupAccordion() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    function toggleAccordion() {
      this.classList.toggle("active");

      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }

    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      header.addEventListener("click", toggleAccordion);
    });
  }

  static setupList() {
    // Añadir una clase "active" al elemento de la lista que se hace clic
    var listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(item) {
      item.addEventListener("click", function() {
        listItems.forEach(function(item) {
          item.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  }

  static toggleNav() {
    const toggle = document.querySelector(".nav-toggle");
    const items = document.querySelector(".nav-items");

    toggle.addEventListener("click", function() {
      items.classList.toggle("show-nav");
    });
  }
												 }

	
document.addEventListener("DOMContentLoaded", function() {
  UI.highlightCodeBlock();
  UI.setupAccordion();
  UI.setupList();
  UI.toggleNav();
			
});


// Ejemplo de uso