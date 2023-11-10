var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){!function(Controls){!function(Beckhoff){var _a,_TcHmiEventLine_tchmiFQN;class TcHmiEventLine extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__messageContent="",this.__eventDestroyFunctions=[],this.__mouseDown=!1,this.__subscriptionId=0,this.__localizedElements=new Map,this.__localizationReader=void 0,this.__destroyLocalizationWatch=null,this.__onResolverForMessageFormatWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("messageFormat"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__messageFormat)||(this.__messageFormat=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MessageFormat"}),this.__processMessageFormat()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")+", Id="+this.getId()+", Attribute=MessageFormat] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForFilterWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("filter"),tchmi_equal(data.value,this.__filter)||(this.__filter=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Filter"}),this.__processFilter())},this.__onResolverForSortingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("sorting"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__sorting)||(this.__sorting=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Sorting"}),this.__processSorting()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")+", Id="+this.getId()+", Attribute=Sorting] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textColor"),tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor())},this.__evtHandlerMouseEnter=this.__onMouseEnter(),this.__evtHandlerMouseLeave=this.__onMouseLeave(),this.__evtHandlerMouseDown=this.__onMouseDown(),this.__evtHandlerMouseUp=this.__onMouseUp(),this.__evtHandlerTouchStart=this.__onTouchStart(),this.__evtHandlerTouchEndOrCancel=this.__onTouchEndOrCancel(),this.__evtHandlerDocumentMouseUp=this.__onDocumentMouseUp()}__previnit(){if(this.__elementTemplateRoot=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Template")[0],!this.__elementTemplateRoot)throw new Error("Invalid Template.html");if(this.__elementIcon=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Icon")[0],!this.__elementIcon)throw new Error("Invalid Template.html");if(this.__elementMessageContainer=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Message-Container")[0],!this.__elementMessageContainer)throw new Error("Invalid Template.html");if(this.__elementMessage=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Message")[0],!this.__elementMessage)throw new Error("Invalid Template.html");if(this.__elementButton=this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiEventLine-Button")[0],!this.__elementButton)throw new Error("Invalid Template.html");this.__destroyLocalizationWatch=this.__localization.watch((data=>{if(data.error===TcHmi.Errors.NONE&&data.reader){this.__localizationReader=data.reader;for(const[element,info]of this.__localizedElements){let localizedText=data.reader.get(info.key);info.parameters&&(localizedText=tchmi_format_string(localizedText,...info.parameters));const text=tchmi_decode_control_characters(localizedText);element.setAttribute("title",text),element.textContent=text}this.__updateEventLine()}}));const passiveEventOptions={passive:!0,capture:!1};this.__elementTemplateRoot.addEventListener("mouseenter",this.__evtHandlerMouseEnter,passiveEventOptions),this.__elementTemplateRoot.addEventListener("mouseleave",this.__evtHandlerMouseLeave,passiveEventOptions),this.__elementTemplateRoot.addEventListener("mousedown",this.__evtHandlerMouseDown,passiveEventOptions),this.__elementTemplateRoot.addEventListener("mouseup",this.__evtHandlerMouseUp,passiveEventOptions),this.__elementTemplateRoot.addEventListener("touchcancel",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),this.__elementTemplateRoot.addEventListener("touchstart",this.__evtHandlerTouchStart,passiveEventOptions),this.__elementTemplateRoot.addEventListener("touchend",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),super.__previnit()}__init(){super.__init()}__attach(){super.__attach(),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.getId()+".onPressed",this.__onPressed())),this.__eventDestroyFunctions.push(TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized()));document.addEventListener("mouseup",this.__evtHandlerDocumentMouseUp,{passive:!0,capture:!1}),this.__updateSubscription()}__detach(){super.__detach();for(let e of this.__eventDestroyFunctions)e();this.__eventDestroyFunctions=[],0!==this.__subscriptionId&&TcHmi.Server.unsubscribeEx(this.__subscriptionId,null,(data=>{data.error!==TcHmi.Errors.NONE&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.details))})),this.__subscriptionId=0;document.removeEventListener("mouseup",this.__evtHandlerDocumentMouseUp,{passive:!0,capture:!1})}destroy(){if(this.__keepAlive)return;const passiveEventOptions={passive:!0,capture:!1};this.__elementTemplateRoot.removeEventListener("mouseenter",this.__evtHandlerMouseEnter,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("mouseleave",this.__evtHandlerMouseLeave,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("mousedown",this.__evtHandlerMouseDown,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("mouseup",this.__evtHandlerMouseUp,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("touchcancel",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("touchstart",this.__evtHandlerTouchStart,passiveEventOptions),this.__elementTemplateRoot.removeEventListener("touchend",this.__evtHandlerTouchEndOrCancel,passiveEventOptions),this.__destroyLocalizationWatch?.(),this.__destroyLocalizationWatch=null,super.destroy()}__updateSubscription(){TCHMI_DESIGNER||(0!==this.__subscriptionId&&TcHmi.Server.unsubscribeEx(this.__subscriptionId,null,(data=>{data.error!==TcHmi.Errors.NONE&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.details))})),this.__subscriptionId=0,this.__isAttached&&(this.__subscriptionId=TcHmi.Server.subscribeEx([{commandOptions:["SendErrorMessage"],symbol:"ListEvents",limit:1,filter:this.__filter??void 0,orderBy:this.__sorting?.map((info=>(info.name??"{value}")+" "+("Descending"===info.order?"DESC":"ASC"))).join(", ")}],this.__serverInterval??TcHmi.Config.get().tcHmiServer.websocketIntervalTime,null,this.__serverResponseHandler())??0))}__serverResponseHandler(){return data=>data.error!==TcHmi.Errors.NONE?(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.details)),this.__removeLocalizedElement(this.__elementMessage),void this.__addLocalizedElement(this.__elementMessage,"Browser_Console_Could_Have_More_Information")):data.response?data.response.error?(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage(data.response.error)),this.__removeLocalizedElement(this.__elementMessage),void this.__addLocalizedElement(this.__elementMessage,"Browser_Console_Could_Have_More_Information")):data.response.commands&&0!==data.response.commands.length?(data.response.commands[0].readValue?.length>0?this.__event=TcHmi.Server.Events.parseServerEvent(data.response.commands[0].readValue[0]):this.__event=void 0,void this.__updateEventLine()):(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()}, Symbol=ListEvents] `+TcHmi.Log.buildMessage({code:TcHmi.Errors.E_SERVER_COMMANDS_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_COMMANDS_MISSING],reason:"Missing commands in response from server with id: "+data.response.id,domain:this.__type})),this.__removeLocalizedElement(this.__elementMessage),void this.__addLocalizedElement(this.__elementMessage,"Browser_Console_Could_Have_More_Information")):(TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx(`[Source=Control, Module=${this.__type+(__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiEventLine,_a,"f",_TcHmiEventLine_tchmiFQN):"")}, Id=${this.getId()},Symbol=ListEvents] `+TcHmi.Log.buildMessage({code:TcHmi.Errors.E_SERVER_RESPONSE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_RESPONSE_MISSING],reason:"Missing response from server.",domain:this.__type})),this.__removeLocalizedElement(this.__elementMessage),void this.__addLocalizedElement(this.__elementMessage,"Browser_Console_Could_Have_More_Information"))}__updateEventLine(){if(!TcHmi.Access.checkAccess(this,"observe"))return;this.__removeLocalizedElement(this.__elementMessage);let currentEvent=this.__event;if(TCHMI_DESIGNER&&(currentEvent={name:"Placeholder Event",text:"This is a placeholder event text",timeCleared:new Date,timeConfirmed:new Date,timeRaised:new Date,timeReceived:new Date,type:TcHmi.Server.Events.Type.Alarm,alarmState:TcHmi.Server.Events.AlarmState.Raised,severity:TcHmi.Server.Events.Severity.Info,sessionId:"Placeholder session ID",confirmationState:TcHmi.Server.Events.ConfirmationState.WaitForConfirmation,domain:"Placeholder domain",sourceDomain:"Placeholder source domain"}),this.__elementMessage.classList.toggle("tchmi-designer-control-message",!this.__messageFormat?.length&&TCHMI_DESIGNER),this.__messageFormat?.length)if(currentEvent){(TcHmi.Server.Events.isAlarm(currentEvent)||TcHmi.Server.Events.isMessage(currentEvent))&&this.__setIconBySeverity(currentEvent.severity);let messageParts=[];for(let element of this.__messageFormat)if(this.__isEventProperty(element)){let messageFormat=" - ";switch(element.name){case"timeRaised":case"timeConfirmed":case"timeCleared":case"timeReceived":let time=currentEvent[element.name];null!=time&&(messageFormat=TcHmi.Localization.formatDate(time)??" - ");break;case"severity":let severity=currentEvent[element.name];null!=severity&&(messageFormat=this.__localizationReader?.get("Severity_"+TcHmi.Server.Events.Severity[severity])??" - ");break;case"type":let type=currentEvent[element.name];null!=type&&(messageFormat=this.__localizationReader?.get("Type_"+TcHmi.Server.Events.Type[type])??" - ");break;case"alarmState":let alarmState=currentEvent[element.name];null!=alarmState&&(messageFormat=this.__localizationReader?.get("AlarmState_"+TcHmi.Server.Events.AlarmState[alarmState])??" - ");break;case"confirmationState":let confirmationState=currentEvent[element.name];null!=confirmationState&&(messageFormat=this.__localizationReader?.get("ConfirmationState_"+TcHmi.Server.Events.ConfirmationState[confirmationState])??" - ");break;default:let pathTokens=TcHmi.ObjectPath.toPathTokens(element.name);if(pathTokens.length>0){let value=currentEvent;for(let i=0,ii=pathTokens.length;i<ii;i++){let token=pathTokens[i],isArrayToken=!1;if(token.match(/\[.*\]/)&&(token=token.slice(1,-1),isArrayToken=!0),Array.isArray(value)&&isArrayToken){let index=parseInt(token,10);value=value[isNaN(index)?token:index]}else{if("object"!=typeof value){value=" - ";break}value=value[token]}}messageFormat=TcHmi.ValueConverter.toString(value)??" - ",TCHMI_DESIGNER&&" - "===messageFormat&&(messageFormat=pathTokens.join(" "))}}this.__ignoreEscapeSequences||(messageFormat=tchmi_decode_control_characters(messageFormat)),messageParts.push(messageFormat)}else if(this.__isVerbatimText(element)){let text=element.text;this.__ignoreEscapeSequences||(text=tchmi_decode_control_characters(text)),messageParts.push(text)}let eventMessage=messageParts.join("");this.__elementMessage.setAttribute("title",eventMessage),this.__elementMessage.innerText=eventMessage}else this.__showMessageIfEmpty?this.__addLocalizedElement(this.__elementMessage,"NoEventsReceived"):(this.__elementMessage.setAttribute("title",""),this.__elementMessage.innerText=""),this.__setIconBySeverity(null);else this.__addLocalizedElement(this.__elementMessage,"NoElementsDefined"),this.__setIconBySeverity(null);this.__messageContent=this.__elementMessage.innerText,this.__processTextOverflow()}__setIconBySeverity(severity){this.__elementIcon.classList.toggle("severity-verbose",severity===TcHmi.Server.Events.Severity.Verbose),this.__elementIcon.classList.toggle("severity-info",severity===TcHmi.Server.Events.Severity.Info),this.__elementIcon.classList.toggle("severity-warning",severity===TcHmi.Server.Events.Severity.Warning),this.__elementIcon.classList.toggle("severity-error",severity===TcHmi.Server.Events.Severity.Error),this.__elementIcon.classList.toggle("severity-critical",severity===TcHmi.Server.Events.Severity.Critical)}__isEventProperty(obj){return"name"in obj}__isVerbatimText(obj){return"text"in obj}__onPressed(){return event=>{this.__targetRegion&&this.__targetContent&&this.__targetRegion.setTargetContent(this.__targetContent)}}__onMouseUp(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.removeClass("down")}}__onMouseEnter(){return event=>{if(this.getIsEnabled()&&this.__mouseDown){if(!TcHmi.Access.checkAccess(this,"operate"))return;this.__element.addClass("down")}}}__onMouseDown(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&(this.__mouseDown=!0,this.__element.addClass("down"))}}__onMouseLeave(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.removeClass("down")}}__onTouchStart(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.addClass("down")}}__onTouchEndOrCancel(){return event=>{this.getIsEnabled()&&TcHmi.Access.checkAccess(this,"operate")&&this.__element.removeClass("down")}}__onDocumentMouseUp(){return event=>{this.__mouseDown=!1}}__onResized(){return event=>{let height=this.getRenderedHeight();height&&(this.__borderWidth&&this.__borderStyle&&("None"!==this.__borderStyle.top&&(height-=this.__borderWidth.top),"None"!==this.__borderStyle.bottom&&(height-=this.__borderWidth.bottom)),this.__element[0].style.setProperty("--tchmi-icon-size",height+"px"),this.__processTextOverflow())}}__addLocalizedElement(element,key,...parameters){let info={key:key};if(0!==parameters.length&&(info.parameters=parameters),this.__localizedElements.set(element,info),this.__localizationReader){let localizedText=this.__localizationReader.get(key);info.parameters&&(localizedText=tchmi_format_string(localizedText,...info.parameters));const text=tchmi_decode_control_characters(localizedText);element.setAttribute("title",text),element.textContent=text}}__removeLocalizedElement(element){this.__localizedElements.delete(element)}setMessageFormat(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("MessageFormat"));let resolverInfo=this.__objectResolvers.get("messageFormat");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("messageFormat",{resolver:resolver,watchCallback:this.__onResolverForMessageFormatWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForMessageFormatWatchCallback)})}getMessageFormat(){return this.__messageFormat}__processMessageFormat(){this.__updateEventLine()}setServerInterval(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ServerInterval")),convertedValue!==this.__serverInterval&&(this.__serverInterval=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ServerInterval"}),this.__processServerInterval())}getServerInterval(){return this.__serverInterval}__processServerInterval(){this.__isAttached&&this.__updateSubscription()}setFilter(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Filter"));let resolverInfo=this.__objectResolvers.get("filter");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("filter",{resolver:resolver,watchCallback:this.__onResolverForFilterWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForFilterWatchCallback)})}getFilter(){return this.__filter}__processFilter(){this.__isAttached&&this.__updateSubscription()}setSorting(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew,this.getAttributeDefaultValueInternal("Sorting")),resolverInfo=this.__objectResolvers.get("sorting");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("sorting",{resolver:resolver,watchCallback:this.__onResolverForSortingWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForSortingWatchCallback)})}getSorting(){return this.__sorting}__processSorting(){this.__isAttached&&this.__updateSubscription()}setTargetRegion(valueNew){let convertedValue=valueNew instanceof TcHmi.Controls.System.TcHmiRegion?valueNew:null;null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetRegion")),convertedValue!==this.__targetRegion&&(this.__targetRegion=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetRegion"}),this.__processTargetRegion())}getTargetRegion(){return this.__targetRegion}__processTargetRegion(){this.__elementButton.style.display=this.__targetRegion&&this.__targetContent?"":"none"}setTargetContent(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TargetContent")),convertedValue!==this.__targetContent&&(this.__targetContent=valueNew,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TargetContent"}),this.__processTargetContent())}getTargetContent(){return this.__targetContent}__processTargetContent(){this.__processTargetRegion()}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){this.__elementMessage&&void 0!==this.__textColor&&TcHmi.StyleProvider.processTextColor(this.__elementMessage,this.__textColor)}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){this.__elementMessage&&TcHmi.StyleProvider.processFontSize(this.__elementMessage,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){this.__elementMessage&&TcHmi.StyleProvider.processFontSize(this.__elementMessage,this.__textFontSize,this.__textFontSizeUnit)}setTextFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontFamily")),convertedValue!==this.__textFontFamily&&(this.__textFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){TcHmi.StyleProvider.processFontFamily(this.__elementMessage,this.__textFontFamily)}setTextFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontStyle")),convertedValue!==this.__textFontStyle&&(this.__textFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__elementMessage,this.__textFontStyle)}setTextFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontWeight")),convertedValue!==this.__textFontWeight&&(this.__textFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__elementMessage,this.__textFontWeight)}setIgnoreEscapeSequences(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IgnoreEscapeSequences")),convertedValue!==this.__ignoreEscapeSequences&&(this.__ignoreEscapeSequences=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IgnoreEscapeSequences"}),this.__processIgnoreEscapeSequences())}getIgnoreEscapeSequences(){return this.__ignoreEscapeSequences}__processIgnoreEscapeSequences(){this.__updateEventLine()}setShowMessageIfEmpty(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ShowMessageIfEmpty")),convertedValue!==this.__showMessageIfEmpty&&(this.__showMessageIfEmpty=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ShowMessageIfEmpty"}),this.__processShowMessageIfEmpty())}getShowMessageIfEmpty(){return this.__showMessageIfEmpty}__processShowMessageIfEmpty(){this.__updateEventLine()}setTextOverflow(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextOverflow")),convertedValue!==this.__textOverflow&&(this.__textOverflow=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextOverflow"}),this.__processTextOverflow())}getTextOverflow(){return this.__textOverflow}__processTextOverflow(){if(this.__elementMessageContainer.classList.toggle("ellipsis","Ellipsis"===this.__textOverflow),this.__elementMessageContainer.classList.remove("marquee-left-to-right"),this.__elementMessageContainer.classList.remove("marquee-right-to-left"),this.__elementMessage.innerText=this.__messageContent,"Ellipsis"===this.__textOverflow)return;let messageWidth=this.__elementMessage.getBoundingClientRect().width;if(this.__elementMessageContainer.getBoundingClientRect().width>=messageWidth)return;"MarqueeLeftToRight"===this.__textOverflow?(this.__elementMessageContainer.classList.add("marquee-left-to-right"),this.__elementMessage.innerText=this.__messageContent+"             "+this.__messageContent+"             "):"MarqueeRightToLeft"===this.__textOverflow&&(this.__elementMessageContainer.classList.add("marquee-right-to-left"),this.__elementMessage.innerText="             "+this.__messageContent+"             "+this.__messageContent),this.__elementMessage.style.animationDuration=messageWidth/25/(this.__marqueeSpeedFactor??1)+"s"}setMarqueeSpeedFactor(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);(null===convertedValue||convertedValue<=0)&&(convertedValue=this.getAttributeDefaultValueInternal("MarqueeSpeedFactor")),convertedValue!==this.__marqueeSpeedFactor&&(this.__marqueeSpeedFactor=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MarqueeSpeedFactor"}),this.__processMarqueeSpeedFactor())}getMarqueeSpeedFactor(){return this.__marqueeSpeedFactor}__processMarqueeSpeedFactor(){this.__processTextOverflow()}}_TcHmiEventLine_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiEventLine).name},Beckhoff.TcHmiEventLine=TcHmiEventLine}(Controls.Beckhoff||(Controls.Beckhoff={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiEventLine","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiEventLine);