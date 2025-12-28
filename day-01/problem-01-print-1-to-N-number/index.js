let input = document.querySelector('input');
let button = document.querySelector('button');
let para = document.getElementById('msg');

button.addEventListener('click', function () {
    let haveVal = Number(input.value);
    let output = "";
    for(let i=1; i<=haveVal; i++){
        output += i + "\n";
    }
    para.textContent = output
});
