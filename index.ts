/** Force name property.
 * Equiv to `{[someName]: someValue}[someName]` if the value is constructed within the object.
 * ---
 * @param name Name of the object.
 * @param value Object to be forced.
 * @returns Object with name property.
 * ---
 * @example ```js
 * const obj = { name: 'obj' };
 * const obj2 = forceName('obj2', obj);
 * console.log(obj2.name); // obj2
 * ```
 */
function forceNameBuiltin(name: string, value: unknown) {
  return Object.defineProperty(Object(value), 'name', { 
    configurable: true,
    get() { return name },
    set(x) {}
  })
}
