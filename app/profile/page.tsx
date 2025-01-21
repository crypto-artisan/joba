'use client'

import AppAbility from "@/components/app-ability";
import AppCredential from "@/components/app-credential";
import AppHighlight from "@/components/app-highlight";
import AppProfile from "@/components/app-profile";
import AppProject from "@/components/app-project";
import AppService from "@/components/app-service";
import { EditIcon, ShareIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useUserContext } from "@/providers/user-provider";
import { CheckIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Profile() {
    const { setIsShared } = useUserContext();
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        setIsShared(false);
    }, [])

    const handleCopy = () => {
        navigator.clipboard.writeText('https://joba.vercel.app/share/1234-5678')
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err)
            })
    }

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between items-center py-8">
                <Label className="font-medium text-[32px]">Profile</Label>
                <div className="space-x-2">
                    <Button variant={'outline'} className="border-foreground bg-transparent">
                        <EditIcon size={16} />
                        <span className="text-[14px] font-medium">Edit profile</span>
                    </Button>
                    <Button variant={'outline'} className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 text-white hover:text-secondary"
                        onClick={handleCopy}
                    >
                        {copied ? <CheckIcon size={16} /> : <ShareIcon size={16} />}
                        <span>{copied ? 'Copied' : 'Share'}</span>
                    </Button>
                </div>
            </div>
            <div className="w-full flex flex-col xl:flex-row gap-4 pb-8">
                <div className="flex flex-col gap-4 pb-32 md:pb-0">
                    <AppProfile />
                    <AppHighlight />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <AppAbility />
                    <AppService />
                    <AppCredential />
                    <AppProject />
                </div>
            </div>
        </div>
    );
}
