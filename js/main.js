function generateColor() {
    let str = 'abcdef0123456789';
    let color = '#';
    for (let i = 0; i <= 5; i++) {
        color += str[Math.floor(Math.random() * str.length)];
    }
    return color;
}

function random(max = 360) {
    return Math.floor(Math.random() * max);
}
let writeTex
bodyRaw()

function bodyRaw() {
    const body = document.querySelector('body');
    const styleText = `linear-gradient(${random()}deg, ${generateColor()} ${random(70)}%, ${generateColor()} 100%)`
    body.style.background = styleText
    writeTex = `background: ${styleText};`;
    document.querySelector('#codeText').innerHTML = writeTex
}

const copyElement = document.querySelector('.code')

copyElement.addEventListener('click', (e) => {
    copy()
})

function copy() {
    const input = document.querySelector('input[name="code"]')
    input.value = writeTex
    input.select();
    document.execCommand('copy');
    input.blur()
    notification('Code copied to your clipboard 👍')
}

window.addEventListener('keypress', (e) => {
    if (e.keyCode === 32) {
        bodyRaw();
    } else if (e.keyCode === 99 ){
        copy()
    }
    e.preventDefault();
});

function notification(msg){

    let old_div = document.querySelector('.alert');
    if (old_div){
        old_div.parentNode.removeChild(old_div);
    }

    let div = document.createElement('div');
    div.className = 'alert';
    div.innerHTML = msg;
    document.body.appendChild(div);

    setTimeout(() => div.classList.add('active'), 1);
    setTimeout(() => div.classList.remove('active'), 1000);

}