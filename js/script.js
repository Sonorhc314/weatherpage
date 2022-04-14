function updateh1(newh1)
            {
                var h1 = document.querySelector("h1");
                h1.innerHTML=newh1;
            }
            
            function temp_def(temp)
            {
                return temp>=0;
            }
            
            function h1change()
            {
                let city = prompt("What city are you from?: ");    
                var temp = prompt(`Temperature in ${city}: `);                
                if(temp_def(temp))
                {
                    updateh1(`🌞<br>Currently ${temp}°C in ${city}`);
                }else
                {
                    updateh1(`🥶<br>Currently ${temp}°C in ${city}`);
                }
            }
            
            var apply=document.querySelector("button");
            
            apply.addEventListener("click", h1change);