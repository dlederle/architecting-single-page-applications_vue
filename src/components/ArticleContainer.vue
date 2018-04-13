<script>
import ArticleComponent from "./ArticleComponent";

import { articleService } from "../domain/ArticleService";
import { articleStore } from "../store/ArticleStore";

export default {
  components: { ArticleComponent },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    likeArticle(e) {
      const updatedArticle = articleService.updateLikes(
        this.article,
        this.article.likes + 1
      );
      articleStore.updateArticle(updatedArticle);
    },
    removeArticle(e) {
      articleStore.removeArticle(this.article);
    },
  },
};
</script>

<template lang="html">
  <div>
    <ArticleComponent
      :article="article"
      :likeArticle="likeArticle"
      :deleteArticle="removeArticle"
    />
  </div>
</template>

<style lang="css">
</style>
