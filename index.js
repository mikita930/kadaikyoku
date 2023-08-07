document.addEventListener("DOMContentLoaded", function() {
    var selectElement = document.getElementById("yearSelect");
    var resultElement = document.getElementById("result1");
  
    for (var year = 2000; year <= 2023; year++) {
      var optionElement = document.createElement("option");
      optionElement.value = year;
      optionElement.textContent = year + "年";
      selectElement.appendChild(optionElement);
    }
  
    selectElement.addEventListener("change", function() {
      var selectedYear = selectElement.value;
  
      // CSVファイル読み込み
      var xhr = new XMLHttpRequest();
      xhr.open("GET", "database.csv", true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var csvData = xhr.responseText;
          var lines = csvData.split("\n");
          var output = "";
  
          for (var i = 0; i < lines.length; i++) {
            var line = lines[i].split(",");
            var year = line[0];
            var texts = line.slice(1);
  
            if (year.trim() === selectedYear) {
              output = texts.join("<br>");
              break;
            }
          }
  
          resultElement.innerHTML = output;
        }
      };
      xhr.send();
    });
  });
  
// 画像要素を取得
var onpu = document.getElementById("onpu");

// 画像がクリックされた時の処理
onpu.addEventListener("click", function() {
  // YouTubeのサイトへリンクする
  window.location.href = "http://ajba.or.jp/assignment.html";
});
