function remove(){
  try
  {
    document.getElementById('adblockplus').remove();
    document.getElementById('JasperRoberts').remove();
    document.getElementById('fan-exit').remove();
    document.getElementById('fanback').remove();
  }catch(err)
    {
        //Element not found
    }
    console.log("Anti-anti-ADBP element removed");
    setTimeout(function(){remove();},2000);
  }
  remove();
