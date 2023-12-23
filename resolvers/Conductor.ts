import { ConductorModelType } from "../db/conductor.ts";
import { ViajeModel, ViajeModelType } from "../db/viaje.ts";

export const Conductor = {
  travels: async (parent: ConductorModelType): Promise<ViajeModelType[]> => {
    const viajes = await ViajeModel.find({ driver: parent._id });
    return viajes;
  },
};
