gdjs.Game_32MenuCode = {};
gdjs.Game_32MenuCode.localVariables = [];
gdjs.Game_32MenuCode.idToCallbackMap = new Map();
gdjs.Game_32MenuCode.GDStartGameButtonObjects1= [];
gdjs.Game_32MenuCode.GDStartGameButtonObjects2= [];
gdjs.Game_32MenuCode.GDGame_9595TitleObjects1= [];
gdjs.Game_32MenuCode.GDGame_9595TitleObjects2= [];
gdjs.Game_32MenuCode.GDBackgroundObjects1= [];
gdjs.Game_32MenuCode.GDBackgroundObjects2= [];
gdjs.Game_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Game_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Game_32MenuCode.GDPlayerObjects1= [];
gdjs.Game_32MenuCode.GDPlayerObjects2= [];
gdjs.Game_32MenuCode.GDBouncy_9595TileObjects1= [];
gdjs.Game_32MenuCode.GDBouncy_9595TileObjects2= [];
gdjs.Game_32MenuCode.GDRotating_9595TileObjects1= [];
gdjs.Game_32MenuCode.GDRotating_9595TileObjects2= [];
gdjs.Game_32MenuCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32MenuCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32MenuCode.GDBoundaryObjects1= [];
gdjs.Game_32MenuCode.GDBoundaryObjects2= [];
gdjs.Game_32MenuCode.GDEnemy_9595BoundaryObjects1= [];
gdjs.Game_32MenuCode.GDEnemy_9595BoundaryObjects2= [];
gdjs.Game_32MenuCode.GDNormal_9595TileObjects1= [];
gdjs.Game_32MenuCode.GDNormal_9595TileObjects2= [];
gdjs.Game_32MenuCode.GDFalling_9595TileObjects1= [];
gdjs.Game_32MenuCode.GDFalling_9595TileObjects2= [];
gdjs.Game_32MenuCode.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Game_32MenuCode.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Game_32MenuCode.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Game_32MenuCode.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Game_32MenuCode.GDFinishTriggerObjects1= [];
gdjs.Game_32MenuCode.GDFinishTriggerObjects2= [];
gdjs.Game_32MenuCode.GDBlueFairyObjects1= [];
gdjs.Game_32MenuCode.GDBlueFairyObjects2= [];
gdjs.Game_32MenuCode.GDWhiteFairyObjects1= [];
gdjs.Game_32MenuCode.GDWhiteFairyObjects2= [];
gdjs.Game_32MenuCode.GDGreenFairyObjects1= [];
gdjs.Game_32MenuCode.GDGreenFairyObjects2= [];


gdjs.Game_32MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "videoplayback.mp3", true, 10, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGameButton"), gdjs.Game_32MenuCode.GDStartGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32MenuCode.GDStartGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32MenuCode.GDStartGameButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32MenuCode.GDStartGameButtonObjects1[k] = gdjs.Game_32MenuCode.GDStartGameButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32MenuCode.GDStartGameButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Stage Menu", false);
}
}

}


};

gdjs.Game_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32MenuCode.GDStartGameButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDStartGameButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDGame_9595TitleObjects1.length = 0;
gdjs.Game_32MenuCode.GDGame_9595TitleObjects2.length = 0;
gdjs.Game_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Game_32MenuCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32MenuCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32MenuCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32MenuCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Game_32MenuCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Game_32MenuCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDFinishTriggerObjects1.length = 0;
gdjs.Game_32MenuCode.GDFinishTriggerObjects2.length = 0;
gdjs.Game_32MenuCode.GDBlueFairyObjects1.length = 0;
gdjs.Game_32MenuCode.GDBlueFairyObjects2.length = 0;
gdjs.Game_32MenuCode.GDWhiteFairyObjects1.length = 0;
gdjs.Game_32MenuCode.GDWhiteFairyObjects2.length = 0;
gdjs.Game_32MenuCode.GDGreenFairyObjects1.length = 0;
gdjs.Game_32MenuCode.GDGreenFairyObjects2.length = 0;

gdjs.Game_32MenuCode.eventsList0(runtimeScene);
gdjs.Game_32MenuCode.GDStartGameButtonObjects1.length = 0;
gdjs.Game_32MenuCode.GDStartGameButtonObjects2.length = 0;
gdjs.Game_32MenuCode.GDGame_9595TitleObjects1.length = 0;
gdjs.Game_32MenuCode.GDGame_9595TitleObjects2.length = 0;
gdjs.Game_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Game_32MenuCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32MenuCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32MenuCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32MenuCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32MenuCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Game_32MenuCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Game_32MenuCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32MenuCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32MenuCode.GDFinishTriggerObjects1.length = 0;
gdjs.Game_32MenuCode.GDFinishTriggerObjects2.length = 0;
gdjs.Game_32MenuCode.GDBlueFairyObjects1.length = 0;
gdjs.Game_32MenuCode.GDBlueFairyObjects2.length = 0;
gdjs.Game_32MenuCode.GDWhiteFairyObjects1.length = 0;
gdjs.Game_32MenuCode.GDWhiteFairyObjects2.length = 0;
gdjs.Game_32MenuCode.GDGreenFairyObjects1.length = 0;
gdjs.Game_32MenuCode.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['Game_32MenuCode'] = gdjs.Game_32MenuCode;
