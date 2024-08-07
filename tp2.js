const button = document.getElementById('button');

const color = [
    {
        colorBox:'red',
        colorText:'IndianRed'
    },
    {
        colorBox:'blue',
        colorText:'DarkSalmon'
    },
    {
        colorBox:'green',
        colorText:'DeepPink'
    },
    {
        colorBox:'yellow',
        colorText:'Lime'
    }

]


const text = document.getElementsByClassName('txt')

const Boxes = document.getElementsByClassName('box');

function changeColor(){
    // Générez un index aléatoire pour choisir une couleur dans le tableau
    const randomIndex = Math.floor(Math.random() * color.length);

    // Itérez sur la collection d'éléments et changez la couleur de fond
    for (let i = 0; i < color.length; i++) {
        Boxes[i].style.backgroundColor = color[randomIndex].colorBox;
        text[i].style.color = color[randomIndex].colorText;

    }
}

setInterval(changeColor, 2000);;
