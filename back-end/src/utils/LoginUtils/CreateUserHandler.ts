import { hash } from "bcryptjs";

import prismaClient from "../../prisma";
import loginHandler from "./LoginHandler";

interface ICreate {
  username: string;
  password: string;
}

export default async function createUser({ username, password }: ICreate) {
  const passHash = await hash(password, 8);

  const userData = await prismaClient.user.create({
    data: {
      username,
      password: passHash,
    },
  });

  const result = await loginHandler({ password, userData });

  return result;
}
