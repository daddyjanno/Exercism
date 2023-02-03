export function hey(message: string): string {
  let answer = "";
  let onlyLetters = message.trim();

  if (onlyLetters.length === 0) return "Fine. Be that way!";

  else if (/[A-Z]/.test(onlyLetters) && onlyLetters === onlyLetters.toUpperCase())
    return onlyLetters.endsWith("?")
    ? "Calm down, I know what I'm doing!"
    : "Whoa, chill out!";

  else if (onlyLetters.endsWith("?")) return "Sure."

  else return "Whatever."

}
