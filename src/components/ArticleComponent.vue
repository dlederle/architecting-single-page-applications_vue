<script>
import * as articleUiService from '../services/ArticleUiService'
export default {
  props: {
    article: {
      required: true,
      type: Object,
    },
    likeArticle: {
      required: true,
      type: Function,
    },
    deleteArticle: {
      required: true,
      type: Function,
    },
  }
}
</script>

<template lang="html">
  <div>
    <h3>{article.title}</h3>
    <p>{articleUiService.displayAuthor(article.author)}</p>
    <p>{article.likes}</p>
    <button
      type="button"
      @click="likeArticle"
    >
      Like
    </button>
    <button
      type="button"
      @click="deleteArticle"
    >
      Delete
    </button>
  </div>
</template>


<style lang="css">
</style>
