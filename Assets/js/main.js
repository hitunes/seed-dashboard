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
        // ///a clone of aside
        // var $asideClone = $aside.cloneNode(true);
        // // create a new aside
        // var $rightAside = document.createElement("ASIDE");
        // $rightAside.className = "aside__right";

        // $rightAside.innerHTML = $asideClone.innerHTML;

        // $body.appendChild($rightAside);

        $toggler.addEventListener("click", function(e) {
          var bodyClick = document.createElement("Div");
          bodyClick.className = "body__overlay";
          if (msc === 0) {
            bodyClick.addEventListener("click", function(e) {
              $html.classList.toggle("nav-open");
              bodyClick.remove();
            });
            $body.appendChild(bodyClick);
            $html.classList.toggle("nav-open");
            msc = 1;
          } else {
            $html.classList.remove("nav-open");
            bodyClick.remove();
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
