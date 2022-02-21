require("dotenv").config()

module.exports.testFunc = (name) => {
    console.log(`Hello ${name}! From test pkg 2`)
}