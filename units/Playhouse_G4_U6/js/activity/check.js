function CheckActivity(aContainer, aData) {
  this.container = aContainer;

  this.data = aData;

  this.orientationAdjust = "no";

  /* =====================================================
     INITIAL SETTINGS
  ===================================================== */

  this.initialSettings = function () {
    var self = this;

    /* Disable controls initially */

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");

    /* =========================================
       Picture click
    ========================================= */

    this.container
      .off("click.checkActivity", ".check_picture_item")
      .on("click.checkActivity", ".check_picture_item", function () {
        $(this).toggleClass("selected");

        /* remove old validation */

        $(this).find(".picture_correct, .picture_wrong").hide();

        $(this)
          .closest(".check_group")
          .find(".answer_correct, .answer_wrong")
          .hide();

        self.enableControls();
      });

    /* =========================================
       Input
    ========================================= */

    this.container
      .off("input.checkActivity", ".check_answer_input")
      .on("input.checkActivity", ".check_answer_input", function () {
        $(this)
          .closest(".check_group")
          .find(".answer_correct, .answer_wrong")
          .hide();

        self.enableControls();
      });

    /* activity loaded */

    initialSettingsDone(1);
  };

  /* =====================================================
     ENABLE CONTROLS
  ===================================================== */

  this.enableControls = function () {
    $(".checkBtn").removeClass("disabled");

    $(".resetBtn").removeClass("disabled");
  };

  /* =====================================================
     NORMALIZE ANSWER
  ===================================================== */

  this.normalizeWords = function (value) {
    if (!value) {
      return [];
    }

    value = value
      .toLowerCase()
      .replace(/,/g, " ")
      .replace(/\./g, " ")
      .replace(/;/g, " ")
      .replace(/\band\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (value === "") {
      return [];
    }

    return value
      .split(" ")
      .filter(function (word) {
        return word !== "";
      })
      .sort();
  };

  /* =====================================================
     COMPARE WORD ARRAYS
  ===================================================== */

  this.sameWords = function (userWords, correctWords) {
    if (userWords.length !== correctWords.length) {
      return false;
    }

    for (var i = 0; i < userWords.length; i++) {
      if (userWords[i] !== correctWords[i]) {
        return false;
      }
    }

    return true;
  };

  /* =====================================================
     VALIDATE
  ===================================================== */

  this.validate = function () {
    var self = this;

    var allCorrect = true;

    $(".check_group").each(function (groupIndex) {
      var $group = $(this);

      var groupData = self.data.groups[groupIndex];

      /* =====================================
           Pictures
        ===================================== */

      var picturesCorrect = true;

      $group.find(".check_picture_item").each(function () {
        var $picture = $(this);

        var shouldSelect = String($picture.data("correct")) === "true";

        var isSelected = $picture.hasClass("selected");

        $picture.find(".picture_correct, .picture_wrong").hide();

        /*
              correct state:
              correct image selected
              OR wrong image not selected
            */

        var thisPictureCorrect = shouldSelect === isSelected;

        if (!thisPictureCorrect) {
          picturesCorrect = false;

          allCorrect = false;

          $picture.find(".picture_wrong").show();
        } else {
          /*
                Show green tick only
                on correct selected pictures
              */

          if (shouldSelect && isSelected) {
            $picture.find(".picture_correct").show();
          }
        }
      });

      /* =====================================
           Text answer
        ===================================== */

      var inputValue = $group.find(".check_answer_input").val();

      var userWords = self.normalizeWords(inputValue);

      var correctWords = self.normalizeWords(groupData.answerWords.join(" "));

      var answerCorrect = self.sameWords(userWords, correctWords);

      $group.find(".answer_correct, .answer_wrong").hide();

      if (answerCorrect) {
        $group.find(".answer_correct").show();
      } else {
        $group.find(".answer_wrong").show();

        allCorrect = false;
      }

      if (!picturesCorrect) {
        allCorrect = false;
      }
    });

    /* Feedback */

    if (typeof showFeedback === "function") {
      showFeedback(true, allCorrect);
    }

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").removeClass("disabled");
  };

  /* =====================================================
     RESET
  ===================================================== */

  this.reset = function () {
    this.container.find(".check_picture_item").removeClass("selected");

    this.container.find(".check_answer_input").val("");

    this.container.find(".picture_correct, .picture_wrong").hide();

    this.container.find(".answer_correct, .answer_wrong").hide();

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  };

  /* =====================================================
     OPTIONAL
  ===================================================== */

  this.screenPoseAdjustments = function () {};
}
