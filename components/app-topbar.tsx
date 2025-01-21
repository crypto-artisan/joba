'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { NavbarItems } from "@/config";
import Link from "next/link";
import { GiftIcon, Logo, NotifyIcon } from "./icons";
import { Button } from "./ui/button";
import { UserNav } from "./app-user-nav";
import { usePathname } from "next/navigation";
import { AppMobileNavbar } from "./app-mobile-navbar";


export default function AppTopbar() {

    const path = usePathname();

    return (
        <div className="flex flex-row w-full items-center justify-between p-4 border-b-[1px] border-b-neutral-200">
            <Logo />
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                    {
                        NavbarItems.map(item => (
                            <Button variant={'ghost'} key={item.id} disabled={!item.isActive} className="bg-none hover:bg-none p-0">
                                <Link href={item.link} className={`${path === item.link ? 'text-secondary bg-[#F5FAFF]' : 'text-[#5F6D7E]'} hover:bg-[#F5FAFF] p-2 rounded-md hover:text-secondary text-[15px]`}>
                                    {item.title}
                                </Link>
                            </Button>
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
            <div className="flex flex-row gap-2">
                <Button variant={'ghost'} size={'icon'} className="h-10">
                    <GiftIcon size={24} />
                </Button>
                <Button variant={'ghost'} size={'icon'} className="h-10">
                    <NotifyIcon size={24} />
                </Button>
                <UserNav className="hidden md:flex" />
                <AppMobileNavbar className="flex md:hidden" />
            </div>
        </div>
    )
}