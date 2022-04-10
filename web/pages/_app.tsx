import "../styles/globals.css";

import type { AppContext } from "next/app";

import App from "next/app";

import ConfigHead from "../src/Infra/ConfigHead";

import Header from "../src/Components/Header";

import Footer from "../src/Components/Footer";

import { AuthProvider } from "../src/contexts/AuthContext";

import nookies from "nookies";

import { InitialApi } from "../src/services/api";
import { PostsListProvider } from "../src/contexts/PostsListContext";

type Props = {
  userData?: any;
  postsData: any;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const postsResponse = await InitialApi.get("/getPosts");

    const postsResult = postsResponse.data;

    function orderByDate(a: any, b: any) {
      return b.created_datetime - a.created_datetime;
    }

    const postsData = postsResult.sort(orderByDate);

    const { auth_token: tokenId } = nookies.get(ctx);

    if (!tokenId) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {},
        postsData,
        userData: null,
      };
    }

    const userDataHandler = await InitialApi.get(`/getUserData/${tokenId}`);

    const { userData } = await userDataHandler.data;

    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      postsData,
      userData,
    };
  }

  render() {
    const { Component, pageProps, userData, postsData } = this.props;

    return (
      <>
        <ConfigHead />

        <AuthProvider state={userData}>
          <PostsListProvider state={postsData}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PostsListProvider>
        </AuthProvider>
      </>
    );
  }
}

export default MyApp;
