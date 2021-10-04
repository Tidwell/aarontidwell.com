<template>
  <div>
    <a menu-toggle class="btn btn-dark btn-lg toggle" @click="toggle">
      <i class="fa fa-bars"></i>
    </a>
    <nav id="sidebar-wrapper" :class="{ active: sidebarOpen }">
      <ul class="sidebar-nav">
        <a menu-close class="btn btn-light btn-lg pull-right toggle" @click="toggle">
          <i class="fa fa-times"></i>
        </a>
        <li class="sidebar-brand">
          <a href="/">Aaron Tidwell</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/resume">Resume</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false,
    }
  },
  methods: {
    toggle() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>

<style lang="scss" scoped></style>
