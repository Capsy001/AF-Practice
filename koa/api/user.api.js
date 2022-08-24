import { registerUserDal } from "../dal/user.dal.js";

import { getAllUsersDal, updateUserDal } from "../dal/user.dal.js";

export function registerUserApi(user){
    const name=user.name;
    const email=user.email;
    const password=user.password;
    const role=user.role;

    //encrypt password

    const newUser={
        name: name,
        email: email,
        password: password,
        role: role
    }

    const insertedUser=registerUserDal(newUser);
    return insertedUser;
}

export function getAllUsersApi(){

    return getAllUsersDal();
}

export function updateUserApi(id, user){

    const newUser={
        name:user.name,
        email:user.email,
        password: user.password,
        role: user.role
    }

    const updated=updateUserDal(id, newUser)
    
    return updated;

}