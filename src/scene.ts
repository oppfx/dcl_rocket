export function createScene(){

  const scene = new Entity()
  const transform = new Transform({
    position: new Vector3(0, 0, 0),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  scene.addComponentOrReplace(transform)
  engine.addEntity(scene)

  const plantSF_07 = new Entity()
  plantSF_07.setParent(scene)
  const gltfShape = new GLTFShape('models/rocket/PlantSF_07/PlantSF_07.glb')
  plantSF_07.addComponentOrReplace(gltfShape)
  const transform_2 = new Transform({
    position: new Vector3(6.5, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_07.addComponentOrReplace(transform_2)
  engine.addEntity(plantSF_07)

  const plantSF_11 = new Entity()
  plantSF_11.setParent(scene)
  const gltfShape_2 = new GLTFShape('models/rocket/PlantSF_11/PlantSF_11.glb')
  plantSF_11.addComponentOrReplace(gltfShape_2)
  const transform_3 = new Transform({
    position: new Vector3(10.5, 0, 3),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_11.addComponentOrReplace(transform_3)
  engine.addEntity(plantSF_11)

  const plantSF_03 = new Entity()
  plantSF_03.setParent(scene)
  const gltfShape_3 = new GLTFShape('models/rocket/PlantSF_03/PlantSF_03.glb')
  plantSF_03.addComponentOrReplace(gltfShape_3)
  const transform_4 = new Transform({
    position: new Vector3(3.5, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_03.addComponentOrReplace(transform_4)
  engine.addEntity(plantSF_03)

  const plantSF_01 = new Entity()
  plantSF_01.setParent(scene)
  const gltfShape_4 = new GLTFShape('models/rocket/PlantSF_01/PlantSF_01.glb')
  plantSF_01.addComponentOrReplace(gltfShape_4)
  const transform_5 = new Transform({
    position: new Vector3(14, 0, 19.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_01.addComponentOrReplace(transform_5)
  engine.addEntity(plantSF_01)

  const plantSF_03_2 = new Entity()
  plantSF_03_2.setParent(scene)
  plantSF_03_2.addComponentOrReplace(gltfShape_3)
  const transform_6 = new Transform({
    position: new Vector3(10, 0, 27.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_03_2.addComponentOrReplace(transform_6)
  engine.addEntity(plantSF_03_2)

  const dirt_03 = new Entity()
  dirt_03.setParent(scene)
  const gltfShape_5 = new GLTFShape('models/rocket/Dirt_03/Dirt_03.glb')
  dirt_03.addComponentOrReplace(gltfShape_5)
  const transform_7 = new Transform({
    position: new Vector3(13.5, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirt_03.addComponentOrReplace(transform_7)
  engine.addEntity(dirt_03)

  const groundFloorSciFi_03 = new Entity()
  groundFloorSciFi_03.setParent(scene)
  const gltfShape_6 = new GLTFShape('models/rocket/GroundFloorSciFi_03/GroundFloorSciFi_03.glb')
  groundFloorSciFi_03.addComponentOrReplace(gltfShape_6)
  const transform_8 = new Transform({
    position: new Vector3(8, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  groundFloorSciFi_03.addComponentOrReplace(transform_8)
  engine.addEntity(groundFloorSciFi_03)

  const groundFloorSciFi_03_2 = new Entity()
  groundFloorSciFi_03_2.setParent(scene)
  groundFloorSciFi_03_2.addComponentOrReplace(gltfShape_6)
  const transform_9 = new Transform({
    position: new Vector3(24, 0, 8),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  groundFloorSciFi_03_2.addComponentOrReplace(transform_9)
  engine.addEntity(groundFloorSciFi_03_2)

  const groundFloorSciFi_03_3 = new Entity()
  groundFloorSciFi_03_3.setParent(scene)
  groundFloorSciFi_03_3.addComponentOrReplace(gltfShape_6)
  const transform_10 = new Transform({
    position: new Vector3(8, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  groundFloorSciFi_03_3.addComponentOrReplace(transform_10)
  engine.addEntity(groundFloorSciFi_03_3)

  const groundFloorSciFi_03_4 = new Entity()
  groundFloorSciFi_03_4.setParent(scene)
  groundFloorSciFi_03_4.addComponentOrReplace(gltfShape_6)
  const transform_11 = new Transform({
    position: new Vector3(24, 0, 24),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  groundFloorSciFi_03_4.addComponentOrReplace(transform_11)
  engine.addEntity(groundFloorSciFi_03_4)

  const crater_02 = new Entity()
  crater_02.setParent(scene)
  const gltfShape_7 = new GLTFShape('models/rocket/Crater_02/Crater_02.glb')
  crater_02.addComponentOrReplace(gltfShape_7)
  const transform_12 = new Transform({
    position: new Vector3(24, 0, 24.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  crater_02.addComponentOrReplace(transform_12)
  engine.addEntity(crater_02)

  const crater_03 = new Entity()
  crater_03.setParent(scene)
  const gltfShape_8 = new GLTFShape('models/rocket/Crater_03/Crater_03.glb')
  crater_03.addComponentOrReplace(gltfShape_8)
  const transform_13 = new Transform({
    position: new Vector3(22.5, 0, 25.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  crater_03.addComponentOrReplace(transform_13)
  engine.addEntity(crater_03)

  const crater_03_2 = new Entity()
crater_03_2.setParent(scene)
crater_03_2.addComponentOrReplace(gltfShape_8)
const transform_27 = new Transform({
  position: new Vector3(28, 0, 8.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
crater_03_2.addComponentOrReplace(transform_27)
engine.addEntity(crater_03_2)

  const plantSF_13 = new Entity()
  plantSF_13.setParent(scene)
  const gltfShape_9 = new GLTFShape('models/rocket/PlantSF_13/PlantSF_13.glb')
  plantSF_13.addComponentOrReplace(gltfShape_9)
  const transform_14 = new Transform({
    position: new Vector3(4.5, 0, 2),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_13.addComponentOrReplace(transform_14)
  engine.addEntity(plantSF_13)

  const stone_04 = new Entity()
  stone_04.setParent(scene)
  const gltfShape_10 = new GLTFShape('models/rocket/Stone_04/Stone_04.glb')
  stone_04.addComponentOrReplace(gltfShape_10)
  const transform_15 = new Transform({
    position: new Vector3(6.5, 0, 22),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  stone_04.addComponentOrReplace(transform_15)
  engine.addEntity(stone_04)

  const plantSF_04 = new Entity()
  plantSF_04.setParent(scene)
  const gltfShape_11 = new GLTFShape('models/rocket/PlantSF_04/PlantSF_04.glb')
  plantSF_04.addComponentOrReplace(gltfShape_11)
  const transform_16 = new Transform({
    position: new Vector3(9, 0, 16.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_04.addComponentOrReplace(transform_16)
  engine.addEntity(plantSF_04)

  const plantSF_05 = new Entity()
  plantSF_05.setParent(scene)
  const gltfShape_12 = new GLTFShape('models/rocket/PlantSF_05/PlantSF_05.glb')
  plantSF_05.addComponentOrReplace(gltfShape_12)
  const transform_17 = new Transform({
    position: new Vector3(1.5, 0, 28.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_05.addComponentOrReplace(transform_17)
  engine.addEntity(plantSF_05)

  const plantSF_06 = new Entity()
  plantSF_06.setParent(scene)
  const gltfShape_13 = new GLTFShape('models/rocket/PlantSF_06/PlantSF_06.glb')
  plantSF_06.addComponentOrReplace(gltfShape_13)
  const transform_18 = new Transform({
    position: new Vector3(19, 0, 27),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_06.addComponentOrReplace(transform_18)
  engine.addEntity(plantSF_06)

  const dirt_03_2 = new Entity()
  dirt_03_2.setParent(scene)
  dirt_03_2.addComponentOrReplace(gltfShape_5)
  const transform_19 = new Transform({
    position: new Vector3(6.5, 0, 13),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirt_03_2.addComponentOrReplace(transform_19)
  engine.addEntity(dirt_03_2)

  const dirt_04 = new Entity()
  dirt_04.setParent(scene)
  const gltfShape_14 = new GLTFShape('models/rocket/Dirt_04/Dirt_04.glb')
  dirt_04.addComponentOrReplace(gltfShape_14)
  const transform_20 = new Transform({
    position: new Vector3(7, 0, 11.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  dirt_04.addComponentOrReplace(transform_20)
  engine.addEntity(dirt_04)

  const plantSF_02 = new Entity()
  plantSF_02.setParent(scene)
  const gltfShape_15 = new GLTFShape('models/rocket/PlantSF_02/PlantSF_02.glb')
  plantSF_02.addComponentOrReplace(gltfShape_15)
  const transform_21 = new Transform({
    position: new Vector3(14.5, 0, 26),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_02.addComponentOrReplace(transform_21)
  engine.addEntity(plantSF_02)

  const plantSF_02_2 = new Entity()
  plantSF_02_2.setParent(scene)
  plantSF_02_2.addComponentOrReplace(gltfShape_15)
  const transform_22 = new Transform({
    position: new Vector3(17.5, 0, 18.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_02_2.addComponentOrReplace(transform_22)
  engine.addEntity(plantSF_02_2)

  const planet_01 = new Entity()
  planet_01.setParent(scene)
  const gltfShape_16 = new GLTFShape('models/rocket/Planet_01/Planet_01.glb')
  planet_01.addComponentOrReplace(gltfShape_16)
  const transform_23 = new Transform({
    position: new Vector3(4.5, 0, 23),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  planet_01.addComponentOrReplace(transform_23)
  engine.addEntity(planet_01)

  const stone_05 = new Entity()
  stone_05.setParent(scene)
  const gltfShape_17 = new GLTFShape('models/rocket/Stone_05/Stone_05.glb')
  stone_05.addComponentOrReplace(gltfShape_17)
  const transform_24 = new Transform({
    position: new Vector3(10.5, 0, 6.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  stone_05.addComponentOrReplace(transform_24)
  engine.addEntity(stone_05)

  const stone_04_2 = new Entity()
  stone_04_2.setParent(scene)
  stone_04_2.addComponentOrReplace(gltfShape_10)
  const transform_25 = new Transform({
    position: new Vector3(7, 0, 20.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  stone_04_2.addComponentOrReplace(transform_25)
  engine.addEntity(stone_04_2)

// //火星车
const rover_01 = new Entity()
rover_01.setParent(scene)
const gltfShape_28 = new GLTFShape('models/rocket/Rover_01/Rover_01.glb')
rover_01.addComponentOrReplace(gltfShape_28)
const transform_42 = new Transform({
  position: new Vector3(11, 0, 13),
  rotation: Quaternion.Euler(0, 20, 0),
  scale: new Vector3(1, 1, 1)
})
rover_01.addComponentOrReplace(transform_42)
engine.addEntity(rover_01)



  const plant_02 = new Entity()
  plant_02.setParent(scene)
  const gltfShape_40 = new GLTFShape('models/rocket/Plant_02/Plant_02.glb')
  plant_02.addComponentOrReplace(gltfShape_40)
  const transform_57 = new Transform({
    position: new Vector3(9.5, 0, 20.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plant_02.addComponentOrReplace(transform_57)
  engine.addEntity(plant_02)

  const plant_01 = new Entity()
  plant_01.setParent(scene)
  const gltfShape_41 = new GLTFShape('models/rocket/Plant_01/Plant_01.glb')
  plant_01.addComponentOrReplace(gltfShape_41)
  const transform_58 = new Transform({
    position: new Vector3(2, 0, 17.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plant_01.addComponentOrReplace(transform_58)
  engine.addEntity(plant_01)

  const plantSF_09 = new Entity()
  plantSF_09.setParent(scene)
  const gltfShape_42 = new GLTFShape('models/rocket/PlantSF_09/PlantSF_09.glb')
  plantSF_09.addComponentOrReplace(gltfShape_42)
  const transform_59 = new Transform({
    position: new Vector3(22.5, 0, 29.5),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  plantSF_09.addComponentOrReplace(transform_59)
  engine.addEntity(plantSF_09)

  const crater_01 = new Entity()
  crater_01.setParent(scene)
  const gltfShape_18 = new GLTFShape('models/rocket/Crater_01/Crater_01.glb')
  crater_01.addComponentOrReplace(gltfShape_18)
  const transform_26 = new Transform({
    position: new Vector3(7, 0, 6),
    rotation: new Quaternion(0, 0, 0, 1),
    scale: new Vector3(1, 1, 1)
  })
  crater_01.addComponentOrReplace(transform_26)
  engine.addEntity(crater_01)


//   const hAL9000_01 = new Entity()
//   // hAL9000_01.setParent(scene)
//   const gltfShape_44 = new GLTFShape('models/rocket/HAL9000_01/HAL9000_01.glb')
//   hAL9000_01.addComponentOrReplace(gltfShape_44)
//   const transform_61 = new Transform({
//     position: new Vector3(23, 4.5, 10.5),
//     rotation: new Quaternion(0.6935199226610737, -0.13794968964147147, -0.1379496896414715, 0.6935199226610738),
//     scale: new Vector3(1, 1, 1)
//   })
//   hAL9000_01.addComponentOrReplace(transform_61)
//   engine.addEntity(hAL9000_01)

// //未使用
// const lightFloor_01 = new Entity()
// // lightFloor_01.setParent(scene)
// const gltfShape_20 = new GLTFShape('models/rocket/LightFloor_01/LightFloor_01.glb')
// lightFloor_01.addComponentOrReplace(gltfShape_20)
// const transform_29 = new Transform({
//   position: new Vector3(15.5, 0, 11.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// lightFloor_01.addComponentOrReplace(transform_29)
// engine.addEntity(lightFloor_01)

// const lightFloor_01_2 = new Entity()
// // lightFloor_01_2.setParent(scene)
// lightFloor_01_2.addComponentOrReplace(gltfShape_20)
// const transform_30 = new Transform({
//   position: new Vector3(11.5, 0, 10.5),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// lightFloor_01_2.addComponentOrReplace(transform_30)
// engine.addEntity(lightFloor_01_2)

// const lightFloor_01_3 = new Entity()
// // lightFloor_01_3.setParent(scene)
// lightFloor_01_3.addComponentOrReplace(gltfShape_20)
// const transform_31 = new Transform({
//   position: new Vector3(14, 0, 11),
//   rotation: new Quaternion(0, 0, 0, 1),
//   scale: new Vector3(1, 1, 1)
// })
// lightFloor_01_3.addComponentOrReplace(transform_31)
// engine.addEntity(lightFloor_01_3)

// const light_01 = new Entity()
// const gltfShape_21 = new GLTFShape('models/rocket/Light_01/Light_01.glb')
// light_01.addComponentOrReplace(gltfShape_21)
// const transform_32 = new Transform({
  //   position: new Vector3(19, 0, 9.5),
  //   rotation: new Quaternion(0, 0, 0, 1),
  //   scale: new Vector3(1, 1, 1)
  // })
  // light_01.addComponentOrReplace(transform_32)
  // engine.addEntity(light_01)


}