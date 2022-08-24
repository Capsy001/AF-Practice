import {MongoClient} from 'mongodb'

const client= new MongoClient('mongodb://localhost:27017');


try{
    await client.connect();
    console.log("Connected to MongoDB!")
}catch(error){
    console.log("Error MongoDB: "+error)

}

export default client;