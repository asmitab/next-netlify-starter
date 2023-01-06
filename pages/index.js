import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          <a href="page2">Page 2</a>
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
