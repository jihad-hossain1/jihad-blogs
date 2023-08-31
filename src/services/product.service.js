import 'server-only';
import DbConnect from "./DbConnect"
import { ObjectId } from 'mongodb';

export const getProductFromDb = async (categoryId) => {
    const db = await DbConnect();
    const productsCollection = db.collection("products");

    const query = {}
    if (categoryId) {
        query.categoryId = categoryId
    }
    console.log(query)
    return productsCollection.find(query).toArray();

}


export const getProductById = async (id) => {
    const db = await DbConnect();
    const productsCollection = db.collection("products");
    // const idsWithObjectId = ids.map((id) => new ObjectId(id))
    const query = {
        _id: new ObjectId(id)
    }

    return productsCollection.findOne(query)
}

export const getProductsByIdFromDb = async (ids = []) => {
    const db = await DbConnect();
    const productsCollection = db.collection("products");
    const idsWithObjectId = ids.map((id) => new ObjectId(id))
    const query = {
        _id: { $in: idsWithObjectId }
    }

    return productsCollection.find(query).toArray();
}

