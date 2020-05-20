import React from 'react'
import Nav from "../partials/nav";
import Footer from "../partials/footer";
import Head from "next/head"

export default function Layout({children, title}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Nav>
            </Nav>
            {children}
            <Footer>
            </Footer>
        </div>

)
}

