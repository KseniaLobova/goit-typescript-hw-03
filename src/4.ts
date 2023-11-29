
class Key{
    private signature: number= Math.random()
  
    getSignature(): number{
    return this.signature
    }
}

class Person {
  
    constructor(private key: Key) { }
    getKey(): Key{
        return this.key
    }
}

abstract class House{
   protected door: boolean = false;
  protected  tenants: Person[] = [];
    constructor(protected key: Key) { }

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