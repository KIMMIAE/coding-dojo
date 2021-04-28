/**
 * 118. Pascal's Triangle 
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 * 
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 * 
 * Constraints:
 * 1 <= numRows <= 30
 * 
 */

function generate(numRows: number): number[][] {
    let result: number[][] = [[1]];
    
    for(let i = 1; i < numRows; i++) {
        if(i === 1) {
            result.push([1,1]);
            continue;
        }
        let nums = [];
        for(let j = 0; j <= i; j++) {
            if(j === 0) {
                nums.push(1);
                continue;
            }
            if(j === i) {
                nums.push(1);
                continue;
            }
            nums.push(result[i-1][j-1]+result[i-1][j]);
        }
        result.push(nums);
    }
    return result;
};