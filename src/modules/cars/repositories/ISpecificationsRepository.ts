import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateSpecifitaionDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifitaionDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpecifitaionDTO, ISpecificationsRepository };
