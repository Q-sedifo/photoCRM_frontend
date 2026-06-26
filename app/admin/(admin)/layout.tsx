"use client"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { Loader } from "@/shared/components/loader"
import { useMe } from "@/features/auth/hooks/useMe"
import { useRouter } from "next/navigation"

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { data: me, isLoading, isError } = useMe()
  const router = useRouter()

  if (!isLoading && !me) {
    router.push('/admin/login')
    return null
  }

  if (isLoading) return <Loader />

  if (isError) return <div>Error loading user data</div>

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-2">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
