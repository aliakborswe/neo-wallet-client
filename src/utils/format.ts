export function formatCurrency(amount: number): string {
  return `৳${new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)}`;
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\+\d{2})(\d{3})(\d{4})(\d{4})/, "$1 $2 $3 $4");
}
