import * as React from "react";
import { Link, useLocation } from "react-router-dom"; // 1. Import Link dan useLocation

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../ui/mode-toggle";

const data = {
  navMain: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Dashboard",
          url: "/",
        },
        {
          title: "Flights",
          url: "/flights",
        },
        {
          title: "Airports",
          url: "/airports",
        },
      ],
    },
    {
      title: "Build Your Application",
      items: [
        {
          title: "Routing",
          url: "/routing",
        },
        {
          title: "Data Fetching",
          url: "/data-fetching",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  return (
    <Sidebar {...props}>
      <div className="flex justify-between items-center pr-4">
        <SidebarHeader>Check Flights</SidebarHeader>
        <ModeToggle />
      </div>

      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => {
                  const isActive = location.pathname === subItem.url;

                  return (
                    <SidebarMenuItem key={subItem.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link to={subItem.url}>{subItem.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
