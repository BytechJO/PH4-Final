window.ConversationWriting = function (obj, dataObj) {
  var ob = obj[0].getElementsByClassName("options");

  this.settings = {
    activity_area: ob[0],

    data_obj: dataObj,

    parent_holder: obj[0],
  };

  this.init(this.settings);
};

ConversationWriting.prototype = {
  init: function (ob) {
    this.ob = ob;

    this.listen();
  },

  listen: function () {
    var e = this.ob.activity_area;

    // =====================================================
    // TURN WORDS INTO CLICKABLE SPANS
    // =====================================================

    function wrapWords(editable) {
      var text = $(editable).text();

      if ($.trim(text) === "") {
        return;
      }

      var words = text.split(/(\s+)/);

      var html = "";

      for (var i = 0; i < words.length; i++) {
        if (/^\s+$/.test(words[i])) {
          html += words[i];
        } else if (words[i] !== "") {
          html +=
            '<span class="conversation_word" data-circle="false">' +
            words[i] +
            "</span>";
        }
      }

      $(editable).html(html);
    }

    // =====================================================
    // WHEN USER LEAVES LINE
    // =====================================================

    $(e).on("blur", ".conversation_editable", function () {
      wrapWords(this);
    });

    // =====================================================
    // CLICK WORD = ADD / REMOVE CIRCLE
    // =====================================================

    $(e).on("click", ".conversation_word", function (event) {
      event.preventDefault();
      event.stopPropagation();

      var isCircled = $(this).attr("data-circle") === "true";

      if (isCircled) {
        $(this)
          .attr("data-circle", "false")
          .removeClass("conversation_circled_word");
      } else {
        $(this)
          .attr("data-circle", "true")
          .addClass("conversation_circled_word");
      }

      $(".resetBtn").removeClass("disabled");
    });

    // =====================================================
    // TYPING
    // =====================================================

    $(e).on("input", ".conversation_editable", function () {
      $(".checkBtn").addClass("disabled");

      var hasText = false;

      $(e)
        .find(".conversation_editable")
        .each(function () {
          if ($.trim($(this).text()) !== "") {
            hasText = true;

            return false;
          }
        });

      if (hasText) {
        $(".resetBtn").removeClass("disabled");
      } else {
        $(".resetBtn").addClass("disabled");
      }
    });
  },

  validate: function () {
    // intentionally empty
    // no validation for this activity

    return;
  },

  reset: function () {
    var e = this.ob.activity_area;

    $(e).find(".conversation_editable").html("");

    $(".checkBtn").addClass("disabled");

    $(".resetBtn").addClass("disabled");
  },

  initialSettings: function () {
    this.reset();

    initialSettingsDone(1);
  },
};
