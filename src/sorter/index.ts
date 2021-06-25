import {SorterOptions} from './sorter-options'

export class AlgoSorter {
  //冒泡排序
  bubbleSort(data:Array<any>, options:SorterOptions) {
    for (let i = 0; i < data.length; i++) {
      const datai = data[i];
      for (let j = 0; j < data.length; j++) {
        const dataj = data[j];
        if (datai > dataj) {
          this.swapValue(data, i, j)
        }
      }
    }
  }
  //选择排序
  selectSort(arr:Array<any>) {
    let minValIndex = null
    for (let i = 0; i < arr.length - 1; i++) {
      minValIndex = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minValIndex]) {
          minValIndex = j
        }
        this.swapValue(arr, i, minValIndex)
      }
    }
  }
  //插入排序
  insertionSort(arr:Array<any>) {
    let preIndex = 0
    let curVal = null
    for (let i = 0; i < arr.length; i++) {
      preIndex = i - 1
      curVal = arr[i]
      while (preIndex >= 0 && arr[preIndex] > curVal) {
        arr[preIndex + 1] = arr[preIndex]
        preIndex--;
      }
      arr[preIndex] = curVal
    }
  }
  //希尔排序
  shellSort(arr:Array<any>) {
    const len = arr.length
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < len; i++) {
        let j = i;
        const curVal = arr[i];
        while (j - gap >= 0 && curVal > arr[j - gap]) {
          arr[i] = arr[j - gap]
          j = j - gap
        }
        arr[j] = curVal
      }
    }
  }
  //归并排序
  mergeSort(arr:Array<any>):any{
    const len = arr.length
    if (len < 2) return arr
    const merge = (left:any, right:any) => {
      const result = []
      while (left.length && right.length) {
        if (left[0] <= right[0]) {
          result.push(left.shift())
        }
        else {
          result.push(right.shift())
        }
      }
      while (left.length) {
        result.push(left.shift())
      }
      while (right.length) {
        result.push(right.shift())
      }
      // result = result.concat(left)
      // result = result.concat(right)
    }
    const middle = Math.floor(len / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle, len)
    return merge(this.mergeSort(left), this.mergeSort(right))
  }
  //快速排序
  quickSort(data:Array<any>, args :any, options:any) {
    const low = args.low || 0
    const high = args.high || data?.length || 0
    // 递归出口
    if (low > high) {
      return;
    }
    //标记
    let i:number = low;
    let j = high;
    const key = data[low];

    // 完成一趟快排
    while (i < j) {
      // 1.从右往左找到第一个小于key的数
      while (i < j && data[j] > key) {
        j--;
      }
      // 2. 从左往右找到第一个大于key的数
      //(刚开始少了等于，发现run了好久都没run出来，可能陷入了死循环)
      while (i < j && data[i] <= key) {
        i++;
      }
      // 3. 交换
      if (i < j) {
        this.swapValue(data, i, j)
      }
    }

    // 4.调整key的位置 (将key放到i的位置)
    data[low] = data[i];
    data[i] = key;

    // 递归过程
    // 5. 对key左边的数快排
    this.quickSort(data, low, i - 1);
    // 6. 对key右边的数快排
    this.quickSort(data, i + 1, high);
  }

  //计数排序
  countingSort(arr:Array<any>, maxValue:number) {
    const bucket = new Array(maxValue + 1)
    arr.forEach(val => {
      bucket[val] = !bucket[val] ? 0 : bucket[val]++
    });
    let sortedIndex = 0
    for (let i = 0; i < bucket.length; i++) {
      while (bucket[i]) {
        arr[sortedIndex] = i
        bucket[i]--;
        sortedIndex++
      }
    }
    return arr;
  }
  //桶排序
  bucketSort(arr:Array<any>, bucketSize:number) {
    let minVal = 0, maxVal = 0
    arr.forEach(x => {
      if (x < minVal) {
        minVal = x
      } else if (x > maxVal) {
        maxVal = x
      }
    })
    const _bucketSize = Math.floor((maxVal - minVal) / bucketSize) + 1
    const buckets = new Array(_bucketSize)
    for (let i = 0; i < buckets.length; i++) {
      buckets[i] = []
    }

    //利用分桶规则拆分
    arr.forEach(x => {
      buckets[Math.floor((x - minVal) / bucketSize)].push(x)
    })

    //对每个桶排序
    arr = []
    for (let i = 0; i < buckets.length; i++) {
      this.quickSort(buckets[i],null,null)
      for (let j = 0; j < buckets[i].length; j++) {
        arr.push(buckets[i][j]);
      }
    }
  }
  swapValue(arr:Array<any>, i:number, j:number) {
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
  }
}
