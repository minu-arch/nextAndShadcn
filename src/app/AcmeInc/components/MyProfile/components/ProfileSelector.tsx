import React from 'react'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
const ProfileSelector = () => {
  return (
    <Select defaultValue="en">
    <SelectTrigger id="language">
      <SelectValue placeholder="Select language" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="en">English</SelectItem>
      <SelectItem value="es">Spanish</SelectItem>
      <SelectItem value="fr">French</SelectItem>
      <SelectItem value="de">German</SelectItem>
    </SelectContent>
  </Select>
  )
}

export default ProfileSelector