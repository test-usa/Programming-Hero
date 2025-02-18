import { Button } from "@heroui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { Input } from "@heroui/react";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="faded">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe
            rerum dignissimos ut? Eligendi doloremque quae beatae blanditiis
            ratione aliquam eius ducimus, fugiat illo quidem distinctio, quam id
            assumenda ipsum.
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos saepe
            rerum dignissimos ut? Eligendi doloremque quae beatae blanditiis
            ratione aliquam eius ducimus, fugiat illo quidem distinctio, quam id
            assumenda ipsum.
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
