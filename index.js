document.addEventListener('DOMContentLoaded', function () {
   window.mainObj = {

       init: function () {
         this.showRightMenu();
         this.showSubmenu();
       },

       showRightMenu: function () {
           var headerAvatar = document.querySelector(".main-header__avatar"),
               rightMenuAvatar = document.querySelector(".right-menu__header-avatar"),
               rightMenu = document.querySelector(".right-menu"),
               overlay = document.querySelector(".overlay");

           headerAvatar.onclick = function () {
               rightMenu.classList.remove("hideRightMenu");
               rightMenu.classList.add("showRightMenu");

               overlay.classList.remove("hideOverlay");
               overlay.classList.add("showOverlay");
           };

           rightMenuAvatar.onclick = function () {
               rightMenu.classList.remove("showRightMenu");
               rightMenu.classList.add("hideRightMenu");

               overlay.classList.remove("showOverlay");
               overlay.classList.add("hideOverlay");
           };

           overlay.onclick = function () {
               rightMenu.classList.remove("showRightMenu");
               rightMenu.classList.add("hideRightMenu");

               overlay.classList.remove("showOverlay");
               overlay.classList.add("hideOverlay");
           }
       },

       showSubmenu: function () {
           var listItems = document.querySelectorAll(".right-menu__list-item span");
           listItems.forEach(function (item) {
               item.onclick = function () {

                   this.classList.contains("active") ?
                       this.classList.remove("active") :
                       this.classList.add("active");

                   var sublistClasslist = this.nextElementSibling.classList;
                   sublistClasslist.contains("showSublist") ?
                       sublistClasslist.remove("showSublist") :
                       sublistClasslist.add("showSublist");
               }
           })
       }
   };

   mainObj.init();

});