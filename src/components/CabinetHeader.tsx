'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Главная', path: '/cabinet' },
  { name: 'Парусное судно (ГИМС)', path: '/cabinet/sail' },
  { name: 'Суда особой конструкции', path: '/cabinet/special' },
  { name: 'Моторное судно / гидроцикл (ГИМС)', path: '/cabinet/motor' },
  { name: 'Яхтинг', path: '/cabinet/yachting' },
  { name: 'Минтранс', path: '/cabinet/mintrans' },
  { name: 'Гостехнадзор', path: '/cabinet/gostekhnadzor' },
  { name: 'Спасатель ВОСВОД', path: '/cabinet/rescuer' },
];

const firstRow = navItems.slice(0, 4);
const secondRow = navItems.slice(4);

export const CabinetHeader = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-blue-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4">
          <Link href="/public" className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl border border-blue-200 group-hover:border-blue-400 transition-all bg-white shadow-sm flex items-center justify-center">
              <Image
                src="/logo-vosvod.png"
                alt="Логотип ВОСВОД"
                width={56}
                height={56}
                className="rounded-md object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-500 tracking-wide">
                АНО ДПО {`"Учебный центр судовождения"`}
              </span>
              <span className="text-xl font-bold text-blue-800 tracking-tight uppercase">
                Личный кабинет ВОСВОД
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation: Two Rows */}
        <nav className="flex flex-col gap-2">
          {[firstRow, secondRow].map((row, idx) => (
            <ul
              key={idx}
              className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-none"
            >
              {row.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm sm:text-base transition-all font-medium whitespace-nowrap',
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ))}
        </nav>
      </div>
    </header>
  );
};
