import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'

import styles from '../css/projects.module.css'

class Projects extends Component {

    render() {
        return (
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="test.png" />

                    <Card.Body classname={styles.test}>
                        <Card.Title>Card title that wraps to a new line</Card.Title>
                        <Card.Text >
                            This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                </Card>
                
                
            </CardColumns>
        )
    }
}

export default Projects