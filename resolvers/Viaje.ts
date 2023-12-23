import { GraphQLError } from "graphql";
import { ClienteModel, ClienteModelType } from "../db/cliente.ts";
import { ConductorModel, ConductorModelType } from "../db/conductor.ts";
import { ViajeModelType } from "../db/viaje.ts";

export const Viaje = {
  client: async (parent: ViajeModelType): Promise<ClienteModelType> => {
    const cliente = await ClienteModel.findById(parent.owner).exec();
    if (!cliente) {
      throw new GraphQLError(`No client found with id ${parent.owner}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return cliente;
  },
  driver: async (parent: ViajeModelType): Promise<ConductorModelType> => {
    const conductor = await ConductorModel.findById(parent.owner).exec();
    if (!conductor) {
      throw new GraphQLError(`No conductor found with id ${parent.owner}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return conductor;
  },
};