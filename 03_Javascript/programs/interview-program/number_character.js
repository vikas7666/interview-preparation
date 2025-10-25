 function stringCount(str,char){
     console.log(`${str.split(char)}`)
     let result = str.split(char).length - 1 ;
     console.log('stringCount',result)
 }

stringCount('jsnjksdbjbjhkj', 'j')


// using for loop


function stringCount(str, char){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(str[i] ==  char){
            count ++
        }
    }
    return count  // 5
}

console.log(stringCount('jsnjksdbjbjhkj', 'j'))