import {  ButtonState } from './modules/buttons'
import {  PanelState, Panel, panels, activatePanel } from './modules/panels';
import {  GameData, State, newGame, checkGuess } from './modules/gameData';
import{ resetGame} from './rocket'
// Materials
export function createPanel(gameData:GameData){


    let greenOn = new Material()
    greenOn.albedoColor = Color3.FromHexString("#20CE4E")
    greenOn.emissiveColor = Color3.FromHexString("#20CE4E")

    let greenOff = new Material()
    greenOff.albedoColor = Color3.FromHexString("#48FDA2")

    let pinkOn = new Material()
    pinkOn.albedoColor = Color3.FromHexString("#FF03FC")
    pinkOn.emissiveColor = Color3.FromHexString("#FF03FC")

    let pinkOff = new Material()
    pinkOff.albedoColor = Color3.FromHexString("#FEA4FD")

    let yellowOn = new Material()
    yellowOn.albedoColor = Color3.FromHexString("#F7F519")
    yellowOn.emissiveColor = Color3.FromHexString("#F7F519")

    let yellowOff = new Material()
    yellowOff.albedoColor = Color3.FromHexString("#FFFE9F")

    let blueOn = new Material()
    blueOn.albedoColor = Color3.FromHexString("#0CEAE9")
    blueOn.emissiveColor = Color3.FromHexString("#0CEAE9")

    let blueOff = new Material()
    blueOff.albedoColor = Color3.FromHexString("#06CFCE")


    // INITIAL ENTITIES

    // board and panels
    let board = new Entity()
    board.addComponent(new GLTFShape("models/Simon.gltf"))
    board.addComponent(new Transform({
    position: new Vector3(16, 2.5, 1),
    rotation: Quaternion.Euler(0, 90, 90),
    scale: new Vector3(0.2, 0.2, 0.2)
    })) 
    engine.addEntity(board)

    let green = new Entity()
    green.addComponent(greenOff)
    green.addComponent(new PlaneShape())
    green.addComponent(new PanelState(greenOn, greenOff, Panel.GREEN))
    green.addComponent(new Transform({
    position: new Vector3(1, 0.05, -1),
    rotation: Quaternion.Euler(90, 180, 0),
    scale: new Vector3(2, 2, 2)
    }))
    green.setParent(board)
    // green.addComponent(new OnClick(e => {
    // if (gameData.state == State.LISTENING){
    //     activatePanel(Panel.GREEN)
    //     checkGuess(gameData, Panel.GREEN)
    // }
    // }))
    engine.addEntity(green)

    let pink = new Entity()
    pink.addComponent(new PlaneShape())
    pink.addComponent(new PanelState(pinkOn, pinkOff, Panel.PINK))
    pink.addComponent(new Transform({
    position: new Vector3(1, 0.05, 1),
    rotation: Quaternion.Euler(90, 180, 0),
    scale: new Vector3(2, 2, 2)
    }))
    pink.setParent(board)
    pink.addComponent(pinkOff)
    // pink.addComponent(new OnClick(e => {
    // if (gameData.state == State.LISTENING){
    //     activatePanel(Panel.PINK)
    //     checkGuess(gameData, Panel.PINK)
    // }
    // }))
    engine.addEntity(pink)

    let yellow = new Entity()
    yellow.addComponent(new PlaneShape())
    yellow.addComponent(new PanelState(yellowOn, yellowOff, Panel.YELLOW))
    yellow.addComponent(new Transform({
    position: new Vector3(-1, 0.05, -1),
    rotation: Quaternion.Euler(90, 180, 0),
    scale: new Vector3(2, 2, 2)
    }))
    yellow.setParent(board)
    yellow.addComponent(yellowOff)
    // yellow.addComponent(new OnClick(e => {
    // if (gameData.state == State.LISTENING){
    //     activatePanel(Panel.YELLOW)
    //     checkGuess(gameData, Panel.YELLOW)
    // }
    // }))
    engine.addEntity(yellow)

    let blue = new Entity()
    blue.addComponent(new PlaneShape())
    blue.addComponent(new PanelState(blueOn, blueOff, Panel.BLUE))
    blue.addComponent(new Transform({
    position: new Vector3(-1, 0.05, 1),
    rotation: Quaternion.Euler(90, 180, 0),
    scale: new Vector3(2, 2, 2)
    }))
    blue.setParent(board)
    blue.addComponent(blueOff)
    // blue.addComponent(new OnClick(e => {
    // if (gameData.state == State.LISTENING){
    //     activatePanel(Panel.BLUE)
    //     checkGuess(gameData, Panel.BLUE)
    // }
    // }))
    engine.addEntity(blue)

    // central button
    let button = new Entity()
    button.setParent(board)
    button.addComponent(new Transform({
    position: new Vector3(0, 0.05, 0),
    rotation: Quaternion.Euler(0, 180, 0)
    }))
    button.addComponent(new GLTFShape("models/Simon_Button.gltf"))
    button.addComponent(new ButtonState(0.07, -0.05))
    button.addComponent(new OnClick(e => {
        if(gameData.state==State.WIN) return
        resetGame()
        newGame(gameData)
        button.getComponent(ButtonState).pressed = true
    }))
    engine.addEntity(button)

    // background
    // let environment = new Entity()
    // environment.addComponent(new Transform({
    // position : new Vector3(8, 0.05, 8),
    // scale: new Vector3(1.6, 1.6, 1.6)
    // }))
    // environment.addComponent(new GLTFShape("models/Simon_scene.gltf"))
    // engine.addEntity(environment)
}