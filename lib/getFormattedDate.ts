export function getFormattedDate(dateString: string) {
  return new Intl.DateTimeFormat("id-ID", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
