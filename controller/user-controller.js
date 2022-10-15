import { modelGetUser, modelAddUser, modelUpdateUser, modelDeleteUser } from "../model/user-records.js";

export function getUser(req, res) {
    try {
        const { username } = req.body;
        const user = modelGetUser(username);
        return res.status(200).json({message: "Successful get request", userDetails: user});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}
export function addUser(req, res) {
    try {
        const { username, detailJson } = req.body;
        modelAddUser(username, detailJson);
        return res.status(200).json({message: `Successfully added user ${username} to the records`});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}
export function updateUser(req, res) {
    try {
        const { username, addDetailsJson } = req.body;
        const existingUserDetails = modelGetUser(username);
        const newUserDetails = {
            ...existingUserDetails,
            ...addDetailsJson
        }
        const updatedDetails = modelUpdateUser(username, newUserDetails);
        return res.status(200).json({message: "Successful update user request", userDetails: updatedDetails});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}
export function deleteUser(req, res) {
    try {
        const { username } = req.body;
        modelDeleteUser(username);
        return res.status(200).json({message: `Successfully deleted user ${username} from the records`});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}