window.onscroll = function() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("header").style.boxShadow = "1px 3px 8px 1px rgba(0,0,0,0.1)";
   } else {
      document.getElementById("header").style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
   };
};