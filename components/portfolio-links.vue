<template>
  <div class="link-container">
    <a v-if="item.github" target="_new" :href="item.github">
      <i class="fa fa-github"></i>
      Github
    </a>
    <a v-if="item.url" target="_new" :href="item.url">
      <i class="fa fa-file-o"></i>
      Site
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
