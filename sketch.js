function setup() {
    createCanvas(720, 400);
  

}
  
  function draw() {
    background(109, 180, 222);
  
    push();
    translate(width * 0.5, height * 0.5);
    rotate(frameCount / 50.0);
    star(0, 0, 80, 100, 40);
    pop();
  
    



  }
  
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;


  
     
     vertex(sx, sy);
     if((mouseX<360)&&(mouseY<200)){
        fill(color("white"));
        
        }else if((mouseX>100)&&(mouseY<200)){
        fill(color("purple"));
        
        }else if((mouseX>360)&&(mouseY>200)){
        fill(color("orange"));
        
        }else if((mouseX<360)&&(mouseY>200)){
         fill(color("black"));
        }
    }
    endShape(CLOSE);
  }

