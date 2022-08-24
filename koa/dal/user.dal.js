import client from "./db.js"
import {ObjectId} from 'mongodb'

const userCollection=client.db("AF").collection("users");

export async function registerUserDal(user){

    const insertedUser= await userCollection.insertOne(user);
    return insertedUser;
}

export async function getAllUsersDal(){


    var users=await userCollection.find().toArray();

    return users;

}

export async function updateUserDal(id, user){

    console.log(user)

    const updated=await userCollection.updateOne({_id:ObjectId(id)}, {$set:{
        name:user.name,
        email:user.email,
        password: user.password,
        role: user.role
    }});

    
    return updated;
}