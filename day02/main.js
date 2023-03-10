"use strict";
// exports.__esModule = true;
var username = "sontv";
var isAdmin = true;
/*
    Mảng số
    Mảng chuỗi
    Mảng mix
*/
var arrNumber = [1, 2, 3, 4];
var arrStr = ["abc", "def"];
var arrMix = [123, "abc"];
var projectList = [
    {
        id: 1,
        name: "Du an mau",
        image: "http://...",
        link: "http://...",
        status: true
    },
    {
        id: 2,
        name: "Du an 1",
        image: "http://...",
        link: "http://...",
        status: false
    }
];
var showProject = function (projects) {
    // tìm tới thẻ div có id app và hiển thị dữ liệu của mảng ra
    // sử dụng map và hiển thị
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n                data\n            ";
        }).join("");
    }
};
showProject(projectList);
