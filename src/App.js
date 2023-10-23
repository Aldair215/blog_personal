import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "store";
import { Provider } from "react-redux";
import {Helmet, HelmetProvider} from 'react-helmet-async'

import Error404 from "containers/errors/error404";
import Home from "containers/pages/home";
import Cases from "containers/pages/cases";
import Services from "containers/pages/services";
import About from "containers/pages/about";
import Careers from "containers/pages/careers";
import Blog from "containers/pages/blog";
import Contact from "containers/pages/contact";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Muriva | Software Agency</title>
        <meta name='description' content='Esto es una pagina de prueba escolar'/>
        <meta name='keywords' content='prueba, pagina, escolar'/>
        <meta name='robots' content='all'/>
        <link rel='canonical' href='https://www.murkiva.com'/>
        <meta name='autor' content='murkiva'/>
        <meta name='publisher' content='murkiva'/>

        <meta property='og:title' content='Muriva | Software Agency'/>
        <meta property='og:description' content='Esto es una pagina de prueba escolar'/>
        <meta property='og:url' content='https://www.murkiva.com'/>
        <meta property='og:image' content='https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'/>

        <meta name='twitter.title' content='Muriva | Software Agency'/>
        <meta 
          name='twitter-description' 
          content='Esto es una pagina de prueba escolar'
        />
        <meta name='twitter.image' content='https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'/>
        <meta name='twitter.card' content='sumary_large_image'/>
      </Helmet>
      <Provider store={store}>
        <Router>
          <Routes>
            {/* {Error Display} */}
            <Route path="*" element={<Error404/>}/>

            {/* {Home Display} */}
            <Route path="/" element={<Home/>}/> 
            <Route path="/casos" element={<Cases/>}/> 
            <Route path="/servicios" element={<Services/>}/> 
            <Route path="/nosotros" element={<About/>}/> 
            <Route path="/carreras" element={<Careers/>}/> 
            <Route path="/blog" element={<Blog/>}/> 
            <Route path="/contacto" element={<Contact/>}/> 
          </Routes>
        </Router>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
