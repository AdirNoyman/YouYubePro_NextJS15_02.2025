import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import React from 'react'
import SideBarMainSection from './main-section'
import { Separator } from '@/components/ui/separator'
import SideBarPersonalSection from './personal-section'

const HomeSidebar = () => {
  return (
    <Sidebar className='pt-16 z-40 border-none' collapsible='icon'>
        <SidebarContent className='bg-background'>
            <SideBarMainSection />
            <Separator />
            <SideBarPersonalSection />
        </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar