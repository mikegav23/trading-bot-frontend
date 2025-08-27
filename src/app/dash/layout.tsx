import type { Metadata } from "next";
import { useId } from "react";
import { AppSidebar } from "@/src/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/src/components/sidebar";
import { Input } from "@/src/components/input";
import UserDropdown from "@/src/components/user-dropdown";
import { RiSearch2Line } from "@remixicon/react";
import ThemeToggle from "@/src/components/theme-toggle";

export const metadata: Metadata = {
  title: "Overview",
};

export default function DashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const id = useId();

  return (
    <div className="flex h-svh">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="overflow-auto px-4 md:px-6 lg:px-8">
          <header className="bg-sidebar/90 backdrop-blur-sm sticky top-0 z-50 -mx-2 px-2">
            <div className="flex shrink-0 items-center gap-2 border-b py-4 w-full max-w-7xl mx-auto">
              <div className="flex-1">
                <div className="relative inline-flex">
                  <Input
                    id={id}
                    className="h-8 ps-9 pe-9 bg-border border-transparent w-fit min-w-65"
                    aria-label="Search"
                  />
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 text-muted-foreground peer-disabled:opacity-50">
                    <RiSearch2Line size={20} aria-hidden="true" />
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2 text-muted-foreground">
                    <kbd className="inline-flex size-5 max-h-full items-center justify-center rounded bg-background shadow-xs px-1 font-[inherit] text-[0.625rem] font-medium text-muted-foreground/70">
                      /
                    </kbd>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ThemeToggle />
                <UserDropdown />
              </div>
            </div>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
