//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import Head from 'next/head'
import { Footer, Hero, Persuade, TestimonyCollection } from "../src/ui-components";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

function Index() {
  const router = useRouter();

  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51LOBcvCJM0Ic7TGzzzvwzGm6NptqzMquaMkXIMrXFwucKdnTkwrzXApq87kibLLVvD68UszImYtTuLJy5qyXZytw00eLnD8U4n"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1MBDBFCJM0Ic7TGzLE8DyDSJ", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }

  return (
    <>
    <Head>
        <title>Membership Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout handleClick={() => handleClick()} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      <View>
        <TestimonyCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://svgshare.com/i/oZh.svg" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
    </>
  );
}
export default Index;