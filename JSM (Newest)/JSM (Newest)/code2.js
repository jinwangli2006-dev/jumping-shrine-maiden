gdjs.Level1Code = {};
gdjs.Level1Code.localVariables = [];
gdjs.Level1Code.idToCallbackMap = new Map();
gdjs.Level1Code.GDBackgroundObjects1= [];
gdjs.Level1Code.GDBackgroundObjects2= [];
gdjs.Level1Code.GDPlatform_9595GroundObjects1= [];
gdjs.Level1Code.GDPlatform_9595GroundObjects2= [];
gdjs.Level1Code.GDxqwObjects1= [];
gdjs.Level1Code.GDxqwObjects2= [];
gdjs.Level1Code.GDBoundaryObjects1= [];
gdjs.Level1Code.GDBoundaryObjects2= [];
gdjs.Level1Code.GDBouncy_9595TileObjects1= [];
gdjs.Level1Code.GDBouncy_9595TileObjects2= [];
gdjs.Level1Code.GDNormal_9595TileObjects1= [];
gdjs.Level1Code.GDNormal_9595TileObjects2= [];
gdjs.Level1Code.GDRotating_9595TileObjects1= [];
gdjs.Level1Code.GDRotating_9595TileObjects2= [];
gdjs.Level1Code.GDFalling_9595TileObjects1= [];
gdjs.Level1Code.GDFalling_9595TileObjects2= [];
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Level1Code.GDTimerTextObjects1= [];
gdjs.Level1Code.GDTimerTextObjects2= [];
gdjs.Level1Code.GDLevelTextObjects1= [];
gdjs.Level1Code.GDLevelTextObjects2= [];
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1= [];
gdjs.Level1Code.GDEnemy_9595BoundaryObjects2= [];
gdjs.Level1Code.GDNewTiledSpriteObjects1= [];
gdjs.Level1Code.GDNewTiledSpriteObjects2= [];
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDBouncy_9595TileObjects1= [];
gdjs.Level1Code.GDBouncy_9595TileObjects2= [];
gdjs.Level1Code.GDRotating_9595TileObjects1= [];
gdjs.Level1Code.GDRotating_9595TileObjects2= [];
gdjs.Level1Code.GDPlatform_9595GroundObjects1= [];
gdjs.Level1Code.GDPlatform_9595GroundObjects2= [];
gdjs.Level1Code.GDBoundaryObjects1= [];
gdjs.Level1Code.GDBoundaryObjects2= [];
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1= [];
gdjs.Level1Code.GDEnemy_9595BoundaryObjects2= [];
gdjs.Level1Code.GDNormal_9595TileObjects1= [];
gdjs.Level1Code.GDNormal_9595TileObjects2= [];
gdjs.Level1Code.GDFalling_9595TileObjects1= [];
gdjs.Level1Code.GDFalling_9595TileObjects2= [];
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1= [];
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects2= [];
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1= [];
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects2= [];
gdjs.Level1Code.GDFinishTriggerObjects1= [];
gdjs.Level1Code.GDFinishTriggerObjects2= [];
gdjs.Level1Code.GDBlueFairyObjects1= [];
gdjs.Level1Code.GDBlueFairyObjects2= [];
gdjs.Level1Code.GDWhiteFairyObjects1= [];
gdjs.Level1Code.GDWhiteFairyObjects2= [];
gdjs.Level1Code.GDGreenFairyObjects1= [];
gdjs.Level1Code.GDGreenFairyObjects2= [];


gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBoundaryObjects1Objects = Hashtable.newFrom({"Boundary": gdjs.Level1Code.GDBoundaryObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDGreenFairyObjects1Objects = Hashtable.newFrom({"GreenFairy": gdjs.Level1Code.GDGreenFairyObjects1});
gdjs.Level1Code.asyncCallback18300244 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(18300244, gdjs.Level1Code.asyncCallback18300244);
gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.Level1Code.asyncCallback18300244(runtimeScene, asyncObjectsList)), 18300244, asyncObjectsList);
}
}

}


};gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy_Boundary"), gdjs.Level1Code.GDEnemy_9595BoundaryObjects1);
/* Reuse gdjs.Level1Code.GDGreenFairyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDEnemy_9595BoundaryObjects1[i].isCollidingWithPoint((( gdjs.Level1Code.GDGreenFairyObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDGreenFairyObjects1[0].getPointX("Checker")), (( gdjs.Level1Code.GDGreenFairyObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDGreenFairyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDEnemy_9595BoundaryObjects1[k] = gdjs.Level1Code.GDEnemy_9595BoundaryObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDGreenFairyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDGreenFairyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGreenFairyObjects1[i].getBehavior("Flippable").flipX(false);
}
}
}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemy_Boundary"), gdjs.Level1Code.GDEnemy_9595BoundaryObjects1);
/* Reuse gdjs.Level1Code.GDGreenFairyObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDEnemy_9595BoundaryObjects1[i].isCollidingWithPoint((( gdjs.Level1Code.GDGreenFairyObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDGreenFairyObjects1[0].getPointX("Checker")), (( gdjs.Level1Code.GDGreenFairyObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDGreenFairyObjects1[0].getPointY("Checker"))) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDEnemy_9595BoundaryObjects1[k] = gdjs.Level1Code.GDEnemy_9595BoundaryObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDGreenFairyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDGreenFairyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGreenFairyObjects1[i].getBehavior("Flippable").flipX(true);
}
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDFalling_95959595TileObjects1Objects = Hashtable.newFrom({"Falling_Tile": gdjs.Level1Code.GDFalling_9595TileObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDFinishTriggerObjects1Objects = Hashtable.newFrom({"FinishTrigger": gdjs.Level1Code.GDFinishTriggerObjects1});
gdjs.Level1Code.asyncCallback18311036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Finish Level", false);
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(18311036, gdjs.Level1Code.asyncCallback18311036);
gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level1Code.asyncCallback18311036(runtimeScene, asyncObjectsList)), 18311036, asyncObjectsList);
}
}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBouncy_95959595TileObjects1Objects = Hashtable.newFrom({"Bouncy_Tile": gdjs.Level1Code.GDBouncy_9595TileObjects1});
gdjs.Level1Code.asyncCallback18312620 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Level1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].addPolarForce(90, 1000, 1);
}
}
gdjs.Level1Code.localVariables.length = 0;
}
gdjs.Level1Code.idToCallbackMap.set(18312620, gdjs.Level1Code.asyncCallback18312620);
gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Level1Code.localVariables);
for (const obj of gdjs.Level1Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level1Code.asyncCallback18312620(runtimeScene, asyncObjectsList)), 18312620, asyncObjectsList);
}
}

}


};gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Moving_Tile"), gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vertical_Moving_Tile"), gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getY()));
}
}
{for(var i = 0, len = gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0)).setNumber((gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].returnVariable(gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1)).setNumber((gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getY()));
}
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "14 - 魔法少女達の百年祭 (Stage 1 Music).mp3", 1, true, 30, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Level1Code.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBoundaryObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getY() > (( gdjs.Level1Code.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBoundaryObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFairy"), gdjs.Level1Code.GDGreenFairyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDGreenFairyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Death");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("Animation").getAnimationName() == "Death" ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18300684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "touhou-death-sound-effect.mp3", false, 15, 1);
}
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].activateBehavior("PlatformerObject", false);
}
}

{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFairy"), gdjs.Level1Code.GDGreenFairyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDGreenFairyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDGreenFairyObjects1[i].getBehavior("Flippable").isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDGreenFairyObjects1[k] = gdjs.Level1Code.GDGreenFairyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDGreenFairyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDGreenFairyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDGreenFairyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGreenFairyObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenFairy"), gdjs.Level1Code.GDGreenFairyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDGreenFairyObjects1.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDGreenFairyObjects1[i].getBehavior("Flippable").isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDGreenFairyObjects1[k] = gdjs.Level1Code.GDGreenFairyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDGreenFairyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDGreenFairyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDGreenFairyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGreenFairyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}

{ //Subevents
gdjs.Level1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rotating_Tile"), gdjs.Level1Code.GDRotating_9595TileObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDRotating_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDRotating_9595TileObjects1[i].setAngle(gdjs.Level1Code.GDRotating_9595TileObjects1[i].getAngle() + (90 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Falling_Tile"), gdjs.Level1Code.GDFalling_9595TileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDFalling_95959595TileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDFalling_9595TileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFalling_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFalling_9595TileObjects1[i].returnVariable(gdjs.Level1Code.GDFalling_9595TileObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Falling_Tile"), gdjs.Level1Code.GDFalling_9595TileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDFalling_9595TileObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDFalling_9595TileObjects1[i].getVariableNumber(gdjs.Level1Code.GDFalling_9595TileObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDFalling_9595TileObjects1[k] = gdjs.Level1Code.GDFalling_9595TileObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDFalling_9595TileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDFalling_9595TileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFalling_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFalling_9595TileObjects1[i].addPolarForce(90, 300, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boundary"), gdjs.Level1Code.GDBoundaryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Falling_Tile"), gdjs.Level1Code.GDFalling_9595TileObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDFalling_9595TileObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDFalling_9595TileObjects1[i].getY() >= (( gdjs.Level1Code.GDBoundaryObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDBoundaryObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDFalling_9595TileObjects1[k] = gdjs.Level1Code.GDFalling_9595TileObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDFalling_9595TileObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDFalling_9595TileObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDFalling_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDFalling_9595TileObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Horizontal_Moving_Tile"), gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].setX(gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0).getAsNumber() + Math.cos(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(4).getAsNumber() / 100) * gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(2).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].setY(gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Vertical_Moving_Tile"), gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].setX(gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(0).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].setY(gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(1).getAsNumber() + Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(4).getAsNumber() / 100) * gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1[i].getVariables().getFromIndex(3).getAsNumber());
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimerText"), gdjs.Level1Code.GDTimerTextObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDTimerTextObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDTimerTextObjects1[i].getBehavior("Text").setText("Seconds left: " + gdjs.evtTools.common.toString(Math.floor(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber())));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FinishTrigger"), gdjs.Level1Code.GDFinishTriggerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDFinishTriggerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bouncy_Tile"), gdjs.Level1Code.GDBouncy_9595TileObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBouncy_95959595TileObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].addPolarForce(270, 1000, 1);
}
}

{ //Subevents
gdjs.Level1Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDBackgroundObjects1.length = 0;
gdjs.Level1Code.GDBackgroundObjects2.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level1Code.GDxqwObjects1.length = 0;
gdjs.Level1Code.GDxqwObjects2.length = 0;
gdjs.Level1Code.GDBoundaryObjects1.length = 0;
gdjs.Level1Code.GDBoundaryObjects2.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDTimerTextObjects1.length = 0;
gdjs.Level1Code.GDTimerTextObjects2.length = 0;
gdjs.Level1Code.GDLevelTextObjects1.length = 0;
gdjs.Level1Code.GDLevelTextObjects2.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Level1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level1Code.GDBoundaryObjects1.length = 0;
gdjs.Level1Code.GDBoundaryObjects2.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDFinishTriggerObjects1.length = 0;
gdjs.Level1Code.GDFinishTriggerObjects2.length = 0;
gdjs.Level1Code.GDBlueFairyObjects1.length = 0;
gdjs.Level1Code.GDBlueFairyObjects2.length = 0;
gdjs.Level1Code.GDWhiteFairyObjects1.length = 0;
gdjs.Level1Code.GDWhiteFairyObjects2.length = 0;
gdjs.Level1Code.GDGreenFairyObjects1.length = 0;
gdjs.Level1Code.GDGreenFairyObjects2.length = 0;

gdjs.Level1Code.eventsList5(runtimeScene);
gdjs.Level1Code.GDBackgroundObjects1.length = 0;
gdjs.Level1Code.GDBackgroundObjects2.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level1Code.GDxqwObjects1.length = 0;
gdjs.Level1Code.GDxqwObjects2.length = 0;
gdjs.Level1Code.GDBoundaryObjects1.length = 0;
gdjs.Level1Code.GDBoundaryObjects2.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDTimerTextObjects1.length = 0;
gdjs.Level1Code.GDTimerTextObjects2.length = 0;
gdjs.Level1Code.GDLevelTextObjects1.length = 0;
gdjs.Level1Code.GDLevelTextObjects2.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Level1Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Level1Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects1.length = 0;
gdjs.Level1Code.GDBouncy_9595TileObjects2.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects1.length = 0;
gdjs.Level1Code.GDRotating_9595TileObjects2.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Level1Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Level1Code.GDBoundaryObjects1.length = 0;
gdjs.Level1Code.GDBoundaryObjects2.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects1.length = 0;
gdjs.Level1Code.GDEnemy_9595BoundaryObjects2.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects1.length = 0;
gdjs.Level1Code.GDNormal_9595TileObjects2.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects1.length = 0;
gdjs.Level1Code.GDFalling_9595TileObjects2.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDHorizontal_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects1.length = 0;
gdjs.Level1Code.GDVertical_9595Moving_9595TileObjects2.length = 0;
gdjs.Level1Code.GDFinishTriggerObjects1.length = 0;
gdjs.Level1Code.GDFinishTriggerObjects2.length = 0;
gdjs.Level1Code.GDBlueFairyObjects1.length = 0;
gdjs.Level1Code.GDBlueFairyObjects2.length = 0;
gdjs.Level1Code.GDWhiteFairyObjects1.length = 0;
gdjs.Level1Code.GDWhiteFairyObjects2.length = 0;
gdjs.Level1Code.GDGreenFairyObjects1.length = 0;
gdjs.Level1Code.GDGreenFairyObjects2.length = 0;


return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
