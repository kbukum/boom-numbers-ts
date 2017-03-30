import Boom from "./app/Boom";
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Boom initial values
let boomProps = {
    min: 0,
    max: Math.pow(10, 7),
    s1: "2",
    s2: "3"
};

let boom = new Boom(boomProps);

function  BoomStarter(){
    rl.question("Join a number please ? ", (answer) => {
        if(answer === "quit") {
            console.log("Bye bye !");
            rl.close();
            process.exit(0);
        }
        try {
            let joinedValue = parseInt(answer, 10);
            if(joinedValue != answer) {
                throw new Error("Value is not integer")
            }
            console.log(boom.find(joinedValue));
        } catch (e) {
            console.error(e.message);
        }
        BoomStarter();
    });
}

BoomStarter();