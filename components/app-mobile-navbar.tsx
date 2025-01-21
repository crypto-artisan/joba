'use client'

import { Button } from "@/components/ui/button"
import userAvatar from "@/public/img/user.png"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"
import { useUserContext } from "@/providers/user-provider"
import { AlignJustifyIcon, ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { NavbarItems } from "@/config"
import Link from "next/link"

export function AppMobileNavbar({ className }: { className?: string }) {

    const { user } = useUserContext();

    return (
        <div className={cn("", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="ring-0 focus-visible:ring-0">
                    <Button variant="ghost" className="h-10 w-10">
                        <AlignJustifyIcon size={32} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem>
                        <Image src={userAvatar} alt="userAvatar" priority height={32} width={32} />
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user.userName}</p>
                                <p className="text-xs leading-none text-muted-foreground">
                                    {user.nickName}
                                </p>
                            </div>
                        </DropdownMenuLabel>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {
                            NavbarItems.map(item => (
                                <DropdownMenuItem key={item.id} disabled={!item.isActive}>
                                    <Link href={item.link} className="w-full">
                                        {item.title}
                                    </Link>
                                </DropdownMenuItem>
                            ))
                        }
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu >
        </div>
    )
}