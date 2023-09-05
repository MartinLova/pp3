/**originalmente era:
function mostrar()
{
    //alert('Probando el evento click');
    console.log('Probando el evento click');
} adaptandola a función flecha resulta: */
const mostrar = () => console.log('Probando el evento click');

//identifico el boton o el elemento html deseado
const btn = document.querySelector("#btn_evento");

//agrego el evento que deseo escuchar
btn.addEventListener("click",mostrar ); 
