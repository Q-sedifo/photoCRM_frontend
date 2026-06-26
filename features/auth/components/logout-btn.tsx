import { Button } from "@/components/ui/button"
import { useLogout } from "@/features/auth/hooks/useLogout"
import { LogOut } from "lucide-react"

export function LogoutBtn() {
  const { mutate: logout } = useLogout()

  return (
    <Button 
      variant="secondary" 
      className="bg-destructive text-destructive-foreground hover:bg-destructive/90" 
      onClick={() => logout()}
      size="xs"
    >
      Logout
      <LogOut className="h-4 w-4" />
    </Button>
  )
}