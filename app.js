// Поиск по справочнику: прячет строки, где нет искомого, и пустые разделы.
(function () {
  var q = document.getElementById("q");
  if (!q) return;
  var rows = Array.prototype.slice.call(document.querySelectorAll(".row"));
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section"));
  var mech = document.getElementById("mech");
  function apply() {
    var s = q.value.trim().toLowerCase().replace(/ё/g, "е");
    rows.forEach(function (r) {
      var hay = (r.getAttribute("data-s") || "").replace(/ё/g, "е");
      r.classList.toggle("hidden", s !== "" && hay.indexOf(s) < 0);
    });
    sections.forEach(function (sec) {
      if (sec === mech) { sec.classList.toggle("hidden", s !== ""); return; }
      var any = sec.querySelector(".row:not(.hidden)");
      sec.classList.toggle("hidden", !any);
    });
  }
  q.addEventListener("input", apply);
})();
