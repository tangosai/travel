import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, children }) {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
}
