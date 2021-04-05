const express = require('express')

const app = express()
app.use(express.json())

const PORT = 3000;
const HOST = '0.0.0.0';

const fn = function thuthlyArguments(a,b,c,d){
    let truthyObject = []
    const final = fn.toString()
    
    .replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/)|(\s))/mg,'')
    .match(/^function\s*[^\(]*\(\s*([^\)]*)\)/m)[1]
    .split(/,/)
    for(let i=0;i<arguments.length;i++){
        let pair=final[i]
        if(arguments[i]){
            console.log(pair)
            var myObject = new Object();
            myObject.argument = pair;
            myObject.value = arguments[i]
            truthyObject.push(myObject)
        }
    }
    return truthyObject
}

//console.log(thuthlyArguments("Oscar",0,true,1));

function reverseString(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 
    return joinArray; 
}

//console.log(reverseString("Materialize"))

app.get('/thuthly',(req,res)=>{
    return res.json(fn("Oscar",0,true,'Mateo'))
})

app.get('/reverse/:str',(req,res)=>{
    const {str} = req.params
    return res.json(reverseString(str))
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);