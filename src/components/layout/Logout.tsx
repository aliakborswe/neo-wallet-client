import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function Logout() {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      navigate("/login");
      toast.success("Logout success");
    } catch (error) {
      toast.error("Logout Fail");
      console.log(error);
    }
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
