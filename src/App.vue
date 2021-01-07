<template>
  <v-app>


    <v-main>
      <Default/>
      
    </v-main>
    <About />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
  </v-app>
</template>

<script>
import Default from './components/Default';
import About from './components/About.vue'
import Education from './components/Education.vue'
import Experiences from './components/Experiences.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',

  components: {
    Default,
    About,
    Education,
    Experiences,
    Projects,
    Contact
  },

  data: () => ({
    //
  }),
};
</script>
