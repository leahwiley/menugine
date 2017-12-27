;var menugine = menugine || (function(){
	var menuID = 0,itemID = 0,aM=[],
		has_ = (typeof(_) === 'function' && typeof(_.groupBy) === 'function')? true : false;
	if(!has_){
		var _ = {
			isArray: function(x){
				return (typeof(x) === 'object' && typeof(x.length) === 'number')? true : false;
			},
			groupBy: function(){

			}
		};
	}
	class MenuData {
		constructor(data){
			this.index = aM.length;
			this.data = data;
			aM.push(this);
		}
	}
	
	function newItem(text,parent){
		// menuID = menu
		itemID++;
		return {
			ID: itemID,
			text: '',
			href: '',
			parent: 0,
			action: null
		};
	}
	var APP = {
		menus: function(){return aM;},
		_: function(){return _;}
	};
	return APP;
})();