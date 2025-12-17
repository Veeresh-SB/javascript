function calculate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x%y;
}
console.log(calculate(5,5,add));
console.log(calculate(5,5,mul));
console.log(calculate(5,5,mod));