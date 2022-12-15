import { Outlet, useNavigation } from "react-router-dom";
import Body from "../components/Body";
import Header from "../components/Header";
import MainNavigation from "../components/MainNavigation";

export default function Root() {
  const navigation = useNavigation();

  return (
    <>
      <Header isLoading={navigation.state === "loading"} />
      <MainNavigation />
      <Body>
        <Outlet />
      </Body>
    </>
  );
}
