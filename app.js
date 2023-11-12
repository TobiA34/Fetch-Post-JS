
  getData();

  async function getData(){
    //    const response= await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita%');
    const response= await fetch('https://swapi.dev/api/people/');

       console.log(response);
       const data= await response.json();
       console.log(data);
       length=data.results.length;
       console.log(data);
       var temp="";
       for(i=0;i<length;i++) {
                temp+=` <div class="card">
                 <h1 class="title">${data.results[i].name}</h1>
                 <h1 class="title">${data.results[i].height}</h1>
                 <h1 class="title">${data.results[i].mass}</h1>
                 <h1 class="title">${data.results[i].hair_color}</h1>
                 <h1 class="title">${data.results[i].skin_color}</h1>
                 <h1 class="title">${data.results[i].eye_color}</h1>
                </h1>
         </div>
        `
        }
      document.getElementById("cards").innerHTML=temp;
     }

        //   temp+="div";
        //   temp+="<td>"+data.results[i].name+"</td>";
        //   temp+="<td>"+data.results[i].height+"</td>";
        //   temp+="<td>"+data.results[i].mass+"</td>";
        //   temp+="<td>"+data.results[i].hair_color+"</td>";
        //   temp+="<td>"+data.results[i].skin_color+"</td>";
        //   temp+="<td>"+data.results[i].eye_color+"</td>";
        //   temp+="<td>"+data.results[i].birth_year+"</td>";
        //   temp+="<td>"+data.results[i].gender+"</td>";
        //   temp+="div";
