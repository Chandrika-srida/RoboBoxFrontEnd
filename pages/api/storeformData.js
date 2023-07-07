import mongoose from 'mongoose';
import {FormData} from '@/models/DemoWS';

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://varunbhole:lollol77@cluster0.pvlgykn.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));



export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create a new form data object using the provided data
      const formData = new FormData({
        studentname: req.body.studentname,
        parentname: req.body.parentname,
        emailid: req.body.emailid,
        mobileno: req.body.mobileno,
        age: req.body.age,
        raddress: req.body.raddress,
      });

      // Save the form data to the database
      await formData.save();

      res.status(200).json({ message: 'Form data stored successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while storing form data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
