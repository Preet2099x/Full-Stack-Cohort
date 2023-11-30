// Arrrays
let arr = ['Stabley Kubrick', 'Bela Tarr', 'Ridley Scott', 'Akira Kurosawa','Werner Herzog'];

for (let i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}

// Objects
let ob = { Name: 'Bela Tarr', Age: 78, Profession: 'Filmmaker' };
console.log(ob);


// Array of Objects
let arrob = [
            { Name: 'Bela Tarr', Age: 78, Profession: 'Filmmaker' },
            { Name: 'Maryin Scorsese', Age: 7, Profession: 'Filmmaker' },
            { Name: 'Thelma Shoemaker', Age: 62, Profession: 'Editor' }
            ];
            
for (let i = 0; i < arrob.length; i++)
{
    console.log(arrob[i]);
    console.log(arrob[i].Name);
    console.log(arrob[i].Age);
    console.log(arrob[i].Profession);
}


// Functions
let users = [
    { Name: 'Bela Tarr', Age: 78, Profession: 'Filmmaker' },
    { Name: 'Martin Scorsese', Age: 70, Profession: 'Filmmaker' },
    { Name: 'Thelma Shoemaker', Age: 62, Profession: 'Editor' }
]; 
             
function print(users) {
    for (let i = 0; i < users.length; i++)
    {
        console.log(users[i].Name + "'s age is " + users[i].Age);
    }
    
}
print(users)  


// Function Callbacks
function sum(index1, index2) {
    return index1 + index2;
}

function div(index1, index2) {
    return index1 / index2;
}

function multiply(index1, index2) {
    return index1 * index2;
}

function dosomething(index1, index2, select)
{
    let ans = select(index1, index2);


    console.log("Result: " + ans);
}

dosomething(10, 12,multiply);

