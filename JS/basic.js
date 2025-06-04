const player = {
    name: "nico",
    points: 10,
    fat: false,
    sayHello : function(otherPersonName) {
        console.log("hello " + otherPersonName + ",Say hi to my friends.");
    }
};

console.log(player.name);
console.log(player["name"]);

player.name = "Haean";
player.lastName = "Cho";

console.log(player);

player.sayHello("Mike");

const calculator = {
    add : function(a, b) { return a + b; },
    sub : function(a, b) { return a - b; },
    mul : function(a, b) { return a * b; },
    div : function(a, b) { return a / b; },
    powerOf : function(a, b) { return a ** b; }
}
console.log(calculator);

const Result = [ calculator.add(4,2), calculator.sub(4,2), calculator.mul(4,2), calculator.div(4,2), calculator.powerOf(4,2) ];
console.log(Result);