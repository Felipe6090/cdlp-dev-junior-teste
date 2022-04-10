import prismaClient from "../prisma";
import { api } from "../thirdPartyApi";

type IBody = {
  postID: string;
  title: string;
  content: string;
};

export default class UpdatePostService {
  async execute({ postID, title, content }: IBody) {
    const updateLocalDB = await prismaClient.posts.update({
      data: {
        title,
        content,
      },

      where: {
        id: postID,
      },
    });

    await api.patch(`/${postID}/`, { title, content });

    return updateLocalDB;
  }
}
