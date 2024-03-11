// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
return Math.abs(blocks-42);
}

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet) * 264;
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs (destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
    if ((Math.abs(destination - start) * 264) < 400) {
      return 0;
    }
    if ((Math.abs (destination - start) * 264) < 2000) {
        return (((Math.abs(destination - start) * 264)-400)*0.02);
    }
    if ((Math.abs (destination - start) * 264) < 2500) {
        return (25);
    }
    if ((Math.abs(destination - start) * 264) > 2500) {
        return ("cannot travel that far");
    }
  }