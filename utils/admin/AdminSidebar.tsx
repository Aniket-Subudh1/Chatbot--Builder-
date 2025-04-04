"use client"
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home as Homi,
  LineChart,
  Menu,
  BotMessageSquare,
  CircleFadingPlus,
  Megaphone,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
export const description =
  "A products dashboard with a sidebar navigation and a main content area. The dashboard has a header with a search input and a user menu. The sidebar has a logo, navigation links, and a card with a call to action. The main content area shows an empty state with a call to action.";

export function AdminSidebar({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block sticky top-0 h-screen">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/admin" className="flex items-center gap-2 font-semibold">
              <img src="/logo.png" className="h-6 w-6" />
              <span>RadSab Bot</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/admin"
                className= {`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname=="/admin"?"text-primary bg-muted":"text-muted-foreground "} transition-all hover:text-primary`}
              >
                <Homi className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/chatbot"
                className= {`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname=="/admin/chatbot"?"text-primary bg-muted":"text-muted-foreground "} transition-all hover:text-primary`}
              >
                <BotMessageSquare className="h-4 w-4" />
                ChatBots
                <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                  2
                </Badge>
              </Link>
              <Link
                href="/admin/cms"
                className= {`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname=="/admin/cms"?"text-primary bg-muted":"text-muted-foreground "} transition-all hover:text-primary`}
              >
                <CircleFadingPlus className="h-4 w-4" />
                Manage CMS
              </Link>
              <Link
                href="/admin/crm"
                className= {`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname=="/admin/crm"?"text-primary bg-muted":"text-muted-foreground "} transition-all hover:text-primary`}
              >
                <Megaphone className="h-4 w-4" />
                Manage CRM
              </Link>
              <Link
                href="/admin/analytics"
                className= {`flex items-center gap-3 rounded-lg px-3 py-2 ${pathname=="/admin/analytics"?"text-primary bg-muted":"text-muted-foreground "} transition-all hover:text-primary`}
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
          <Card>
  <CardHeader className="p-2 pt-0 md:p-4">
    <CardTitle>View Analytics</CardTitle>
    <CardDescription>
      Gain insights and monitor your data with our comprehensive analytics tools.
    </CardDescription>
  </CardHeader>
  <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
    <Button size="sm" className="w-full">
      View Analytics
    </Button>
  </CardContent>
</Card>

          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link href="/admin" className="flex items-center gap-2 font-semibold mb-4 ml-2">
              <img src="/logo.png" className="h-6 w-6" />
              <span>RadSab Bot</span>
            </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Homi className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <BotMessageSquare className="h-4 w-4" />
                  ChatBots
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    2
                  </Badge>
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                >
                  <CircleFadingPlus className="h-4 w-4" />
                  Manage CMS
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <Megaphone className="h-4 w-4" />
                  Manage CRM
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                  <LineChart className="h-4 w-4" />
                  Analytics
                </Link>
              </nav>
              <div className="mt-auto">
              <Card>
  <CardHeader className="p-2 pt-0 md:p-4 mt-4">
    <CardTitle>View Analytics</CardTitle>
    <CardDescription>
      Gain insights and monitor your data with our comprehensive analytics tools.
    </CardDescription>
  </CardHeader>
  <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
    <Button size="sm" className="w-full">
      View Analytics
    </Button>
  </CardContent>
</Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem><Button>Logout</Button></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
