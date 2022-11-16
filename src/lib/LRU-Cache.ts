//https://zhuanlan.zhihu.com/p/34989978
//https://blog.csdn.net/qq_32281471/article/details/100789278

class LRUCache {
  private static _cache = new Map<string | number, any>()
  // private static _max?: number;
  public static max?: number;

  // constructor(max?: number) {
  //   this._max = max;
  // }

  static get(key: string | number): any {
    const val = this._cache.get(key);
    if (!val) return val;
    this.upsert(key, val)
    return val;
  }

  static put(key: string | number, value:any) {
    this.upsert(key, value)
    if (this.max && this._cache.size > this.max) {
      //删除第一个
      this._cache.delete(this._cache.keys().next().value)
    }
  }

  private static upsert(key: string | number, value: any) {
    if (this._cache.has(key)) {
      this._cache.delete(key)
    }
    this._cache.set(key, value)
  }
}

