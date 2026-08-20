//  ****************************************** //
//  FillIn Open Answer - Version no: 1
//  No Check Answer / No Validation
//  ****************************************** //

window.FillIn = function (obj, dataObj) {

    ob = obj[0].getElementsByClassName("options");

    console.log("FillIn Open Answer > ", $(".activity_area"));

    this.settings = {

        "activity_area":
            ob[0],

        "has_audio":
            (
                obj[0].dataset.audio != undefined &&
                obj[0].dataset.audio != null
            )
                ? obj[0].dataset.audio
                : "no",

        "data_obj":
            dataObj,

        "parent_holder":
            obj[0]
    };

    this.init(this.settings);
};


FillIn.prototype = {

    // =========================================================
    // INIT
    // =========================================================

    init: function (ob) {

        this.ob = ob;

        this.listen(ob);
    },


    // =========================================================
    // LISTEN
    // =========================================================

    listen: function (ob) {

        var e = ob.activity_area;

        if (!e) {
            console.log("FillIn: activity_area not found");
            return;
        }

        var inputs = e.querySelectorAll("input");

        for (var i = 0; i < inputs.length; i++) {

            inputs[i].addEventListener("input", function () {

                // Always keep entered text black
                $(this).css("color", "black");

                var v = this.value;

                // Number-only support if needed
                if ($(this).data("type") == "number") {

                    if ($.isNumeric(v) === false) {

                        this.value =
                            this.value.replace(/\D/g, "");
                    }
                }


                // Enable reset button once user starts typing
                var resetBtn =
                    document.getElementsByClassName("resetBtn")[0];

                if (resetBtn) {
                    resetBtn.classList.remove("disabled");
                }

            });

        }
    },


    // =========================================================
    // VALIDATE
    // =========================================================
    //
    // This activity is OPEN ANSWER.
    // There is intentionally no answer checking.
    //
    // If the framework calls validate(), nothing happens.
    // =========================================================

    validate: function () {

        console.log(
            "Open Answer FillIn: validation is disabled."
        );

        return true;
    },


    // =========================================================
    // RESET
    // =========================================================

    reset: function () {

        var ob = this.ob;

        var e = ob.activity_area;

        if (!e) {
            return;
        }

        var inputs =
            e.querySelectorAll("input");

        for (var i = 0; i < inputs.length; i++) {

            // Do not clear readonly / disabled inputs
            if (
                inputs[i].getAttribute("disabled") == null &&
                inputs[i].getAttribute("readonly") == null
            ) {

                inputs[i].value = "";

                inputs[i].style.color = "black";
            }
        }


        // Disable reset after clearing
        var resetBtn =
            document.getElementsByClassName("resetBtn")[0];

        if (resetBtn) {
            resetBtn.classList.add("disabled");
        }
    },


    // =========================================================
    // INITIAL SETTINGS
    // =========================================================

    initialSettings: function () {

        this.reset();

        initialSettingsDone(1);
    }

};