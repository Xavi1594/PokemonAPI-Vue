<script setup>
function search() {
    let input = document.querySelector("input").value.toLowerCase()
    let list = document.querySelectorAll("ul > li")
    let noItemsText = document.querySelector(".noItemsText")
    let displayCounter = 0

    // console.log(((list[0].innerHTML).toLowerCase()).includes("pyt", 0))
    list.forEach((lang) => {
        if ((lang.innerHTML.toLowerCase()).includes(input, 0) === false){
            lang.style.display = "none";
        } else {
            lang.style.display = "list-item";
        }

        if (lang.style.display === "none"){
           displayCounter++;
        }
    });

    if (displayCounter === list.length){
        list.innerHTML = "No items to display";
        noItemsText.style.display = "initial"
    } else {
        noItemsText.style.display = "none"
    }
}
const ul = document.querySelector("pokemon")
const url = 'https://randomuser.me/api/?results=10';

</script>

<template>
 


    <!-- <h1>Search Feature using JS</h1> -->

    <div class="content">
        <input type="text" onkeyup="search()" placeholder="Search  ..." autofocus />
        <h1>pokemon</h1>
        <ul id="pokemon"></ul>







            <!-- <ul>
            <li class="languages">Python</li>
            <li class="languages">C++</li>
            <li class="languages">Java</li>
            <li class="languages">C</li>
            <li class="languages">JavaScript</li>
            <li class="languages">PHP</li>
            <li class="languages">Perl</li>
            <li class="languages">Ruby</li>
            <li class="languages">Go</li>
            <li class="languages">CSS</li>
        </ul>
        <p class="noItemsText">No items to display</p> -->
    </div>
   
   

   
  
</template>

<style scoped lang="scss">


body {
    background: #eee;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1.1rem;
    text-align: center;
}

h1 {
    text-shadow: 
        2px 3px 4px #456,
        3px 4px 5px #654;
}

input {
    /* height: 1.5rem; */
    max-width: 300px;
    width: fit-content;
    margin: 1rem auto;
    outline: none;
    padding: 10px;
    font-size: 1.1rem;
}

.content {
    /* border: 3px solid black; */
    max-width: 500px;
    margin: auto;
    margin-bottom: 50px;
}


.languages {
    background-color: #f5deb3;
    margin: 2px auto;
    padding: 10px;
}

.languages:hover {
    background-color: #f5deb3aa;
}

.noItemsText {
    display: none;
}

</style>
//  -->
// <!-- $(document).ready(function(){
  
//     //Cuando se clickea en el boton de busqueda se corre el siguiente codigo
    
//     $('#buscar').click(function(){
//       //Se obtienen la data del input
//       var busqueda = $('#input').val();
//       //Se utiliza el url del de API de wikipedia para obtener los datos
//       var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + busqueda + "&format=json&callback=?";
//       console.log(url);
      
//       //Animando los elementos
//       //$('body').css("margin", "0");
      
      
      
//       //Se hace un llamado ajax dentro del evento de click
//       $.ajax({
//         type: "GET",
//         url: url,
//         contentType: "application/json; charset=utf-8",
//         async: false,
//         dataType: "json",
//         success: function(data, textStatus, jqXHR){
//             console.log(data);
//             $('.output').html('');
//             for(var i=0; i<data[1].length; i++){
//               $('.output').prepend("<div><div class='btn-default articulos'><a href="+data[3][i]+"><h2 style='color:black; margin-top:5px;font-weight:600;'>" + data[1][i]+ "</h2>" + "<p style='color:#3D403F;'>" + data[2][i] + "</p></a></div></div>");
//             }
//             $('#input').val('');
//         },
//         error: function(mensajeError){
//           alert('Error');
//         }
//       });
    
//     }); 
//     $("#input").keypress(function(e){
//         if(e.which==13){
//           $("#buscar").click();
//         }
//       });
    
//   }); -->