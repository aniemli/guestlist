var names_of_people = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
   names_of_people.push(GuestName);
    console.log(names_of_people);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML = names_of_people;
   }



function show_it()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("display_name").style.display="block";
document.getElementById("sort_button").style.display="inline";
	}

var j =  document.getElementById("display_name").sort;
console.log(j);	
function sorting_y()
	{
    document.getElementById("sortet").innerHTML = j;
		}