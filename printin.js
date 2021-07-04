function seperate_arr() {
	const result_arr = [];
	let result_obj = {};

	for (let i of arguments) {
		if (i instanceof Object) {
			if (i instanceof Array) {
				[str, obj] = seperate_arr(...i);
				result_arr.push(...str);
				result_obj = { ...result_obj, ...obj };
			} else result_obj = { ...result_obj, ...i };
		} else {
			let temp = i;
			if (typeof i !== "number") temp = i.toString();
			result_arr.push(temp);
		}
	}

	return [result_arr, result_obj];
}

function print() {
	const string = arguments[0].toString();
	const variables = [...arguments].slice(1);

	const [str, obj] = seperate_arr(...variables);

	let counter = 0;
	let isOpen = false;
	let isEsacpe = false;
	let result = "";
	let key = "";
	let isUnused = false;
	let i;

	for (i = 0; i < string.length; i++) {
		if ((string[i] === "{" && string[i + 1] === "{") || (string[i] === "}" && string[i + 1] === "}")) {
			isEsacpe = true;
			continue;
		}
		if (string[i] === "{" && !isEsacpe) {
			if (isOpen) throw new Error("Cannot open a bracket without closing another.");
			else isOpen = true;
			continue;
		}
		if (string[i] === "}" && !isEsacpe) {
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
		isEsacpe = false;
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

module.exports = print;
