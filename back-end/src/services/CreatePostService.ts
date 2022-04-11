import prismaClient from "../prisma";

import { api } from "../thirdPartyApi";
import { IPost } from "../types/IPost";

type IAPI = {
  username: string;
  title: string;
  content: string;
};

export default class CreatePostService {
  async execute(postData: IPost) {
    const userData = await prismaClient.user.findFirst({
      where: {
        id: postData.userId,
      },
    });

    if (!userData) {
      throw new Error("There is not a user");
    }

    const result = await prismaClient.posts.create({
      data: postData,
    });

    const cdlpAPIData: IAPI = {
      username: userData.username,
      title: result.title,
      content: result.content,
    };

    await api.post("/", cdlpAPIData);

    return result;
  }
}
