import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import userRoutes from './routes/route.js';
import path from 'path';

import bodyParser from 'body-parser';


const app = express();
const server = http.createServer(app); // Create HTTP server

mongoose
  .connect(
    "mongodb+srv://adityamurari7:aditya@cluster0.mf22q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));


app.use(express.json());
const corsOptions = {
  origin:"https://localhost:8000",
  Credentials:true
}
app.use(cors(corsOptions));

app.use(cookieParser());
app.use (bodyParser.json ({extended: true}));
app.use (bodyParser.urlencoded({extended: true}));

app.use(session({
  secret: process.env.SESSION_SECRET || 'adityamurari7' ,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
const _dirname = path.resolve();

app.use('/uploads', express.static(path.join(_dirname, 'uploads')));
app.use('/upload1', express.static(path.join(_dirname, 'upload1')));

app.use('/', userRoutes);

const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("Server is running on port", port);
});

