const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
	it('should return name', () => {
		const newEngineer = new Engineer('John', '1', 'test@gmail.com', 'Jax-O')
		expect(newEngineer.getName()).toBe('John')
	});

	it('should return id' , () => {
		const newEngineer = new Engineer('John', '1', 'test@gmail.com', 'Jax-O')
		expect(newEngineer.getId()).toBe('1')
	});

	it('should return email' , () => {
		const newEngineer = new Engineer('John', '1', 'test@gmail.com', 'Jax-O')
		expect(newEngineer.getEmail()).toBe('test@gmail.com')
	});

	it('should return github username' , () => {
		const newEngineer = new Engineer('John', '1', 'test@gmail.com', 'Jax-O')
		expect(newEngineer.getGitHub()).toBe('Jax-O')
	});
})