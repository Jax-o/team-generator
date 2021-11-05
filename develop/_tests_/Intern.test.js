const Intern = require('../lib/Intern');

describe('Intern', () => {
	it('should return name', () => {
		const newIntern = new Intern('John', '1', 'test@gmail.com', 'UCF')
		expect(newIntern.getName()).toBe('John')
	});

	it('should return id' , () => {
		const newIntern = new Intern('John', '1', 'test@gmail.com', 'UCF')
		expect(newIntern.getId()).toBe('1')
	});

	it('should return email' , () => {
		const newIntern = new Intern('John', '1', 'test@gmail.com', 'UCF')
		expect(newIntern.getEmail()).toBe('test@gmail.com')
	});

	it('should return github username' , () => {
		const newIntern = new Intern('John', '1', 'test@gmail.com', 'UCF')
		expect(newIntern.getSchool()).toBe('UCF')
	});
})