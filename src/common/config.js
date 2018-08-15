const config = {
    queueConnection: {
        host: 'amqp://localhost' // TODO move to separate host
    },

    db: {
        url: 'mongodb://localhost:27017',
        dbName: 'ecommerce',
        table: {
            order: 'order'
        }
    }
};

export {config};