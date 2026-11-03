// ******************************************
// MCQ_Choose
// Modified for:
// - circle selected option
// - write selected option inside sentence blank
// ******************************************


window.MCQ = function(
  obj,
  dataObj
) {

  var ob =
    obj[0]
      .getElementsByClassName(
        "options"
      );


  this.settings = {

    activity_area:
      ob[0],

    data_obj:
      dataObj,

    parent_holder:
      obj[0]

  };


  this.init(
    this.settings
  );
};



MCQ.prototype = {


  /* =========================================
     INIT
  ========================================= */

  init: function(ob) {

    this.ob =
      ob;


    this.listen(
      ob
    );
  },


  /* =========================================
     LISTEN
  ========================================= */

  listen: function(ob) {

    var self =
      this;


    var e =
      ob.activity_area;


    var selectTyp =
      ob.data_obj.select;


    var selectBgColor =
      ob.data_obj.bgcolor;


    var picks =
      e.querySelectorAll(
        ".pick"
      );


    if (
      picks.length > 0
    ) {

      for (
        var i = 0;
        i < picks.length;
        i++
      ) {

        picks[i]
          .addEventListener(
            "click",
            function() {


              /* =========================================
                 IDs
              ========================================= */

              var _thisId =
                $(this)
                  .attr("id");


              var idParts =
                _thisId
                  .split("_");


              var _parentNum =
                idParts[1];


              var _parentPickSet =
                idParts[2];


              /* =========================================
                 Current Question
              ========================================= */

              var thisQue =
                $("#" + _thisId)
                  .closest(
                    "#que_" +
                    _parentNum
                  );


              /* =========================================
                 Current Pick Set
              ========================================= */

              var thisPickSet =
                $("#" + _thisId)
                  .closest(
                    "#pick_set_" +
                    _parentNum +
                    "_" +
                    _parentPickSet
                  );


              /* =========================================
                 Hide validation icons
              ========================================= */

              self.showIcons(
                false
              );


              /* =========================================
                 Was option selected?
              ========================================= */

              var isSel =
                !$(this)
                  .hasClass(
                    "selected"
                  );


              /* =========================================
                 Single Select
              ========================================= */

              if (
                selectTyp ==
                "single"
              ) {

                self.resetAllPicks(
                  "this",
                  _parentNum,
                  _parentPickSet
                );

              } else {

                $(this)
                  .removeClass(
                    "selected"
                  );


                $(this)
                  .removeClass(
                    "selectedDefault"
                  );
              }


              /* =========================================
                 SELECT
              ========================================= */

              if (
                isSel
              ) {

                $(this)
                  .addClass(
                    "selected"
                  );


                if (
                  selectBgColor !=
                  "none"
                ) {

                  $(this)
                    .css(
                      "background-color",
                      selectBgColor
                    );

                } else {

                  $(this)
                    .addClass(
                      "selectedDefault"
                    );
                }


                /* =========================================
                   Selected Text
                ========================================= */

                var theText =
                  $(this)
                    .data(
                      "opttext"
                    );


                /* =========================================
                   Write text inside blank
                ========================================= */

                thisQue
                  .find(
                    ".answer_blank"
                  )
                  .text(
                    theText
                  )
                  .addClass(
                    "filled"
                  );


                /* =========================================
                   Existing Input Support
                ========================================= */

                if (
                  thisPickSet
                    .find(
                      "input"
                    )
                    .length >
                  0
                ) {

                  thisPickSet
                    .find(
                      "input"
                    )
                    .val(
                      theText
                    );
                }

              } else {


                /* =========================================
                   Deselect
                ========================================= */

                thisQue
                  .find(
                    ".answer_blank"
                  )
                  .text(
                    "____________"
                  )
                  .removeClass(
                    "filled"
                  );
              }


              /* =========================================
                 Enable Check
              ========================================= */

              var checkBtn =
                document
                  .getElementsByClassName(
                    "checkBtn"
                  )[0];


              if (
                checkBtn
              ) {

                checkBtn
                  .classList
                  .remove(
                    "disabled"
                  );
              }


              /* =========================================
                 Enable Reset
              ========================================= */

              var resetBtn =
                document
                  .getElementsByClassName(
                    "resetBtn"
                  )[0];


              if (
                resetBtn
              ) {

                resetBtn
                  .classList
                  .remove(
                    "disabled"
                  );
              }

            }
          );
      }
    }
  },


  /* =========================================
     RESET PICKS
  ========================================= */

  resetAllPicks: function(
    condition,
    qNum,
    pickSetNum
  ) {

    var ob =
      this.ob;


    var $area =
      $(ob.activity_area);


    if (
      condition ==
      "this"
    ) {

      var thisSet =
        $area.find(
          "#pick_set_" +
          qNum +
          "_" +
          pickSetNum
        );


      thisSet
        .find(
          ".pick"
        )
        .removeClass(
          "selected"
        );


      thisSet
        .find(
          ".pick"
        )
        .removeClass(
          "selectedDefault"
        );


      thisSet
        .find(
          ".pick"
        )
        .css(
          "background-color",
          ""
        );


      if (
        thisSet
          .find(
            "input"
          )
          .length >
        0
      ) {

        thisSet
          .find(
            "input"
          )
          .val(
            ""
          );
      }

    } else {


      $area
        .find(
          ".pick"
        )
        .removeClass(
          "selected"
        );


      $area
        .find(
          ".pick"
        )
        .removeClass(
          "selectedDefault"
        );


      $area
        .find(
          ".pick"
        )
        .css(
          "background-color",
          ""
        );


      if (
        $area
          .find(
            "input"
          )
          .length >
        0
      ) {

        $area
          .find(
            "input"
          )
          .val(
            ""
          );
      }
    }
  },


  /* =========================================
     VALIDATE
  ========================================= */

  validate: function() {

    var self =
      this;


    var ob =
      this.ob;


    var allCorrect =
      false;


    var $area =
      $(ob.activity_area);


    var numOfQs =
      $area
        .find(
          ".que"
        )
        .length;


    var resultArr =
      [];


    $area
      .find(
        ".que"
      )
      .each(
        function() {


          var qIndx =
            parseInt(
              $(this)
                .data(
                  "qno"
                )
            );


          var fDataObj =
            ob.data_obj
              .questions[
                qIndx - 1
              ];


          resultArr[
            qIndx - 1
          ] =
            0;


          var _cAns =
            getIntArray(
              fDataObj.answer
            );


          var tmpRes =
            [];


          $(this)
            .find(
              ".pick_set"
            )
            .each(
              function() {


                var setIndx =
                  parseInt(
                    $(this)
                      .attr(
                        "id"
                      )
                      .split(
                        "_"
                      )[3]
                  );


                tmpRes[
                  setIndx - 1
                ] =
                  0;


                var _setCorrAns =
                  _cAns[
                    setIndx - 1
                  ];


                var selectedPick =
                  0;


                if (
                  $(this)
                    .find(
                      ".selected"
                    )
                    .length >
                  0
                ) {

                  var tSel =
                    $(this)
                      .find(
                        ".selected"
                      );


                  selectedPick =
                    parseInt(
                      tSel
                        .attr(
                          "id"
                        )
                        .split(
                          "_"
                        )[3]
                    );
                }


                if (
                  selectedPick ==
                  _setCorrAns
                ) {

                  tmpRes[
                    setIndx - 1
                  ] =
                    1;
                }
              }
            );


          resultArr[
            qIndx - 1
          ] =
            (
              (
                tmpRes
                  .join("")
                  .split("0")
              )[0]
                .length ==
              _cAns.length
            )
              ? 1
              : 0;


          /* =========================================
             Enable Question Audio
          ========================================= */

          if (
            resultArr[
              qIndx - 1
            ] ==
            1
          ) {

            if (
              fDataObj.audio !=
              "" &&
              fDataObj.audio !=
              "no"
            ) {

              if (
                fDataObj.audioenable ==
                "correct"
              ) {

                if (
                  $(this)
                    .find(
                      ".audioIcon"
                    )
                    .length >
                  0
                ) {

                  $(this)
                    .find(
                      ".audioIcon"
                    )
                    .removeClass(
                      "disabled"
                    );
                }
              }
            }
          }

        }
      );


    allCorrect =
      (
        (
          resultArr
            .join("")
            .split("0")
        )[0]
          .length ==
        numOfQs
      );


    self.showIcons(
      true,
      resultArr,
      allCorrect
    );


    showFeedback(
      true,
      allCorrect
    );


    if (
      allCorrect
    ) {

      var resetBtn =
        document
          .getElementsByClassName(
            "resetBtn"
          )[0];


      if (
        resetBtn
      ) {

        resetBtn
          .classList
          .remove(
            "disabled"
          );
      }
    }
  },


  /* =========================================
     SHOW ICONS
  ========================================= */

  showIcons: function(
    aBoo,
    aVal,
    aResult
  ) {

    var ob =
      this.ob;


    var e =
      ob.activity_area;


    var needIcon =
      (
        typeof ob.data_obj
          .showicon !=
          "undefined" &&
        ob.data_obj
          .showicon !=
          null
      )
        ? ob.data_obj
            .showicon
        : "true";


    var elsQue =
      e.querySelectorAll(
        ".que"
      );


    for (
      var i = 0;
      i < elsQue.length;
      i++
    ) {

      var iconWrap =
        elsQue[i]
          .querySelector(
            ".icon_wrap"
          );


      var tick =
        elsQue[i]
          .querySelector(
            ".tick"
          );


      var cross =
        elsQue[i]
          .querySelector(
            ".cross"
          );


      if (
        !iconWrap ||
        !tick ||
        !cross
      ) {

        continue;
      }


      if (
        aBoo
      ) {

        if (
          needIcon ==
          "true"
        ) {

          iconWrap
            .style
            .display =
            "block";


          tick
            .style
            .display =
            "none";


          cross
            .style
            .display =
            "none";


          if (
            aVal[i] ==
            1
          ) {

            tick
              .style
              .display =
              "block";

          } else {

            cross
              .style
              .display =
              "block";
          }
        }

      } else {

        iconWrap
          .style
          .display =
          "none";


        tick
          .style
          .display =
          "none";


        cross
          .style
          .display =
          "none";
      }
    }
  },


  /* =========================================
     RESET
  ========================================= */

  reset: function() {

    var self =
      this;


    var ob =
      this.ob;


    var e =
      ob.activity_area;


    var selShape =
      ob.data_obj.shape;


    var elsQue =
      e.querySelectorAll(
        ".que"
      );


    /* =========================================
       Reset Answer Blanks
    ========================================= */

    $(e)
      .find(
        ".answer_blank"
      )
      .text(
        "____________"
      )
      .removeClass(
        "filled"
      );


    /* =========================================
       Reset Questions
    ========================================= */

    for (
      var i = 0;
      i < elsQue.length;
      i++
    ) {

      var fIndx =
        parseInt(
          elsQue[i]
            .dataset
            .qno
        );


      var fDataObj =
        ob.data_obj
          .questions[
            fIndx - 1
          ];


      self.showIcons(
        false
      );


      if (
        fDataObj.audio !=
        ""
      ) {

        if (
          fDataObj.audio !=
          "no"
        ) {

          if (
            elsQue[i]
              .querySelectorAll(
                ".audioIcon"
              )
              .length >
            0
          ) {

            if (
              fDataObj.audioenable ==
              "correct"
            ) {

              elsQue[i]
                .querySelector(
                  ".audioIcon"
                )
                .classList
                .add(
                  "disabled"
                );

            } else if (
              fDataObj.audioenable ==
              "default"
            ) {

              elsQue[i]
                .querySelector(
                  ".audioIcon"
                )
                .classList
                .remove(
                  "disabled"
                );
            }
          }
        }
      }


      var pickOptions =
        elsQue[i]
          .querySelectorAll(
            ".pick"
          );


      for (
        var a = 0;
        a <
        pickOptions.length;
        a++
      ) {

        if (
          selShape !=
          ""
        ) {

          if (
            selShape ==
            "roundrect"
          ) {

            pickOptions[a]
              .classList
              .add(
                "roundedCorners"
              );

          } else if (
            selShape ==
            "circle"
          ) {

            pickOptions[a]
              .classList
              .add(
                "noCorners"
              );

          } else if (
            selShape ==
            "rectangle"
          ) {

            pickOptions[a]
              .classList
              .add(
                "sharpCorners"
              );
          }
        }


        pickOptions[a]
          .classList
          .remove(
            "selected"
          );


        pickOptions[a]
          .classList
          .remove(
            "selectedDefault"
          );


        pickOptions[a]
          .classList
          .remove(
            "isCorrect"
          );


        pickOptions[a]
          .classList
          .remove(
            "isNotCorrect"
          );


        pickOptions[a]
          .style
          .cursor =
          "pointer";


        pickOptions[a]
          .style
          .backgroundColor =
          "";
      }
    }


    self.resetAllPicks(
      "all"
    );


    /* =========================================
       Disable Check
    ========================================= */

    var checkBtn =
      document
        .getElementsByClassName(
          "checkBtn"
        )[0];


    if (
      checkBtn
    ) {

      checkBtn
        .classList
        .add(
          "disabled"
        );
    }
  },


  /* =========================================
     INITIAL SETTINGS
  ========================================= */

  initialSettings: function() {

    this.reset();


    initialSettingsDone(
      1
    );
  }

};