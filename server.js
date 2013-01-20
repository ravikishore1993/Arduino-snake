io = require('socket.io').listen(6543);
var SerialPort = require("serialport").SerialPort
  var serialPort = new SerialPort("/dev/ttyACM0", {
    baudrate: 9600
  });
  serialPort.on("open", function () {
  console.log('open');
   
});
io.sockets.on('connection', function(socket) {

serialPort.on('data', function(data) {
    console.log('data received: ' + data);
	 if(data == 1)
	 io.sockets.emit('message', { m : 1 });  
	 if(data == 5)
	 io.sockets.emit('message', { m : 5 });  

  });  
  




});