import Document, {Html, Head, Main, NextScript} from 'next/document'
import {getLogoUrl} from "@/constants/logo"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es" className="dark">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link
                        rel="icon"
                        type="image/webp"
                        sizes="32x32"
                        href={getLogoUrl(32)}
                    />
                    <meta name="description"
                          content="Lápidas de porcelanato con grabado láser en Ecuador. Diseños personalizados, duraderos y de alta calidad para honrar la memoria de sus seres queridos."/>
                    <meta name="keywords"
                          content="lápidas de porcelanato, grabado láser en porcelanato, lápidas personalizadas Ecuador, placas conmemorativas de porcelanato, fabricación de lápidas en Ecuador, lápidas duraderas para exteriores, placas funerarias de porcelanato, lápidas económicas en Ecuador, diseño de lápidas personalizadas, lápidas resistentes al clima, lápidas modernas de porcelanato, lápidas con grabado detallado, placas de porcelanato para tumbas, lápidas de alta calidad en Ecuador, lápidas con envío a nivel nacional"/>
                    <meta property="og:title"
                          content="Lápidas de porcelanato con grabado láser en Ecuador | MemoryArte"/>
                    <meta property="og:description"
                          content="Lápidas de porcelanato con grabado láser en Ecuador. Diseños personalizados, duraderos y de alta calidad para honrar la memoria de sus seres queridos."/>
                    <meta property="og:type" content="website"/>
                    <meta property="og:image" content={getLogoUrl(512)}/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:title"
                          content="Lápidas de porcelanato con grabado láser en Ecuador | MemoryArte"/>
                    <meta name="twitter:description"
                          content="Lápidas de porcelanato con grabado láser en Ecuador. Diseños personalizados, duraderos y de alta calidad para honrar la memoria de sus seres queridos."/>
                    <meta name="twitter:image" content={getLogoUrl(512)}/>
                    <meta name="google-site-verification" content="gAUY00C6NnawJEsSkA2gFOD3JEPllstiWUGsFotdB5s"/>
                </Head>
                <body className="antialiased bg-gray-900 text-gray-100">
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument

