import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import Clients from "./ClientsTables";

const Tables = () => {
  return (
    <>
      

      <View
        backgroundColor="var(--amplify-colors-white)"
        borderRadius="6px"
        maxWidth="100%"
        padding="1rem"
        minHeight="80vh"
      >
        <Heading color="#333">Tables clients </Heading>
        <br></br>
        <ScrollView width="100%">
            <Clients/> 
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
