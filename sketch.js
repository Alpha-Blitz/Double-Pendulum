var l1=100;
var l2=200;
var m1=20;
var m2=30;
var o1=3.14/2;
var o2=3.14/4;
var o1_v=0;
var o2_v=0;
var g=1;
var i=0;
var path = [];

var nx=0;
var ny=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(200);
  
  //Variable Initialization
  var cx=width/2;
  var cy=3*height/8;
  
  var x1=l1*sin(o1);
  var y1=l1*cos(o1);
  
  var x2=x1+l2*sin(o2);
  var y2=y1+l2*cos(o2);
  
  //Diagram
  translate(cx,cy);
  stroke(0);
  strokeWeight(4);
  point(0,0);
  strokeWeight(2);
  fill(0);
  line(0,0,x1,y1);
  line(x1,y1,x2,y2);
  ellipse(x1,y1,m1,m1);
  ellipse(x2,y2,m2,m2);
  
  //Motion
  var o1_a = (-g*(2*m1+m2)*sin(o1)-m2*g*sin(o1-2*o2)-2*sin(o1-o2)*m2*(o2_v*o2_v*l2+o1_v*o1_v*l1*cos(o1-o2)))/(l1*(2*m1+m2-m2*cos(2*o2-2*o1)));
  
  var o2_a = (2*sin(o1-o2)*(o1_v*o1_v*l1*(m1+m2)+g*(m1+m2)*cos(o1)+o2_v*o2_v*l2*m2*cos(o1-o2)))/(l2*(2*m1+m2-m2*cos(2*o2-2*o1)));
  
  o1_v += o1_a;
  o2_v += o2_a;
  o1 += o1_v;
  o2 += o2_v;
  
  path[i]=createVector(x2,y2);
  
  for(var j=0;j<=i;j++)
    {
      point(path[j]);
    }
  i++;
} 