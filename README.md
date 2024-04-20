# ForceNameBuiltin

**forceNameBuiltin** is a JavaScript utility function designed to attach a `name` property to a given value using property reference name assignment.

## Installation

you can directly include it in your project:

```html
<script src="forceNameBuiltin.js"></script>
```

## Usage

```javascript
const forceNameBuiltin = require('forceNameBuiltin');

const myValue = 'Hello';
forceNameBuiltin('myName', myValue);

console.log(myValue.name); // Output: 'myName'
```

## API

### `forceNameBuiltin(name, value)`

- `name`: The desired name to assign to the value.
- `value`: The value to which the name property will be attached.

Returns: The value with the `name` property attached.

## About

**ForceNameBuiltin** provides a straightforward implementation of property reference name assignment in JavaScript, allowing you to easily assign a name to any value in your code.
