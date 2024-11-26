<template>
  <div class="container" style="text-align: center;">
    <h1 style="color: red;">Lo que buscas aquí no está</h1>
    <p style="color: aliceblue;">{{ route }}</p>
    <img src="../assets/logo.png" alt="Not Found" style="max-width: 100%; height: auto;" />
  </div>
</template>

<script>
export default {
  computed: {
    route() {
      return this.$route.name;
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Para centrar verticalmente */
}
</style>