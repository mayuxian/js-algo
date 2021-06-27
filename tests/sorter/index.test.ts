import { AlgoSorter } from "../../src/index";

describe('AlgoSorter Test', () => {
   const algoSorter = new AlgoSorter()
    test('algoSorter.bubbleSort([3,4,2,1,5]) = [1,2,3,4,5]', () => {
     const sortResult=[3,4,2,1,5]
     algoSorter.bubbleSort(sortResult);
     expect(sortResult).toEqual([1,2,3,4,5])
    });
});
