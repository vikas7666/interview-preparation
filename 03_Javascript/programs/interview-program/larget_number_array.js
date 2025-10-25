// console.log(findLargest([99, 5, 3, 100, 1]));

function findLargest(num){
    let max = num[0];
    for(let i = 0; i<num.length; i++){
        if( num[i] > max){
            max = num[i]
        }
    }
    console.log('largest Number is', max)
}

findLargest([99, 5, 3, 100, 1])