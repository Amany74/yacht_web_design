function changeBg(){
    const images = [
        "url('./images/welcome.png')",
        "url('./images/text2.png')",
        "url('./images/text3.png')",
    ] ;

    const section = document.querySelector('section');
    const bg = images[Math.floor(Math.random()*images.length)];
    section.style.backgroundImage = bg;
};

setInterval(changeBg,1800);