const Contendorimg = document.getElementById(`Contendorimg`);
const efe = document.getElementById(`efe`);
const efes = document.getElementById(`efes`);


let mapBanner = {imagenP:"Casap.jpg",
                nombrePelicula:"Money Money", 
                rating:"(4.5 Rating)", 
                sinopsis:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus facere impedit earum accusantium distinctio omnis temporibus similique esse doloribus dolorem? Repudiandae magni autem eligendi corporis?",
                categoria:"+22"
};

console.log(mapBanner["categoria"]);

Contendorimg.innerHTML += `<div id="letras">
<div class="variableImagen"><img src="img/${mapBanner["imagenP"]}"></div>
<div class="arreglo">
    <h2>${mapBanner["nombrePelicula"]}</h2>
    <h5>${mapBanner["rating"]}</h5>
</div>
<p>${mapBanner["sinopsis"]}<p>
<div class="final">
    <input id="crear" type="submit" value="PLAY">
    <input id="crear" type="submit" value="SAVE">
    <h4>${mapBanner["categoria"]}</h4>
</div>
</div>`

let peli0 = {imagenP:"Primeras.jpg", categoria:"+15", rating:"1S.png"};
let peli1 = {imagenP:"telefono.jpg", categoria:"+18", rating:"2S.png"};
let peli2 = {imagenP:"fall.jpg", categoria:"+12", rating:"3S.png"};
let peli3 = {imagenP:"fightclub.jpg", categoria:"+1", rating:"4S.png"};
let peli4 = {imagenP:"interstellar.jpg", categoria:"+11", rating:"1S.png"};
let peli5 = {imagenP:"intime.jpg", categoria:"+5", rating:"5S.png"};
let peli6 = {imagenP:"minions.jpg", categoria:"+2", rating:"5S.png"};
let peli7 = {imagenP:"nope.jpg", categoria:"+15", rating:"1S.png"};
let Recomendaciones  = [peli0, peli1, peli2, peli3, peli4, peli5, peli6, peli7];

for(let i=0 ; i<Recomendaciones.length ; i++){
    efe.innerHTML += `<div class="modulo1">
    <img class="imgf" src="img/${Recomendaciones[i].imagenP}">
    <div class="imagenI">
        <p>${Recomendaciones[i].categoria}</p>
        <input id="save" type="submit" value="Play">
        
    </div>
    <div class="rating">
        <p>Rating:</p>
        <img class="estrellas" src="img/${Recomendaciones[i].rating}">
        <img class="guarda" src="img/guarda.png">
    </div>
</div>`
}

let peliT0 = {imagenP:"Primeras.jpg", categoria:"+15", rating:"1S.png"};
let peliT1 = {imagenP:"antman.jpg", categoria:"+28", rating:"2S.png"};
let peliT2 = {imagenP:"antman2.jpg", categoria:"+148", rating:"4S.png"};
let peliT3 = {imagenP:"creed.jpg", categoria:"+15", rating:"4S.png"};
let peliT4 = {imagenP:"creed2.jpg", categoria:"+11", rating:"3S.png"};
let peliT5 = {imagenP:"dc.jpg", categoria:"+5", rating:"5S.png"};
let peliT6 = {imagenP:"dragonball.jpg", categoria:"+22", rating:"5S.png"};
let peliT7 = {imagenP:"dragonball1.jpg", categoria:"+15", rating:"5S.png"};
let Trending  = [peliT0, peliT1, peliT2, peliT3, peliT4, peliT5, peliT6, peliT7];

for(let a=0 ; a<Trending.length ; a++){
    console.log(Trending[a]);//Recuerda borrarlo que solo lo usas para ver si ta haciendo bien eso jhojo aksdjkasj
    efes.innerHTML += `<div class="modulo1">
    <img class="imgf" src="img/${Trending[a].imagenP}">
    <div class="imagenI">
        <p>${Trending[a].categoria}</p>
        <input id="save" type="submit" value="Play">
    </div>
    <div class="rating">
        <p>Rating:</p>
        <img class="estrellas" src="img/${Trending[a].rating}">
        <img class="guarda" src="img/guarda.png">
    </div>
</div>`
}
