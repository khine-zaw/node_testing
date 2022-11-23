//const products = [];

const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',{pageTitle: 'AddProduct',path: '/admin/add-product'});
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}


//for shop.js
exports.getProduct = (req, res, next) => {
    //res.send('<h1>Hello Page</h1>');
    //console.log(rootDir);
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    //console.log(adminData.products);
    //const products = adminData.products;
 
    const products = Product.fetchAll();//products
    //console.log(products);
    // Product.fetchAll((products) => {
    //     res.render('shop', { pageTitle: "All Products", prods: products, path: '/', HashProduct: products.length > 0 });
    // });
    res.render('shop', { pageTitle: "Shop", prods: products, path: '/', HashProduct: products.length > 0 });
}
