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
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

export default function AppService() {
    const { user } = useUserContext();

    return (
        <Card className="w-full py-6 px-5">
            <CardHeader className="p-0">
                <CardTitle className="text-[16px] font-normal">Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
                <Separator className="my-2" />
                {
                    user.services.map((service, index) => (
                        <>
                            <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
                                <div className="flex-1 flex flex-col gap-2">
                                    <Label className="text-[20px] font-medium">{service.title}</Label>
                                    <div className="flex flex-row gap-2">
                                        {
                                            service.details.map((detail, index) => (
                                                <Badge key={index} variant={'outline'} className="rounded-full bg-[#F5FAFF] text-foreground hover:bg-inherit cursor-pointer text-[12px] md:text-[14px] py-1 min-h-7 line-clamp-1 text-center max-w-[400px]">
                                                    {detail}
                                                </Badge>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col justify-between md:items-end">
                                    <Label className="text-[#71808E] font-medium text-[12px] md:text-[14px]">{service.price.type}</Label>
                                    <Label className="text-foreground font-medium text-[16px] md:text-[20px]">{service.price.currency} {service.price.value.toLocaleString()}{service.price.type === 'FIXED RATE' && '/hr'}</Label>
                                </div>
                            </div>
                            {
                                index + 1 !== user.services.length && <Separator className="my-2" />
                            }
                        </>
                    ))
                }
            </CardContent>
        </Card>
    )
}