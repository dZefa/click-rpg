import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

const app = Express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('short'));
}

app.use(Express.static(path.resolve(__dirname, process.env.BUILD_PATH)));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, `${process.env.BUILD_PATH}/index.html`));
});

export { app };
