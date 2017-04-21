var message = ""; //array of objects holding list of students

var student = [

    {
        name: "David Johnson",
        age: "23",
        course: "Java",
        level: "Guru"
    },

    {
        name: "David Johnson",
        age: "24",
        course: "HTML",
        level: "Professional"
    },

    {
        name: "Brigita Popovic",
        age: "28",
        course: "PHP",
        level: "intermediate"
    },

    {
        name: "John Lennon",
        age: "23",
        course: "HTML",
        level: "Rookie"
    }

];

function print(report) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = report;
}

while (true) {

    var input = prompt("Please insert name of student...");
    input = input.toLowerCase();
    if (input === "quit" || input === null) {
        break;
    }

    for (var key in student) {
        if (input === student[key].name.toLowerCase().startsWith(input + ' ')) {
            message += ("<h2>Student: " + student[key].name + "</h2>");
            message += ("<p>Age: " + student[key].age + "</p>");
            message += ("<p>Course: " + student[key].course + "</p>");
            message += ("<p>Level: " + student[key].level + "</p>");
            print(message);
        }
    }
}