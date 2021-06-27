declare global{
  interface Array {
    bubbleSort(arr:any)
  }
}
if(!Array.prototype.bubbleSort){
  Array.prototype.bubbleSort = (arr:any)=>{

  }
}
