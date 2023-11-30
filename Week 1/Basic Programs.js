// Sum of Numbers
function Sum(first_index, last_index)
{
    let sum = 0;
    for (let i = first_index; i <= last_index; i++)
    {
        sum = sum + i;
    }
    return sum;
}
s = Sum(1, 5);
console.log(s);


// Fibonacci series
function fibonacci(n)
{
    if (n == 0)
        console.log(0);
    else if (n == 1)
        {
            console.log(0);
            console.log(1);
        }
        
    else {
        let a = 0;
        let b = 1;
        let c = 0;
        console.log(a)
        console.log(b)
        for (let i = 1; i <= n-2; i++)
        {
            c = a + b;
            console.log(c)
            a = b;
            b = c;
        }
    }
}
fibonacci(10)


//Pattern 1
function pattern1(rows)
{
    for (let i = 1; i <= rows; i++) {
    let line = ""; 
    for (let k = 1; k <= i; k++) {
        line += "*"; 
    }
    console.log(line); 
    }
}
pattern1(10)

//Pattern 2
function pattern2(rows)
{
    for (let i = 1; i <= rows; i++)
    {
        line = "";
        
        for (int j = 1; j <= n-i; j++)
        {
            console.log('');
        }

        for (int k = 1;k)
        
    }
}
