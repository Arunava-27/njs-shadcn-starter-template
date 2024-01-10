"use client";

import React, { useState } from "react";
import { Nav } from "@/components/ui/nav";
import { Button } from "@/components/ui/button";
import { useWindowWidth } from "@react-hook/window-size";

type Props = {};

import {
  LayoutDashboard,
  UserRound,
  ShoppingCart,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

export default function SideNavbar({}: Props) {
  const [isCollasped, setIsCollasped] = useState(false);
  const width = useWindowWidth();
  const mobileWidth = width < 768;

  const handleToggle = () => {
    setIsCollasped(!isCollasped);
  };

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={handleToggle}
          >
            {isCollasped ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollasped}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
