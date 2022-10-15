import { modelGetAllUsers, modelGetUser, modelAddUser, modelUpdateUser, modelDeleteUser } from "../model/user-records.js";

export function getAllUsers(req, res) {
    try {
        const allUsers = modelGetAllUsers();
        return res.status(200).json({message: "Successfully retrieved all users", users: allUsers});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}

export function getUser(req, res) {
    try {
        const username = req.params.username;
        const user = modelGetUser(username);
        console.log("Printing user")
        console.log(user)
        return res.status(200).json({message: "Successful get request", userDetails: user});
    } catch (err) {
        if (err.message == "Username does not exist") {
            return res.status(404).json({message: err.message});
        } else {
            return res.status(500).json({message: err.message});
        }
    }
}
export function addUser(req, res) {
    try {
        const username = req.params.username;
        const detailJson = req.body;
        modelAddUser(username, detailJson);
        return res.status(200).json({message: `Successfully added user ${username} to the records`});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}
export function updateUser(req, res) {
    try {
        const username = req.params.username;
        const addDetailsJson = req.body;
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
        const username = req.params.username;
        modelDeleteUser(username);
        return res.status(200).json({message: `Successfully deleted user ${username} from the records`});
    } catch (err) {
        return res.status(500).json({message: err.message});
    }
}