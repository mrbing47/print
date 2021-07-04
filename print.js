function combine_str() {
	const result = [];
	for (let i of arguments) {
		if (typeof i === "string") result.push(i);
	}
	return result;
}

function combine_obj() {
	let result = {};
	for (let i of arguments) {
		if (i instanceof Object && !(i instanceof Array)) result = { ...result, ...i };
	}
	return result;
}

function seperate_arr() {
	const result_str = [];
	const result_obj = {};

	for (let i of arguments) {
		if (i instanceof Array) {
			result_str = [...result_str, ...combine_str(...i)];
			result_obj = { ...result_str, ...combine_obj(...i) };
		}
	}

	return [result_str, result_obj];
}

function print() {
	const string = arguments[0].toString();
	const variables = [...arguments].slice(1);

	const str = combine_str(...variables);
	const obj = combine_obj(...variables);

	let counter = 0;
	let isOpen = false;
	let result = "";
	let key = "";
	let isUnused = false;
	let i;

	for (i = 0; i < string.length; i++) {
		if (string[i] === "&" && (string[i + 1] === "{" || string[i + 1] === "}")) continue;
		if (string[i] === "{" && !(i > 0 && string[i - 1] === "&")) {
			if (isOpen) throw new Error("Cannot open a bracket without closing another.");
			else isOpen = true;
			continue;
		}
		if (string[i] === "}" && !(i > 0 && string[i - 1] === "&")) {
			if (!isOpen) throw new Error("Cannot close a bracket without opening it.");
			else {
				key = key.trim();
				const isNum = /^\d+$/.test(key);
				if (isNum) {
					const num = parseInt(key);
					if (num < str.length) result += str[num];
					else {
						result += "{" + (num - str.length) + "}";
						isUnused = true;
					}
				} else {
					const isComment = key.startsWith("~") && key.endsWith("~");
					if (key !== "" && !isComment) {
						if (obj[key]) result += obj[key];
						else {
							result += "{" + key + "}";
							isUnused = true;
						}
					} else {
						if (counter < str.length) result += str[counter++];
						else {
							isUnused = true;
							result += "{" + (isComment ? key : "") + "}";
						}
					}
				}
				key = "";
				isOpen = false;
			}
			continue;
		}

		if (!isOpen) result += string[i];
		else key += string[i];
	}

	if (!isUnused) {
		console.log(result);
		return;
	} else {
		const anonymous = function () {
			return print(result, ...arguments);
		};
		anonymous.string = result;
		return anonymous;
	}
}
