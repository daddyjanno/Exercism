//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const earthYearInSeconds = 31557600;
  let orbitalPeriod = 0;
  let planetYearInSeconds = 0;
  switch (planet) {
    case "mercury":
      orbitalPeriod = 0.2408467;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "venus":
      orbitalPeriod = 0.61519726;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "earth":
      orbitalPeriod = 1;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "mars":
      orbitalPeriod = 1.8808158;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "jupiter":
      orbitalPeriod = 11.862615;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "saturn":
      orbitalPeriod = 29.447498;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "uranus":
      orbitalPeriod = 84.016846;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    case "neptune":
      orbitalPeriod = 164.79132;
      planetYearInSeconds = earthYearInSeconds * orbitalPeriod;
      break;
    default:
      break;
  }
  return parseFloat((seconds / planetYearInSeconds).toFixed(2));
};
