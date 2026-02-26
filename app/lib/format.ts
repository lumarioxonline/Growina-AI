export function formatMoney(
  value: number,
  currency: string = "EUR",
  locale: string = "nl-NL",
) {
  const n = Number(value ?? 0);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    maximumFractionDigits: 2,
  }).format(isFinite(n) ? n : 0);
}

export function formatPct(value: number, decimals: number = 1) {
  const n = Number(value ?? 0);
  const safe = isFinite(n) ? n : 0;
  return `${safe.toFixed(decimals)}%`;
}
