//Function constructor
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

// Create new Person objects
var anthony = new Person('Anthony', 1990, 'QA');
var sophie = new Person('Sophie', 1991, 'designer');
var lauren = new Person('Lauren', 1990, 'database admin');

//Add additional functions via prototype object. This is inheritance.
Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
};

//Add properties with value to object.
Person.lastName = 'Cox';

sophie.lastName = 'McCormick';
*/



//Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
};

var anthony = Object.create(personProto);
anthony.name = 'Anthony';
anthony.yearOfBirth = 1990;
anthony.job = 'QA';

var sophie = Object.create(personProto, 
{
    name: {value: 'Sophie'},
    yearOfBirth: {value: 1991},
    job: {value: 'designer'}
});
*/

// Closures

function retirement(retirementAge) {
    var a = ' years left until requirement.'
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
};

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementIceland(1990);
retirementGermany(1990); 
retirementUS(1990);
// retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?')
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

designerQuestion('Sophie');
teacherQuestion('Rachel');

