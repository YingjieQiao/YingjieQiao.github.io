import React, { Component } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import styles from "../css/home.module.css";
import data from "./data";

class Home extends Component {

    render() {
        return (
            <div className={styles.home}>

                <div className={styles.home_container}>
                    <div className={styles.home_head_wrapper}>
                        <h1> Hello there! <br></br> I'm <span>{data.name}</span></h1>

                        <p>{data.intro}</p>
                        
                    </div>

                    <div className={styles.image_container}>
                        <img src={data.me_img} alt="Author"></img>
                        <div className={styles.bg}></div>
                    </div>

                    
                </div>

                <div className={styles.about_container}>
                    <p>{data.paragraph1}</p>
                    
                    <br></br>
                    <br></br>

                    <p> {data.techstack}</p>

                    <h2>Programming Languages:</h2>

                    <div>
                        <ul>
                            {data.languages.map(
                                (language)=>(
                                    <li key={language.name}>{language.name}</li>
                                )
                            )}
                        </ul>
                    </div>

                    <h2>Web Frameworks:</h2>

                    <div>
                        <ul>
                            {data.web_fw.map(
                                (fw)=>(
                                    <li key={fw.name}>{fw.name}</li>
                                )
                            )}
                        </ul>
                    </div>

                    <h2>Tools and Technologies:</h2>
                    
                    <div>
                        <ul class="columns" data-columns="2">
                            {data.tools.map(
                                (tool)=>(
                                    <li key={tool.name}>{tool.name}</li>
                                )
                            )}
                        </ul>
                    </div>

                    <h2>etc...</h2>
                    

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>

                <div className={styles.contact_container}>
                    
                    

                    <h1>Get in touch.</h1>

                    <br></br>
                    <br></br>

                    <a className={styles.email_link} href={`mailto:${data.contact_email}`}>
                    {data.contact_email}
                    </a>

                    <div className={styles.social_links}>
                        <ul>
                            <li>
                                <a href={`mailto:${data.contact_email}`}>
                                    <FaEnvelope></FaEnvelope>
                                </a>
                            </li>
                            <li>
                                <a href={data.contact_link[0].url}>
                                    <FaLinkedin></FaLinkedin>
                                </a>
                            </li>
                            <li>
                                <a href={data.contact_link[1].url}>
                                    <FaGithub></FaGithub>
                                </a>
                            </li>

                        </ul>
                    </div>

                    <footer> © <span>{new Date().getFullYear()} </span>Yingjie Qiao</footer>

                    
                </div>


                                    
                

            </div>


            
        )
    }
}

export default Home