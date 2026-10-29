gdjs.End_32ScreenCode = {};
gdjs.End_32ScreenCode.localVariables = [];
gdjs.End_32ScreenCode.idToCallbackMap = new Map();
gdjs.End_32ScreenCode.GDNewSpriteObjects1= [];
gdjs.End_32ScreenCode.GDNewSpriteObjects2= [];
gdjs.End_32ScreenCode.GDNewTextObjects1= [];
gdjs.End_32ScreenCode.GDNewTextObjects2= [];
gdjs.End_32ScreenCode.GDNewText2Objects1= [];
gdjs.End_32ScreenCode.GDNewText2Objects2= [];
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.End_32ScreenCode.GDPlayerObjects1= [];
gdjs.End_32ScreenCode.GDPlayerObjects2= [];
gdjs.End_32ScreenCode.GDBouncy_9595TileObjects1= [];
gdjs.End_32ScreenCode.GDBouncy_9595TileObjects2= [];
gdjs.End_32ScreenCode.GDRotating_9595TileObjects1= [];
gdjs.End_32ScreenCode.GDRotating_9595TileObjects2= [];
gdjs.End_32ScreenCode.GDPlatform_9595GroundObjects1= [];
gdjs.End_32ScreenCode.GDPlatform_9595GroundObjects2= [];
gdjs.End_32ScreenCode.GDBoundaryObjects1= [];
gdjs.End_32ScreenCode.GDBoundaryObjects2= [];
gdjs.End_32ScreenCode.GDEnemy_9595BoundaryObjects1= [];
gdjs.End_32ScreenCode.GDEnemy_9595BoundaryObjects2= [];
gdjs.End_32ScreenCode.GDNormal_9595TileObjects1= [];
gdjs.End_32ScreenCode.GDNormal_9595TileObjects2= [];
gdjs.End_32ScreenCode.GDFalling_9595TileObjects1= [];
gdjs.End_32ScreenCode.GDFalling_9595TileObjects2= [];
gdjs.End_32ScreenCode.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.End_32ScreenCode.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.End_32ScreenCode.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.End_32ScreenCode.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.End_32ScreenCode.GDFinishTriggerObjects1= [];
gdjs.End_32ScreenCode.GDFinishTriggerObjects2= [];
gdjs.End_32ScreenCode.GDBlueFairyObjects1= [];
gdjs.End_32ScreenCode.GDBlueFairyObjects2= [];
gdjs.End_32ScreenCode.GDWhiteFairyObjects1= [];
gdjs.End_32ScreenCode.GDWhiteFairyObjects2= [];
gdjs.End_32ScreenCode.GDGreenFairyObjects1= [];
gdjs.End_32ScreenCode.GDGreenFairyObjects2= [];


gdjs.End_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "17 - エネルギー黎明　～ Future Dream.. (End Screen Music).mp3", 10, true, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Menu", false);
}
}

}


};

gdjs.End_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.End_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.End_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.End_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDNewText2Objects1.length = 0;
gdjs.End_32ScreenCode.GDNewText2Objects2.length = 0;
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.End_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.End_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.End_32ScreenCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDRotating_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDRotating_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.End_32ScreenCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.End_32ScreenCode.GDBoundaryObjects1.length = 0;
gdjs.End_32ScreenCode.GDBoundaryObjects2.length = 0;
gdjs.End_32ScreenCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.End_32ScreenCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.End_32ScreenCode.GDNormal_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDNormal_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDFalling_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDFalling_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDFinishTriggerObjects1.length = 0;
gdjs.End_32ScreenCode.GDFinishTriggerObjects2.length = 0;
gdjs.End_32ScreenCode.GDBlueFairyObjects1.length = 0;
gdjs.End_32ScreenCode.GDBlueFairyObjects2.length = 0;
gdjs.End_32ScreenCode.GDWhiteFairyObjects1.length = 0;
gdjs.End_32ScreenCode.GDWhiteFairyObjects2.length = 0;
gdjs.End_32ScreenCode.GDGreenFairyObjects1.length = 0;
gdjs.End_32ScreenCode.GDGreenFairyObjects2.length = 0;

gdjs.End_32ScreenCode.eventsList0(runtimeScene);
gdjs.End_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.End_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.End_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.End_32ScreenCode.GDNewTextObjects2.length = 0;
gdjs.End_32ScreenCode.GDNewText2Objects1.length = 0;
gdjs.End_32ScreenCode.GDNewText2Objects2.length = 0;
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.End_32ScreenCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.End_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.End_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.End_32ScreenCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDRotating_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDRotating_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.End_32ScreenCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.End_32ScreenCode.GDBoundaryObjects1.length = 0;
gdjs.End_32ScreenCode.GDBoundaryObjects2.length = 0;
gdjs.End_32ScreenCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.End_32ScreenCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.End_32ScreenCode.GDNormal_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDNormal_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDFalling_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDFalling_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.End_32ScreenCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.End_32ScreenCode.GDFinishTriggerObjects1.length = 0;
gdjs.End_32ScreenCode.GDFinishTriggerObjects2.length = 0;
gdjs.End_32ScreenCode.GDBlueFairyObjects1.length = 0;
gdjs.End_32ScreenCode.GDBlueFairyObjects2.length = 0;
gdjs.End_32ScreenCode.GDWhiteFairyObjects1.length = 0;
gdjs.End_32ScreenCode.GDWhiteFairyObjects2.length = 0;
gdjs.End_32ScreenCode.GDGreenFairyObjects1.length = 0;
gdjs.End_32ScreenCode.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['End_32ScreenCode'] = gdjs.End_32ScreenCode;
