<template>
    <section id="experiences" class="experiences-section">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Experiences</h1>
                </v-col>
            </v-row>
                
            <v-row>
                <v-col>
                   <v-card
                    class="mx-auto"
                    max-width="1000"
                >
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Jublia Pte Ltd
                        </p>
                        <p class="text--primary" style="text-align: left; width:49%; display: inline-block;">TechOps, 
                            Software Engineering Intern, Backend Development</p>
                        <p style="text-align: right; width:50%;  display: inline-block;">Singapore<br>
                                                    May 2020 - Sept 2020</p>

                        <i>Jublia is one of the world’s most comprehensive 1 on 1 meetings and community interaction technology, trusted by global tradeshows, conferences and B2B events. 
                            You can find more about Jublia at: <a href="https://jublia.com">https://jublia.com</a>.</i>

                        <div class="text--primary">
                            <ul>
                                <li>Designed and implemented “Communication Automation” feature, rewritten and created multiple new RESTful backend endpoints in total using Flask, 
                                    collaborating with Frontend engineers on the Web Interface updates.</li>
                                <li>Migrated static assets from host servers to AWS S3 for better management and security. 
                                    Updated to AWS S3 API for all file-reading functions across all of Jublia’s codebases.
                                </li>
                                <li>Refactored and added new features to server auto-deployment scripts
                                     consists of Python code and bash scripts.</li>
                                <li>Developed a Python script that automates the deletion previous quarters’ user data 
                                    stored in the database hosted on AWS and other hosting platforms such as Google Cloud.</li>
                                <li>Delivered 10+ bug fixes across the system, 
                                    such as maintenance of RESTful APIs, optimization of SQL queries, refactoring of legacy code, etc.</li>
                            </ul>
                        </div>
                    </v-card-text>
                </v-card> 
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                   <v-card
                    class="mx-auto"
                    max-width="1000"
                >
                    <v-card-text>
                        <p class="display-1 text--primary">
                            Singapore University of Technology and Design
                        </p>
                        <p class="text--primary" style="text-align: left; width:49%; display: inline-block;">
                            Research Assistant
                        </p>
                        <p style="text-align: right; width:50%;  display: inline-block;">Singapore<br>
                                                    Sept 2020 - Nov 2020</p>

                        <i>Worked in Prof. Liu Jun’s Research Group, focusing on Computer Vision and Deep Learning.</i>

                        <div class="text--primary">
                            <ul>
                                <li>Contributed a VQA (Video Question Answering) Deep Learning model baseline to a paper 
                                    submitted to CVPR 2021, currently under anonymous review.
                                </li>
                                <li>Managed the lab GPU server and deployed multiple Deep Learning experiments using Docker over time.
                                </li>
                                <li>Data collection by web scraping and labeling of the training/testing dataset.
                                </li>
                            </ul>
                        </div>
                    </v-card-text>
                </v-card> 
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>


<script>
  export default {
  }
</script>


<style scoped>
.experiences-section {
    background-color: #50b6bb;
}
</style>