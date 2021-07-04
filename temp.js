function a(m) {
	console.log("a\n\n\n", this);
	this.x = m + 2;
	return function () {
		console.log("b\n\n\n", this);
		this.y = m + 3;
		return a(m + 1);
	};
}

const c = (m) => {
	console.log("c\n\n\n", this);
	this.z = m + 4;
	d();
};

function d() {
	console.log("d\n\n\n", this);
}

console.log("\n\n\n\n");
a(1)()();

console.log("\n\n\n\nSPLIT\n\n\n\n");

a(2)()();
