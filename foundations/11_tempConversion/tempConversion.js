const convertToCelsius = function(temp) {
  cels_temp = (temp - 32) / 1.8
  return Math.round(cels_temp * 10) / 10
};

const convertToFahrenheit = function(temp) {
  fah_temp = temp*1.8 + 32
  return Math.round(fah_temp * 10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
