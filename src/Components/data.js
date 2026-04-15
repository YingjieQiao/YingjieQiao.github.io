// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fullname: "Yingjie Qiao",
    name: "Yingjie",
    me_img: "/me.png",
    intro: "I'm a Software Engineer. Currently, I am working at ByteDance Singapore on Risk Control & Compliance solutions that support the payment services at ByteDance / TikTok. Previously, I worked on similar Risk Management solutions at Binance, and OCR softwares at SAP during my internships. " + 
            "I graduated with a Computer Science degree from Singapore " +
            "University of Technology and Design (SUTD) in Sept 2022.",

    paragraph1: "As an engineer, I aspire to build high-impact software products, " +
                "with attention to code details and scalable & maintainable architecture. " +
                "I enjoy solving problems with technology, and I constantly engage myself to new challenges " +
                "and to learn new skills. I believe constant self-learning is essential for a software engineer "+
                "to keep up with the fast-evolving technologies and to excel.",

    techstack: "I have experience in the following areas:",

    languages: [{"name": "Golang"}, {"name": "Python"}, {"name": "Java"}, 
                {"name": "JavaScript"}, {"name": "C"}],
    web_fw: [{"name": "Kitex"},  {"name": "Hertz"},  {"name": "Flask"}, {"name": "FastAPI"}, {"name": "Spring"}, {"name": "Express.js"}, {"name": "React.js"}],
    tools: [{"name": "PostgreSQL"}, {"name": "MongoDB"}, {"name": "Docker"}, {"name": "Kubernetes"}, {"name": "AWS"}, 
            {"name":  "Google Cloud"}, {"name": "Jenkins"}, 
            {"name": "Android"}, {"name": "Linux CLI"}, {"name": "Node.js"}, 
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
            "name": "ByteDance",
            "title": "Software Engineer II @ Global Payment",
            "location_and_time": "Singapore, Sep 2022 - current",
            "pointers": [
                "Delivered KYC solutions that supported TikTok PayLater (BNPL) rollout and subsequent loan business model iteration SEA (ID, PH, MY, TH, VN) and LATAM (MX, BR), onboarded >1.4M users and contributed to ~77.78M USD TPV annually. Working on other financial loan products such as merchant cash loan in SEA and LATAM too.",
                "Designed and developed the first systematic disaster recovery solution in the team, reducing KYC vendor outage MTTR (mean time to recovery) down to < 15 minutes.",
                "Fraudulent transaction detection based on Visa CyberSource and in-house decision engine.",
                "Chargeback operations with 9 payment channels (PayPal, Stripe, Adyen, WorldPay, etc) handling transaction amount > 4M USD",
                "Designed a data synchronization service using MySQL binlog and Elasticsearch for KYC case review platform, aggregating multiple upstream relational databases into a unified data model and eliminating expensive SQL joins by offloading queries to Elasticsearch. Supported 11K+ KYC cases/day and used by 100+ business operation colleagues across US, EU, and APAC."
            ]
        },
        {
            "name": "Binance",
            "title": "Software Engineer Intern @ Risk",
            "location_and_time": "Singapore, Jan 2022 - Apr 2022",
            "pointers": [
                "Worked on Risk Management related backend development for Binance's transaction chargeback services using Java Spring framework.",
                "Integrated and maintained external service providers such as Visa CyberSource, Ekata, etc."
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
                "Updated to HTTPS connection using TLS certificates for the deployment of new OCR model to enhance security."
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
                
                "Built a Python-based data lifecycle automation tool to purge outdated user data across AWS and Google Cloud databases, improving storage efficiency and ensuring compliance with data retention policies.",

                "Delivered 10+ bug fixes across the system, including maintenance of RESTful APIs, " +
                "refactoring of legacy code, etc."
            ]
        }
    ],

    schools: [
        {
            "name": "Singapore University of Technology and Design",
            "title": "Bachelor of Engineering, Computer Science and Design, Honours",
            "location_and_time": "Singapore, May 2019 - Aug 2022",
            "pointers": [
                "GPA: 4.36/5.00, Honours with Distinction. ",
                "Recipient of MOE Senior Middle 2 (SM2) scholarship. ",
                "AY2019 - AY2020, AY2020 - AY2021 Honours List. Awarded to the top 10% of each student cohort in recognition of meritorious performance. "
            ]
        }
    ],

    projects: [
        {
            "id": "singhealth",
            "name": "SingHealth Retail Management Platform",
            "images": [
                "/singhealth.png",
            ],
            "pointers": [
                "A web platform to enable digitalization of SingHealth Retail Management. This is to help SingHealth manages the retail outlets under its hospitals digitally, including hygien non-conpliance, outlet evaluation, report and email automation, etc.",
                "Built with Flask, React, MongoDB and AWS Services.",
                
            ],
            "code": "https://github.com/YingjieQiao/SingHealth_Retail_Management_ESC",
            "markdownFile": "/projects/singhealth.md"
        }
        ,{
            "id": "kue",
            "name": "Kue",
            "images": [
                "/kue1.png",
                "/kue2.png",
                "/kue3.png"
            ],
            "pointers": [
                "Kue is a Smart restaurant management and order tracking app, developed using Native Java. It provideds" + 
                "the following main functionalities that enable smart restaurant workflow management: ",
                "Cashier system - Food establishment able to add menu items, their respective costs and preparation timing into the application. When a customer orders food, cashiers will select items ordered in the app. When order is completed, QR code will be made available to scan for customers.",
                "Cooking system - each order will be added to the cooks’ page real time for cooks to prepare food orders. The cook will check each order item to update the waiters and customers when an order is done, and the customers will be notified via a web landing page.",
                "Landing page provides another layer of interaction with the customers- opening up a new path for connectivity between food establishments and their customers, where customers will be given their waiting time and be notified when the order is done, as well as a rating system.",
                "Data collection and analysis - We recognised that many data points are being collected during the usage of the application’s various functions, and that we could make use of these data to provide some analytics for the food establishments."
            ],
            "code": "https://github.com/YingjieQiao/kue",
            "markdownFile": "/projects/kue.md"
        },

        {
            "id": "email-scheduler",
            "name": "Automated Email Scheduler",
            "images": [
                "/jublia.png",
            ],
            "pointers": [
                "This is one of the projects I've done during my internship at Jublia. An email scheduler is employed to send a series of emails for each event to engage the attendees from 1 week before the event until the end of the event. I designed a process such that all emails are automatically scheduled after the first “Launch Email” is sent.",
            ],
            "code": "https://github.com/YingjieQiao/FPGA_Snake_Game_Using_16bit_CPU",
            "markdownFile": "/projects/email-scheduler.md"
        }
        
    ]
}