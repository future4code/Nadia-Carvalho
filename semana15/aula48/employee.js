"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var user_1 = require("./user");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, email, name, password, admissionDate, baseSalary) {
        var _this = _super.call(this, id, email, name, password) || this;
        console.log("Chamando o construtor da classe User");
        _this.admissionDate = admissionDate;
        _this.baseSalary = baseSalary;
        return _this;
    }
    Employee.prototype.getAdmissionDate = function () {
        return this.admissionDate;
    };
    Employee.prototype.getBaseSalary = function () {
        return this.baseSalary;
    };
    return Employee;
}(user_1["default"]));
var NovoFuncionario = new Employee('idDeFuncionario1', 'lukethecatioro@gmail.com', 'Luke Skywalker', 'woofwoof', new Date(), 10000);
console.log(Employee);
