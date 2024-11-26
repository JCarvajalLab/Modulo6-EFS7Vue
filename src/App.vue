<template>
  <div id="app">
    <div class="general">
      <ul class="nav" style="background-color:yellow;">
        <li class="nav-item">                
          <router-link class="nav-link" to="/">Inicio | </router-link>                 
        </li>
        <li class="nav-item">              
          <router-link class="nav-link" to="/personajes">Personajes |</router-link>
        </li>
        <li class="nav-item">                
          <router-link class="nav-link" to="/contacto">Contacto</router-link>
        </li>         
      </ul>
      <!-- <img :src="imageUrl" alt="Descripción de la imagen" /> -->
      <router-view/>
    </div>
  </div>
</template>


<script>
/*  export default {
        data() {
    return {
      imageUrl: 'https://brandemia.org/contenido/subidas/2021/05/portada-starwars-imagenes-brandemia-blog-1000x670.jpg'
    };
  }
}*/
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  display: flex; /* Cambiado a flex para disposición horizontal */
  justify-content: center; /* Centra los elementos de la lista horizontalmente */
  background-color: yellow;
  padding: 10px; /* Espaciado alrededor de la lista */
  list-style-type: none; /* Elimina los puntos de la lista */
  margin: 0; /* Elimina el margen por defecto */
}
.nav-item {
  margin: 0 15px; /* Espaciado entre los elementos de la lista */
  position: relative; /* Para el posicionamiento del pseudo-elemento */
}

.nav-item:not(:last-child)::after {
  content: ""; /* Crea un pseudo-elemento vacío */
  display: inline-block; /* Para que se muestre como un bloque en línea */
  width: 1px; /* Ancho de la línea */
  height: 20px; /* Altura de la línea */
  background-color: #2c3e50; /* Color de la línea */
  position: absolute; /* Posiciona el pseudo-elemento */
  right: -8px; /* Ajusta la posición a la derecha del elemento */
  top: 50%; /* Centra verticalmente */
  transform: translateY(-50%); /* Ajusta la línea para que esté centrada */
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none; /* Elimina el subrayado de los enlaces */
}
.nav a.router-link-exact-active {
  color: #42b983; /* Color para el enlace activo */
}
.general {
  background-color: black;
  width: 100%;
  height: 100%;
  position: absolute;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
