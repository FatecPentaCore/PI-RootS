$(function () {
  var INDEX = 0;
  $("#chat-submit").click(function (e) {
    e.preventDefault();
    var msg = $("#chat-input").val();
    if (msg.trim() == "") {
      return false;
    }
    generate_message(msg, "self");
    var buttons = [
      {
        name: "Existing User",
        value: "existing"
      },
      {
        name: "New User",
        value: "new"
      }
    ];
    setTimeout(function () {
      generate_message(msg, "user");
    }, 1000);
  });

  function generate_message(msg, type) {
    INDEX++;
    var str = "";
    str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + '">';
    str += '          <span class="msg-avatar">';
    str +=
      '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
    str += "          </span>";
    str += '          <div class="cm-msg-text">';
    str += msg;
    str += "          </div>";
    str += "        </div>";
    $(".chat-logs").append(str);
    $("#cm-msg-" + INDEX)
      .hide()
      .fadeIn(300);
    if (type == "self") {
      $("#chat-input").val("");
    }
    $(".chat-logs")
      .stop()
      .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
  }

  function generate_button_message(msg, buttons) {
    /* Buttons should be object array 
      [
        {
          name: 'Existing User',
          value: 'existing'
        },
        {
          name: 'New User',
          value: 'new'
        }
      ]
    */
    INDEX++;
    var btn_obj = buttons
      .map(function (button) {
        return (
          '              <li class="button"><a href="javascript:;" class="btn btn-primary chat-btn" chat-value="' +
          button.value +
          '">' +
          button.name +
          "</a></li>"
        );
      })
      .join("");
    var str = "";
    str += "<div id='cm-msg-" + INDEX + '\' class="chat-msg user">';
    str += '          <span class="msg-avatar">';
    str +=
      '            <img src="https://image.crisp.im/avatar/operator/196af8cc-f6ad-4ef7-afd1-c45d5231387c/240/?1483361727745">';
    str += "          </span>";
    str += '          <div class="cm-msg-text">';
    str += msg;
    str += "          </div>";
    str += '          <div class="cm-msg-button">';
    str += "            <ul>";
    str += btn_obj;
    str += "            </ul>";
    str += "          </div>";
    str += "        </div>";
    $(".chat-logs").append(str);
    $("#cm-msg-" + INDEX)
      .hide()
      .fadeIn(300);
    $(".chat-logs")
      .stop()
      .animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    $("#chat-input").attr("disabled", true);
  }

  $(document).delegate(".chat-btn", "click", function () {
    var value = $(this).attr("chat-value");
    var name = $(this).html();
    $("#chat-input").attr("disabled", false);
    generate_message(name, "self");
  });

  $("#chat-circle").click(function () {
    $("#chat-circle").toggle("scale");
    $(".chat-box").toggle("scale");
  });

  $(".chat-box-toggle").click(function () {
    $("#chat-circle").toggle("scale");
    $(".chat-box").toggle("scale");
  });
});

let crossWords = {
  0: ["Roots-", "Origin", "Art", "--Here"],
  1: ["", "See", "Others", "--Root"],
  2: ["Create", "-Yours", "Vision", "--Here"],
  3: ["Became", "---", "Roots", ""]
};

const container = document.getElementById("wordGrid");

Object.values(crossWords).forEach((group) => {
  const groupDiv = document.createElement("div");
  groupDiv.classList.add("word-group");
  group.forEach((word) => {
    const paddedWord = word.padEnd(6, " ");
    paddedWord.split("").forEach((char) => {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = char === "-" ? " " : char;
      groupDiv.appendChild(cell);
    });
  });

  container.appendChild(groupDiv);
});


const scrollBox = document.getElementById("scrollBox");

function autoScroll() {
  scrollBox.scrollLeft += 3; // Ajuste a velocidade aumentando o valor

  if (scrollBox.scrollLeft >= scrollBox.scrollWidth - scrollBox.clientWidth) {
    scrollBox.scrollLeft = -1; // Reseta ao fim para loop contínuo
  }
}

setInterval(autoScroll, 20); // Controla a velocidade do scroll