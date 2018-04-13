<template>
  <div id="app">
    <ArticleFormContainer />
    <ArticleListContainer />
  </div>
</template>

<script>
import ArticleFormContainer from "./components/ArticleFormContainer";
import ArticleListContainer from "./components/ArticleListContainer";
export default {
  name: "app",
  components: {
    ArticleListContainer,
    ArticleFormContainer,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
