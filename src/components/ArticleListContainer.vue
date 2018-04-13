<script>
import ArticleListComponent from "./ArticleListComponent";
import { articleStore } from "../store/ArticleStore";

export default {
  components: { ArticleListComponent },
  computed: {
    articles() {
      return articleStore.getArticles();
    },
  },
};
</script>

<template lang="html">
    <ArticleListComponent articles="articles" />
</template>


<style lang="css">
</style>
