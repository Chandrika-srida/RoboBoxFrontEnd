import mongoose from 'mongoose';

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://varunbhole:lollol77@cluster0.pvlgykn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a schema for your user data
const userDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactno: String,
  city: String,
  postalCode: String,
  streetAddress: String,
  country: String,
  workshopType: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model based on the schema
const UserData = mongoose.model('UserData', userDataSchema);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create a new user data object using the provided data
      const userData = new UserData({
        name: req.body.name,
        email: req.body.email,
        contactno: req.body.contactno,
        city: req.body.city,
        postalCode: req.body.postalCode,
        streetAddress: req.body.streetAddress,
        country: req.body.country,
        workshopType: req.body.workshopType,
      });

      // Save the user data to the database
      await userData.save();

      res.status(200).json({ message: 'User data stored successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while storing user data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
