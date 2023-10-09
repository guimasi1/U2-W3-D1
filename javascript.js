// FIRST EXERCISE

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  compare(firstUser, secondUser) {
    if (firstUser.age > secondUser.age) {
      return `${firstUser.firstName} is older than ${secondUser.firstName}`;
    } else if (firstUser.age < secondUser.age) {
      return `${secondUser.firstName} is older than ${firstUser.firstName} `;
    } else {
      return `They are the same age.`;
    }
  }
}

const user1 = new User("Luca", "Frattaglia", 23, "Bari");
const user2 = new User("Giorgio", "Pascoli", 12, "Palermo");

console.log(user1.compare(user1, user2));

// SECOND EXERCISE

const form = document.getElementById("my-form");
const petNameInput = document.getElementById("pet-name");
const ownerInput = document.getElementById("owner");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const showPets = document.getElementById("show-pets");

class Pet {
  constructor(_petName, _owner, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _owner;
    this.species = _species;
    this.breed = _breed;
  }
  compareOwner(owner1, owner2) {
    if (owner1 === owner2) {
      return console.log(true);
    }
  }
}

const arrayOfPets = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const pet = new Pet(
    petNameInput.value,
    ownerInput.value,
    speciesInput.value,
    breedInput.value
  );
  arrayOfPets.push(pet);
  console.log(arrayOfPets);
  if (arrayOfPets.length === 2) {
    pet.compareOwner(arrayOfPets[0].ownerName, arrayOfPets[1].ownerName);
  }

  const para = document.createElement("p");
  para.innerText = `My name is ${pet.petName}`;
  showPets.appendChild(para);
  console.log(para.innerText);
});
