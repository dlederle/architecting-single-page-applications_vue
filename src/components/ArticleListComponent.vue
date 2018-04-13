<script>
import ArticleContainer from "./ArticleContainer";

export default {
  components: { ArticleContainer },
  props: {
    articles: Array,
  },
};
</script>

<template lang="html">
  <div>
    <ArticleContainer v-for="article in articles" key="article.id" article="article"/>
  </div>
</template>


<style lang="css">
</style>
