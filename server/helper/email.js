import { db } from '../mongo';
import parse from './parse';

class EmailSettingsService {
  constructor() {
    this.defaultSettings = {
      host: '',
			port: '',
			user: '',
			pass: 0,
			from_name: '',
			from_address: '',
    }
  }

  getEmailSettings = () => {
    return db.collection('emailSettings').findOne().then((settings) => this.changeProperties(settings));
  }

  updateEmailSettings = (data) => {
    const settings = this.getValidDocumentForUpdate(data);
    return this.insertDefaultSettingsIfEmpty().then(() => {
      db
        .collection('emailSettings')
        .updateOne(
          {},
          {
            $set: settings
          },
          {
            update: true
          }
        ).then((res) => {
          this.getEmailSettings()
        })
    })
  }

  insertDefaultSettingsIfEmpty = () => {
    return db
      .collection('emailSettings')
      .countDocuments({})
      .then((count) => {
        if (count === 0) {
          return db.settings('emailSettings').insertOne(this.defaultSettings);
        }
      })
  }

  getValidDocumentForUpdate = (data) => {
    if (Object.keys(data).length === 0) {
      return new Error('Required fields are missing');
    }

    const settings = {};

    if (data.host) {
      settings.host = parse.getString(data.host).toLowerCase();
    }

    if (data.port) {
      settings.port = parse.getNumberIfPositive(data.port);
    }

    if (data.user) {
      settings.user = parse.getString(data.user);
    }

    if (data.pass) {
			settings.pass = parse.getString(data.pass);
		}

		if (data.from_name) {
			settings.from_name = parse.getString(data.from_name);
		}

		if (data.from_address) {
			settings.from_address = parse.getString(data.from_address);
		}

		return settings;

  }

  changeProperties = (settings) => {
		if (settings) {
			delete settings._id;
		} else {
			return this.defaultSettings;
		}

		return settings;
	}
}