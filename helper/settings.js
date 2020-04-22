const dbHost = process.env.DB_HOST || '27.74.255.130/32';
const dbPort = process.env.DB_PORT || '';
const dbName = process.env.DB_NAME || 'cip';
const dbUser = process.env.DB_USER || 'luan';
const dbPass = process.env.DB_PASS || '02011997neo';

const dbCred =
  dbUser.length > 0 || dbPass.length > 0 ? `${dbUser}:${dbPass}@` : '';
const dbUrl =
	process.env.DB_URL || `mongodb://${dbCred}${dbHost}:${dbPort}/${dbName}` ||  `mongodb+srv://luan:02011997neo@cluster0-rsz6t.azure.mongodb.net/test?retryWrites=true&w=majority` ;

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://luan:<password>@cluster0-rsz6t.azure.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

module.exports = {

  apiBaseUrl: process.env.API_BASE_URL || `http://localhost:3001/api/v1`,
  
  mongodbServerUrl: dbUrl,

  // key to sign tokens
	jwtSecretKey: process.env.JWT_SECRET_KEY || '-',

	// key to sign store cookies
	cookieSecretKey: process.env.COOKIE_SECRET_KEY || '-',

	// store UI language
  language: process.env.LANGUAGE || 'en',
  
  developerMode: process.env.DEVELOPER_MODE || true,

}