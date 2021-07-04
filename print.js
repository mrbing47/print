const chalk = require("chalk");

function print() {
	let string = arguments[0];
	let variables = [...arguments].slice(1);

	let counter = 0;
	let isOpen = false;
	let result = "";
	let isUnused = false;
	let i;

	for (i = 0; i < string.length; i++) {
		if (string[i] === "{" && !(i > 0 && string[i - 1] === "&")) {
			if (isOpen) throw new Error("Cannot open a bracket without closing another.");
			else isOpen = true;
			continue;
		}
		if (string[i] === "}" && !(i > 0 && string[i - 1] === "&")) {
			if (!isOpen) throw new Error("Cannot close a bracket without opening it.");
			else {
				if (counter < variables.length) result += variables[counter++];
				else {
					isUnused = true;
					result += "{}";
					break;
				}
				isOpen = false;
			}
			continue;
		}

		if (!isOpen) result += string[i];
	}

	if (!isUnused) {
		console.log(result);
		return;
	} else {
		result += string.slice(i + 1);
		return function () {
			return print(result, ...arguments);
		};
	}
}

error = print("{} {} {}", chalk.red("ERROR:"));
memory = error(chalk.yellow("MEMORY"));

memory("OUT OF STORAGE!");
memory("REFERNCE NOT FOUND!");
