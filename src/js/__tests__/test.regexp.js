import Validator from '../app';

test('basic username validation', () => {
  const username = 'user-123_name';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('only words at username', () => {
  const username = 'username';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('upperCase username', () => {
  const username = 'USERNAME';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('camelCase username', () => {
  const username = 'userName';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('kebab-case username', () => {
  const username = 'user-name';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('snake_case username', () => {
  const username = 'user_name';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('first title letter', () => {
  const username = 'Username';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('last title letter', () => {
  const username = 'usernamE';
  expect(Validator.validateUsername(username)).toBeTruthy();
});

test('username wrong begin', () => {
  const username = '_user67name';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('too much numbers at username', () => {
  const username = 'user6754name';
  expect(Validator.validateUsername(username)).toBeFalsy();
});

test('username wrong end', () => {
  const username = 'user_name44';
  expect(Validator.validateUsername(username)).toBeFalsy();
});
