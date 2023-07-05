window.onscroll = function() {
   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      document.getElementById("header").style.boxShadow = "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px";
   } else {
      document.getElementById("header").style.boxShadow = "0 0 0 0 rgba(0,0,0,0)";
   };
};