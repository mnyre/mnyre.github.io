$(document).ready(function(){
  $.getJSON("http://hivelab.org/static/exam1.json", function(students){
    var table_student = $('#hw2_table');

    $.each(students, function(item, student){
      console.log(student.Name);

      table_student.append("<tr><td>" + student.Name +"</td><td>" + student.GPA +"</td><td>" + student.GRE_V +"</td><td>" +  student.GRE_Q + "</td><td>" + student.Essay + "</td><td>" + student.Recom + "</td></tr>");
    //console.log(table_row);
    });
  });
});
