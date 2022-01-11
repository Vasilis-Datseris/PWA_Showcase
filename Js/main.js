import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

//Service Worker registration
window.onload = () => {
    'use strict';
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
        .register('./serviceWorker.js');
    }
    
    document.getElementById('FirstTab').focus();
    document.getElementById('FirstTab').click();
}

//Install PWA event 
let closedPrompt;
let installButton = document.getElementsByClassName('DownloadButton')[0];
// installButton.innerHTML = '';
var state = true;

window.addEventListener('beforeinstallprompt', (event) => {
    closedPrompt = event;
    installButton.style.visibility = 'visible';
    console.log('Event saved!');
});

console.log(closedPrompt);

//Add Animation Download Button
let animation = lottieWeb.loadAnimation({
    container: installButton,
    path: '../Images/Download_Button.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Download Button",
});

animation.goToAndStop(160,true);

//Event Listener hook to PWA Event
installButton.addEventListener('click', async () => {
    console.log('Install Button pressed');
    if (closedPrompt !== null || closedPrompt !== undefined) 
    {
        closedPrompt.prompt();
        const { outcome } = await closedPrompt.userChoice;
        console.log(`User response to the install prompt: ${outcome}`);
        
        if (outcome === 'accepted')
        closedPrompt = null;
    }

    if(state === true) {
        state = false;
        animation.playSegments([0, 160], true);
    }
        
    state = true;
});