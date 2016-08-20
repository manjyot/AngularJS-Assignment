function CompareCtrl($scope) {

	var selectedProducts = [];

	$scope.allProducts = allProducts;

	$scope.compareList = [];

	$scope.updateGroup = function () {
		$scope.compareList = compare.getListGroupBy(selectedProducts, $scope.groupBy, '-');
	};

	$scope.addToCompareList = function (item) {

		var found = 0;
	    for (var i = 0; i < selectedProducts.length; i++) {
	        if (selectedProducts[i].title == item.title) {
	           found = 1;
	        }
	    }
	    
	    var elem = document.getElementById('error');
		if(selectedProducts.length <= 2 && found == 0) {
			selectedProducts.push(item);
			$scope.updateGroup();
			elem.style.display = 'none';
		} else if(found == 1){
			$scope.errorMessage = 'Cannot add same property twice';
			elem.style.display = 'block';
		} else {
			$scope.errorMessage = 'Cannot add more than 3 properties';
			elem.style.display = 'block';
		}
		
	};
}