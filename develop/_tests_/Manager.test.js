const Manager = require('../lib/Manager');

describe('Manager', () => {
	it('should return name', () => {
		const newManager = new Manager('John', '1', 'test@gmail.com', '305-221-8015')
		expect(newManager.getName()).toBe('John')
	});

	it('should return id' , () => {
		const newManager = new Manager('John', '1', 'test@gmail.com', '305-221-8015')
		expect(newManager.getId()).toBe('1')
	});

	it('should return email' , () => {
		const newManager = new Manager('John', '1', 'test@gmail.com', '305-221-8015')
		expect(newManager.getEmail()).toBe('test@gmail.com')
	});

	it('should return office number' , () => {
		const newManager = new Manager('John', '1', 'test@gmail.com', '305-221-8015')
		expect(newManager.getOffice()).toBe('305-221-8015')
	});
})