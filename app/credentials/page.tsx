'use client'

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Credentail_Icon, Discover } from "@/config";
import { IPassport, IPassportCredential } from "@/types/credentials";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const talentApiKey = process.env.NEXT_PUBLIC_TALENT_API_KEY || '';

const PASSPORT_URL = process.env.NEXT_PUBLIC_TALENT_PASSPORT_URL || '';
const CREDENTIAL_URL = process.env.NEXT_PUBLIC_TALENT_CREDENTIAL_URL || '';

const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "X-API-KEY": talentApiKey,
        "AUTHORIZATION": talentApiKey
    },
};

export default function Credentials() {

    const { address } = useAccount();
    const router = useRouter();

    const [passport, setPassport] = useState<IPassport | null>(null);
    const [credentials, setCredentials] = useState<IPassportCredential[]>([]);

    const [loading, setLoading] = useState<boolean>(true);

    async function fetchCredentials(id: string) {
        console.log("==>id", id);
        fetch(`${CREDENTIAL_URL}?passport_id=${id}`, options)
            .then(response => (response.json()))
            .then(async (json) => {
                setCredentials(json?.passport_credentials);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        if (address) {
            setLoading(true);
            fetch(`${PASSPORT_URL}/${address}`, options)
                .then(response => (response.json()))
                .then(async (json) => {
                    setPassport(json?.passport);
                    await fetchCredentials(json?.passport?.passport_id);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
        else {
            router.push("/");
        }
    }, [address]);

    return (
        <div className="w-full pb-16">
            <div className="flex flex-col gap-2 py-8">
                <Label className="font-medium text-[36px] text-foreground">Credentials</Label>
                <Label className="font-medium text-[16px] text-gray">Boost your profile on Joba</Label>
            </div>
            <Tabs defaultValue="discover" className="w-full bg-white p-4 md:p-8 rounded-xl border border-[#EAEBF0]">
                {/* <TabsList className="grid grid-cols-2 border-b-[1px] rounded-none border-b-neutral-200">
                    <TabsTrigger value="discover" className="border-none w-64">Discover</TabsTrigger>
                    <TabsTrigger value="manage" className="w-64" disabled>Manage</TabsTrigger>
                </TabsList> */}
                <div className="border-b-[1px] border-[#EAEBF0] space-x-4 text-[16px]">
                    <Button variant={'ghost'} className="rounded-none border-b-[2px] border-b-black px-0 pb-6">Discover</Button>
                    <Button variant={'ghost'} className="rounded-none px-0 pb-6" disabled>Manage</Button>
                </div>
                {
                    loading ? (
                        <Spinner size={32} />
                    ) : (
                        credentials.length === 0 ? (

                            <div className="w-full flex flex-col items-center gap-4 py-4">
                                <Label className="text-[18px]">You didn't register into Talent Protocol.</Label>
                                <Link href={"https://login.talentprotocol.com/sign_in"} target="_blank">
                                    <Button variant={'outline'} className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 text-white hover:text-secondary w-full h-11">
                                        Register Talent Protocol
                                    </Button>
                                </Link>
                            </div>

                        ) : (
                            <TabsContent value="discover" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 ring-0 focus-visible:right-0 max-w-[1600px]">
                                {
                                    credentials.filter(credential => credential.category === "Identity").map(item => {

                                        const type_name = item.type;
                                        const type_icon = Credentail_Icon[type_name];
                                        return (
                                            <div key={item.id} className={`border border-[#EAEBF0] p-4 bg-white rounded-xl w-full ${item.max_score === item.score && 'opacity-60'} md:max-w-[300px] h-[332px]`}>
                                                <div className="flex flex-col h-full gap-12 border border-[#EAEBF0] border-dashed rounded-xl p-4 justify-between">
                                                    <section className="flex flex-row justify-between items-center">
                                                        <type_icon.icon />
                                                        <div className="flex flex-col justify-center items-center">
                                                            <Label className="text-[24px] font-medium">{item.max_score}</Label>
                                                            <Label className="text-[12px]">Points</Label>
                                                        </div>
                                                    </section>

                                                    <section>
                                                        <Label className="text-[20px] font-medium">{item.name}</Label>
                                                        <p className="text-[14px] line-clamp-2">{item.name}</p>
                                                    </section>

                                                    <section>
                                                        {
                                                            item.max_score === item.score ? (
                                                                <Button variant={'default'} disabled className="text-white w-full h-11">
                                                                    Done
                                                                </Button>
                                                            ) : (
                                                                <Link href={"#"}>
                                                                    <Button variant={'outline'} className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 text-white hover:text-secondary w-full h-11">
                                                                        {
                                                                            (item.id === 'TELEGRAM' || item.id === 'X') ? `Connect ${item.name}` : `Get credential`
                                                                        }
                                                                        <ExternalLinkIcon />
                                                                    </Button>
                                                                </Link>
                                                            )
                                                        }
                                                    </section>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </TabsContent>
                        )
                    )
                }
                <TabsContent value="manage">
                    <Card>
                        <CardContent className="space-y-2">

                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div >
    );
}
