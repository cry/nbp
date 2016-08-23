window.onload = function() {
    NBP.init('mostcommon_100000');

    var status_msg = document.getElementById("status_msg");

    document.getElementById("demo").addEventListener("keyup", function(evt) {
        var pwd = document.getElementById("demo").value;

        if (NBP.isCommonPassword(pwd)) {
            status_msg.innerHTML = "common";
            status_msg.style.color = "red";
        } else {
            status_msg.innerHTML = "not common";
            status_msg.style.color = "#595959";
        }
    });
}