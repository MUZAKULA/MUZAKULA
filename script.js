function choose(name){
  document.getElementById('collection').value=name;
  document.getElementById('contacts').scrollIntoView({behavior:'smooth'});
}
document.getElementById('orderForm').addEventListener('submit', function(e){
  e.preventDefault();
  const c=document.getElementById('collection').value;
  const n=document.getElementById('name').value.trim();
  const p=document.getElementById('phone').value.trim();
  const msg=document.getElementById('formMessage');
  if(!c||!n||!p){msg.textContent='Будь ласка, заповніть обов’язкові поля.';return;}
  msg.textContent='Дякуємо! Заявку сформовано. Підключимо відправлення заявок на наступному етапі.';
});
