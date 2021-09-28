export{};

var arr:any[]=new Array()
arr = [3,7,2,77,23,4]

function minimum(arr:any[]):number{
    var min:number=9999;
    for(var i=0;i<arr.length;i++){
       if(arr[i]<min){
           min=arr[i]
       }
    }
    return min;
}

console.log(minimum(arr))