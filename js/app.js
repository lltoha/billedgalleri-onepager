// Find knappen "Til toppen" i dokumentet
const backToTopBtn = document.querySelector('.go-to-top');

// NÃ¥r brugeren scroller pÃ¥ siden ...
window.addEventListener('scroll', () => {
  // ... hvis vi er scrollet mere end 200px ned:
  if (window.scrollY > 200) {
    // vis knappen (tilfÃ¸j CSS-klassen "show")
    backToTopBtn.classList.add('show');
  } else {
    // ellers fjern klassen igen (knappen bliver skjult)
    backToTopBtn.classList.remove('show');
  }
});

// NÃ¥r der klikkes pÃ¥ "Til toppen"-knappen ...
backToTopBtn.addEventListener('click', () => {
  // ... scroll hele vinduet tilbage til toppen
  // "behavior: smooth" betyder at scrollingen sker blÃ¸dt
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ------------------------------------------------------
// Funktion til at Ã¥bne et billede i en lightbox (popup)
// ------------------------------------------------------
function openImage(src, altText = '') {
  // Opret et <dialog>-element (indbygget HTML-tag til popups)
  const modal = document.createElement('dialog');

  // Giv det en CSS-klasse sÃ¥ vi kan style det
  modal.className = 'lightbox';

  // IndsÃ¦t HTML-indholdet i dialogen:
  // - billedet vi vil vise
  // - en formular med en "Luk"-knap
  modal.innerHTML = `
    <img src="${src}" alt="${altText}">
    <form method="dialog"><button type="submit">Luk</button></form>
  `;

  // TilfÃ¸j dialogen til <body>, sÃ¥ den findes i dokumentet
  document.body.appendChild(modal);

  // NÃ¥r dialogen lukkes (fx med knappen), fjern den helt fra DOM
  modal.addEventListener('close', () => modal.remove());

  // Ã…bn selve dialogen (vises som popup oven pÃ¥ siden)
  modal.showModal();
}


// ------------------------------------------------------
// GÃ¸r alle billeder klik- og tastbare, sÃ¥ de kan Ã¥bnes
// i lightbox-funktionen
// ------------------------------------------------------
document.querySelectorAll('.image img').forEach((img) => {
  // GÃ¸r billedet "fokuserbart" med TAB-tasten
  img.setAttribute('tabindex','0');

  // NÃ¥r brugeren klikker pÃ¥ billedet â†’ Ã¥bn det i lightbox
  img.addEventListener('click', () => openImage(img.src, img.alt));

  // NÃ¥r billedet har fokus, kan man trykke ENTER eller SPACE
  // for at Ã¥bne det i lightbox
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // undgÃ¥ at siden scroller ved SPACE
      openImage(img.src, img.alt);
    }
  });
});

//------------------------------------------------------------
//her er hele koden samlet uden kommentarer
//------------------------------------------------------------
/*
const backToTopBtn = document.querySelector('.go-to-top');

window.addEventListener('scroll', () => {
  
  if (window.scrollY > 200) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function openImage(src, altText = '') {
  const modal = document.createElement('dialog');
  modal.className = 'lightbox';
  modal.innerHTML = `
    <img src="${src}" alt="${altText}">
    <form method="dialog"><button type="submit">Luk</button></form>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('close', () => modal.remove());
  modal.showModal();
}

document.querySelectorAll('.image img').forEach((img) => {
  img.setAttribute('tabindex','0');
  img.addEventListener('click', () => openImage(img.src, img.alt));
  img.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openImage(img.src, img.alt);
    }
  });
});
*/