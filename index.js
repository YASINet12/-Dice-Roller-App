function rollDice(){
    const numofdice = document.getElementById("numofdice").value;
    const dice_result = document.getElementById("dice_result");
    const dice_images = document.getElementById("dice_images");
    const values = [];
    const images = [];


    for(let i = 0 ; i < numofdice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="${value}.png ">`);
    }
    dice_result.textContent = `dice: ${values.join(', ')}`;
    dice_images.innerHTML = images.join('');
}   
