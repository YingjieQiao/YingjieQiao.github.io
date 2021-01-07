<template>
    <section id="projects" class="projects-section">
        <v-container fluid>
            <v-row>
                <v-col>
                    <h1>Projects</h1>
                    <p>Here are some projects I've done.</p>
                </v-col>
            </v-row>

            <div v-for="project in projects" :key="project.name">
                <v-row class="justify-space-around mb-8 mt-4">
                    <v-card
                    class="mx-auto"
                    max-width="1000"
                    >
                    <v-img
                    class="align-end"
                    height="80%"
                    contain
                    :src="project.image"
                    >
                    </v-img>

                    <v-card-title> {{ project.name }}</v-card-title>
                    
                    <!-- <v-card-subtitle class="pb-0">
                        {{ project.description }}
                    </v-card-subtitle> -->

                    <v-card-text class="text--primary">
                    <div >{{ project.description }}</div>
                    <div v-if="project.name == 'Automated Email Scheduler' "> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                        <p>&nbsp;</p> 
                    </div>

                    <!-- <div>Whitsunday Island, Whitsunday Islands</div> -->
                    </v-card-text>
                    <v-card-actions v-if="project.name != 'Automated Email Scheduler' ">
                        <v-btn
                            color="orange"
                            text
                            :href="project.github"
                        >
                            Source Code
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                    <div style="white-space: pre-line;"> </div>
            </v-row>
            </div>
            
        </v-container>
    </section>
</template>


<script>
  export default {
      data() {
          return {
            visible: true,
            projects: [
                {
                name: 'Kue',
                github: 'https://github.com/YingjieQiao/kue',
                description: 'Smart restaurant management and order tracking app',
                image: 'https://user-images.githubusercontent.com/49013092/103765683-8abe3f00-5058-11eb-9382-26100ddf7e6e.png'
                },
                {
                name: 'Snake Game',
                github: 'https://github.com/YingjieQiao/FPGA_Snake_Game_Using_16bit_CPU',
                description: 'Electronic hardware implementation of the Snake Game, using 16-bit Beta CPU and ALU',
                image: 'https://user-images.githubusercontent.com/49013092/103766686-33b96980-505a-11eb-83f4-15ab35f76eff.png'
                },
                {
                name: 'Automated Email Scheduler',
                github: 'jublia',
                description: " This is one of the projects I've done during my internship at Jublia.  \
                            An email scheduler is employed to send a series of emails for each event to \
                            engage the attendees from 1 week \
                                before the event until the end of the event. \
                            I designed a process such that all emails are automatically scheduled \
                            after the first “Launch Email” is sent.",
                image: 'https://user-images.githubusercontent.com/49013092/103775559-2c4d8c80-5069-11eb-882a-9f97d22c36d0.png'
                }
            ]
          }
      }
  }
</script>


<style scoped>
.projects-section {
    background-color: #45969b;
}
.v-image {
  border-bottom: 1px solid;
}
</style>