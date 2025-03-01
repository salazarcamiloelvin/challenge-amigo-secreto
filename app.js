// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];


function agregarAmigo(){
    let nombre = document.getElementById('amigo');
    if(nombre.value == ''){
        alert('Digite un nombre valido');
        return;
    }
   listaDeAmigos.push(nombre.value);
   console.log(listaDeAmigos);
   nombre.focus();
   nombre.value = '';
   mostrarAmigos();
}

function mostrarAmigos(){
   let amigos = document.getElementById('listaAmigos');
   amigos.innerHTML = '';

   for(let i = 0; i < listaDeAmigos.length; i++){
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        amigos.appendChild(item);
   }
}

function sortearAmigo(){
    if(listaDeAmigos.length === 0){
        alert('No tienes amigos para sortear');
        return;
    }

    let amigoAleatorio = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo ganador es: ${amigoAleatorio}`;
}
