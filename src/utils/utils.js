  /*consoleCalls=*/function logAtInterval(message, count, interval) {
  const updatedCount = count + 1;
  if (updatedCount % (interval) === 0) {
    console.log(message);
  }
  return updatedCount;
}

function updateStateVariable(stateVar, paramName, paramValue) {
  return {
    ...stateVar,
    [paramName]: paramValue,
  };
}

function drawText({ctx,fillStyle,fontSize,fontFamily,textAlign,
  textBaseline,text,x,y,}) {
  ctx.fillStyle = fillStyle;
  ctx.font = `${fontSize}px ${fontFamily}`;
  ctx.textAlign = textAlign;
  ctx.textBaseline = textBaseline;
  ctx.fillText(text, x, y);
}

function simulateBounce(parameter, speed, speedModifier, upperBoundary, lowerBoundary) {
  //console.log(parameter, speed, upperBoundary, lowerBoundary)
  let newYpos = parameter + speed * speedModifier;
  let newSpeedModifier = speedModifier;
  if (newYpos < upperBoundary || newYpos > lowerBoundary) {
    newYpos = parameter - speed * speedModifier;
    newSpeedModifier = -speedModifier;
  }
  return [newYpos, newSpeedModifier];
}

export {logAtInterval,updateStateVariable,drawText,simulateBounce }