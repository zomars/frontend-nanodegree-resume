var data = "%data%";
var $header = $("#header");

var bio = {
    "name": "Omar López",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "(667) 1654987",
        "email": "omar@anclastudio.com",
        "twitter": "@zomars",
        "github": "zomars",
        "location": "Culiacán",
    },
    "picture": "images/fry.jpg",
    "welcome": "Hi, welcome to my online resume",
    "skills": [
        "html5",
        "information architechture",
        "ux design",
        "ui development"
    ],
    display: function() {
        var formattedName = HTMLheaderName.replace(data, bio.name),
        formattedRole = HTMLheaderRole.replace(data,bio.role),
        formattedImage = HTMLbioPic.replace(data,bio.picture),
        formattedMessage = HTMLwelcomeMsg.replace(data,bio.welcome),
        formattedMobile = HTMLmobile.replace(data,bio.contacts.mobile),
        formattedEmail = HTMLemail.replace(data,bio.contacts.email),
        formattedTwitter = HTMLtwitter.replace(data,bio.contacts.twitter),
        formattedGithub = HTMLgithub.replace(data,bio.contacts.github);

        $header.prepend(
            formattedName,
            formattedRole
        );
        $("#topContacts").append(
            formattedMobile,
            formattedEmail,
            formattedTwitter,
            formattedGithub
        );
        $header.append(
            formattedImage,
            formattedMessage,
            HTMLskillsStart
        );
        $("#footerContacts").append(
            formattedMobile,
            formattedEmail,
            formattedTwitter,
            formattedGithub
        );

        for(var skill in bio.skills) {
            var formattedSkills = HTMLskills.replace(data, bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "ANCLA Studio",
            "title": "Front-End Developer",
            "location": "Culiacán",
            "dates": "November 2013 - Today",
            "description": "UX Consulting and Front-End Development"
        },
        {
            "employer": "Studio Moza",
            "title": "Web Developer",
            "location": "Palm Springs",
            "dates": "February 2013 - November 2013",
            "description": "Wordpress Development"
        }
    ],
    display: function() {
        for (var job in work.jobs) {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace(
                data, work.jobs[job].employer
            ),

            formattedTitle = HTMLworkTitle.replace(
                data, work.jobs[job].title
            ),

            formattedEmpoyerTitle = formattedEmployer + formattedTitle,

            formattedDates = HTMLworkDates.replace(
                data, work.jobs[job].dates
            ),

            formattedDescription = HTMLworkDescription.replace(
                data, work.jobs[job].description
            );

            $(".work-entry:last").append(
                formattedEmpoyerTitle,
                formattedDates,
                formattedDescription
            );

        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Caritas Diocesana",
            "dates": "September 2015",
            "description": "Website Development",
            "images": [
                "images/project_image_01.jpg"
            ]
        },
        {
            "title": "Los Arcos Restaurant",
            "dates": "September 2015",
            "description": "Website Development",
            "images": [
                "images/project_image_02.jpg"
            ]
        },
        {
            "title": "Sinhue Manjarrez",
            "dates": "August 2015",
            "description": "Website Development",
            "images": [
                "images/project_image_03.jpg"
            ]
        }
    ],
    display: function() {
        for (var project in projects.projects) {

            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(
                data, projects.projects[project].title
            ),

            formattedDates = HTMLprojectDates.replace(
                data, projects.projects[project].dates
            ),

            formattedDescription = HTMLprojectDescription.replace(
                data, projects.projects[project].description
            );

            $(".project-entry:last").append(
                formattedTitle,
                formattedDates,
                formattedDescription
            );

            var imageArray = projects.projects[project].images;

            for (var picture in imageArray) {

                var formattedImage = HTMLprojectImage.replace(
                    data, imageArray[picture]
                );

                $(".project-entry:last").append(formattedImage);

            }

        }
    }
};

var education = {
    "schools": [
        {
            "name": "Universidad TecMilenio",
            "location": "Culiacán",
            "degree": "Graphic Design and Animation",
            "dates": 2012,
            "url": "http://tecmilenio.mx/",
            "major": "Design"
        },
        {
            "name": "Universidad TecMilenio",
            "location": "Culiacán",
            "degree": "High School",
            "dates": 2008,
            "url": "http://tecmilenio.mx/",
            "major": "Design"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Nanodegree",
            "school": "Udacity",
            "dates": "September 2015 - Today",
            "url": "https://www.udacity.com/"
        }
    ],
    display: function() {
        for (var school in education.schools) {

            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace(
                data, education.schools[school].name
            ),

            formattedDegree = HTMLschoolDegree.replace(
                data, education.schools[school].degree
            ),

            formattedDates = HTMLschoolDates.replace(
                data, education.schools[school].dates
            ),

            formattedLocation = HTMLschoolLocation.replace(
                data, education.schools[school].location
            ),

            formattedMajor = HTMLschoolMajor.replace(
                data, education.schools[school].major
            );

            $(".education-entry:last").append(
                formattedName+formattedDegree,
                formattedDates,
                formattedLocation,
                formattedMajor
            );

        }

        if (education.onlineCourses) {

            $("#education").append(HTMLonlineClasses);

            for (var course in education.onlineCourses) {

                $("#education").append(HTMLschoolStart);

                var formattedTitle = HTMLonlineTitle.replace(
                    data, education.onlineCourses[course].title
                ),

                formattedSchool = HTMLonlineSchool.replace(
                    data, education.onlineCourses[course].school
                ),

                formattedOnlineDates = HTMLonlineDates.replace(
                    data, education.onlineCourses[course].dates
                ),

                formattedURL = HTMLonlineURL.replace(
                    data, education.onlineCourses[course].url
                );

                $(".education-entry:last").append(
                    formattedTitle+formattedSchool,
                    formattedOnlineDates,
                    formattedURL
                );

            }
        }

    }
};

function inName(){

    nameArray = bio.name.trim().split(" ");
    console.log(nameArray);

    nameArray[1] =  nameArray[1].toUpperCase();
    nameArray[0] =  nameArray[0].slice(0, 1).toUpperCase() +
                    nameArray[0].slice(1).toLowerCase();

    return nameArray[0] + " " + nameArray[1];
}


bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
