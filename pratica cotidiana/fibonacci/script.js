//formula F(n) = F(n-1) + F(n-2)
let fib = [0, 1]
let num = 6
for(let i = 2; i <= num; i++){
    fib.push(fib[i - 1] + fib[i - 2])
}
console.log(fib)