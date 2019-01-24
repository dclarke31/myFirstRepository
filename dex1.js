var evenNumbers = 0;
for (var i = 0;i < 101; i++) {
  if (i % 2 == 0) {
    evenNumbers += i;
  }
}
setTimeout(function(){
  document.getElementById('paragraph').innerHTML = evenNumbers
},1000)
setTimeout(function(){
  $("#paragraph").text("this is different")
},3000)
