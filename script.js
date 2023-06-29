function togglemode() {
    const html = document.documentElement;
    html.classList.toggle('light');
  
    // Pegar a tag img
    const img = document.querySelector("#profile img");
  
    // Substituir a imagem e o atributo alt
    if (html.classList.contains('light')) {
      img.setAttribute('src', './assets/avatar-light.png');
      img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando camisa preta barba e fundo amarelo');
    } else {
      img.setAttribute('src', './assets/avatar.png');
      img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando jaqueta preta óculos escuro e fundo degrade roxo e azul');
    }
  }
    
    // se tiver sem light mode, manter a imagem normal

