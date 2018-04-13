<script>
const onSubmit = submitHandler => event => {
  event.preventDefault();
  submitHandler(event);
};

export default {
  props: {
    formData: Object,
    submitForm: Function,
    // changeArticleTitle: Function,
    // changeArticleAuthor: Function,
  },
  methods: {},
};
</script>

<template lang="html">
  <form
    noValidate
    @submit="onSubmit(submitForm)"
  >
  <div>
    <label htmlFor="article-title">Title</label>
    <input
      id="article-title"
      v-model="formData.articleTitle.value"
      name="articleTitle"
      type="text"
      autoComplete="off"
    />
    <p v-if="!formData.articleTitle.valid">Please fill in the title</p>
  </div>
  <div>
    <label htmlFor="article-author">Author</label>
    <input
      id="article-author"
      v-model="formData.articleAuthor.value"
      name="articleAuthor"
      type="text"
      autoComplete="off"
    />
    <p v-if="!formData.articleAuthor.valid">Please fill in the author</p>
  </div>
  <button
    type="submit"
    value="Submit"
  >
    Create article
  </button>
</form>

</template>


<style lang="css">
</style>
