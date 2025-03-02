export interface Job {
    id: number;
    company: string;
    title: string;
    image: string;
    salary: string;
    location: string;
    jobtype: string;
}

const JobData: Job[] = [
    {
      id: 1,
      company: "TechCorp",
      title: "Software Engineer",
      image: "/images/c1.png",
      salary: "35k - 40k",
      location: "London, UK",
      jobtype: "Full-time",
    },
    {
      id: 2,
      company: "CloudNet",
      title: "DevOps Engineer",
      image: "/images/c2.png",
      salary: "35k - 40k",
      location: "Pakistan",
      jobtype: "Full-time",
    },
    {
      id: 3,
      company: "Frontend Masters",
      title: "Frontend Engineer", 
      image: "/images/c3.png",
      salary: "45k - 50k",
      location: "Kolkata, India",
      jobtype: "Full-time",
    },
    {
      id: 4,
      company: "Backend Solutions",
      title: "Backend Developer",
      image: "/images/c4.png",
      salary: "25k - 30k",
      location: "USA",
      jobtype: "Part-time",
    },
    {
      id: 5,
      company: "Fullstack Hub",
      title: "Fullstack Developer",
      image: "/images/c5.png",
      salary: "55k - 60k",
      location: "Australia",
      jobtype: "Full-time",
    },
    {
      id: 6,
      company: "Creative Studio",
      title: "Web Designer",
      image: "/images/c6.png",
      salary: "25k - 30k",
      location: "Canada",
      jobtype: "Freelance",
    },
];

export default JobData;
