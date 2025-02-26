import {
  Drawer,
  DrawerContent,
  DrawerBody,
  useDisclosure,
} from "@heroui/react";
import { RiMenu2Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { userStore } from "../../store/UserStore";

const MobileMenu = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { user, logOutUser } = userStore();
  return (
    <>
      <span onClick={onOpen} className="text-3xl">
        <RiMenu2Fill />
      </span>
      <Drawer
        radius="none"
        classNames={{
          base: "bg-[rgba(0,0,0,.9)] text-white ",
          closeButton: "text-3xl hover:text-red-500",
        }}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <DrawerBody className="px-0 py-16 text-xl">
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient "
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/success"
            >
              Success
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/mehedi"
            >
              mehedi
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/eitty"
            >
              eitty
            </NavLink>
            <NavLink
              className="py-2 text-center transition-all hover:bg-custom-gradient"
              to="/himel/all-post"
            >
              himel
            </NavLink>

            {user ? (
              <button
                onClick={() => {
                  logOutUser();
                }}
                className="py-2 text-center transition-all hover:bg-custom-gradient"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="py-2 text-center transition-all hover:bg-custom-gradient"
              >
                Login
              </NavLink>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
