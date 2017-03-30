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

console.log("use `quit` to exit from program");
function  BoomStarter(){
    rl.question("Enter Boom Number : ", (answer) => {
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