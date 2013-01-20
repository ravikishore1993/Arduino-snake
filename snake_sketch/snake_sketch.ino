void setup()
{
  
  Serial.begin(9600);
  pinMode(5,INPUT);
 pinMode(10,INPUT);  
  
}

void loop()
{ 
  
  if( digitalRead(5) == 1 ){ Serial.println('5');  }
    if( digitalRead(10) == 1 ) Serial.println('1');
  delay(110);  
}
