const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorRouter = require('./controllers/error');

app.set('view engine', "ejs");//globaal configuration
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));//for body post data
app.use(express.static(path.join(__dirname, 'public')));//for css


app.use('/admin', adminRoutes);
app.use(shopRouter);

app.use(errorRouter.get404);

app.listen(5500);