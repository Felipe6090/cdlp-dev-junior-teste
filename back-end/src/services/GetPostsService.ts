import prismaClient from "../prisma";

import { api } from "../thirdPartyApi";

type IPosts = {
  id: string;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export default class GetPostsService {
  async execute() {
    const allLocalDBPosts = await prismaClient.posts.findMany();

    const thirdsAPIResponse = await api.get(`/`);

    const thirdsAPIData = thirdsAPIResponse.data;

    const thirdsAPIPosts: IPosts[] = thirdsAPIData.results;

    const result = [...allLocalDBPosts, ...thirdsAPIPosts];

    return result;
  }
}
