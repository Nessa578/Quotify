// Quotes array
const quotes = [
    "And like the moon, we must go through phases of emptiness to feel full again.",
    "Stars can't shine without darkness.",
    "Let your soul catch up with your body.",
    "Collect beautiful moments.",
    "She was a wildflower in a sea of roses.",
    "Bloom where you are planted.",
    "Find joy in the ordinary.",
    "Create your own sunshine.",
    "Embrace the glorious mess that you are.",
    "Live a life that feels good on the inside, not one that just looks good on the outside."
];

// 2. Get your HTML elements
const quoteElement = document.querySelector('.quote-text');
const buttonElement = document.querySelector('.new-quote-btn');

// 3. Create the function that changes the quote
function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

// 3. Function to change quote with fade effect
function changeQuote() {
    // Fade out
    quoteElement.style.opacity = 0;

    // Wait for fade-out duration, then change quote
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[randomIndex];

        // Fade in
        quoteElement.style.opacity = 1;
    }, 300); // 300ms matches fade timing
}

// 4. Add click event 
buttonElement.addEventListener('click', changeQuote);

// 5. Show a quote immediately when page loads
changeQuote();
