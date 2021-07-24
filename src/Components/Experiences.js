import React, { Component } from 'react'

import styles from "../css/experiences.module.css";
import data from "./data";


class Experiences extends Component {

    render() {
        return (
            <div>

	
                <h1>Experiences</h1>

                <div className={styles.exp_container}>
                    
                    <div>
                        <h2>Jublia Pte Ltd</h2>
                        <p style={{float : 'left'}}>TechOps, Software Engineering Intern, Backend Development</p>
                        <p style={{float : 'right'}}>Singapore, May 2020 - Sept 2020</p>
                    
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

                </div>

                {
                    data.jobs.map(
                        (job)=>(
                            <div className={styles.exp_container}>
                                <h2>{job.name}</h2>
                                <div>
                                    <p style={{float : 'left'}}>{job.title}</p>
                                    <p style={{float : 'right'}}>{job.location_and_time}</p>

                                    <br></br>
                                    <br></br>

                                    <ul style={{float : 'left'}}>
                                        {
                                            job.pointers.map(
                                                (pointer)=>(
                                                    <li > {pointer}</li>
                                                )
                                            )
                                        }
                                    </ul>

                                </div>
                            </div>
                        )
                    )
                }
            

	        </div> 
        )
    }
}

export default Experiences