`use strict`;


const myDiv = document.createElement(`div`);
document.body.appendChild(myDiv);
myDiv.textContent = `My favorite destinations`;
myDiv.classList = `h2`;
myDiv.style.textAlign = `center`
myDiv.style.marginTop = `20px`

const container = document.createElement(`div`);
document.body.appendChild(container);
container.style.maxWidth = `740px`;
container.style.margin = `auto`;


const myLab = document.createElement(`div`);
container.appendChild(myLab);
myLab.textContent = `Toggle the list of my favorite destinations`;
myLab.classList = `alert alert-primary`;

const myUl = document.createElement(`ul`);

const liI1 = document.createElement(`li`);
const liI2 = document.createElement(`li`);
const liI3 = document.createElement(`li`);
const liI4 = document.createElement(`li`);

container.appendChild(myUl);

myUl.appendChild(liI1);
myUl.appendChild(liI2);
myUl.appendChild(liI3);
myUl.appendChild(liI4);

myUl.classList = `list-group`;
liI1.classList = `list-group-item`;
liI2.classList = `list-group-item`;
liI3.classList = `list-group-item`;
liI4.classList = `list-group-item`;

liI1.textContent = `The Hague`;
liI2.textContent = `Tokio`;
liI3.textContent = `Paris`;
liI4.textContent = `Amsterdam`;

const tasto = document.createElement(`button`);
tasto.textContent = `Hide destinations`;
tasto.classList = `btn btn-primary`;
container.appendChild(tasto);
tasto.style.marginTop = `20px`;

//! S E L E C T I O N

const selection = document.querySelectorAll(`li`);

callBack = (event) => {
   
    const selected = document.querySelector(`.active`);
    if(selected){
        selected.classList.remove(`active`);
    }
   
    event.target.classList.add(`active`);

    let message = document.querySelector(`.message`);
    if (!container.contains(message)){
        message = document.createElement(`div`);
        message.classList.add(`alert`, `alert-success`, `message`);
    };
    message.textContent = `You selected ${event.target.textContent}`;
    message.style.marginTop = `20px`
    container.appendChild(message);
    //message.style.display = `none`;

};

selection.forEach(selected => {
    selected.addEventListener(`click`, callBack);
});

//! R E M O V I N G

tasto.addEventListener(`click`, () =>{

if (myUl.style.display === `none`){
myUl.style.display = `block`;

} 
else { myUl.style.display = `none`;
tasto.textContent = `Show Destinations`;
//message.style.display = `none`;
}});

//? did not get how to: (message.style.display = `none`) because message is declared only 
//? in the block-scope of the Call Back function. ?? !!

