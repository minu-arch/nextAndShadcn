import React from 'react'
import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"

const ProfileFooter = () => {
  return (
    <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Save changes</Button>
  </CardFooter>
  )
}

export default ProfileFooter