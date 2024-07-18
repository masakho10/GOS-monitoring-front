import React from "react";
import { Menu, MenuItem, MenuButton, Link,  } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { baseConfig } from "../../config";

const HeaderNav = () => {
  const navigate = useNavigate();

  return (
    <>
      {baseConfig.projectLink ? (
        <div className="github-link">
          <Link href={baseConfig.projectLink} isExternal={true} ariaLabel="github">
            <AiFillGithub />
          </Link>
        </div>
      ) : (
        <></>
      )}

      <Menu menuAlign="end" trigger={
        <MenuButton variation="menu">
          <div className="header-avatar">
            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
        </MenuButton>
      }>
        <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default HeaderNav;
