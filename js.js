const quotes = [
    {
    name: 'Nelson Mandela',
    quote:'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    },
    {
        name: 'Walt Disney',
        quote:'The way to get started is to quit talking and begin doing.',
    },
    {
        name: 'Steve Jobs',
        quote:'Your time is limited, so dont waste it living someone elses life. Don',
    },
    {
        name: 'Eleanor Roosevelt',
        quote:'If life were predictable it would cease to be life, and be without flavor.',
    },
    {
        name: 'John Lennon',
        quote:'Life is what happens when youre busy making other plans',
    },
]

const quoteBtn = document.querySelector('#quoteBtn');
const queteAuthor = document.querySelector('#queryAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}