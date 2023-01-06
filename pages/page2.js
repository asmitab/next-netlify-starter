import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Page2() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Page 2!" />
        <p className="description">
          <a href="/">Index</a>
          <br />
          <a href="page3">Page 3</a>
          <br />
          <a href="subpages/page2">Sub Page</a>
          <br />
        </p>
      </main>

      <Footer />
    </div>
  );
}
