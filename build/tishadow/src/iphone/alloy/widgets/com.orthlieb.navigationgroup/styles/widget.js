function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.orthlieb.navigationgroup/" + s : s.substring(0, index) + "/com.orthlieb.navigationgroup/" + s.substring(index + 1);
    return path;
}

module.exports = [];