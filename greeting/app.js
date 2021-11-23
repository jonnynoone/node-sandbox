console.log('Connected...');

const os = require('os');
const fs = require('fs');

const user = os.userInfo();
const greeting = `Yo, ${user.username}!`;

fs.appendFile('greetings.txt', greeting, err => {
    if (err) {
        console.log("Failed to write to file.");
    }
})