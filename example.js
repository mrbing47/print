const print = require("./print");
const chalk = require("chalk");

error = print("{~type~}: {~resource~} {~message~}", chalk.red("ERROR"));
memory_error = error(chalk.yellow("MEMORY"));

memory_error("STACK OVERFLOW.");
memory_error("MEMORY CORRUPTED.");

teams = print("{team_a}: {a_score} vs {team_b}: {b_score}")({ team_a: "ABC", team_b: "XYZ" });
console.log(teams.string);
teams({ a_score: 2, b_score: 3 });

print("{2}, {3}, {0}, {1}")("C")("D")("A")("B");
