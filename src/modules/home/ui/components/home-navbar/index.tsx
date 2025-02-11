import { SidebarTrigger } from '@/components/ui/sidebar';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import SearchInput from './SearchInput';
import AuthButton from '@/modules/auth/ui/components/auth-button';

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* menu and logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger />
          <Link href="/">
            <div className="flex p-4 items-center gap-2 cursor-pointer">
              <Image src="/logo.svg" alt="logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-tight">MyTube</p>
            </div>
          </Link>
        </div>
        {/* Search bar */}
        <div className="flex flex-1 justify-center max-w-[720px] mx-auto">
          <SearchInput />
        </div>
        {/* Auth button */}
        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  );
};
