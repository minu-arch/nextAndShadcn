
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  UserIcon,
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  GlobeIcon,
  LockIcon,
} from "lucide-react";
import ProfileCardHeader from "./components/ProfileCardHeader";
import ProfileSelector from "./components/ProfileSelector";
import ProfileFooter from "./components/ProfileFooter";

export default function MyProfile() {
  return (
    <Card className="mx-auto w-full max-w-3xl">
      {/* Profile Card Header */}
      <ProfileCardHeader />

      {/* Profile Card Content */}
      <CardContent className="grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="John" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Doe" />
          </div>
        </div>
        <Separator />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">
              <MailIcon className="mr-2 inline-block h-4 w-4" />
              Email
            </Label>
            <Input id="email" placeholder="john.doe@example.com" type="email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">
              <PhoneIcon className="mr-2 inline-block h-4 w-4" />
              Phone number
            </Label>
            <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
          </div>
        </div>
        <Separator />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="date-of-birth">
              <CalendarIcon className="mr-2 inline-block h-4 w-4" />
              Date of birth
            </Label>
            <Input id="date-of-birth" type="date" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="language">
              <GlobeIcon className="mr-2 inline-block h-4 w-4" />
              Preferred language
            </Label>
            <ProfileSelector />
          </div>
        </div>
        <Separator />
        <div className="grid gap-2">
          <Label htmlFor="bio">
            <UserIcon className="mr-2 inline-block h-4 w-4" />
            Bio
          </Label>
          <Input id="bio" placeholder="Tell us about yourself" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">
            <LockIcon className="mr-2 inline-block h-4 w-4" />
            Password
          </Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
        {/* Profile Card Footer */}
      <ProfileFooter />
    </Card>
  );
}
