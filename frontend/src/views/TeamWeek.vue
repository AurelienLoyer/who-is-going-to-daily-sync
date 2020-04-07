<template>
  <div class="week">
    <h1>🤔 Who is going to daily sync ? 📣</h1>
    <h2 v-if="team">{{ team.name }}</h2>
    <ul class="days" v-if="team && team.days">
      <li class="days__item" v-for="(item, index) in team.days" :key="index">
        <div class="days__item__avatar" :style="{ backgroundImage: 'url(' + item.avatar + ')' }"></div>
        <div class="days__item__name">{{ days[index] }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from "@/firebase";
const organisations = db.collection('organisations')

export default {
  data() {
    return {
      organisation: null,
      team: null,
      days: [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    };
  },
   watch: {
    '$route.params.orgaId': {
      immediate: true,
      handler(id) {
        this.$bind('organisation', organisations.doc(id))
      },
    },
    organisation: {
      immediate: true,
      handler(orga) {
        if(orga) {
          this.team = orga.teams.find(team => team.id === this.$route.params.teamId);
        }
      },
    },
  },
};
</script>

<style lang="scss">
@import "./../scss/_variables.scss";

h1 {
  font: normal 3.6rem "Shrikhand", Helvetica, sans-serif;
}

h2 {
  font: normal 1.6rem "Shrikhand", Helvetica, sans-serif;
}

h1,
h2 {
  color: #fff;
  letter-spacing: 0.05em;
  text-align: center;
  text-shadow: 0 0 20px rgba(lighten($primary-color, 20%), 0.9),
    -5px -5px 0 rgba(#c2b7fe, 0.5), 5px 5px 0 rgba(#95a9ff, 0.6);
}

.week {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
  z-index: 10;
  padding: 25px;

  @media screen and (max-width: 640px) {
    height: 100%;
    overflow-y: auto;
    display: block;
  }

  .days {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;
    padding: 0;
    margin: 0;
    list-style: none;
    color: white;

    @media screen and (max-width: 640px) {
      flex-direction: column;
      justify-content: flex-start;
      margin-top: 40px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      height: 160px;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5%;

      &__avatar {
        width: 100px;
        height: 100px;
        background-size: cover;
        border-radius: 50%;
        border: solid 5px;
        display: flex;
        flex-direction: column;
        background-position: center center;
        align-items: center;
        justify-content: space-between;
      }

      &__name {
        font: normal 1.6rem "Shrikhand", Helvetica, sans-serif;
        color: #fff;
        letter-spacing: 0.05em;
        text-align: center;
        text-shadow: 0 0 20px rgba(lighten($primary-color, 20%), 0.9),
          -5px -5px 0 rgba(#c2b7fe, 0.5), 5px 5px 0 rgba(#95a9ff, 0.6);
      }
    }
  }
}
</style>
