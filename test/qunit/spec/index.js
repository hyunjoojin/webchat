
	var sp = angular.module("specMain",[]);

	sp.directive('tcRemove', function(){
		// Runs during compile
		return {
			name: 'tc-remove',
			scope: {
				text: '@',
				ver: '@'
			}, // {} = isolate, true = child, false/undefined = no change
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<li class="list-group-item text-left disabled"><span class="glyphicon glyphicon-remove">&nbsp;</span><span><s>{{text}}</s></span><span class="badge">{{ver}}</span></li>',
			replace: true
		};
	});


	sp.directive('tc', function(){
		// Runs during compile		
		return {
			name: 'tc',
			scope: {
				action: '@' ,
				text: '@',
				ver: '@',
				tag_action:"@"
			}, // {} = isolate, true = child, false/undefined = no change
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			template: '<li class="list-group-item text-left "><span class="glyphicon {{tag_action}}">&nbsp;</span><span>{{text}}</span><span class="badge">{{ver}}</span></li>',
			replace: true,
			link: function(scope,element,attrs){
				//console.log(scope.action_list);
				if(scope.action == "done"){
					scope.tag_action = "glyphicon-check";
				}else if(scope.action == "ing"){
					scope.tag_action = "glyphicon-time";				
				}else if(!scope.action || scope.action ==""){
					scope.tag_action = "glyphicon-minus";
				}
			}
		};
	});


