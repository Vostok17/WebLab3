'use strict'

let side = 5;

const changeBlocksContent = () => {

    var obj1 = document.querySelector('.text-2');
    var obj2 = document.querySelector('nav');

    // create marker element and insert it where obj1 is
    var temp = document.createElement("div");
    obj1.parentNode.insertBefore(temp, obj1);

    // move obj1 to right before obj2
    obj2.parentNode.insertBefore(obj1, obj2);

    // move obj2 to right before where obj1 used to be
    temp.parentNode.insertBefore(obj2, temp);

    // remove temporary marker node
    temp.parentNode.removeChild(temp);

}

const calcArea = () => {
    return Math.pow(side, 2) * Math.sqrt(25 + 10 * Math.sqrt(5)) / 4;     
};

const showResult = () => {

    var block = document.querySelector('.picture');
    var res = document.createElement('p');
    block.appendChild(res);

    res.innerText = 'Side length is ' + side + ', so the area is ' + calcArea().toFixed(2) + '.';
};

document.forms['getNumber'].elements.send.addEventListener('click', () => {

    let number = document.forms['getNumber'].elements.number.value;
    if (number === '') {
        alert('Reversed number is empty!');
    }
    else 
    { 
        number = number.split('').reverse().join('');
        alert('Reversed number is ' + number + '.');
        document.cookie = 'num=' + encodeURIComponent(number);
    }   
}) 


const showCookie = () => {  
    document.getElementsByTagName('form')[0].hidden = true;
    setTimeout(() => {
        alert('Now in cookies: ' + document.cookie + '. After pressing OK cookies will be cleaned.');
        document.cookie = "num=0; max-age=0";
        alert('Cookie cleaned.');
        document.getElementsByTagName('form')[0].hidden = false;
    }, 100);
    
}

document.getElementById('myColor').addEventListener('change', () => {

    var all = document.getElementsByTagName('div');
    var color = document.getElementById('myColor').value;

    for (var i = 0; i < all.length; i++) {       
        all[i].style.borderColor = color;
    }

    document.getElementsByTagName('header')[0].style.borderColor = color;
    document.getElementsByTagName('footer')[0].style.borderColor = color;
    document.getElementsByTagName('nav')[0].style.borderColor = color;

    localStorage.setItem('color', color);
})

const changeColor = () => {
    var color = localStorage.getItem('color');
    document.getElementById('myColor').value = color;

    var all = document.getElementsByTagName('div');

    for (var i = 0; i < all.length; i++) {       
        all[i].style.borderColor = color;
    }

    document.getElementsByTagName('header')[0].style.borderColor = color;
    document.getElementsByTagName('footer')[0].style.borderColor = color;
    document.getElementsByTagName('nav')[0].style.borderColor = color;
}

window.addEventListener('load', changeColor);
window.addEventListener('load', changeBlocksContent);
window.addEventListener('load', showResult);
window.addEventListener('load', () => {
    setTimeout(showCookie, 100);
});