function log(a) {
  console.log(a);
}

function search(s) {
  var reg = new RegExp((s || "").replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gim");
  $("li").each(function (index, elt) {

    var pubtype = "paper";
    var journal = $(elt).find(".journal").text();
    if (journal.match(/arxiv/gi) || journal.match(/preprint/gi)) {pubtype="preprint";}
    if (journal.match(/thesis/gi)) {pubtype="thesis";}
    if ($(elt).find(".bibdata").text().match(/inproceedings/gi)) {pubtype="proceedings";}

    var should_accept = false;
    if ($('#viewall').is(':checked')) {should_accept=true;}
    if ($('#viewpapers').is(':checked') && pubtype=="paper") {should_accept=true;}
    if ($('#viewpreprints').is(':checked') && pubtype=="preprint") {should_accept=true;}
    if ($('#viewtheses').is(':checked') && pubtype=="thesis") {should_accept=true;}
    if ($('#viewproceedings').is(':checked') && pubtype=="proceedings") {should_accept=true;}

    var find = function (selector) {
      if ($("#chk" + selector).is(":checked") || $("#chkall").is(":checked")) {
        return $(elt).find("." + selector).text()
      } else {
        return ""
      }
    }

    var h = "" + find("paperTitle") + find("authors") + find("abstract") + find("keywords") + find("journal")
    if (h.match(reg) && should_accept==true) {
      $(elt).show()
    }
    else {
      $(elt).hide()
    }
  })
}

function updateSearch() {
  // Show all years
  $("h2").show()
  log($("#txtSearch").val())
  search($("#txtSearch").val())
  // Hide all unused years
  var viewcount = 0;
  $("h2").filter(function (i, e) {
    return $(e).next().get(0).nodeName == "UL"
  }).filter(function (i, e) {
    var l = $(e).next().children().filter(function (j, f) {
      return $(f).css("display") !== "none"
    }).length
    viewcount += l;
    return l == 0;
  }).hide();
  $('#viewcount').html("Showing " + viewcount.toString() + " items")
}

function forceSearch(s) {
  $("#txtSearch").val(s);
  updateSearch();
}

function forceSearchKW(s) {
  $('#chkkeywords').prop('checked',true);
  deselectAllChecks('keywords');
  forceSearch(s);
}

function deselectAllChecks(exception) {
  ["paperTitle","authors","abstract","keywords","journal","all"].forEach(
    function(s,i) {
      if (s!=exception) {$('#chk'+s).prop('checked',false)}
    });
}

function deselectAllViews(exception) {
  ["papers","preprints","proceedings","theses","all"].forEach(
    function(s,i) {
      if (s!=exception) {$('#view'+s).prop('checked',false)}
    });
}

$(function () { // Code to be executed once all the html is ready
  $("input[type='checkbox']").on("change", function () {
    log("chk")
    updateSearch()
  });
  // Clear the search box on page load
  $("#txtSearch").val("");
  var s = window.location.search.substr(1);
  if (s != null && s != "" && s[0] == 'q') {
    forceSearch(decodeURI(s).split('=')[1])
  }
  else {
    updateSearch();
  }
}
)