import { GameData, State } from "./gameData";

// parameter to set how long to leave a panel light on
let TIME_ON = 0.3

// panel color options
export enum Panel {
    GREEN = "green",
    PINK = "pink",
    YELLOW = "yellow",
    BLUE = "blue"
  }

// component for panels  
@Component('panelState')
export class PanelState {
  onColor: Material
  offColor: Material
  color: Panel
  active: boolean = false
  timeLeft: number = TIME_ON
  constructor(on: Material, off: Material, panel: Panel){
    this.onColor = on
    this.offColor = off
    this.color = panel 
  }
  activate(){
    this.active = true
    this.timeLeft = TIME_ON
  }
}

// component group with all panel entities
export const panels = engine.getComponentGroup(PanelState)

// system to light up panels
export class LightUpPanels implements ISystem {
  game: GameData
  isAllUp:boolean
    constructor(gameData){
        this.game = gameData
    }
    update(dt: number) {
      if(this.isAllUp) return
      for( let panel of panels.entities){
        let p = panel.getComponent(PanelState)
        if (p.active){
          panel.addComponentOrReplace(p.onColor)
          p.timeLeft -= dt
          if (p.timeLeft < 0){
            p.active = false
          }
        }
        else {
          panel.addComponentOrReplace(p.offColor)
        }
      }
      if(this.game.state==State.WIN) {
        this.isAllUp=true
      }
    }
  }


  export function activatePanel(color: Panel) {
    for (let panel of panels.entities) {
      let p = panel.getComponent(PanelState)
      if (p.color === color) {
        p.activate()
      } else {
        p.active = false
      }
    }
  }