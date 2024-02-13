// Import the Employee class
const Employee = require("../assets/lib/Employee");

// Test for a successful creation of a new Employee object
test("Can instantiate Employee instance", () => {
  const e = new Employee("Harry", 123, "harry@hogwarts.com");
  expect(typeof(e)).toBe("object");
});

// Test for a successful set of name via the constructor (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("Can set name via constructor arguments", () => {
  const name = "Hermoine";
  const e = new Employee(name, 1, "hermoine@hogwarts.com");
  expect(e.name).toBe(name);
});

// Test for a successful set of id via the constructor (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue, "ron@hogwarts.com");
  expect(e.id).toBe(testValue);
});

// Test for a successful set of email via the constructor (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.email).toBe(testValue);
});

// Test for a successful call of the getName function (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("Can get name via getName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue, 1, "neville@hogwarts.com");
  expect(e.getName()).toBe(testValue);
});

// Test for a successful call of the getId function (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", testValue, "minerva@hogwarts.com");
  expect(e.getId()).toBe(testValue);
});

// Test for a successful call of the getEmail function (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

// Test for a successful call of the getRole function (all parameters added as my code includes validation which ensures inputted values cannot be blank)
test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});