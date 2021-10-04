<template>
  <section class="portfolio container">
    <div class="row">
      <div class="col-lg-10 col-lg-offset-1">
        <h2>Aaron Tidwell - Portfolio</h2>
        <p>
          Click each project for information about the technologies implimented.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 col-lg-offset-1">
        <div class="row">
          <portfolio-item
            v-for="portfolioItem in portfolio"
            :key="portfolioItem.name"
            :item="portfolioItem"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import portfolioItem from '~/components/portfolio-item'

export default {
  components: { portfolioItem },
  head() {
    return {
      title: 'Aaron Tidwell - Portfolio',
    };
  },
  computed: {
    ...mapState('portfolio', ['portfolio']),
  }
}
</script>

<style lang="scss" scoped></style>
