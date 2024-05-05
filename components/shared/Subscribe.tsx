"use client";
import * as React from "react";
import { addSubscriber } from "../../lib/actions/subscribers.action";

import { cn } from "../../lib/utils";
// import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function SubscribeButton() {
  const [open, setOpen] = React.useState(false);
  // const isDesktop = useMediaQuery("(min-width: 768px)");

  // if (isDesktop) {
  //   return (
  //     <Dialog open={open} onOpenChange={setOpen}>
  //       <DialogTrigger asChild>
  //         <Button>Edit Profile</Button>
  //       </DialogTrigger>
  //       <DialogContent className="sm:max-w-[425px]">
  //         <DialogHeader>
  //           <DialogTitle>Edit profile</DialogTitle>
  //           <DialogDescription>
  //             Make changes to your profile here. Click save when you`re done.
  //           </DialogDescription>
  //         </DialogHeader>
  //         <ProfileForm />
  //       </DialogContent>
  //     </Dialog>
  //   );
  // }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to Notification</DialogTitle>
          <DialogDescription>
            Enter Your Email Address and continue
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form
      action={addSubscriber}
      className={cn("grid items-start gap-4", className)}
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          defaultValue="shadcn@example.com"
        />
      </div>
      <Button type="submit">Subscribe</Button>
    </form>
  );
}
