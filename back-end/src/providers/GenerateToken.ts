import { sign } from "jsonwebtoken";

export default class GenerateToken {
  async execute(userId: string | null) {
    if(!userId) {
      throw new Error("Missing Token")
    }

    const token = sign({}, "20cc2efa-141c-4802-bc42-af8245d0984a", {
      subject: userId,
      expiresIn: "60s",
    });

    return token;
  }
}
