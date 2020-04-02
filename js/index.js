document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("letter").onchange = function() {
        var grade = document.getElementById("letter").value;
        var gradelist = ['f', 'd', 'd+', 'c', 'c+', 'b', 'b+', 'a', 'a+', 'F', 'D', 'D+', 'C', 'C+', 'B', 'B+', 'A', 'A+'];
        if(gradelist.includes(grade)){
            alert("THX A LOT :)");
        }else{
            alert("Can you input a real grade?");
        }
    }
});
