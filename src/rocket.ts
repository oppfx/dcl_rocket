import {AddGLTF, Dialog} from './utils'
import { GameData, State } from './modules/gameData';
import { Panel ,panels,PanelState} from './modules/panels';
import utils from "../node_modules/decentraland-ecs-utils/index"



let isFire=false
let isGas=false
let fireEntities:Entity[]=[]
let gameData:GameData


const plasmaGreen_01 = new Entity()
const plasmaBlue_01 = new Entity()
const plasmaYellow_01 = new Entity()
const plasmaPink_01 = new Entity()
const rover = new Entity() //四爪
const rocketBtn = new Entity()
const podLight=new Entity()
export function resetGame(){
  gameData.reset()
  resetPlasma()
}

export class rocketAnima implements ISystem {
  speed:number
  constructor(){
    this.speed=0.05
  }
  update(dt: number) {
    if(!isFire) return
    let transform = pod_02.getComponent(Transform)
    if(transform.position.y>20){
      this.speed+=0.002
    }
    if(transform.position.y>150){
      isFire=false
      this.speed=0
      show2Dialog()
    }
    let direct=Vector3.Up().scale(this.speed)
    transform.translate(direct)
  }
}

export class fireAnima implements ISystem {
  index:number
  isUp:boolean
  constructor(up:boolean){
    this.isUp=up
  }
  update(dt: number) {
  
    this.isUp=!this.isUp
     fireEntities.forEach((e,i) => {
          let transform = e.getComponent(Transform)
      if(i==0) transform.scale.set(.6,this.isUp?1.9:2.0,.6)
      else transform.scale.set(.2,this.isUp?.7:.8,.2)
    });
   
  }
}
// 点火
function fireUp(){
  // isFire=true
  let pos={
    '0':new Transform({
      position: new Vector3(0, -.1, 0),
      scale: new Vector3(.6,1.5,.6)
    }),
    '1':new Transform({
      position: new Vector3(1.29, -.2, 0.1),
      scale: new Vector3(.2,0.8,.2)
    }),
    '2':new Transform({
      position: new Vector3(0, -.2, 1.29),
      scale: new Vector3(.2,0.8,.2)
    }),
    '3':new Transform({
      position: new Vector3(0, -.2, -1.29),
      scale: new Vector3(.2,0.8,.2)
    }),
    '4':new Transform({
      position: new Vector3(-1.29, -.2,-0.02),
      scale: new Vector3(.2,0.8,.2)
    })

  }
  for (let i = 0; i < 5; i++) {
    const fire = new Entity()
    const transform=pos[i+'']
  
    let m=new Material()
    m.albedoColor=Color3.White()//FromHexString('#ffffff')
    m.emissiveColor=Color3.White()
    fire.addComponent(m)
    fire.addComponent(new SphereShape())
    fire.setParent(pod_02)
    fire.addComponentOrReplace(transform)
    fireEntities.push(fire)
    engine.addEntity(fire)
  }
  
}



const pod_02 = new Entity()

