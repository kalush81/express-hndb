const messages = []

module.exports = class {
    constructor(msg, name) {
        this.msg = msg;
        this.name = name
    }
    save() {
        messages.push({msg: this.msg, name: this.name});
    }
    static fethAll() {
        return messages
    }
}