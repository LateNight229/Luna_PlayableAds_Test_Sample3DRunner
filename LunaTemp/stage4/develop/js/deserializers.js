var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.JointSpring' )
  var i717 = data
  i716.spring = i717[0]
  i716.damper = i717[1]
  i716.targetPosition = i717[2]
  return i716
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.JointMotor' )
  var i719 = data
  i718.m_TargetVelocity = i719[0]
  i718.m_Force = i719[1]
  i718.m_FreeSpin = i719[2]
  return i718
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.JointLimits' )
  var i721 = data
  i720.m_Min = i721[0]
  i720.m_Max = i721[1]
  i720.m_Bounciness = i721[2]
  i720.m_BounceMinVelocity = i721[3]
  i720.m_ContactDistance = i721[4]
  i720.minBounce = i721[5]
  i720.maxBounce = i721[6]
  return i720
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.JointDrive' )
  var i723 = data
  i722.m_PositionSpring = i723[0]
  i722.m_PositionDamper = i723[1]
  i722.m_MaximumForce = i723[2]
  i722.m_UseAcceleration = i723[3]
  return i722
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i725 = data
  i724.m_Spring = i725[0]
  i724.m_Damper = i725[1]
  return i724
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i727 = data
  i726.m_Limit = i727[0]
  i726.m_Bounciness = i727[1]
  i726.m_ContactDistance = i727[2]
  return i726
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i729 = data
  i728.m_ExtremumSlip = i729[0]
  i728.m_ExtremumValue = i729[1]
  i728.m_AsymptoteSlip = i729[2]
  i728.m_AsymptoteValue = i729[3]
  i728.m_Stiffness = i729[4]
  return i728
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i731 = data
  i730.m_LowerAngle = i731[0]
  i730.m_UpperAngle = i731[1]
  return i730
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i733 = data
  i732.m_MotorSpeed = i733[0]
  i732.m_MaximumMotorTorque = i733[1]
  return i732
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i735 = data
  i734.m_DampingRatio = i735[0]
  i734.m_Frequency = i735[1]
  i734.m_Angle = i735[2]
  return i734
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i737 = data
  i736.m_LowerTranslation = i737[0]
  i736.m_UpperTranslation = i737[1]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i739 = data
  i738.name = i739[0]
  i738.width = i739[1]
  i738.height = i739[2]
  i738.mipmapCount = i739[3]
  i738.anisoLevel = i739[4]
  i738.filterMode = i739[5]
  i738.hdr = !!i739[6]
  i738.format = i739[7]
  i738.wrapMode = i739[8]
  i738.alphaIsTransparency = !!i739[9]
  i738.alphaSource = i739[10]
  i738.graphicsFormat = i739[11]
  i738.sRGBTexture = !!i739[12]
  i738.desiredColorSpace = i739[13]
  i738.wrapU = i739[14]
  i738.wrapV = i739[15]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i740 = root || new pc.UnityMaterial()
  var i741 = data
  i740.name = i741[0]
  request.r(i741[1], i741[2], 0, i740, 'shader')
  i740.renderQueue = i741[3]
  i740.enableInstancing = !!i741[4]
  var i743 = i741[5]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i743[i + 0]) );
  }
  i740.floatParameters = i742
  var i745 = i741[6]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i745[i + 0]) );
  }
  i740.colorParameters = i744
  var i747 = i741[7]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i747[i + 0]) );
  }
  i740.vectorParameters = i746
  var i749 = i741[8]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i749[i + 0]) );
  }
  i740.textureParameters = i748
  var i751 = i741[9]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i751[i + 0]) );
  }
  i740.materialFlags = i750
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i755 = data
  i754.name = i755[0]
  i754.value = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i759 = data
  i758.name = i759[0]
  i758.value = new pc.Color(i759[1], i759[2], i759[3], i759[4])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i763 = data
  i762.name = i763[0]
  i762.value = new pc.Vec4( i763[1], i763[2], i763[3], i763[4] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i767 = data
  i766.name = i767[0]
  request.r(i767[1], i767[2], 0, i766, 'value')
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i771 = data
  i770.name = i771[0]
  i770.enabled = !!i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i773 = data
  i772.name = i773[0]
  i772.halfPrecision = !!i773[1]
  i772.useSimplification = !!i773[2]
  i772.useUInt32IndexFormat = !!i773[3]
  i772.vertexCount = i773[4]
  i772.aabb = i773[5]
  var i775 = i773[6]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( !!i775[i + 0] );
  }
  i772.streams = i774
  i772.vertices = i773[7]
  var i777 = i773[8]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i777[i + 0]) );
  }
  i772.subMeshes = i776
  var i779 = i773[9]
  var i778 = []
  for(var i = 0; i < i779.length; i += 16) {
    i778.push( new pc.Mat4().setData(i779[i + 0], i779[i + 1], i779[i + 2], i779[i + 3],  i779[i + 4], i779[i + 5], i779[i + 6], i779[i + 7],  i779[i + 8], i779[i + 9], i779[i + 10], i779[i + 11],  i779[i + 12], i779[i + 13], i779[i + 14], i779[i + 15]) );
  }
  i772.bindposes = i778
  var i781 = i773[10]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i781[i + 0]) );
  }
  i772.blendShapes = i780
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i787 = data
  i786.triangles = i787[0]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i793 = data
  i792.name = i793[0]
  var i795 = i793[1]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i795[i + 0]) );
  }
  i792.frames = i794
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i797 = data
  i796.position = new pc.Vec3( i797[0], i797[1], i797[2] )
  i796.scale = new pc.Vec3( i797[3], i797[4], i797[5] )
  i796.rotation = new pc.Quat(i797[6], i797[7], i797[8], i797[9])
  return i796
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i798 = root || request.c( 'CoinEffectMove' )
  var i799 = data
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'sharedMesh')
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'additionalVertexStreams')
  i802.enabled = !!i803[2]
  request.r(i803[3], i803[4], 0, i802, 'sharedMaterial')
  var i805 = i803[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i802.sharedMaterials = i804
  i802.receiveShadows = !!i803[6]
  i802.shadowCastingMode = i803[7]
  i802.sortingLayerID = i803[8]
  i802.sortingOrder = i803[9]
  i802.lightmapIndex = i803[10]
  i802.lightmapSceneIndex = i803[11]
  i802.lightmapScaleOffset = new pc.Vec4( i803[12], i803[13], i803[14], i803[15] )
  i802.lightProbeUsage = i803[16]
  i802.reflectionProbeUsage = i803[17]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i809 = data
  i808.name = i809[0]
  i808.tagId = i809[1]
  i808.enabled = !!i809[2]
  i808.isStatic = !!i809[3]
  i808.layer = i809[4]
  return i808
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i810 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.m_LevelManagers = i812
  return i810
}

Deserializers["HyperCasual.Runner.PlayerController"] = function (request, data, root) {
  var i816 = root || request.c( 'HyperCasual.Runner.PlayerController' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'm_Animator')
  request.r(i817[2], i817[3], 0, i816, 'm_SkinnedMeshRenderer')
  i816.m_PlayerSpeed = i817[4]
  i816.m_CustomPlayerSpeed = i817[5]
  i816.m_AccelerationSpeed = i817[6]
  i816.m_DecelerationSpeed = i817[7]
  i816.m_HorizontalSpeedFactor = i817[8]
  i816.m_ScaleVelocity = i817[9]
  i816.m_AutoMoveForward = !!i817[10]
  i816.m_MaxXPosition = i817[11]
  i816.m_KeepMovingOnceStarted = !!i817[12]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i819 = data
  i818.center = new pc.Vec3( i819[0], i819[1], i819[2] )
  i818.radius = i819[3]
  i818.height = i819[4]
  i818.direction = i819[5]
  i818.enabled = !!i819[6]
  i818.isTrigger = !!i819[7]
  request.r(i819[8], i819[9], 0, i818, 'material')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i821 = data
  i820.mass = i821[0]
  i820.drag = i821[1]
  i820.angularDrag = i821[2]
  i820.useGravity = !!i821[3]
  i820.isKinematic = !!i821[4]
  i820.constraints = i821[5]
  i820.maxAngularVelocity = i821[6]
  i820.collisionDetectionMode = i821[7]
  i820.interpolation = i821[8]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'animatorController')
  request.r(i823[2], i823[3], 0, i822, 'avatar')
  i822.updateMode = i823[4]
  i822.hasTransformHierarchy = !!i823[5]
  i822.applyRootMotion = !!i823[6]
  var i825 = i823[7]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i822.humanBones = i824
  i822.enabled = !!i823[8]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'sharedMesh')
  var i831 = i829[2]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.bones = i830
  i828.updateWhenOffscreen = !!i829[3]
  i828.localBounds = i829[4]
  request.r(i829[5], i829[6], 0, i828, 'rootBone')
  var i833 = i829[7]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i833[i + 0]) );
  }
  i828.blendShapesWeights = i832
  i828.enabled = !!i829[8]
  request.r(i829[9], i829[10], 0, i828, 'sharedMaterial')
  var i835 = i829[11]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i828.sharedMaterials = i834
  i828.receiveShadows = !!i829[12]
  i828.shadowCastingMode = i829[13]
  i828.sortingLayerID = i829[14]
  i828.sortingOrder = i829[15]
  i828.lightmapIndex = i829[16]
  i828.lightmapSceneIndex = i829[17]
  i828.lightmapScaleOffset = new pc.Vec4( i829[18], i829[19], i829[20], i829[21] )
  i828.lightProbeUsage = i829[22]
  i828.reflectionProbeUsage = i829[23]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i839 = data
  i838.weight = i839[0]
  return i838
}

Deserializers["HyperCasual.Runner.InputManager"] = function (request, data, root) {
  var i840 = root || request.c( 'HyperCasual.Runner.InputManager' )
  var i841 = data
  i840.m_InputSensitivity = i841[0]
  return i840
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i842 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i843 = data
  i842.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i843[0], i842.m_GoldEventListener)
  i842.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i843[1], i842.m_KeyEventListener)
  i842.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i843[2], i842.m_WinEventListener)
  return i842
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i844 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'm_Event')
  i844.EventHandler = request.d('System.Action', i845[2], i844.EventHandler)
  return i844
}

