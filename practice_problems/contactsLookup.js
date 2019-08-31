var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "126554844",
      "likes": ["Pizza", "Coding", "brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "071225498142",
      "likes": ["Hogwarts", "Magic", "Hagrid"]       
  },
   {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "9999999999",
      "likes": ["Intiguing Cases", "Violin"]       
  },  
   {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "Unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]       
  }
];

function lookUpProfile(name, prop) {
  for(var i = 0; i < contacts.length; i++) {
      if(contacts[i].firstName === name) {
          return contacts[i][prop] || "No such property"
      }
  }
  return "No such contact.";
}

var data = lookUpProfile("Sherlock", "number");
console.log(data);