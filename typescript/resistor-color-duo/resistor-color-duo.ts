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

const colorCode = (color: string): number => COLORS.indexOf(color);

export function decodedValue([color1, color2]: string[]): number {
  return colorCode(color1) * 10 + colorCode(color2);
}
