// qaundo clicar na seta pra avancar temos que esconder todas as imagens e mostrar a proxima imagem 

      //  a imagem atual comeca do 0 por que é a primeira imagem, assim que for clicado no avancar eu preciso add +1 no contadort de imagens para poder saber que agora eu vou mostrar a segunda imagem 


      // esconder todas as imagens  
         //  pegar todas as imagens usadas o Dom e remover o mostrar 

      //  mostrar a proxima imagem 
        // pegar todas as imagens, descobrir qual e a proxima, e colocar a classe mostrar nela 


const imagensPainel = document.querySelectorAll('imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0

function esconderImagens() {
   imagensPainel.forEach(imagem => {
      imagem.classList.remove('mostrar')
   });
}

function mostrarImagem() {
   imagensPainel[imagemAtual].classList.add('mostrar');
}



setaAvancar.addEventListener('click', function() {


   const totalDeImagens = imagensPainel.length - 1;
   if(imagemAtual === totalDeImagens){
      return;
   }

   imagemAtual++;

  esconderImagens();
  mostrarImagem();
 
});

setaVoltar.addEventListener('click', function() {

   if(imagemAtual === 0){
      return;
   }

   imagemAtual--;

   esconderImagens();
   mostrarImagem();
});

