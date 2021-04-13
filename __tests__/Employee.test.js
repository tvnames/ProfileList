// const { it, expect } = require('@jest/globals');
// const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('initialization', () => {
        it('should have a name', () => {
          
          const name = 'James';
          const id = '1';
          const email = 'james@internet.com';
          const emp = new Employee(name, id, email);

          expect(emp.name).toBe(name);
          expect(emp.id).toBe(id);
          expect(emp.email).toBe(email);
        })
    });
});
describe('getName()', () => {
    it('should return the name');

    const name = 'Bob';
    const emp = new Employee(name, 222, 'james@internet.com');

    const results = emp.getName();
    expect(actual).toBe(name);
})

it('', () => {})