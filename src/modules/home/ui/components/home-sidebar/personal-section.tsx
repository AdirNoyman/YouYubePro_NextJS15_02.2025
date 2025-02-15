'use client';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from 'lucide-react';
import Link from 'next/link';

const items = [
  {
    title: 'History',
    url: '/playlists/history',
    icon: HistoryIcon,
    auth: true,
  },
  {
    title: 'Likes videos',
    url: '/playlists/liked',
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: 'All playlists',
    url: '/playlists',
    icon: ListVideoIcon,
    auth: true,
  },
];

const SideBarPersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false} // TODO: Implement active state according to the current route
                onClick={() => {}} // TODO: Implement navigation or something else, on click
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SideBarPersonalSection;
