
var posicao = 1;
const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W"];

window.onload =  function (){
    
    setInterval(() => {
        let letra = document.querySelector("span");         
        letra.innerHTML = alfabeto[posicao];
        exibeImagem(letra.innerHTML);
        posicao++; 
        if(posicao==23){
            posicao=0;
        }
    }, 1000);
       
}   

function exibeImagem(letra){

    switch (letra) {
        case "A":
            document.getElementById("imagem").src="img/aviao.png";
            break;
        case "B":
            document.getElementById("imagem").src="img/bola.png";
            break;            
        case "C":
            document.getElementById("imagem").src="img/casa.png";
            break;     
        case "D":
            document.getElementById("imagem").src="img/dado.png";
            break;   
        case "E":
            document.getElementById("imagem").src="img/Elefante.png";
            break;                                                
        case "F":
            document.getElementById("imagem").src="img/folha.png";
            break; 
        case "G":
            document.getElementById("imagem").src="img/gato.png";
            break;   
        case "H":
            document.getElementById("imagem").src="img/helicoptero.png";
            break;
        case "I":
            document.getElementById("imagem").src="img/igreja.png";
            break; 
        case "J":
            document.getElementById("imagem").src="img/jacare.png";
            break;  
        case "K":
            document.getElementById("imagem").src="img/kiwi.png";
            break;   
        case "L":
            document.getElementById("imagem").src="img/lapis.png";
            break;    
        case "M":
            document.getElementById("imagem").src="img/macaco.png";
            break;    
        case "N":
            document.getElementById("imagem").src="img/navio.png";
            break;                                                                                                              
        case "O":
            document.getElementById("imagem").src="img/ovelha.png";
            break;      
        case "P":
            document.getElementById("imagem").src="img/pato.png";
            break;   
        case "Q":
            document.getElementById("imagem").src="img/queijo.png";
            break;                                
        case "R":
            document.getElementById("imagem").src="img/rato.png";
            break;    
        case "S":
            document.getElementById("imagem").src="img/sapo.png";
            break;    
        case "T":
            document.getElementById("imagem").src="img/tatu.png";
            break;                                     
        case "U":
            document.getElementById("imagem").src="img/urso.png";
            break;   
        case "V":
            document.getElementById("imagem").src="img/vaca.png";
            break; 
        case "W":
            document.getElementById("imagem").src="img/whatsapp.png";
            break;             
                                    
        default:
            document.getElementById("imagem").src="";
            

    }


}



