## Personal Website Configuration Guide (config.js)

This guide explains how to customize your personal website using the `config.js` file. 

**1. Location:**

The `config.js` file resides in the root directory of your website project.

**2. Structure:**

The file contains configuration options for various sections of your website. These options are defined as JavaScript objects and variables.

**3. Customization Options:**

**a) Personal Information:**

- `name`: Update this string with your full name.
- `title`: Edit this string to display your job title or a short description of yourself.
- `socialLinks`: This is an array of objects. Each object defines a social media link:

  ```javascript
  {
    id: "fb", // Unique identifier for the link (used for styling)
    url: "https://www.facebook.com/", // URL of the social media profile
    iconClass: "fa-brands fa-facebook" // Font Awesome icon class for the social media platform
  }
  ```

  You can add or remove social link objects as needed. Find Font Awesome icon classes for social media platforms here: [https://fontawesome.com/](https://fontawesome.com/)

- `profilePicture`: Set the path to your profile picture relative to the `images` folder in your project. For example, if your image is named `profile.jpg` within the `images` folder, set this to `"images/profile.jpg"`.

**b) Skills:**

- `skills`: This is an array of objects, where each object defines a skill:

  ```javascript
  {
    name: "HTML", // Skill name
    level: 70, // Proficiency level (percentage)
    color: "#f44" // Optional color class for the skill progress bar (default is black)
  }
  ```

  You can modify the existing skills, change their proficiency levels, and add new skills to this array.

**c) Education & Experience:**

- `education`: This is an array of objects, where each object defines an education entry:

  ```javascript
  {
    duration: "Aug 2022 - Present", // Duration of your education
    title: "Diploma in Computer Engineering", // Degree or diploma title
    institution: "Dr Subhash University" // Name of the university/college
  }
  ```

  You can add or remove education entries from this array.

- `experience`: This is similar to `education`, but defines your work experience entries. Edit the objects within this array to reflect your experience.

**4. Saving Changes:**

Once you've made your customizations in `config.js`, save the file. These changes will be reflected in your website when you run it.

**5. Additional Notes:**

- This configuration file allows you to personalize the core content of your website. 
- For more advanced customization, you can edit the HTML, CSS, and JavaScript files within the project, but that requires knowledge of those languages.

By following these steps, you can easily configure your personal website using the `config.js` file!