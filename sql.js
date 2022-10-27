import knexLib from 'knex';

class ClientSql{
    constructor(config) {
        this.knex = knexLib(config)
    }
        createTable(){
            return this.knex.schema.dropTableIfExists('articles')
            .finally(() =>{
                return this.knex.schema.createTable('articles', table =>{
                    table.increments('id').primary();
                    table.string('name', 50).notNullable();
                    table.string('code', 10).notNullable();
                    table.float('price');
                    table.integer('stock')
                })
            })
        }

        insertArticle(articles){
            return this.knex('articles').insert(articles);
        }
        listArticles(){
            return this.knex('articles').select('*');
        }
        deleteArticleForId(id){
            return this.knex.from('article').where('id',id).del();
        }
        updateStockForId(stock, id){
            return this.knex.from('articles').where('id', id).update({stock:stock})
        }
        close(){
            this.knex.destroy();
        }
}

export default ClientSql