import '../styles/globals.css'
import React from 'react';

function RootLayout({children}) {
    return (
        <html lang="en">
            <head/>
            <body>{children}</body>
        </html>
    );
}

export default RootLayout;