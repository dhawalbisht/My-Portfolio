import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Dhawal | Building beautiful, functional websites for your business</title>
        <meta name="description" content="I am a web developer experienced in mern stack " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/dhawal.png" />
      </Head>
      <Home />
    </>
  );
}
