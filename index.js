function distanceFromHqInBlocks(destination){
  if (destination > 42){
    return destination - 42
  } else {
    return 42 - destination
  }
}

function distanceFromHqInFeet(destination){
  return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(start, finish){
  if (start>finish){
    return (start-finish) * 264
  } else {
    return (finish-start) * 264
  }
}

function calculatesFarePrice(start, finish){
  if (distanceTravelledInFeet(start, finish) < 400){
    return 0
  }
  if (distanceTravelledInFeet(start, finish) < 2000){
    return (distanceTravelledInFeet(start, finish) - 400) * .02
  }
  if (distanceTravelledInFeet(start, finish) > 2000 && distanceTravelledInFeet(start, finish) < 2500){
    return 25
  }
  if (distanceTravelledInFeet(start, finish) > 2000){
  return 'cannot travel that far'
  }
}
