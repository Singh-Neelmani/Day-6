const express = require('express'); //import express framework
const server = express(); //initialize

server.get('/',function(request,response){
    console.log(request.method);
    console.log(request.query.query1);
    console.log(request.query.param2);
    console.log(request.headers);
    console.log(request.url);
    console.log('value of accept header='+request.headers.accept);
    console.log('value of accept header='+request.headers['cache-control']);
    console.log(request.response);
    response.send('Hello World');
    const user = {
        name: 'NEELMANI',
        age: '22',
        city: 'Varanasi',
        DOB: '30/06/1999',
        Company: 'Times',
    }
    console.log(user.name);
    console.log(user.age);
    console.log(user.city);
    console.log(user.DOB);
    console.log(user.Company);
})
server.listen(3000,function(){
    console.log('server started....');
})