# Reactions Viewer Automation

## Overview

This README.md is to explain the implementation of the Task assiged on the JavaScript function, `yourAutomation()` inside the [automations.js](https://github.com/amew0/intern-assessment/blob/main/automations.js#L52C1-L52C1) file, to automate the process of viewing and retrieving the names of individuals who reacted to a post on LinkedIn. The primary functionality includes clicking the reaction button, waiting for the reactions window to load, and extracting the names of users who reacted to the post.

## Features

- **Bonus Feature - Scrolling:** The function goes beyond the basic requirements by implementing a scrolling mechanism to extract names from the entire list of reactions. This is achieved by dynamically loading additional elements and scrolling through the reactions window.

- **Async Function for DOM Loading:** Utilizes an asynchronous function to wait for the DOM to be fully loaded before interacting with it. This ensures that all necessary elements are present and can be manipulated.

- **Alert and Console Output:** Due to the limited number of lines that `alert()` can display, the initial set of names is shown via an alert, and the comprehensive list is logged to the console. This allows for an extensive list of users who reacted to the post.

- **Adjustable Scroll Limit:** The scroll limit is set to 30, preventing excessive scrolling in case the number of elements to be added is very large. This provides control over the number of scrolls and avoids potential performance issues.

## Implementation Details

### Function Structure

- **Click Button and Wait Function:** The `clickButtonAndWait` function clicks the reaction button, waits for the reactions window to load, and returns a Promise.

- **Scrolling with Timer:** Implements a scrolling mechanism with a timer to handle the extraction of names. This is crucial for scenarios where the number of elements to be added is significant.


## Important Note

- **DOM Loading:** The function relies on an asynchronous approach to wait for the DOM to be fully loaded before interacting with it. This ensures the availability of all necessary elements.

- **Alert Limitations:** The use of `alert()` is limited in displaying a large number of names. For an extensive list, refer to the console log for a detailed output.

- **Bonus Task Completion:** The bonus task of scrolling to the bottom of the list is handled, providing a comprehensive view of all users who reacted to the post.

## Demo

A demo showcasing the functionality can be found at the following [link](https://kuacae-my.sharepoint.com/:v:/g/personal/100053678_ku_ac_ae/EbvvT2G5VFVPsWCAXnq0_NUBZEetTGdbcJyx1PJGi4sAUQ?e=dFEuaG)

---

*This task has been successfully completed, including the bonus points. ChatGPT was used to refine the documentation and improve the extraction of numbers using the JavaScript `.match()` finder.*