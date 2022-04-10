import prismaClient from "../prisma";
import { api } from "../thirdPartyApi";

export default class DeletePostService {
  async execute(postID: string) {
    const updateLocalDB = await prismaClient.posts.delete({
      where: {
        id: postID,
      },
    });

    await api.delete(`/${postID}/`);

    return updateLocalDB;
  }
}
