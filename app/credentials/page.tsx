import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Discover } from "@/config";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export default function Credentials() {
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
                <TabsContent value="discover" className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 gap-8 ring-0 focus-visible:right-0 max-w-[1600px]">
                    {
                        Discover.map(item => (
                            <div key={item.id} className={`border border-[#EAEBF0] p-4 bg-white rounded-xl w-full ${item.isDone && 'opacity-60'} max-w-[300px] h-[332px]`}>
                                <div className="flex flex-col h-full gap-12 border border-[#EAEBF0] border-dashed rounded-xl p-4 justify-between">
                                    <section className="flex flex-row justify-between items-center">
                                        <item.icon />
                                        <div className="flex flex-col justify-center items-center">
                                            <Label className="text-[24px] font-medium">{item.points}</Label>
                                            <Label className="text-[12px]">Points</Label>
                                        </div>
                                    </section>

                                    <section>
                                        <Label className="text-[20px] font-medium">{item.title}</Label>
                                        <p className="text-[14px] line-clamp-2">{item.description}</p>
                                    </section>

                                    <section>
                                        {
                                            item.isDone ? (
                                                <Button variant={'default'} disabled className="text-white w-full h-11">
                                                    Done
                                                </Button>
                                            ) : (
                                                <Link href={item.link}>
                                                    <Button variant={'outline'} className="bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 text-white hover:text-secondary w-full h-11">
                                                        {
                                                            (item.id === 'TELEGRAM' || item.id === 'X') ? `Connect ${item.title}` : `Get credential`
                                                        }
                                                        <ExternalLinkIcon />
                                                    </Button>
                                                </Link>
                                            )
                                        }
                                    </section>
                                </div>
                            </div>
                        ))
                    }
                </TabsContent>
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
