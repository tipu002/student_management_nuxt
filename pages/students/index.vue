<template>
  <div id="student-index" class="page">
    <div class="card">
      <div class="card-header">Students</div>
      <div class="card-body">

        <v-list-item>
          <v-list-item-content v-if="this.$auth.user.is_superuser === true">
            <custom_datatable :url="url" :columns="columns"/>
          </v-list-item-content>
          <v-alert v-else
                   border="right"
                   colored-border
                   type="error"
                   elevation="2"
          >
            You don't have any permission to view this section.
          </v-alert>
        </v-list-item>
      </div>
    </div>


  </div>
</template>

<script>
  import Custom_datatable from "../../components/snippets/custom_datatable";

  export default {
    middleware: ['auth'],
    name: "index",
    components: {Custom_datatable},
    head(){
      return{
        title: 'Students',
      }
    },
    data() {
      return {
        url: process.env.API_URL + '/students/',
        columns: [
          {
            header: 'ID',
            field: 'id',
            type: 'string'
          },
          {
            header: 'Username',
            field: 'username',
            type: 'string'
          },
          {
            header: 'Email',
            field: 'email',
            type: 'string'
          },
          {
            header: 'Firstname',
            field: 'first_name',
            type: 'string'
          },
          {
            header: 'Last Name',
            field: 'last_name',
            type: 'string'
          },
          {
            header: 'Full Name',
            field: 'first_name',
            type: 'string'
          },
          {
            header: 'Joined',
            field: 'date_joined',
            type: 'datetime'
          },
        ]
      }
    },
    methods: {

    },
    mounted(){

    }
  }
</script>

<style scoped>

</style>
