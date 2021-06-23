export class TypeCheckerClass{
    // These helpers produce better VM code in JS engines due to their
    // explicitness and  inlining.
    isUndef(v:any) {
      return v === undefined || v === null
    }

    isDef(v:any) {
      return v !== undefined && v !== null
    }

      isTrue(v:any) {
      return v === true
    }

      isFalse(v:any) {
      return v === false
    }

    /**
     * Check if value is primitive.
     */
      isPrimitive(value:any) {
      return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
      )
    }

    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     */
      isObject(obj:any) {
      return obj !== null && typeof obj === 'object'
    }

    /**
     * Get the raw type string of a value, e.g., [object Object].
     */
    _toString = Object.prototype.toString

    toRawType(value:any):string {
      return this._toString.call(value).slice(8, -1)
    }

    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     */
      isPlainObject(obj:any) {
      return this._toString.call(obj) === '[object Object]'
    }

      isRegExp(v:any) {
      return this._toString.call(v) === '[object RegExp]'
    }
    isFunction(v:any){
      return this._toString.call(v)==='[object Function]'
    }
    /**
     * Check if val is a valid array index.
     */
      isValidArrayIndex(val:any) {
      const n = Number(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }

      isPromise(val:any) {
      return
        this.isDef(val) &&
      this.isFunction(val.then) &&
      this.isFunction(val.catch)
    }
}
export const  typeChecker =new TypeCheckerClass()
