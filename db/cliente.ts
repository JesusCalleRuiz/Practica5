import mongoose from "mongoose";
import { Cliente } from "../types.ts";

const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  cards:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Tarjetas' }],
  travels:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Viaje' }],
});

export type ClienteModelType = mongoose.Document & Omit<Cliente, "id" >;

ClienteSchema.post("findOneAndDelete", async function (doc: ClienteModelType) {
  await mongoose.models.Cliente.deleteMany({ travels: doc._id });
});


export const ClienteModel = mongoose.model<ClienteModelType>("Cliente", ClienteSchema);