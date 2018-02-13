
{let npoints = round((2*3.1415*i))/1.73205)
star(x, y, radius1, radius2, npoints);
var angle = 360 / npoints;
var halfAngle = angle/2.0;
let radius1 =radStep*(i+1);
let radius2 =(radStep*i)+1;


beginShape();
for (var a = 0; a < 360; a += angle) {
  var sx = x + cos(a) * radius2;
  var sy = y + sin(a) * radius2;
  vertex(sx, sy);
  sx = x + cos(a+halfAngle) * radius1;
  sy = y + sin(a+halfAngle) * radius1;
  vertex(sx, sy);
}
endShape(CLOSE);}