import React from "react";
import { View, Heading, ScrollView } from "@aws-amplify/ui-react";
import EnteteFacture from "./TablesEnteteFacture";

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
        <Heading color="#333"> Tables Entete Facture </Heading>
        <br></br>
        <ScrollView width="100%">
            <EnteteFacture/>
        </ScrollView>
      </View>
    </>
  );
};

export default Tables;
