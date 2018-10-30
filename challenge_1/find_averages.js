const { Client } = require('pg')
const client = new Client({
    user: 'garret',
    password: 'superuser',
    host: '127.0.0.1',
    database: 'garret',
    port: '5432'
});

async function FindAverages() {
    await client.connect()
    const seller_res = await client.query("SELECT * FROM seller;")
    var sellers = seller_res.rows;
    for(var seller_i = 0; seller_i < sellers.length; seller_i++) {
        const res = await client.query("SELECT day, applessold FROM sales WHERE sellerid = " + sellers[seller_i].id + ";")
        var sales = res.rows;
        var num_sales = sales.length;
        var total = 0;
        for(var sale_i = 0; sale_i < num_sales; sale_i++) {
            total += sales[sale_i].applessold;
        }
        console.log(sellers[seller_i].name + "'s average daily sales: " + String(total / num_sales));
            
    }
    await client.end()
}

FindAverages();
