function BaseClass(name) {
    this.name = name;
}

BaseClass.prototype.getName = function() {
    return this.name;
}

function SubClass(name, gender) {
    BaseClass.call(this, name);
    this.gender = gender;
}

// You need to chain the prototype to make the inheritance work.
SubClass.prototype = new BaseClass();

SubClass.prototype.getGender = function() {
    return this.gender;
}

function init() {
    let john = new BaseClass('John');
    document.getElementById('baseClass').textContent = john.getName();

    let jane = new SubClass('Jane', 'Female');
    document.getElementById('subClass').textContent = jane.getName() + ' - ' + jane.getGender();
}

window.addEventListener('load', init);