function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import SockJS from "../modules/sockjs-client/index.js";
import { log } from "../utils/log.js";

var SockJSClient = /*#__PURE__*/function () {
  function SockJSClient(url) {
    _classCallCheck(this, SockJSClient);

    // SockJS requires `http` and `https` protocols
    this.sock = new SockJS(url.replace(/^ws:/i, "http:").replace(/^wss:/i, "https:"));

    this.sock.onerror = function (error) {
      log.error(error);
    };
  }

  _createClass(SockJSClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.sock.onopen = f;
    }
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.sock.onclose = f;
    } // call f with the message string as the first argument

  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.sock.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);

  return SockJSClient;
}();

export { SockJSClient as default };