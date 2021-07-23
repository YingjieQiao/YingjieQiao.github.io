import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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

                <div className={styles.header_container}>
                    <div className={styles.home_container}>
                        <div className={styles.home_head_wrapper}>
                            <h1> Hello there! <br></br> I'm <span>{data.name}</span></h1>

                            {/* <p>{paragraph}</p> */}
                            
                            </div>
                            <div className={styles.image_container}>
                                <img src="me.png" alt="Author"></img>
                                <div className={styles.bg}></div>
                            </div>
                    </div>
                </div>
            </div>

            
        )
    }
}

export default Home