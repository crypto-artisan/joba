'use client'

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { Label } from "./ui/label";
import { useUserContext } from "@/providers/user-provider";
import { THREEImage } from "./icons";
import { BadgeCheckIcon, EllipsisIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function AppHighlight() {
    const { user } = useUserContext();

    return (
        <Card className="w-full xl:w-[446px] min-w-[350px] border border-[#C4D4FC] bg-[#C4D4FC2A] px-5 py-0">
            <CardHeader className="px-0 py-4">
                <CardTitle className="text-[20px] font-medium">Highlight</CardTitle>
            </CardHeader>
            <CardContent className="py-6 pb-0 bg-white rounded-lg">
                <div className="flex flex-row justify-between items-center">
                    <section className="flex flex-row justify-between items-center">
                        <THREEImage size={40} />
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-row items-center">
                                <Label>{user.highlight.title}</Label>
                                <BadgeCheckIcon size={20} fill="#175CD3" stroke="#fff" />
                            </div>
                            <Label className="text-gray">{user.highlight.nickName}</Label>
                        </div>
                    </section>
                    <Button variant={'ghost'} size={'icon'}>
                        <EllipsisIcon />
                    </Button>
                </div>
                <div className="flex flex-col gap-8 py-4 pb-8 text-foreground">
                    <Label>have you ever come across this issue in <span className="text-secondary">@framer</span>?</Label>
                    <Label>your site  not only scrolls up and down but also to the left and right.</Label>
                </div>
            </CardContent >
        </Card >
    )
}