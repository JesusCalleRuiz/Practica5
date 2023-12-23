import { GraphQLError } from "graphql";
import { ClienteModel, ClienteModelType } from "../db/cliente.ts";
import { ConductorModel, ConductorModelType } from "../db/conductor.ts";
import { ViajeModel, ViajeModelType } from "../db/viaje.ts";
import mongoose from "mongoose";

export const Mutation = {
  
  addClient: async (
    _: unknown,
    args: { name: string; email: string }
  ): Promise<ClienteModelType> => {
    const client = {
      name: args.name,
      email: args.email,
    };
    const newClient = await ClienteModel.create(client);
    return newClient;
  },

  deleteClient: async (
    _: unknown,
    args: { id: string }
  ): Promise<ClienteModelType> => {
    const client = await ClienteModel.findByIdAndDelete(args.id);
    if (!client) {
      throw new GraphQLError(`No client found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return client;
  },

  addDriver: async (
    _: unknown,
    args: { name: string; email: string ;username: string}
  ): Promise<ConductorModelType> => {
    const conductor = {
      name: args.name,
      email: args.email,
      username: args.username,
    };
    const newDriver = await ConductorModel.create(conductor);
    return newDriver;
  },

  deleteDriver: async (
    _: unknown,
    args: { id: string }
  ): Promise<ConductorModelType> => {
    const driver = await ConductorModel.findByIdAndDelete(args.id);
    if (!driver) {
      throw new GraphQLError(`No driver found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return driver;
  },
  addCard: async (
    _: unknown,
    args: { id: string;number: number; cvv: number ;expirity: string;money:number}
  ): Promise<ClienteModelType> => {
    const client = await ClienteModel.findById(args.id);
    if (!client) {
        throw new GraphQLError(`No client found with id ${args.id}`, {
          extensions: { code: "NOT_FOUND" },
        });
    }
    client.cards.push({
        number: args.number,
        cvv: args.cvv,
        expirity: args.expirity,
        money: args.money,
      });

      const updatedClient = await client.save();
      return updatedClient;
  },

  addViaje: async (
    _: unknown,
    args: { clientId: string; driverId: string;money: number; distance: number ;date: string}
  ): Promise<ViajeModelType> => {
    const viaje = {
        client: args.clientId,
        driver: args.driverId,
        money: args.money,
        distance: args.distance,
        date: args.date,
        status: "activo",
    };
    const newViaje = await ViajeModel.create(viaje);
    return newViaje;
  },

  endViaje: async (
    _: unknown,
    args: { id: string}
  ): Promise<ViajeModelType> => {
    const viaje = await ViajeModel.findByIdAndUpdate(
      args.id,
      { status: "acabado"},
      { new: true, runValidators: true }
    );
    if (!viaje) {
      throw new GraphQLError(`No travel found with id ${args.id}`, {
        extensions: { code: "NOT_FOUND" },
      });
    }
    return viaje;
  },


};