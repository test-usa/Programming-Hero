
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import logo from "../assets/images/logo.svg"
import CommonContainer from "../common/CommonContainer";

const Header = () => {
  return (
    <CommonContainer >
      <div className=" font-Grotesk">
        <Navbar>
          <NavbarBrand className="gap-0">
            <img src={logo} alt="logo" />
            <p className="font-bold text-white text-lg ">Programming Hero</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="/">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link aria-current="page" href="/products">
                Products
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/about">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/success">
                Success
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/mehedi">
                mehedi            </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/eitty">
                eitty
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/himel">
                himel
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>
    </CommonContainer>
  );
};

export default Header;
