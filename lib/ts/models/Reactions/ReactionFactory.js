"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactionFactory = void 0;

var _ReactionAforBIreversible = require("./ReactionAforBIreversible");

var _ReactionAforBReversible = require("./ReactionAforBReversible");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReactionFactory =
/*#__PURE__*/
function () {
  function ReactionFactory() {
    _classCallCheck(this, ReactionFactory);
  }

  _createClass(ReactionFactory, [{
    key: "getReaction",
    value: function getReaction(typeOfReaction, numberOfMolecules) {
      if (typeOfReaction == "reversibleFirstOrderReaction") return new _ReactionAforBReversible.ReactionAforBReversible(numberOfMolecules);else return new _ReactionAforBIreversible.ReactionAforBIreversible(numberOfMolecules);
    }
  }]);

  return ReactionFactory;
}();

exports.ReactionFactory = ReactionFactory;