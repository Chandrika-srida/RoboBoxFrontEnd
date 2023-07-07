import mongoose, {model, models, Schema} from "mongoose";

const WorkshopSchema = new Schema({
  line_items:Object,
  name:String,
  email:String,
  city:String,
  postalCode:String,
  streetAddress:String,
  country:String,
  workshopType:String,
  
}, {
  timestamps: true,
});

export const Workshop = models?.Workshop || model('Workshop', WorkshopSchema);