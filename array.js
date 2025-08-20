/*
    array - collection of "indexed" elements called as "array"

    index starts from "0"

    we will represent the array by using "[]"
*/


/*
    //length
    let arr = [10,20,30,40,50];
    console.log( arr.length );                                          //5
    console.log( arr[0], arr[2], arr[4], arr[5] , arr[-1] );            //10 30 50 undefined undefined
    arr.length = 3;               
    console.log( arr[0], arr[2], arr[3], arr[4], arr[-1]);              //10 30 undefined undefined undefined
*/


/*
    //push()
    //pop()
    //unshift()
    //shift()
    let arr = [20,30,40];
    console.log(arr);                   //[ 20, 30, 40 ]

    arr.push(50);
    console.log(arr);                   //[ 20, 30, 40, 50 ]

    arr.unshift(10);
    console.log(arr);                   //[ 10, 20, 30, 40, 50 ]


    arr.pop();
    console.log(arr);                   //[ 10, 20, 30, 40 ]


    arr.shift();
    console.log(arr);                   //[ 20, 30, 40 ]
*/


/*
    //delete
    let arr = [10,20,30,40,50];
    console.log(arr.length);                    //5

    delete arr[0];
    delete arr[2];
    console.log(arr.length);                    //5

    console.log(arr);                           //[ <1 empty item>, 20, <1 empty item>, 40, 50 ]
*/


/*
    let arr1 = [10,20,30];
    let arr2 = [40,50,60];
    let arr3 = [...arr1,...arr2];
    console.log(arr3);                  //[ 10, 20, 30, 40, 50, 60 ]
*/



/*
    let arr1 = [20,30,40];
    let arr2 = [...arr1];

    arr2.push(50);
    arr2.unshift(10);

    console.log(arr1);                              //[ 20, 30, 40 ]
    console.log(arr2);                              //[ 10, 20, 30, 40, 50 ]
*/


/*
    //splice
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.splice(1,2);
    console.log(arr1);              //[10,40,50,60,70,80,90,100]


    arr1.splice(7,1);
    console.log(arr1);               //[10,40,50,60,70,80,90]


    arr1.splice(2,2);
    console.log(arr1);              //[ 10, 40, 70, 80, 90 ]

    arr1.splice(0,1);
    console.log(arr1);              //[ 40, 70, 80, 90 ]


    arr1.splice(1,0,50,60);
    console.log(arr1);              //[ 40, 50, 60, 70, 80, 90 ]


    arr1.splice(0,1,10,20,30,40);
    console.log(arr1);              //[10,20,30,40,50,60,70,80,90]


    arr1.splice(9,0,100);
    console.log(arr1);              //[10,20,30,40,50,60,70,80,90,100]
*/




/*
    let arr1 = [0,1,2,3,4,5,6,7,8,9];
    arr1.splice(0,1);
    console.log(arr1);              //[1,2,3,4,5,6,7,8,9]


    arr1.splice(8,1);
    console.log(arr1);              //[1,2,3,4,5,6,7,8]



    arr1.splice(3,1);
    console.log(arr1);              //[1,2,3,5,6,7,8]


    arr1.splice(7,0,9);
    arr1.splice(0,0,0);
    arr1.splice(4,0,4);
    console.log(arr1);              //[0,1,2,3,4,5,6,7,8,9]
*/


/*
    //map()
    //used to manipulate each element
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        })
    );                  //[ 100, 200, 300, 400, 500 ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return [element];
        })
    );                  //[ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ] ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return [element,index];
        })
    );

    //[[1,0],[2,1],[3,2],[4,3],[5,4]]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return {[index]:element};
        })
    );              //[ { '0': 1 }, { '1': 2 }, { '2': 3 }, { '3': 4 }, { '4': 5 } ]
*/

/*

//filter()
console.log(
    [1,2,3,4,5].filter((element,index)=>{
        return element>=3;
    }).map((element,index)=>{   
        return element*100;
    })
);                  //[ 300, 400, 500 ]

*/

/*
    console.log(
        [{"e_id":111,"e_name":"e_one","e_sal":10000},
        {"e_id":222,"e_name":"e_two","e_sal":20000},
        {"e_id":333,"e_name":"e_three","e_sal":30000},
        {"e_id":444,"e_name":"e_four","e_sal":40000},
        {"e_id":555,"e_name":"e_five","e_sal":50000}].filter((element,index)=>{
            return element.e_sal>=30000;
        }).map((element,index)=>{
            return element.e_name === "e_three" ? {"e_id":333,"e_name":"employee_three","e_sal":30000} : element;
        })
    )
*/


