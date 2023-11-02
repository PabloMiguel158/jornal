function redirectToUrl(linkId) {
    var link = document.getElementById(linkId);
    if (link) {
      // Obter a URL correspondente ao link
      var url = link.getAttribute('href');
  
      // Abrir uma nova guia com a URL do link
      window.open(url, '_blank');
    }
  }
  function redirectToPage(pageUrl) {
    window.location.href = pageUrl;
  }
    