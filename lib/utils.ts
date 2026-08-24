const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

export function getMonthName(month: number) {
  return monthNames[month];
}

export function formatBlogPostDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(new Date(Date.parse(date)))
    .replace(/(\d{2} \w{3}) (\d{4})/, "$1, $2");
}
