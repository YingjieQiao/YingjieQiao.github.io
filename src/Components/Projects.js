import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

import styles from '../css/projects.module.css'
import data from "./data";

const Divider = ({ children }) => {
    return (
      <div className={styles.container}>
        <div className={styles.border} />
        <span className={styles.content}>
          {children}
        </span>
        <div className={styles.border} />
      </div>
    );
};

class Projects extends Component {

    

    render() {
        return (
            <div className={styles.project_container}> 
                    <h3>Some of the projects I have done</h3>
                
                {
                    data.projects.map(
                        (project)=>(
                            <div>
                                
                            <Card >
                                {
                                    project.images.map(
                                        (image)=>(
                                            <Card.Img className={styles.project_image} variant="top" src={image} />
                                        )
                                    )
                                }
                                
                                <Card.Body >
                                    <h1>{project.name}</h1>
                                    {
                                        project.pointers.map(
                                            (pointer)=>(
                                                <Card.Text> 
                                                    {pointer}
                                                </Card.Text>
                                            )
                                        )
                                    }
                                </Card.Body>

                                {
                                    project.name === "Kue" || project.name == "SingHealth Retail Management Platform" ? (
                                        <Card.Link href={project.code}>Click to see source code (and demo)</Card.Link>
                                    ) : (
                                        <div></div>
                                    )
                                }
                                
                            </Card>
                            
                            <br></br>
                            <br></br>
                            <br></br>

                            <Divider> & </Divider>

                            <br></br>
                            <br></br>
                            <br></br>
                            
                            </div>
                        )
                    )
                }
                    
            </div>
        )
    }
}

export default Projects