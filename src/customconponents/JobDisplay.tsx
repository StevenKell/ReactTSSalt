import { Card, CardProps, GridLayout } from "@salt-ds/core";
import type { ReactElement } from "react";
import styles from "/src/index.module.css";

  



export const JobDisplay = (): ReactElement =>  {
    
     const jobList = [
        {
            title: "Software Engineer",
            company: "Google",
            location: "Mountain View, CA",
            description: "We are looking for a software engineer to join our team. You will be responsible for designing and implementing new features for our flagship product.",
            requirements: ["Bachelor's degree in Computer Science or related field", "5+ years of experience in software engineering", "Proficient in Java, Python, and C++", "Experience with cloud technologies such as AWS, GCP, or Azure", "Strong problem-solving skills and attention to detail"],
            salary: "$120,000 - $150,000 per year",
            benefits: ["Medical, dental, and vision insurance", "401(k) retirement plan with employer match", "Paid time off and holidays", "Flexible work schedule", "Company-sponsored events and team-building activities"],
            applyLink: "https://careers.google.com/jobs/results/123456789/"
        },
        {
            title: "Data Scientist",
            company: "Facebook",
            location: "Menlo Park, CA",
            description: "We are seeking a data scientist to join our team. You will be responsible for analyzing large datasets and developing predictive models to improve our advertising platform.",
            requirements: ["Master's degree in Statistics, Computer Science, or related field", "3+ years of experience in data science", "Proficient in R, Python, and SQL", "Experience with machine learning and statistical modeling", "Strong communication and presentation skills"],
            salary: "$130,000 - $160,000 per year",
            benefits: ["Medical, dental, and vision insurance", "Stock options and equity grants", "Paid time off and holidays", "On-site gym and wellness center", "Company-sponsored events and team-building activities"],
            applyLink: "https://www.facebook.com/careers/jobs/123456789/"
        }
        
        
    ]
    
    return (
    
<Card style={{ width: "100%", height: "100%" }}>
        <GridLayout>
            
                <h1>Job List</h1>
    <p id="job-list"></p>



        </GridLayout>
    </Card>
    );   
};


