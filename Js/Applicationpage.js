import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

//Create Animation for Div
let animDiv = document.getElementsByClassName('Animation')[0];
let animation = lottieWeb.loadAnimation({
    container: animDiv,
    path: '../Images/LoadStats.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Stats Loading..",
});

// animation.goToAndStop(160,true);
