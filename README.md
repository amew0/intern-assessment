# Internship Assessment

## Introduction
Thank you for your interest in being a part of the team!
The task involves automating LinkedIn interactions, specifically extracting the names of individuals who have reacted to a post on your linkedin feed. This is a practical exercise reflecting some of the actual work you might encounter in the role.
This Github repository contains a chrome extension with all the necessary setup for you to execute on the task.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development.

#### Forking the project
  1. Navigate to the main page of the repository.
  2. In the top-right corner of the page, click the "Fork" button.
  3. This will create a copy of the repository in your GitHub account. You will be redirected to this new repository
  4. Clone your forked repo on you local machine
     
#### Installing the Extension
  1. Type in `chrome://extensions` on a Google Chrome tab.
  2. In the top right corner of the page, enable "Developer Mode"
  3. Now on the left hand side of the page, you'll find a button that says "Load Unpacked"
  4. Upload the source directory you cloned

![293464550-23dd03e3-2c37-44f1-b039-39238be1a334](https://github.com/Rhetora-ai/intern-assessment/assets/127103858/3dbe8c19-75e1-4c05-b141-a425d3a91551)

## Implementation
Now that the extension is installed, head over to your [linkedin homepage](https://linkedin.com), you should find a little button on the left hand side that says "Automations". 
Upon clicking, under it you'll find 2 buttons. One that executes an example, and the next one is for your task.

<img src="https://github.com/Rhetora-ai/intern-assessment/assets/127103858/8621d976-25d9-4241-b29a-e5adb65e517e" height="500"> ![3](https://github.com/Rhetora-ai/intern-assessment/assets/127103858/1057059f-2f5e-40a2-92b6-b0d339522f06)

### Instructions

You will be working on the `automations.js` file. Inside it, you'll find the implemention for the example automation I provided as well.

 ```javascript
  window.onclick = function (event) {
  if (event.target.matches("#toggle-dropdown")) {
    var div = document.getElementById("dropdownContent");
    console.log(div.style.display);
    div.style.display = div.style.display !== "flex" ? "flex" : "none";
  }

  // This is the example automation
  if (event.target.matches(".example")) {
    exampleAutomation();
  }

  // This is where you will execute your automation
  if (event.target.matches(".execute-test")) {
    yourAutomation();
  }
};
```
#### Example
The example provided simply extracts a list of visible users on the Linkedin feed and maps both their names and jobtitle. The result is then displayed with the `alert()` method.

```javascript
function exampleAutomations() {
  let users = [];

  // Get all divs in the feed containing the user details of each post
  const userDetailsDivs = document.querySelectorAll(
    ".update-components-actor__meta"
  );

  for (let i = 0; i < userDetailsDivs.length; i++) {
    const userDetailsDiv = userDetailsDivs[i];

    // extracting the name and job title
    const user = {
      name: userDetailsDiv.querySelector(
        '.update-components-actor__name span[aria-hidden="true"]'
      ).innerText,
      jobTitle: userDetailsDiv.querySelector(
        '.update-components-actor__description span[aria-hidden="true"]'
      ).innerText,
    };
    users.push(user);
  }
  const usersString = users
    .map((user) => `Name: ${user.name} \nJob: ${user.jobTitle}`)
    .join("\n\n");

  alert(usersString);
}
```

#### Example Output
![4](https://github.com/Rhetora-ai/intern-assessment/assets/127103858/0ef580c9-55e8-4032-b909-10c9ba4066f2)

### Your Task
As mentioned earlier, your task is to write a function that clicks to view the reactions of any post on the screen and return the list of names of people who liked the post. 
You are to display the list of names using the alert() as shown in the example function. (Bonus points if you're able to extract all the names who liked/reacted with the post i.e. scroll down to the bottom of the list)

<img src="https://github.com/Rhetora-ai/intern-assessment/assets/127103858/7987194f-5ee9-49f5-9b9b-983e4ac95542" height="400"> 

### Testing
Due to this being a chrome extension, you will need to refresh the page for your changes to reflect on the screen (No hot reloading :/). If that doesnt work, try updating or re-installing the extension in `chrome://extensions`


## Considerations & Submission

Don't worry if you are unable to complete the task successfully, the purpose of this project is to gauge your thought process and problem solving skills. Feel free to leverage AI tools like ChatGPT as you see fit.

As part of your submission, I would like you to document the entire process including any challenges you may have faced and how you solved them, Include this in your README file.
(P.s. If you used ChatGPT, i'd like to know how you used it too!)

Simply shoot me an email with a link to your repository with a READMe file when you're done (Do not open a pull request!). Happy Coding! 

Do reach out to me if you're having difficulty setting the project up or if the instruction aren't clear enough.


