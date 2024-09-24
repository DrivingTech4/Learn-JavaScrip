

// Singleton

// object leterals 

const mySym = Symbol("key1")

const JsUser = {
    name: "Dhwani", 
    "full name": "Dhwani chaudhary",

[mySym]: "mykey1",
    age: 5,
    location: "Noida",
    email: "dhwani@apple.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

   
    }


    //console.log(JsUser.name);

    //console.log(JsUser["full name"]);

    console.log(typeof JsUser[mySym]);

    JsUser.email = "dhwani@gmail.com"
    //Object.freeze(JsUser)
    JsUser.email = "dhwani@yahoo.com"

    console.log(JsUser);

    JsUser.greeting = function(){ 
        console.log("hello Dhwani How Are You");}

        JsUser.greetingTwo = function(){
            console.log(`hello Dhwani How Are You, ${this.name}`)
            }
        
    

    console.log(JsUser.greetingTwo());

    
    

