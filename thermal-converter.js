const celciusToFarenheit = (celsius) => {
  try{
    const cTemp = celsius;
    const cToFahr = (cTemp * 9) / 5 + 32;
    const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    return message;
  }
  catch(e){
    return "Sorry unable to convert value \n "+e;
  }
};

const fahrenheiToCelsius = (fahrenheit) => {
  try{
    var fTemp = fahrenheit;
    var fToCel = ((fTemp - 32) * 5) / 9;
    var message = fTemp + "\xB0F is " + fToCel + "\xB0C.";
    return message;
  }
  catch(e){
    return "Sorry unable to convert value \n "+e;
  }
};

const kelvinToFahrenheit = (kel) => {
  try{
    var kTemp = kel;
    var kTofhr = (kTemp - 273.15) * 1.8 + 32;
    var message = kTemp + "\xB0K is " + kTofhr + "\xB0F.";
    return message;
  }
  catch(e){
    return "Sorry unable to convert value \n "+e;
  }
};

const fahrenheitToKelvin = (fhar) => {
  try{
    var fTemp = fhar;
    var fharToKel = ((fTemp-32)/1.8)+273.15;;
    var message = fTemp + "\xB0F is " + fharToKel + "\xB0K.";
    return message;
  }
  catch(e){
    return "Sorry unable to convert value \n "+e;
  }
};
  

exports.celciusToFarenheit = celciusToFarenheit;
exports.fahrenheiToCelsius = fahrenheiToCelsius;
exports.kelvinToFahrenheit = kelvinToFahrenheit;
exports.fahrenheitToKelvin = fahrenheitToKelvin;