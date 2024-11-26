<template>
  <div class="container">
    <table>
      <tbody>
        <tr>
          <td>Nombre</td>
        </tr>
        <tr>
          <td v-if="personaje && personaje.name">{{ personaje.name }}</td>
          <td v-else>No disponible</td>
        </tr>
        <tr>
          <td>Género</td>
        </tr>
        <tr>
          <td v-if="personaje && personaje.gender">{{ personaje.gender }}</td>
          <td v-else>No disponible</td>
        </tr>
        <tr>
          <td>Altura</td>
        </tr>
        <tr>
          <td v-if="personaje && personaje.height">{{ personaje.height }}</td>
          <td v-else>No disponible</td>
        </tr>
        <tr>
          <td>Número de películas</td>
        </tr>
        <tr>
          <td v-if="personaje && personaje.films">
            {{ personaje.films.length }}
          </td>
          <td v-else>No disponible</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PersonajePerson",
  data() {
    return {
      personaje: {}, // Inicializar como objeto vacío
    };
  },
  computed: {
    id() {
      return this.$route.params.personajeId; // Obtener el ID del parámetro de la ruta
    },
  },
  methods: {
    fetchPersonajes() {
      console.log("ID del personaje:", this.id);
      axios
        .get(`https://swapi.dev/api/people/${this.id}`)
        .then((res) => {
          console.log("Respuesta de la API:", res.data);
          this.personaje = res.data; // Asignar los datos del personaje
        })
        .catch((error) => {
          console.error("Error al obtener los datos:", error);
        });
    },
  },
  created() {
    this.fetchPersonajes(); // Llamar a la función al crear el componente
  },
};
</script>

<style>
table {
  border-collapse: collapse;
  margin: 80px;
  width: 50%;
  border: 1px solid rgb(190, 189, 189);
  color: yellow;
  background-color: rgb(121, 117, 117);
}

th,
td {
  text-align: center;
  padding: 16px;
}

tr:nth-child(even) {
  background-color: #080808;
  color: white;
}
</style>
