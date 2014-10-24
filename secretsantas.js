var personList = [
  {
    first: "Ted",
    last: "Jenkins",
    family: "ted"
  },
  {
    first: "Kristin",
    last: "Jenkins",
    family: "ted"
  },
  {
    first: "Hannah",
    last: "Jenkins",
    family: "ted"
  },
  {
    first: "Elinor",
    last: "Jenkins",
    family: "ted"
  },
  {
    first: "Talmage",
    last: "Jenkins",
    family: "ted"
  },
  {
    first: "Peter",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Mary",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Abby",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Sam",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Rosie",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Joey",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Max",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Elsie",
    last: "Cannon",
    family: "peter"
  },
  {
    first: "Rich",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Megan",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Taylor",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Jamison",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Parker",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Rachel",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Ben",
    last: "Wagner",
    family: "rich"
  },
  {
    first: "Hank",
    last: "Jenkins",
    family: "hank"
  },
  {
    first: "Jessica",
    last: "Jenkins",
    family: "hank"
  },
  {
    first: "Claire",
    last: "Jenkins",
    family: "hank"
  },
  {
    first: "Tanner",
    last: "Jenkins",
    family: "hank"
  },
  {
    first: "Spencer",
    last: "Jenkins",
    family: "spencer"
  },
  {
    first: "Adrianne",
    last: "Jenkins",
    family: "spencer"
  },
  {
    first: "Annie",
    last: "Jenkins",
    family: "spencer"
  },
  {
    first: "Lizzie",
    last: "Jenkins",
    family: "spencer"
  },
  {
    first: "Penner",
    last: "Jenkins",
    family: "spencer"
  },
  {
    first: "Drew",
    last: "Jenkins",
    family: "spencer"
  },
  {
    first: "Adam",
    last: "Jenkins",
    family: "adam"
  },
  {
    first: "Amber",
    last: "Jenkins",
    family: "adam"
  },
  {
    first: "Kael",
    last: "Jenkins",
    family: "adam"
  },
  {
    first: "Brycen",
    last: "Jenkins",
    family: "adam"
  },
  {
    first: "Seth",
    last: "Jenkins",
    family: "adam"
  },
  {
    first: "William",
    last: "Jenkins",
    family: "adam"
  }
];

var santas = [];

var santify = function(person1, person2) {
  var giftPair = {
    gifter: person1,
    receiver: person2
  };
  santas.push(giftPair);
  person2.taken = true;
};

var canSanta = function(person1, person2) {
  if(person1.family != person2.family) {
    if(!person2.taken) {
      return true;
    }
  }
  return false;
};

var getRandom = function(max) {
  return Math.floor(Math.random()*max);
};

var doSantas = function() {
  for(var i = 0; i < personList.length; i++) {
    do {
      var random = getRandom(personList.length);
      var possibleReceiver = personList[random];
    } while(!canSanta(personList[i], possibleReceiver));
    santify(personList[i], possibleReceiver);
  }
};

var outputSantas = function() {
  for(var i = 0; i < santas.length; i++) {
    console.log(santas[i].gifter.first + " " + santas[i].gifter.last + " is giving to " + santas[i].receiver.first + " " + santas[i].receiver.last);
  }
};

try {
  doSantas();
} catch(e) {
  console.log(e);
}
outputSantas();
