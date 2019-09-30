
import { PushButton, ButtonState } from './modules/buttons'
import { createPanel } from './panel'
import { createRocket,fireAnima,rocketAnima} from './rocket'
import { createScene } from './scene'
import { LightUpPanels, PanelState, Panel, panels, activatePanel } from './modules/panels';
import { PlaySequence, GameData, State, newGame, checkGuess } from './modules/gameData';
import { SimpleDialog } from "./modules/simpleDialog";

// Create an object to hold the gameState

let gameData = new GameData()


createScene()

createPanel(gameData)
createRocket(gameData)

// Stat systems 
engine.addSystem(new fireAnima(true))
engine.addSystem(new rocketAnima())
engine.addSystem(new PlaySequence(gameData))

engine.addSystem(new LightUpPanels(gameData))
   
engine.addSystem(new PushButton())




