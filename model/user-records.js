var userRecords = {}

export function modelAddUser(username, detailJson) {
    if (username in userRecords) {
        throw new Error("Username already exists");
    } else {
        userRecords[username] = detailJson;
        return true;
    }
}

export function modelGetUser(username) {
    if (!(username in userRecords)) {
        throw new Error("Username does not exist");
    } else {
        return userRecords[username];
    }
}

export function modelUpdateUser(username, updatedDetailJson) {
    if (!(username in userRecords)) {
        throw new Error("Username does not exist");
    } else {
        userRecords[username] = updatedDetailJson;
        return userRecords[username];
    }
}

export function modelDeleteUser(username) {
    if (!(username in userRecords)) {
        throw new Error("Username does not exist");
    } else {
        try {
            delete userRecords[username];
            return true;
        } catch (err) {
            throw err;
        }
    }
}
