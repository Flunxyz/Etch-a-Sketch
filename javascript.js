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
const container = document.querySelector('#container');
const button = document.createElement('button');
button.textContent = 'Change grid amount';

body.appendChild(button);
body.appendChild(container);

button.addEventListener ('click', changeGrid) 
let grids = 16; 
    game();
 function changeGrid (){
    grids = prompt('How many rows?', '');
    grids = Number(grids);
   
    if (grids > 100) {
        grids = 16;
        alert('That is too many rows, pc might explode');
    } else if (grids <= 100 && grids < 0) {
    } else if (grids === '' || grids === 0 ){
        alert('Something went wrong');
        grids = 16;  
    } game(); 
}     
function game (){
container.replaceChildren('')
    for(let i = 0; i < grids * grids; i++) {
        amount = 960 / grids;
        let divs = document.createElement('div');
        divs.className = 'divs'
        divs.style.width = `${amount}px`;
        divs.style.height = `${amount}px`;
        divs.addEventListener('mouseover', (() => divs.style.backgroundColor = 'white'));
        container.appendChild(divs); 
    }
}

