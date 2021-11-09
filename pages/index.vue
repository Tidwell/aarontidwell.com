<template>
  <div>
    <header id="top" class="header">
      <div class="text-vertical-center">
        <h1>Aaron Tidwell</h1>
        <h3>Web Developer</h3>
        <br />
        <a href="#projects" class="btn btn-dark btn-lg">More</a>
      </div>
    </header>
    <div class="bg-container">
      <section id="projects" class="projects bg-primary">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-10 col-lg-offset-1">
              <h2>My Projects - Libraries</h2>
              <hr class="small" />
              <div class="row">
                <div
                  v-for="portfolioItem in indexPortfolioLibraries"
                  :key="portfolioItem.name"
                  class="col-md-3 col-sm-6"
                >
                  <div class="project-item">
                    <span class="fa-stack fa-4x">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i
                        class="fa fa-stack-1x text-primary"
                        :class="portfolioItem.icon"
                      ></i>
                    </span>
                    <h4>
                      <strong>{{ portfolioItem.name }}</strong>
                    </h4>
                    <p>{{ portfolioItem.description }}</p>
                    <a
                      target="_new"
                      :href="portfolioItem.github"
                      class="btn btn-light"
                      ><i class="fa fa-github"></i> Github</a
                    >
                  </div>
                </div>
              </div>
              <!-- /.row (nested) -->
            </div>
            <!-- /.col-lg-10 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>

      <!-- Portfolio -->
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-lg-offset-1 text-center">
              <h2>My Projects - Sites</h2>
              <hr class="small" />
              <div class="row">
                <div
                  v-for="portfolioItem in indexPortfolioSites"
                  :key="portfolioItem.name"
                  class="col-md-6"
                >
                  <div class="portfolio-item">
                    <a :href="portfolioItem.url" target="_new">
                      <img
                        class="img-portfolio img-responsive"
                        :src="portfolioItem.image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.col-lg-10 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>

      <!-- Call to Action -->
      <aside class="call-to-action bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2>More</h2>
              <hr class="small" />
              <a href="/resume" class="btn btn-lg btn-light">Resume</a>
              <a href="/portfolio" class="btn btn-lg btn-dark"
                >Full Portfolio</a
              >
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('portfolio', ['portfolio']),
    indexPortfolioLibraries() {
      return this.portfolio.filter((item) => {
        return item.indexProjectLibrary
      })
    },
    indexPortfolioSites() {
      return this.portfolio.filter((item) => {
        return item.indexProjectSite
      })
    },
  }
}
</script>
