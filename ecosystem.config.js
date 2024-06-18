module.exports = {
    apps: [
        {
            name: 'demo',
            script: './start.js',
            env: {
                HOST: '127.0.0.1',
                PORT: 3000
            }
        }
    ],
}