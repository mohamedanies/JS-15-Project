const colors = ["green", "red", "blue", "black", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
// const color = document.getElementsByClassName('.color');
const color = document.querySelector('.color');


btn.addEventListener('click', function() {
    // console.log(document.body);
    // from 0 - 3
    const randomNumber = getRndomNumber();
    //console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRndomNumber() {
    // we need the random to be from 0 - 3 
    return Math.floor(Math.random() * colors.length);

}