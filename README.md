# FoodFind

FoodFind is an app that allows users to find the next restaurant they should eat at.

![FoodFind in Mobile and Desktop](/images/appInDevices.png?raw=true "Apps in Devices")

## Project Status
Production has finished on this app! I had a great time working on this, but I'm ready to take what I've learnt and put it towards something new.

## Description

Using Vanilla JavaScript, this app uses objects to display all information to the user. Users are able to filter through restaurants, view restaurant information, and also view the restaurants menu. 

### Technologies Used
- HTML/CSS
- Vanilla JavaScript (forEach loops, DOM Manipulation, template literals, event listeners)

Using JavaScript Objects to populate all information on a web page was a first for me, but this definitely gave me a great bit of practice.

### Challenges
CSS Classes - With this project I was more strategic with how I assigned classes. This was beneficial when it came to styling objects similarly, and also styling objects differently when it came to different media queries.

Template Literals - These have changed everything! I used them a lot with this app and see how helpful they are. I remember wondering how I could either display "open - close" time or just "CLOSED" and was jumping for joy when I realized I could simply use a function in a template literal.

Global Variables - When looking at my code now, I'm seeing that I think I could have been more strategic with how many variables I made in the global scope. My original intention was to minimize using 'document.getElementByID' all the time, but now seems counterintuitive as not many of them were reused across my script file. It didn't seem to create any problems with the application running, but after looking into issues that can occur (coupling, reassigning values etc.) it's something I'll think more about with my next app!

Large Images - When first arriving to the page, the images take a second to load. After trying to make them small and running through tiny.png, it doesn't seem to have made a large difference. There's definitely a way to make them load faster, or maybe creating a page loader before the app appears could be another solution.

## Live Demo
[Check it out here!](https://danacarroll.com/foodFind)

## App Shots
###
![App Home Page - Desktop](/images/ss-appHome.png?raw=true "App Home")

On this page users are able to filter through restaurants and select what they might like.

![Restaurant HomePage - Desktop](/images/ss-restHome.png?raw=true "Restaurant Home")

Here is the Restaurant Homepage for Five Vines, all information is populated using the restaurant object.

![Restaurant Menu - Desktop](/images/ss-restMenu.png?raw=true "Restaurant Menu")

By clicking the Menu tab users are able to view the restaurant's menu, with each items pricing and description on display. They can also navigate back to the apps homepage in the top left corner.


