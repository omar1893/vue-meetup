<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h4 class="primary--text">Create a new Meetup</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" v-model="form.title" label="Title" id="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="location" v-model="form.location" label="Location" id="location" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="imageUrl" v-model="form.imageUrl" label="Image URL" id="imageUrl" required></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <img :src="form.imageUrl" height="150" alt="">
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="description" v-model="form.description" label="Description" id="description" multi-line required></v-text-field>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs-12 sm-6 offset-sm3>
        <v-btn class="primary" type="submit" :disabled="!formIsValid">Create Meetup</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return{
      form:{
        'title':'',
        'location':'',
        'imageUrl':'',
        'description':''
      }
    }
  },
  computed:{
    formIsValid(){
      console.log("ejecutandose")
      return this.form.title != '' && this.form.location != '' && this.form.imageUrl != '' && this.form.description != ''
    }
  },
  methods:{
    onCreateMeetup(){
      tis.$store.dispatch('createMeetup', this.form)
    }
  }
}
</script>
