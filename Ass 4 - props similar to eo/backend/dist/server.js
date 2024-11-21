"use strict";

var _express = _interopRequireDefault(require("express"));
var _path = _interopRequireDefault(require("path"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var port = process.env.PORT || 3000;
// const port =  3001;

//create app
var app = (0, _express["default"])();

//serve static page into public directory
app.use(_express["default"]["static"]("frontend/public"));
app.listen(port, function () {
  console.log("Listening on port: localhost:".concat(port));
});
app.use(_express["default"]["static"]("frontend/public"));
app.get('*', function (req, res) {
  res.sendFile(_path["default"].resolve('frontend/public/index.html'));
});

//docker build -t image .

//docker run --name express -p 3005:3000 image