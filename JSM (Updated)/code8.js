gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1_1final = [];

gdjs.Game_32OverCode.GDNewTextObjects1= [];
gdjs.Game_32OverCode.GDNewTextObjects2= [];
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1= [];
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2= [];
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDBouncy_9595TileObjects1= [];
gdjs.Game_32OverCode.GDBouncy_9595TileObjects2= [];
gdjs.Game_32OverCode.GDRotating_9595TileObjects1= [];
gdjs.Game_32OverCode.GDRotating_9595TileObjects2= [];
gdjs.Game_32OverCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32OverCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32OverCode.GDBoundaryObjects1= [];
gdjs.Game_32OverCode.GDBoundaryObjects2= [];
gdjs.Game_32OverCode.GDEnemy_9595BoundaryObjects1= [];
gdjs.Game_32OverCode.GDEnemy_9595BoundaryObjects2= [];
gdjs.Game_32OverCode.GDNormal_9595TileObjects1= [];
gdjs.Game_32OverCode.GDNormal_9595TileObjects2= [];
gdjs.Game_32OverCode.GDFalling_9595TileObjects1= [];
gdjs.Game_32OverCode.GDFalling_9595TileObjects2= [];
gdjs.Game_32OverCode.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Game_32OverCode.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Game_32OverCode.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Game_32OverCode.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Game_32OverCode.GDFinishTriggerObjects1= [];
gdjs.Game_32OverCode.GDFinishTriggerObjects2= [];
gdjs.Game_32OverCode.GDBlueFairyObjects1= [];
gdjs.Game_32OverCode.GDBlueFairyObjects2= [];
gdjs.Game_32OverCode.GDWhiteFairyObjects1= [];
gdjs.Game_32OverCode.GDWhiteFairyObjects2= [];
gdjs.Game_32OverCode.GDGreenFairyObjects1= [];
gdjs.Game_32OverCode.GDGreenFairyObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Press_to_Restart"), gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2);
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2[k] = gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1_1final.indexOf(gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2[j]) === -1 )
            gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1_1final.push(gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1_1final, gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber()), false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "18 - プレイヤーズスコア (Death Screen Music).mp3", 7, true, 15, 1);
}
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1.length = 0;
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32OverCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32OverCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32OverCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32OverCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Game_32OverCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Game_32OverCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDFinishTriggerObjects1.length = 0;
gdjs.Game_32OverCode.GDFinishTriggerObjects2.length = 0;
gdjs.Game_32OverCode.GDBlueFairyObjects1.length = 0;
gdjs.Game_32OverCode.GDBlueFairyObjects2.length = 0;
gdjs.Game_32OverCode.GDWhiteFairyObjects1.length = 0;
gdjs.Game_32OverCode.GDWhiteFairyObjects2.length = 0;
gdjs.Game_32OverCode.GDGreenFairyObjects1.length = 0;
gdjs.Game_32OverCode.GDGreenFairyObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects1.length = 0;
gdjs.Game_32OverCode.GDPress_9595to_9595RestartObjects2.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32OverCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32OverCode.GDBoundaryObjects1.length = 0;
gdjs.Game_32OverCode.GDBoundaryObjects2.length = 0;
gdjs.Game_32OverCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Game_32OverCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Game_32OverCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Game_32OverCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Game_32OverCode.GDFinishTriggerObjects1.length = 0;
gdjs.Game_32OverCode.GDFinishTriggerObjects2.length = 0;
gdjs.Game_32OverCode.GDBlueFairyObjects1.length = 0;
gdjs.Game_32OverCode.GDBlueFairyObjects2.length = 0;
gdjs.Game_32OverCode.GDWhiteFairyObjects1.length = 0;
gdjs.Game_32OverCode.GDWhiteFairyObjects2.length = 0;
gdjs.Game_32OverCode.GDGreenFairyObjects1.length = 0;
gdjs.Game_32OverCode.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
