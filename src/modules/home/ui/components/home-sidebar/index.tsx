import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import React from 'react'
import SideBarMainSection from './main-section'

const HomeSidebar = () => {
  return (
    <Sidebar className='pt-16 z-40 border-none'>
        <SidebarContent className='bg-background'>
            <SideBarMainSection />
        </SidebarContent>
    </Sidebar>
  )
}

export default HomeSidebar