Deserializers["System.Action"] = function (request, data, root) {
  var i846 = root || request.c( 'System.Action' )
  var i847 = data
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i849 = data
  i848.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i849[0], i848.main)
  i848.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i849[1], i848.colorBySpeed)
  i848.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i849[2], i848.colorOverLifetime)
  i848.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i849[3], i848.emission)
  i848.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i849[4], i848.rotationBySpeed)
  i848.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i849[5], i848.rotationOverLifetime)
  i848.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i849[6], i848.shape)
  i848.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i849[7], i848.sizeBySpeed)
  i848.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i849[8], i848.sizeOverLifetime)
  i848.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i849[9], i848.textureSheetAnimation)
  i848.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i849[10], i848.velocityOverLifetime)
  i848.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i849[11], i848.noise)
  i848.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i849[12], i848.inheritVelocity)
  i848.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i849[13], i848.forceOverLifetime)
  i848.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i849[14], i848.limitVelocityOverLifetime)
  i848.useAutoRandomSeed = !!i849[15]
  i848.randomSeed = i849[16]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i850 = root || new pc.ParticleSystemMain()
  var i851 = data
  i850.duration = i851[0]
  i850.loop = !!i851[1]
  i850.prewarm = !!i851[2]
  i850.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[3], i850.startDelay)
  i850.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[4], i850.startLifetime)
  i850.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[5], i850.startSpeed)
  i850.startSize3D = !!i851[6]
  i850.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[7], i850.startSizeX)
  i850.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[8], i850.startSizeY)
  i850.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[9], i850.startSizeZ)
  i850.startRotation3D = !!i851[10]
  i850.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[11], i850.startRotationX)
  i850.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[12], i850.startRotationY)
  i850.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[13], i850.startRotationZ)
  i850.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i851[14], i850.startColor)
  i850.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i851[15], i850.gravityModifier)
  i850.simulationSpace = i851[16]
  request.r(i851[17], i851[18], 0, i850, 'customSimulationSpace')
  i850.simulationSpeed = i851[19]
  i850.useUnscaledTime = !!i851[20]
  i850.scalingMode = i851[21]
  i850.playOnAwake = !!i851[22]
  i850.maxParticles = i851[23]
  i850.emitterVelocityMode = i851[24]
  i850.stopAction = i851[25]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i852 = root || new pc.MinMaxCurve()
  var i853 = data
  i852.mode = i853[0]
  i852.curveMin = new pc.AnimationCurve( { keys_flow: i853[1] } )
  i852.curveMax = new pc.AnimationCurve( { keys_flow: i853[2] } )
  i852.curveMultiplier = i853[3]
  i852.constantMin = i853[4]
  i852.constantMax = i853[5]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i854 = root || new pc.MinMaxGradient()
  var i855 = data
  i854.mode = i855[0]
  i854.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i855[1], i854.gradientMin)
  i854.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i855[2], i854.gradientMax)
  i854.colorMin = new pc.Color(i855[3], i855[4], i855[5], i855[6])
  i854.colorMax = new pc.Color(i855[7], i855[8], i855[9], i855[10])
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i857 = data
  i856.mode = i857[0]
  var i859 = i857[1]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i859[i + 0]) );
  }
  i856.colorKeys = i858
  var i861 = i857[2]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i861[i + 0]) );
  }
  i856.alphaKeys = i860
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i862 = root || new pc.ParticleSystemColorBySpeed()
  var i863 = data
  i862.enabled = !!i863[0]
  i862.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i863[1], i862.color)
  i862.range = new pc.Vec2( i863[2], i863[3] )
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i867 = data
  i866.color = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.time = i867[4]
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i871 = data
  i870.alpha = i871[0]
  i870.time = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i872 = root || new pc.ParticleSystemColorOverLifetime()
  var i873 = data
  i872.enabled = !!i873[0]
  i872.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i873[1], i872.color)
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i874 = root || new pc.ParticleSystemEmitter()
  var i875 = data
  i874.enabled = !!i875[0]
  i874.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[1], i874.rateOverTime)
  i874.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i875[2], i874.rateOverDistance)
  var i877 = i875[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i877[i + 0]) );
  }
  i874.bursts = i876
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i880 = root || new pc.ParticleSystemBurst()
  var i881 = data
  i880.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i881[0], i880.count)
  i880.cycleCount = i881[1]
  i880.minCount = i881[2]
  i880.maxCount = i881[3]
  i880.repeatInterval = i881[4]
  i880.time = i881[5]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i882 = root || new pc.ParticleSystemRotationBySpeed()
  var i883 = data
  i882.enabled = !!i883[0]
  i882.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[1], i882.x)
  i882.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[2], i882.y)
  i882.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i883[3], i882.z)
  i882.separateAxes = !!i883[4]
  i882.range = new pc.Vec2( i883[5], i883[6] )
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i884 = root || new pc.ParticleSystemRotationOverLifetime()
  var i885 = data
  i884.enabled = !!i885[0]
  i884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[1], i884.x)
  i884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[2], i884.y)
  i884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i885[3], i884.z)
  i884.separateAxes = !!i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i886 = root || new pc.ParticleSystemShape()
  var i887 = data
  i886.enabled = !!i887[0]
  i886.shapeType = i887[1]
  i886.randomDirectionAmount = i887[2]
  i886.sphericalDirectionAmount = i887[3]
  i886.randomPositionAmount = i887[4]
  i886.alignToDirection = !!i887[5]
  i886.radius = i887[6]
  i886.radiusMode = i887[7]
  i886.radiusSpread = i887[8]
  i886.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[9], i886.radiusSpeed)
  i886.radiusThickness = i887[10]
  i886.angle = i887[11]
  i886.length = i887[12]
  i886.boxThickness = new pc.Vec3( i887[13], i887[14], i887[15] )
  i886.meshShapeType = i887[16]
  request.r(i887[17], i887[18], 0, i886, 'mesh')
  request.r(i887[19], i887[20], 0, i886, 'meshRenderer')
  request.r(i887[21], i887[22], 0, i886, 'skinnedMeshRenderer')
  i886.useMeshMaterialIndex = !!i887[23]
  i886.meshMaterialIndex = i887[24]
  i886.useMeshColors = !!i887[25]
  i886.normalOffset = i887[26]
  i886.arc = i887[27]
  i886.arcMode = i887[28]
  i886.arcSpread = i887[29]
  i886.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i887[30], i886.arcSpeed)
  i886.donutRadius = i887[31]
  i886.position = new pc.Vec3( i887[32], i887[33], i887[34] )
  i886.rotation = new pc.Vec3( i887[35], i887[36], i887[37] )
  i886.scale = new pc.Vec3( i887[38], i887[39], i887[40] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemSizeBySpeed()
  var i889 = data
  i888.enabled = !!i889[0]
  i888.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[1], i888.x)
  i888.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[2], i888.y)
  i888.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.z)
  i888.separateAxes = !!i889[4]
  i888.range = new pc.Vec2( i889[5], i889[6] )
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i890 = root || new pc.ParticleSystemSizeOverLifetime()
  var i891 = data
  i890.enabled = !!i891[0]
  i890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[1], i890.x)
  i890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[2], i890.y)
  i890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i891[3], i890.z)
  i890.separateAxes = !!i891[4]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i892 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i893 = data
  i892.enabled = !!i893[0]
  i892.mode = i893[1]
  i892.animation = i893[2]
  i892.numTilesX = i893[3]
  i892.numTilesY = i893[4]
  i892.useRandomRow = !!i893[5]
  i892.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[6], i892.frameOverTime)
  i892.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i893[7], i892.startFrame)
  i892.cycleCount = i893[8]
  i892.rowIndex = i893[9]
  i892.flipU = i893[10]
  i892.flipV = i893[11]
  i892.spriteCount = i893[12]
  var i895 = i893[13]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.sprites = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i898 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i899 = data
  i898.enabled = !!i899[0]
  i898.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[1], i898.x)
  i898.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[2], i898.y)
  i898.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[3], i898.z)
  i898.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[4], i898.radial)
  i898.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[5], i898.speedModifier)
  i898.space = i899[6]
  i898.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[7], i898.orbitalX)
  i898.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[8], i898.orbitalY)
  i898.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[9], i898.orbitalZ)
  i898.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[10], i898.orbitalOffsetX)
  i898.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[11], i898.orbitalOffsetY)
  i898.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i899[12], i898.orbitalOffsetZ)
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemNoise()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.separateAxes = !!i901[1]
  i900.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[2], i900.strengthX)
  i900.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[3], i900.strengthY)
  i900.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[4], i900.strengthZ)
  i900.frequency = i901[5]
  i900.damping = !!i901[6]
  i900.octaveCount = i901[7]
  i900.octaveMultiplier = i901[8]
  i900.octaveScale = i901[9]
  i900.quality = i901[10]
  i900.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[11], i900.scrollSpeed)
  i900.scrollSpeedMultiplier = i901[12]
  i900.remapEnabled = !!i901[13]
  i900.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[14], i900.remapX)
  i900.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[15], i900.remapY)
  i900.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[16], i900.remapZ)
  i900.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[17], i900.positionAmount)
  i900.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[18], i900.rotationAmount)
  i900.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i901[19], i900.sizeAmount)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i902 = root || new pc.ParticleSystemInheritVelocity()
  var i903 = data
  i902.enabled = !!i903[0]
  i902.mode = i903[1]
  i902.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i903[2], i902.curve)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i904 = root || new pc.ParticleSystemForceOverLifetime()
  var i905 = data
  i904.enabled = !!i905[0]
  i904.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[1], i904.x)
  i904.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[2], i904.y)
  i904.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i905[3], i904.z)
  i904.space = i905[4]
  i904.randomized = !!i905[5]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i906 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i907 = data
  i906.enabled = !!i907[0]
  i906.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[1], i906.limit)
  i906.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[2], i906.limitX)
  i906.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[3], i906.limitY)
  i906.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[4], i906.limitZ)
  i906.dampen = i907[5]
  i906.separateAxes = !!i907[6]
  i906.space = i907[7]
  i906.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i907[8], i906.drag)
  i906.multiplyDragByParticleSize = !!i907[9]
  i906.multiplyDragByParticleVelocity = !!i907[10]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, 'mesh')
  i908.meshCount = i909[2]
  i908.activeVertexStreamsCount = i909[3]
  i908.alignment = i909[4]
  i908.renderMode = i909[5]
  i908.sortMode = i909[6]
  i908.lengthScale = i909[7]
  i908.velocityScale = i909[8]
  i908.cameraVelocityScale = i909[9]
  i908.normalDirection = i909[10]
  i908.sortingFudge = i909[11]
  i908.minParticleSize = i909[12]
  i908.maxParticleSize = i909[13]
  i908.pivot = new pc.Vec3( i909[14], i909[15], i909[16] )
  request.r(i909[17], i909[18], 0, i908, 'trailMaterial')
  i908.applyActiveColorSpace = !!i909[19]
  i908.enabled = !!i909[20]
  request.r(i909[21], i909[22], 0, i908, 'sharedMaterial')
  var i911 = i909[23]
  var i910 = []
  for(var i = 0; i < i911.length; i += 2) {
  request.r(i911[i + 0], i911[i + 1], 2, i910, '')
  }
  i908.sharedMaterials = i910
  i908.receiveShadows = !!i909[24]
  i908.shadowCastingMode = i909[25]
  i908.sortingLayerID = i909[26]
  i908.sortingOrder = i909[27]
  i908.lightmapIndex = i909[28]
  i908.lightmapSceneIndex = i909[29]
  i908.lightmapScaleOffset = new pc.Vec4( i909[30], i909[31], i909[32], i909[33] )
  i908.lightProbeUsage = i909[34]
  i908.reflectionProbeUsage = i909[35]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i913 = data
  i912.name = i913[0]
  i912.atlasId = i913[1]
  i912.mipmapCount = i913[2]
  i912.hdr = !!i913[3]
  i912.size = i913[4]
  i912.anisoLevel = i913[5]
  i912.filterMode = i913[6]
  var i915 = i913[7]
  var i914 = []
  for(var i = 0; i < i915.length; i += 4) {
    i914.push( UnityEngine.Rect.MinMaxRect(i915[i + 0], i915[i + 1], i915[i + 2], i915[i + 3]) );
  }
  i912.rects = i914
  i912.wrapU = i913[8]
  i912.wrapV = i913[9]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i919 = data
  i918.name = i919[0]
  i918.index = i919[1]
  i918.startup = !!i919[2]
  return i918
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'PlayableSettings' )
  var i921 = data
  i920.m_SkipMainMenu = !!i921[0]
  i920.m_UseCTAScreen = !!i921[1]
  i920.m_EndcardActivationSendsToStore = !!i921[2]
  i920.m_ShowEndcardAfterXTaps = !!i921[3]
  i920.m_TapsBeforeShowingEndcard = i921[4]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i923 = data
  i922.pivot = new pc.Vec2( i923[0], i923[1] )
  i922.anchorMin = new pc.Vec2( i923[2], i923[3] )
  i922.anchorMax = new pc.Vec2( i923[4], i923[5] )
  i922.sizeDelta = new pc.Vec2( i923[6], i923[7] )
  i922.anchoredPosition3D = new pc.Vec3( i923[8], i923[9], i923[10] )
  i922.rotation = new pc.Quat(i923[11], i923[12], i923[13], i923[14])
  i922.scale = new pc.Vec3( i923[15], i923[16], i923[17] )
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i925 = data
  i924.planeDistance = i925[0]
  i924.referencePixelsPerUnit = i925[1]
  i924.isFallbackOverlay = !!i925[2]
  i924.renderMode = i925[3]
  i924.renderOrder = i925[4]
  i924.sortingLayerName = i925[5]
  i924.sortingOrder = i925[6]
  i924.scaleFactor = i925[7]
  request.r(i925[8], i925[9], 0, i924, 'worldCamera')
  i924.overrideSorting = !!i925[10]
  i924.pixelPerfect = !!i925[11]
  i924.targetDisplay = i925[12]
  i924.overridePixelPerfect = !!i925[13]
  i924.enabled = !!i925[14]
  return i924
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i926 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i927 = data
  i926.m_UiScaleMode = i927[0]
  i926.m_ReferencePixelsPerUnit = i927[1]
  i926.m_ScaleFactor = i927[2]
  i926.m_ReferenceResolution = new pc.Vec2( i927[3], i927[4] )
  i926.m_ScreenMatchMode = i927[5]
  i926.m_MatchWidthOrHeight = i927[6]
  i926.m_PhysicalUnit = i927[7]
  i926.m_FallbackScreenDPI = i927[8]
  i926.m_DefaultSpriteDPI = i927[9]
  i926.m_DynamicPixelsPerUnit = i927[10]
  i926.m_PresetInfoIsWorld = !!i927[11]
  return i926
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i928 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i929 = data
  i928.m_IgnoreReversedGraphics = !!i929[0]
  i928.m_BlockingObjects = i929[1]
  i928.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i929[2] )
  return i928
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i930 = root || request.c( 'EndCardController' )
  var i931 = data
  i930.alwaysShowEndcardTESTING = !!i931[0]
  i930.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i931[1], i930.EndCardOpenedEvent)
  i930._backgroundColor = new pc.Color(i931[2], i931[3], i931[4], i931[5])
  request.r(i931[6], i931[7], 0, i930, '_backgroundTexture')
  request.r(i931[8], i931[9], 0, i930, '_iconTexture')
  i930._iconColor = new pc.Color(i931[10], i931[11], i931[12], i931[13])
  request.r(i931[14], i931[15], 0, i930, '_buttonTexture')
  i930._buttonColor = new pc.Color(i931[16], i931[17], i931[18], i931[19])
  i930._endCardDescriptionText = i931[20]
  i930._CTAButtonText = i931[21]
  i930._useBestFitOnCTA = !!i931[22]
  i930._CTAFontColor = new pc.Color(i931[23], i931[24], i931[25], i931[26])
  i930._descriptionFontColor = new pc.Color(i931[27], i931[28], i931[29], i931[30])
  request.r(i931[31], i931[32], 0, i930, '_CTAFont')
  request.r(i931[33], i931[34], 0, i930, '_descriptionFont')
  i930._CTAFontSize = i931[35]
  i930._descriptionFontSize = i931[36]
  i930._centerDescriptionX = !!i931[37]
  i930._centerDescriptionY = !!i931[38]
  i930._centerButtonX = !!i931[39]
  i930._centerButtonY = !!i931[40]
  i930._descriptionPositionX = i931[41]
  i930._descriptionPositionY = i931[42]
  i930._buttonPositionX = i931[43]
  i930._buttonPositionY = i931[44]
  i930._CTAFontSizeLandscape = i931[45]
  i930._descriptionFontSizeLandscape = i931[46]
  i930._centerDescriptionXLandscape = !!i931[47]
  i930._centerDescriptionYLandscape = !!i931[48]
  i930._centerButtonXLandscape = !!i931[49]
  i930._centerButtonYLandscape = !!i931[50]
  i930._descriptionPositionXLandscape = i931[51]
  i930._descriptionPositionYLandscape = i931[52]
  i930._buttonPositionXLandscape = i931[53]
  i930._buttonPositionYLandscape = i931[54]
  i930._centerIconX = !!i931[55]
  i930._centerIconY = !!i931[56]
  i930._iconPositionX = i931[57]
  i930._iconPositionY = i931[58]
  i930._iconSize = i931[59]
  i930._roundEdgesOnIcon = !!i931[60]
  i930._centerIconXLandscape = !!i931[61]
  i930._centerIconYLandscape = !!i931[62]
  i930._iconPositionXLandscape = i931[63]
  i930._iconPositionYLandscape = i931[64]
  i930._iconSizeLandscape = i931[65]
  i930._roundEdgesOnIconLandscape = !!i931[66]
  i930._endCardClickableOptions = i931[67]
  i930._buttonAnimationType = i931[68]
  i930._endCardPortraitAnimationType = i931[69]
  i930._endCardLandscapeAnimationType = i931[70]
  request.r(i931[71], i931[72], 0, i930, '_backgroundImage')
  request.r(i931[73], i931[74], 0, i930, '_CTAButton')
  request.r(i931[75], i931[76], 0, i930, '_ScreenCTAButton')
  request.r(i931[77], i931[78], 0, i930, '_CTAButtonTextText')
  request.r(i931[79], i931[80], 0, i930, '_EndCardDescriptionTextText')
  request.r(i931[81], i931[82], 0, i930, '_maskIcon')
  request.r(i931[83], i931[84], 0, i930, '_iconRect')
  request.r(i931[85], i931[86], 0, i930, '_iconRectMask')
  request.r(i931[87], i931[88], 0, i930, '_descriptionRect')
  request.r(i931[89], i931[90], 0, i930, '_buttonRect')
  request.r(i931[91], i931[92], 0, i930, '_CTAButtonAnimator')
  request.r(i931[93], i931[94], 0, i930, '_endCardAnimator')
  request.r(i931[95], i931[96], 0, i930, '_iconImage')
  request.r(i931[97], i931[98], 0, i930, '_CTAButtonImage')
  return i930
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i932 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i933 = data
  i932.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i933[0], i932.m_PersistentCalls)
  return i932
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i934 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i935 = data
  var i937 = i935[0]
  var i936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i937.length; i += 1) {
    i936.add(request.d('UnityEngine.Events.PersistentCall', i937[i + 0]));
  }
  i934.m_Calls = i936
  return i934
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i940 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'm_Target')
  i940.m_TargetAssemblyTypeName = i941[2]
  i940.m_MethodName = i941[3]
  i940.m_Mode = i941[4]
  i940.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i941[5], i940.m_Arguments)
  i940.m_CallState = i941[6]
  return i940
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i942 = root || request.c( 'EndCardSetScale' )
  var i943 = data
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i945 = data
  i944.cullTransparentMesh = !!i945[0]
  return i944
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i946 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i947 = data
  i946.m_AspectMode = i947[0]
  i946.m_AspectRatio = i947[1]
  return i946
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i948 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'm_Texture')
  i948.m_UVRect = UnityEngine.Rect.MinMaxRect(i949[2], i949[3], i949[4], i949[5])
  request.r(i949[6], i949[7], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[8]
  i948.m_Color = new pc.Color(i949[9], i949[10], i949[11], i949[12])
  i948.m_RaycastTarget = !!i949[13]
  i948.m_RaycastPadding = new pc.Vec4( i949[14], i949[15], i949[16], i949[17] )
  return i948
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i950 = root || request.c( 'UnityEngine.UI.Mask' )
  var i951 = data
  i950.m_ShowMaskGraphic = !!i951[0]
  return i950
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i952 = root || request.c( 'UnityEngine.UI.Image' )
  var i953 = data
  request.r(i953[0], i953[1], 0, i952, 'm_Sprite')
  i952.m_Type = i953[2]
  i952.m_PreserveAspect = !!i953[3]
  i952.m_FillCenter = !!i953[4]
  i952.m_FillMethod = i953[5]
  i952.m_FillAmount = i953[6]
  i952.m_FillClockwise = !!i953[7]
  i952.m_FillOrigin = i953[8]
  i952.m_UseSpriteMesh = !!i953[9]
  i952.m_PixelsPerUnitMultiplier = i953[10]
  request.r(i953[11], i953[12], 0, i952, 'm_Material')
  i952.m_Maskable = !!i953[13]
  i952.m_Color = new pc.Color(i953[14], i953[15], i953[16], i953[17])
  i952.m_RaycastTarget = !!i953[18]
  i952.m_RaycastPadding = new pc.Vec4( i953[19], i953[20], i953[21], i953[22] )
  return i952
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i954 = root || request.c( 'UnityEngine.UI.Text' )
  var i955 = data
  i954.m_FontData = request.d('UnityEngine.UI.FontData', i955[0], i954.m_FontData)
  i954.m_Text = i955[1]
  request.r(i955[2], i955[3], 0, i954, 'm_Material')
  i954.m_Maskable = !!i955[4]
  i954.m_Color = new pc.Color(i955[5], i955[6], i955[7], i955[8])
  i954.m_RaycastTarget = !!i955[9]
  i954.m_RaycastPadding = new pc.Vec4( i955[10], i955[11], i955[12], i955[13] )
  return i954
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i956 = root || request.c( 'UnityEngine.UI.FontData' )
  var i957 = data
  request.r(i957[0], i957[1], 0, i956, 'm_Font')
  i956.m_FontSize = i957[2]
  i956.m_FontStyle = i957[3]
  i956.m_BestFit = !!i957[4]
  i956.m_MinSize = i957[5]
  i956.m_MaxSize = i957[6]
  i956.m_Alignment = i957[7]
  i956.m_AlignByGeometry = !!i957[8]
  i956.m_RichText = !!i957[9]
  i956.m_HorizontalOverflow = i957[10]
  i956.m_VerticalOverflow = i957[11]
  i956.m_LineSpacing = i957[12]
  return i956
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i958 = root || request.c( 'UnityEngine.UI.Button' )
  var i959 = data
  i958.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i959[0], i958.m_OnClick)
  i958.m_Navigation = request.d('UnityEngine.UI.Navigation', i959[1], i958.m_Navigation)
  i958.m_Transition = i959[2]
  i958.m_Colors = request.d('UnityEngine.UI.ColorBlock', i959[3], i958.m_Colors)
  i958.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i959[4], i958.m_SpriteState)
  i958.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i959[5], i958.m_AnimationTriggers)
  i958.m_Interactable = !!i959[6]
  request.r(i959[7], i959[8], 0, i958, 'm_TargetGraphic')
  return i958
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i960 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i961 = data
  i960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i961[0], i960.m_PersistentCalls)
  return i960
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i962 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i963 = data
  request.r(i963[0], i963[1], 0, i962, 'm_ObjectArgument')
  i962.m_ObjectArgumentAssemblyTypeName = i963[2]
  i962.m_IntArgument = i963[3]
  i962.m_FloatArgument = i963[4]
  i962.m_StringArgument = i963[5]
  i962.m_BoolArgument = !!i963[6]
  return i962
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i964 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i965 = data
  i964.m_Mode = i965[0]
  i964.m_WrapAround = !!i965[1]
  request.r(i965[2], i965[3], 0, i964, 'm_SelectOnUp')
  request.r(i965[4], i965[5], 0, i964, 'm_SelectOnDown')
  request.r(i965[6], i965[7], 0, i964, 'm_SelectOnLeft')
  request.r(i965[8], i965[9], 0, i964, 'm_SelectOnRight')
  return i964
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i966 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i967 = data
  i966.m_NormalColor = new pc.Color(i967[0], i967[1], i967[2], i967[3])
  i966.m_HighlightedColor = new pc.Color(i967[4], i967[5], i967[6], i967[7])
  i966.m_PressedColor = new pc.Color(i967[8], i967[9], i967[10], i967[11])
  i966.m_SelectedColor = new pc.Color(i967[12], i967[13], i967[14], i967[15])
  i966.m_DisabledColor = new pc.Color(i967[16], i967[17], i967[18], i967[19])
  i966.m_ColorMultiplier = i967[20]
  i966.m_FadeDuration = i967[21]
  return i966
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i968 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'm_HighlightedSprite')
  request.r(i969[2], i969[3], 0, i968, 'm_PressedSprite')
  request.r(i969[4], i969[5], 0, i968, 'm_SelectedSprite')
  request.r(i969[6], i969[7], 0, i968, 'm_DisabledSprite')
  return i968
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i971 = data
  i970.m_NormalTrigger = i971[0]
  i970.m_HighlightedTrigger = i971[1]
  i970.m_PressedTrigger = i971[2]
  i970.m_SelectedTrigger = i971[3]
  i970.m_DisabledTrigger = i971[4]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i973 = data
  i972.m_Alpha = i973[0]
  i972.m_Interactable = !!i973[1]
  i972.m_BlocksRaycasts = !!i973[2]
  i972.m_IgnoreParentGroups = !!i973[3]
  i972.enabled = !!i973[4]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i975 = data
  i974.type = i975[0]
  i974.color = new pc.Color(i975[1], i975[2], i975[3], i975[4])
  i974.cullingMask = i975[5]
  i974.intensity = i975[6]
  i974.range = i975[7]
  i974.spotAngle = i975[8]
  i974.shadows = i975[9]
  i974.shadowNormalBias = i975[10]
  i974.shadowBias = i975[11]
  i974.shadowStrength = i975[12]
  i974.shadowResolution = i975[13]
  i974.lightmapBakeType = i975[14]
  i974.renderMode = i975[15]
  request.r(i975[16], i975[17], 0, i974, 'cookie')
  i974.cookieSize = i975[18]
  i974.shadowNearPlane = i975[19]
  i974.occlusionMaskChannel = i975[20]
  i974.isBaked = !!i975[21]
  i974.mixedLightingMode = i975[22]
  i974.enabled = !!i975[23]
  return i974
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i976 = root || request.c( 'SimpleDeactivateOnTap' )
  var i977 = data
  return i976
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i978 = root || request.c( 'DOTWeenPulseAnim' )
  var i979 = data
  i978.pulseSize = new pc.Vec2( i979[0], i979[1] )
  i978.pulseDuration = i979[2]
  i978.ease = i979[3]
  return i978
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i980 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i981 = data
  i980.m_hasFontAssetChanged = !!i981[0]
  request.r(i981[1], i981[2], 0, i980, 'm_baseMaterial')
  i980.m_maskOffset = new pc.Vec4( i981[3], i981[4], i981[5], i981[6] )
  i980.m_text = i981[7]
  i980.m_isRightToLeft = !!i981[8]
  request.r(i981[9], i981[10], 0, i980, 'm_fontAsset')
  request.r(i981[11], i981[12], 0, i980, 'm_sharedMaterial')
  var i983 = i981[13]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.m_fontSharedMaterials = i982
  request.r(i981[14], i981[15], 0, i980, 'm_fontMaterial')
  var i985 = i981[16]
  var i984 = []
  for(var i = 0; i < i985.length; i += 2) {
  request.r(i985[i + 0], i985[i + 1], 2, i984, '')
  }
  i980.m_fontMaterials = i984
  i980.m_fontColor32 = UnityEngine.Color32.ConstructColor(i981[17], i981[18], i981[19], i981[20])
  i980.m_fontColor = new pc.Color(i981[21], i981[22], i981[23], i981[24])
  i980.m_enableVertexGradient = !!i981[25]
  i980.m_colorMode = i981[26]
  i980.m_fontColorGradient = request.d('TMPro.VertexGradient', i981[27], i980.m_fontColorGradient)
  request.r(i981[28], i981[29], 0, i980, 'm_fontColorGradientPreset')
  request.r(i981[30], i981[31], 0, i980, 'm_spriteAsset')
  i980.m_tintAllSprites = !!i981[32]
  request.r(i981[33], i981[34], 0, i980, 'm_StyleSheet')
  i980.m_TextStyleHashCode = i981[35]
  i980.m_overrideHtmlColors = !!i981[36]
  i980.m_faceColor = UnityEngine.Color32.ConstructColor(i981[37], i981[38], i981[39], i981[40])
  i980.m_fontSize = i981[41]
  i980.m_fontSizeBase = i981[42]
  i980.m_fontWeight = i981[43]
  i980.m_enableAutoSizing = !!i981[44]
  i980.m_fontSizeMin = i981[45]
  i980.m_fontSizeMax = i981[46]
  i980.m_fontStyle = i981[47]
  i980.m_HorizontalAlignment = i981[48]
  i980.m_VerticalAlignment = i981[49]
  i980.m_textAlignment = i981[50]
  i980.m_characterSpacing = i981[51]
  i980.m_wordSpacing = i981[52]
  i980.m_lineSpacing = i981[53]
  i980.m_lineSpacingMax = i981[54]
  i980.m_paragraphSpacing = i981[55]
  i980.m_charWidthMaxAdj = i981[56]
  i980.m_enableWordWrapping = !!i981[57]
  i980.m_wordWrappingRatios = i981[58]
  i980.m_overflowMode = i981[59]
  request.r(i981[60], i981[61], 0, i980, 'm_linkedTextComponent')
  request.r(i981[62], i981[63], 0, i980, 'parentLinkedComponent')
  i980.m_enableKerning = !!i981[64]
  i980.m_enableExtraPadding = !!i981[65]
  i980.checkPaddingRequired = !!i981[66]
  i980.m_isRichText = !!i981[67]
  i980.m_parseCtrlCharacters = !!i981[68]
  i980.m_isOrthographic = !!i981[69]
  i980.m_isCullingEnabled = !!i981[70]
  i980.m_horizontalMapping = i981[71]
  i980.m_verticalMapping = i981[72]
  i980.m_uvLineOffset = i981[73]
  i980.m_geometrySortingOrder = i981[74]
  i980.m_IsTextObjectScaleStatic = !!i981[75]
  i980.m_VertexBufferAutoSizeReduction = !!i981[76]
  i980.m_useMaxVisibleDescender = !!i981[77]
  i980.m_pageToDisplay = i981[78]
  i980.m_margin = new pc.Vec4( i981[79], i981[80], i981[81], i981[82] )
  i980.m_isUsingLegacyAnimationComponent = !!i981[83]
  i980.m_isVolumetricText = !!i981[84]
  request.r(i981[85], i981[86], 0, i980, 'm_Material')
  i980.m_Maskable = !!i981[87]
  i980.m_Color = new pc.Color(i981[88], i981[89], i981[90], i981[91])
  i980.m_RaycastTarget = !!i981[92]
  i980.m_RaycastPadding = new pc.Vec4( i981[93], i981[94], i981[95], i981[96] )
  return i980
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.VertexGradient' )
  var i987 = data
  i986.topLeft = new pc.Color(i987[0], i987[1], i987[2], i987[3])
  i986.topRight = new pc.Color(i987[4], i987[5], i987[6], i987[7])
  i986.bottomLeft = new pc.Color(i987[8], i987[9], i987[10], i987[11])
  i986.bottomRight = new pc.Color(i987[12], i987[13], i987[14], i987[15])
  return i986
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i988 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'm_FirstSelected')
  i988.m_sendNavigationEvents = !!i989[2]
  i988.m_DragThreshold = i989[3]
  return i988
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i990 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i991 = data
  i990.m_HorizontalAxis = i991[0]
  i990.m_VerticalAxis = i991[1]
  i990.m_SubmitButton = i991[2]
  i990.m_CancelButton = i991[3]
  i990.m_InputActionsPerSecond = i991[4]
  i990.m_RepeatDelay = i991[5]
  i990.m_ForceModuleActive = !!i991[6]
  i990.m_SendPointerHoverToParent = !!i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'sharedMesh')
  i992.convex = !!i993[2]
  i992.enabled = !!i993[3]
  i992.isTrigger = !!i993[4]
  request.r(i993[5], i993[6], 0, i992, 'material')
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i995 = data
  i994.center = new pc.Vec3( i995[0], i995[1], i995[2] )
  i994.size = new pc.Vec3( i995[3], i995[4], i995[5] )
  i994.enabled = !!i995[6]
  i994.isTrigger = !!i995[7]
  request.r(i995[8], i995[9], 0, i994, 'material')
  return i994
}

