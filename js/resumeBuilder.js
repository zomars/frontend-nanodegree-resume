var bio = {
    "name": "Omar López",
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
    "skills": [ "html5", "information architechture", "ux design", "ui development"]
};

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

/*
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
*/

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name),
    formattedRole = HTMLheaderRole.replace("%data%",bio.role),
    formattedImage = HTMLbioPic.replace("%data%",bio.image),
    formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcome);
    $("#header").append(formattedName,formattedRole);


}

work.display = function() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer),
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title),
        formattedEmpoyerTitle = formattedEmployer + formattedTitle,
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
        formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmpoyerTitle,formattedDates,formattedDescription);

    }
}

projects.display = function() {
    for (project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title),
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates),
        formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        for (picture in projects.projects[project].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[picture]);
            $(".project-entry:last").append(formattedImage);
        }

    }
}





function inName(){

    nameArray = name.trim().split(" ");
    console.log(nameArray);

    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0, 1).toUpperCase() + nameArray[0].slice(1).toLowerCase();

    return nameArray[0] + " " + nameArray[1];
}


bio.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
