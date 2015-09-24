/*
This is empty on purpose! Your code to build the resume will go here.
 */
var name = "Omar López";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front-End Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["html5", "information architechture", "ux design", "ui development"];

$("#header").append(formattedName);
$("#header").append(formattedRole);

var bio = {
    "name": "Omar",
    "role": "Front-End Developer",
    "contact": {
        "mobile": "(667) 2350818",
        "email": "omar@anclastudio.com",
        "twitter": "@zomars",
        "github": "zomars",
        "location": "Culiacán",
    },
    "picture": "images/fry.jpg",
    "welcome": "Hi, welcome to my online resume",
    "skills": skills
};

var work = {};
work.position = "Web Developer";
work.employer = "ANCLA Studio";
work.years = "2 years";
work.city = "Culiacán";

var education = {};

$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.contact);
$("#header").append(bio.picture);
$("#header").append(bio.welcome);
$("#header").append(bio.skills);