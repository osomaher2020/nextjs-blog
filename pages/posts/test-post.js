import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function TestPost() {

    const host_name = process.env.NEXT_PUBLIC_HOST

    return (
        <>
            <Layout home="false">
                <Head>
                    <title>Test Post</title>
                </Head>
                {/* <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
                /> */}
                <h1>Test Post</h1>
                <h3>{host_name}</h3>
                <h3>btata btataaaa !</h3>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </Layout>
        </>
    );
}