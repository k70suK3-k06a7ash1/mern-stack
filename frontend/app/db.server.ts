import { MongoClient } from "mongodb";

async function connectToMongoDB() {
	const uri =
		"mongodb://root:example@document_db:27017/database?authSource=admin";
	// const uri = "mongodb://root:example@localhost:27017/test";

	const client = new MongoClient(uri);

	try {
		await client.connect();
		console.log("Connected to MongoDB");
		return client.db(); // Return the database object
	} catch (e) {
		const t = e as Error;
		console.error(t.message);
	} finally {
		console.log("Closing MongoDB connection");
	}
}

export default connectToMongoDB;
