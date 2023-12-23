import mongoose from "mongoose";
import { Conductor } from "../types.ts";

const Schema = mongoose.Schema;

const ConductorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true,unique: true },
  username:{ type: String, required: true,unique: true },
  travels:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Viaje' }],
});

export type ConductorModelType = mongoose.Document & Omit<Conductor, "id" >;

ConductorSchema.post("findOneAndDelete", async function (doc: ConductorModelType) {
  await mongoose.models.Conductor.deleteMany({ travels: doc._id });
});


export const ConductorModel = mongoose.model<ConductorModelType>("Conductor", ConductorSchema);