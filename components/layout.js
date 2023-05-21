import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <html lang="en">

            <Head>
                <title>À La Fritz</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body>{children}</body>
        </html>
    )
}