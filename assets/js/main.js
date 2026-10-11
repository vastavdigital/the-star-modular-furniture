/* The Star Modular Furniture — small, dependency-free JS */
(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
  if(btn&&nav){btn.addEventListener('click',function(){
    var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);btn.textContent=o?'Close':'Menu';});}

  // Load background videos only when motion and data allow; poster image is the fallback.
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var save=navigator.connection&&navigator.connection.saveData;
  if(!reduce&&!save){
    document.querySelectorAll('video[data-src]').forEach(function(v){
      var s=document.createElement('source');s.src=v.getAttribute('data-src');s.type='video/mp4';
      v.appendChild(s);
      v.addEventListener('error',function(){v.style.display='none'},true);
      s.addEventListener('error',function(){v.style.display='none'});
      v.load();var p=v.play();if(p&&p.catch)p.catch(function(){});
    });
  }

  // Enquiry form -> WhatsApp (no backend needed)
  var f=document.getElementById('enquiry');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f);
    var t='Hello The Star Modular, I would like a quote.%0A'+
      'Name: '+encodeURIComponent(d.get('name'))+'%0A'+
      'Phone: '+encodeURIComponent(d.get('phone'))+'%0A'+
      'Requirement: '+encodeURIComponent(d.get('type'))+'%0A'+
      'Details: '+encodeURIComponent(d.get('msg')||'-');
    window.open('https://wa.me/919016488859?text='+t,'_blank','noopener');
  });}
})();
