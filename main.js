const myPet = {
    name: "Dr.Mundo",
    species: "Dog",
    nickNames: ["Mundo", "Doc", "Boy"],
    age: 9,
    bark: function () {
        console.log(`${this.name} barks 'WOOF!'`)
    },
    whine: function () {
        console.log(`${this.name} whines`)
    },
    pant: function () {
        console.log(`${this.name} pants heavily`)
    }, 
    favoriteToys: [],
    play: function(toy) {
        if(toy.includes('rope')){
            myPet.favoriteToys.push(toy)
        }
    }

}

myPet.bark();
myPet.whine();
myPet.pant();

myPet.play("rope toy");
console.log(myPet.favoriteToys);