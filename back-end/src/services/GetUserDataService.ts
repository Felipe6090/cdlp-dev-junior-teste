import dayjs from "dayjs";
import prismaClient from "../prisma";

export default class GetUserDataService {
  async execute(id: string) {
    const token = await prismaClient.refreshToken.findFirst({
      where: { id },
    });

    if (!token) {
      throw new Error("Not Authorized");
    }

    const expiresIn = dayjs().isAfter(dayjs.unix(token.expiresIn));

    if (expiresIn) {
      throw new Error("Not Authorized");
    }

    const userData = await prismaClient.user.findFirst({
      where: {
        refreshToken: { id },
      },
    });

    return userData;
  }
}
