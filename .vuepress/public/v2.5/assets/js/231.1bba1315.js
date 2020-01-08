(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{782:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"ipx800-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipx800-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" IPX800 Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("IPX800 is a 8 relay webserver from gce-electronics with a lot of possibilities:")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("Each IPX800 connected to openHAB must be configured with the setting 'Send data on status changed' on the website in M2M > TCP client.")]),t._v(" "),s("p",[t._v("To make it simple, IPX800 is a simple device that drive output and retrieve input. On input we generally connect push button (for instance house switchs), on ouputs we can connect light bulbs for instance.")]),t._v(" "),s("p",[t._v("Features of the binding:")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("ipx800 items are described as below (italic items are optionnal)")]),t._v(" "),t._m(7),s("p",[t._v("| name | ipx name or extension alias as defined in the configuration |\n| port | ipx port name as Tnn, with T port type (O : ouput, I : input, C : Counter, A : Analog) and nn port number |\n| options | depending on items |")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),s("p",[t._v("Drive output directly from a openhab item. Option p put this ouput in pulse mode (sending SetNxxp at ipx800)")]),t._v(" "),t._m(12),t._v(" "),t._m(13),s("p",[t._v("State of this item will follow the input state.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),s("p",[t._v("On each rising edge of the input, item state will change.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),s("p",[t._v("When coupled with a double click, after a single rising/falling edge, will wait the double clic timeout before changing item state.")]),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("Change item state after a double clic on the input.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),s("p",[t._v("Once item value reaches 100, it will stick to this value. A new long press will restart the dimmer to 0.")]),t._v(" "),t._m(23),t._v(" "),t._m(24),s("p",[t._v("Will reflect ipx800 counter value.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),s("p",[t._v("Will compute the average based on the counter. This is very useful to use in conjunction to pulse based counter (water/gaz/electrical counter).")]),t._v(" "),s("p",[t._v("8 different counter could be connected direclty to ipx800.")]),t._v(" "),s("p",[t._v("With this kind of counter, all the power will be monitored easily (liters per minute, Kw...)")]),t._v(" "),s("p",[t._v("This item will publish its state at least each period.")]),t._v(" "),s("p",[t._v("Options : <step>:<period>")]),t._v(" "),s("p",[t._v("| Step | unit of each counter increment (as defined by hardware counter) |\n| Period | Base period to compute the average |")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),s("p",[t._v("The goal of this binding is to connect openHAB to ipx800 while provinding extra functionnality to like double click (double change of input state will change the state of an openhab item), long press (long change of input), average power counter (count the average of pulse on a specified input)...")]),t._v(" "),s("p",[t._v("To do this two things are needed :")]),t._v(" "),t._m(32),t._v(" "),s("p",[t._v("Ex:")]),t._v(" "),s("p",[t._v("A double click item is configured on an input.")]),t._v(" "),s("p",[t._v("A change occur on this input, the provider will just change its internal state to wait for the next clic\nOn the second change, the provider will change the state of the openhab item")]),t._v(" "),s("p",[t._v('In the current architecture, for each openhab item setup in conf file (Ex : Switch InputDoubleClic { ipx800="ipx1:I02:D"}), an ipx800Item is configured in the binding (in this case : Ipx800DoubleClic).\nTo be able to handle multiple items on the same ipx800 input port, i add the handler layer, so each item is linked to these handlers. This layer can for instance handle SimpleClic, DoubleClic and virtual dimmer connected on the same ipx800 input port (Ipx800HandlerMulti).')]),t._v(" "),s("p",[t._v("These features (double item state change, virtual dimmer,...) could have been implemented as rules, but it's easier to only configure an item.")]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("8 Digital Input")]),t._v(" "),s("li",[t._v("8 Relay (250v/ 10A / channel)")]),t._v(" "),s("li",[t._v("4 Analog Input")]),t._v(" "),s("li",[t._v("8 Counters")]),t._v(" "),s("li",[t._v("Ability to cascade up to 3 extensions for a total of 32 inputs / 32 relay")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("Multi ipx support")]),t._v(" "),s("li",[t._v("Direct TCP connection")]),t._v(" "),s("li",[t._v("Extensions support with alias name")]),t._v(" "),s("li",[t._v("Auto reconnect")]),t._v(" "),s("li",[t._v("Input to output redirection (even to different ipx)")]),t._v(" "),s("li",[t._v("Counter with custom average mode")]),t._v(" "),s("li",[t._v("Simple/double clic")]),t._v(" "),s("li",[t._v("Virtual dimmer")]),t._v(" "),s("li",[t._v("Pulse mode support")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/ipx800.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<name>")]),t._v(".host")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("IP address or hostname")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<name>")]),t._v(".port")]),t._v(" "),s("td",[t._v("9870")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("TCP client connection port")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<name>.<extension>.<address>")])]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Needed to declare extensions and give them aliases.  "),s("code",[t._v("<extension>")]),t._v(" can be "),s("code",[t._v("x880")]),t._v(" or "),s("code",[t._v("x400")]),t._v(".  "),s("code",[t._v("<address>")]),t._v(" is a sequential number starting at "),s("code",[t._v("1")]),t._v(".  Assign this property to alias you want to use.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax","aria-hidden":"true"}},[this._v("#")]),this._v(" Syntax")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('ipx800="name:port:*options>to\\_name:to\\_port*"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v(">*to\\_name:*to\\_port")]),this._v(" : redirection option, is used to drive directly one output using an input. to_name is the optional name of the ipx800 to send to command. to_port is the port to send the command to (if no to_name, the command will be send to the same ipx)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"item-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-types","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Types")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"output"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output","aria-hidden":"true"}},[this._v("#")]),this._v(" Output")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:O01"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:O01:p"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"mirror"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mirror","aria-hidden":"true"}},[this._v("#")]),this._v(" Mirror")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputMirror")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:m"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"normal-astable-switch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#normal-astable-switch","aria-hidden":"true"}},[this._v("#")]),this._v(" Normal astable switch")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputNormal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"simple-clic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-clic","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple Clic")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputSimpleClic")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m1;3"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"double-click"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#double-click","aria-hidden":"true"}},[this._v("#")]),this._v(" Double click")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputDoubleClic2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:D>myipx2:O03"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"virtual-dimmer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#virtual-dimmer","aria-hidden":"true"}},[this._v("#")]),this._v(" Virtual dimmer")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputDimmer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ipx1:I02\\:v\\:\\<step\\>"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A long press will raise the value of this item each 500ms by "),e("code",[this._v("<step>")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"simple-counter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-counter","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple Counter")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimpleCounter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:C01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"average-counter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#average-counter","aria-hidden":"true"}},[this._v("#")]),this._v(" Average counter")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AverageCounter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx\\:C01\\: a\\:1\\:m"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"to-be-done"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-be-done","aria-hidden":"true"}},[this._v("#")]),this._v(" To be done")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Long press")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Output")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:O01"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputNormal")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputSimpleClic")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:d>O02"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputSimpleClic")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m1;3"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputDoubleClic")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:D"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" milight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"m1;9"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputDoubleClic2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:D>myipx2:O03"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputDoubleClic3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08:v>O04"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Output2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:O02"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Output3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:O03"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Output9")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx2:O01"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputToOuput")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I08>O01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mirror")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:I06:m>O06"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PowerSimple")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:C01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PowerAverage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ipx800"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myipx:C01:a:1:m"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"architecture-developpment-choices"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#architecture-developpment-choices","aria-hidden":"true"}},[this._v("#")]),this._v(" Architecture & developpment choices")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("Keep a cache of ipx800 device state -> Because the change of an ipx800 input doesn't directly change the state of an openhab item state.")])]),this._v(" "),e("li",[e("p",[this._v("Keep the bindingProvider configured with openhab item configuration -> When you change an ipx800 input, the provider need to know what kind of item is configured on openhab")])])])}],!1,null,null,null);e.default=n.exports}}]);