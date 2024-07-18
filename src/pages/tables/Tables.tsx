import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import MvtStock from "./TablesMvtStock";


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
        <Heading color="#333"> Tables Mouvement Stock </Heading>
        <br></br>
        <ScrollView width="100%">
          <MvtStock/>
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
