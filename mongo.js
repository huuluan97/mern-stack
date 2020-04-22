import winston from 'winston';
import url from 'url';
import { MongoClient } from 'mongodb';
import settings from './helper/settings';

const mongodbConnection = settings.mongodbServerUrl
const mongoPathName = url.parse(mongodbConnection).pathname
const dbName = mongoPathName.substring(mongoPathName.lastIndexOf('/') + 1)

const RECONNECT_INTERVAL = 1000;
const CONNECT_OPTIONS = {
	reconnectTries: 3600,
	reconnectInterval: RECONNECT_INTERVAL,
	useNewUrlParser: true,
};

const onClose = () => {
	winston.info('MongoDB connection was closed');
};

const onReconnect = () => {
	winston.info('MongoDB reconnected');
};

export let db = null;

const connectWithRetry = () => {
  MongoClient.connect(mongodbConnection, CONNECT_OPTIONS, (err, client) => {
    if (err) {
      winston.error(
        `MongoDB connection was failed: `
      );
      setTimeout(connectWithRetry, RECONNECT_INTERVAL)
    } else {
      db = client.db(dbName);
      db.on('close', onClose)
      db.on('reconnect', onReconnect)
      winston.info('MongoDB connected successfully');
    }
  })
}

connectWithRetry()