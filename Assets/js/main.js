var app = {
  asideController: function() {
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    var $aside = document.getElementsByClassName("aside__left")[0];
    var $toggler = document.getElementsByClassName("navbar-toggler")[0];
    var initialised = false;
    function watcher() {
      var msc = 0;
      if (!initialised) {
        var $asideClone = $aside.cloneNode(true);
        // create a new aside
        var $newAside = document.createElement("ASIDE");
        $newAside.className = "aside__new";

        $newAside.innerHTML = $asideClone.innerHTML;

        $body.appendChild($newAside);
        $toggler.addEventListener("click", function(e) {
          var bodyClick = document.createElement("Div");
          if (msc === 0) {
            bodyClick.addEventListener("click", function(e) {
              $html.classList.toggle("nav-open");
            });
            $html.classList.toggle("nav-open");
            msc = 1;
          } else {
            $html.classList.remove("nav-open");
            msc = 0;
          }
        });
        initialised = true;
      }
    }
    if (window.innerWidth <= 991) {
      watcher();
    }

    window.addEventListener("resize", function(e) {
      if (window.innerWidth <= 991) {
        watcher();
      }
    });
  }
};
