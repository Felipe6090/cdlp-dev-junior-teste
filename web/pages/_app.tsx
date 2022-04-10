import "../styles/globals.css";

import type { AppContext } from "next/app";

import App from "next/app";

import ConfigHead from "../src/Infra/ConfigHead";

import Header from "../src/Components/Header";

import Footer from "../src/Components/Footer";

import { AuthProvider } from "../src/contexts/AuthContext";

import nookies from "nookies";

import { api } from "../src/services/api";
import { PostsListProvider } from "../src/contexts/PostsListContext";

type Props = {
  userData?: any;
  postsData: any;
};

class MyApp extends App<Props> {
  static async getInitialProps({ Component, ctx }: AppContext) {
    const postsResponse = await api.get("/getPosts");

    const postsData = postsResponse.data;

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

    const userDataHandler = await api.get(`/getUserData/${tokenId}`);

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
