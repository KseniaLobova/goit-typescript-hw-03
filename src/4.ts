
class Key{
    private signature: number
    constructor( ) {
        this.signature = Math.random()
    }
    getSignature(): number{
    return this.signature
    }
}

class Person {
    private key:Key
    constructor(key: Key) {
        this.key
    }
    getKey(): Key{
        return this.key
    }
}

abstract class House{
    door: boolean;
    key: Key;
    tenants: Person[] = [];
    constructor(key: Key) {
        this.door = false;
        this.key=key;
            
    }

    comeIn(person: Person):void {
        if (this.door) {
            this.tenants.push(person)
            console.log("Door is open, you can come inside")
        } else {
            console.log("Please open the door")
      }
  }
    abstract openDoor(key: Key):void
}


class MyHouse extends House{
     openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log('Door is open');
    } else {
      console.log('Sorry, wrong key, door is close');
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};