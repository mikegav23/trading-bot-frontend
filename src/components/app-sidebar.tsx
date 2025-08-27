"use client";

import * as React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/sidebar";
import {
  RiBnbLine,
  RiBtcLine,
  RiEthLine,
  RiSlowDownLine,
  RiSpeedUpLine,
  RiStockLine,
  RiWallet3Line,
} from "@remixicon/react";

const basePath =
  "https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp4/";

// This is sample data
const navigationItems = [
  {
    title: "Wallet",
    url: "/dash/1",
    icon: RiWallet3Line,
  },
  {
    title: "Solaris",
    url: "/dash/2",
    icon: RiStockLine,
  },
  {
    title: "Bitcoin",
    url: "/dash/btc",
    icon: RiBtcLine,
  },
  {
    title: "Ethereum",
    url: "/dash/eth",
    icon: RiEthLine,
  },
  {
    title: "BNB",
    url: "/dash /bnb",
    icon: RiBnbLine,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="none" className="w-16 sm:w-20 border-r" {...props}>
      <SidebarHeader className="items-center py-4">
        <Link
          className="inline-flex transition transform
             hover:-translate-y-1 hover:scale-105"
          href="/"
          aria-label="Go to overview"
        >
          <RiSpeedUpLine className="size-8" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="overflow-visible">
        <SidebarGroup className="p-4">
          <SidebarMenu className="gap-4">
            {navigationItems.map((item) => (
              <SidebarMenuItem
                key={item.title}
                className="flex items-center justify-center"
              >
                <span className="relative has-data-[active=true]:before:absolute has-data-[active=true]:before:inset-0 has-data-[active=true]:before:rounded-full has-data-[active=true]:before:bg-sidebar-primary/48 has-data-[active=true]:before:blur-[10px] has-data-[active=true]:before:-left-2 has-data-[active=true]:after:absolute has-data-[active=true]:after:size-1 has-data-[active=true]:after:bg-foreground has-data-[active=true]:after:rounded-full has-data-[active=true]:after:right-full has-data-[active=true]:after:top-1/2 has-data-[active=true]:after:-translate-y-1/2 has-data-[active=true]:after:-translate-x-2">
                  <SidebarMenuButton
                    asChild
                    className="relative size-9 sm:size-11 p-0 flex items-center justify-center rounded-full bg-linear-to-b from-background/64 to-background dark:bg-none dark:bg-card/64 dark:hover:bg-card/80 shadow-[0_1px_1px_rgba(0,0,0,0.05),_0_2px_2px_rgba(0,0,0,0.05),_0_4px_4px_rgba(0,0,0,0.05),_0_6px_6px_rgba(0,0,0,0.05)] dark:inset-shadow-[0_1px_rgb(255_255_255/0.15)]"
                    tooltip={{ children: item.title, hidden: false }}
                  >
                    <a
                      href={item.url}
                      aria-label={item.title}
                      className="flex items-center justify-center"
                      title={item.title}
                    >
                      {item.icon && (
                        <span className="inline-flex items-center justify-center leading-none align-middle">
                          {/* remixicon-react prefers font-size & currentColor */}
                          <item.icon
                            aria-hidden="true"
                            className="block shrink-0 text-foreground text-[20px] sm:text-[24px]"
                          />
                        </span>
                      )}
                      <span className="hidden">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </span>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
