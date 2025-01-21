'use client'

import * as React from "react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { useUserContext } from "@/providers/user-provider"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { Company_Icon, users } from "@/config"

export default function AppProject() {
    const { user } = useUserContext();

    return (
        <Card className="w-full py-0 px-5">
            <CardHeader className="px-0 py-4">
                <CardTitle>Projects</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="px-0 py-6">
                <div className="flex flex-col gap-2">
                    {
                        user.projects.map((project, index) => {

                            const company_name = project.company;
                            const company_icon = (Company_Icon as any)[company_name];

                            return (
                                <div key={index} className="flex flex-col gap-1">
                                    <company_icon.icon />
                                    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
                                        <section className="flex flex-col">
                                            <Label className="text-foreground text-[16px] font-medium">{project.role} - {project.company}</Label>
                                            <Label className="text-[#8A8A8A] text-[14px]">{project.duration}</Label>
                                            <Label className="text-[#8A8A8A] text-[14px]">{project.type}</Label>
                                        </section>

                                        <section className="flex flex-col md:items-end">
                                            <Label className="text-[#8A8A8A] text-[14px]">Attested by</Label>
                                            <div className="flex items-center -space-x-3">
                                                {
                                                    project.attestedBy.map((item: any, index: number) => (
                                                        <Image key={index} src={(users as any)[item]} alt='' width={36} height={36} priority />
                                                    ))
                                                }
                                            </div>
                                        </section>
                                        <Separator className="my-2 flex md:hidden" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </CardContent>
        </Card>
    )
}