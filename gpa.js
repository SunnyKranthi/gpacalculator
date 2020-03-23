
       
      
      function subjects()
      {
       var x= document.getElementById("nos").value;
      
      if(isNaN(x))
           alert("enter valid numerical value");
     else
        tab(x);
      }
      
      function tab(x)
     {
         var z="<table border='1' cellspacing='0' style='background-color: white;'>";
           z+= " <tr> <th>Sno</th> <th>Credits</th> <th>Grade</th></tr>";
            for(i=1;i<=x;i++)
          {
              z+=" <tr> <td>"+i+"</td> <td><input type='text' id='c"+i+"'/></td><td><input type='text' id ='g"+i+"'/></td> </tr>";
          }
          z+=" </table><br>"
          var button = document.getElementById("calculate");
          button.style.visibility = "visible";
         document.getElementById("tab").innerHTML =z + "<br>";
     }
     
     function calculate()
     {
         var x=document.getElementById("nos").value;
         var c=0;
         var g=0,f=0;
         var k;
         var sum=0,z=0;
         var grades =["O","A+","A","B+","B","C","F","Ab","10","9","8","7","6","5","0","0"];
         var gradeValues=["10","9","8","7","6","5","0","0","10","9","8","7","6","5","0","0"];
         for(i=1;i<=x;i++)
         {
         c=parseFloat(document.getElementById('c'+i).value);
         f=document.getElementById("g"+i).value;
         
         k=grades.indexOf(f.toString().toUpperCase());
         g=gradeValues[k];
         if(isNaN(c)||isNaN(g)){
         document.getElementById("tab1").innerHTML= '<h2 style="'+"color: red; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"+ '"'+ ">"+"ENTER VALID VALUES</h2>"; 
         return;
         }
         sum +=c;
         z+=(c*g);   
         }
         document.getElementById("tab1").innerHTML= '<h2 style="'+"color: teal; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"+ '"'+ ">"+"<b>CGPA IS "+ parseFloat(z/sum) +"</b></h2>";
     }