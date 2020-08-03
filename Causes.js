
//two arrays for saving the titles and descriptions of the c

var theTitle = new Array("The Cause 1", "The Cause 2")
var theDescription = new Array ("The Descrption of the first cause", "The Description of a second cause")


var target = $("table tbody")
var litleX = "<tr><td> <a href='#' class='remove' style='text-decoration: none;' "  // this X will enable us to delete causes by clicking it

var counter =0 // This is the counter for the causes which starts in 0



function printTheCauses() {

    for (i = 0; i < theTitle.length; i++) {       

        formula= "id='" + i + "'" // enables us to get a unique id for each html element. In this case the vote button

        formulaNumber= "id=number" + i + "" // enables us to get a unique id for each html element. This is for number of votes


        var number = "<td><input type='text' " + formulaNumber + " value='0'></td>" // the number of votes

        var votebtn=" <td><input type='button' class='vote'" + formula  + "value='Vote'></td></tr>" // the vote button

        // We append the causes that we have in the 2 arrays. Since we are appending it into the html table we need a lot of html code.
        // I've made the above variables hoping to get it simpler
                                                          
        target.append( litleX + formula + ">x</a>&nbsp;&nbsp;" + theTitle[i] + 
        "</td><td>" + theDescription[i] + number + votebtn)                
        
    }   


    $(".remove").click(function () {

        // Works thanks to the littleX we append to each cause. Checks the position of the element in the array thanks to the dynamic nature of the "id" and removes it with splice
        // empties the table and print the remaining array. It's deactivated in this view because is the one for users

        alert("You need special permissions to remove a Cause")
    })

    
    $(".vote").click(function(){    

        // The vote button. Since the id of the button and the input space have the same id, we can use it to target which counter to 
        // increment. We start in 0 with the globar variable counter, and we add 1 for each vote.

        var theActualElement= $(this).attr("id")
    
        var counter=$("#number"+ theActualElement).val()    

        counter++
        
       $("#number"+ theActualElement).val(counter)    
                           
                 
     })

    $("#Json").click(function(){

        var myJson=JSON.stringify(theTitle+theDescription+counter)
        alert(""+ myJson)
    }) 


     
}// We first append the causes to their arrays and then print them

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
