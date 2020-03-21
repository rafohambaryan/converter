(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeFileComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "changeFile",
  components: {},
  props: ['fileId'],
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['getfileData'])),
  data: function data() {
    return {};
  },
  created: function created() {
    this.message = this.getfileData.file;
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['chenge']), {
    closeChange: function closeChange() {
      this.$emit('closeChange', false);
    },
    changefile: function changefile() {
      var _this = this;

      var data = [this.fileId, {
        file: this.message,
        format: this.getfileData.JSon.pare(format)
      }];
      this.chenge(data).then(function (res) {
        console.log(res);

        _this.$emit('closeChangePopup', false);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fileComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _message_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.vue */ "./resources/js/components/message.vue");
/* harmony import */ var _formatComponent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatComponent.vue */ "./resources/js/components/formatComponent.vue");
/* harmony import */ var _changeFileComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeFileComponent.vue */ "./resources/js/components/changeFileComponent.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "fileComponent",
  components: {
    message: _message_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    format: _formatComponent_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    changeFile: _changeFileComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['allFilse']),
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getFiles();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      cover: false,
      fileId: null,
      message: '',
      activeFormat: false,
      changeContent: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapActions"])(['getFiles', 'deleteFile', 'getFile']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapMutations"])(['createPost']), {
    nameFile: function nameFile(file) {
      var fileName = file.split('.')[file.split('.').length - 1];
      return fileName;
    },
    deleteCard: function deleteCard(id, index) {
      this.deleteFile(id);
      this.createPost(index);
    },
    download: function download(id) {
      window.scrollTo(0, 0);
      this.cover = true;
      this.activeFormat = true;
      this.fileId = id;
    },
    closePopup: function closePopup(value) {
      this.cover = value;
      this.activeFormat = value;
    },
    errorMessage: function errorMessage(value) {
      var _this2 = this;

      this.message = value;
      setTimeout(function () {
        _this2.message = '';
      }, 1000);
    },
    change: function change(id) {
      self = this;
      this.getFile(id).then(function (res) {
        console.log(res);
        window.scrollTo(0, 0);
        self.cover = true;
        self.fileId = id;
        self.changeContent = true;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    closeChange: function closeChange(value) {
      this.cover = value;
      this.changeContent = value;
    },
    closeChangePopup: function closeChangePopup() {
      this.cover = false;
      this.changeContent = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/formatComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "format",
  components: {},
  props: ['fileId'],
  data: function data() {
    return {
      picked: ''
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])(['downloadFile']), {
    download: function download() {
      var _this = this;

      if (this.picked != '') {
        var data = [this.fileId, this.picked];
        console.log(this.fileId, this.picked, "hh");
        this.downloadFile(data).then(function (res) {
          console.log(res.path);
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,');
          element.setAttribute('download', "".concat(window.location.origin, "/").concat(res.path));
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);

          _this.$emit('closePopup', false);
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        this.$emit('errorMessage', 'Выберите формат');
      }
    },
    close: function close() {
      this.$emit('closePopup', false);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "message",
  components: {},
  props: ['message'],
  data: function data() {
    return {};
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".changeContent[data-v-87343ad4] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n  padding: 20px 30px;\n  margin: 20px 5px;\n  position: absolute;\n  z-index: 5;\n}\n.changeContent .closePopup[data-v-87343ad4] {\n  position: absolute;\n  right: 15px;\n  cursor: pointer;\n}\n.changeContent .closePopup img[data-v-87343ad4] {\n  width: 20px;\n}\n.changeContent textarea[data-v-87343ad4] {\n  height: 253px;\n  width: 823px;\n  border-radius: 4px;\n  margin: 8px 0px 0px;\n  border: 1px solid #dce3ea;\n  padding: 20px;\n  font-size: 14px;\n  line-height: 24px;\n  resize: vertical;\n  overflow: auto;\n  margin-top: 30px;\n}\n.changeContent button[data-v-87343ad4] {\n  width: 150px;\n  margin-top: 17px;\n  height: 40px;\n  color: white;\n  border: none;\n  border-radius: 20px;\n  cursor: pointer;\n  border: 1px solid #336ff0;\n  background-color: #336ff0;\n}\n.changeContent button[data-v-87343ad4]:hover {\n  cursor: pointer;\n  color: #336ff0;\n  background-color: white;\n  transition: all ease-in-out 0.3s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".massage[data-v-48cf3626] {\n  position: absolute;\n  z-index: 10;\n  width: 220px;\n}\n.cover[data-v-48cf3626] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n}\n.card-main[data-v-48cf3626] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  padding: 20px;\n  position: relative;\n}\n.card-main .card[data-v-48cf3626] {\n  width: 240px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  border-radius: 15px;\n  padding: 20px 30px;\n  margin: 20px 5px;\n  position: relative;\n}\n.card-main .card .deletFile[data-v-48cf3626] {\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n}\n.card-main .card .deletFile img[data-v-48cf3626] {\n  width: 20px;\n}\n.card-main .card .card-image[data-v-48cf3626] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-main .card .card-description h4[data-v-48cf3626] {\n  color: #272727;\n  font-size: 17px;\n  padding-top: 10px;\n  margin: 0px;\n}\n.card-main .card .card-description p[data-v-48cf3626] {\n  color: #646464;\n  font-size: 13px;\n  padding-top: 8px;\n  margin: 0px;\n}\n.card-main .card .card-button[data-v-48cf3626] {\n  width: 100%;\n  margin-bottom: 5px;\n  border-radius: 50px;\n}\n.card-main .card .card-button button[data-v-48cf3626] {\n  margin-top: 20px;\n  border-radius: 50px;\n  width: 110px;\n  border-width: 0px;\n  color: white;\n  height: 40px;\n  border: 1px solid #14a37d;\n  background-color: #14a37d;\n  transition: all ease-in-out 0.3s;\n  margin-right: 7px;\n}\n.card-main .card .card-button button[data-v-48cf3626]:hover {\n  cursor: pointer;\n  color: #14a37d;\n  background-color: white;\n  transition: all ease-in-out 0.3s;\n}\n.card-main .card .card-button .change[data-v-48cf3626] {\n  border: 1px solid #336ff0;\n  background-color: #336ff0;\n}\n.card-main .card .card-button .change[data-v-48cf3626]:hover {\n  cursor: pointer;\n  color: #336ff0;\n  background-color: white;\n  transition: all ease-in-out 0.3s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".closePopup[data-v-fac6876a] {\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n}\n.closePopup img[data-v-fac6876a] {\n  width: 20px;\n}\n.popupFormat[data-v-fac6876a] {\n  position: absolute;\n  z-index: 5;\n  background: white;\n  padding: 25px;\n  width: 160px;\n  border-radius: 25px;\n  top: 250px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.popupFormat .radio[data-v-fac6876a] {\n  margin: 16px 0;\n  display: block;\n  cursor: pointer;\n  width: 60px;\n}\n.popupFormat .radio input[data-v-fac6876a] {\n  display: none;\n}\n.popupFormat .radio input + span[data-v-fac6876a] {\n  line-height: 22px;\n  height: 22px;\n  padding-left: 22px;\n  display: block;\n  position: relative;\n}\n.popupFormat .radio input + span[data-v-fac6876a]:not(:empty) {\n  padding-left: 30px;\n}\n.popupFormat .radio input + span[data-v-fac6876a]:before, .popupFormat .radio input + span[data-v-fac6876a]:after {\n  content: \"\";\n  width: 22px;\n  height: 22px;\n  display: block;\n  border-radius: 50%;\n  left: 0;\n  top: 0;\n  position: absolute;\n}\n.popupFormat .radio input + span[data-v-fac6876a]:before {\n  background: #D1D7E3;\n  transition: background 0.2s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);\n}\n.popupFormat .radio input + span[data-v-fac6876a]:after {\n  background: #fff;\n  transform: scale(0.78);\n  transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);\n}\n.popupFormat .radio input:checked + span[data-v-fac6876a]:before {\n  transform: scale(1.04);\n  background: #5D9BFB;\n}\n.popupFormat .radio input:checked + span[data-v-fac6876a]:after {\n  transform: scale(0.4);\n  transition: transform 0.3s ease;\n}\n.popupFormat .radio:hover input + span[data-v-fac6876a]:before {\n  transform: scale(0.92);\n}\n.popupFormat .radio:hover input + span[data-v-fac6876a]:after {\n  transform: scale(0.74);\n}\n.popupFormat .radio:hover input:checked + span[data-v-fac6876a]:after {\n  transform: scale(0.4);\n}\n.popupFormat > div[data-v-fac6876a]:nth-child(3) {\n  margin-top: 20px;\n  border-radius: 50px;\n  width: 110px;\n  border-width: 0px;\n  color: white;\n  height: 40px;\n  border: 1px solid #14a37d;\n  background-color: #14a37d;\n  transition: all ease-in-out 0.3s;\n  margin-right: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.popupFormat > div[data-v-fac6876a]:nth-child(3):hover {\n  cursor: pointer;\n  color: #14a37d;\n  background-color: white;\n  transition: all ease-in-out 0.3s;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".messageContent[data-v-4009260c] {\n  background-color: #fd7570 !important;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  height: 60px;\n  position: absolute;\n  width: 100%;\n  bottom: -100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.messageContent h5[data-v-4009260c] {\n  font-size: 20px;\n  color: white;\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "changeContent" }, [
    _c(
      "div",
      {
        staticClass: "closePopup",
        on: {
          click: function($event) {
            return _vm.closeChange()
          }
        }
      },
      [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../../assetc/img/cross1.svg */ "./resources/assetc/img/cross1.svg"), alt: "" }
        })
      ]
    ),
    _vm._v(" "),
    _c("textarea", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.message,
          expression: "message"
        }
      ],
      domProps: { value: _vm.message },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.message = $event.target.value
        }
      }
    }),
    _vm._v(" "),
    _c(
      "button",
      {
        on: {
          click: function($event) {
            return _vm.changefile()
          }
        }
      },
      [_vm._v("Изменять")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=template&id=48cf3626&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/fileComponent.vue?vue&type=template&id=48cf3626&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "card-main" },
      [
        _vm.message
          ? _c("message", {
              staticClass: "massage",
              attrs: { message: _vm.message, fileId: _vm.fileId }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.changeContent
          ? _c("changeFile", {
              attrs: { fileId: _vm.fileId },
              on: {
                closeChangePopup: _vm.closeChangePopup,
                closeChange: _vm.closeChange
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.activeFormat
          ? _c("format", {
              attrs: { fileId: _vm.fileId },
              on: { closePopup: _vm.closePopup, errorMessage: _vm.errorMessage }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.allFilse, function(file, key) {
          return _c("div", { key: key, staticClass: "card" }, [
            _c(
              "div",
              {
                staticClass: "deletFile",
                on: {
                  click: function($event) {
                    return _vm.deleteCard(file.id, key)
                  }
                }
              },
              [
                _c("img", {
                  attrs: { src: __webpack_require__(/*! ../../assetc/img/cross.svg */ "./resources/assetc/img/cross.svg"), alt: "" }
                })
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-image" }, [
              _vm.nameFile(file.name) == "json"
                ? _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../assetc/img/json_file.svg */ "./resources/assetc/img/json_file.svg"),
                      alt: ""
                    }
                  })
                : _vm.nameFile(file.name) == "xml"
                ? _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../assetc/img/xml_file.svg */ "./resources/assetc/img/xml_file.svg"),
                      alt: ""
                    }
                  })
                : _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../assetc/img/csv_file.svg */ "./resources/assetc/img/csv_file.svg"),
                      alt: ""
                    }
                  })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-description" }, [
              _c("h4", [_vm._v(_vm._s(file.name))])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-button" }, [
              _c(
                "button",
                {
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      return _vm.download(file.id)
                    }
                  }
                },
                [_vm._v("скачать")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "change",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      return _vm.change(file.id)
                    }
                  }
                },
                [_vm._v("Изменять")]
              )
            ])
          ])
        })
      ],
      2
    ),
    _vm._v(" "),
    _vm.cover ? _c("div", { staticClass: "cover" }) : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=template&id=fac6876a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/formatComponent.vue?vue&type=template&id=fac6876a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "popupFormat" }, [
    _c(
      "div",
      {
        staticClass: "closePopup",
        on: {
          click: function($event) {
            return _vm.close()
          }
        }
      },
      [
        _c("img", {
          attrs: { src: __webpack_require__(/*! ../../assetc/img/cross1.svg */ "./resources/assetc/img/cross1.svg"), alt: "" }
        })
      ]
    ),
    _vm._v(" "),
    _c("div", [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.picked,
              expression: "picked"
            }
          ],
          attrs: { type: "radio", name: "r", value: "json" },
          domProps: { checked: _vm._q(_vm.picked, "json") },
          on: {
            change: function($event) {
              _vm.picked = "json"
            }
          }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("json")])
      ]),
      _vm._v(" "),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.picked,
              expression: "picked"
            }
          ],
          attrs: { type: "radio", name: "r", value: "csv" },
          domProps: { checked: _vm._q(_vm.picked, "csv") },
          on: {
            change: function($event) {
              _vm.picked = "csv"
            }
          }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("csv")])
      ]),
      _vm._v(" "),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.picked,
              expression: "picked"
            }
          ],
          attrs: { type: "radio", name: "r", value: "xml" },
          domProps: { checked: _vm._q(_vm.picked, "xml") },
          on: {
            change: function($event) {
              _vm.picked = "xml"
            }
          }
        }),
        _vm._v(" "),
        _c("span", [_vm._v("xml")])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        on: {
          click: function($event) {
            return _vm.download()
          }
        }
      },
      [_vm._v("скачать")]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=template&id=4009260c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/message.vue?vue&type=template&id=4009260c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "messageContent" }, [
      _c("div", { staticClass: "message" }, [
        _c(
          "div",
          { staticClass: "mb-1 pt-2 bg-danger", attrs: { variant: "danger" } },
          [
            _c("h5", { staticClass: "text-white" }, [
              _vm._v(_vm._s(_vm.message))
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assetc/img/cross.svg":
/*!****************************************!*\
  !*** ./resources/assetc/img/cross.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cross.svg?d964bedce1c7d206b5db0b68702a3499";

/***/ }),

/***/ "./resources/assetc/img/cross1.svg":
/*!*****************************************!*\
  !*** ./resources/assetc/img/cross1.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/cross1.svg?0fefcef690df2c7933be9de96c65c2d9";

/***/ }),

/***/ "./resources/assetc/img/csv_file.svg":
/*!*******************************************!*\
  !*** ./resources/assetc/img/csv_file.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/csv_file.svg?2a75501691bcba7b351cc9383042f378";

/***/ }),

/***/ "./resources/assetc/img/json_file.svg":
/*!********************************************!*\
  !*** ./resources/assetc/img/json_file.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/json_file.svg?98743dff89a7531bf4479ff09c7117b6";

/***/ }),

