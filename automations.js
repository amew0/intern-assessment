console.log("SCRIPT LOADED");

// listening for click events
window.onclick = function (event) {
  if (event.target.matches("#toggle-dropdown")) {
    // show dropdown options
    var div = document.getElementById("dropdownContent");
    div.style.display = div.style.display !== "flex" ? "flex" : "none";
  }

  // This is the example automation
  if (event.target.matches(".example")) {
    exampleAutomations();
  }

  // This is where you will execute your automation
  if (event.target.matches(".execute-test")) {
    yourAutomation();
  }
};

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

// This is where you will write your automation
async function yourAutomation() {

  // FOR THE BONUS TASK - SCROLLING
  let numOfElementsToBeAdded=0; 

  async function clickButtonAndWait() {
    // Getting all the reaction buttons
    const allReactionsPosts = document.querySelectorAll(".t-black--light.display-flex.align-items-center.social-details-social-counts__count-value.t-12.hoverable-link-text");

    // Click the first button
    const firstReaction = allReactionsPosts[0];
    
    // FOR THE BONUS TASK - SCROLLING
    // Before clicking get the number of elements to be added
    const reactionsInfo = firstReaction.ariaLabel; // e.g. "Rhetora-ai and 1,234 people reacted to this"
    
    // Extracts the number from the string - handles 1,234
    const numExtracted = reactionsInfo.match(/\b\d{1,3}(,\d{3})*\b/) 
    numOfElementsToBeAdded = numExtracted ? parseInt(numExtracted[0].replace(/,/g, ''), 10) : null;

    firstReaction.click(); // Clicking the first button to open the reactions window

    // New elements are added to the DOM after clicking the button hence the need to wait for them to be added in Promise
    return new Promise((resolve) => { 
      // Checking for the new elements periodically
      const checkElementsInterval = setInterval(() => {
        const userReactedSelector = ".social-details-reactors-tab-body-list-item.artdeco-list__item.full-width";
        let usersReacted = document.querySelectorAll(userReactedSelector);
        
        if (usersReacted.length > 0) {  // Window is opened and user reactions are populated
          clearInterval(checkElementsInterval);
          
          let users = [];
          let usersString = "";

          // FOR THE BONUS TASK - SCROLLING
          function scrollWithTimer(scrollCount) {
            usersReacted = document.querySelectorAll(userReactedSelector);
            // The scrollCount is used to limit the number of scrolls to 30 in case the number of elements to be added is very large
            if ((usersReacted.length < numOfElementsToBeAdded) && (scrollCount <= 30)) {
                setTimeout(() => {
                  for (let i = 0; i < usersReacted.length; i++) {
                    try{
                    let userDetailsDiv = usersReacted[i];
                    
                    let user = {
                      name: userDetailsDiv.querySelector("div .inline-flex.full-width a .artdeco-entity-lockup__content .artdeco-entity-lockup__title span[aria-hidden=true]").innerText,
                      jobTitle: userDetailsDiv.querySelector("div .inline-flex.full-width a .artdeco-entity-lockup__content .artdeco-entity-lockup__caption").innerText,
                    };
  
                    let existingUser = users.find(u => u.name === user.name);
                    if (!existingUser) {
                      users.push(user);                     
                    }  
                    }
                    catch(err){} // sometimes the elements are not loaded properly and hence the catch block   
                  }
  
                  usersString = users
                    .map((user) => `Name: ${user.name} \nJob: ${user.jobTitle}`)
                    .join("\n\n");
  
                  if (scrollCount == 0) { 
                    alert("Check the console log for a detailed list.\n\n"+usersString); 
                  }
                    document.querySelector(".artdeco-modal__content").scrollTop += 300; // scroll down by 300px
                    // click the "Show more results" button if it exists
                    try {document.getElementsByClassName("artdeco-button artdeco-button--muted artdeco-button--1 artdeco-button--full artdeco-button--secondary ember-view scaffold-finite-scroll__load-button")[0].click();
                    } catch(err) {}
                    // Recursive call with an incremented scrollCount
                    scrollCount += 1;
                    scrollWithTimer(scrollCount);
                  }, 750); // Timer to wait for the scroll to complete
                
            } else {
              console.log(usersString); // Logging the result since alert() has limit on number of lines to display
            }
          }
          
          // Start scrolling with timer
          scrollWithTimer(0);       

        }
      }, 2000); // Timer to wait for the elements to be added - 2 seconds
    });
  }
  await clickButtonAndWait(); // till the reactions window pops up

}
