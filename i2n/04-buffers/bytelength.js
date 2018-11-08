fs.readFile('zork.txt', function(err, data){
console.log(data);
})
fs.readFile('zork.txt', function(err, data){
console.log(data.toString());
})
fs.readFile('zork.txt','utf8', function(err, data){
console.log(data);
})
str='\u0048\u0065\u006c\u006c\u006f \u0057\u006f\u0072\u006c\u0064\u0021';
str.length
Buffer.byteLength(str, 'utf8')


str='\u0048\u0065\u006c\u006c\u006f \u0057\u006f\u0072\u006c\u0064\u0021';
str.length
Buffer.byteLength(str,'utf8')
