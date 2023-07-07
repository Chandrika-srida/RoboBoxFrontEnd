import {mongooseConnect} from "@/lib/mongoose";
import {Workshop} from "@/models/Workshop";

export default async function handle(req,res) {
  await mongooseConnect();
  const ids = req.body.ids;
  res.json(await Workshop.find({_id:ids}));
}