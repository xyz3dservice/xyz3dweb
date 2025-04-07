/*載入驗證外掛*/
//document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.js"></script>');
//document.body.appendChild('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.js"></script>');
//document.insertBefore('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.js"></script>');


Head=document.getElementsByTagName("script")[0];
File=document.createElement("script");
File.async=true;
File.src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.js";
Head.parentNode.insertBefore(File,Head);