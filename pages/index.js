import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {

  function Profile () {
    const { data, error, isLoading } = useSWR(process.env.NEXT_PUBLIC_API_URL, fetcher)
  
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  
    // render data
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }

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

      <pre>
        data here
        <Profile/>
      </pre>

      <Footer />
    </div>
  );
}
