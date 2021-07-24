import { Component } from "react";
import {Link} from 'react-router-dom';

import styles from "../css/home.module.css";
import data from "./data";


class Header extends Component {

    render() {
        return (
            <div className={styles.header_container}>
                <Link to="/"><h1>{data.fullname}</h1></Link>
                <nav>
                    <ul>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/experiences">Experiences</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header