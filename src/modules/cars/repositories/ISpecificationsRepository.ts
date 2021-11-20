import { Specification } from "../model/Specification";

interface ICreateSpecifitaionDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecifitaionDTO);
  findByName(name: string): Specification;
}

export { ICreateSpecifitaionDTO, ISpecificationsRepository };
