const getTodos = (resource,callback) => { 
const request= new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
if(request.readyState === 4 && request.status === 200 ){
  
    const data = JSON.parse(request.responseText);
    callback(undefined,data);
    
}
else if(request.readyState === 4){
    callback('could not fetch the data',undefined);
}
});
 
request.open('GET',resource);
request.send();
};
console.log(1);
console.log(2);

getTodos('todos/rachita.json',(err, data) => {  //callback within call abck that is callback nesting called callback hell
    console.log(data);
    getTodos('todos/basnet.json',(err, data) => {  
        console.log(data);
    });
});

