import React from "react";
import { Flex, Text } from "rebass";
import ProfileImage from "../../images/profile.jpeg";
import { MdNotificationsActive } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
// import { AiOutlineMenuFold } from "react-icons/ai";
import "./Header.style.css";
import UserProfile from "../UserProfile";
import { css } from "@emotion/css";

var profile = {
  name: "Birehan Anteneh",
  role: "HR-manager",
  imageSrc: ProfileImage,
};
var components = [
  { name: "Notifications", icon: MdNotificationsActive },
  { name: "Settings", icon: FiSettings },
  { name: "Log out", icon: BiLogIn },
];

const HeaderComponents = ({ components }) => {
  return (
    <Flex sx={{ gap: "10px" }}>
      {components.map((component, index) => {
        return (
          <Flex
            key={index}
            width="200px"
            bg="#131e61"
            sx={{
              gap: "10px",
              p: "10px 20px",
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            <component.icon />
            <Text fontSize={[1, 2, 4]} fontWeight="light" color="white">
              {component.name}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

const Header = () => {
  return (
    <Flex
      className={css`
        grid-row: 1 / 2;
        grid-column: 1 / 3;
        width: 100%;
        gap: 10px;
      `}
      p={3}
      color="white"
      bg="#050e45"
      sx={{
        borderRadius: "5px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <UserProfile profile={profile} />
      <HeaderComponents components={components} />
    </Flex>
  );
};

export default Header;
