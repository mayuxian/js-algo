type ExpressionFuncType=(exps:any)=>boolean

export class SorterOptions{
  //返回新的值
  returnNewObject:Boolean= false
  expressionFunc:ExpressionFuncType|null = null
}
