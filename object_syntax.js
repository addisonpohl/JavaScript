//Objects Example
var ourDog = {
    "name": "Bob",
    "legs": 4, 
    "tails": 1, 
    "friends": ["everything!"]
};

console.log(ourDog);
//Assigning Values
var dogName = ourDog.name; //Call the key "name" to assign the value "bob"
var dogFriends = ourDog.friends;

var lunchOrder = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

//When a key has a space [] need to be used
var entreeValue = lunchOrder["an entree"]; //Assigns 'an entree' value to the variable
var drinkValue = lunchOrder['the drink']

//More object examples
var players = {
    12: 'John',
    11: 'Alex',
    19: 'Jack'
};

var playerNumber = 19;
var player = players[playerNumber]; //Variables can also be used to retreive values. 
console.log(players)
//Updating object properties
players[19] = "Wilson"; //Brackets can be used to change the value
ourDog.name = "Jack"; //Dog notation also works for 
console.log(ourDog);
console.log(players);

//Adding properties to an Object
ourDog.bark = "Woof";
console.log(ourDog);

//Deleting properties from an Object
delete ourDog.bark; //The 'delete' keyword can be used to remove an entry from the Object.
console.log(ourDog)

//Lookup Example
function phoneticLookup(val) {
    var result = "";
        var lookup = {
        "alpha": "Adams", 
        "bravo": "Boston",
        "charlie": "Chicago", 
        "delta": "Denver", 
        "echo": "Easy"
    };
    result = lookup[val];
    return result;
}
console.log(phoneticLookup("charlie"));

//How to check if there is a property
var propCheck = {
    name: "Adam",
    age: "34",
    gender: "Male"
};
    

function checkObject(checkProp) {
    if (propCheck.hasOwnProperty(checkProp)) {
        return propCheck[checkProp];
    } else {
        return "Not Found";
    }
}

console.log(checkObject("name"))

//Manipulating complex objects
var myMusic = [//Objects Example
    var ourDog = {
        "name": "Bob",
        "legs": 4, 
        "tails": 1, 
        "friends": ["everything!"]
    };
    
    console.log(ourDog);
    //Assigning Values
    var dogName = ourDog.name; //Call the key "name" to assign the value "bob"
    var dogFriends = ourDog.friends;
    
    var lunchOrder = {
        "an entree": "hamburger",
        "my side": "veggies",
        "the drink": "water"
    };
    
    //When a key has a space [] need to be used
    var entreeValue = lunchOrder["an entree"]; //Assigns 'an entree' value to the variable
    var drinkValue = lunchOrder['the drink']
    
    //More object examples
    var players = {
        12: 'John',
        11: 'Alex',
        19: 'Jack'
    };
    
    var playerNumber = 19;
    var player = players[playerNumber]; //Variables can also be used to retreive values. 
    console.log(players)
    //Updating object properties
    players[19] = "Wilson"; //Brackets can be used to change the value
    ourDog.name = "Jack"; //Dog notation also works for 
    console.log(ourDog);
    console.log(players);
    
    //Adding properties to an Object
    ourDog.bark = "Woof";
    console.log(ourDog);
    
    //Deleting properties from an Object
    delete ourDog.bark; //The 'delete' keyword can be used to remove an entry from the Object.
    console.log(ourDog)
    
    //Lookup Example
    function phoneticLookup(val) {
        var result = "";
            var lookup = {
            "alpha": "Adams", 
            "bravo": "Boston",
            "charlie": "Chicago", 
            "delta": "Denver", 
            "echo": "Easy"
        };
        result = lookup[val];
        return result;
    }
    console.log(phoneticLookup("charlie"));
    
    //How to check if there is a property
    var propCheck = {
        name: "Adam",
        age: "34",
        gender: "Male"
    };
        
    
    function checkObject(checkProp) {
        if (propCheck.hasOwnProperty(checkProp)) {
            return propCheck[checkProp];
        } else {
            return "Not Found";
        }
    }
    
    console.log(checkObject("name"))
    
    //Manipulating complex objects
    var myMusic = [
        {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": [
                "CD",
                "8T",
                "LP",
            ],
        "gold": true,
        },
        {
            "artist": "Beau Carnes",
            "title": "Cereal Man",
            "release_year": 2003,
            "formats": [
                "YouTube video"
            ]
        }
    ];
    
    //Accessing nesting data
    
    //collect first artist's release year:
    var releasedOn = myMusic[0].release_year;
    console.log(releasedOn);
    
    //collect the second tracks title: 
    var trackName = myMusic[1].title;
    console.log(trackName);
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP",
        ],
    "gold": true,
    },
    {
        "artist": "Beau Carnes",
        "title": "Cereal Man",
        "release_year": 2003,
        "formats": [
            "YouTube video"
        ]
    }
];

//Accessing nesting data

//collect first artist's release year:
var releasedOn = myMusic[0].release_year;
console.log(releasedOn);

//collect the second tracks title: 
var trackName = myMusic[1].title;
console.log(trackName);