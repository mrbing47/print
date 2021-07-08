const str = require("str-temp");
const chalk = require("chalk");

error = str("{~type~}: {~resource~} {~message~}", chalk.red("ERROR"));
memory_error = error(chalk.yellow("MEMORY"));
console.log(memory_error("STACK OVERFLOW."));
console.log(memory_error("MEMORY CORRUPTED."));

teams = str("{team_a}: {a_score} vs {team_b}: {b_score}")({ team_a: "ABC", team_b: "XYZ" });
console.log(teams.unused);
console.log(teams.string);
teams({ a_score: 2, b_score: 3 });

console.log(str("{2}, {}, {}, {1}")("C")("D")("A")("B"));
console.log(str("{}, {3}, {0}, {1}", ["Y", "Z", "W", "X"]));
console.log(str("{}, {}, {}, {}", ["Y", "Z", "W", "X"]));
console.log(str("{a}, {}, {}, {b}", { a: "R", b: "Z" }, "P", "Q"));

const message = str("{~message~} {~name~}", "Hello");
console.log(message.unused);

const z = str("{1} {3} {2} {0}", ["A", ["B", "C"]], ["D"]);
console.log(z);

let obj = {
	name: {
		first: "Nathan",
		last: "Drake",
	},
	pno: ["101", "010", "515"],
	age: 32,
	address: [
		{
			city: "Delhi",
			country: "India",
		},
		{
			city: "New York",
			country: "USA",
		},
	],
};

console.log(str("{name.first} lives in {address[1].city}.")(obj));
