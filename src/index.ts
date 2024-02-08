import { App } from "./app";
require('dotenv').config();

new App().server.listen(process.env.PORT);