const moment = require('moment');

function formatMessage(username, text){
    return {
        username,
        text,
        createdAt: new Date()
    }
}

module.exports = formatMessage;