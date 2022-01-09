var app = angular.module("nightlightApp", [])

.controller("indexCtrl", function ($scope, $log, $element) {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// STARTSEITENBILDER ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      

      $scope.pictureList = [
            // Bilder Ordner "studio" 
            { name: "DSC_0390.jpg", folder: "Scans", position: 1},
            { name: "DSC_0391.jpg", folder: "Scans", position: 2},
            { name: "DSC_0392.jpg", folder: "Scans", position: 3},
            { name: "whale_4.JPG", folder: "Scans", position: 4},
            { name: "ScanX9.jpg", folder: "Scans", position: 5},
            { name: "Jerry.jpg", folder: "Scans", position: 6},
            { name: "ScanX2.jpg", folder: "Scans", position: 7},
            { name: "ScanX3.jpg", folder: "Scans", position: 8},
            { name: "ScanX4.jpg", folder: "Scans", position: 9},
            { name: "Scan0001.jpg", folder: "Scans", position: 10},
            { name: "ScanX5.jpg", folder: "Scans", position: 11},
            { name: "ScanX6.jpg", folder: "Scans", position: 12},
            { name: "_20171104_122155.JPG", folder: "Scans", position: 13},
            { name: "DSC_7946.jpg", folder: "Scans", position: 14},
            { name: "DSC_7947.jpg", folder: "Scans", position: 15},
            { name: "DSC_7948.jpg", folder: "Scans", position: 16},
            { name: "DSC_7944.jpg", folder: "Scans", position: 17},
            { name: "DSC_7950.jpg", folder: "Scans", position: 18},
            { name: "DSC_7949.jpg", folder: "Scans", position: 19},   
            { name: "DSC_7945.jpg", folder: "Scans", position: 20}, 
            { name: "ScanX7.jpg", folder: "Scans", position: 21}, 
            { name: "DSC_8686.jpg", folder: "Scans", position: 22},    
            { name: "ScanX8.jpg", folder: "Scans", position: 23},
            
      ]

})

.controller("nightCtrl", function ($scope, $log, $element) {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////// night ///////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

      /* fade corinthian */
      number = 0;
      var nights = [0, 1, 2, 3, 4];
      var fadenights = [0, 1, 2, 3, 4];
      fadenights[0] = window.setInterval(_fadenight, 100);

      function _fadenight() {
            nights[number] = document.getElementById("night_" + number.toString());
            if (nights[number] != null) {
                  if (nights[number].style.opacity == "") {
                        nights[number].style.opacity = 1.0;
                  }
                  if (nights[number].style.opacity == "0.08") {
                        nights[number].style.opacity = nights[number].style.opacity - 0.01;
                        window.clearInterval(fadenights[number])
                        number += 1;
                        fadenights[number] = window.setInterval(_fadenight, 100);
                  }
                  else {
                        nights[number].style.opacity = nights[number].style.opacity - 0.01;
                  }
            }     
      }

})


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// directives for widgets //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// links to sub-pages
// title of system
.directive('footer', function() {
  return {
      restrict: 'E',
      templateUrl: 'templates/footer.htm'
  }
})
;










