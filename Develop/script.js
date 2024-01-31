$(function () {

  $(".saveBtn").on("click", function(){
    localStorage.setItem($(this).parent("div").attr("id"), $(this).siblings("textarea").val())
  })

  let currentHour = dayjs().format("HH")
  let rows = document.querySelectorAll(".row")
for (let i = 0; i < rows.length; i++) {
 if (rows[i].id.substring(5)==currentHour){
  rows[i].classList.add("present")
 }
 else if (rows[i].id.substring(5)<currentHour){
  rows[i].classList.add("past")
 }
  else{
    rows[i].classList.add("future")
  }
}

  var textareas = $(".description")
  for (let i = 0; i < textareas.length; i++) {
    textareas[i].value=localStorage.getItem(textareas[i].parentElement.id)
  }

  $("#currentDay").text(dayjs().format("M/DD/YYYY"))
});
