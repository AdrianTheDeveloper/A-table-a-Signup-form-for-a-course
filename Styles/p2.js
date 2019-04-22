
function ValidFunc(){

		var Ccode = document.forms["Course Creation Form"]["Ccode"].value;
		var Ctitle = document.forms["Course Creation Form"]["Ctitle"].value;
		var Cdisc = document.forms["Course Creation Form"]["Cdisc"].value;
		var level = document.forms["Course Creation Form"]["level"].value;
		var Credits = document.forms["Course Creation Form"]["Credits"].value;
		var sem = document.forms["Course Creation Form"]["sem"].value;

			if(Ccode==null||Ccode=='') {
				alert("All Fields are required");
				
			}
			else if (Credits<8){
				 alert("Credits Values Must be from 0-8");
				 return false
				}
			else{
					return true
			}
			  if(sem<0&&sem>3) {
				alert("There are only 3 semesters BIG EDIAT")
			}
			 

}

function isInputNumber(evt){
	var ch= String.fromCharCode(evt.which);
		if (!(/[0-9]/.test(ch))) {
			evt.preventDefault();
		}
}		

function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
		
function onlyAlphabets(e, t) {
            try {
                if (window.event) {
                    var charCode = window.event.keyCode;
                }
                else if (e) {
                    var charCode = e.which;
                }
                else { return true; }

                if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
                    return true;
                else
                    return false;
            }
            catch (err) {
                alert(err.Description);
            }
        }

