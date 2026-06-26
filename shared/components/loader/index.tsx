import { Spinner } from "@/components/ui/spinner"

export const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner className="h-10 w-10" />
    </div>
  )
}