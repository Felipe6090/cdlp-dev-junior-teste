import prismaClient from "../prisma";

import createUser from "../utils/LoginUtils/CreateUserHandler";

import loginHandler from "../utils/LoginUtils/LoginHandler";

interface IExecute {
  email: string;
  password: string;
}

export default class LoginService {
  async execute({ email, password }: IExecute) {
    const userData = await prismaClient.user.findFirst({
      where: { email },
    });

    if (!userData) {
      return await createUser({ email, password });
    } else {
      return await loginHandler({ password, userData });
    }
  }
}
