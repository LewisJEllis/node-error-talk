try {
  setTimeout(function () {
    throw new Error('boom!');
  }, 0);
} catch (e) {
  console.log('Aha! I caught the error!');
}