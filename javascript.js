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



*/
const body = document.querySelector('body');
const container = document.querySelector('#container');
body.appendChild(container);

for(let i = 0; i < 256; i++) {
    const divs = document.createElement('div');
    divs.className = 'divs'
    
    container.appendChild(divs);
    
}





