import { MongoClient } from "mongodb";

async function connectToMongoDB() {
	const uri = "mongodb://root:example@mongodb:27017/test";
	const client = new MongoClient(uri);

	try {
		await client.connect();
		console.log("Connected to MongoDB");
		return client.db(); // Return the database object
	} catch (e) {
		console.error(e);
	}
}

export default connectToMongoDB;
