export{};

function max(a:number,b:number,c:number): number{
    var max: number=0;
    if(a>max)
      max=a;
    if(b>max)
      max=b;
    if(c>max)
      max=c;
      
    return max;  
}

console.log(max(5,12,7));