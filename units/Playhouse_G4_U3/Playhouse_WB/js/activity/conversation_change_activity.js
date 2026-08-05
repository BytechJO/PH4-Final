//  ****************************************** //
//  Conversation Change Activity
//  ****************************************** //

window.ConversationChange = function (obj, dataObj) {
  ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],
    data_obj: dataObj,
    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ConversationChange.prototype = {
  init: function (ob) {
    this.ob = ob;
    this.listen(ob);
  },

  listen: function (ob) {
    var self = this;
    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var changeTriggers = e.querySelectorAll(".change_trigger");

    for (var i = 0; i < changeTriggers.length; i++) {
      changeTriggers[i].addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        var wrapper = this.closest(".change_wrapper");

        if (!wrapper) {
          return;
        }

        var input = wrapper.querySelector(".change_input");

        if (!input) {
          return;
        }

        this.classList.add("d-none");

        input.classList.add("is-visible");

        input.value = "";

        input.focus();

        self.enableReset();
      });
    }

    var changeInputs = e.querySelectorAll(".change_input");

    for (var j = 0; j < changeInputs.length; j++) {
      changeInputs[j].addEventListener("input", function () {
        this.style.color = "black";

        self.enableReset();
      });
    }
  },

  enableReset: function () {
    var resetButtons = document.getElementsByClassName("resetBtn");

    for (var i = 0; i < resetButtons.length; i++) {
      resetButtons[i].classList.remove("disabled");
    }
  },

  hideCheckButton: function () {
    var checkButtons = document.getElementsByClassName("checkBtn");

    for (var i = 0; i < checkButtons.length; i++) {
      checkButtons[i].classList.add("disabled");

      checkButtons[i].style.display = "none";
    }
  },

  validate: function () {
    /*
     * لا يوجد Check Answer لهذا النشاط.
     * موجودة فقط حتى لا يحدث error
     * لو النظام حاول يستدعي validate.
     */
    return true;
  },

  reset: function () {
    var ob = this.ob;
    var e = ob.activity_area;

    if (!e) {
      return;
    }

    var wrappers = e.querySelectorAll(".change_wrapper");

    for (var i = 0; i < wrappers.length; i++) {
      var trigger = wrappers[i].querySelector(".change_trigger");

      var input = wrappers[i].querySelector(".change_input");

      if (input) {
        input.value = "";

        input.style.color = "black";

        input.classList.remove("is-visible");
      }

      if (trigger) {
        trigger.classList.remove("d-none");
      }
    }

    var resetButtons = document.getElementsByClassName("resetBtn");

    for (var j = 0; j < resetButtons.length; j++) {
      resetButtons[j].classList.add("disabled");
    }

    this.hideCheckButton();
  },

  initialSettings: function () {
    this.reset();

    this.hideCheckButton();

    initialSettingsDone(1);
  },
};
