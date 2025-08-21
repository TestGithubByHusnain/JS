// Password generator class
class Password {
	constructor(length = 12) {
		this.length = Math.max(length, 4); // minimum length 4
		this.lower = 'abcdefghijklmnopqrstuvwxyz';
		this.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		this.numbers = '0123456789';
		this.special = '!@#$%^&*()_+-=[]{}|;:,.<>?';
		this.all = this.lower + this.upper + this.numbers + this.special;
	}

	generate() {
		let password = [];
		// Ensure at least one of each required character type
		password.push(this._randomChar(this.lower));
		password.push(this._randomChar(this.upper));
		password.push(this._randomChar(this.special));
		password.push(this._randomChar(this.numbers));
		// Fill the rest
		for (let i = 4; i < this.length; i++) {
			password.push(this._randomChar(this.all));
		}
		// Shuffle the result
		for (let i = password.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[password[i], password[j]] = [password[j], password[i]];
		}
		return password.join('');
	}

	_randomChar(str) {
		return str[Math.floor(Math.random() * str.length)];
	}
}

// Expose to HTML
function generatePassword() {
	const passGen = new Password(12);
	const password = passGen.generate();
	document.getElementById('password').value = password;
}

