import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";

export default function Logout() {
  const [logout] = useLogoutMutation();

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <Button
      variant={"destructive"}
      size={"sm"}
      onClick={handleLogout}
      className='flex items-center gap-1 cursor-pointer'
    >
      Logout
    </Button>
  );
}
