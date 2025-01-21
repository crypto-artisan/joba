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
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function UserNav({ className }: { className?: string }) {

    const { user } = useUserContext();

    return (
        <div className={cn("", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild className="ring-0 focus-visible:ring-0">
                    <Button variant="ghost" className="relative h-10">
                        <Image src={userAvatar} alt="userAvatar" priority height={32} width={32} />
                        <ChevronDownIcon />
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
                        <DropdownMenuItem>
                            Profile
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Billing
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            Settings
                            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                        <DropdownMenuItem>New Team</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        Log out
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu >
        </div>
    )
}