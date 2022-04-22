<template>
  <jugenheader/>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import jugenheader from './components/JugenHeader.vue';

@Options({
  components: {
    jugenheader,
  },
})
export default class App extends Vue {

}
</script>

<style>
#app {
  /* margin: 0; */
  /* padding: 0; */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
