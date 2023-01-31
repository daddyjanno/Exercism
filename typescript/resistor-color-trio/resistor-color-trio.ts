const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export function decodedResistorValue([color1, color2, color3]: string[]): string {
  let num = ((COLORS.indexOf(color1)*10) + (COLORS.indexOf(color2))) * (10**(COLORS.indexOf(color3)));
  let ohms = "ohms";
  if (num >= 1000){
    ohms = "kiloohms";
    num = num/1000;
  }
  return (num + " " + ohms);
}
