//>>built
define("maq-metadata-samsarasoftware/samsarasoftware/form/OptionsInput",["dojo/_base/declare","davinci/Runtime","davinci/ve/input/SmartInput","davinci/ve/commands/ModifyCommand","davinci/ve/commands/RemoveCommand","davinci/ve/widget"],function(_1,_2,_3,_4,_5,_6){
return _1(_3,{property:"value",displayOnCreate:"true",multiLine:"true",format:"rows",serialize:function(_7,_8,_9){
var _a=_7.getData();
var _b=_a.children;
var _c=[];
for(var i=0;i<_b.length;i++){
var _d=_b[i];
var _e=_d.properties.value;
_e=dojox.html.entities.decode(_e);
var _f=(_d.properties.selected||_a.properties.value==_e)?"+":"";
_c.push(_f+_e);
}
_c=this.serializeItems(_c);
_8(_c);
},parse:function(_10){
var _11=this.parseItems(_10);
for(var x=0;x<_11.length;x++){
_11[x].text=dojox.html.entities.encode(_11[x].text);
}
return _11;
},getProperties:function(_12,_13){
return null;
},update:function(_14,_15){
var _16=_14.getData();
var _17=_16.children;
for(var i=0;i<_15.length;i++){
var _18=_15[i];
var _19=_18.text;
var _1a=_18.selected?true:null;
if(i<_17.length){
var _1b=_17[i];
_1b.children=_19;
_1b.properties.value=_19;
_1b.properties.selected=_1a;
}else{
_17.push(this.createChildData(_19,_19,_1a));
}
if(!this.isHtmlSupported()){
_15[i].text=dojox.html.entities.decode(_19);
}
}
if(_15.length>0){
var _1c=_17.length;
for(var i=_15.length;i<_1c;i++){
var _1b=_17[i];
_17.pop();
}
}
var _1d=new _4(_14,this.getProperties(_14,_15),_17);
this._getContext().getCommandStack().execute(_1d);
return _1d.newWidget;
},getChildren:function(_1e){
var _1f=dojo.query("option",this.node(_1e));
var _20=[];
for(var i=0;i<_1f.length;i++){
var _21=_1f[i];
var _22=_21.innerHTML;
var _23=dojo.attr(_21,"value");
var _24=this.createChildData(_23,_22);
_20.push(_24);
}
return _20;
},createChildData:function(_25,_26,_27){
return {type:"html.option",properties:{value:_25,selected:_27},children:_26||_25};
},addChild:function(_28,_29){
var _2a=dojo.doc.createElement("option");
_2a.innerHTML=_29;
dojo.attr(_2a,"value",_29);
this.node(_28).appendChild(_2a);
},updateChild:function(_2b,_2c){
_2b.innerHTML=_2c;
dojo.attr(_2b,"value",_2c);
},removeChild:function(_2d,_2e){
this.node(_2d).removeChild(_2e);
},node:function(_2f){
return _2f.containerNode||_2f.domNode;
},_attr:function(_30,_31,_32){
var _33={};
_33[_31]=_32;
var _34=new _4(_30,_33);
this._addOrExecCommand(_34);
},_removeChild:function(_35){
var _36=new _5(_35);
this._addOrExecCommand(_36);
},_addOrExecCommand:function(_37){
if(this.command&&_37){
this.command.add(_37);
}else{
this._getContext().getCommandStack().execute(this.command||_37);
}
},_getContainer:function(_38){
while(_38){
if((_38.isContainer||_38.isLayoutContainer)&&_38.declaredClass!="dojox.layout.ScrollPane"){
return _38;
}
_38=_6.getParent(_38);
}
return undefined;
},_getEditor:function(){
return _2.currentEditor;
},_getContext:function(){
var _39=this._getEditor();
return _39&&(_39.getContext&&_39.getContext()||_39.context);
}});
});
