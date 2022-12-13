let buttons = Array.from(document.querySelectorAll('.button'));
let display = document.getElementById('display');

buttons.map( button => button.addEventListener('click', (e) => {
    
    switch (e.target.innerText){
        case 'C':
            display.innerText = '';
            break;
        case '←':
            display.innerText = display.innerText.slice(0,-1);
            break;
        case '.':
            if (display.innerText.substring(display.innerText.length - 1) == '.'){
            } else {
                display.innerText += e.target.innerText;
            }
            break;
        case '=':
            display.innerText = eval(display.innerText);
            break;
        default :
            display.innerText += e.target.innerText;
            break;
    }
}))