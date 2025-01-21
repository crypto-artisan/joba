"use client"

import AppMainLayout from "@/components/layout/app-main-layout";
import { Label } from "@/components/ui/label";

export default function Home() {

    return (
        <AppMainLayout>
            <div className="flex flex-col flex-1 justify-start items-stretch w-full relative">
                <div className="flex flex-col flex-grow justify-center items-center text-center w-full h-full gap-10 absolute top-0 left-0 z-10 p-4">
                    <Label className="text-[28px] md:text-[32px] leading-[36px] md:leading-[45px] font-switzer font-medium">
                        Home Page
                    </Label>
                </div>
            </div>
        </AppMainLayout>
    );
}
