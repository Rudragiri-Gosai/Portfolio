## Getting Started with Your Personal Website Template

This is a basic template for creating your own personal website. It allows you to showcase your skills, experience, and projects in a visually appealing way.

### Prerequisites

Before you begin, make sure you have the following installed on your computer:

- A code editor (e.g., Visual Studio Code, Sublime Text)
- A basic understanding of HTML, CSS, and JavaScript (optional, but helpful)

### Setting Up

1. **Clone the Repository:**
   Open your terminal or command prompt and navigate to the directory where you want to create your website. Then, use the following command to clone this repository:

   ```bash
   git clone https://github.com/Rudragiri-Gosai/portfolio.git
   ```

2. **Open the Project:**
   Once the cloning is complete, navigate into the project directory:

   ```bash
   cd portfolio
   ```

### Customization

Now it's time to personalize the website!

1. **Open `config.js`:**
   This file contains configuration options for various aspects of your website. Open `config.js` in your code editor.

2. **Edit Your Information:**
   - **Personal Information:** Update the following sections with your details:
     - `name`: Your full name
     - `title`: Your job title or a short description of yourself
     - `socialLinks`: An array of objects containing links to your social media profiles. Each object should have properties for `id`, `url`, and `iconClass`. You can find Font Awesome icon classes [https://fontawesome.com/](https://fontawesome.com/) for social media platforms.
     - `profilePicture`: The path to your profile picture (relative to the `images` folder).
   - **Skills:** Modify the `skills` array to include your skills and their proficiency levels (percentage). You can also set optional color classes for the progress bars.
   - **Education and Experience:** Edit the `education` and `experience` arrays to add your educational background and work experience entries. Each entry should have properties for `duration`, `title`, and `institution/company`.

3. **Save Changes:**
   Save your changes to `config.js`.

> For more information open CONFIG.md
### Running the Website

1. **Open `index.html`:**
   Open `index.html` in your web browser to see your personalized website.

2. **Further Customization (Optional):**
   This template uses basic HTML, CSS, and JavaScript. If you have some experience with these languages, you can further customize the website's appearance and functionality by editing the relevant files (e.g., `style.css`, `script.js`).

**Additional Notes:**

- Font Awesome icons are used for social media links and skill progress bars. Make sure to include the Font Awesome library in your HTML file or link it remotely using a CDN.
- This is a basic website template, and you can add more features or sections to it as needed.

We hope this helps you create a fantastic personal website!