"use strict";
exports.__esModule = true;
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
var project = {
    id: 1,
    name: "Du an mau",
    image: "http://...",
    link: "http://...",
    status: true
};
var showProject = function (props) {
    return props;
};
console.log(showProject(project));
var getProject = function (data) {
    console.log(data);
};
var projectList = [
    {
        id: 1,
        name: "Du an mau",
        image: "http://...",
        link: "http://...",
        status: true
    }
];
getProject(projectList);
