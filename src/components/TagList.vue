<template>
  <ul class="tag-list" data-qa-type="tag-list">
    <li
      class="tag-default tag-pill tag-outline"
      v-for="(tag, index) of tags"
      :key="index"
    >
      <span v-text="tag" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TagList",
  props: {
    tags: Array
  }
};
</script>
