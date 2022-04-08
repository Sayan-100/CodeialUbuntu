const env = require('./enviroment');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.locals.assetPath = function(filePath) {
        if (env.name == 'development') {
            return filePath;
        }

        return JSON.parse(fs.readFileSync(path.join(__dirname, '../public/assests/rev-manifest.json')))[filePath];
    }
}