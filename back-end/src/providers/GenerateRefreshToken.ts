import prismaClient from "../prisma";

import dayjs from "dayjs";

export default class GenerateRefreshToken {
  async execute(userId: string | null) {
    if (!userId) {
      throw new Error("Missing Token");
    }
    
    const tokenCheck = await prismaClient.refreshToken.findFirst({
      where: {
        userId,
      },
    });

    if (tokenCheck) {
      await prismaClient.refreshToken.deleteMany({
        where: {
          userId: userId,
        },
      });
    }

    const expiresIn = dayjs().add(15, "minute").unix();

    const generateRefreshToken = await prismaClient.refreshToken.create({
      data: {
        userId,
        expiresIn,
      },
    });

    return generateRefreshToken;
  }
}
