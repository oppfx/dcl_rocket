// Custom button component

@Component('buttonState')
export class ButtonState {
  yUp: number = 0
  yDown: number = 0
  pressed: boolean = false
  fraction: number = 0
  timeDown: number
  constructor(yUp: number, yDown: number){
    this.yUp = yUp
    this.yDown = yDown
    this.timeDown = 2
  }
}

// Component group

const buttons = engine.getComponentGroup(ButtonState)


// Button system   (button stayed pressed for fixed time)

export class PushButton implements ISystem {
    update(dt: number) {
        for (let button of buttons.entities) {
            let transform = button.getComponent(Transform)
            let state = button.getComponent(ButtonState)
            if (state.pressed == true){
                if (state.fraction < 1){
                transform.position.y = Scalar.Lerp(state.yUp, state.yDown, state.fraction)
                state.fraction += 1/8
                }
                state.timeDown -= dt
                if (state.timeDown < 0){
                state.pressed = false
                state.timeDown = 2
                }
            }
            else if (state.pressed == false && state.fraction > 0){
                transform.position.y = Scalar.Lerp(state.yUp, state.yDown, state.fraction)
                state.fraction -= 1/8
            }
        }
    }   
    
  }