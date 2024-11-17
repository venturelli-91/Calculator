let screen = document.getElementById('result');
let button = document.getElementsByClassName('all-buttons');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
        buttonText = e.target.value
        if(buttonText ==='C') {
            screen.value = '';
        } else if(buttonText === 'X'){
            screen.value += '*'
        } else if (buttonText === '+') {
            screen.value += '+'
        } else if (buttonText === '-'){
            screen.value += '-'
        } else if (buttonText === '/'){
            screen.value += '/'
        } else if (buttonText === '='){
            let finalResult = eval(screen.value);
            screen.value = finalResult;
        }
        else {
            screen.value += buttonText;
        }
    })
}