Deserializers["Assets.Scripts.Water.WaterArea"] = function (request, data, root) {
  var i996 = root || request.c( 'Assets.Scripts.Water.WaterArea' )
  var i997 = data
  request.r(i997[0], i997[1], 0, i996, 'waterProperties')
  return i996
}

Deserializers["Assets.Scripts.Water.WaterPropertyBlockSetter"] = function (request, data, root) {
  var i998 = root || request.c( 'Assets.Scripts.Water.WaterPropertyBlockSetter' )
  var i999 = data
  var i1001 = i999[0]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.waterRenderers = i1000
  i998.waterColor = new pc.Color(i999[1], i999[2], i999[3], i999[4])
  request.r(i999[5], i999[6], 0, i998, 'waterTex')
  i998.waterTile = new pc.Vec2( i999[7], i999[8] )
  i998.textureVisibility = i999[9]
  request.r(i999[10], i999[11], 0, i998, 'distortionTex')
  i998.distortionTile = new pc.Vec2( i999[12], i999[13] )
  i998.waterHeight = i999[14]
  i998.waterDeep = i999[15]
  i998.waterDepthParam = i999[16]
  i998.waterMinAlpha = i999[17]
  i998.borderColor = new pc.Color(i999[18], i999[19], i999[20], i999[21])
  i998.borderWidth = i999[22]
  i998.moveDirection = new pc.Vec2( i999[23], i999[24] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1005 = data
  i1004.aspect = i1005[0]
  i1004.orthographic = !!i1005[1]
  i1004.orthographicSize = i1005[2]
  i1004.backgroundColor = new pc.Color(i1005[3], i1005[4], i1005[5], i1005[6])
  i1004.nearClipPlane = i1005[7]
  i1004.farClipPlane = i1005[8]
  i1004.fieldOfView = i1005[9]
  i1004.depth = i1005[10]
  i1004.clearFlags = i1005[11]
  i1004.cullingMask = i1005[12]
  i1004.rect = i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'targetTexture')
  i1004.usePhysicalProperties = !!i1005[16]
  i1004.focalLength = i1005[17]
  i1004.sensorSize = new pc.Vec2( i1005[18], i1005[19] )
  i1004.lensShift = new pc.Vec2( i1005[20], i1005[21] )
  i1004.gateFit = i1005[22]
  i1004.commandBufferCount = i1005[23]
  i1004.cameraType = i1005[24]
  i1004.enabled = !!i1005[25]
  return i1004
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i1006 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i1007 = data
  i1006.m_CameraAnglePreset = i1007[0]
  i1006.m_Offset = new pc.Vec3( i1007[1], i1007[2], i1007[3] )
  i1006.m_LookAtOffset = new pc.Vec3( i1007[4], i1007[5], i1007[6] )
  i1006.m_LockCameraPosition = !!i1007[7]
  i1006.m_SmoothCameraFollow = !!i1007[8]
  i1006.m_SmoothCameraFollowStrength = i1007[9]
  return i1006
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i1008 = root || request.c( 'CoinEffectManager' )
  var i1009 = data
  request.r(i1009[0], i1009[1], 0, i1008, 'coinEffectPrefab')
  request.r(i1009[2], i1009[3], 0, i1008, 'coinCounter')
  request.r(i1009[4], i1009[5], 0, i1008, 'player')
  i1008.speed = i1009[6]
  request.r(i1009[7], i1009[8], 0, i1008, 'm_CoinEvent')
  i1008.effectPoolCount = i1009[9]
  i1008.offsetZ = i1009[10]
  return i1008
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i1010 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i1011 = data
  return i1010
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i1012 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i1013 = data
  i1012.m_GateType = i1013[0]
  i1012.m_Value = i1013[1]
  request.r(i1013[2], i1013[3], 0, i1012, 'm_Text')
  i1012.m_SnapToGrid = !!i1013[4]
  return i1012
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TextMeshPro' )
  var i1015 = data
  i1014._SortingLayer = i1015[0]
  i1014._SortingLayerID = i1015[1]
  i1014._SortingOrder = i1015[2]
  i1014.m_hasFontAssetChanged = !!i1015[3]
  request.r(i1015[4], i1015[5], 0, i1014, 'm_renderer')
  i1014.m_maskType = i1015[6]
  i1014.m_text = i1015[7]
  i1014.m_isRightToLeft = !!i1015[8]
  request.r(i1015[9], i1015[10], 0, i1014, 'm_fontAsset')
  request.r(i1015[11], i1015[12], 0, i1014, 'm_sharedMaterial')
  var i1017 = i1015[13]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1014.m_fontSharedMaterials = i1016
  request.r(i1015[14], i1015[15], 0, i1014, 'm_fontMaterial')
  var i1019 = i1015[16]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 2, i1018, '')
  }
  i1014.m_fontMaterials = i1018
  i1014.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1015[17], i1015[18], i1015[19], i1015[20])
  i1014.m_fontColor = new pc.Color(i1015[21], i1015[22], i1015[23], i1015[24])
  i1014.m_enableVertexGradient = !!i1015[25]
  i1014.m_colorMode = i1015[26]
  i1014.m_fontColorGradient = request.d('TMPro.VertexGradient', i1015[27], i1014.m_fontColorGradient)
  request.r(i1015[28], i1015[29], 0, i1014, 'm_fontColorGradientPreset')
  request.r(i1015[30], i1015[31], 0, i1014, 'm_spriteAsset')
  i1014.m_tintAllSprites = !!i1015[32]
  request.r(i1015[33], i1015[34], 0, i1014, 'm_StyleSheet')
  i1014.m_TextStyleHashCode = i1015[35]
  i1014.m_overrideHtmlColors = !!i1015[36]
  i1014.m_faceColor = UnityEngine.Color32.ConstructColor(i1015[37], i1015[38], i1015[39], i1015[40])
  i1014.m_fontSize = i1015[41]
  i1014.m_fontSizeBase = i1015[42]
  i1014.m_fontWeight = i1015[43]
  i1014.m_enableAutoSizing = !!i1015[44]
  i1014.m_fontSizeMin = i1015[45]
  i1014.m_fontSizeMax = i1015[46]
  i1014.m_fontStyle = i1015[47]
  i1014.m_HorizontalAlignment = i1015[48]
  i1014.m_VerticalAlignment = i1015[49]
  i1014.m_textAlignment = i1015[50]
  i1014.m_characterSpacing = i1015[51]
  i1014.m_wordSpacing = i1015[52]
  i1014.m_lineSpacing = i1015[53]
  i1014.m_lineSpacingMax = i1015[54]
  i1014.m_paragraphSpacing = i1015[55]
  i1014.m_charWidthMaxAdj = i1015[56]
  i1014.m_enableWordWrapping = !!i1015[57]
  i1014.m_wordWrappingRatios = i1015[58]
  i1014.m_overflowMode = i1015[59]
  request.r(i1015[60], i1015[61], 0, i1014, 'm_linkedTextComponent')
  request.r(i1015[62], i1015[63], 0, i1014, 'parentLinkedComponent')
  i1014.m_enableKerning = !!i1015[64]
  i1014.m_enableExtraPadding = !!i1015[65]
  i1014.checkPaddingRequired = !!i1015[66]
  i1014.m_isRichText = !!i1015[67]
  i1014.m_parseCtrlCharacters = !!i1015[68]
  i1014.m_isOrthographic = !!i1015[69]
  i1014.m_isCullingEnabled = !!i1015[70]
  i1014.m_horizontalMapping = i1015[71]
  i1014.m_verticalMapping = i1015[72]
  i1014.m_uvLineOffset = i1015[73]
  i1014.m_geometrySortingOrder = i1015[74]
  i1014.m_IsTextObjectScaleStatic = !!i1015[75]
  i1014.m_VertexBufferAutoSizeReduction = !!i1015[76]
  i1014.m_useMaxVisibleDescender = !!i1015[77]
  i1014.m_pageToDisplay = i1015[78]
  i1014.m_margin = new pc.Vec4( i1015[79], i1015[80], i1015[81], i1015[82] )
  i1014.m_isUsingLegacyAnimationComponent = !!i1015[83]
  i1014.m_isVolumetricText = !!i1015[84]
  request.r(i1015[85], i1015[86], 0, i1014, 'm_Material')
  i1014.m_Maskable = !!i1015[87]
  i1014.m_Color = new pc.Color(i1015[88], i1015[89], i1015[90], i1015[91])
  i1014.m_RaycastTarget = !!i1015[92]
  i1014.m_RaycastPadding = new pc.Vec4( i1015[93], i1015[94], i1015[95], i1015[96] )
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i1021 = data
  i1020.center = new pc.Vec3( i1021[0], i1021[1], i1021[2] )
  i1020.radius = i1021[3]
  i1020.enabled = !!i1021[4]
  i1020.isTrigger = !!i1021[5]
  request.r(i1021[6], i1021[7], 0, i1020, 'material')
  return i1020
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i1022 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i1023 = data
  request.r(i1023[0], i1023[1], 0, i1022, 'm_Event')
  i1022.m_Count = i1023[2]
  i1022.m_Sound = i1023[3]
  i1022.m_Particle = i1023[4]
  i1022.m_SnapToGrid = !!i1023[5]
  return i1022
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i1024 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i1025 = data
  i1024.UsePositionBasedOffset = !!i1025[0]
  i1024.PositionBasedScale = i1025[1]
  i1024.Bob = !!i1025[2]
  i1024.BobSpeed = i1025[3]
  i1024.BobHeight = i1025[4]
  i1024.Spin = !!i1025[5]
  i1024.SpinSpeed = i1025[6]
  return i1024
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i1026 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'm_WinEvent')
  i1026.m_SnapToGrid = !!i1027[2]
  return i1026
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i1028 = root || request.c( 'OutroAnimationController' )
  var i1029 = data
  request.r(i1029[0], i1029[1], 0, i1028, 'winEvent')
  i1028.endCardDelay = i1029[2]
  var i1031 = i1029[3]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 2) {
  request.r(i1031[i + 0], i1031[i + 1], 2, i1030, '')
  }
  i1028.confettiParticles = i1030
  return i1028
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i1034 = root || request.c( 'CheerPhraseController' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1034.phrases = i1036
  i1034.cheerPhraseColour = new pc.Color(i1035[1], i1035[2], i1035[3], i1035[4])
  request.r(i1035[5], i1035[6], 0, i1034, 'cheerText')
  request.r(i1035[7], i1035[8], 0, i1034, 'cheerTextAnimator')
  request.r(i1035[9], i1035[10], 0, i1034, 'keyCollectEvent')
  return i1034
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i1040 = root || request.c( 'CollectableParticleManager' )
  var i1041 = data
  request.r(i1041[0], i1041[1], 0, i1040, 'keyParticlePrefab')
  request.r(i1041[2], i1041[3], 0, i1040, 'coinParticlePrefab')
  i1040.keyParticleCount = i1041[4]
  i1040.coinParticlesCount = i1041[5]
  return i1040
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i1042 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'm_SequenceManagerPrefab')
  return i1042
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i1044 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i1045 = data
  return i1044
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i1046 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i1047 = data
  request.r(i1047[0], i1047[1], 0, i1046, 'm_MusicSource')
  request.r(i1047[2], i1047[3], 0, i1046, 'm_EffectSource')
  i1046.m_MinSoundInterval = i1047[4]
  var i1049 = i1047[5]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i1049[i + 0]) );
  }
  i1046.m_Sounds = i1048
  return i1046
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i1052 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i1053 = data
  i1052.m_SoundID = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'm_AudioClip')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1055 = data
  request.r(i1055[0], i1055[1], 0, i1054, 'clip')
  request.r(i1055[2], i1055[3], 0, i1054, 'outputAudioMixerGroup')
  i1054.playOnAwake = !!i1055[4]
  i1054.loop = !!i1055[5]
  i1054.time = i1055[6]
  i1054.volume = i1055[7]
  i1054.pitch = i1055[8]
  i1054.enabled = !!i1055[9]
  return i1054
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i1056 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'm_Canvas')
  request.r(i1057[2], i1057[3], 0, i1056, 'm_Root')
  request.r(i1057[4], i1057[5], 0, i1056, 'm_ViewLayer')
  return i1056
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i1058 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'm_GoldText')
  var i1061 = i1059[2]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 2) {
  request.r(i1061[i + 0], i1061[i + 1], 2, i1060, '')
  }
  i1058.Keys = i1060
  i1058.gainKeyColor = new pc.Color(i1059[3], i1059[4], i1059[5], i1059[6])
  return i1058
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i1064 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'm_LoseEvent')
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1067 = data
  i1066.ambientIntensity = i1067[0]
  i1066.reflectionIntensity = i1067[1]
  i1066.ambientMode = i1067[2]
  i1066.ambientLight = new pc.Color(i1067[3], i1067[4], i1067[5], i1067[6])
  i1066.ambientSkyColor = new pc.Color(i1067[7], i1067[8], i1067[9], i1067[10])
  i1066.ambientGroundColor = new pc.Color(i1067[11], i1067[12], i1067[13], i1067[14])
  i1066.ambientEquatorColor = new pc.Color(i1067[15], i1067[16], i1067[17], i1067[18])
  i1066.fogColor = new pc.Color(i1067[19], i1067[20], i1067[21], i1067[22])
  i1066.fogEndDistance = i1067[23]
  i1066.fogStartDistance = i1067[24]
  i1066.fogDensity = i1067[25]
  i1066.fog = !!i1067[26]
  request.r(i1067[27], i1067[28], 0, i1066, 'skybox')
  i1066.fogMode = i1067[29]
  var i1069 = i1067[30]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1069[i + 0]) );
  }
  i1066.lightmaps = i1068
  i1066.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1067[31], i1066.lightProbes)
  i1066.lightmapsMode = i1067[32]
  i1066.mixedBakeMode = i1067[33]
  i1066.environmentLightingMode = i1067[34]
  i1066.ambientProbe = new pc.SphericalHarmonicsL2(i1067[35])
  request.r(i1067[36], i1067[37], 0, i1066, 'customReflection')
  request.r(i1067[38], i1067[39], 0, i1066, 'defaultReflection')
  i1066.defaultReflectionMode = i1067[40]
  i1066.defaultReflectionResolution = i1067[41]
  i1066.sunLightObjectId = i1067[42]
  i1066.pixelLightCount = i1067[43]
  i1066.defaultReflectionHDR = !!i1067[44]
  i1066.hasLightDataAsset = !!i1067[45]
  i1066.hasManualGenerate = !!i1067[46]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'lightmapColor')
  request.r(i1073[2], i1073[3], 0, i1072, 'lightmapDirection')
  request.r(i1073[4], i1073[5], 0, i1072, 'shadowMask')
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1074 = root || new UnityEngine.LightProbes()
  var i1075 = data
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1085[i + 0]));
  }
  i1082.ShaderCompilationErrors = i1084
  i1082.name = i1083[1]
  i1082.guid = i1083[2]
  var i1087 = i1083[3]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1082.shaderDefinedKeywords = i1086
  var i1089 = i1083[4]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1089[i + 0]) );
  }
  i1082.passes = i1088
  var i1091 = i1083[5]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1091[i + 0]) );
  }
  i1082.usePasses = i1090
  var i1093 = i1083[6]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1093[i + 0]) );
  }
  i1082.defaultParameterValues = i1092
  request.r(i1083[7], i1083[8], 0, i1082, 'unityFallbackShader')
  i1082.readDepth = !!i1083[9]
  i1082.hasDepthOnlyPass = !!i1083[10]
  i1082.isCreatedByShaderGraph = !!i1083[11]
  i1082.disableBatching = !!i1083[12]
  i1082.compiled = !!i1083[13]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1097 = data
  i1096.shaderName = i1097[0]
  i1096.errorMessage = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1100 = root || new pc.UnityShaderPass()
  var i1101 = data
  i1100.id = i1101[0]
  i1100.subShaderIndex = i1101[1]
  i1100.name = i1101[2]
  i1100.passType = i1101[3]
  i1100.grabPassTextureName = i1101[4]
  i1100.usePass = !!i1101[5]
  i1100.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[6], i1100.zTest)
  i1100.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[7], i1100.zWrite)
  i1100.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[8], i1100.culling)
  i1100.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1101[9], i1100.blending)
  i1100.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1101[10], i1100.alphaBlending)
  i1100.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[11], i1100.colorWriteMask)
  i1100.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[12], i1100.offsetUnits)
  i1100.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[13], i1100.offsetFactor)
  i1100.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[14], i1100.stencilRef)
  i1100.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[15], i1100.stencilReadMask)
  i1100.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1101[16], i1100.stencilWriteMask)
  i1100.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1101[17], i1100.stencilOp)
  i1100.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1101[18], i1100.stencilOpFront)
  i1100.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1101[19], i1100.stencilOpBack)
  var i1103 = i1101[20]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1103[i + 0]) );
  }
  i1100.tags = i1102
  var i1105 = i1101[21]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( i1105[i + 0] );
  }
  i1100.passDefinedKeywords = i1104
  var i1107 = i1101[22]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1107[i + 0]) );
  }
  i1100.passDefinedKeywordGroups = i1106
  var i1109 = i1101[23]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1109[i + 0]) );
  }
  i1100.variants = i1108
  var i1111 = i1101[24]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1111[i + 0]) );
  }
  i1100.excludedVariants = i1110
  i1100.hasDepthReader = !!i1101[25]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1113 = data
  i1112.val = i1113[0]
  i1112.name = i1113[1]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1115 = data
  i1114.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[0], i1114.src)
  i1114.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[1], i1114.dst)
  i1114.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[2], i1114.op)
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1117 = data
  i1116.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[0], i1116.pass)
  i1116.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[1], i1116.fail)
  i1116.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[2], i1116.zFail)
  i1116.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1117[3], i1116.comp)
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1121 = data
  i1120.name = i1121[0]
  i1120.value = i1121[1]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1125 = data
  var i1127 = i1125[0]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1124.keywords = i1126
  i1124.hasDiscard = !!i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1131 = data
  i1130.passId = i1131[0]
  i1130.subShaderIndex = i1131[1]
  var i1133 = i1131[2]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( i1133[i + 0] );
  }
  i1130.keywords = i1132
  i1130.vertexProgram = i1131[3]
  i1130.fragmentProgram = i1131[4]
  i1130.exportedForWebGl2 = !!i1131[5]
  i1130.readDepth = !!i1131[6]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1137 = data
  request.r(i1137[0], i1137[1], 0, i1136, 'shader')
  i1136.pass = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1141 = data
  i1140.name = i1141[0]
  i1140.type = i1141[1]
  i1140.value = new pc.Vec4( i1141[2], i1141[3], i1141[4], i1141[5] )
  i1140.textureValue = i1141[6]
  i1140.shaderPropertyFlag = i1141[7]
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1143 = data
  i1142.name = i1143[0]
  request.r(i1143[1], i1143[2], 0, i1142, 'texture')
  i1142.aabb = i1143[3]
  i1142.vertices = i1143[4]
  i1142.triangles = i1143[5]
  i1142.textureRect = UnityEngine.Rect.MinMaxRect(i1143[6], i1143[7], i1143[8], i1143[9])
  i1142.packedRect = UnityEngine.Rect.MinMaxRect(i1143[10], i1143[11], i1143[12], i1143[13])
  i1142.border = new pc.Vec4( i1143[14], i1143[15], i1143[16], i1143[17] )
  i1142.transparency = i1143[18]
  i1142.bounds = i1143[19]
  i1142.pixelsPerUnit = i1143[20]
  i1142.textureWidth = i1143[21]
  i1142.textureHeight = i1143[22]
  i1142.nativeSize = new pc.Vec2( i1143[23], i1143[24] )
  i1142.pivot = new pc.Vec2( i1143[25], i1143[26] )
  i1142.textureRectOffset = new pc.Vec2( i1143[27], i1143[28] )
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1145 = data
  i1144.name = i1145[0]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.wrapMode = i1147[1]
  i1146.isLooping = !!i1147[2]
  i1146.length = i1147[3]
  var i1149 = i1147[4]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1149[i + 0]) );
  }
  i1146.curves = i1148
  var i1151 = i1147[5]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1151[i + 0]) );
  }
  i1146.events = i1150
  i1146.halfPrecision = !!i1147[6]
  i1146._frameRate = i1147[7]
  i1146.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1147[8], i1146.localBounds)
  i1146.hasMuscleCurves = !!i1147[9]
  var i1153 = i1147[10]
  var i1152 = []
  for(var i = 0; i < i1153.length; i += 1) {
    i1152.push( i1153[i + 0] );
  }
  i1146.clipMuscleConstant = i1152
  i1146.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1147[11], i1146.clipBindingConstant)
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1157 = data
  i1156.path = i1157[0]
  i1156.hash = i1157[1]
  i1156.componentType = i1157[2]
  i1156.property = i1157[3]
  i1156.keys = i1157[4]
  var i1159 = i1157[5]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1159[i + 0]) );
  }
  i1156.objectReferenceKeys = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1163 = data
  i1162.functionName = i1163[0]
  i1162.floatParameter = i1163[1]
  i1162.intParameter = i1163[2]
  i1162.stringParameter = i1163[3]
  request.r(i1163[4], i1163[5], 0, i1162, 'objectReferenceParameter')
  i1162.time = i1163[6]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1165 = data
  i1164.center = new pc.Vec3( i1165[0], i1165[1], i1165[2] )
  i1164.extends = new pc.Vec3( i1165[3], i1165[4], i1165[5] )
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1169 = data
  var i1171 = i1169[0]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( i1171[i + 0] );
  }
  i1168.genericBindings = i1170
  var i1173 = i1169[1]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( i1173[i + 0] );
  }
  i1168.pptrCurveMapping = i1172
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1177 = data
  i1176.time = i1177[0]
  request.r(i1177[1], i1177[2], 0, i1176, 'value')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i1179 = data
  i1178.name = i1179[0]
  i1178.blendParameter = i1179[1]
  i1178.blendParameterY = i1179[2]
  i1178.blendType = i1179[3]
  var i1181 = i1179[4]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i1181[i + 0]) );
  }
  i1178.children = i1180
  i1178.useAutomaticThresholds = !!i1179[5]
  i1178.minThreshold = i1179[6]
  i1178.maxThreshold = i1179[7]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'motion')
  i1184.threshold = i1185[2]
  i1184.position = new pc.Vec2( i1185[3], i1185[4] )
  i1184.timeScale = i1185[5]
  i1184.cycleOffset = i1185[6]
  i1184.directBlendParameter = i1185[7]
  i1184.mirror = !!i1185[8]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1187 = data
  i1186.name = i1187[0]
  i1186.ascent = i1187[1]
  i1186.originalLineHeight = i1187[2]
  i1186.fontSize = i1187[3]
  var i1189 = i1187[4]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1189[i + 0]) );
  }
  i1186.characterInfo = i1188
  request.r(i1187[5], i1187[6], 0, i1186, 'texture')
  i1186.originalFontSize = i1187[7]
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1193 = data
  i1192.index = i1193[0]
  i1192.advance = i1193[1]
  i1192.bearing = i1193[2]
  i1192.glyphWidth = i1193[3]
  i1192.glyphHeight = i1193[4]
  i1192.minX = i1193[5]
  i1192.maxX = i1193[6]
  i1192.minY = i1193[7]
  i1192.maxY = i1193[8]
  i1192.uvBottomLeftX = i1193[9]
  i1192.uvBottomLeftY = i1193[10]
  i1192.uvBottomRightX = i1193[11]
  i1192.uvBottomRightY = i1193[12]
  i1192.uvTopLeftX = i1193[13]
  i1192.uvTopLeftY = i1193[14]
  i1192.uvTopRightX = i1193[15]
  i1192.uvTopRightY = i1193[16]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1195 = data
  i1194.name = i1195[0]
  var i1197 = i1195[1]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 1) {
    i1196.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1197[i + 0]) );
  }
  i1194.layers = i1196
  var i1199 = i1195[2]
  var i1198 = []
  for(var i = 0; i < i1199.length; i += 1) {
    i1198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1199[i + 0]) );
  }
  i1194.parameters = i1198
  i1194.animationClips = i1195[3]
  i1194.avatarUnsupported = i1195[4]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1203 = data
  i1202.name = i1203[0]
  i1202.defaultWeight = i1203[1]
  i1202.blendingMode = i1203[2]
  i1202.avatarMask = i1203[3]
  i1202.syncedLayerIndex = i1203[4]
  i1202.syncedLayerAffectsTiming = !!i1203[5]
  i1202.syncedLayers = i1203[6]
  i1202.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1203[7], i1202.stateMachine)
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1205 = data
  i1204.id = i1205[0]
  i1204.name = i1205[1]
  i1204.path = i1205[2]
  var i1207 = i1205[3]
  var i1206 = []
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1207[i + 0]) );
  }
  i1204.states = i1206
  var i1209 = i1205[4]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1209[i + 0]) );
  }
  i1204.machines = i1208
  var i1211 = i1205[5]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1211[i + 0]) );
  }
  i1204.entryStateTransitions = i1210
  var i1213 = i1205[6]
  var i1212 = []
  for(var i = 0; i < i1213.length; i += 1) {
    i1212.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1213[i + 0]) );
  }
  i1204.exitStateTransitions = i1212
  var i1215 = i1205[7]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1215[i + 0]) );
  }
  i1204.anyStateTransitions = i1214
  i1204.defaultStateId = i1205[8]
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1219 = data
  i1218.id = i1219[0]
  i1218.name = i1219[1]
  i1218.cycleOffset = i1219[2]
  i1218.cycleOffsetParameter = i1219[3]
  i1218.cycleOffsetParameterActive = !!i1219[4]
  i1218.mirror = !!i1219[5]
  i1218.mirrorParameter = i1219[6]
  i1218.mirrorParameterActive = !!i1219[7]
  i1218.motionId = i1219[8]
  i1218.nameHash = i1219[9]
  i1218.fullPathHash = i1219[10]
  i1218.speed = i1219[11]
  i1218.speedParameter = i1219[12]
  i1218.speedParameterActive = !!i1219[13]
  i1218.tag = i1219[14]
  i1218.tagHash = i1219[15]
  i1218.writeDefaultValues = !!i1219[16]
  var i1221 = i1219[17]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 2) {
  request.r(i1221[i + 0], i1221[i + 1], 2, i1220, '')
  }
  i1218.behaviours = i1220
  var i1223 = i1219[18]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1223[i + 0]) );
  }
  i1218.transitions = i1222
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1229 = data
  i1228.fullPath = i1229[0]
  i1228.canTransitionToSelf = !!i1229[1]
  i1228.duration = i1229[2]
  i1228.exitTime = i1229[3]
  i1228.hasExitTime = !!i1229[4]
  i1228.hasFixedDuration = !!i1229[5]
  i1228.interruptionSource = i1229[6]
  i1228.offset = i1229[7]
  i1228.orderedInterruption = !!i1229[8]
  i1228.destinationStateId = i1229[9]
  i1228.isExit = !!i1229[10]
  i1228.mute = !!i1229[11]
  i1228.solo = !!i1229[12]
  var i1231 = i1229[13]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1231[i + 0]) );
  }
  i1228.conditions = i1230
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1235 = data
  i1234.mode = i1235[0]
  i1234.parameter = i1235[1]
  i1234.threshold = i1235[2]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1241 = data
  i1240.destinationStateId = i1241[0]
  i1240.isExit = !!i1241[1]
  i1240.mute = !!i1241[2]
  i1240.solo = !!i1241[3]
  var i1243 = i1241[4]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1243[i + 0]) );
  }
  i1240.conditions = i1242
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1246 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1247 = data
  i1246.defaultBool = !!i1247[0]
  i1246.defaultFloat = i1247[1]
  i1246.defaultInt = i1247[2]
  i1246.name = i1247[3]
  i1246.nameHash = i1247[4]
  i1246.type = i1247[5]
  return i1246
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1249 = data
  i1248.name = i1249[0]
  i1248.bytes64 = i1249[1]
  i1248.data = i1249[2]
  return i1248
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1250 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1251 = data
  request.r(i1251[0], i1251[1], 0, i1250, 'atlas')
  i1250.normalStyle = i1251[2]
  i1250.normalSpacingOffset = i1251[3]
  i1250.boldStyle = i1251[4]
  i1250.boldSpacing = i1251[5]
  i1250.italicStyle = i1251[6]
  i1250.tabSize = i1251[7]
  i1250.hashCode = i1251[8]
  request.r(i1251[9], i1251[10], 0, i1250, 'material')
  i1250.materialHashCode = i1251[11]
  i1250.m_Version = i1251[12]
  i1250.m_SourceFontFileGUID = i1251[13]
  request.r(i1251[14], i1251[15], 0, i1250, 'm_SourceFontFile_EditorRef')
  request.r(i1251[16], i1251[17], 0, i1250, 'm_SourceFontFile')
  i1250.m_AtlasPopulationMode = i1251[18]
  i1250.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1251[19], i1250.m_FaceInfo)
  var i1253 = i1251[20]
  var i1252 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.add(request.d('UnityEngine.TextCore.Glyph', i1253[i + 0]));
  }
  i1250.m_GlyphTable = i1252
  var i1255 = i1251[21]
  var i1254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.add(request.d('TMPro.TMP_Character', i1255[i + 0]));
  }
  i1250.m_CharacterTable = i1254
  var i1257 = i1251[22]
  var i1256 = []
  for(var i = 0; i < i1257.length; i += 2) {
  request.r(i1257[i + 0], i1257[i + 1], 2, i1256, '')
  }
  i1250.m_AtlasTextures = i1256
  i1250.m_AtlasTextureIndex = i1251[23]
  i1250.m_IsMultiAtlasTexturesEnabled = !!i1251[24]
  i1250.m_ClearDynamicDataOnBuild = !!i1251[25]
  var i1259 = i1251[26]
  var i1258 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1259.length; i += 1) {
    i1258.add(request.d('UnityEngine.TextCore.GlyphRect', i1259[i + 0]));
  }
  i1250.m_UsedGlyphRects = i1258
  var i1261 = i1251[27]
  var i1260 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.add(request.d('UnityEngine.TextCore.GlyphRect', i1261[i + 0]));
  }
  i1250.m_FreeGlyphRects = i1260
  i1250.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1251[28], i1250.m_fontInfo)
  i1250.m_AtlasWidth = i1251[29]
  i1250.m_AtlasHeight = i1251[30]
  i1250.m_AtlasPadding = i1251[31]
  i1250.m_AtlasRenderMode = i1251[32]
  var i1263 = i1251[33]
  var i1262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.add(request.d('TMPro.TMP_Glyph', i1263[i + 0]));
  }
  i1250.m_glyphInfoList = i1262
  i1250.m_KerningTable = request.d('TMPro.KerningTable', i1251[34], i1250.m_KerningTable)
  i1250.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1251[35], i1250.m_FontFeatureTable)
  var i1265 = i1251[36]
  var i1264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1265.length; i += 2) {
  request.r(i1265[i + 0], i1265[i + 1], 1, i1264, '')
  }
  i1250.fallbackFontAssets = i1264
  var i1267 = i1251[37]
  var i1266 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1267.length; i += 2) {
  request.r(i1267[i + 0], i1267[i + 1], 1, i1266, '')
  }
  i1250.m_FallbackFontAssetTable = i1266
  i1250.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1251[38], i1250.m_CreationSettings)
  var i1269 = i1251[39]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('TMPro.TMP_FontWeightPair', i1269[i + 0]) );
  }
  i1250.m_FontWeightTable = i1268
  var i1271 = i1251[40]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('TMPro.TMP_FontWeightPair', i1271[i + 0]) );
  }
  i1250.fontWeights = i1270
  return i1250
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1273 = data
  i1272.m_FaceIndex = i1273[0]
  i1272.m_FamilyName = i1273[1]
  i1272.m_StyleName = i1273[2]
  i1272.m_PointSize = i1273[3]
  i1272.m_Scale = i1273[4]
  i1272.m_UnitsPerEM = i1273[5]
  i1272.m_LineHeight = i1273[6]
  i1272.m_AscentLine = i1273[7]
  i1272.m_CapLine = i1273[8]
  i1272.m_MeanLine = i1273[9]
  i1272.m_Baseline = i1273[10]
  i1272.m_DescentLine = i1273[11]
  i1272.m_SuperscriptOffset = i1273[12]
  i1272.m_SuperscriptSize = i1273[13]
  i1272.m_SubscriptOffset = i1273[14]
  i1272.m_SubscriptSize = i1273[15]
  i1272.m_UnderlineOffset = i1273[16]
  i1272.m_UnderlineThickness = i1273[17]
  i1272.m_StrikethroughOffset = i1273[18]
  i1272.m_StrikethroughThickness = i1273[19]
  i1272.m_TabWidth = i1273[20]
  return i1272
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1276 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1277 = data
  i1276.m_Index = i1277[0]
  i1276.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1277[1], i1276.m_Metrics)
  i1276.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1277[2], i1276.m_GlyphRect)
  i1276.m_Scale = i1277[3]
  i1276.m_AtlasIndex = i1277[4]
  i1276.m_ClassDefinitionType = i1277[5]
  return i1276
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1279 = data
  i1278.m_Width = i1279[0]
  i1278.m_Height = i1279[1]
  i1278.m_HorizontalBearingX = i1279[2]
  i1278.m_HorizontalBearingY = i1279[3]
  i1278.m_HorizontalAdvance = i1279[4]
  return i1278
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1281 = data
  i1280.m_X = i1281[0]
  i1280.m_Y = i1281[1]
  i1280.m_Width = i1281[2]
  i1280.m_Height = i1281[3]
  return i1280
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1284 = root || request.c( 'TMPro.TMP_Character' )
  var i1285 = data
  i1284.m_ElementType = i1285[0]
  i1284.m_Unicode = i1285[1]
  i1284.m_GlyphIndex = i1285[2]
  i1284.m_Scale = i1285[3]
  return i1284
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1291 = data
  i1290.Name = i1291[0]
  i1290.PointSize = i1291[1]
  i1290.Scale = i1291[2]
  i1290.CharacterCount = i1291[3]
  i1290.LineHeight = i1291[4]
  i1290.Baseline = i1291[5]
  i1290.Ascender = i1291[6]
  i1290.CapHeight = i1291[7]
  i1290.Descender = i1291[8]
  i1290.CenterLine = i1291[9]
  i1290.SuperscriptOffset = i1291[10]
  i1290.SubscriptOffset = i1291[11]
  i1290.SubSize = i1291[12]
  i1290.Underline = i1291[13]
  i1290.UnderlineThickness = i1291[14]
  i1290.strikethrough = i1291[15]
  i1290.strikethroughThickness = i1291[16]
  i1290.TabWidth = i1291[17]
  i1290.Padding = i1291[18]
  i1290.AtlasWidth = i1291[19]
  i1290.AtlasHeight = i1291[20]
  return i1290
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1294 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1295 = data
  i1294.id = i1295[0]
  i1294.x = i1295[1]
  i1294.y = i1295[2]
  i1294.width = i1295[3]
  i1294.height = i1295[4]
  i1294.xOffset = i1295[5]
  i1294.yOffset = i1295[6]
  i1294.xAdvance = i1295[7]
  i1294.scale = i1295[8]
  return i1294
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1296 = root || request.c( 'TMPro.KerningTable' )
  var i1297 = data
  var i1299 = i1297[0]
  var i1298 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1299.length; i += 1) {
    i1298.add(request.d('TMPro.KerningPair', i1299[i + 0]));
  }
  i1296.kerningPairs = i1298
  return i1296
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1302 = root || request.c( 'TMPro.KerningPair' )
  var i1303 = data
  i1302.xOffset = i1303[0]
  i1302.m_FirstGlyph = i1303[1]
  i1302.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1303[2], i1302.m_FirstGlyphAdjustments)
  i1302.m_SecondGlyph = i1303[3]
  i1302.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1303[4], i1302.m_SecondGlyphAdjustments)
  i1302.m_IgnoreSpacingAdjustments = !!i1303[5]
  return i1302
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1304 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1305 = data
  var i1307 = i1305[0]
  var i1306 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1307[i + 0]));
  }
  i1304.m_GlyphPairAdjustmentRecords = i1306
  return i1304
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1310 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1311 = data
  i1310.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1311[0], i1310.m_FirstAdjustmentRecord)
  i1310.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1311[1], i1310.m_SecondAdjustmentRecord)
  i1310.m_FeatureLookupFlags = i1311[2]
  return i1310
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1312 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1313 = data
  i1312.m_GlyphIndex = i1313[0]
  i1312.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1313[1], i1312.m_GlyphValueRecord)
  return i1312
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1314 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1315 = data
  i1314.m_XPlacement = i1315[0]
  i1314.m_YPlacement = i1315[1]
  i1314.m_XAdvance = i1315[2]
  i1314.m_YAdvance = i1315[3]
  return i1314
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1318 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1319 = data
  i1318.sourceFontFileName = i1319[0]
  i1318.sourceFontFileGUID = i1319[1]
  i1318.pointSizeSamplingMode = i1319[2]
  i1318.pointSize = i1319[3]
  i1318.padding = i1319[4]
  i1318.packingMode = i1319[5]
  i1318.atlasWidth = i1319[6]
  i1318.atlasHeight = i1319[7]
  i1318.characterSetSelectionMode = i1319[8]
  i1318.characterSequence = i1319[9]
  i1318.referencedFontAssetGUID = i1319[10]
  i1318.referencedTextAssetGUID = i1319[11]
  i1318.fontStyle = i1319[12]
  i1318.fontStyleModifier = i1319[13]
  i1318.renderMode = i1319[14]
  i1318.includeFontFeatures = !!i1319[15]
  return i1318
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1322 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1323 = data
  request.r(i1323[0], i1323[1], 0, i1322, 'regularTypeface')
  request.r(i1323[2], i1323[3], 0, i1322, 'italicTypeface')
  return i1322
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i1324 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i1325 = data
  i1324.Count = i1325[0]
  return i1324
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i1326 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i1327 = data
  return i1326
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1328 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1329 = data
  i1328.useSafeMode = !!i1329[0]
  i1328.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1329[1], i1328.safeModeOptions)
  i1328.timeScale = i1329[2]
  i1328.unscaledTimeScale = i1329[3]
  i1328.useSmoothDeltaTime = !!i1329[4]
  i1328.maxSmoothUnscaledTime = i1329[5]
  i1328.rewindCallbackMode = i1329[6]
  i1328.showUnityEditorReport = !!i1329[7]
  i1328.logBehaviour = i1329[8]
  i1328.drawGizmos = !!i1329[9]
  i1328.defaultRecyclable = !!i1329[10]
  i1328.defaultAutoPlay = i1329[11]
  i1328.defaultUpdateType = i1329[12]
  i1328.defaultTimeScaleIndependent = !!i1329[13]
  i1328.defaultEaseType = i1329[14]
  i1328.defaultEaseOvershootOrAmplitude = i1329[15]
  i1328.defaultEasePeriod = i1329[16]
  i1328.defaultAutoKill = !!i1329[17]
  i1328.defaultLoopType = i1329[18]
  i1328.debugMode = !!i1329[19]
  i1328.debugStoreTargetId = !!i1329[20]
  i1328.showPreviewPanel = !!i1329[21]
  i1328.storeSettingsLocation = i1329[22]
  i1328.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1329[23], i1328.modules)
  i1328.createASMDEF = !!i1329[24]
  i1328.showPlayingTweens = !!i1329[25]
  i1328.showPausedTweens = !!i1329[26]
  return i1328
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1330 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1331 = data
  i1330.logBehaviour = i1331[0]
  i1330.nestedTweenFailureBehaviour = i1331[1]
  return i1330
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1332 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1333 = data
  i1332.showPanel = !!i1333[0]
  i1332.audioEnabled = !!i1333[1]
  i1332.physicsEnabled = !!i1333[2]
  i1332.physics2DEnabled = !!i1333[3]
  i1332.spriteEnabled = !!i1333[4]
  i1332.uiEnabled = !!i1333[5]
  i1332.textMeshProEnabled = !!i1333[6]
  i1332.tk2DEnabled = !!i1333[7]
  i1332.deAudioEnabled = !!i1333[8]
  i1332.deUnityExtendedEnabled = !!i1333[9]
  i1332.epoOutlineEnabled = !!i1333[10]
  return i1332
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1334 = root || request.c( 'TMPro.TMP_Settings' )
  var i1335 = data
  i1334.m_enableWordWrapping = !!i1335[0]
  i1334.m_enableKerning = !!i1335[1]
  i1334.m_enableExtraPadding = !!i1335[2]
  i1334.m_enableTintAllSprites = !!i1335[3]
  i1334.m_enableParseEscapeCharacters = !!i1335[4]
  i1334.m_EnableRaycastTarget = !!i1335[5]
  i1334.m_GetFontFeaturesAtRuntime = !!i1335[6]
  i1334.m_missingGlyphCharacter = i1335[7]
  i1334.m_warningsDisabled = !!i1335[8]
  request.r(i1335[9], i1335[10], 0, i1334, 'm_defaultFontAsset')
  i1334.m_defaultFontAssetPath = i1335[11]
  i1334.m_defaultFontSize = i1335[12]
  i1334.m_defaultAutoSizeMinRatio = i1335[13]
  i1334.m_defaultAutoSizeMaxRatio = i1335[14]
  i1334.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1335[15], i1335[16] )
  i1334.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1335[17], i1335[18] )
  i1334.m_autoSizeTextContainer = !!i1335[19]
  i1334.m_IsTextObjectScaleStatic = !!i1335[20]
  var i1337 = i1335[21]
  var i1336 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1337.length; i += 2) {
  request.r(i1337[i + 0], i1337[i + 1], 1, i1336, '')
  }
  i1334.m_fallbackFontAssets = i1336
  i1334.m_matchMaterialPreset = !!i1335[22]
  request.r(i1335[23], i1335[24], 0, i1334, 'm_defaultSpriteAsset')
  i1334.m_defaultSpriteAssetPath = i1335[25]
  i1334.m_enableEmojiSupport = !!i1335[26]
  i1334.m_MissingCharacterSpriteUnicode = i1335[27]
  i1334.m_defaultColorGradientPresetsPath = i1335[28]
  request.r(i1335[29], i1335[30], 0, i1334, 'm_defaultStyleSheet')
  i1334.m_StyleSheetsResourcePath = i1335[31]
  request.r(i1335[32], i1335[33], 0, i1334, 'm_leadingCharacters')
  request.r(i1335[34], i1335[35], 0, i1334, 'm_followingCharacters')
  i1334.m_UseModernHangulLineBreakingRules = !!i1335[36]
  return i1334
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1338 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1339 = data
  request.r(i1339[0], i1339[1], 0, i1338, 'spriteSheet')
  var i1341 = i1339[2]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.add(request.d('TMPro.TMP_Sprite', i1341[i + 0]));
  }
  i1338.spriteInfoList = i1340
  var i1343 = i1339[3]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1343.length; i += 2) {
  request.r(i1343[i + 0], i1343[i + 1], 1, i1342, '')
  }
  i1338.fallbackSpriteAssets = i1342
  i1338.hashCode = i1339[4]
  request.r(i1339[5], i1339[6], 0, i1338, 'material')
  i1338.materialHashCode = i1339[7]
  i1338.m_Version = i1339[8]
  i1338.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1339[9], i1338.m_FaceInfo)
  var i1345 = i1339[10]
  var i1344 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.add(request.d('TMPro.TMP_SpriteCharacter', i1345[i + 0]));
  }
  i1338.m_SpriteCharacterTable = i1344
  var i1347 = i1339[11]
  var i1346 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.add(request.d('TMPro.TMP_SpriteGlyph', i1347[i + 0]));
  }
  i1338.m_SpriteGlyphTable = i1346
  return i1338
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1350 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1351 = data
  i1350.name = i1351[0]
  i1350.hashCode = i1351[1]
  i1350.unicode = i1351[2]
  i1350.pivot = new pc.Vec2( i1351[3], i1351[4] )
  request.r(i1351[5], i1351[6], 0, i1350, 'sprite')
  i1350.id = i1351[7]
  i1350.x = i1351[8]
  i1350.y = i1351[9]
  i1350.width = i1351[10]
  i1350.height = i1351[11]
  i1350.xOffset = i1351[12]
  i1350.yOffset = i1351[13]
  i1350.xAdvance = i1351[14]
  i1350.scale = i1351[15]
  return i1350
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1356 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1357 = data
  i1356.m_Name = i1357[0]
  i1356.m_HashCode = i1357[1]
  i1356.m_ElementType = i1357[2]
  i1356.m_Unicode = i1357[3]
  i1356.m_GlyphIndex = i1357[4]
  i1356.m_Scale = i1357[5]
  return i1356
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'sprite')
  i1360.m_Index = i1361[2]
  i1360.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1361[3], i1360.m_Metrics)
  i1360.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1361[4], i1360.m_GlyphRect)
  i1360.m_Scale = i1361[5]
  i1360.m_AtlasIndex = i1361[6]
  i1360.m_ClassDefinitionType = i1361[7]
  return i1360
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1362 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1363 = data
  var i1365 = i1363[0]
  var i1364 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.add(request.d('TMPro.TMP_Style', i1365[i + 0]));
  }
  i1362.m_StyleList = i1364
  return i1362
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1368 = root || request.c( 'TMPro.TMP_Style' )
  var i1369 = data
  i1368.m_Name = i1369[0]
  i1368.m_HashCode = i1369[1]
  i1368.m_OpeningDefinition = i1369[2]
  i1368.m_ClosingDefinition = i1369[3]
  i1368.m_OpeningTagArray = i1369[4]
  i1368.m_ClosingTagArray = i1369[5]
  i1368.m_OpeningTagUnicodeArray = i1369[6]
  i1368.m_ClosingTagUnicodeArray = i1369[7]
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1371 = data
  var i1373 = i1371[0]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1373[i + 0]) );
  }
  i1370.files = i1372
  i1370.componentToPrefabIds = i1371[1]
  return i1370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1377 = data
  i1376.path = i1377[0]
  request.r(i1377[1], i1377[2], 0, i1376, 'unityObject')
  return i1376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1379 = data
  var i1381 = i1379[0]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1381[i + 0]) );
  }
  i1378.scriptsExecutionOrder = i1380
  var i1383 = i1379[1]
  var i1382 = []
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1383[i + 0]) );
  }
  i1378.sortingLayers = i1382
  var i1385 = i1379[2]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1385[i + 0]) );
  }
  i1378.cullingLayers = i1384
  i1378.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1379[3], i1378.timeSettings)
  i1378.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1379[4], i1378.physicsSettings)
  i1378.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1379[5], i1378.physics2DSettings)
  i1378.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1379[6], i1378.qualitySettings)
  i1378.enableRealtimeShadows = !!i1379[7]
  i1378.enableAutoInstancing = !!i1379[8]
  i1378.enableStaticBatching = !!i1379[9]
  i1378.enableDynamicBatching = !!i1379[10]
  i1378.usePreservativeDynamicBatching = !!i1379[11]
  i1378.lightmapEncodingQuality = i1379[12]
  i1378.desiredColorSpace = i1379[13]
  var i1387 = i1379[14]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1378.allTags = i1386
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.value = i1391[1]
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1395 = data
  i1394.id = i1395[0]
  i1394.name = i1395[1]
  i1394.value = i1395[2]
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1399 = data
  i1398.id = i1399[0]
  i1398.name = i1399[1]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1401 = data
  i1400.fixedDeltaTime = i1401[0]
  i1400.maximumDeltaTime = i1401[1]
  i1400.timeScale = i1401[2]
  i1400.maximumParticleTimestep = i1401[3]
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1403 = data
  i1402.gravity = new pc.Vec3( i1403[0], i1403[1], i1403[2] )
  i1402.defaultSolverIterations = i1403[3]
  i1402.bounceThreshold = i1403[4]
  i1402.autoSyncTransforms = !!i1403[5]
  i1402.autoSimulation = !!i1403[6]
  var i1405 = i1403[7]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1405[i + 0]) );
  }
  i1402.collisionMatrix = i1404
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1409 = data
  i1408.enabled = !!i1409[0]
  i1408.layerId = i1409[1]
  i1408.otherLayerId = i1409[2]
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1411 = data
  request.r(i1411[0], i1411[1], 0, i1410, 'material')
  i1410.gravity = new pc.Vec2( i1411[2], i1411[3] )
  i1410.positionIterations = i1411[4]
  i1410.velocityIterations = i1411[5]
  i1410.velocityThreshold = i1411[6]
  i1410.maxLinearCorrection = i1411[7]
  i1410.maxAngularCorrection = i1411[8]
  i1410.maxTranslationSpeed = i1411[9]
  i1410.maxRotationSpeed = i1411[10]
  i1410.baumgarteScale = i1411[11]
  i1410.baumgarteTOIScale = i1411[12]
  i1410.timeToSleep = i1411[13]
  i1410.linearSleepTolerance = i1411[14]
  i1410.angularSleepTolerance = i1411[15]
  i1410.defaultContactOffset = i1411[16]
  i1410.autoSimulation = !!i1411[17]
  i1410.queriesHitTriggers = !!i1411[18]
  i1410.queriesStartInColliders = !!i1411[19]
  i1410.callbacksOnDisable = !!i1411[20]
  i1410.reuseCollisionCallbacks = !!i1411[21]
  i1410.autoSyncTransforms = !!i1411[22]
  var i1413 = i1411[23]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1413[i + 0]) );
  }
  i1410.collisionMatrix = i1412
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1417 = data
  i1416.enabled = !!i1417[0]
  i1416.layerId = i1417[1]
  i1416.otherLayerId = i1417[2]
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1419 = data
  var i1421 = i1419[0]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1421[i + 0]) );
  }
  i1418.qualityLevels = i1420
  var i1423 = i1419[1]
  var i1422 = []
  for(var i = 0; i < i1423.length; i += 1) {
    i1422.push( i1423[i + 0] );
  }
  i1418.names = i1422
  i1418.shadows = i1419[2]
  i1418.anisotropicFiltering = i1419[3]
  i1418.antiAliasing = i1419[4]
  i1418.lodBias = i1419[5]
  i1418.shadowCascades = i1419[6]
  i1418.shadowDistance = i1419[7]
  i1418.shadowmaskMode = i1419[8]
  i1418.shadowProjection = i1419[9]
  i1418.shadowResolution = i1419[10]
  i1418.softParticles = !!i1419[11]
  i1418.softVegetation = !!i1419[12]
  i1418.activeColorSpace = i1419[13]
  i1418.desiredColorSpace = i1419[14]
  i1418.masterTextureLimit = i1419[15]
  i1418.maxQueuedFrames = i1419[16]
  i1418.particleRaycastBudget = i1419[17]
  i1418.pixelLightCount = i1419[18]
  i1418.realtimeReflectionProbes = !!i1419[19]
  i1418.shadowCascade2Split = i1419[20]
  i1418.shadowCascade4Split = new pc.Vec3( i1419[21], i1419[22], i1419[23] )
  i1418.streamingMipmapsActive = !!i1419[24]
  i1418.vSyncCount = i1419[25]
  i1418.asyncUploadBufferSize = i1419[26]
  i1418.asyncUploadTimeSlice = i1419[27]
  i1418.billboardsFaceCameraPosition = !!i1419[28]
  i1418.shadowNearPlaneOffset = i1419[29]
  i1418.streamingMipmapsMemoryBudget = i1419[30]
  i1418.maximumLODLevel = i1419[31]
  i1418.streamingMipmapsAddAllCameras = !!i1419[32]
  i1418.streamingMipmapsMaxLevelReduction = i1419[33]
  i1418.streamingMipmapsRenderersPerFrame = i1419[34]
  i1418.resolutionScalingFixedDPIFactor = i1419[35]
  i1418.streamingMipmapsMaxFileIORequests = i1419[36]
  i1418.currentQualityLevel = i1419[37]
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1429 = data
  i1428.weight = i1429[0]
  i1428.vertices = i1429[1]
  i1428.normals = i1429[2]
  i1428.tangents = i1429[3]
  return i1428
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1431 = data
  i1430.xPlacement = i1431[0]
  i1430.yPlacement = i1431[1]
  i1430.xAdvance = i1431[2]
  i1430.yAdvance = i1431[3]
  return i1430
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[13],"89":[52],"90":[15],"91":[15],"92":[15],"93":[15],"94":[15],"95":[15],"96":[15],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[98],"106":[98],"107":[98],"108":[98],"109":[98],"110":[98],"111":[52],"112":[7],"113":[114],"115":[114],"25":[24],"62":[116],"117":[116],"118":[32],"119":[116],"120":[121],"122":[123],"124":[121],"125":[24],"126":[24],"28":[25],"38":[36,24],"37":[24],"27":[25],"127":[24],"128":[24],"129":[24],"130":[24],"131":[24],"132":[24],"133":[24],"34":[24],"134":[24],"31":[36,24],"135":[24],"136":[24],"137":[24],"138":[24],"33":[36,24],"139":[24],"140":[46],"141":[46],"47":[46],"142":[46],"143":[52],"144":[52],"145":[146],"147":[52],"148":[24],"58":[7,24],"44":[24,36],"149":[24],"150":[36,24],"151":[7],"152":[36,24],"153":[24],"154":[121]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CoinEffectMove","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","HyperCasual.Runner.PlayerController","UnityEngine.Animator","UnityEngine.SkinnedMeshRenderer","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEditor.Animations.AnimatorController","HyperCasual.Runner.InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","EndCardController","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Light","SimpleDeactivateOnTap","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshCollider","UnityEngine.BoxCollider","Assets.Scripts.Water.WaterArea","Assets.Scripts.Water.WaterPropertyBlockSetter","UnityEngine.Camera","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","HyperCasual.Runner.LevelManager","HyperCasual.Runner.Gate","TMPro.TextMeshPro","UnityEngine.SphereCollider","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","HyperCasual.Runner.FinishLine","OutroAnimationController","CheerPhraseController","CollectableParticleManager","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.SaveManager","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.56f1";

Deserializers.productName = "Luna2022CleanTest";

Deserializers.lunaInitializationTime = "05/22/2026 06:29:55";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39976";

Deserializers.projectId = "bb78f8b6d1a090a449de626aea69720d";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 3.2.2\ncom.unity.textmeshpro: 3.0.7\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1729";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4655";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "33a5afee-2296-47d6-bbdd-20025984dbb5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

