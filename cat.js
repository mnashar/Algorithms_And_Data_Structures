function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
    return `${this.owner} loves ${this.name}. :3`;
};


Cat.prototype.cuteStatement = function () {
    return `Everyone loves ${this.name}!`;
};