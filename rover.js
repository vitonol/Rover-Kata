// Rover Object Goes Here
//declare new Rover class
class Rover {
    constructor(name, direction, x, y, travelLog) {
      this.name = name;
      this.direction = direction;
      this.x = x;
      this.y = y;
      this.travelLog = travelLog;
    }
  }
  
  //creates new array 10X10
  const grid = new Array(10);
        for (let i =0; i < 10; i++) {
          grid[i] = new Array(10);
        }  
  //sets default space in array
  let empty = '[]';
  
  //populates array with default empty space 
  for (let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        grid[i][j] = empty;
      }
  }
  //creates an obstacle at specific location in array
  let obstacle = "O";
  grid[5][0] = obstacle;
  grid[2][4] = obstacle;
  grid[5][9] = obstacle;
  
  let obstaclesList = [];
  
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] !== empty) {
        obstaclesList.push({x: j, y: i});
      }
    }
  }
  
  /* 
  //piece of code that is gonna help link rover's grid and obstacles grid..eventually....
  grid[theRover.x][theRover.y] = 0;
        theRover.x = x;
        theRover.y = y;
        grid[x][y] = 1;
        console.log("[" + theRover.x + ", " + theRover.y + "]");
        theRover["travelLog"].push([theRover.x, theRover.y]);
  */
  
  //creates new rover object
  const rover1 = new Rover("Rover1", "N", 0, 0, ["0,0"]);
  const rover2 = new Rover("Rover2", "N", 3, 3, ["3,3"]);
  
   
  
  
  // ====================== functions goes below
  /*
  // this fuction is going to help see obstacles
  function isClearInFront(theRover){
    if (grid[x][y] = obstacle) {
    return false;
    console.log("Can't move ahead commander, obstacle on the way!");
    
    } else {
    true
    }
    
  
  function isClearBehind(theRover) {
    //code
  }
  
  */
  
  function turnLeft(theRover) {
    switch(theRover.direction) {
      case "N":
        theRover.direction = "W";
        break;
      case "W":
        theRover.direction = "S";
        break;
      case "S":
        theRover.direction = "E";
        break;
      case "E":
        theRover.direction = "N";
        break;
        }
    console.log(`turnLeft was called! Now ${theRover.name} is facing ${theRover.direction}`);
    }
    
  function turnRight(theRover){
    switch(theRover.direction) {
        case "N":
        theRover.direction = "E";
        break;
      case "E":
        theRover.direction = "S";
        break;
      case "S":
        theRover.direction = "W";
        break;
      case "W":
        theRover.direction = "N";
        break;
    }
    console.log(`turnRight was called! Now ${theRover.name} is facing ${theRover.direction}`);
  }
  
  function moveForward(theRover){
    switch(theRover.direction) {     
      case "W":
       theRover.x--;
        break;
      case "N":
       theRover.y--;
        break;
      case "E":
        theRover.x++;
        break;
      case "S":
        theRover.y++;
        break;
      default:
        console.log("CRitical SYSTEM FAILUre!!! CAn noT Detect Rover's position");
        break;
    } 
    if(theRover.x >= 0 && theRover.x <= 9 && theRover.y >=0 && theRover.y <= 9 ) {
        console.log("[" + theRover.x + ", " + theRover.y + "]");
      
         for(let k = 0; k < obstaclesList.length; k++){
         if(theRover.x === obstaclesList[k].x && theRover.y === obstaclesList[k].y) {
          console.log("Obstacle was found! Stopping now!");
           throw Error("Obstacle!!!");
         } 
       }
        console.log(`MoveForward Was called. Now ${theRover.name}'s current position is: \n x: ${theRover.x} \n y: ${theRover.y}`)
        theRover.travelLog.push([theRover.x, theRover.y]);
      
      //console.log(`MoveForward Was called. Now ${theRover.name}'s current position is: \n x: ${theRover.x} \n y: ${theRover.y}`)
         // theRover.travelLog.push(theRover.x + "," + theRover.y);
   } else { 
      console.log("You can't place Rover outside of the board!");}
  }
     
  function moveBackwards(theRover){   
      switch(theRover.direction) {
      case "W":
       theRover.x++;
        break;
      case "N":
       theRover.y++;
        break;
      case "E":
        theRover.x--;
        break;
      case "S":
        theRover.y--;
        break;
      default:
      console.log("CRitical SYSTEM FAILUre!!! CAn noT Detect Rover's position");
      }
     if(theRover.x >= 0 && theRover.x <= 9 && theRover.y >=0 && theRover.y <= 9 ) {
        console.log("[" + theRover.x + ", " + theRover.y + "]");
      
         for(let k = 0; k < obstaclesList.length; k++){
         if(theRover.x === obstaclesList[k].x && theRover.y === obstaclesList[k].y) {
          console.log("Obstacle was found! Stopping now!");
           throw Error("Obstacle!!!");
         } 
       }console.log(`MoveBackward Was called. Now ${theRover.name}'s current position is: \n x: ${theRover.x} \n y: ${theRover.y}`)
       theRover.travelLog.push(theRover.x + "," + theRover.y);
  } else { 
   console.log("TOlD YA - You can't place Rover outside of the board!");} 
   }
  
  function command(theRover, orders) {
    for (let i = 0; i < orders.length; i++) {
      let order = orders[i];
      switch(order) {
        case "f": //Forward
          moveForward(theRover);
          break;
        case "l" : //left
          turnLeft(theRover);
          break;
        case "r": //Right
          turnRight(theRover);
          break; 
        case "b": //Back
          moveBackwards(theRover);
          break;
        default:
          console.log("Invalid Key. Please use: \n 'f' for Forward \n 'l' for Left \n 'r' for Right \n 'b' for Backwards");
      }
    }
   } 
    
  command(rover1, "rfff");
  console.log(rover1.travelLog);
  //command(rover2, "rrffff")
  //console.log(rover2.travelLog);
  
  console.log(grid.join('\n'));   //prints whole grid
  //console.log(grid[0][0]);
  
   
   
   
  
    