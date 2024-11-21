var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler
{
  constructor(arr)
  {
    this.pets = arr;  
  }

  findPetsInAgeRange(minAge, maxAge)
  {
    const build = pets.filter((pet) =>{
      if(pet.age >= minAge && pet.age <= maxAge)
      {
        return pet;
      }
    });
    

    return build;
  }

  listAdoptedPetsByDate()
  {
    return pets.filter((pet) => pet.adopted === true).sort((a,b) => new Date(b.adoptedDate) -new Date(a.adoptedDate));

  }

  listPets()
  {
    
  }

  
}

const p = new PetHandler(pets);

const range = p.findPetsInAgeRange(3, 5);

console.log('1.', range);

console.log('2.', p.listAdoptedPetsByDate());
