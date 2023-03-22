// code a class country
class Country{
    constructor(numberOfstate, FG = true){
        this.numberOfstate = numberOfstate
        this.FG = FG
    }
    // functions
    countStates(){
        if (this.numberOfstate){
            console.log("there are", + this.numberOfstate + "","in the country")

        } else {
            console.log("the country does not exist")
        }
    }
    // functions
    Population(numOfpeople){
        for (var num = 0; numOfpeople > num; num++){
            if(numOfpeople > 0){
                numOfpeople+=1
                break;
                console.log(numOfpeople)
            } else if (numOfpeople <= 0){
                console.log("the country does not exists")
            }
        }
    }
}
// a class states that inherits from country
class States extends Country{
    constructor(numberOfstate, numberOfLGAs = true){
        super(numberOfstate)
        this.numberOfLGAs = numberOfLGAs
    }
    // functions
    LGAsandStates(states){
        states = {}
        if(this.numberOfLGAs){
            states.abia = 1
            console.log(states)
        } else{
            console.log("there is no local govt in the state")
        }

    }
}
// code your objs and call the functions
obj1 = new Country(36, FG = true)
obj1.countStates();
obj1.Population(1000)
obj2 = new States()
obj2.LGAsandStates();