'use client';
import HoroscopeIcon from '../../icons/tabs/horoscope.svg';
import CompatibilityIcon from '../../icons/tabs/compatibility.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const TABS = [
  {
    name: 'Horoscope',
    icon: () => <HoroscopeIcon />,
    path: '/',
  },
  {
    name: 'Compatibility',
    icon: () => <CompatibilityIcon />,
    path: '/compatibility',
  },
];

export default function BottomTabs() {
  const pathname = usePathname();

  console.log('pathname', pathname);

  return (
    <div className="flex items-center justify-around">
      {TABS.map(item => (
        <Link
          key={item.name}
          href={item.path}
          className={clsx('flex flex-col items-center gap-2.5 text-gray text-xs pb-3', {
            'text-primary': pathname === item.path,
          })}>
          {item.name}
          {item.icon()}
        </Link>
      ))}
    </div>
  );
}
