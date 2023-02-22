"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var linkAPIGetJobs = 'https://www.arbeitnow.com/api/job-board-api';
var dataJobs = null;
var list = document.querySelector('#jobs');
var handleGetJobs = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, responseJson, dataResponseJobs, i, liElement, div, linkJobDescription, textTitleJob, textCompanyName, textRemoteJob, isRemoteJob;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                document.getElementById("buttonGetJobs").disabled = true;
                return [4 /*yield*/, fetch(linkAPIGetJobs)];
            case 1:
                response = _b.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                responseJson = _b.sent();
                dataResponseJobs = responseJson;
                dataJobs = dataResponseJobs;
                for (i = 0; i < 10; i++) {
                    liElement = document.createElement('li');
                    div = document.createElement('div');
                    linkJobDescription = document.createElement('a');
                    textTitleJob = document.createElement('p');
                    textCompanyName = document.createElement('p');
                    textRemoteJob = document.createElement('p');
                    isRemoteJob = dataResponseJobs.data[i].remote ? 'Sim' : 'Não';
                    textTitleJob.textContent = "" + dataResponseJobs.data[i].title;
                    textTitleJob.classList.add('title-job');
                    textCompanyName.textContent = "" + dataResponseJobs.data[i].company_name;
                    textCompanyName.classList.add('other-info');
                    textRemoteJob.textContent = "" + isRemoteJob;
                    textRemoteJob.classList.add('other-info');
                    linkJobDescription.textContent = 'Ver vaga ';
                    linkJobDescription.href = "" + dataResponseJobs.data[i].url;
                    linkJobDescription.target = "_blank";
                    linkJobDescription.classList.add('link-job');
                    div.classList.add('content-description-job');
                    div.append(textTitleJob, textCompanyName, textRemoteJob, linkJobDescription);
                    liElement.appendChild(div);
                    (_a = document.getElementById("jobs")) === null || _a === void 0 ? void 0 : _a.appendChild(liElement);
                }
                document.getElementById("buttonGetJobs").disabled = false;
                return [2 /*return*/];
        }
    });
}); };
