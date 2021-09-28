export{};

var arr:any[]=new Array()
arr = [3,7,2,77,23,4]

function maximum(arr:any[]):number{
    var max:number=0;
    for(var i:number=0;i<arr.length;i++){
       if(arr[i]>max){
           max=arr[i]
       }
    }
    return max;
}

console.log(maximum(arr))