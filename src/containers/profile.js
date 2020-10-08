import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix logo" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User>
            <Profiles.Picture src={user.photoURL} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
