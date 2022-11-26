<template >
  <section class="src-componentes-usuarios-mock-api">
    <div class="jumbotron"> <p class="n">{{getTodo}}</p>
      <div v-if="posts.length" class="table-responsive">
        <table class="table">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
          </tr>
          <tr v-for="post in this.posts" :key="post.id">
            <td>{{ post.nombre }}</td>
            <td>{{ post.email }}</td>
            <td>{{ post.edad }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">No hay usuarios en la lista</h4>
      
    </div>
  </section>

</template>

<script >
export default {
  name: 'src-componentes-usuarios-mock-api',
  components: {
  },
  props: [],
  mounted() {

  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
   
    async getAxios() {
      try {
        let respuesta = await this.getData()  // con global mixin
        this.posts = respuesta.data;

      } catch (error) {
        console.error(error)
      }
    },

     //  CON THEN/ CATCH
    //  async getAxiosThenCatch() {
    //   this.getData()
    //  .then(respuesta => {this.posts = respuesta.data})
    //  .catch(error => console.error(error.message))
    // },
  },
  computed: {
    getTodo(){
      return this.getAxios()
    }

  }
}


</script>

<style scoped lang="css">
.src-componentes-usuarios-mock-api {}

table {
  text-align: center;
}

td {
  color: rgb(1, 49, 77);
  background-color: antiquewhite;
  font-size: medium;
}

th {
  background-color:rgb(1, 49, 77);
  color: antiquewhite;
}
.n{
  color: rgba(0, 0, 0, 0);
}
.fun {
  font-size: x-large;
  background-color: rgba(0, 0, 0, 0.651);
  color: antiquewhite;

}
#jb4{
  background-color: rgb(1, 49, 77);
  border-radius: 5px;
}
</style>
