function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

var fido = new Dog ("fido", "mixed", 38);
fido.owner = "bob";
delete fido.weight;
fido.trust = function(person) {
  return (person === "Bob");
};

var notBite = fido.trust("Bob");
console.log(fido);
