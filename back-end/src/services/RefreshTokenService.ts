import dayjs from "dayjs";

import prismaClient from "../prisma";

import GenerateRefreshToken from "../providers/GenerateRefreshToken";

import GenerateToken from "../providers/GenerateToken";

export default class RefreshTokenHandler {
  async execute(tokenId: string) {
    const refreshToken = await prismaClient.refreshToken.findFirst({
      where: {
        id: tokenId,
      },
    });

    if (!refreshToken) {
      throw new Error("Invalid refresh token");
    }

    const generateToken = new GenerateToken();

    const userId = refreshToken.userId;

    if (!userId) {
      throw new Error("Missing Token");
    }

    const token = await generateToken.execute(userId);

    const expiresIn = dayjs().isAfter(dayjs.unix(refreshToken.expiresIn));

    if (expiresIn) {
      const generateRefreshToken = new GenerateRefreshToken();

      const newRefreshToken = generateRefreshToken.execute(userId);

      return { token, newRefreshToken };
    }

    return token;
  }
}
