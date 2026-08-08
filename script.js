const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('open'));
});

const packageSelect=document.getElementById('package');
document.querySelectorAll('.card-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const text=btn.closest('.card').querySelector('.card-label')?.textContent.trim();
    if(text) packageSelect.value=[...packageSelect.options].find(o=>o.text.startsWith(text))?.text || packageSelect.value;
  });
});

document.getElementById('orderForm')?.addEventListener('submit',e=>{
  e.preventDefault();
  const status=document.getElementById('formStatus');
  status.textContent='Дякуємо! Заявка сформована. Підключимо Telegram/форму відправки на наступному кроці.';
});

document.getElementById('year').textContent=new Date().getFullYear();
