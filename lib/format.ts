const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

export function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const rest = minutes % 60;
  return [
    hours && plural(hours, "hour"),
    (rest || !hours) && plural(rest, "min"),
  ]
    .filter(Boolean)
    .join(" ");
}

export function formatRating(rating: number) {
  return rating.toFixed(1);
}
