import React, { Component } from 'react'

import styles from "../css/experiences.module.css";
import data from "./data";


class Experiences extends Component {

    render() {
        return (
            <div className={styles.exp}> 
                <div className={styles.text_container}>
                    <p>What I have worked on before and what I'm currently working on</p>
                </div>

                <div className={styles.exp_container}>
                    <h1>Work Experiences</h1>
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
                                                    <li>{pointer}
                                                    </li>
                                                )
                                            )
                                        }
                                    </ul>

                                </div>
                            </div>
                        )
                    )
                }

            <div className={styles.exp_container}>
                    <h1>Education</h1>
            </div>

            {
                data.schools.map(
                    (school)=>(
                        <div className={styles.exp_container}>
                            <h2>{school.name}</h2>
                            <div>
                                <p style={{float : 'left'}}>{school.title}</p>
                                <p style={{float : 'right'}}>{school.location_and_time}</p>

                                <br></br>
                                <br></br>

                                <ul style={{float : 'left'}}>
                                    {
                                        school.pointers.map(
                                            (pointer)=>(
                                                <li class="nav-item d-inline-flex  align-items-center mr-2">{pointer}
                                                </li>
                                                
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