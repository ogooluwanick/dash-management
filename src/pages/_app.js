import { StoreProvider } from "@/context/Store";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
        const router = useRouter()

        const DefaultSeoConfig = {
                defaultTitle: "SPOTTA",
                titleTemplate: "%s | SPOTTA",
                description: "SPOTTA, your one stop spot ", 
                keywords:"SPOTTA, NG, African",
                openGraph: {
                        type: 'website',
                        locale: 'en_US',
                        url: 'https://localhost.africa',
                        siteName: "SPOTTA",
                        title: "SPOTTA",
                        description: "SPOTTA, your one stop spot",
                        images: [
                                {
                                        url: '/spotta_icon.png', // Default image URL
                                        width: 1280,
                                        height: 640,
                                        alt: "SPOTTA",
                                },
                        ],
                },
                twitter: {
                        handle: '@SPOTTA', // Twitter handle
                        site: '@SPOTTA', // Twitter site
                        cardType: 'summary_large_image', // Twitter card type
                },
                additionalLinkTags: [
                {
                        rel: 'icon',
                        href: '/spotta_icon.png',
                },
                {
                        rel: 'manifest',
                        href: '/manifest.json'
                },
                {
                        rel: 'preconnect',
                        href: 'https://fonts.googleapis.com'
                },
                ],
        };
  return
        <StoreProvider>

                <Component {...pageProps} />;
        </StoreProvider>

}
