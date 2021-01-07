<template>
  <v-app>
        <v-navigation-drawer permanent>
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

          <v-divider></v-divider>

          <v-list
            dense
            nav>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="`#${item.title.toLowerCase().replace(' & ', '-')}`">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
  <v-main>
    <v-container>
      <slot/>
    </v-container>
    
  </v-main>
    
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
          { title: 'About', icon: 'mdi-account' },
          { title: 'Education', icon: 'mdi-school' },
          { title: 'Experiences', icon: 'mdi-briefcase' },
          { title: 'Projects', icon: 'mdi-apps' },
          { title: 'Contact', icon: 'mdi-message-text' },
      ],
      right: null,
    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.v-application--wrap {
  flex-direction: row;
}
</style>