import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import CryptoCoins from "@/components/cryptocoins/CryptoCoins";

export default function Home({ coins }) {
  console.log(coins);
  return (
    <>
      <Head>
        <title>Crypto Wallet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <CryptoCoins data={coins} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/search/trending`);
  const coins = await res.json();

  return {
    props: {
      coins,
    },
  };
}
