// Google Analytics
(function() {
  var gtagScript = document.createElement('script');
  gtagScript.async = true;
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-T35ZSZY9H0';
  document.head.appendChild(gtagScript);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag; // expose globally

  gtag('js', new Date());
  gtag('config', 'G-T35ZSZY9H0');
})();
