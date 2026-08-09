window.RhymeSelect = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    parent_holder: obj[0],

    activity_area: ob[0],

    data_obj: dataObj,
  };

  this.orientationAdjust = "no";

  this.init(this.settings);
};

RhymeSelect.prototype = {
  /* =====================================================
     INIT
  ===================================================== */

  init: function (ob) {
    this.ob = ob;

    this.listen(ob);
  },

  /* =====================================================
     LISTEN
  ===================================================== */

  listen: function (ob) {
    var self = this;

    var $area = $(ob.activity_area);

    /* =====================================================
       INPUT
    ===================================================== */

    $area
      .off("input.rhyme", ".rhyme_input")
      .on("input.rhyme", ".rhyme_input", function () {
        $(this).css("color", "#222");

        self.hideResults();

        self.enableControls();
      });

    /* =====================================================
       SELECT RHYME WORD
    ===================================================== */

    $area
      .off("click.rhyme", ".rhyme_circle_target")
      .on("click.rhyme", ".rhyme_circle_target", function () {
        var $target = $(this);

        var $item = $target.closest(".rhyme_item");

        var $group = $item.closest(".rhyme_group");

        /* =========================================
             UNSELECT
          ========================================= */

        if ($item.hasClass("rhyme_selected")) {
          $item.removeClass("rhyme_selected");

          self.hideResults();

          self.enableControls();

          return;
        }

        /* =========================================
             MAXIMUM 2
          ========================================= */

        var selectedCount = $group.find(".rhyme_item.rhyme_selected").length;

        if (selectedCount >= 2) {
          return;
        }

        $item.addClass("rhyme_selected");

        self.hideResults();

        self.enableControls();
      });
  },

  /* =====================================================
     ENABLE BUTTONS
  ===================================================== */

  enableControls: function () {
    var resetBtn = document.getElementsByClassName("resetBtn")[0];

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (resetBtn) {
      resetBtn.classList.remove("disabled");
    }

    if (checkBtn) {
      checkBtn.classList.remove("disabled");
    }
  },

  /* =====================================================
     HIDE RESULTS
  ===================================================== */

  hideResults: function () {
    var area = this.ob.activity_area;

    $(area).find(".rhyme_result .tick").hide();

    $(area).find(".rhyme_result .cross").hide();

    $(area).find(".rhyme_group_result .tick").hide();

    $(area).find(".rhyme_group_result .cross").hide();
  },

  /* =====================================================
     NORMALIZE
  ===================================================== */

  normalize: function (value) {
    return $.trim(value || "").toLowerCase();
  },

  /* =====================================================
     VALIDATE
  ===================================================== */

  validate: function () {
    var self = this;

    var ob = this.ob;

    var data = ob.data_obj;

    var $area = $(ob.activity_area);

    var allCorrect = true;

    /* =====================================================
       GROUP LOOP
    ===================================================== */

    $area.find(".rhyme_group").each(function (groupIndex) {
      var $group = $(this);

      var groupData = data.groups[groupIndex];

      var writingCorrect = true;

      var rhymeCorrect = true;

      /* =================================================
             CHECK INPUTS
          ================================================= */

      $group.find(".rhyme_item").each(function (itemIndex) {
        var $item = $(this);

        var itemData = groupData.items[itemIndex];

        var $iconWrap = $item.find(".rhyme_result");

        var $tick = $item.find(".rhyme_result .tick");

        var $cross = $item.find(".rhyme_result .cross");

        $iconWrap.hide();

        $tick.hide();

        $cross.hide();

        /* =====================================
                   READONLY EXAMPLE
                ===================================== */

        if (itemData.readonly === true) {
          return;
        }

        var inputValue = self.normalize($item.find(".rhyme_input").val());

        var answer = self.normalize(itemData.answer);

        /* =====================================
                   CORRECT INPUT
                ===================================== */

        $iconWrap.show();

        if (inputValue === answer) {
          $tick.show();

          $cross.hide();
        } else {
          $tick.hide();

          $cross.show();

          writingCorrect = false;
        }
      });

      /* =================================================
             RHYME SELECTION
          ================================================= */

      var selected = [];

      $group.find(".rhyme_item.rhyme_selected").each(function () {
        selected.push(parseInt($(this).attr("data-index")));
      });

      selected.sort(function (a, b) {
        return a - b;
      });

      var correct = groupData.correctRhymes.slice();

      correct.sort(function (a, b) {
        return a - b;
      });

      /* =================================================
             COMPARE RHYMES
          ================================================= */

      if (selected.length !== correct.length) {
        rhymeCorrect = false;
      } else {
        for (var r = 0; r < correct.length; r++) {
          if (selected[r] !== correct[r]) {
            rhymeCorrect = false;

            break;
          }
        }
      }

      /* =================================================
             GROUP ICON
          ================================================= */

      var $groupResult = $group.find(".rhyme_group_result");

      var $groupTick = $group.find(".rhyme_group_result .tick");

      var $groupCross = $group.find(".rhyme_group_result .cross");

      $groupResult.show();

      if (rhymeCorrect) {
        $groupTick.show();

        $groupCross.hide();
      } else {
        $groupTick.hide();

        $groupCross.show();
      }

      /* =================================================
             FINAL GROUP RESULT
          ================================================= */

      if (!writingCorrect || !rhymeCorrect) {
        allCorrect = false;
      }
    });

    /* =====================================================
       VIDEO FEEDBACK
    ===================================================== */

    showFeedback(true, allCorrect);

    /* =====================================================
       ALL CORRECT
    ===================================================== */

    if (allCorrect) {
      var resetBtn = document.getElementsByClassName("resetBtn")[0];

      if (resetBtn) {
        resetBtn.classList.add("disabled");
      }
    }
  },

  /* =====================================================
     RESET
  ===================================================== */

  reset: function () {
    var ob = this.ob;

    var $area = $(ob.activity_area);

    /* INPUTS */

    $area.find(".rhyme_input").val("").css("color", "#222");

    /* SELECTION */

    $area.find(".rhyme_item").removeClass("rhyme_selected");

    /* ICONS */

    this.hideResults();

    /* BUTTONS */

    var resetBtn = document.getElementsByClassName("resetBtn")[0];

    var checkBtn = document.getElementsByClassName("checkBtn")[0];

    if (resetBtn) {
      resetBtn.classList.add("disabled");
    }

    if (checkBtn) {
      checkBtn.classList.add("disabled");
    }
  },

  /* =====================================================
     INITIAL SETTINGS
  ===================================================== */

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },

  /* =====================================================
     SCREEN
  ===================================================== */

  screenPoseAdjustments: function () {},
};
