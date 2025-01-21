import * as React from "react";
import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "./user-provider";
import WalletProvider from "./wallet-provider";

import { headers } from "next/headers";

export function Providers({ children }: { children: React.ReactNode }) {
    const cookies = headers().get('cookie')
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            themes={['light', 'dark', 'comfort', 'glass']}
        >
            <WalletProvider cookies={cookies}>
                <UserProvider>
                    {children}
                </UserProvider>
            </WalletProvider>
        </ThemeProvider>
    );
}
