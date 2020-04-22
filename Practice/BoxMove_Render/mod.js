var box = document.createElement("div"); 
box.style.width="100px";
box.style.height="100px";
box.style.background="green";
document.body.appendChild(box);

var MoveBy = 10; 

window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.top = 0; 
    box.style.left = 0; 
})

window.addEventListener('keydown', (event) => { 
    switch(event.key){
        case 'ArrowLeft' :
        box.style.left = parseInt(box.style.left) - MoveBy + 'px'; 
        break;
    }
    switch(event.key){
        case 'ArrowRight' :
        box.style.left = parseInt(box.style.left) + MoveBy + 'px';
        break;
    }
    switch(event.key){
        case 'ArrowUp' :
        box.style.top = parseInt(box.style.top) - MoveBy + 'px'; 
        break;
    }
    switch(event.key){
        case 'ArrowDown' :
        box.style.top = parseInt(box.style.top) + MoveBy + 'px'; 
        break;
    }
})
