import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Jisoo() {
  return (
    <>
      <Head>
        <title>Kim Jisoo</title>
      </Head>
      <Image
        src="/images/jisoo.jpg" // Route of the image file
        height={400} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Kim Jisoo" // Alt text to be read by screen readers
      />
      <h1>Kim Jisoo</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}