/* 
You are given an array arr of positive integers. Your task is to find all the leaders in the array. An element is considered a leader if it is greater than or equal to all elements to its right. The rightmost element is always a leader.

Input: arr = [16, 17, 4, 3, 5, 2]
Output: [17, 5, 2]
Explanation: Note that there is nothing greater on the right side of 17, 5 and, 2.
*/

function  leaderInArray(arr) {
    let maxForRight = -Infinity; let leaders = []
      for(let i = arr.length-1; i>=0; i--){
         if(arr[i] >= maxForRight ){
             leaders.unshift(arr[i]);
              maxForRight = arr[i];
         }
      }
      console.log('leaders',leaders)
  }
  
  leaderInArray([16, 17, 4, 3, 5, 2])