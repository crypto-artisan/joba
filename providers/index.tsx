"use client";

import * as React from "react";
import { ThemeProvider } from "./theme-provider";
import { UserProvider } from "./user-provider";

export function Providers({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            themes={['light', 'dark', 'comfort', 'glass']}
        >
            <UserProvider>
                {children}
            </UserProvider>
        </ThemeProvider>
    );
}
