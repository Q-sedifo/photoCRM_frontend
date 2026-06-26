import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LogoutBtn } from "@/features/auth/components/logout-btn"
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useMe } from "@/features/auth/hooks/useMe"
 
export function AppSidebar() {
  const { data: me } = useMe()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              Admin Menu
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent> 
      <SidebarFooter>
        <SidebarMenu>
          <div className="w-full flex items-center justify-between gap-2">
            <SidebarMenuItem className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>OG</AvatarFallback>
                <AvatarBadge className="bg-green-600 dark:bg-green-800" />
              </Avatar>
              <small className="text-sm font-medium leading-none">{me?.email}</small>
            </SidebarMenuItem>
            <LogoutBtn />
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}