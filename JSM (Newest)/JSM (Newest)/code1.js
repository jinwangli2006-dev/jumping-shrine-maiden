gdjs.Stage_32MenuCode = {};
gdjs.Stage_32MenuCode.localVariables = [];
gdjs.Stage_32MenuCode.idToCallbackMap = new Map();
gdjs.Stage_32MenuCode.GDGameText_9595Stage1Objects1= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage1Objects2= [];
gdjs.Stage_32MenuCode.GDStartGameButtonObjects1= [];
gdjs.Stage_32MenuCode.GDStartGameButtonObjects2= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage2Objects1= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage2Objects2= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage3Objects1= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage3Objects2= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage4Objects1= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage4Objects2= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage5Objects1= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage5Objects2= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage6Objects1= [];
gdjs.Stage_32MenuCode.GDGameText_9595Stage6Objects2= [];
gdjs.Stage_32MenuCode.GDBackgroundObjects1= [];
gdjs.Stage_32MenuCode.GDBackgroundObjects2= [];
gdjs.Stage_32MenuCode.GDNewSpriteObjects1= [];
gdjs.Stage_32MenuCode.GDNewSpriteObjects2= [];
gdjs.Stage_32MenuCode.GDPlayerObjects1= [];
gdjs.Stage_32MenuCode.GDPlayerObjects2= [];
gdjs.Stage_32MenuCode.GDBouncy_9595TileObjects1= [];
gdjs.Stage_32MenuCode.GDBouncy_9595TileObjects2= [];
gdjs.Stage_32MenuCode.GDRotating_9595TileObjects1= [];
gdjs.Stage_32MenuCode.GDRotating_9595TileObjects2= [];
gdjs.Stage_32MenuCode.GDPlatform_9595GroundObjects1= [];
gdjs.Stage_32MenuCode.GDPlatform_9595GroundObjects2= [];
gdjs.Stage_32MenuCode.GDBoundaryObjects1= [];
gdjs.Stage_32MenuCode.GDBoundaryObjects2= [];
gdjs.Stage_32MenuCode.GDEnemy_9595BoundaryObjects1= [];
gdjs.Stage_32MenuCode.GDEnemy_9595BoundaryObjects2= [];
gdjs.Stage_32MenuCode.GDNormal_9595TileObjects1= [];
gdjs.Stage_32MenuCode.GDNormal_9595TileObjects2= [];
gdjs.Stage_32MenuCode.GDFalling_9595TileObjects1= [];
gdjs.Stage_32MenuCode.GDFalling_9595TileObjects2= [];
gdjs.Stage_32MenuCode.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Stage_32MenuCode.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Stage_32MenuCode.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Stage_32MenuCode.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Stage_32MenuCode.GDFinishTriggerObjects1= [];
gdjs.Stage_32MenuCode.GDFinishTriggerObjects2= [];
gdjs.Stage_32MenuCode.GDBlueFairyObjects1= [];
gdjs.Stage_32MenuCode.GDBlueFairyObjects2= [];
gdjs.Stage_32MenuCode.GDWhiteFairyObjects1= [];
gdjs.Stage_32MenuCode.GDWhiteFairyObjects2= [];
gdjs.Stage_32MenuCode.GDGreenFairyObjects1= [];
gdjs.Stage_32MenuCode.GDGreenFairyObjects2= [];


gdjs.Stage_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartGameButton"), gdjs.Stage_32MenuCode.GDStartGameButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Stage_32MenuCode.GDStartGameButtonObjects1.length;i<l;++i) {
    if ( gdjs.Stage_32MenuCode.GDStartGameButtonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Stage_32MenuCode.GDStartGameButtonObjects1[k] = gdjs.Stage_32MenuCode.GDStartGameButtonObjects1[i];
        ++k;
    }
}
gdjs.Stage_32MenuCode.GDStartGameButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "videoplayback.mp3", 11, true, 10, 1);
}
}

}


};

gdjs.Stage_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Stage_32MenuCode.GDGameText_9595Stage1Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage1Objects2.length = 0;
gdjs.Stage_32MenuCode.GDStartGameButtonObjects1.length = 0;
gdjs.Stage_32MenuCode.GDStartGameButtonObjects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage2Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage2Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage3Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage3Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage4Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage4Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage5Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage5Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage6Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage6Objects2.length = 0;
gdjs.Stage_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Stage_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Stage_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Stage_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Stage_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Stage_32MenuCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Stage_32MenuCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Stage_32MenuCode.GDBoundaryObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBoundaryObjects2.length = 0;
gdjs.Stage_32MenuCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Stage_32MenuCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Stage_32MenuCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDFinishTriggerObjects1.length = 0;
gdjs.Stage_32MenuCode.GDFinishTriggerObjects2.length = 0;
gdjs.Stage_32MenuCode.GDBlueFairyObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBlueFairyObjects2.length = 0;
gdjs.Stage_32MenuCode.GDWhiteFairyObjects1.length = 0;
gdjs.Stage_32MenuCode.GDWhiteFairyObjects2.length = 0;
gdjs.Stage_32MenuCode.GDGreenFairyObjects1.length = 0;
gdjs.Stage_32MenuCode.GDGreenFairyObjects2.length = 0;

gdjs.Stage_32MenuCode.eventsList0(runtimeScene);
gdjs.Stage_32MenuCode.GDGameText_9595Stage1Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage1Objects2.length = 0;
gdjs.Stage_32MenuCode.GDStartGameButtonObjects1.length = 0;
gdjs.Stage_32MenuCode.GDStartGameButtonObjects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage2Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage2Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage3Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage3Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage4Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage4Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage5Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage5Objects2.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage6Objects1.length = 0;
gdjs.Stage_32MenuCode.GDGameText_9595Stage6Objects2.length = 0;
gdjs.Stage_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Stage_32MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.Stage_32MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.Stage_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Stage_32MenuCode.GDPlayerObjects2.length = 0;
gdjs.Stage_32MenuCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Stage_32MenuCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Stage_32MenuCode.GDBoundaryObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBoundaryObjects2.length = 0;
gdjs.Stage_32MenuCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Stage_32MenuCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Stage_32MenuCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Stage_32MenuCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Stage_32MenuCode.GDFinishTriggerObjects1.length = 0;
gdjs.Stage_32MenuCode.GDFinishTriggerObjects2.length = 0;
gdjs.Stage_32MenuCode.GDBlueFairyObjects1.length = 0;
gdjs.Stage_32MenuCode.GDBlueFairyObjects2.length = 0;
gdjs.Stage_32MenuCode.GDWhiteFairyObjects1.length = 0;
gdjs.Stage_32MenuCode.GDWhiteFairyObjects2.length = 0;
gdjs.Stage_32MenuCode.GDGreenFairyObjects1.length = 0;
gdjs.Stage_32MenuCode.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['Stage_32MenuCode'] = gdjs.Stage_32MenuCode;
