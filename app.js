window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById('root');
    const outputField = document.getElementById('output-field');
    const copyBtn = document.getElementById('copy-btn');

    document.getElementById('change-btn').addEventListener('click', () => {
        const bgColor = generateHexColor();
        
        root.style.backgroundColor = bgColor;

        outputField.value = bgColor;
    });

    copyBtn.addEventListener('click', function(){
        window.navigator.clipboard.writeText(outputField.value);
    });
}

const generateHexColor = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}