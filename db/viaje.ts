import mongoose from "mongoose";
import { Viaje } from "../types.ts";
import { ClienteModel, ClienteModelType } from "../db/cliente.ts";
import { ConductorModel, ConductorModelType } from "../db/conductor.ts";

const Schema = mongoose.Schema;

const ViajeSchema = new Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: "Conductor", required: true },
  money: { type: Number, required: true },
  distance: { type: Number, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
});

export type ViajeModelType = mongoose.Document & Omit<Viaje, "id" >;


ViajeSchema.pre("save", async function (next) {

  const client = await ClienteModel.findById(this.client);

  if (!client) {
    return next(new Error("Cliente n encontrado"));
  }
  if (client.status === "activo") {
    return next(new Error("Elcliente ya esta en un viaje"));
  }

  const driver = await ConductorModel.findById(this.driver);

  if (!driver) {
    return next(new Error("Driver no encontrado"));
  }

  if (driver.status === "activo") {
    return next(new Error("El driver ya esta en un viaje"));
  }
  next();
});


  
export const ViajeModel = mongoose.model<ViajeModelType>("Viaje", ViajeSchema);