export function createRocket(gd){
  gameData=gd
  //------------------------------rocket--------------------------------------------------
  
  // AddGLTF('models/rocket/LightFloor_01/LightFloor_01.glb',new Vector3(1, 1, 1), Vector3.Zero(),new Vector3(1, 1, 1))
  
  
  
  // //发射台
  AddGLTF('models/rocket/DigitalTable_01/DigitalTable_01.glb',new Vector3(22.8, 0, 16.4), Vector3.Zero(),new Vector3(1, 1, 1))
  
  
  //1级火箭 总位置
  
  const gltfShape_24 = new GLTFShape('models/rocket/Pod_02/Pod_02.glb')
  pod_02.addComponentOrReplace(gltfShape_24)
  pod_02.addComponent(new AudioSource(new AudioClip('sounds/rocket_2.mp3')))
  const transform_35 = new Transform({
    position: new Vector3(22.8, 1, 16.4),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  pod_02.addComponentOrReplace(transform_35)
  engine.addEntity(pod_02)

  // fireUp()
  

AddGLTF('models/rocket/Pod_02/Pod_02.glb',new Vector3(0, 1.5, 0), Vector3.Zero(),new Vector3(1, 1, 1),pod_02)
//燃料1
AddGLTF('models/rocket/OxygenTube_01/OxygenTube_01.glb',new Vector3(1.3, .9, 0.13), Vector3.Zero(),new Vector3(3, 3, 3),pod_02)
AddGLTF('models/rocket/Charger_02/Charger_02.glb',new Vector3(1.7, 0.5, 0.10), new Vector3(0,0,90),new Vector3(2, 2, 2),pod_02)
//2
AddGLTF('models/rocket/OxygenTube_01/OxygenTube_01.glb',new Vector3(-1.3, .9, 0), Vector3.Zero(),new Vector3(3, 3, 3),pod_02)
AddGLTF('models/rocket/Charger_02/Charger_02.glb',new Vector3(-1.7, 0.5, -0.03), new Vector3(0,180,90),new Vector3(2, 2, 2),pod_02)
//燃料3
AddGLTF('models/rocket/OxygenTube_01/OxygenTube_01.glb',new Vector3(0, .9,1.3 ), Vector3.Zero(),new Vector3(3, 3, 3),pod_02)
AddGLTF('models/rocket/Charger_02/Charger_02.glb',new Vector3(0, 0.5,1.7 ), new Vector3(0,-90,90),new Vector3(2, 2, 2),pod_02)
//燃料4
AddGLTF('models/rocket/OxygenTube_01/OxygenTube_01.glb',new Vector3(0, .9, -1.3), Vector3.Zero(),new Vector3(3, 3, 3),pod_02)
AddGLTF('models/rocket/Charger_02/Charger_02.glb',new Vector3(0, 0.5,-1.7), new Vector3(90,90,0),new Vector3(2, 2, 2),pod_02)


AddGLTF('models/rocket/Pod_01/Pod_01.glb',new Vector3(0, 3, 0), Vector3.Zero(),new Vector3(1, 1, 1),pod_02)
AddGLTF('models/rocket/Pod_01/Pod_01.glb',new Vector3(0, 5.5, 0), new Vector3(0,90,0),null,pod_02)


//2级
AddGLTF('models/rocket/LightFloor_01/LightFloor_01.glb',new Vector3(0, 8.1, 0), Vector3.Zero(),new Vector3(6, 6, 6),pod_02)

//透明仓
AddGLTF('models/rocket/ScienceContainer_01/ScienceContainer_01.glb',new Vector3(0, 11.2, 0), Vector3.Zero(),new Vector3(2.7, 2.7, 2.7),pod_02)
// AddGLTF('models/rocket/Sensor_01/Sensor_01.glb',new Vector3(0, 11.2, 0), Vector3.Zero(),new Vector3(1, 1, 1),pod_02)
//仓内物

podLight.addComponent(new GLTFShape('models/rocket/Light_02/Light_02.glb'))
podLight.addComponent(new Transform({position:new Vector3(0, 9.1, 0),scale:new Vector3(1,2,1)}))
podLight.setParent(pod_02)
engine.addEntity(podLight)
// AddGLTF('models/rocket/Light_02/Light_02.glb',new Vector3(0, 10.1, 0), Vector3.Zero(),new Vector3(1, 2, 1),pod_02)

AddGLTF('models/rocket/Battery_01/Battery_01.glb',new Vector3(0, 13.5, 0),new Vector3(0,-110,0),new Vector3(12, 6,12),pod_02)

//三角火箭头
let top=new Entity()
let m=new Material()
m.albedoColor=Color3.FromHexString('#CFD2CF')
top.addComponent(new CylinderShape())
top.addComponent(m)
top.addComponent(new Transform({position:new Vector3(0,16.2,0),scale:new Vector3(.7,.7,.7)}))
top.setParent(pod_02)
engine.addEntity(top)

let top2=new Entity()
let m2=new Material()
m2.albedoColor=Color3.FromHexString('#CFD2CF')
top2.addComponent(new BoxShape())
top2.addComponent(m2)
top2.addComponent(new Transform({position:new Vector3(0,17.5,0),scale:new Vector3(.05,2,.05)}))
top2.setParent(pod_02)
engine.addEntity(top2)


//控制器
// AddGLTF('models/rocket/Lever_01/Lever_01.glb',new Vector3(16.5, 0, 12),new Vector3(0,0,0),new Vector3(1,1,1))
// let lever=new Entity()
// lever.addComponent(new GLTFShape('models/rocket/Lever_01/Lever_01.glb'))

// lever.addComponent(new Transform({position:new Vector3(16.5, 0, 12)}))

// lever.addComponent(new OnClick(()=>{
//   rocketFire()
// }))
// engine.addEntity(lever)


// //四爪机器

  
  rover.addComponent(new GLTFShape('models/rocket/Rover_02/Rover_02.glb'))
  
  
  const transform_56 = new Transform({
    position: new Vector3(23, 0, 11)
  })
 
  rover.addComponent(new AudioSource(new AudioClip('sounds/gas.mp3')))
  rover.addComponent(new OnClick(()=>{
    // rocketGas()
    // rover.getComponent(AudioSource).playOnce()
  }))
  rover.addComponent(transform_56)
  engine.addEntity(rover)

  // AddGLTF('',new Vector3(23, 0, 10),new Vector3(0,0,0),new Vector3(1,1,1)) x-0.6
  AddGLTF('models/rocket/AirVent_Curve_02/AirVent_Curve_02.glb',new Vector3(0.3, 6.3,4.1),new Vector3(0,180,-90),new Vector3(.7,.7,.7),rover)
  AddGLTF('models/rocket/AirVent_Curve_02/AirVent_Curve_02.glb',new Vector3(-0.4, 6.3,2.7),new Vector3(0,0,-90),new Vector3(.7,.7,.7),rover)

AddGLTF('models/rocket/AirVent_Straight_Short_01/AirVent_Straight_Short_01.glb',new Vector3(0.3, 6.3,2.7),new Vector3(0,0,90),new Vector3(.7,.7,.7),rover)
// z
AddGLTF('models/rocket/AirVent_Curve_02/AirVent_Curve_02.glb',new Vector3(-0.4, 5,2.7),new Vector3(180,0,-90),new Vector3(.7,.7,.7),rover)





//输溶液 容器
AddGLTF('models/rocket/OxygenStorage_01/OxygenStorage_01.glb',new Vector3(22.85, .5, 3.4),new Vector3(0,90,0),new Vector3(1,1,1))
AddGLTF('models/rocket/OxygenStorage_01/OxygenStorage_01.glb',new Vector3(22.85, 3.55, 3.4),new Vector3(0,90,0),new Vector3(1,1,1))
//+短直管
AddGLTF('models/rocket/LightCube_01/LightCube_01.glb',new Vector3(22.85, 0, 3.4),new Vector3(0,0,0),new Vector3(1,2,3))




//长直管

AddGLTF('models/rocket/AirVent_Straight_Long_01/AirVent_Straight_Long_01.glb',new Vector3(23, 3.9, 4.4),new Vector3(0,90,0),new Vector3(1,1,1))
AddGLTF('models/rocket/AirVent_Straight_Short_01/AirVent_Straight_Short_01.glb',new Vector3(23, 3.9, 8.3),new Vector3(0,90,0),new Vector3(1,1,1))

  
  //短直管
  AddGLTF('models/rocket/AirVent_Straight_Short_01/AirVent_Straight_Short_01.glb',new Vector3(19.5, 0, 6.5),new Vector3(0,0,0),new Vector3(1,1,1))
  AddGLTF('models/rocket/AirVent_Straight_Short_01/AirVent_Straight_Short_01.glb',new Vector3(20.5, 0, 9),new Vector3(0,0,0),new Vector3(1,1,1))


  
//短弯管
  AddGLTF('models/rocket/AirVent_Curve_02/AirVent_Curve_02.glb',new Vector3(23.5, 4.8, 5.5),new Vector3(0,180,-90),new Vector3(1,1,1))
  AddGLTF('models/rocket/AirVent_Curve_02/AirVent_Curve_02.glb',new Vector3(22.5, 3.9, 5.5),new Vector3(180,0,-90),new Vector3(1,1,1))
  
  //长弯管
  AddGLTF('models/rocket/AirVent_Curve_01/AirVent_Curve_01.glb',new Vector3(22.5, 4.38, 7.5),new Vector3(180,0,-90),new Vector3(1,1,1))
  
//电脑
  AddGLTF('models/rocket/Computer_01/Computer_01.glb',new Vector3(16,0,1),new Vector3(0,0,0),new Vector3(1,1,1))

  AddGLTF('models/rocket/LightWall_01/LightWall_01.glb',new Vector3(16,1.6,1),new Vector3(0,90,0),new Vector3(.8,1,1.8))
  // AddGLTF('models/rocket/LightBlock_01/LightBlock_01.glb',new Vector3(16,1.6,1),new Vector3(0,90,0),new Vector3(.8,1,1.8))

  //按钮控制器
  

  rocketBtn.addComponent(new GLTFShape("models/Round_Button.glb"))
  rocketBtn.addComponent(new Transform({position: new Vector3(16.02,.97, 1.26),rotation:Quaternion.Euler(0,-90,50),scale:new Vector3(.5,.5,.5)}))
  rocketBtn.addComponent(new AudioSource(new AudioClip("sounds/button.mp3")))
  let buttonAnimator = new Animator()
  buttonAnimator.addClip(new AnimationState("Button_Action", {looping:false}))
  rocketBtn.addComponent(buttonAnimator)

  //listen for click event to toggle spikes state
  rocketBtn.addComponent(new OnClick(event =>{
      if(isFire) return
     rocketBtn.getComponent(AudioSource).playOnce()
      buttonAnimator.getClip("Button_Action").play()
      rocketFire()

  }))

// //绿溶液
  
  plasmaGreen_01.addComponentOrReplace(new GLTFShape('models/rocket/PlasmaGreen_01/PlasmaGreen_01.glb'))
  plasmaGreen_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98, 1.4, 1.88),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1, 1, 1)
  }))
  plasmaGreen_01.addComponent(new OnClick(e => {
      if(gameData.state==State.LISTENING){
        addPlasma(Panel.GREEN)
        plasmaGreen_01.addComponentOrReplace(new utils.MoveTransformComponent(plasmaGreen_01.getComponent(Transform).position, new Vector3(22.98, 1.4, 2.38), 2.4))
      } 
    }))
  engine.addEntity(plasmaGreen_01)
