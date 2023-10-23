import Footer from "components/navigation/footer"
import Navbar from "components/navigation/navbar"
import Layout from "hocs/layouts/layout"

import { Helmet } from "react-helmet-async"

function Contact() {
    return (
        <Layout>
            <Helmet>
                <title>Muriva | Contactos</title>
                <meta name='description' content='Esto es una pagina de prueba escolar' />
                <meta name='keywords' content='prueba, pagina, escolar' />
                <meta name='robots' content='all' />
                <link rel='canonical' href='https://www.murkiva.com' />
                <meta name='autor' content='murkiva' />
                <meta name='publisher' content='murkiva' />

                <meta property='og:title' content='Muriva | Software Agency' />
                <meta property='og:description' content='Esto es una pagina de prueba escolar' />
                <meta property='og:url' content='https://www.murkiva.com' />
                <meta property='og:image' content='https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' />

                <meta name='twitter.title' content='Muriva | Software Agency' />
                <meta
                    name='twitter-description'
                    content='Esto es una pagina de prueba escolar'
                />
                <meta name='twitter.image' content='https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' />
                <meta name='twitter.card' content='sumary_large_image' />
            </Helmet>
            <Navbar />
            <div className="pt-28">
                Contact
            </div>
            <Footer />
        </Layout>
    )
}

export default Contact