import dayjs from "dayjs";
import prismaClient from "../prisma";

export default class GetUserDataService {
  async execute(tokenId: string) {
    const userData = await prismaClient.user.findFirst({
      where: {
        refreshToken: { id: tokenId },
      },
    });

    const token = await prismaClient.refreshToken.findFirst({
      where: { id: tokenId },
    });

    if (!token) {
      throw new Error("Not Authorized");
    }

    const expiresIn = dayjs().isAfter(dayjs.unix(token.expiresIn));

    if (expiresIn) {
      throw new Error("Not Authorized");
    }

    return userData;
  }
}
