const print = require("./printin");
const chalk = require("chalk");

error = print("{~type~}: {~resource~} {~message~}", chalk.red("ERROR"));

memory_error = error(chalk.yellow("MEMORY"));

memory_error("STACK OVERFLOW.");
memory_error("MEMORY CORRUPTED.");

teams = print("{team_a}: {a_score} vs {team_b}: {b_score}")({ team_a: "ABC", team_b: "XYZ" });
console.log(teams.unused);
console.log(teams.string);
teams({ a_score: 2, b_score: 3 });

const temp = print("{2}, {}, {}, {}")("C");
console.log(temp.unused);
console.log(temp.string);
temp("D")("A")("B");

print("{2}, {}, {}, {1}")("C")("D")("A")("B");

print("{}, {3}, {0}, {1}", ["Y", "Z", "W", "X"]);

print("{}, {}, {}, {}", ["Y", "Z", "W", "X"]);

print("{2}, {3}, {0}, {1}", "N", "O")(["L", "M"]);

print("{a}, {}, {}, {b}", { a: "R", b: "Z" }, "P", "Q");
