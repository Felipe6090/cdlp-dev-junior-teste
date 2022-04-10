import type { InferGetServerSidePropsType, NextPage } from "next";

import HomeScreen from "../src/screens/HomeScreen";

import { GetServerSideProps } from "next";

import nookies from "nookies";
import { InitialApi } from "../src/services/api";
import { useContext, useEffect } from "react";
import { AuthContext } from "../src/contexts/AuthContext";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { auth_token: tokenId } = nookies.get(context);

  if (!tokenId) {
    return {
      props: { userData: null },
    };
  }

  const userDataHandler = await InitialApi.get(`/getUserData/${tokenId}`);

  const userData = userDataHandler.data;

  console.log(userData);

  return {
    props: { userData },
  };
};

const Home: NextPage = ({
  userData,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { setAuthData } = useContext(AuthContext);

  useEffect(() => {
    console.log(userData);
    setAuthData(userData);
  }, [userData]);

  return <HomeScreen />;
};

export default Home;
