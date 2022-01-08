//Service Worker registration
window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./serviceWorker.js');
    }

}

//Install PWA event 
let closedPrompt;
const installButton = document.getElementById('InstallPWAButton');

window.addEventListener('beforeinstallprompt', (event) => {
    closedPrompt = event;
    installButton.style.visibility = true;
    console.log('Event saved!');
});

console.log(closedPrompt);

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
});