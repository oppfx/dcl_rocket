import { SimpleDialog } from "./modules/simpleDialog";


export function Dialog(str?:string){
  let gameCanvas=new UICanvas()
  const dialogConfig: SimpleDialog.DialogConfig = {
      canvas: gameCanvas,
      leftPortrait: {
          width: 256,
          height: 256,
          sourceWidth: 256,
          sourceHeight: 256,
          positionX: "-17%"
      },
      rightPortrait: {
          width: 256,
          height: 256,
          sourceWidth: 256,
          sourceHeight: 256,
          positionX: "15%"
      },
      dialogText:{
          width: "30%",
          height: "30%",
          textSpeed: 15,
          textIdleTime: 5,
          textConfig: {fontSize: 16, paddingLeft:25, paddingRight:25},
          background: new Texture("images/dialogs/textContainer.png"),
          backgroundConfig: {sourceWidth: 512, sourceHeight:257}
      },
      optionsContainer:{}
  }
  let d=new SimpleDialog(dialogConfig);
  if(str){
    d.setText(str)
  }
  //添加关闭
  let panelCloseButton = new UIImage(d.dialogContainer, new Texture("images/button_close.png"))
    panelCloseButton.sourceWidth = 92
    panelCloseButton.sourceHeight = 92
    panelCloseButton.positionX = 512*0.35
    panelCloseButton.positionY = 257*0.45
    panelCloseButton.width = 32
    panelCloseButton.height = 32
    panelCloseButton.onClick = new OnClick(event=>{
        d.hide()
    })
  return d
}

export function AddGLTF(path: string, position: Vector3, rotation: Vector3, scale?: Vector3, parent?: Entity) {
  let entity = new Entity();

  let shape = new GLTFShape(path);
  entity.addComponent(shape);

  let transform = new Transform();
  transform.position = position;
  transform.rotation = Quaternion.Euler(rotation.x, rotation.y, rotation.z);
  transform.scale =scale?scale:Vector3.One()
 
  entity.addComponent(transform);

  if(parent){
    entity.setParent(parent)
  }
  // if (clip){
  //   const animator = new Animator();
  //   let animation = new AnimationState(clip);
  //   animator.addClip(animation);
  //   entity.addComponent(animator);
  //   animation.play();
  // }


  engine.addEntity(entity);
}