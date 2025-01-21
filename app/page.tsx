"use client"

import AppMainLayout from "@/components/layout/app-main-layout";
import { Label } from "@/components/ui/label";
// import Link from "next/link";

export default function Home() {

    return (
        <AppMainLayout>
            <div className="flex flex-col flex-1 justify-start items-stretch w-full relative">
                <div className="flex flex-col flex-grow justify-center items-center text-center w-full h-full gap-10 absolute top-0 left-0 z-10 p-4">
                    {/* <Link
                        href="/profile"
                        className="inline-flex h-10 items-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        Go to Profile
                    </Link> */}
                    <Label className="text-[36px]">Welcome to our Joba!</Label>
                </div>
            </div>
        </AppMainLayout>
    );
}
