"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var InvestorService = (function () {
    function InvestorService(http) {
        this.http = http;
        this.mainUrl = 'https://www.scorebat.com/video-api/v1/';
    }
    InvestorService.prototype.getInvestors = function () {
        return this.http.get("" + this.mainUrl)
            .map(function (res) { return console.log(res.json()); });
    };
    InvestorService.prototype.searchInvestorsByName = function (name) {
        return this.http.get(this.mainUrl + "api/Investors/Getby?name=" + name)
            .map(function (res) { return res.json(); });
    };
    InvestorService.prototype.searchInvestorsBySurnameName = function (surname) {
        return this.http.get(this.mainUrl + "api/Investors/Getby?surname=" + surname)
            .map(function (res) { return res.json(); });
    };
    InvestorService.prototype.getInvestorById = function (id) {
        return this.http.get(this.mainUrl + "api/Investors/" + id)
            .map(function (res) { return res.json(); });
    };
    InvestorService.prototype.getInvestorAccountsById = function (id) {
        return this.http.get(this.mainUrl + "api/Accounts/ByInvestorId/" + id)
            .map(function (res) { return res.json(); });
    };
    InvestorService.prototype.getTotalAccounts = function () {
        return this.http.get(this.mainUrl + "api/Accounts")
            .map(function (res) { return res.json(); });
    };
    InvestorService.prototype.addInvestorAccount = function (id, account) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.put(this.mainUrl + "api/Accounts/" + id, account, options)
            .map(function (res) { return res.json(); });
    };
    return InvestorService;
}());
InvestorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], InvestorService);
exports.InvestorService = InvestorService;
//# sourceMappingURL=investor.service.js.map