function bounceOff(movingRect, fixedRect){
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
        movingRect.velocityY = movingRect.velocityY  * (- 1);
        fixedRect.velocityY = fixedRect.velocityY * (-1);
      }
  
  }