import {useEffect} from "react";
import {SessionProvider, useSession} from "next-auth/react";

import Layout from "@/components/layout";

import "bootstrap/dist/css/bootstrap.css"
import '@/styles/globals.css'

export default function App({
    Component,
    pageProps: { session, ...pageProps} }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min")
    })
      return (
          <SessionProvider session={session}>
              {Component.auth ? (
                  <Auth>
                      <Layout>
                          <Component {...pageProps}/>
                      </Layout>
                  </Auth>
                  ) : (
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
              )}
          </SessionProvider>
      )
}

function Auth({ children }) {
    const { status } = useSession({ required: true});

    if (status == "loading") {
        return <div>Loading...</div>
    }
    return children;
}
