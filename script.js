document.querySelectorAll('[data-package]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const value=btn.dataset.package;
    const select=document.getElementById('package');
    if(value==='SILVER') select.selectedIndex=0;
    if(value==='GOLD') select.selectedIndex=1;
    if(value==='PLATINUM') select.selectedIndex=2;
  });
});

document.querySelector('.burger')?.addEventListener('click',()=>{
  const menu=document.querySelector('.menu');
  const open=menu.classList.toggle('mobile-open');
  if(open){
    menu.style.display='flex';
    menu.style.position='absolute';
    menu.style.top='68px';
    menu.style.left='0';
    menu.style.right='0';
    menu.style.flexDirection='column';
    menu.style.padding='20px';
    menu.style.background='rgba(3,6,13,.98)';
    menu.style.borderBottom='1px solid rgba(130,155,200,.15)';
    menu.querySelectorAll('a').forEach(a=>a.style.padding='10px');
  }else{
    menu.removeAttribute('style');
  }
});

document.getElementById('orderForm').addEventListener('submit',e=>{
  e.preventDefault();
  const form=e.currentTarget;
  const data=new FormData(form);
  const text=`MUZAKULA — нова заявка\nЗбірка: ${data.get('package')}\nІм'я: ${data.get('name')}\nКонтакт: ${data.get('contact')}\nКоментар: ${data.get('comment')||'—'}`;
  navigator.clipboard?.writeText(text);
  document.getElementById('success').classList.add('show');
  form.querySelector('button').textContent='Заявку сформовано ✓';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting) entry.target.style.opacity='1';});
},{threshold:.08});
document.querySelectorAll('.card,.step,.review').forEach(el=>{
  el.style.opacity='0'; el.style.transition='opacity .6s ease, transform .25s ease';
  observer.observe(el);
});