// 粉溶液
  plasmaPink_01.addComponentOrReplace(new GLTFShape('models/rocket/plasmaPink_01/plasmaPink_01.glb'))
  plasmaPink_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98, 2.86, 1.88),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1, 1, 1)
  }))
  plasmaPink_01.addComponent(new OnClick(e => {
    if(gameData.state==State.LISTENING){
      addPlasma(Panel.PINK)
      plasmaPink_01.addComponentOrReplace(new utils.MoveTransformComponent(plasmaPink_01.getComponent(Transform).position, new Vector3(22.98, 2.86, 2.38), 2.4))
    } 
  }))
  engine.addEntity(plasmaPink_01)
  
  //蓝溶液
  plasmaBlue_01.addComponentOrReplace(new GLTFShape('models/rocket/PlasmaBlue_01/PlasmaBlue_01.glb'))
  plasmaBlue_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98, 4.42, 1.88),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1, 1, 1)
  }))
  plasmaBlue_01.addComponent(new OnClick(e => {
    if(gameData.state==State.LISTENING){
      addPlasma(Panel.BLUE)
      plasmaBlue_01.addComponentOrReplace(new utils.MoveTransformComponent(plasmaBlue_01.getComponent(Transform).position, new Vector3(22.98, 4.42, 2.38), 2.4))

    } 
    }))
  engine.addEntity(plasmaBlue_01)
  //黄溶液
  plasmaYellow_01.addComponentOrReplace(new GLTFShape('models/rocket/plasmaYellow_01/plasmaYellow_01.glb'))
  plasmaYellow_01.addComponent(new AudioSource(new AudioClip('sounds/rocket_1.mp3')))
  plasmaYellow_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98, 5.92, 1.88),
    rotation: Quaternion.Euler(90, 0, 0),
    scale: new Vector3(1, 1, 1)
  }))
  plasmaYellow_01.addComponent(new OnClick(e => {
    if(gameData.state==State.LISTENING){
      plasmaYellow_01.addComponentOrReplace(new utils.MoveTransformComponent(plasmaYellow_01.getComponent(Transform).position, new Vector3(22.98, 5.92, 2.38), 2.4))
       addPlasma(Panel.YELLOW)
    }
  }))
  engine.addEntity(plasmaYellow_01)

}


