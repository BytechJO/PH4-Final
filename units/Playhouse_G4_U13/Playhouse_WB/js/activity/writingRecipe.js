// ******************************************
// WRITING RECIPE
// ******************************************

window.WritingRecipe = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

WritingRecipe.prototype = {
  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  // =====================================================
  // LISTEN
  // فقط كتابة، ما في validation
  // =====================================================

  listen: function () {
    var e = this.ob.activity_area;

    $(e).on("input", ".recipe_textarea", function () {
      // ما في Check
      // ما في validation
      // فقط نسمح للطالب يكتب
    });
  },

  // =====================================================
  // VALIDATE
  // غير مستخدمة
  // =====================================================

  validate: function () {
    return;
  },

  // =====================================================
  // RESET
  // موجودة فقط لتوافق النظام
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;

    $(e).find(".recipe_textarea").val("");
  },

  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {
    initialSettingsDone(1);
  },
};
