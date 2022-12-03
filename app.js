import express from 'express'
import cors from "cors";
import bodyParser from 'body-parser'
import userRoute from './src/routes/user.js'
import perifericRoute from './src/routes/periferic.js'
import reviewRoute from './src/routes/review.js'
import preArmadoRoute from './src/routes/preArmado.js'
import preArmadoProductoRoute from './src/routes/preArmadoProducto.js'
import productRoute from './src/routes/product.js'
import orderRoute from './src/routes/order.js'
import orderProductRoute from './src/routes/orderProduct.js'
import shoppingCartRoute from './src/routes/shoppingCart.js'

var app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/periferic', perifericRoute);

app.use('/preArmado', preArmadoRoute);
app.use('/preArmadoProducto', preArmadoProductoRoute);
app.use('/product', productRoute);

app.use('/user', userRoute)
app.use('/order', orderRoute)
app.use('/orderproduct', orderProductRoute)
app.use('/review', reviewRoute)
app.use('/shoppingcart', shoppingCartRoute)

export default app
