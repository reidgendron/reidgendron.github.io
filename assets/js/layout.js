window.onscroll = function() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("header").style.boxShadow = "0 .125rem .25rem 0 rgba(0,0,0,0.1)";
   } else {
      document.getElementById("header").style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
   };
};