<script>
import ArticleComponent from "./ArticleComponent";

import { ArticleService } from "../domain/ArticleService";
import { ArticleStore } from "../store/ArticleStore";

export default {
  components: { ArticleComponent },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    likeArticle(article) {
      const updatedArticle = this.articleService.updateLikes(
        article,
        article.likes + 1
      );
      ArticleStore.dispatch("UPDATE_ARTICLE", updatedArticle);
    },
    removeArticle(article) {
      ArticleStore.dispatch("REMOVE_ARTICLE");
    },
  },
};
</script>

<template lang="html">
  <div>
    <ArticleComponent
      article="article"
      likeArticle="likeArticle"
      removeArticle="removeArticle"
    />
  </div>
</template>

<style lang="css">
</style>
