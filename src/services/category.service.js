import 'server-only';
import DbConnect from "./DbConnect"

export const getCategoriesFromDb = async () => {
    const db = await DbConnect();
    // console.log(db)
    const categoriesCollection = db.collection("categories")
    // const categoriesCollection = db.collection('categories');
    return categoriesCollection.find({}).toArray();
}

