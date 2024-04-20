/** This makes the JS Runtime attach a name property to the value */
function forceNameBuiltin(name, value) {
  return { [name]: value }[name]
}
