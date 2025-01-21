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
import Link from "next/link"
import { useAccount, useDisconnect } from "wagmi"
import { shortAddress } from "@/utils"
import { useRouter } from "next/navigation"

export function UserNav({ className }: { className?: string }) {

    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const router = useRouter();

    const handleDisconnect = () => {
        disconnect();
        router.push("/");
    }

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
                                {address && <p className="text-sm font-medium leading-none">{shortAddress(address)}</p>}
                            </div>
                        </DropdownMenuLabel>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <Link href={"/profile"}>
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                        </Link>
                        <Link href={"/credentials"}>
                            <DropdownMenuItem>
                                Credentials
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleDisconnect}>
                        Disconnect
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu >
        </div>
    )
}