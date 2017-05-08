var countries = ['Albania',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Germany',
    'Georgia',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Israel',
    'Italy',
    'Latvia',
    'Lithuania',
    'Macedonia',
    'Malta',
    'Moldova',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Serbia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Ukraine',
    'United Kingdom'
]

var people = ['Anthony',
    'Sophie',
    'Ryan'

]

// 1. Pick a random country
// 2. Pick random person

function randomCountry() {
    random = Math.floor(Math.random() * countries.length);
    return countries[random];
};

function randomPerson() {
    random = Math.floor(Math.random() * people.length);
    console.log(people);
    return people[random];
};

console.log(randomCountry() + ' ' + randomPerson());