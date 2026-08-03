// shared behaviour across pages
(function(){
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
  var hdr=document.getElementById('hdr');
  // interior pages get a solid header from the start
  if(hdr && hdr.dataset.solid==='true') hdr.classList.add('solid');
  else addEventListener('scroll',function(){hdr && hdr.classList.toggle('scrolled',scrollY>40)});
  // mobile menu
  var mp=document.getElementById('mobilePanel');
  var mb=document.getElementById('menuBtn'), mc=document.getElementById('menuClose');
  if(mb) mb.onclick=function(){mp.classList.add('open')};
  if(mc) mc.onclick=function(){mp.classList.remove('open')};
  if(mp) mp.querySelectorAll('a').forEach(function(a){a.onclick=function(){mp.classList.remove('open')}});
  // reveal on scroll
  window.__io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');window.__io.unobserve(e.target)}})},{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){window.__io.observe(el)});
  // contact form -> mailto
  var cf=document.getElementById('contactForm');
  if(cf) cf.onsubmit=function(e){
    e.preventDefault();var f=e.target;
    var body=encodeURIComponent('Name: '+f.first.value+' '+f.last.value+'\nEmail: '+f.email.value+'\n\n'+f.message.value);
    location.href='mailto:mdcsmif@gmail.com?subject=SMIF inquiry from '+f.first.value+'&body='+body;
  };
})();
