////MONGODB Veritabanı ve tablo(lar) bağlantısı

const { MongoClient } = require("mongodb");

const uri = 'mongodb+srv://seyinimal:Sb5vTGzjqdbMdHYW@cluster0.2zwwqqd.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
  products,
  orders,
};