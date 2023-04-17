export function logAtInterval(message, count, interval) {
  const updatedCount = count + 1;
  if (updatedCount % (interval) === 0) {
    console.log(message);
  }
  return updatedCount;
}