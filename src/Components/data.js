// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fullname: "Yingjie Qiao",
    name: "Yingjie",
    me_img: "me.png",
    intro: "I'm a Software Engineer. Currently a Final Year Computer Science student at Singapore " +
            "University of Technology and Design (SUTD), and looking for entry-level / fresh grad opportunities starting in 2022.",

    paragraph1:  "I aspire to build high-impact software products, " +
                "with attention to code details and scalable & maintainable architecture. " +
                "I enjoy solving problems with technology, and I constantly engage myself to new challenges " +
                "and to learn new skills. I believe constant self-learning is essential for a software engineer "+
                "to keep up with the fast-evolving technologies and to excel.",

    techstack: "I have experience in the following areas:",

    languages: [{"name": "Python"}, {"name": "Java"}, {"name": "JavaScript"}, 
                {"name": "HTML"}, {"name": "CSS"}, {"name": "C"}],
    web_fw: [{"name": "Flask"}, {"name": "FastAPI"}, {"name": "Express.js"}, {"name": "React.js"}],
    tools: [{"name": "Docker"}, {"name": "Kubernetes"}, {"name": "AWS"}, 
            {"name":  "Google Cloud"}, {"name": "Cloud Foundry"}, 
            {"name": "MongoDB"}, {"name": "PostgreSQL"}, {"name": "Jenkins"}, 
            {"name": "Andoird"}, {"name": "Ubuntu"}, {"name": "Node.js"}, 
            {"name": "Shell Script"}, {"name": "Git"}],

    contact_email: "yingjie_qiao@outlook.com",
    contact_link: [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/yingjie-qiao/"
        },
        {
            name: "GitHub",
            url: "https://github.com/YingjieQiao"
        }
    ],

    jobs: [
        {
            "name": "Binance",
            "title": "Software Engineer Intern @ Risk",
            "location_and_time": "Singapore, Jan 2022 - Apr 2022",
            "pointers": [
                "Working on Risk Management related backend development for Binance's transaction services using Java Spring framework.",
            ]
        },
        {
            "name": "SAP Asia",
            "title": "Software Engineer Intern @ AI Business Services",
            "location_and_time": "Singapore, May 2021 - Aug 2021",
            "pointers": [
                "Scalability - Implemented Message Queue between API interface and GPU computing cluster to make sure the service does not break under high traffic.",
                "Availability - Conducted various load test using locust and updated horizontal scaling policy.",
                "Updated Kubernetes deployment script for new OCR models with Grafana and Prometheus for monitoring.",
                "Updated to HTTPS connection using TLS certificates for the deployment of new OCR model to enhance security.",
                "OCR result visualization tool using React and FastAPI."
            ]
        },
        {
            "name": "Singapore University of Technology and Design",
            "title": "Research Assistant",
            "location_and_time": "Singapore, Aug 2020 - Oct 2020",
            "pointers": [
                "Contributed a VQA (Video Question Answering) Deep Learning model baseline as a contrasting experiment to " +
                "the paper “TrafficQA: A Question Answering Benchmark and an Efficient Network " +
                "for Video Reasoning over Traffic Events” – accepted by CVPR 2021.",
                "Managed the lab GPU server and deployed multiple Deep Learning experiments using Docker over time."                
            ]
        },
        {
            "name": "Jublia Pte Ltd",
            "title": "Software Engineer Intern @ TechOps",
            "location_and_time": "Singapore, May 2020 - Aug 2020",
            "pointers": [
                "Designed and implemented “Communication Automation” feature, " +
                "rewritten and created multiple new RESTful backend endpoints using Flask, " +
                "collaborating with frontend engineers on the web interface updates. " +
                "This feature automated the process of tracking fixed dates of multiple events at the same time for " +
                "Customer Success managers.", 

                "Migrated static assets from host servers to AWS S3 for better management and security. " +
                "Updated to AWS S3 API for related file-reading functions across all of Jublia’s codebases.", 

                "Refactored and added new features to server auto-deployment scripts, " +
                "consists of Python code and bash scripts.",
                
                "Developed a Python script that automates the deletion of previous quarters’ user data stored " +
                "in the databases hosted on AWS and Google Cloud.",

                "Delivered 10+ bug fixes across the system, such as maintenance of RESTful APIs, " +
                "refactoring of legacy code, etc."
            ]
        }
    ],

    schools: [
        {
            "name": "Singapore University of Technology and Design",
            "title": "Bachelor of Engineering, Computer Science and Design, Honours",
            "location_and_time": "Singapore, May 2019 - Present",
            "pointers": [
                "GPA: 4.66/5.00, expected Honours with Highest Distinction. ",
                "Recipient of MOE Senior Middle 2 (SM2) scholarship. ",
                "AY2019 - AY2020, AY2020 - AY2021 Honours List. Awarded to the top 10% of each student cohort in recognition of meritorious performance. "
            ]
        }
    ],

    projects: [
        {
            "name": "SingHealth Retail Management Platform",
            "images": [
                "singhealth.png",
            ],
            "pointers": [
                "A web platform to enable digitalization of SingHealth Retail Management. This is to help SingHealth manages the retail outlets under its hospitals digitally, including hygien non-conpliance, outlet evaluation, report and email automation, etc.",
                "Built with Flask, React, MongoDB and AWS Services.",
                
            ],
            "code": "https://github.com/YingjieQiao/SingHealth_Retail_Management_ESC"
        }
        ,{
            "name": "Kue",
            "images": [
                "kue1.png",
                "kue2.png",
                "kue3.png"
            ],
            "pointers": [
                "Kue is a Smart restaurant management and order tracking app, developed using Native Java. It provideds" + 
                "the following main functionalities that enable smart restaurant workflow management: ",
                "Cashier system - Food establishment able to add menu items, their respective costs and preparation timing into the application. When a customer orders food, cashiers will select items ordered in the app. When order is completed, QR code will be made available to scan for customers.",
                "Cooking system - each order will be added to the cooks’ page real time for cooks to prepare food orders. The cook will check each order item to update the waiters and customers when an order is done, and the customers will be notified via a web landing page.",
                "Landing page provides another layer of interaction with the customers- opening up a new path for connectivity between food establishments and their customers, where customers will be given their waiting time and be notified when the order is done, as well as a rating system.",
                "Data collection and analysis - We recognised that many data points are being collected during the usage of the application’s various functions, and that we could make use of these data to provide some analytics for the food establishments."
            ],
            "code": "https://github.com/YingjieQiao/kue"
        },

        {
            "name": "Automated Email Scheduler",
            "images": [
                "jublia.png",
            ],
            "pointers": [
                "This is one of the projects I've done during my internship at Jublia. An email scheduler is employed to send a series of emails for each event to engage the attendees from 1 week before the event until the end of the event. I designed a process such that all emails are automatically scheduled after the first “Launch Email” is sent.",
            ],
            "code": "https://github.com/YingjieQiao/FPGA_Snake_Game_Using_16bit_CPU"
        }
        
    ]
}