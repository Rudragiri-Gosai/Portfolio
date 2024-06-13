export class AboutPage {
  constructor(description) {
    this.description = description;
  }

  // Method to display user information on the Home page
  displayInfo() {
    document.getElementById("hero-subheading-a").textContent = this.description;
  }
}

export class Education {
  constructor(year, title, institution) {
    this.year = year;
    this.title = title;
    this.institution = institution;
  }

  createEducationElement() {
    const educationContainer = document.createElement("div");
    educationContainer.classList.add("container-edu");

    const yearElement = document.createElement("div");
    yearElement.classList.add("year");
    yearElement.textContent = this.year;

    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = this.title;

    const institutionElement = document.createElement("div");
    institutionElement.classList.add("at");
    institutionElement.textContent = this.institution;

    educationContainer.appendChild(yearElement);
    educationContainer.appendChild(titleElement);
    educationContainer.appendChild(institutionElement);

    return educationContainer;
  }
}

export class Experience {
  constructor(year, title, company) {
    this.year = year;
    this.title = title;
    this.company = company;
  }

  createExperienceElement() {
    const experienceContainer = document.createElement("div");
    experienceContainer.classList.add("container-exper"); // Matches your existing class name

    const yearElement = document.createElement("div");
    yearElement.classList.add("year");
    yearElement.textContent = this.year;

    const titleElement = document.createElement("div");
    titleElement.classList.add("title");
    titleElement.textContent = this.title;

    const companyElement = document.createElement("div");
    companyElement.classList.add("at");
    companyElement.textContent = this.company;

    experienceContainer.appendChild(yearElement);
    experienceContainer.appendChild(titleElement);
    experienceContainer.appendChild(companyElement);

    return experienceContainer;
  }
}

export class HomePage {
  constructor(name, heroDescription, socialLinks, picture) {
    this.name = name;
    this.heroDescription = heroDescription;
    this.socialLinks = socialLinks; // Array of social link objects
    this.picture = picture;
  }

  // Method to display user information on the Home page
  displayInfo() {
    document.getElementById("logo").textContent = this.name;
    document.getElementById("bhavya").textContent = this.name;
    document.getElementById("stack").textContent = this.heroDescription;

    // Update social links (assuming socialLinks objects have URL properties)
    const socialList = document.querySelector("#links");
    for (const link of this.socialLinks) {
      const socialItem = document.createElement("li");
      socialItem.id = link.id; // Add styling class
      socialItem.classList.add("social-item"); // Add styling class
      const socialLink = document.createElement("a");
      socialLink.href = link.url; // Set the URL from the socialLinks object
      socialLink.target = "_blank"; // Open link in a new tab
      socialLink.innerHTML = `<i class="${link.iconClass} "id="${link.id}"></i>`; // Set the social media icon
      socialItem.appendChild(socialLink);

      // Append the li element directly to the socialList (ul)
      socialList.appendChild(socialItem);
    }
    // Update hero image (assuming an element with ID 'hero-img' exists)
    const heroImage = document.getElementById("person");
    heroImage.src = this.picture; // Set the image source from the imagePath property
  }
}

export class SocialLink {
  constructor(id, url, iconClass) {
    this.id = id;
    this.url = url;
    this.iconClass = iconClass; // e.g., "fa-brands fa-facebook"
  }
}

export class Service {
  constructor(logoIcon, name, description) {
    this.logoIcon = logoIcon; // Font Awesome icon class name (e.g., "fa-solid fa-pager")
    this.name = name;
    this.description = description;
  }
  // Method to create the HTML structure for the service (optional)
  createServiceElement() {
    const service = document.createElement("div");
    service.classList.add("service");

    const serviceLogo = document.createElement("div");
    serviceLogo.classList.add("service-logo");
    const icon = document.createElement("i");
    const classListArray = this.logoIcon.split(" ");

    // Loop through the class names and add them to the icon element
    for (const className of classListArray) {
      icon.classList.add(className);
    }
    serviceLogo.appendChild(icon);

    const serviceName = document.createElement("div");
    serviceName.classList.add("service-name");
    serviceName.textContent = this.name;

    const serviceDescription = document.createElement("div");
    serviceDescription.classList.add("service-dets");
    serviceDescription.textContent = this.description;

    service.appendChild(serviceLogo);
    service.appendChild(serviceName);
    service.appendChild(serviceDescription);

    return service;
  }
}

export class Skill {
  constructor(name, level, colorClass = "#000") {
    // Optional color class for customization
    this.name = name;
    this.level = level;
    this.colorClass = colorClass; // Default empty string for optional color class
  }

  createSkillElement() {
    const skillContainer = document.createElement("div");
    skillContainer.classList.add("my-skill"); // Matches your existing class name

    const skillWrapper = document.createElement("div");
    skillWrapper.classList.add("container");

    const skillName = document.createElement("div");
    skillName.classList.add("skill-name"); // Add specific class for styling if needed
    skillName.style.color = this.colorClass;
    const skillNameText = document.createElement("p");
    skillNameText.textContent = this.name;
    skillName.appendChild(skillNameText);

    const skillLevel = document.createElement("div");
    skillLevel.classList.add("skill-no");

    const skillLevelText = document.createElement("p");
    skillLevelText.textContent = this.level + "%"; // Append percentage sign
    skillLevel.appendChild(skillLevelText);

    skillWrapper.appendChild(skillName);
    skillWrapper.appendChild(skillLevel);

    const skillProgress = document.createElement("div");
    skillProgress.classList.add("center-pro");

    const progressContainer = document.createElement("div");
    progressContainer.classList.add("process-con");

    const progressBar = document.createElement("div");
    progressBar.classList.add("process"); // Add color class if provided
    progressBar.style.width = this.level + "%";
    progressBar.style.backgroundColor = this.colorClass;

    progressContainer.appendChild(progressBar);
    skillProgress.appendChild(progressContainer);

    skillContainer.appendChild(skillWrapper);
    skillContainer.appendChild(skillProgress);

    return skillContainer;
  }
}
