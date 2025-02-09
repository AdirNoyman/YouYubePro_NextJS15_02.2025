'use client';
import { SidebarProvider } from '@/components/ui/sidebar';
import { HomeNavbar } from '../components/home-navbar';

type HomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="w-full">
        <HomeNavbar />
        <div className="">{children}</div>
      </div>
    </SidebarProvider>
  );
};
