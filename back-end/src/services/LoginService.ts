import prismaClient from "../prisma";

import createUser from "../utils/LoginUtils/CreateUserHandler";

import loginHandler from "../utils/LoginUtils/LoginHandler";

interface IExecute {
  username: string;
  password: string;
}

export default class LoginService {
  async execute({ username, password }: IExecute) {
    const userData = await prismaClient.user.findFirst({
      where: { username },
    });

    if (!userData) {
      return await createUser({ username, password });
    } else {
      return await loginHandler({ password, userData });
    }
  }
}
