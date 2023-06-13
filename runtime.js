const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

perf.start();
doublerAppend(tinyArray);
const tinyAppendTime = perf.stop().time;

perf.start();
doublerAppend(smallArray);
const smallAppendTime = perf.stop().time;

perf.start();
doublerAppend(mediumArray);
const mediumAppendTime = perf.stop().time;

perf.start();
doublerAppend(largeArray);
const largeAppendTime = perf.stop().time;

perf.start();
doublerAppend(extraLargeArray);
const extraLargeAppendTime = perf.stop().time;

// Measure execution time for doublerInsert function
perf.start();
doublerInsert(tinyArray);
const tinyInsertTime = perf.stop().time;

perf.start();
doublerInsert(smallArray);
const smallInsertTime = perf.stop().time;

perf.start();
doublerInsert(mediumArray);
const mediumInsertTime = perf.stop().time;

perf.start();
doublerInsert(largeArray);
const largeInsertTime = perf.stop().time;

perf.start();
doublerInsert(extraLargeArray);
const extraLargeInsertTime = perf.stop().time;

console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
console.log('Array Size\t\tAppend Time (ms)\t\tInsert Time (ms)');
console.log('--------------------------------------------------');
console.log('Tiny Array (10)\t\t', tinyAppendTime.toFixed(2), '\t\t\t', tinyInsertTime.toFixed(2));
console.log('Small Array (100)\t', smallAppendTime.toFixed(2), '\t\t\t', smallInsertTime.toFixed(2));
console.log('Medium Array (1000)\t', mediumAppendTime.toFixed(2), '\t\t\t', mediumInsertTime.toFixed(2));
console.log('Large Array (10000)\t', largeAppendTime.toFixed(2), '\t\t\t', largeInsertTime.toFixed(2));
console.log('Extra Large Array (100000)\t', extraLargeAppendTime.toFixed(2), '\t\t\t', extraLargeInsertTime.toFixed(2));



// Print the timing results