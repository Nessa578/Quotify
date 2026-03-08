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

const quoteElement = document.querySelector('.quote-text');
const buttonElement = document.querySelector('.new-quote-btn');

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerText = quotes[randomIndex];
}

function changeQuote() {
    quoteElement.style.opacity = 0;

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[randomIndex];

        quoteElement.style.opacity = 1;
    }, 300); 
}
 
buttonElement.addEventListener('click', changeQuote);

changeQuote();
