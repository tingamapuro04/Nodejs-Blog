import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import multer from 'multer';
import cors from "cors";
import { errorHandler } from "./Middlewares/serverErrorHandler.js";
import { router } from "./Route/routes.js";
const app = express();
dotenv.config();

// cors options
const corsOptions = {
  origin: "http://localhost:5173", // Replace with your frontend's domain
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
// Middlewares
app.use(express.json());
app.use('/api/v1/', router);



const { DATABASE_URL, PORT } = process.env;
app.use(errorHandler);
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  })
  .catch((error) => {
    console.error(error);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb)=>{
    cb(null,'./images')
  },
    filename:(req,file,cb)=>{
      cb(null, req.body.name)
    }
});

const upload = multer({storage: storage});
app.post('/api/uploads', upload.single('file'), (req, res) => {
  res.status(200).json({mess: "File uploaded successfully"});
})






