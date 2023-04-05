import Head from "next/head"; // TO ADD METADATA --> 1. import the Head component from next/head
import Link from "next/link"; //TO ADD LINKS --> 1. import the Link component from 'next-link'

export default function FirstPost() {
  return (
    <>
      <Head> {/* TO ADD METADATA --> 2. Add the Head component  */}
        <title>First Post</title> {/* TO ADD METADATA --> 3. Include the metadata tags that you need  */}
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link> {/* TO ADD LINKS --> 2. Add the Link component  */}
      </h2>
    </>
  );
}
