#Arduino-snake
## Play Snake game on your PC using your Arduino.

### The repository consists of 6 files:

**jquery**
: Used it to manipulate dom .[Jquery](http://jquery.com/).
**server.js** 
: Run this file in your node server on the same PC connected to which Arduino is connected.
**snake.html**
: The file to be run on the client PC . Has the Snake game made entirely on HTML5 Canvas , Js.
 *Please edit the ip of PC in this file at 2 places mentioned in comments . { I made this repo amidst sleep }
**snake.css**
: The style component of game . Not so required , but the semantics say so.
**package.json**
: Helping file to install required node dependencies . Hint : "sudo npm install"
**snake_sketch**
: This folder has the [sketchfile](http://arduino.cc/en/Tutorial/Sketch) to be uploaded in the Arduino device . A very simple need-not explain script .

## Connections in Arduino 

1. Two switches on a bread board .
2. Gave input from the switches to 5 , 10 Digital pins to toggle Anticlockwise and clockwise respectively.


## Working

* The snake game starts only when socket is connected .
* The two [buttons on Arduino](http://arduino.cc/en/Tutorial/DigitalReadSerial) allow us to send signals to the [serialport]( https://github.com/voodootikigod/node-serialport) opened by node app that listens for input
* As node gets input , it broadcasts the switch number to all clients .
* Clientside js interprets the direction and rotates the snake .
