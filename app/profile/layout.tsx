import React from "react";
import AppMainLayout from "@/components/layout/app-main-layout";

export default function CredentialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AppMainLayout>
            <div className="flex flex-col h-full w-full">
                {children}
            </div>
        </AppMainLayout>
    );
}
