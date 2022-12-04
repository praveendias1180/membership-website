//pages/index.js
import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Persuade, TestimonyCollection } from "../src/ui-components";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

function Index() {
  const router = useRouter();
  return (
    <Layout handleClick={() => { router.push("/post"); }} authText="Sign Up" username="none">
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