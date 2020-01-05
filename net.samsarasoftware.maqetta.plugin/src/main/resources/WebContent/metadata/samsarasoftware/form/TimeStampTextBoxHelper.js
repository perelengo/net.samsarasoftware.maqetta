//>>built
define("maq-metadata-samsarasoftware/samsarasoftware/form/TimeStampTextBoxHelper",function(){
var _1=function(){
};
_1.prototype={getData:function(_2,_3){
var _4=_2._getData(_3);
_4.properties.value=_2.getPropertyValue("value");
if(_4.properties.value&&_4.properties.value.toISOString){
if(_2.type=="samsarasoftware/form/TimeStampTextBox"){
_4.properties.value=_4.properties.value.toISOString().substring(0,19);
}else{
_4.properties.value=_4.properties.value.toISOString();
}
}
}
return _4;
}};
return _1;
});
