//Object =========================

var obj = {
    name: 'Al Amin',
    Unit: {
        UName: 'APBML',
        Address: 'Manikgonj',

        JobStation: {
            JName: 'Corporate',
            JID: 5
        },
        
        sound: function (a) {
           console.log(a + ': ' + this.JobStation.JName);            
        }        
    }    
}
obj.Unit.sound('Job Station Name')

//Use Call Back Fuction Multification ===============================
var result = [];

function multiple(n, b){
    
    for(j = 1; j<=10; j++){       
        
        for(i=1; i<=n; i++){        
                
            result.push(j + ' * ' + i + ' = ' + j*i);
        }   
    } 
    b(result);
}

multiple(10, function(element){
    console.log(element);  
});