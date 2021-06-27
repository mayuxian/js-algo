export class SorterOptions{
  //返回新的值
  returnNewObject:Boolean= false
  //比较表达式回调函数
  equalFunCb:((arr:any,i:number,j:number)=>boolean)|null = null
  //TODO:交换值的模式,加减方式,位移方式等?
  swapValMode:Number = 0
}
