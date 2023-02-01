export function age(planet, seconds) {
    let earthAgeInSeconds = 31557600;
    let spaceAge = 0;
    switch (planet) {
        case "mercury":
            spaceAge = seconds / earthAgeInSeconds / 0.2408467;
            break;
        case "venus":
            spaceAge = seconds / earthAgeInSeconds / 0.61519726;
            break;
        case "earth":
            spaceAge = seconds / earthAgeInSeconds / 1;
            break;
        case "mars":
            spaceAge = seconds / earthAgeInSeconds / 1.8808158;
            break;
        case "jupiter":
            spaceAge = seconds / earthAgeInSeconds / 11.862615;
            break;
        case "saturn":
            spaceAge = seconds / earthAgeInSeconds / 29.447498;
            break;
        case "uranus":
            spaceAge = seconds / earthAgeInSeconds / 84.016846;
            break;
        case "neptune":
            spaceAge = seconds / earthAgeInSeconds / 164.79132;
            break;
    }
    return parseFloat(spaceAge.toFixed(2));
}
