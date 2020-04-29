"use strict";
exports.__esModule = true;
/*Exercício 1:*/
var User = /** @class */ (function () {
    function User(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.introduceYourself = function () {
        return "Ol\u00E1, meu nome \u00E9 " + this.name + ". Bom dia! =)";
    }; /*Exercício 4:*/
    return User;
}());
/*Exercício 1:*/ var NovoUsuario = new User('Nadia', 'nadia@labenu.com.br', 'Nadia Carvalho', 'esqueciasenha');
/*Exercício 4:*/ console.log(NovoUsuario.introduceYourself());
exports["default"] = User;
