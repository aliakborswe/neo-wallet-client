import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ActiveLink from "./ActiveLink";
import { Link } from "react-router";
import {
  authApi,
  useLogoutMutation,
  useProfileQuery,
} from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/hook";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { data } = useProfileQuery(undefined);
  const [logout] = useLogoutMutation();

  const dispatch = useAppDispatch();

  console.log(data?.data?.email);

  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      toast.success("Logout successful!");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
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
        <div className='flex items-center'>
          <div onClick={toggleMenu} className='lg:hidden'>
            {showMenu ? <X size={36} /> : <Menu size={36} />}
          </div>
          <Link to='/' className='flex gap-2 items-center justify-start'>
            <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary'>
              <span className='text-lg font-bold text-primary-foreground'>
                N
              </span>
            </div>
            <span className='text-xl font-bold'>Neo Wallet</span>
          </Link>
        </div>
        <div
          ref={menuRef}
          className={`${
            showMenu ? "block" : "hidden"
          } lg:block absolute  lg:static top-[58px] left-2.5 p-4 rounded-xl  bg-white border lg:border-none shadow-md lg:shadow-none lg:bg-transparent`}
        >
          <div className='flex flex-col lg:flex-row gap-6 text-base font-medium text-foreground w-full'>
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/features'>Features</ActiveLink>
            <ActiveLink to='/pricing'>Pricing</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
            {data?.data?.email && (
              <>
                <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
              </>
            )}
          </div>
        </div>

        <div className='flex items-center  gap-6 text-base font-semibold [&_a]:flex [&_a]:gap-1 '>
          {data?.data?.email && (
            <Button
              variant={"destructive"}
              size={"sm"}
              onClick={handleLogout}
              className='flex items-center gap-1 '
            >
              Logout
            </Button>
          )}
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
    </nav>
  );
}
