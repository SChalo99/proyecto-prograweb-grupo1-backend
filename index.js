import app from './app.js'
import sequelize from './src/config/database.js'

async function main() {
    try {
        const init = process.argv[2]

        if (init)
            await sequelize.sync({force: true});
        else
            await sequelize.sync({force: false});
        
        console.log('Connection successful')
        
        var PORT = 3001 || process.env.PORT

        app.listen(PORT)

        console.log('App Running in port '+PORT)

    } catch (error) {
        console.error('Connection error', error)
    }
}

main()
