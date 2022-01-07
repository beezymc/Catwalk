export const scrollAccelerator = (integer) => {
  if (integer === 0) {
    return;
  }
  let multiplier = integer < 0 ? Math.floor(integer / 222) : Math.ceil(integer / 222);
  return 222 * multiplier;
};

export const getAverageRating = (ratingsObj) => {
  let rating = 0;
  let denominator = 0;
  let numerator = 0;
  for (let key in ratingsObj) {
    let intKey = parseInt(key);
    let intVal = parseInt(ratingsObj[key]);
    numerator += intVal * intKey;
    denominator += intVal;
  }
  if (numerator) {
    rating = (Math.round((numerator / denominator) * 4) / 4).toFixed(2);
  }
  return rating;
};

