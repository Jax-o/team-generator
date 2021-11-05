const Employee = require('../lib/Employee');

describe('Employee', () => {
	it('should return name', () => {
	const newEmployee = new Employee('John', '1', 'test@gmail.com')
	expect(newEmployee.getName()).toBe('John')
	});

	it('should return id' , () => {
	const newEmployee = new Employee('id')
	expect(newEmployee.getId()).toBe('1')
	});

	it('should return email' , () => {
	const newEmployee = new Employee('email')
	expect(newEmployee.getEmail()).toBe('test@gmail.com')
	});
})