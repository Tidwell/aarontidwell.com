<template>
  <div class="col-md-3 col-sm-4 flip">
    <div class="card" :class="{flipped}" @click="flipped = !flipped">
      <div class="folio-item face front">
        <div class="content">
          <strong>{{ item.name }}</strong>
          <span class="tag">{{ item.type }}</span>
          <hr />
          <i v-if="item.icon" class="fa fa-5x" :class="item.icon"></i>
          <img v-if="item.image" :src="item.image" class="img-responsive">
          <p>{{ item.description }}</p>
        </div>
        <portfolio-links :item="item" />
      </div>
      <div class="folio-item face back">
        <div class="content">
          <strong>{{ item.name }}</strong>
          <hr />
          <ul>
            <li v-for="tech in item.technology" :key="tech">{{ tech }}</li>
          </ul>
        </div>
        <portfolio-links :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import portfolioLinks from '~/components/portfolio-links.vue'
export default {
  components: {
    portfolioLinks,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      flipped: false
    }
  }
}
</script>

<style lang="scss" scoped></style>
