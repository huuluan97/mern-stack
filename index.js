import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import responseTime from 'response-time';
import winston from 'winston';

import security from './security';

const app = express();

const STATIC_OPTIONS = {
	maxAge: 31536000000, // One year
};

app.set('trust proxy', 1)
app.use(helmet)

app.get('/images/:entity/:id/:size/:filename', (req, res, next) => {
  const newUrl = `/images/${req.params.entity}/${req.params.id}/${req.params.filename}`;
  req.url = newUrl;
  next();
})

app.use(express.static('public/content', STATIC_OPTIONS))

security.applyMiddleware(app);

app.all('*', (req, res, next) => {
  
  //Enable CORS
  const allowedOrigins = security.getAccessControlAllowOrigin();
  const { origin } = req.headers;
  if (allowedOrigins === '*') {
		res.setHeader('Access-Control-Allow-Origin', allowedOrigins);
	} else if (allowedOrigins.indexOf(origin) > -1) {
		res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization'
	);
	next();

})


app.use(res())