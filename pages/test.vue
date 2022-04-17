<template>
  <div>
    <form>
      <select id="categories" v-model="article.categoriesIds" name="categories">
        <option>Categories</option>
        <option v-for="(category, key) in selectCategories" :key="key" :value="key">{{ category }}</option>
      </select>
    </form>

    <a-button type="normal" shape="circle" icon="download" :data-id="1" class="btn-del"> </a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: { title: 'aaaaa', categoriesIds: 4 },
      selectCategories: { 1: 'xxx', 2: 'www', 3: 'yyy', 4: 'zzz' },
    }
  },
}
</script>
