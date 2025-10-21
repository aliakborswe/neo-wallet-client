import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";
import { useProfileQuery } from "@/redux/features/auth/auth.api";
import Logo from "./Logo";
import Logout from "./Logout";
import DarkLight from "./DarkLight";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useProfileQuery(undefined);

  const userRole = data?.data?.role;

  // Map user roles to dashboard routes
  const dashboardRoutes: Record<string, string> = {
    ADMIN: "/admin",
    AGENT: "/agent",
    USER: "/user",
  };

  const toggleMenu = () => setShowMenu(!showMenu);
  // hide mobile menu when click any where outside mobile menu
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const clickOutSide = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", clickOutSide);
    return () => {
      document.removeEventListener("mousedown", clickOutSide);
    };
  }, []);
  return (
    <nav className='sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        <Logo />
        <div onClick={toggleMenu} className='lg:hidden flex items-center gap-3'>
          <DarkLight />
          {showMenu ? <X size={36} /> : <Menu size={36} />}
        </div>

        <div
          ref={menuRef}
          className={`${
            showMenu ? "block" : "hidden"
          } lg:block absolute w-[97%] lg:w-fit lg:static top-[62px] left-2.5 p-4 rounded-xl bg-background lg:bg-transparent border lg:border-none shadow-md lg:shadow-none`}
        >
          <div className='lg:flex justify-between items-center'>
            <div className='flex flex-col lg:flex-row gap-6 text-base font-medium text-foreground'>
              <div className='hidden lg:block'>
                <DarkLight />
              </div>
              <ActiveLink to='/'>Home</ActiveLink>
              <ActiveLink to='/about'>About</ActiveLink>
              <ActiveLink to='/features'>Features</ActiveLink>
              <ActiveLink to='/pricing'>Pricing</ActiveLink>
              <ActiveLink to='/contact'>Contact</ActiveLink>
              <ActiveLink to='/faq'>FAQ</ActiveLink>
              {data?.data?.email && (
                <ActiveLink to={dashboardRoutes[userRole] || "/"}>
                  Dashboard
                </ActiveLink>
              )}
            </div>

            <div className='lg:ml-8 mt-6 lg:mt-0'>
              {data?.data?.email && <Logout />}
              {!data?.data?.email && (
                <ActiveLink to='/login'>
                  <Button
                    variant={"default"}
                    className='flex items-center gap-1 hover:bg-primary cursor-pointer'
                  >
                    Get Started
                  </Button>
                </ActiveLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
