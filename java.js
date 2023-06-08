document.querySelector('.logo').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('skryte');
});

// Funkce pro zavření popupu
function closePopup() {
  var overlay = document.querySelector('.popup-overlay');
  overlay.style.display = 'none';
}

// Simulace odeslání emailu
function sendEmail(event) {
  // Zde by byl kód pro odeslání emailu

  // Po odeslání emailu zavřít popup
  closePopup();

  // Zabránit načtení stránky
  event.preventDefault();
}

// Připojit funkci sendEmail() na událost 'click' tlačítka 'Odeslat'
document.querySelector('.odeslat-button').addEventListener('click', sendEmail);

