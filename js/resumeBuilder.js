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

var bio = {
    "name": "Omar",
    "role": "Front-End Developer",
    "welcomeMessage": "Hi, welcome to my online resume",
    "contacts": {
        "mobile": "(667) 2350818",
        "email": "omar@anclastudio.com",
        "twitter": "@zomars",
        "github": "zomars",
        "location": "Culiacán"
    },
    "picture": "images/fry.jpg",
    "skills": skills
}

var work = {
    "jobs": [
        {
            "employer": "ANCLA Studio",
            "title": "Front-End Developer",
            "location": "Culiacán",
            "dates": "November 2013 - Today",
            "description": "Graphic Design and Animation"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Caritas Diocesana",
            "dates": "September 2015",
            "description": "Website Development",
            "images": [
                {
                    "01": "images/project-01.jpg"
                }
            ]
        }
    ]
}

var education = {
    "schools": [
        {
            "name": "Universidad TecMilenio",
            "location": "Culiacán",
            "degree": "Graphic Design and Animation",
            "dates": 2012,
            "url": "http://tecmilenio.mx/"
        },
        {
            "name": "Universidad TecMilenio",
            "location": "Culiacán",
            "degree": "High School",
            "dates": 2008,
            "url": "http://tecmilenio.mx/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "dates": "September 2015 - Today",
            "url": "https://www.udacity.com/"
        }
    ]
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmpoyerTitle = formattedEmployer + " – " + formattedTitle;

    $(".work-enty:last").append(formattedEmpoyerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-enty:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-enty:last").append(formattedDescription);
}

$("#header").append(bio.name);
$("#header").append(bio.role);
$("#header").append(bio.contact);
$("#header").append(bio.picture);
$("#header").append(bio.welcome);
$("#header").append(bio.skills);

$("#main").append(internationalizeButton);

function inName(){

    nameArray = name.trim().split(" ");
    console.log(nameArray);

    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();

    return nameArray[0] + " " + nameArray[1];
}


// if (work.jobs.length > 0) {

//     var formattedJob = "";

//     for (job in work.jobs) {

//         formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job]);
//         $("#workExperience").append(formattedJob);

//     }

// }

