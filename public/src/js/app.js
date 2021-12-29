
var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => console.log('Service worker registered!'))
      .catch(e => console.log(e));
}

window.addEventListener('beforeinstallprompt', event => {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});