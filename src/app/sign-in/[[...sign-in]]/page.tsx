import { SignIn } from "@clerk/nextjs";

export default function Page() {

  return (
    <div className="flex flex-row h-[100vh] justify-center items-center">
      <SignIn />
    </div>
  )
}