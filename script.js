function irParaAbout() {
  const destino = document.getElementById("about");
  
  destino.scrollIntoView({
    behavior: "smooth"
  });
}

function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    
    const telefone = "5585992227042"; 
    
    const texto = `Olá! Meu nome é ${nome}. ${mensagem}`;
    
    const link = `https://wa.me/${telefone}?text=${encodeURIComponent(texto)}`;
    
    window.open(link, '_blank');
}