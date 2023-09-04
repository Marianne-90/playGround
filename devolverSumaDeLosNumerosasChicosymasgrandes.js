function miniMaxSum(arr) {
    arr.sort()
    let minArr = arr.slice(0, 4);
    let maxArr = arr.slice(-4)
  
    const min = minArr.reduce((a, b) => {
      return a + b;
    }, 0);
  
    const max = maxArr.reduce((a, b) => {
      return a + b;
    }, 0);
   
    console.log(min);
    console.log(max);
    
    
  }
  
  miniMaxSum([3, 4, 5, 2, 1])