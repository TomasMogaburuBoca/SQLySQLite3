import ClientSql from "./sql.js";
import { options } from "./options/SQLite3.js";


const sql = new ClientSql(options)

try{
    await sql.createTable()
    console.log('1-- Table created');

    const articlesForInsert =[
        {name: 'Longboard', code:'1', price: 1200, stock: 5},
        {name: 'Longboard', code:'2', price: 1800, stock: 7},
        {name: 'Longboard', code:'3', price: 1100, stock: 6},
        {name: 'Longboard', code:'4', price: 2000, stock: 10},
        {name: 'Longboard', code:'5', price: 100, stock: 2}
    ]

    await sql.insertArticle(articlesForInsert);
    console.log('2-- Articles inserted');

    const articlesRead = await sql.listArticles();
    console.log('3-- List Articles');
    console.log(articlesRead);

    await sql.deleteArticleForId(3),
    console.log('4-- Article deleted');

    await sql.updateStockForId(0, 2)
    console.log('5-- New Stock');

    const articleList = await sql.articleList()
    console.log('Final List');
    console.table(articleList)


}catch(error) {console.log(error)};