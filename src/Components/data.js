export default {
    fullname: "Qiao Yingjie",
    name: "Yingjie",
    me_img: "me.png",
    intro: "I'm a Software Engineer. Currently a Final Year Computer Science student at Singapore " +
            "University of Technology and Design (SUTD), and working as a fullstack Software Engineer Intern at SAP.",

    paragraph1:  "I aspire to build high-impact software products, " +
                "with attention to code details and scalable & maintainable architecture. " +
                "I enjoy solving problems with technology, and I constantly engage myself to new challenges " +
                "and to learn new skills. I believe constant self-learning is essential for a software engineer "+
                "to keep up with the fast-evolving technologies and to excel.",

    techstack: "I have experience in the following areas:",

    languages: [{"name": "Python"}, {"name": "Java"}, {"name": "JavaScript"}, 
                {"name": "HTML"}, {"name": "CSS"}, {"name": "C"}],
    web_fw: [{"name": "Flask"}, {"name": "React"}, {"name": "Vue"}, {"name": "jQuery"}],
    tools: [{"name": "Docker"}, {"name": "Kubernetes"}, {"name": "AWS"}, {"name":  "Google Cloud"}, {"name": "Cloud Foundry"}, 
            {"name": "MongoDB"}, {"name": "SQLite"}, {"name": "Andoird"}, {"name": "Ubuntu"}, {"name": "Node.js"}, 
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
            "name": "SAP Asia",
            "title": "Software Engineer Intern @ AI Business Services",
            "location_and_time": "Singapore, May 2020 - present ",
            "pointers": [
                "Working on OCR services with high scalability and availability. " +
                "Preparing to launch a visualization platform for OCR results, for more efficient regression test"
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
                "GPA: 4.73/5.0, expected Honours with Highest Distinction.",
                "Recipient of SM2 scholarship, awarded for being the top 5% of students in top provincial high schools in China.",
                "AY2019 - AY2020 Honours List. Awarded to the top 10% of each student cohort in recognition of meritorious performance."
            ]
        },
        {
            "name": "Hengshui High School",
            "title": "",
            "location_and_time": "China, Sept 2016 - May 2018",
            "pointers": [
                "Completed all compulsory and elective math and science (Physics, Chemistry, Biology) courses in 2 years.",
                "Early graduation to proceed to university study in Singapore.                             "
            ]
        }
    ]
}