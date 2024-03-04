// Loop through the cards
for (let i = 1; i <= 7; i++) {
    // Get the card, popup, and close button
    let card = document.getElementById('card' + i);
    let popup = document.getElementById('popup' + i);
    let closeBtn = document.getElementById('closeBtn' + i);

    // When the card is clicked, display the popup
    card.addEventListener('click', function() {
        popup.classList.add('show');
    });

    // When the close button is clicked, hide the popup
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('show');
    });
}