/***/ "./resources/assetc/img/xml_file.svg":
/*!*******************************************!*\
  !*** ./resources/assetc/img/xml_file.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/xml_file.svg?8a6cc120a344455e1beb80f9654b9b13";

/***/ }),

/***/ "./resources/js/components/changeFileComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/changeFileComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeFileComponent_vue_vue_type_template_id_87343ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true& */ "./resources/js/components/changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true&");
/* harmony import */ var _changeFileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeFileComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/changeFileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true& */ "./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _changeFileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _changeFileComponent_vue_vue_type_template_id_87343ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _changeFileComponent_vue_vue_type_template_id_87343ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87343ad4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/changeFileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/changeFileComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/changeFileComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./changeFileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=style&index=0&id=87343ad4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_style_index_0_id_87343ad4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_template_id_87343ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/changeFileComponent.vue?vue&type=template&id=87343ad4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_template_id_87343ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_changeFileComponent_vue_vue_type_template_id_87343ad4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/fileComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/fileComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fileComponent_vue_vue_type_template_id_48cf3626_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileComponent.vue?vue&type=template&id=48cf3626&scoped=true& */ "./resources/js/components/fileComponent.vue?vue&type=template&id=48cf3626&scoped=true&");
/* harmony import */ var _fileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/fileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true& */ "./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fileComponent_vue_vue_type_template_id_48cf3626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fileComponent_vue_vue_type_template_id_48cf3626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "48cf3626",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fileComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/fileComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/fileComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./fileComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=style&index=0&id=48cf3626&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_style_index_0_id_48cf3626_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/fileComponent.vue?vue&type=template&id=48cf3626&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/fileComponent.vue?vue&type=template&id=48cf3626&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_template_id_48cf3626_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./fileComponent.vue?vue&type=template&id=48cf3626&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/fileComponent.vue?vue&type=template&id=48cf3626&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_template_id_48cf3626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fileComponent_vue_vue_type_template_id_48cf3626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/formatComponent.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/formatComponent.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatComponent_vue_vue_type_template_id_fac6876a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatComponent.vue?vue&type=template&id=fac6876a&scoped=true& */ "./resources/js/components/formatComponent.vue?vue&type=template&id=fac6876a&scoped=true&");
/* harmony import */ var _formatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/formatComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true& */ "./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _formatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _formatComponent_vue_vue_type_template_id_fac6876a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _formatComponent_vue_vue_type_template_id_fac6876a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fac6876a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/formatComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/formatComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/formatComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./formatComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=style&index=0&id=fac6876a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_style_index_0_id_fac6876a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/formatComponent.vue?vue&type=template&id=fac6876a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/formatComponent.vue?vue&type=template&id=fac6876a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_template_id_fac6876a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./formatComponent.vue?vue&type=template&id=fac6876a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/formatComponent.vue?vue&type=template&id=fac6876a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_template_id_fac6876a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_formatComponent_vue_vue_type_template_id_fac6876a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/message.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/message.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_vue_vue_type_template_id_4009260c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message.vue?vue&type=template&id=4009260c&scoped=true& */ "./resources/js/components/message.vue?vue&type=template&id=4009260c&scoped=true&");
/* harmony import */ var _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.vue?vue&type=script&lang=js& */ "./resources/js/components/message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true& */ "./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_vue_vue_type_template_id_4009260c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_vue_vue_type_template_id_4009260c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4009260c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/message.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/message.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/message.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./message.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=style&index=0&id=4009260c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_style_index_0_id_4009260c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/message.vue?vue&type=template&id=4009260c&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/message.vue?vue&type=template&id=4009260c&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_template_id_4009260c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./message.vue?vue&type=template&id=4009260c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/message.vue?vue&type=template&id=4009260c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_template_id_4009260c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_vue_vue_type_template_id_4009260c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);