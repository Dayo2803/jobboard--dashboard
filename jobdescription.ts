export interface JobDetail {
    id:number;
    description: string;
    responsibilities: string[];
    skills: string[];
}

const JobDetailsData: JobDetail[] = [
    {
      id: 1,
      description: "We are seeking a talented Software Engineer to design, develop, and maintain our core applications. You will be responsible for writing clean, efficient, and scalable code.",
        responsibilities: [
            "Develop high-quality software solutions based on business requirements.",
            "Write and maintain efficient, reusable, and reliable code.",
            "Troubleshoot, debug, and optimize applications for maximum performance.",
            "Collaborate with cross-functional teams to deliver new features.",
            "Stay updated with emerging software technologies and best practices."
        ],
        skills: [
            "Proficiency in JavaScript, Python, or Java.",
            "Experience with frameworks like React, Node.js, or Spring Boot.",
            "Understanding of RESTful APIs and database design.",
            "Familiarity with Agile development methodologies.",
            "Strong problem-solving and debugging skills."
        ]
    },
    {
      id: 2,
      description: "We are looking for a skilled DevOps Engineer to help automate and streamline our operations and processes. You will work closely with developers and IT staff to ensure smooth deployment and system reliability.",
        responsibilities: [
            "Develop and maintain CI/CD pipelines.",
            "Monitor system performance and ensure high availability.",
            "Automate infrastructure provisioning using tools like Terraform.",
            "Collaborate with developers to optimize deployment workflows.",
            "Implement security best practices for cloud-based systems."
        ],
        skills: [
            "Experience with AWS, Azure, or Google Cloud.",
            "Proficiency in Kubernetes and Docker.",
            "Strong knowledge of CI/CD tools like Jenkins or GitHub Actions.",
            "Scripting experience with Bash, Python, or YAML.",
            "Infrastructure as Code (IaC) knowledge with Terraform or Ansible."
        ]
    },
    {
      id: 3,
      description: "We are seeking a talented Software Engineer to design, develop, and maintain our core applications. You will be responsible for writing clean, efficient, and scalable code.",
        responsibilities: [
            "Develop high-quality software solutions based on business requirements.",
            "Write and maintain efficient, reusable, and reliable code.",
            "Troubleshoot, debug, and optimize applications for maximum performance.",
            "Collaborate with cross-functional teams to deliver new features.",
            "Stay updated with emerging software technologies and best practices."
        ],
        skills: [
            "Proficiency in JavaScript, Node.js",
            "Experience with frameworks like React, Node.js, or Spring Boot.",
            "Understanding of RESTful APIs and database design.",
            "Familiarity with Agile development methodologies.",
            "Strong problem-solving and debugging skills."
        ]
    },
    {
      id: 4,
      description: "As a Full-Stack Developer, you will work on building scalable applications using modern front-end and back-end technologies.",
        responsibilities: [
            "Design and develop full-stack web applications.",
            "Work on both client-side and server-side development.",
            "Implement and optimize database queries and API calls.",
            "Ensure responsiveness and performance of applications.",
            "Maintain and improve existing codebases."
        ],
        skills: [
            "Experience with JavaScript, TypeScript, and React.js.",
            "Backend development with Node.js, Express, or Django.",
            "Knowledge of SQL and NoSQL databases like PostgreSQL or MongoDB.",
            "Understanding of authentication and authorization methods.",
            "Familiarity with cloud services like AWS, Firebase, or Heroku."
        ]
    },
    {
      id: 5,
      description: "We are seeking a talented Software Engineer to design, develop, and maintain our core applications. You will be responsible for writing clean, efficient, and scalable code.",
        responsibilities: [
            "Develop high-quality software solutions based on business requirements.",
            "Write and maintain efficient, reusable, and reliable code.",
            "Troubleshoot, debug, and optimize applications for maximum performance.",
            "Collaborate with cross-functional teams to deliver new features.",
            "Stay updated with emerging software technologies and best practices."
        ],
        skills: [
            "Proficiency in JavaScript, Python, or Java.",
            "Experience with frameworks like React, Node.js, or Spring Boot.",
            "Understanding of RESTful APIs and database design.",
            "Familiarity with Agile development methodologies.",
            "Strong problem-solving and debugging skills."
        ]
    },
    {
      id: 6,
      description: "We are seeking a talented Software Engineer to design, develop, and maintain our core applications. You will be responsible for writing clean, efficient, and scalable code.",
        responsibilities: [
            "Develop high-quality software solutions based on business requirements.",
            "Write and maintain efficient, reusable, and reliable code.",
            "Troubleshoot, debug, and optimize applications for maximum performance.",
            "Collaborate with cross-functional teams to deliver new features.",
            "Stay updated with emerging software technologies and best practices."
        ],
        skills: [
            "Proficiency in JavaScript, Python, or Java.",
            "Experience with frameworks like React, Node.js, or Spring Boot.",
            "Understanding of RESTful APIs and database design.",
            "Familiarity with Agile development methodologies.",
            "Strong problem-solving and debugging skills."
        ]
    },
];

export default JobDetailsData;
