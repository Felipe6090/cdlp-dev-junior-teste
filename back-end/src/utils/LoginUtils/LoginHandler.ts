import { compare } from "bcryptjs";
import GenerateRefreshToken from "../../providers/GenerateRefreshToken";
import GenerateToken from "../../providers/GenerateToken";

interface ILogin {
  password: string;
  userData: any;
}

export default async function loginHandler({ password, userData }: ILogin) {
  const userPass = userData.password;

  const userId = userData.id;

  const passMatch = await compare(password, userPass);

  if (!passMatch) {
    throw new Error("EMAIL OR PASS INCORRECT");
  }

  const generateToken = new GenerateToken();

  const token = await generateToken.execute(userId);

  const generateRefreshToken = new GenerateRefreshToken();

  const refreshToken = await generateRefreshToken.execute(userId);

  return { userData, refreshToken };
}
