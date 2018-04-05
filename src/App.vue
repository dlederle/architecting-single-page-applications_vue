<template>
  <div id="app">
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import {articleService} from './domain/ArticleService'

export default {
  name: 'app',
  components: {
  },
  mounted() {
    const testArticle = {
      author: "Dr. Seuss",
      title: "Cat in the Hat"
    }
    console.log("I have mounted")
    const newArticle = articleService.createArticle(testArticle)
    console.log(newArticle)
    const likedArticle = articleService.updateLikes(newArticle, 1)
    console.log(likedArticle)

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
