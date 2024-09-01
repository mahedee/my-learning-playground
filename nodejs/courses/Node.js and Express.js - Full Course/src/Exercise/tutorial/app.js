const amount = 12
if(amount < 10){
    console.log(`small number`);   
}
else{
    console.log(`big number`);
}

console.log(`Hey it's my first node app`);

console.log(__dirname);
setInterval(()=>{
    console.log("Hello from interval");
}, 1000);