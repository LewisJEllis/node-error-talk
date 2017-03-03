function a() {
  b();
}

function b(x) {
  try {
    c()
  } catch (e) {
    console.log(e.stack);
  }
}

function c() {
  throw new Error('boom');
}

a();