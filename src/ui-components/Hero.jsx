/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function Hero(props) {
  const { handleClick, overrides, ...rest } = props;
  return (
    <Flex
      gap="72px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(9,27,42,1)"
      {...rest}
      {...getOverrideProps(overrides, "Hero")}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="60px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="530px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Join me backstage to gain unlimited access to how I solve technical problems"
        {...getOverrideProps(
          overrides,
          "Join me backstage to gain unlimited access to how I solve technical problems"
        )}
      ></Text>
      <Flex
        gap="25px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Area")}
      >
        <Button
          width="219px"
          height="40px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Become a Member"
          onClick={handleClick}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 5588")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="For just $9.99"
            {...getOverrideProps(overrides, "For just $9.99")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
