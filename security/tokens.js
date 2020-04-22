import { ObjectID } from 'mongodb';
import url from 'url';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import uaParser from 'ua-parser-js';
import handlebars from 'handlebars';
import LRUCache from 'lru-cache';
import { db } from '../mongo';


const cache = new LRUCache({
	max: 10000,
	maxAge: 1000 * 60 * 60 * 24, // 24h
});

const BLACKLIST_CACHE_KEY = 'blacklist';

class SecurityTokensService {
  
  getTokensBlacklist = () => {
    const blacklistFromCache = cache.get(BLACKLIST_CACHE_KEY);

    if (blacklistFromCache) {
      return Promise.resolve(blacklistFromCache);
    }
    
    return db
			.collection('tokens')
			.find(
				{
					is_revoked: true,
				},
				{ _id: 1 }
			)
			.toArray()
			.then((items) => {
				const blacklistFromDB = items.map((item) => item._id.toString());
				cache.set(BLACKLIST_CACHE_KEY, blacklistFromDB);
				return blacklistFromDB;
      });
      

  }

}

export default new SecurityTokensService(); 