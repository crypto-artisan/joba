'use client'

import * as React from "react"

import { Button } from "@/components/ui/button"
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
import { WImage } from "./icons"
import { Badge_Icon, Company_Icon } from "@/config"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

export default function AppCredential() {
    const { user } = useUserContext();

    return (
        <Card className="w-full py-0 px-5 mb-32 md:mb-0">
            <CardHeader className="px-0 py-4">
                <CardTitle className="text-[18px] text-foreground">Credentials</CardTitle>
            </CardHeader>
            <Separator />
            <CardContent className="px-0 py-6">
                <div className="flex flex-col gap-4 md:gap-2">
                    <div className="flex flex-row gap-4 h-18 flex-wrap">
                        {
                            user.credentials.company.map((item, index) => {
                                const Company_name = item.id;
                                const Company_img = (Company_Icon as any)[Company_name];

                                return (
                                    <Company_img.icon key={index} />
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row gap-4 flex-wrap">
                        {
                            user.credentials.badge.map((item, index) => {

                                const Badge_name = item.id;
                                const Badge_img = (Badge_Icon as any)[Badge_name];

                                return (
                                    <div className="h-16">
                                        <Badge_img.icon key={index} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <Link href="/credentials">
                        <Button variant={'ghost'} className="text-[16px] w-32 px-0 hover:bg-inherit hover:opacity-70">
                            All credentials
                            <ArrowRightIcon />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}