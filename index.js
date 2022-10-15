import express from 'express';
import cors from 'cors';
import { getUser, addUser, updateUser, deleteUser } from './controller/user-controller.js';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions)) // config cors so that front-end can use
const PORT = 9999;
const router = express.Router();

router.get("/user", getUser);
router.post("/user", addUser);
router.put("/user", updateUser);
router.delete("/user", deleteUser);

app.use("/api/users", router);

app.listen(PORT, () => console.log(`user database server running on port ${PORT}`))