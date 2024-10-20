export default {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'HubX API',
            description: "API endpoints for HubX case project services documented on swagger",
            contact: {
                name: "Erim Tuzcuoglu",
                email: "erimtuzcuoglu@gmail.com",
                url: "https://github.com/ErimTuzcuoglu/HubXCase"
            },
            version: '1.0.0',
        },
        servers: [
            {
                url: "http://localhost:3000/",
                description: "Local server"
            },
        ]
    },
    // looks for configuration in specified directories
    apis: [(require('path')).join(__dirname, '../api/docs', '*.js')],
}