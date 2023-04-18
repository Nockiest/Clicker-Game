  function logAtInterval(message, count, interval) {
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

export {logAtInterval,updateStateVariable,drawText }