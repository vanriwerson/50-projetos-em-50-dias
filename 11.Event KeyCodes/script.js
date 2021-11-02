const insert = document.getElementById("insert");

window.addEventListener("keydown", (eventKey) => {
  insert.innerHTML = `
    <div class="key">
    ${eventKey.key === ' ' ? 'Space' : eventKey.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${eventKey.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${eventKey.code}
    <small>event.code</small>
  </div>`;
});
