
//two arrays for saving the titles and descriptions of the c

var theTitle = new Array("The Cause 1", "The Cause 2")
var theDescription = new Array ("The Descrption of the first cause", "The Description of a second cause")


var target = $("table tbody")
var litleX = "<tr><td> <a href='#' class='remove' style='text-decoration: none;' "
//var number = "<td><input type='number' " + formula + " value='0'></td>" 

//var votebtn=" <td><input type='button'" + formula  + "value='Vote'></td></tr>"

var counter =0

//document.getElementById("theTable").innerHTML = myJSON; 

function printTheCauses() {

    for (i = 0; i < theTitle.length; i++) {       

        formula= "id='" + i + "'" // enables us to get a unique id for each html element 

        formulaNumber= "id=number" + i + "" // enables us to get a unique id for each html element 


        var number = "<td><input type='text' " + formulaNumber + " value='0'></td>" 

        var votebtn=" <td><input type='button' class='vote'" + formula  + "value='Vote'></td></tr>"

                                                          
        target.append( litleX + formula + ">x</a>&nbsp;&nbsp;" + theTitle[i] + 
        "</td><td>" + theDescription[i] + number + votebtn)    
          
    }

    $(".remove").click(function () {

        //checks the position of the element in the array thanks to the dynamic nature of the "id" and removes it with splice
        //empties the table and print the remaining array

        var toRemove = $(this).attr("id")
        theTitle.splice(toRemove, 1)
        theDescription.splice(toRemove, 1)
        target.empty()
        printTheCauses()
    })

    
    
    $ (".vote").click(function(){    

        var theActualElement= $(this).attr("id")
    
        var counter=$("#number"+ theActualElement).val()    

        counter++
        
       $("#number"+ theActualElement).val(counter)    
                           
                 
     })
     
}
printTheCauses()

$("#AddCause").click(function () {    
    
    //Checks if there are blank spaces 

    if (($("#Title").val()=="") || ($("#Description").val()=="")) {
        alert("The spaces cannot be blank")       
        
    // Gets the table empty, adds on the cause in the last position and prints again
                         
    }else{
    target.empty()   
    theTitle.push($("#Title").val())
    theDescription.push($("#Description").val())
    printTheCauses()      

    }                               
                              
   })
