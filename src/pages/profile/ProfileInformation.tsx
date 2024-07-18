import React from "react";
import { Flex, Text, Button } from "@aws-amplify/ui-react";

const ProfileInformation = () => {
  return (
    <div className="profile-card-content">
      <Text fontWeight="600" fontSize="18px" marginBottom="14px">
        Profile Information
      </Text>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Full Name:
        </Text>
        <Text variation="tertiary">Mr NDIAYE</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Phone:
        </Text>
        <Text variation="tertiary">(221) 77 777 77 77</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Email:
        </Text>
        <Text variation="tertiary">mrndiaye@gmail.com</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Location:
        </Text>
        <Text variation="tertiary">Dakar</Text>
      </Flex>
      <div className="profile-card-edit">
        <Button marginLeft="auto">Edit</Button>
      </div>
    </div>
  );
};

export default ProfileInformation;
