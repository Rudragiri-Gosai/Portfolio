import {
  AboutPage,
  Education,
  Experience,
  HomePage,
  Service,
  Skill,
  SocialLink,
} from "./controller/Controller.js";

// Create social link objects
const socialLinks = [
  new SocialLink("fb", "https://www.facebook.com/", "fa-brands fa-facebook"),
  new SocialLink("ld", "https://www.linkedin.com/", "fa-brands fa-linkedin"),
  new SocialLink("x", "https://www.x.com/", "fa-brands fa-x-twitter"),
  new SocialLink("yt", "https://www.youtube.com/", "fa-brands fa-youtube"),
];

// Create instances for all sections
const homePage = new HomePage(
  "Rudra",
  "Full Stack Website",
  socialLinks,
  "person.jpg"
);
const aboutPage = new AboutPage(
  "I am a Full Stack Web Developer, I love to make websites"
);

// Skills
const skills = [
  new Skill("HTML", 70, "#f44"),
  new Skill("CSS", 60, "#34f"),
  new Skill("JavaScript", 40, "black"),
  new Skill("React", 30, "blue"),
  new Skill("C", 20, "black"),
  new Skill("C++", 40, "Green"),
  new Skill("Java", 50, "black"),
  // ... more skills
];


// Services
const services = [
  new Service(
    "fa-solid fa-pager logo-service",
    "Landing Page",
    "I will make Landing page using HTML"
  ),
  new Service(
    "fa-solid fa-fill-drip logo-service",
    "UI Design",
    "I will make Landing page using Figma"
  ),
  new Service(
    "fa-solid fa-robot logo-service",
    "Automation",
    "I will do automation using Python"
  ),
];

// Education
const education1 = new Education(
  "Juune 2024 - Present",
  "Diploma in Computer Engineering",
  "Dr Subhash University"
);

// Experience
const experience1 = new Experience(
  "Dec 2023 - Present",
  "Internship",
  "Hopiant Pvt. Ltd."
);

// Ingnore this

// Call displayInfo for HomePage and AboutPage
homePage.displayInfo();
aboutPage.displayInfo();

// Skill
const skillContainer = document.querySelector(".allskills");
for (const skill of skills) {
  const skillElement = skill.createSkillElement();
  skillContainer.appendChild(skillElement);
}

// Service
const serviceContainer = document.querySelector(".services");
for (const service of services) {
  const serviceElement = service.createServiceElement();
  serviceContainer.appendChild(serviceElement);
}

// Education
const educationContainer = document.querySelector("#ed");
const educationElements = [education1 /* ... more education instances */];
for (const education of educationElements) {
  const educationElement = education.createEducationElement();
  educationContainer.appendChild(educationElement);
}

// Experience
const experienceContainer = document.querySelector("#ex");
const experienceElements = [experience1 /* ... more experience instances */];
for (const experience of experienceElements) {
  const experienceElement = experience.createExperienceElement();
  experienceContainer.appendChild(experienceElement);
}