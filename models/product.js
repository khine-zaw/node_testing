const products = [];
//save file 

const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        //products.push(this); // product {title : data}
        const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
        fs.readFile(p, (err, fileContent)=>{
            //console.log(err);
            let products = [];  
            if(!err){
                products = JSON.parse(fileContent);//js obj
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err)=>{
            console.log(err);
            })
        })
            
    }

    static fetchAll() { // ouput shop
        return products;
        // const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
        // fs.readFile(p, (err, fileContent)=>{
        //     if(err){
        //         return [];
        //     }else{
        //         //console.log("FIleContent",fileContent)
        //         return JSON.parse(fileContent);
        //     }
        // })
    } 
}