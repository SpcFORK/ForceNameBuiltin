/** This makes the JS Runtime attach a name property to the value */
function forceNameBuiltin(name, value) {
  return Object.defineProperty(Object(value), 'name', { value: name })
}
