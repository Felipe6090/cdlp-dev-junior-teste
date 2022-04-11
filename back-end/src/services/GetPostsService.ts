import prismaClient from "../prisma";

import { api } from "../thirdPartyApi";

import { IPost } from "../types/IPost";

export default class GetPostsService {
  async execute() {
    const allLocalDBPosts = await prismaClient.posts.findMany();

    const thirdsAPIResponse = await api.get(`/`);

    const thirdsAPIData = thirdsAPIResponse.data;

    const thirdsAPIPosts: IPost[] = thirdsAPIData.results;

    const result = [...allLocalDBPosts, ...thirdsAPIPosts];

    return result;
  }
}
