<template>
  <v-app>
      <v-navigation-drawer v-model="drawer" permanent app>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Qiao Yingjie
            </v-list-item-title>
            <v-list-item-subtitle>
              Software Engineer
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>


        <v-list
          dense
          nav>
          <v-list-item
            v-for="item in items"
            :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title> <a :href=item.link>{{ item.title }}</a> </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-content>
      <About />
      <Education />
      <Experiences />
      <Projects />
      <Contact />
    </v-content>

    
  </v-app>
</template>

<script>
import About from './components/About.vue'
import Education from './components/Education.vue'
import Experiences from './components/Experiences.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',

  components: {
    About,
    Education,
    Experiences,
    Projects,
    Contact
  },

  data() {
    return {
      items: [
          { title: 'About', icon: 'mdi-account', link: '#about' },
          { title: 'Education', icon: 'mdi-school', link: '#education' },
          { title: 'Experiences', icon: 'mdi-briefcase', link: '#experiences' },
          { title: 'Projects', icon: 'mdi-apps', link: '#projects' },
          { title: 'Contact', icon: 'mdi-message-text', link: '#contact' },
      ],
      right: null,
    }
  }

  
};
</script>
