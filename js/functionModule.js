var app = angular.module("nightlightApp")

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

.controller("menuCtrl", function ($scope, $log, $element) {

    $scope.showLinkList = (window.innerWidth > 992) ? true : false;

    $scope.hideLinkList = function () {
        return (window.innerWidth < 992) ? false : true;
    }
                
})


.controller("functionCtrl", function ($scope, $log, $element) {


    var pathParts = window.location.pathname.split("/");


    // check if special picture is chosen
    var url = window.location.href;
    if (url.indexOf("?") > -1) { // gallery or single picture
          var picturePath = url.split("?")[1].split("/");
          if (picturePath.length > 1) {
                // single picture
                var picName = picturePath[1];
                angular.forEach($scope.pictureList, function(pic) {
                      if (pic.name == picName) {
                            pic.showBigPic = true;
                      }
                })
          }
    }


    $scope.goLeft = true;
    $scope.goRight = true;

    $scope.noSave = function () {
          window.alert("Copyright by NightLights")
    }

    $scope.showPic = function(picture) {
          if (picture.position == 1) {
              $scope.goLeft = false;
          }
          else {
              $scope.goLeft = true;
              $scope.goRight = true;
          }
          if (picture.position == $scope.pictureList.length) {
              $scope.goRight = false;
          }
          $scope.picFolder = picture.folder;
          $scope.picName = picture.name;
          picture.showBigPic = true;
          window.location.href = window.location.href.split("?")[0] + "?" + picture.folder + "/" + picture.name;
    }

    $scope.hidePic = function(picture) {
          picture.showBigPic = false;
          window.location.href = window.location.href.split("?")[0];
    }

    $scope.showNextPic = function(number, picture) {
          var thisPic = $scope.pictureList.filter(function(pic) {return (pic.showBigPic == true)})[0]
          index = $scope.pictureList.indexOf(thisPic);
          if ((index == 1 && number == -1) || (index == 0 && number == -1)) {
              $scope.goLeft = false;
          }
          else if (index == $scope.pictureList.length - 2 && number == 1 || index == $scope.pictureList.length - 1 && number == 1) {
              $scope.goRight = false;
          }
          else {
              $scope.goLeft = true;
              $scope.goRight = true;
          }
          if (!(number == -1 && index == 0) && !(number == 1 && index == $scope.pictureList.length - 1)) {
              $scope.pictureList[index].showBigPic = false;
              var nextPicture = $scope.pictureList[index + number];
              nextPicture.showBigPic = true;
              window.location.href = window.location.href.split("?")[0] + "?" + nextPicture.folder + "/" + nextPicture.name
          }
    }

    window.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        alert("Copyright by Xenia Bogomolec");
        return false;
    }, false);

  

    window.addEventListener("keyup", function(e){
        var openPics = $scope.pictureList.filter(function(pic) {return (pic.showBigPic == true)})
        if (openPics.length > 0) {
          openPic = openPics[0];
          if(e.keyCode == 27) {
              $scope.hidePic(openPic);
          } 
          if(e.keyCode == 39) {
              $scope.showNextPic(1, "");
          } 
          if(e.keyCode == 37) {
              $scope.showNextPic(-1, "");
          } 
          $scope.$apply();
        }
    });
                
})
;










