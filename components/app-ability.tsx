'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useUserContext } from "@/providers/user-provider"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { Lang_Icon, Skill_Icon } from "@/config"
import { RemixIcon } from "./icons"

export default function AppAbility() {
    const { user } = useUserContext();

    return (
        <Card className="w-full">
            <CardHeader className="py-4 px-5">
                <CardTitle className="text-foreground font-medium text-[18px]">Abilities</CardTitle>
                {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <Separator />
            <CardContent className="py-6 px-5">
                <div className="flex flex-col gap-2">
                    <Label className="text-[16px] text-foreground">Roles</Label>
                    <div className="flex flex-row gap-4">
                        {
                            user.roles.map(role => (
                                <Badge key={role} className="rounded-full bg-[#F5FAFF] border border-[#B2DDFF] text-secondary text-[14px] hover:bg-inherit cursor-pointer py-1 h-7">{role}</Badge>
                            ))
                        }
                    </div>
                    <Separator className="my-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-[16px] text-foreground">Skills</Label>
                    <div className="flex flex-row gap-4 flex-wrap w-full md:max-w-[420px]">
                        {
                            user.skills.map((skill, index) => {
                                const skill_name = skill.content;
                                const skill_icon = (Skill_Icon as any)[skill_name];
                                return (
                                    <Badge key={index} className={`h-7 rounded-full text-[14px] hover:bg-inherit border border-[#D9D6FE] cursor-pointer ${skill.type === 'lang' ? 'text-[#5925DC] bg-[#F4F3FF]' : 'text-[#344054] bg-[#F5FAFF] px-1'} space-x-2 py-1`}>
                                        {skill_icon && <skill_icon.icon />}
                                        <span>{skill_name}</span>
                                    </Badge>
                                )
                            })
                        }
                    </div>
                    <Separator className="my-2" />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-[16px] text-foreground">Languages</Label>
                    <div className="flex flex-row gap-4">
                        {
                            user.langs.map((lang, index) => {
                                const lang_icon = (Lang_Icon as any)[lang];
                                return (
                                    <Badge key={index} variant={'outline'} className="h-7 rounded-full bg-[#F5FAFF] hover:bg-inherit  cursor-pointer text-[14px] text-foreground space-x-2 px-1 py-1">
                                        <lang_icon.icon />
                                        <span>{lang}</span>
                                    </Badge>
                                )
                            })
                        }
                    </div>
                    <Separator className="my-2" />
                </div>
            </CardContent>
            {/* <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter> */}
        </Card>
    )
}