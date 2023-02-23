import "bootstrap/dist/css/bootstrap.css"
import '@/styles/globals.css'

import Layout from "@/components/layout";
import {useEffect} from "react";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min")
    })
      return (
          <Layout>
            <Component {...pageProps} />
          </Layout>
      )
}