function resetPlasma(){
  plasmaGreen_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98, 1.4, 1.88),
    rotation: Quaternion.Euler(90, 0, 0)
  }))
  plasmaPink_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98, 2.86, 1.88),
    rotation: Quaternion.Euler(90, 0, 0)
  }))
  plasmaBlue_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98,4.42, 1.88),
    rotation: Quaternion.Euler(90, 0, 0)
  }))
  plasmaYellow_01.addComponentOrReplace(new Transform({
    position: new Vector3(22.98,5.92, 1.88),
    rotation: Quaternion.Euler(90, 0, 0)
  }))

}
//充气+显示按钮
function rocketGas(){
  plasmaYellow_01.getComponent(AudioSource).playOnce()
  podLight.addComponentOrReplace(new utils.MoveTransformComponent(podLight.getComponent(Transform).position, new Vector3(0, 11.1, 0), 12))
  setTimeout(() => {
    isGas=true
    engine.addEntity(rocketBtn)
    rover.getComponent(AudioSource).playOnce()
    rover.addComponentOrReplace(new utils.MoveTransformComponent(rover.getComponent(Transform).position, new Vector3(23, 0, 10), 3))
  }, 15000);
}
//火箭发射
function rocketFire(){
  if(gameData.state!=State.WIN) return
  if(isFire||!isGas) return 
  pod_02.getComponent(AudioSource).playOnce()
  fireUp()
  setTimeout(() => {
    isFire=true
  }, 5000);
}

function addPlasma(color){
  gameData.guessSequence.push(color)
  // console.info('gamedata:',gameData)

  if (gameData.guessSequence.length === gameData.sequence.length) {
    // Winner winner chicken dinner
    if(gameData.guessSequence.every((e,i) => {
        if(e!=gameData.sequence[i]){
          // log('lose')
          setTimeout(() => {
            resetGame()
          }, 2500);
          gameData.state=State.IDLE
          return false
        }
        return true
      })){
        // log('You win!')
        gameData.state=State.WIN
        setTimeout(() => {
          rocketGas()
        }, 2500);
      };
    
    for (let panel of panels.entities) {
      let p = panel.getComponent(PanelState)
      p.activate()
    }
  }
}

//对话
let d1=Dialog('Hi,Joss! Now help me to mix the solvents and inject them into the rocket, then you can launch the rocket.\n(Tip: solvents sequence)')
d1.show()
let d2=Dialog('Goodbye, Joss, I am flying to the earth soon. I have had a great time with you for 10 years. Although you are a robot,I still regard you as a friend. Thank you again for your help all the time.')

 function show2Dialog(){
  d2.show()
}