if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      console.log('ServiceWorker registrated: ', registration.scope);
    }, function (err) {
      console.log('failed attempt: ', err);
    });
  });
}