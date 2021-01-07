<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    

  <About />
  <Education />
  <Experiences />
  <Projects />
  <Contact />
  </Layout>
</template>

<script>
import About from '@/components/About.vue'
import Education from '@/components/Education.vue'
import Experiences from '@/components/Experiences.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
  metaInfo: {
    title: 'Hello there!'
  },
  components: {
    About,
    Education,
    Experiences,
    Projects,
    Contact
  }
}
  
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
