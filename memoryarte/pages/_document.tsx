import {Html, Head, Main, NextScript} from "next/document";
import {getLogoUrl} from "@/constants/logo";

export default function Document() {
    return (
        <Html lang="ru">
            <Head>
                <link
                    rel="icon"
                    type="image/webp"
                    sizes="32x32"
                    href={getLogoUrl(32)}
                />
            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}

