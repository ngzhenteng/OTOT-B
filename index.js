import express from 'express';
import cors from 'cors';
import { getAllUsers, getUser, addUser, updateUser, deleteUser } from './controller/user-controller.js';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions)) // config cors so that front-end can use
const PORT = process.env.PORT || 9999;
const router = express.Router();

export const base_prefix = "/api/users"
export const user_prefix = "/user"

router.get("/", getAllUsers);
router.get(user_prefix + "/:username?", getUser);
router.post(user_prefix + "/:username?", addUser);
router.put(user_prefix + "/:username?", updateUser);
router.delete(user_prefix + "/:username?", deleteUser);

app.use(base_prefix, router);

app.listen(PORT, () => console.log(`user database server running on port ${PORT}`))

export default app;