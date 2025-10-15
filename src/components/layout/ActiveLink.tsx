import type { ReactNode } from "react";
import { NavLink } from "react-router";

type Props = {
  children: ReactNode;
  to: string;
};

export default function ActiveLink({ to, children }: Props) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-primary" : " ")}
    >
      <div>{children}</div>
    </NavLink>
  );
}
