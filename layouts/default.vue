<template>
<div>
  <navbar />
  <Nuxt />
  <page-footer />
</div>
</template>

<script>
import navbar from '~/components/navbar';
import pageFooter from '~/components/footer';

  export default {
    components: {
      navbar,
      pageFooter
    }
  }
</script>

<style lang="scss" scoped>
</style>
