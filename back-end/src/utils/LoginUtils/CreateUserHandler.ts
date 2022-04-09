import { hash } from "bcryptjs";

import prismaClient from "../../prisma";
import loginHandler from "./LoginHandler";

interface ICreate {
  email: string;
  password: string;
  userData?: any;
}

export default async function createUser({ email, password }: ICreate) {
  const passHash = await hash(password, 8);

  const userData = await prismaClient.user.create({
    data: {
      email,
      password: passHash,
    },
  });

  const result = await loginHandler({ password, userData });

  return result;
}
