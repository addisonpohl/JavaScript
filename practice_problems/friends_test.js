/*Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.*/

function friend(friends){
  //An array is given to determine which names have the length of 4
      let i;
      let names = [];
      for (i = 0; i < friends.length; i++) {
          if (friends[i].length == 4) {
              names.push(friends[i]);
          }
      }
      return names;
  }
  
  var nameTest = ["john", "gerry", "Ron", "Wilson", "alex"];
  console.log(friend(nameTest));
  