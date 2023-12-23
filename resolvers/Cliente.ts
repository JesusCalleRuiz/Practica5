import { ClienteModelType } from "../db/cliente.ts";
import { ViajeModel, ViajeModelType } from "../db/viaje.ts";

export const Cliente = {
  travels: async (parent: ClienteModelType): Promise<ViajeModelType[]> => {
    const viajes = await ViajeModel.find({ client: parent._id });
    return viajes;
  },
};