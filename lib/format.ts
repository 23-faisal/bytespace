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

export function formatTimeAgo(date: Date) {
  const now = new Date();

  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);

  if (diffInMinutes < 60) {
    return plural(diffInMinutes, "minute") + " ago";
  }

  const diffInHours = Math.floor(diffInMinutes / 60);

  if (diffInHours < 24) {
    return plural(diffInHours, "hour") + " ago";
  }

  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays < 30) {
    return plural(diffInDays, "day") + " ago";
  }

  const diffInMonths = Math.floor(diffInDays / 30);

  if (diffInMonths < 12) {
    return plural(diffInMonths, "month") + " ago";
  }

  const diffInYears = Math.floor(diffInMonths / 12);

  return plural(diffInYears, "year") + " ago";
}
