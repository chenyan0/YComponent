webpackJsonp([2],{"/WsR":function(e,t,a){"use strict";var n={data:function(){return{currentValue:this.value,children:[],componentName:"VCheckboxGroup"}},props:{value:{type:Array,default:function(){return[]}}},mounted:function(){this.updateModel(!0)},methods:{updateModel:function(e){if(this.$children){var t=this.value;this.$children.forEach(function(a){a.model=t,e&&(a.currentValue=t.indexOf(a.label)>=0,a.group=!0)})}},change:function(e){this.currentValue=e,this.$emit("on-change",e)}},watch:{value:function(){this.updateModel(!0)}}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"checkbox-group"},[this._t("default")],2)},staticRenderFns:[]};var c=a("VU/8")(n,o,!1,function(e){a("HyBg")},"data-v-e4b4c4fa",null);t.a=c.exports},"CUg/":function(e,t){},HyBg:function(e,t){},ihL9:function(e,t,a){"use strict";var n=a("bOdI"),o=a.n(n),c={data:function(){return{model:[],currentValue:this.value,showSlot:!0,group:!1}},props:{id:{type:String,default:function(){return"radio-id-"+this._uid}},checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:""},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1},label:{type:[String,Number,Boolean]}},computed:{wrapperClasses:function(){var e;return["v-checkbox",(e={},o()(e,"v-checkbox-checked",this.currentValue),o()(e,"v-checkbox-disabled",this.disabled),e)]}},mounted:function(){"VCheckboxGroup"==this.$parent.$options.componentName&&(this.group=!0),this.group?this.$parent.updateModel(!0):(this.updateModel(),this.showSlot=void 0!==this.$slots.default)},methods:{change:function(e){if(this.disabled)return!1;var t=e.target.checked;this.currentValue=t;var a=t?this.trueValue:this.falseValue;this.$emit("input",a),this.group?this.$parent.change(this.model):this.$emit("on-change",a)},updateModel:function(){this.currentValue=this.value===this.trueValue}},watch:{value:function(e){if(e!==this.trueValue&&e!==this.falseValue)throw"Value should be trueValue or falseValue.";this.updateModel()},model:function(e){}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.wrapperClasses},[a("div",{staticClass:"v-checkbox-inner"},[e.group?a("input",{directives:[{name:"model",rawName:"v-model",value:e.model,expression:"model"}],staticClass:"v-checkbox-input",attrs:{id:e.id,type:"checkbox",name:e.name,disabled:e.disabled},domProps:{value:e.label,checked:Array.isArray(e.model)?e._i(e.model,e.label)>-1:e.model},on:{change:[function(t){var a=e.model,n=t.target,o=!!n.checked;if(Array.isArray(a)){var c=e.label,l=e._i(a,c);n.checked?l<0&&(e.model=a.concat([c])):l>-1&&(e.model=a.slice(0,l).concat(a.slice(l+1)))}else e.model=o},e.change]}}):a("input",{staticClass:"v-checkbox-input",attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.label,checked:e.currentValue},on:{change:e.change}})]),e._v(" "),a("label",{staticClass:"v-checkbox-label",attrs:{for:e.id}},[e._t("default",[e._v("\n      "+e._s(e.label)+"\n    ")])],2)])},staticRenderFns:[]};var i=a("VU/8")(c,l,!1,function(e){a("CUg/")},"data-v-5903bb78",null);t.a=i.exports},rABb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("/WsR"),o=a("ihL9"),c={components:{VCheckboxGroup:n.a,VCheckbox:o.a},data:function(){return{checkboxValue:["a"],tags:[{label:"a",text:"文件"},{label:"b",text:"食品"},{label:"c",text:"易碎品"}]}},methods:{onFormChange:function(e){this.checkboxValue=e,console.log(this.checkboxValue)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"section"},[a("div",{staticClass:"main"},[a("h2",{staticClass:"section-label"},[e._v("Checkbox 复选框")]),e._v(" "),a("h4",[e._v("基础用法")]),e._v(" "),a("div",{staticClass:"demo-block"},[a("v-checkbox-group",{on:{"on-change":function(t){return e.onFormChange(t,"checkboxValue")}},model:{value:e.checkboxValue,callback:function(t){e.checkboxValue=t},expression:"checkboxValue"}},e._l(e.tags,function(t,n){return a("v-checkbox",{key:n,attrs:{label:t.label,name:"checkbox"}},[e._v(e._s(t.text))])}),1)],1),e._v(" "),a("h4",[e._v("禁用状态")]),e._v(" "),a("div",{staticClass:"demo-block"},[a("v-checkbox-group",{on:{"on-change":function(t){return e.onFormChange(t,"checkboxValue")}},model:{value:e.checkboxValue,callback:function(t){e.checkboxValue=t},expression:"checkboxValue"}},e._l(e.tags,function(t,n){return a("v-checkbox",{key:n,attrs:{label:t.label,name:"checkbox",disabled:""}},[e._v(e._s(t.text))])}),1)],1)])])},staticRenderFns:[]};var i=a("VU/8")(c,l,!1,function(e){a("uTLo")},"data-v-39d9f539",null);t.default=i.exports},uTLo:function(e,t){}});
//# sourceMappingURL=2.2b4bca6d5bae81b62b75.js.map