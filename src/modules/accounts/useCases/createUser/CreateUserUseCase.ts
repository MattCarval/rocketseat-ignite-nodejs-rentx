import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";
import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersReposiry: IUsersRepository
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const usersAlreadyExists = await this.usersReposiry.findByEmail(email);

    if (usersAlreadyExists) {
      throw new AppError("User already exists");
    }
    const passwordHash = await hash(password, 8);

    await this.usersReposiry.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
