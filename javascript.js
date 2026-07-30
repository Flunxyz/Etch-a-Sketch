/*
The grids

Create a loop that creates divs inside of the div on the html. 
At first just set the divs amount to 16 * 16. (which will be the times to loop)
Later, create an input that allows the person to type a number of grids they 
will want. You will then mulitply that number by itself to get the right amount of divs.
Set the div width on the html to 960px and change the display of it into flex on the css.
The divs that have been created inside of the html div should all be equally sized squares
and fill the html div.

The event
When the mouse is on one of the divs, change the div background color.

Create a button that can be clicked.
When it is clicket, then the grids will dissappear and the person will be asked for a propmt
to select the amount of rows they want to have for the grids.

*/

const body = document.querySelector('body');
const span = document.createElement('span');
const container = document.querySelector('#container');
const button = document.createElement('button');
button.textContent = 'Change grid amount';

span.appendChild(button);
body.appendChild(span);
body.appendChild(container);
button.addEventListener ('click', changeRowAmount);
let containerWidth = 960;
container.style.width = `${containerWidth}px`;

let rows = 16; 
game();

container.addEventListener('mouseover', color);

function color(event) {
    if (event.currentTarget === 'div') {
        console.log('da')
    }
    event.target.style.backgroundColor = backgroundChange();
    event.currentTarget.style.backgroundColor = 'rgb(27, 27, 27)';
}

function random(number) {
   return Math.floor(Math.random() * number)
}
function backgroundChange (){
    const col = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return col;
}
function changeRowAmount (){
    rows = prompt('How many rows?', '');
    rows = Number(rows);
    if (rows > Math.floor(rows)) {
        alert('No decimal points')
        rows = 16;
    }
    else if(rows > 100) {
        rows = 16;
        alert('That is too many rows, pc might explode');
    } else if (rows > 0) {
    } else {
        alert('Something went wrong');
        rows = 16;  
    } game(); 
}     
function game (){
   let amount = containerWidth / rows;
    container.replaceChildren();
    for(let i = 0; i < rows * rows; i++) {
        let grid = document.createElement('div');
        grid.style.width = `${amount}px`;
        grid.style.height = `${amount}px`;
        container.appendChild(grid);
    }
}