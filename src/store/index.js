import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        loadedMeetups: [
            {
                imageUrl: "https://media.timeout.com/images/103444978/image.jpg",
                id: "udduhda",
                title: "Meetup in New york",
                date: '2017-07-17'
              },
              {
                imageUrl:
                  "http://www.hiltonhotels.com/assets/img/destinations/Spanish/Brazil/brazil-03.jpg",
                id: "udkhjhbgduhda",
                title: "Meetup in Sao Paulo",
                date: '2017-07-17'
              }
        ],
        user:{
            id:'sdbjkbbsdf',
            registeredMeetups:["udkhjhbgduhda"],
        }
    },
    mutations:{
        createMeetup(state,payload){
            state.loadedMeetups.push(payload)
        }
    },
    actions:{
        createMeetup({commit}, payload){
            commit('createMeetup', payload)
        }
    },
    getters:{
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA, meetupB) =>{
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters){
            // console.log(getters.loadedMeetup)
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state){
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})