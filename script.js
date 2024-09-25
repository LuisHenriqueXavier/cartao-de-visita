function togglemode() {
    const html = document.documentElement;
    html.classList.toggle('light');
  
    // Pegar a tag img
    const img = document.querySelector("#profile img");
  
    // Substituir a imagem e o atributo alt
    if (html.classList.contains('light')) {
      img.setAttribute('src', './assets/avatar-light.jpg');
      img.setAttribute('alt', 'Foto de Luis Henrique Xavier sentado, de calça verde e camiseta preta, olhando para a esquerda');
    } else {
      img.setAttribute('src', './assets/avatar.jpg');
      img.setAttribute('alt', 'Foto de Luis Henrique Xavier, de camiseta preta, com uma calopsita no ombro esquerdo, olhando para ela');
    }
  }
    
    // se estiver sem light mode, manter a imagem normal

