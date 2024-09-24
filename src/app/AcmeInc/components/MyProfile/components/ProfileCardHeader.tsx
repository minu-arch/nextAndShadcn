import React from 'react'
import { CardHeader } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { CardTitle, CardDescription } from "@/components/ui/card"


const ProfileCardHeader = () => {
  return (
    <CardHeader className="flex flex-row items-center gap-4">
    <Avatar className="h-20 w-20">
      <AvatarImage alt="User avatar" src="/placeholder.svg" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
    <div>
      <CardTitle>Account Information</CardTitle>
      <CardDescription>
        Manage your account details and preferences
      </CardDescription>
    </div>
  </CardHeader>
  )
}

export default ProfileCardHeader