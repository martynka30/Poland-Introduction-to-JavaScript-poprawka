   function zegar (){
                czas = new Date()
                godz = czas.getHours()
                min =czas. getMinutes()
                sek = czas.getSeconds()
                
                if (min<10)
                  {
                    min = "0" +  min
                  }
            if (sek<10)
                {
                 sek = "0" +  sek   
                }
                document.a.b.value= godz + " : " + min + " : "  + sek
                setTimeout("zegar()", 900)
            }   