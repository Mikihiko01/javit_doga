$(function () {
    const termekek =[];

    let faljnev = "termekek.json"
    adatbeolvas(faljnev,termekek,termekKiir);


    function adatbeolvas(faljnev, tomb,myCallbanck) {
        $.ajax({
                url: faljnev,
                success: function (result) { 
                  //  console.log(result);  
                    result.forEach(element => {
                       // console.log(element); 
                        tomb.push(element); 
                    });
                    //console.log(tomb);
                    myCallbanck(tomb);
 
                    
                }
                
            }
        );
    }

    

    function termekKiir(tomb) {
         $("article").append("<div>");
         
      
       let txt= "<div>";
       
        
        tomb.forEach((elem)=>{
            txt+= "<div>";
        for (const key in elem) {
            txt+="<span>"+key+"</span>";
            txt+="<h3>"+elem[key]+"</h3>"; 
            for (let index = 0; index < tomb; index++) {
                txt+='<img src="kepek/kep'+index +1 +'.jpg" alt="">';
                
            }          
     
        } 
                
         txt+= "</div>";         
        });           
        $("article div").html(txt);
 console.log(tomb);
        
    }
   
})