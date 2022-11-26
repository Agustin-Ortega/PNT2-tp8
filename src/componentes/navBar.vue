<template >

  <section class="src-componentes-nav-bar">
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link to="/inicio">
              <a id="style" align="center" class="nav-link" href="#">Inicio</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/formulario">
              <a id="style" class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/usuarios-mockApi">
              <a id="style" class="nav-link" href="#">Lista de Usuarios</a>
            </router-link>
          </li>
        </ul>
      </div>
</nav>
</div>
  </section>

</template>

<script >

export default {
  name: 'src-componentes-nav-bar',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-componentes-nav-bar {}

#style {
  text-decoration: rgba(128, 128, 128, 0);
  color: antiquewhite;
  font-size: x-large;
}

#style:hover {
  color: rgb(0, 0, 0);
  transition: 1s;
}
</style>
