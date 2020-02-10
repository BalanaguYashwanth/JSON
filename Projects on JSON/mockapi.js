var xmlHttp = xmlHttprequestobject();

function xmlHttprequestobject()
{
    if(window.XMLHttpRequest)
    {
    var xmlHttp = new XMLHttpRequest();
    }
    else
    {
        alert("can't connect");
    }
    return xmlHttp;
}

function process()
{
    xmlHttp = new XMLHttpRequest();    
    xmlHttp.onreadystatechange= function(){
        if(xmlHttp.readyState==4 && xmlHttp.status==200 )
        {
            Text = JSON.parse(xmlHttp.responseText);
            //Text.setRequestHeader("Content-Type","application/json");
            document.getElementById("mydiv").innerHTML=Text.name;
            //  for(var obj in Text)
            //  {
            //      document.getElementById("mydiv").innerHTML += Text[obj]+"<br/>"+Text[obj];
                 
            //  }
        }
        
    }

    xmlHttp.open("Delete","https://5e2ac93c4fdc030014e20c2a.mockapi.io/api/v1/get/2",true);
    //xmlHttp.  send("id:5","name:yash");
    xmlHttp.send();
    document.getElementById("mydiv").innerHTML="processing...."
}