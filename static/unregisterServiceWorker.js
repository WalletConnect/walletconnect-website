navigator.serviceWorker.getRegistrations().then(function(registrations) {
  const reload = !!registrations.length;
  for (let registration of registrations) {
    registration.unregister();
  }
  if (reload) {
    window.location.reload();
  }
});
