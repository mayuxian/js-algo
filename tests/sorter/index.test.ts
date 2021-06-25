import { AlgoSorter } from "../../src/index";

const algoSorter = new AlgoSorter()
describe('AlgoSorter Test', () => {
    test('algoSorter.bubbleSort([3,4,2,1,5]) = [1,2,3,4,5]', () => {
      expect(algoSorter.bubbleSort([3,4,2,1,5])).toBe([1,2,3,4,5])
    });
});
