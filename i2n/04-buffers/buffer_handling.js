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
str = '\u00bd + \u00bc = \u00be';
str.length
Buffer.byteLength(str,'utf8')
buf = new Buffer(5)
buf.write('hello world')
buf.toString()
buf.write('hello',2)
buf.toString()
buf.write('xxxx',2,1)
buf.toString()
buf.write('yyyy',2,1,'utf8')
buf.toString()
buf1=new Buffer('1234')
bud2=new Buffer('0123')
buf3=new Buffer('1234')
buf2=new Buffer('0123')
buf1.compare(buf2)
buf1.compare(buf3)
buf1.equals(buf2)
buf1.equals(buf3)
var arr = [buf1,buf2]
arr.sort(Buffer.compare)
buf.toJSON()
buf1=new Buffer('Hello World!')
buf2=buf1.slice(0,3)
buf2.toString()
buf2.write('xxx')
buf2.toString()
buf1.toString()
