import React from "react";
import { TypeAnimation } from "react-type-animation";
import ImageSlider from "./imageSlider";
import SkillsGrid from "./skillset";
import ExperienceDetails from "./experiencedetails";
import EducationDetails from "./educationdetails";

const skills = [
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "Kotlin",
  "MySQL",
  "LINQ",
  "MongoDB",
  "HTML",
  "CSS",
  "Next.JS",
  "SFML (C++)",
  "Selenium Web Driver (Java)",
  "REST Assured API Automation (Java)",
  "Cypress.io",
  "e2e_Component based testing",
  "Jmeter",
  "Appium",
  "GitHub",
  "JIRA",
  "BitBucket",
  "Tailwind CSS",
];

const AboutPage = () => {
  return (
    <div className="w-full h-full overflow-auto flex flex-col items-center px-6">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "Embracing change with resilience",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "Thrives in dynamic environments",
          1000,
          "Endures, adapts, emerges stronger",
          1000,
          "Confident leader, assertive strength",
          1000,
        ]}
        className="text-6xl inline-block"
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />

      <div className="grid w-full grid-cols-1 md:grid-cols-6 gap-4 md:gap-16 pt-6">
        <div className="col-span-1 md:col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg md:text-xl font-bold uppercase text-black/75 text-center">
            Life Story
          </h2>
          <p className="font-medium text-justify whitespace-pre-line">
            Hi, I'm Sree Sai Ogeti , I have 6 years of dedicated experience in
            Software Quality Assurance expertise in ensuring software
            reliability and functionality. My journey has been marked by
            mastering testing methodologies, including manual and automated
            processes, and becoming very skilled at identifying and resolving
            defects.
          </p>
          <p className="my-4 font-medium text-justify whitespace-pre-line">
            I embarked on a transformative path by pursuing a Master's Degree in
            Software Development at the University of Utah. I cultivated a
            robust understanding of fundamental software engineering concepts.
            My ultimate goal was to expand my expertise into the realm of
            problem analysis and contribute to all stages of business
            development within a software organization. I was excited about the
            opportunity to leverage my unique background and skills to drive
            innovation and excellence.{" "}
          </p>
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg md:text-xl font-bold uppercase text-black/75 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="w-full p-2 md:p-4 bg-gray-200 text-black rounded hover:bg-black hover:text-white"
              >
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-6 gap-4 md:gap-16 pt-6">
        <div className="col-span-1 md:col-span-3 flex flex-col items-start justify-start">
          <h2 className="mb-4 text-lg md:text-xl font-bold uppercase text-black/75 text-center">
            Experience
          </h2>
          <div className="w-full mx-auto relative">
            <ul>
            <ExperienceDetails
                position="Computer QA Assitant"
                company="University of Utah"
                companylink="https://sudo.utah.edu/teams.php"
                address="Salt Lake City, US"
                time="Nov-2022 - May 2024"
                work="I developed end-to-end (e2e) automated test scripts using Cypress for React components within university website portals, ensuring software quality standards were met throughout the development lifecycle. This involved analyzing test results, identifying defects, and collaborating with cross-functional teams to troubleshoot issues. Additionally, I assisted faculty by preparing and delivering lectures, leading discussion sections, and providing one-on-one support to students. Moreover, I utilized continuous integration/continuous deployment (CI/CD) pipelines to integrate automated tests, enabling timely feedback and facilitating rapid iterations in the software development process."
              />
              <ExperienceDetails
                position="Software Developer in Test"
                company="Turvo India Private Limited"
                companylink="https://turvo.com"
                address="Hyderabad, India"
                time="Apr-2020 - Aug 2022"
                work="Worked on the team responsible for Quality Assurance of developed products in various environments, handled both Manual and Automation and actively contributed to the release life cycle. Served as a Subject Matter Expert (SME), actively contributing to feature enhancements and providing KT to support developers"
              />
              <ExperienceDetails
                position="Software Engineer(QA Automation Engineer)"
                company="Infosys Private Limited"
                companylink="https://www.infosys.com"
                address="Hyderabad, India"
                time="Jun-2018 - Apr 2020"
                work="Worked on the team responsible for conducting Integration Testing for a banking client. My responsibilities included the continuous maintenance and development of an extensive UI Test Suite. Performed White Box and Black Box testing on need basis during the Software Release."
              />
            </ul>
          </div>
        </div>
        <div className="col-span-3 flex flex-col items-start justify-start pt-6">
          <h2 className="mb-4 text-lg font-bold uppercase text-black/75 text-center">
            Education
          </h2>
          <div className="w-full mx-auto relative">
            <ul>
              <EducationDetails
                type="Masters in Computer Software Development (MS)"
                schoolLink="https://msd.utah.edu"
                place="University of Utah (UOU)"
                time="Aug-2022 - Dec 2023"
                gpa="3.97/4"
                info="Course Work :: Data-Structures & Algorithms, Computer Operating Systems, Computer Networking, Database Management Systems, Data Visualization & Analytics, Android Programming"
              />
              <EducationDetails
                type="Bachelors of Technology in Bio-Technology (BTech)"
                schoolLink="https://www.nitap.ac.in"
                place="National Institute of Technology, Arunachal Pradesh (NITAP) India"
                time="Jun-2014 - Apr 2018"
                gpa="8.66/10 | Gold Medalist"
                info="Coursework includes Bio-Tech Subjects in Engineering prospective"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
