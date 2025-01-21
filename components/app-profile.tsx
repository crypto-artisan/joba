'use client'

import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Separator } from "./ui/separator";

import userAvatar from "@/public/img/user.png"
import { Label } from "./ui/label";
import { useUserContext } from "@/providers/user-provider";
import { BEGINNERImage, CalendarIcon, RankPolygon, TieIcon } from "./icons";
import { Button } from "./ui/button";
import { Contact_Icon } from "@/config";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { CircleIcon, DotIcon } from "lucide-react";

export default function AppProfile() {
    const { user, isShared } = useUserContext();

    return (
        <Card className="w-full xl:w-[446px] min-w-[350px] border border-[#D09AC6] bg-[#D09AC61A] md:h-[486px]">
            {/* <CardHeader className="flex flex-col gap-2 items-center bg-gradient-to-bl from-[#4C5ACD2A] from-35% via-[#F598AA2A] via-56% to-62% to-[#FDDFD0] backdrop-opacity-5 justify-center rounded-t-xl"> */}
            <CardHeader className="flex flex-col gap-2 items-center justify-center rounded-t-xl">
                <div className="flex relative">
                    <Image src={userAvatar} alt="userAvatar" priority height={120} width={120} />
                    <div className="bg-white rounded-full p-1 absolute bottom-0 left-1/2 ml-6">
                        <BEGINNERImage size={32} />
                    </div>
                </div>
                <Label className="text-[20px] text-foreground">{user.userName}</Label>
                {isShared && <Badge className="border border-[#ABEFC6] bg-[#ECFDF3] text-[#17B26A] text-[12px] rounded-lg"><CircleIcon size={8} color="#17B26A" fill="#17B26A" />&nbsp; Available for work</Badge>}
                <Separator className="bg-neutral-300" />
            </CardHeader>
            <CardContent className="py-1">
                <section className="flex flex-row justify-between pb-4 items-center">
                    <div className="flex flex-col justify-between gap-2">
                        <div className="flex flex-row gap-2">
                            <Button variant={'ghost'} size={'icon'} className="rounded-full fill-[#E5E0FC] bg-[#7F63F12A] p-1 w-7 h-7">
                                <TieIcon />
                            </Button>
                            <div className="flex flex-col gap-1">
                                <Label className="text-[14px] text-gray">Username</Label>
                                <Label className="text-[14px] text-[#333843]">{user.nickName}</Label>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Button variant={'ghost'} size={'icon'} className="rounded-full fill-[#E5E0FC] bg-[#7F63F12A] p-1 w-7 h-7">
                                <CalendarIcon />
                            </Button>
                            <div className="flex flex-col gap-2">
                                <Label className="text-[14px] text-[#858D9D]">Join Date</Label>
                                <Label className="text-[14px] text-[#333843]">{user.joinDate}</Label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                        <Label className="text-gray">Rank</Label>
                        <div className="relative">
                            <RankPolygon />
                            <Label className="text-white absolute top-5 left-3 z-10 text-[16px]">#12k</Label>
                        </div>
                    </div>
                </section>

                <Separator className="bg-neutral-300" />

                <section className="flex flex-col gap-4 py-4">
                    <p className="text-[14px]">{user.bio}</p>
                    <div className="flex flex-row gap-4 py-4">
                        {
                            user.contact.map(item => {
                                const contact_name = item.id;
                                const contact_icon = (Contact_Icon as any)[contact_name];
                                return (
                                    <Link key={item.id} href={item.link}>
                                        <contact_icon.icon />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </section>
            </CardContent>
        </Card>
    )
}