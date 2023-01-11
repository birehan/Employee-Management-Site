import React from "react";
import { Flex, Text, Image } from "rebass";

const UserProfile = ({ profile }) => {
  return (
    <Flex sx={{ gap: "10px", alignItems: "center !important" }}>
      <Image
        src={profile.imageSrc}
        sx={{
          width: 48,
          height: 48,
          borderRadius: 9999,
        }}
      />

      <Flex
        color="white"
        bg="secondary"
        flexDirection="column"
        sx={{
          alignItems: "start !important",
        }}
      >
        <Text fontSize={[2, 3, 4]} fontWeight="bold" color="primary">
          {profile.name}
        </Text>
        <Text fontSize={[1, 2, 4]} fontWeight="light" color="silver">
          {profile.role}
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserProfile;
