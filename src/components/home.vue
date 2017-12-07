<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router class="error" to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router class="error" to="/create">Organize Meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="meetup in meetups" v-bind:src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
          <div class="carousel-title">
            {{meetup.title}}
          </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template >

<script>
export default {
  computed: {
    meetups(){
      return this.$store.getters.featuredMeetups
    }
  },
  methods:{
    onLoadMeetup(id){
      this.$router.push('/meetups/'+id)
    }
  }
};
</script>

  <!--Add "scoped" attribute to limit CSS to this component only -- >
<style>
    .carousel-title{
      position: absolute;
      bottom: 50px;
      background-color: rgba(0,0,0,0.5);
      color: white;
}      
</style>
