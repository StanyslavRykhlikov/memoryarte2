import {Html, Head, Main, NextScript} from "next/document";
import {getLogoUrl} from "@/constants/logo";

export default function Document() {
    return (
        <Html lang="ru" className="dark">
            <Head>
                <link
                    rel="icon"
                    type="image/webp"
                    sizes="32x32"
                    href={getLogoUrl(32)}
                />
            </Head>
            <body className="antialiased bg-white dark:bg-gray-900">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

