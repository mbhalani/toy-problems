/*
Pony Farm
A certain pony farm (cage-free) raises and keeps track of cowboys’ and
cowgirls’ ponies. Each pony has a name, id, dietary allergies, and email
address (the owner’s email address).

Given an array of pony objects and an owner’s email address, return an
alphabetically ordered array of all foods (without duplicates) that the
owner should avoid feeding his/her ponies.

NOTE: You are required to use at least one map and one filter. Pros can
use reduce to make their code even more functional-style.

Examples
Input
ponies:
[ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" }, { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } ]
ownerEmail:
"sandy@hotmail.com"

Output
[ "chicken", "gluten", "peanut", "soy" ]
*/

var ponies =
[ { "id": 427, "name": "Firefly", "allergies": [ "gluten", "peanut" ], "email": "cindy@ponymail.com" }, { "id": 23, "name": "Black Lightning", "allergies": [ "soy", "peanut" ], "email": "sandy@hotmail.com" }, { "id": 458, "name": "Picadilly", "allergies": [ "corn", "gluten" ], "email": "cindy@ponymail.com" }, { "id": 142, "name": "Brad", "allergies": [ "gluten", "chicken" ], "email": "sandy@hotmail.com" }, { "id": 184, "name": "Cahoot", "allergies": [ "soy", "peanut", "gluten" ], "email": "jimmy@ponymail.com" } ];

var ownerEmail = 'sandy@hotmail.com';

function getPonyAllergies(ponies, ownerEmail) {
  return ponies.reduce((items, pony) => {
    if (ownerEmail === pony.email) {
      pony.allergies.forEach((allergy) => {
        if (items.indexOf(allergy) === -1) {
          items.push(allergy);
        }
      });
    }
    return items;
  }, []).sort();
}

console.log(getPonyAllergies(ponies, ownerEmail));
