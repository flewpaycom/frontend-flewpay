// utils/i18n.ts
import { createNavigation } from 'next-intl/navigation';
import { locales } from '@/i18n/routing';

export const { Link, redirect, usePathname, useRouter } = createNavigation({ locales });

export function getLocalizedPath(path: string, locale: string) {
    return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}