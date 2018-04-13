<script>
import ArticleListComponent from "./ArticleListComponent";
import { articleStore } from "../store/ArticleStore";

export default {
  components: { ArticleListComponent },
  // Not sure if this is the best equivalent to componentWillUnmount
  beforeDestroyed() {
    articleStore.unsubscribe(this.subscriber);
  },
  data() {
    return {
      articles: [],
      subscriber: articleStore.subscribe(articles => {
        this.articles = articles;
      }),
    };
  },
};
</script>

<template lang="html">
  <ArticleListComponent :articles="articles" />
</template>


<style lang="css">
</style>
