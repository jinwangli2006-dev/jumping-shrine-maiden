gdjs.Finish_32LevelCode = {};
gdjs.Finish_32LevelCode.localVariables = [];
gdjs.Finish_32LevelCode.idToCallbackMap = new Map();
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1_1final = [];

gdjs.Finish_32LevelCode.GDCongratsTextObjects1= [];
gdjs.Finish_32LevelCode.GDCongratsTextObjects2= [];
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1= [];
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2= [];
gdjs.Finish_32LevelCode.GDNewSpriteObjects1= [];
gdjs.Finish_32LevelCode.GDNewSpriteObjects2= [];
gdjs.Finish_32LevelCode.GDPlayerObjects1= [];
gdjs.Finish_32LevelCode.GDPlayerObjects2= [];
gdjs.Finish_32LevelCode.GDBouncy_9595TileObjects1= [];
gdjs.Finish_32LevelCode.GDBouncy_9595TileObjects2= [];
gdjs.Finish_32LevelCode.GDRotating_9595TileObjects1= [];
gdjs.Finish_32LevelCode.GDRotating_9595TileObjects2= [];
gdjs.Finish_32LevelCode.GDPlatform_9595GroundObjects1= [];
gdjs.Finish_32LevelCode.GDPlatform_9595GroundObjects2= [];
gdjs.Finish_32LevelCode.GDBoundaryObjects1= [];
gdjs.Finish_32LevelCode.GDBoundaryObjects2= [];
gdjs.Finish_32LevelCode.GDEnemy_9595BoundaryObjects1= [];
gdjs.Finish_32LevelCode.GDEnemy_9595BoundaryObjects2= [];
gdjs.Finish_32LevelCode.GDNormal_9595TileObjects1= [];
gdjs.Finish_32LevelCode.GDNormal_9595TileObjects2= [];
gdjs.Finish_32LevelCode.GDFalling_9595TileObjects1= [];
gdjs.Finish_32LevelCode.GDFalling_9595TileObjects2= [];
gdjs.Finish_32LevelCode.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Finish_32LevelCode.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Finish_32LevelCode.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Finish_32LevelCode.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Finish_32LevelCode.GDFinishTriggerObjects1= [];
gdjs.Finish_32LevelCode.GDFinishTriggerObjects2= [];
gdjs.Finish_32LevelCode.GDBlueFairyObjects1= [];
gdjs.Finish_32LevelCode.GDBlueFairyObjects2= [];
gdjs.Finish_32LevelCode.GDWhiteFairyObjects1= [];
gdjs.Finish_32LevelCode.GDWhiteFairyObjects2= [];
gdjs.Finish_32LevelCode.GDGreenFairyObjects1= [];
gdjs.Finish_32LevelCode.GDGreenFairyObjects2= [];


gdjs.Finish_32LevelCode.eventsList0 = function(runtimeScene) {

{

gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Click_to_Return"), gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2);
for (var i = 0, k = 0, l = gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2.length;i<l;++i) {
    if ( gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2[k] = gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2[i];
        ++k;
    }
}
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1_1final.indexOf(gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2[j]) === -1 )
            gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1_1final.push(gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2[j]);
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
gdjs.copyArray(gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1_1final, gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1);
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
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "7 - おてんば恋娘の冒険 (Finish Level Music).mp3", 9, true, 10, 1);
}
}

}


};

gdjs.Finish_32LevelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Finish_32LevelCode.GDCongratsTextObjects1.length = 0;
gdjs.Finish_32LevelCode.GDCongratsTextObjects2.length = 0;
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1.length = 0;
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2.length = 0;
gdjs.Finish_32LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.Finish_32LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.Finish_32LevelCode.GDPlayerObjects1.length = 0;
gdjs.Finish_32LevelCode.GDPlayerObjects2.length = 0;
gdjs.Finish_32LevelCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Finish_32LevelCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Finish_32LevelCode.GDBoundaryObjects1.length = 0;
gdjs.Finish_32LevelCode.GDBoundaryObjects2.length = 0;
gdjs.Finish_32LevelCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Finish_32LevelCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Finish_32LevelCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDFinishTriggerObjects1.length = 0;
gdjs.Finish_32LevelCode.GDFinishTriggerObjects2.length = 0;
gdjs.Finish_32LevelCode.GDBlueFairyObjects1.length = 0;
gdjs.Finish_32LevelCode.GDBlueFairyObjects2.length = 0;
gdjs.Finish_32LevelCode.GDWhiteFairyObjects1.length = 0;
gdjs.Finish_32LevelCode.GDWhiteFairyObjects2.length = 0;
gdjs.Finish_32LevelCode.GDGreenFairyObjects1.length = 0;
gdjs.Finish_32LevelCode.GDGreenFairyObjects2.length = 0;

gdjs.Finish_32LevelCode.eventsList0(runtimeScene);
gdjs.Finish_32LevelCode.GDCongratsTextObjects1.length = 0;
gdjs.Finish_32LevelCode.GDCongratsTextObjects2.length = 0;
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects1.length = 0;
gdjs.Finish_32LevelCode.GDClick_9595to_9595ReturnObjects2.length = 0;
gdjs.Finish_32LevelCode.GDNewSpriteObjects1.length = 0;
gdjs.Finish_32LevelCode.GDNewSpriteObjects2.length = 0;
gdjs.Finish_32LevelCode.GDPlayerObjects1.length = 0;
gdjs.Finish_32LevelCode.GDPlayerObjects2.length = 0;
gdjs.Finish_32LevelCode.GDBouncy_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDBouncy_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDRotating_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDRotating_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Finish_32LevelCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Finish_32LevelCode.GDBoundaryObjects1.length = 0;
gdjs.Finish_32LevelCode.GDBoundaryObjects2.length = 0;
gdjs.Finish_32LevelCode.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Finish_32LevelCode.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Finish_32LevelCode.GDNormal_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDNormal_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDFalling_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDFalling_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Finish_32LevelCode.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Finish_32LevelCode.GDFinishTriggerObjects1.length = 0;
gdjs.Finish_32LevelCode.GDFinishTriggerObjects2.length = 0;
gdjs.Finish_32LevelCode.GDBlueFairyObjects1.length = 0;
gdjs.Finish_32LevelCode.GDBlueFairyObjects2.length = 0;
gdjs.Finish_32LevelCode.GDWhiteFairyObjects1.length = 0;
gdjs.Finish_32LevelCode.GDWhiteFairyObjects2.length = 0;
gdjs.Finish_32LevelCode.GDGreenFairyObjects1.length = 0;
gdjs.Finish_32LevelCode.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['Finish_32LevelCode'] = gdjs.Finish_32LevelCode;
