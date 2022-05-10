import { Specification } from "../infra/typeorm/entities/Specification";

interface ICreateSpecifitaionDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifitaionDTO): Promise<Specification>;
  findByName(name: string): Promise<Specification>;
  findByIds(ids: string[]): Promise<Specification[]>;
}

export { ICreateSpecifitaionDTO, ISpecificationsRepository };
