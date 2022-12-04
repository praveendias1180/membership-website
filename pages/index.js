//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Persuade, TestimonyCollection } from "../src/ui-components";
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
    <Layout handleClick={() => handleClick()} authText="Sign Up" username="none">
      <View>
        <TestimonyCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default Index;