document.addEventListener("DOMContentLoaded", function () {
    // Ensure the alert is hidden when the page loads
    document.getElementById("customAlert").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

function cal(){
	var sub1=document.getElementById("s1").value;
	var sub2=document.getElementById("s2").value;
	var sub3=document.getElementById("s3").value;
	
	var tot=(sub1*3)+(sub2*3)+(sub3*6);
	var avg=tot/12;
	avg = avg.toFixed(3);
	document.getElementById("alertMessage").innerHTML = "GRADE POINTS AVERAGE (GPA) : " + avg + "<br><br> PERCENTAGE : " + (avg * 9.5).toFixed(0)+"%";
            document.getElementById("customAlert").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        }

        function closeAlert() {
            document.getElementById("customAlert").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
	