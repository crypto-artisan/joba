'use client'

import AppAbility from "@/components/app-ability";
import AppCredential from "@/components/app-credential";
import AppHighlight from "@/components/app-highlight";
import AppProfile from "@/components/app-profile";
import AppProject from "@/components/app-project";
import AppService from "@/components/app-service";
import { useUserContext } from "@/providers/user-provider";

export default function SharePage({ params }: { params: { uid: string[] } }) {
    const { uid } = params;
    const { setIsShared } = useUserContext();

    if (uid[0] !== '1234-5678') {
        return;
    }
    else {
        setIsShared(true);
    }

    return (
        <div className="w-full">
            <div className="w-full flex flex-col xl:flex-row gap-4 py-8">
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
