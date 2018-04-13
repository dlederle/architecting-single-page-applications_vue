<script>
import ArticleFormComponent from "./ArticleFormComponent";
import { articleService } from "../domain/ArticleService";
import { articleStore } from "../store/ArticleStore";

export default {
  components: { ArticleFormComponent },
  data() {
    return {
      formData: {
        articleTitle: {
          value: "",
          valid: true,
        },
        articleAuthor: {
          value: "",
          valid: true,
        },
      },
    };
  },
  methods: {
    // Not sure these are necessary, I'm tying the formData values as v-models
    // changeArticleTitle(event) {
    //   console.log("Changing title!");
    //   console.log(event);
    // },
    // changeArticleAuthor(event) {
    //   console.log("Changing author!");
    //   console.log(event);
    // },
    submitForm(event) {
      const articleTitle = this.formData.articleTitle.value;
      const articleAuthor = this.formData.articleAuthor.value;

      const isTitleValid = articleService.isTitleValid(articleTitle);
      const isAuthorValid = articleService.isAuthorValid(articleAuthor);

      if (isTitleValid && isAuthorValid) {
        const newArticle = articleService.createArticle({
          title: articleTitle,
          author: articleAuthor,
        });
        if (newArticle) {
          articleStore.dispatch("ADD_ARTICLE", newArticle);
        }
        this.clearForm();
      } else {
        this.markInvalid(isTitleValid, isAuthorValid);
      }
    },

    clearForm() {
      this.formData.articleTitle.value = "";
      this.formData.articleTitle.valid = true;
      this.formData.articleAuthor.value = "";
      this.formData.articleAuthor.valid = true;
    },

    markInvalid(isTitleValid, isAuthorValid) {
      this.formData.articleTitle.valid = isTitleValid;
      this.formData.articleAuthor.valid = isAuthorValid;
    },
  },
};
</script>

<template lang="html">
  <ArticleFormComponent
    :formData="formData"
    :submitForm="submitForm.bind(this)"
  />

</template>


<style lang="css">
</style>