/*
    //reduce()
    console.log(
        [1,2,3,4,5].reduce((firstElement,accumlator)=>{
            return firstElement+accumlator;
        })
    );              //15


    console.log(
        [100,200,300,400,500].reduce((firstElement,accumlator)=>{
            return firstElement+accumlator;
        })
    );                  //1500

*/

/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element>=100;
        }).reduce((firstElement,accumlator)=>{
            return firstElement+accumlator;
        })
    );              //1500
*/


/*
    console.log(
        ["javascript","to","welcome"].reduceRight((firstElement,accumlator)=>{
            return firstElement+" "+accumlator;
        })  
    );              //welcome to javascript
*/


/*
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr1.slice(4,6));           //[ 50, 60 ]
    console.log(arr1.slice(7,9));           //[ 80, 90 ]
    console.log(arr1.slice(0,1));           //[ 10 ]
    console.log(arr1.slice(9,10));          //[ 100 ]
    console.log(arr1.slice(1,4));           //[ 20, 30, 40 ]
    console.log(arr1.slice(-4,-1));         //[ 70, 80, 90 ]
*/


/*
    console.log(
        [[1],[2],[3]].flat(1)
    );              //[ 1, 2, 3 ]

    console.log(
        [[[[[[[[[[1]]]]]]]]],[[[[[[[[[2]]]]]]]]],[[[[[[[[[[3]]]]]]]]]]].flat(Infinity)
    );              //[ 1, 2, 3 ]
*/


/*
let arr1 = [1,2,3];
let arr2 = ["one","two","three"];
//[[1,"one"],[2,"two"],[3,"three"]]

console.log(
   arr1.map((element,index)=>{
       return [element,arr2[index]];
   }).flat(Infinity)
);         

//[ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]
//[ 1, 'one', 2, 'two', 3, 'three' ]

console.log(
    arr1.flatMap((element,index)=>{
        return [element,arr2[index]];
    })
 );             //[ 1, 'one', 2, 'two', 3, 'three' ]
*/


/*
    //findIndex()
    console.log(
        [1,2,3,4,5,6].findIndex((element,index)=>{
            return element == 6;
        })
    );                  //5


    console.log(
        [10,20,30,40,50,60,70,80,90,100].findIndex((element,index)=>{
            return element == 5;
        })
    );              //-1

    let arr1 = [10,20,30,40,50];
    arr1.splice(arr1.findIndex((element,index)=>{
        return element == 30;
    }),1);
    console.log(arr1);              //[ 10, 20, 40, 50 ]



    let arr2 = [10,100,1000,10000,20,200,2000,20000];
    arr2.splice(arr2.findIndex((element,index)=>{
        return element == 20;
    }),1);
    console.log(arr2);


    let arr3 = [{"e_id":111,"e_name":"e_one","e_sal":10000},
                {"e_id":222,"e_name":"e_two","e_sal":20000},
                {"e_id":333,"e_name":"e_three","e_sal":30000},
                {"e_id":444,"e_name":"e_four","e_sal":40000},
                {"e_id":555,"e_name":"e_five","e_sal":50000}];
    arr3.splice(arr3.findIndex((element,index)=>{
        return element.e_id == 333
    }),1);
    console.log(arr3);
*/

/*
    console.log(
        [1,2,3,4,5].some((element,index)=>{
            return element<=1;
        })
    );
*/


/*
    console.log(
        [1,2,3,4,5].every((element,index)=>{
            return element<=5;
        })
    );      //true
*/



// console.log(
//     [1,2,3,4,5].find((element,index)=>{
//         return element == 40;
//     })
// );



// let arr1 = [1,2,3,4,5];
// console.log( arr1.fill(100) );                  //[ 100, 100, 100, 100, 100 ]
// console.log( arr1.fill(200,1) );                //[ 100, 200, 200, 200, 200 ]
// console.log( arr1.fill(300,2) );                //[ 100, 200, 300, 300, 300 ]
// console.log( arr1.fill(400,3) );                //[ 100, 200, 300, 400, 400 ]
// console.log( arr1.fill(500,4) );                //[ 100, 200, 300, 400, 500 ]
// console.log( arr1.fill(600,1,3) );              //[ 100, 600, 600, 400, 500 ]


/*
    //indexOf()
    let arr1 = [10,20,30,10,40,10,20,50];
    arr1.forEach((element,index)=>{
        console.log( arr1.indexOf(element) , index );
        console.log("------------------------");
    });


    let arr2 = [10,20,30,10,20,30];
    arr2.forEach((element,index)=>{
        console.log( arr2.indexOf(element), index );
    });


    let arr3 = [100,200,300,100,200,300];

    console.log(
        arr3.filter((element,index)=>{
            return arr3.indexOf(element) == index;
        })
    );              //[ 100, 200, 300 ]
*/



