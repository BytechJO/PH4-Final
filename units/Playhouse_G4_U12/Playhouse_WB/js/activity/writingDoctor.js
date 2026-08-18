// ******************************************
// Writing Doctor Activity
// ******************************************

window.WritingDoctor = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    has_audio:
      obj[0].dataset.audio != undefined &&
      obj[0].dataset.audio != null
        ? obj[0].dataset.audio
        : "no",

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};


WritingDoctor.prototype = {

  // =====================================================
  // INIT
  // =====================================================

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },


  // =====================================================
  // LISTEN
  // =====================================================

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;


    $(e).on(
      "input",
      ".writing_doctor_input",
      function () {

        $(this).css("color", "#000");

        self.updateControls();
      }
    );
  },


  // =====================================================
  // CONTROLS
  // Check always disabled
  // Reset active when there is text
  // =====================================================

  updateControls: function () {
    var e = this.ob.activity_area;

    var hasValue = false;


    $(e)
      .find(".writing_doctor_input")
      .each(function () {

        if (
          $.trim($(this).val()) !== ""
        ) {
          hasValue = true;

          return false;
        }
      });


    // Check never works
    $(".checkBtn")
      .addClass("disabled");


    // Reset
    if (hasValue) {

      $(".resetBtn")
        .removeClass("disabled");

    } else {

      $(".resetBtn")
        .addClass("disabled");
    }
  },


  // =====================================================
  // VALIDATE
  // no validation
  // =====================================================

  validate: function () {
    return;
  },


  // =====================================================
  // RESET
  // =====================================================

  reset: function () {
    var e = this.ob.activity_area;


    $(e)
      .find(".writing_doctor_input")
      .val("")
      .css("color", "#000");


    $(".checkBtn")
      .addClass("disabled");


    $(".resetBtn")
      .addClass("disabled");
  },


  // =====================================================
  // INITIAL SETTINGS
  // =====================================================

  initialSettings: function () {

    this.reset();

    initialSettingsDone(1);
  },

};