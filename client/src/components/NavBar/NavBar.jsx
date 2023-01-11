import React from "react";
import { Box, Text } from "rebass";
import { css } from "@emotion/css";

import { BsPeople } from "react-icons/bs";
import { FiNavigation } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { MdOutlineEventBusy } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import * as style from "./style.js";

const navItems = [
  { icon: BsPeople, name: "Personnel" },
  { icon: FiNavigation, name: "Who's away" },
  { icon: MdOutlineNotificationsActive, name: "News" },
  { icon: MdOutlineEventBusy, name: "Events" },
  { icon: FiSettings, name: "Settings" },
];

const NavBar = () => {
  return (
    <Box
      className={css`
        grid-row: 2 / 3;
        grid-column: 1 / 2;
        gap: 20px;
        display: flex;
        flex-direction: column;
      `}
      sx={{ background: "" }}
    >
      {navItems.map((item, index) => {
        let Icon = item.icon;
        return (
          <Box key={index} css={style.navItemStyle}>
            <Icon
              className={css`
        font-size: 1.5rem;
        }
      `}
            />
            <Text>{item.name}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavBar;