/*
    //copyWithin
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.copyWithin(5);
    console.log(arr1);          //[10,20,30,40,50,10,20,30,40,50]


    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(3);
    console.log(arr2);              //[10,20,30,10,20,30,40,50,60,70]


    let arr3 = [10,20,30,40,50,60,70,80,90,100];
    arr3.copyWithin(7);
    console.log(arr3);                  //[10,20,30,40,50,60,70,10,20,30]



    let arr4 = [10,20,30,40,50,60,70,80,90,100];
    arr4.copyWithin(-7);
    console.log(arr4);                  //[10,20,30,10,20,30,40,50,60,70]


    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(2,7);
    console.log(arr5);              // [10,20,80,90,100,60,70,80,90,100]


    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    arr6.copyWithin(-4,-7);
    console.log(arr6);              //[10,20,30,40,50,60,40,50,60,70]



    let arr7 = [10,20,30,40,50,60,70,80,90,100];
    arr7.copyWithin(2,4,7);
    console.log(arr7);              //10, 20, 50, 60,  70,60, 70, 80, 90, 100]
*/


/*
    //sort()
    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg1-arg2;
        })
    );              //[ 1, 2, 3, 4, 5 ]


    console.log(
        [1,5,2,4,3].sort((arg1,arg2)=>{
            return arg2-arg1;
        })
    );          //[ 5, 4, 3, 2, 1 ]


    console.log(
        [10,50,20,40,30].sort((arg1,arg2)=>{
            return arg1-arg2;
        })[1]
    );              //20


    console.log(
        [10,50,20,40,30].sort((arg1,arg2)=>{
            return arg2-arg1;
        })[1]
    );          //40
*/



[1,2,3,4,5].forEach((element,index)=>{
    console.log(element, index);
});


//for....of loop
for(let x of [100,200,300,400,500]){
    console.log(x);
}

let obj = {"key1":"value1","key2":"value2","key3":"value3"}
for(let x in obj){
    console.log(obj[x]);
}


//reverse()
//to reverse the "array".
console.log(
    [1,2,3,4,5].reverse()
);                  //[ 5, 4, 3, 2, 1 ]



console.log(
    ["Angular","AngularJS","Angular13"].reverse()
);          //[ 'Angular13', 'AngularJS', 'Angular' ]


console.log(
    Array.from("Hello").reverse().toString().replace(/,/g,"")
);

//TypeError: "Hello".reverse is not a function

//[ 'H', 'e', 'l', 'l', 'o' ]

//[ 'o', 'l', 'l', 'e', 'H' ]   ===> "olleh"

//o,l,l,e,H

//ol,l,e,H

//olleH



// console.log(
//     Array.from("welcome").reverse().join("")   
// );


// console.log(
//     "welcome to ES6".substr(0,7)
// );      //welcome

// console.log(
//     "welcome to ES6".substr(8,2)
// );      //to

// console.log(
//     "welcome to ES6".substr(11,3)
// );      //ES6


console.log(
    [1,2,3,4,5].find((element,index)=>{
        return element == 10;
    })
);          //1


// console.log(
//     [1,2,3,4,5].includes(1)
// );          //true


// console.log( " welcome ".length );              //9
// console.log( " welcome ".trim().length );       //7
// console.log( " welcome ".trimStart().length );  //8
// console.log( " welcome ".trimEnd().length );    //8



// console.log(
//     "Hello".padStart(10,"*").padEnd(15,"*")
// );      //*****Hello*****


/*
    console.log(
        [1,2,3,1,4,5,1].lastIndexOf(1)
    );
    //6
*/


/*
    console.log(
        "Hello".repeat(5)
    );          //HelloHelloHelloHelloHello
*/


console.log(
    "welcome to es6".split(" ")
);                  //[ 'welcome', 'to', 'es6' ]


console.log(
    //"welcome*to$es6@ashokit".replace("*"," ").replace("$"," ").replace("@"," ")
    "welcome*to?es6".replace("[^\w\*\g]"," ")
);

//["welcome","to","es6","ashokit"]



let arr1 = ["Hello_1","Hello_2","Hello_3"];

//["Hello_3","Hello_2","Hello_1"]      ------ Ex1

//["1_olleH","2_olleH","3_olleH""]     ------ Ex2

//["3_olleH"","2_olleH","1_olleH"]     ------ Ex3



let arr2 = [1,2,3,4,5,6];


//[4,5,6,1,2,3]         //Ex1

//[15,6]                //Ex2


console.log(
    "welcome".substring(0,3)
);

console.log(
    "welcome".substring(3,7)
);


























































































