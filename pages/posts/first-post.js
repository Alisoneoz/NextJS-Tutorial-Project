import Link from "next/link"; // 1. import the Link element from 'next-link'

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link> {/* 2. Add the Link component  */}
      </h2>
    </>
  );
}
