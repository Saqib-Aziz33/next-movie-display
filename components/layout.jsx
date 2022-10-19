import Head from "next/head";
// components
import Header from "./header";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Next.js Movie display app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="layout flex flex-col justify-between min-h-screen">
        <div>
          <Header />
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
export default Layout;