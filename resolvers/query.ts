import { ClienteModel, ClienteModelType } from "../db/cliente.ts";
import { ConductorModel, ConductorModelType } from "../db/conductor.ts";
import { ViajeModel, ViajeModelType } from "../db/viaje.ts";

export const Query = {
  
  clients: async (): Promise<ClienteModelType[]> => {
    const clients = await ClienteModel.find().exec();
    return clients;
  },
  drivers: async (): Promise<ConductorModelType[]> => {
    const drivers = await ConductorModel.find().exec();
    return drivers;
  },
  travels: async (): Promise<ViajeModelType[]> => {
    const travels = await ViajeModel.find().exec();
    return travels;
  },

};