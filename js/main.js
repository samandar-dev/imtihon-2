let elSearchBtn = document.getElementById('modal-btn');
let elModal = document.getElementById('show');
let elClose = document.getElementById('closeBtn');

elSearchBtn.addEventListener('click', function () {
  elModal.classList.add('show');
})
elClose.addEventListener('click', function () {
  elModal.classList.remove('show');
})