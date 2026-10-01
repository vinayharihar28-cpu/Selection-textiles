import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  amount: number,
  currency: 'INR' | 'USD' = 'INR',
  options: { includeDecimals?: boolean } = {}
): string {
  const formatter = new Intl.NumberFormat(currency === 'INR' ? 'en-IN' : 'en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: options.includeDecimals ? 2 : 0,
    maximumFractionDigits: options.includeDecimals ? 2 : 0,
  });

  return formatter.format(amount);
}
