<template>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>-->
  <div class="container">
    <div class="shape">
      <div v-for="index in 50" :key="index" :class="`shape-container--${index} shape-animation`">
        <div class="random-shape"></div>
      </div>
    </div>
    <ul class="days">
      <li class="days__item" v-for="index in 5" :key="index">
        <div class="days__item__avatar" :style="{ backgroundImage: 'url(' + image + ')' }"></div>
        <div class="days__item__name">Monday</div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "App",
  data(){
    return {
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQHlUawZJnh5HQ/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=zTmEttNyDrlUsasnMIwHi6wHH6P2WlYNg4PFBL7PUY8'
    }
  }
};
</script>

<style lang="scss">
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
@import url("https://fonts.googleapis.com/css?family=Shrikhand");
@import url("https://fonts.googleapis.com/css?family=Rubik:400");

$primary-color: #667eea;
$secondary-color: #764ba2;

.days {
  &__item {
    &__avatar {
      width: 50px;
      height: 50px;
    }
    &__name {
    }
  }
}

body {
  margin: 0;
}

.container {
  width: 100%;
  height: 100vh;
  display: block;
  overflow: hidden;
  background-image: linear-gradient(
    135deg,
    $primary-color 0%,
    $secondary-color 100%
  );

  .inner-container {
    width: 100%;
    margin: 0 auto;
  }
}

.shape {
  margin: 0 auto;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.random-shape:after {
  font-family: FontAwesome;
  content: "\f005";
}

$circle-size: 100px;
$colors: #ffd700, #fff8dc, #db7093, #c2b7fe, #95a9ff;
$shapes: "\f005", "\f0c8", "\f1db", "\f096", "\f1d8", "\f1cb";
$shape-count: 50;

@for $i from 1 through $shape-count {
  $shape-size: random(10);
  $rotation: random(360);
  $speed: 40 + random(10);
  $color-key: random(length($colors));
  $shape-color: nth($colors, $color-key);
  $shape-key: random(length($shapes));
  $shape-type: nth($shapes, $shape-key);
  $text: random(10);

  @keyframes shape-#{$i} {
    0% {
      transform: translate3d(0, 0, 0) rotate(#{$rotation + 0}deg);
    }
    100% {
      transform: translate3d(0, 0, 0) rotate(#{$rotation + 360}deg);
    }
  }

  .shape-container--#{$i} {
    animation: shape-#{$i} #{$speed}s linear infinite;

    .random-shape:after {
      margin: #{$shape-size}rem;
      color: $shape-color;
      font-size: #{$shape-size * 0.2}rem;
      content: $shape-type;
    }
  }
}

.stop-shape {
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}
</style>
