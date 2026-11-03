// Open response controls: typing is not an automatically correct answer.
(function () {
 document.addEventListener('input', function (event) {
  if (!event.target.matches('.options input:not([readonly]), .options textarea:not([readonly])')) return;
  var reset = document.querySelector('.resetBtn');
  if (reset) reset.classList.remove('disabled');
 });
 document.addEventListener('click', function (event) {
  var reset = event.target.closest('.resetBtn');
  if (!reset || reset.classList.contains('disabled')) return;
  // Some legacy fill-in engines clear input elements but overlook textareas.
  document.querySelectorAll('.options input:not([readonly]):not([disabled]):not([type=file]):not([type=hidden]):not([type=color]):not([type=range]), .options textarea:not([readonly]):not([disabled])').forEach(function (field) {
   field.value = ''; field.style.color = ''; 
  });
 }, true);
})();

