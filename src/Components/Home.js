import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

import styles from "../css/home.module.css";
import data from "./data";

class Home extends Component {

    render() {
        return (
            <div className={styles.home}>

                <div className={styles.header_container}>
                    <Link to="/"><h1>{data.fullname}</h1></Link>
                    <nav>
                        <ul>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/experiences">Experiences</Link></li>
                        </ul>
                    </nav>
                </div>

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

                <div className={styles.contact_container}>
                    
                    <p>{data.paragraph1}</p>

                    {/* techstack */}
                    {/* <br></br>
                    <br></br> */}


                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

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
                </div>


            </div>

            
        )
    }
}

export default Home