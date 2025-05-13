'use client';

import Link from 'next/link';
import Image from 'next/image';

export const LogoBlock = () => (
  <Link href="/public" className="flex items-center gap-4 group">
    <div className="w-16 h-16 rounded-full border-2 border-blue-600/30 group-hover:border-blue-600 transition-all flex items-center justify-center bg-gray-50">
      <Image
        src="/logo-vosvod.png"
        alt="Логотип"
        width={64}
        height={64}
        className="rounded-full object-cover"
        priority
      />
    </div>
    <div className="flex flex-col">
      <span className="text-sm text-gray-700 whitespace-nowrap">
        АНО ДПО "Учебный центр судовождения"
      </span>
      <span className="text-2xl font-bold text-black whitespace-nowrap uppercase tracking-tight">
        УЧЕБНЫЙ ЦЕНТР ВОСВОД
      </span>
    </div>
  </Link>
);
