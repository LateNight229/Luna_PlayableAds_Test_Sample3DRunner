var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2148 = root || request.c( 'UnityEngine.JointSpring' )
  var i2149 = data
  i2148.spring = i2149[0]
  i2148.damper = i2149[1]
  i2148.targetPosition = i2149[2]
  return i2148
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2150 = root || request.c( 'UnityEngine.JointMotor' )
  var i2151 = data
  i2150.m_TargetVelocity = i2151[0]
  i2150.m_Force = i2151[1]
  i2150.m_FreeSpin = i2151[2]
  return i2150
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2152 = root || request.c( 'UnityEngine.JointLimits' )
  var i2153 = data
  i2152.m_Min = i2153[0]
  i2152.m_Max = i2153[1]
  i2152.m_Bounciness = i2153[2]
  i2152.m_BounceMinVelocity = i2153[3]
  i2152.m_ContactDistance = i2153[4]
  i2152.minBounce = i2153[5]
  i2152.maxBounce = i2153[6]
  return i2152
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2154 = root || request.c( 'UnityEngine.JointDrive' )
  var i2155 = data
  i2154.m_PositionSpring = i2155[0]
  i2154.m_PositionDamper = i2155[1]
  i2154.m_MaximumForce = i2155[2]
  i2154.m_UseAcceleration = i2155[3]
  return i2154
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2156 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2157 = data
  i2156.m_Spring = i2157[0]
  i2156.m_Damper = i2157[1]
  return i2156
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2158 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2159 = data
  i2158.m_Limit = i2159[0]
  i2158.m_Bounciness = i2159[1]
  i2158.m_ContactDistance = i2159[2]
  return i2158
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2160 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2161 = data
  i2160.m_ExtremumSlip = i2161[0]
  i2160.m_ExtremumValue = i2161[1]
  i2160.m_AsymptoteSlip = i2161[2]
  i2160.m_AsymptoteValue = i2161[3]
  i2160.m_Stiffness = i2161[4]
  return i2160
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2162 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2163 = data
  i2162.m_LowerAngle = i2163[0]
  i2162.m_UpperAngle = i2163[1]
  return i2162
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2164 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2165 = data
  i2164.m_MotorSpeed = i2165[0]
  i2164.m_MaximumMotorTorque = i2165[1]
  return i2164
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2167 = data
  i2166.m_DampingRatio = i2167[0]
  i2166.m_Frequency = i2167[1]
  i2166.m_Angle = i2167[2]
  return i2166
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2168 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2169 = data
  i2168.m_LowerTranslation = i2169[0]
  i2168.m_UpperTranslation = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2171 = data
  i2170.name = i2171[0]
  i2170.width = i2171[1]
  i2170.height = i2171[2]
  i2170.mipmapCount = i2171[3]
  i2170.anisoLevel = i2171[4]
  i2170.filterMode = i2171[5]
  i2170.hdr = !!i2171[6]
  i2170.format = i2171[7]
  i2170.wrapMode = i2171[8]
  i2170.alphaIsTransparency = !!i2171[9]
  i2170.alphaSource = i2171[10]
  i2170.graphicsFormat = i2171[11]
  i2170.sRGBTexture = !!i2171[12]
  i2170.desiredColorSpace = i2171[13]
  i2170.wrapU = i2171[14]
  i2170.wrapV = i2171[15]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2172 = root || new pc.UnityMaterial()
  var i2173 = data
  i2172.name = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'shader')
  i2172.renderQueue = i2173[3]
  i2172.enableInstancing = !!i2173[4]
  var i2175 = i2173[5]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2175[i + 0]) );
  }
  i2172.floatParameters = i2174
  var i2177 = i2173[6]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2177[i + 0]) );
  }
  i2172.colorParameters = i2176
  var i2179 = i2173[7]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2179[i + 0]) );
  }
  i2172.vectorParameters = i2178
  var i2181 = i2173[8]
  var i2180 = []
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2181[i + 0]) );
  }
  i2172.textureParameters = i2180
  var i2183 = i2173[9]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2183[i + 0]) );
  }
  i2172.materialFlags = i2182
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2187 = data
  i2186.name = i2187[0]
  i2186.value = i2187[1]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2191 = data
  i2190.name = i2191[0]
  i2190.value = new pc.Color(i2191[1], i2191[2], i2191[3], i2191[4])
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.value = new pc.Vec4( i2195[1], i2195[2], i2195[3], i2195[4] )
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2199 = data
  i2198.name = i2199[0]
  request.r(i2199[1], i2199[2], 0, i2198, 'value')
  return i2198
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2203 = data
  i2202.name = i2203[0]
  i2202.enabled = !!i2203[1]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2205 = data
  i2204.name = i2205[0]
  i2204.halfPrecision = !!i2205[1]
  i2204.useSimplification = !!i2205[2]
  i2204.useUInt32IndexFormat = !!i2205[3]
  i2204.vertexCount = i2205[4]
  i2204.aabb = i2205[5]
  var i2207 = i2205[6]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( !!i2207[i + 0] );
  }
  i2204.streams = i2206
  i2204.vertices = i2205[7]
  var i2209 = i2205[8]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2209[i + 0]) );
  }
  i2204.subMeshes = i2208
  var i2211 = i2205[9]
  var i2210 = []
  for(var i = 0; i < i2211.length; i += 16) {
    i2210.push( new pc.Mat4().setData(i2211[i + 0], i2211[i + 1], i2211[i + 2], i2211[i + 3],  i2211[i + 4], i2211[i + 5], i2211[i + 6], i2211[i + 7],  i2211[i + 8], i2211[i + 9], i2211[i + 10], i2211[i + 11],  i2211[i + 12], i2211[i + 13], i2211[i + 14], i2211[i + 15]) );
  }
  i2204.bindposes = i2210
  var i2213 = i2205[10]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2213[i + 0]) );
  }
  i2204.blendShapes = i2212
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2219 = data
  i2218.triangles = i2219[0]
  return i2218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2224 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2225 = data
  i2224.name = i2225[0]
  var i2227 = i2225[1]
  var i2226 = []
  for(var i = 0; i < i2227.length; i += 1) {
    i2226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2227[i + 0]) );
  }
  i2224.frames = i2226
  return i2224
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2229 = data
  i2228.position = new pc.Vec3( i2229[0], i2229[1], i2229[2] )
  i2228.scale = new pc.Vec3( i2229[3], i2229[4], i2229[5] )
  i2228.rotation = new pc.Quat(i2229[6], i2229[7], i2229[8], i2229[9])
  return i2228
}

Deserializers["CoinEffectMove"] = function (request, data, root) {
  var i2230 = root || request.c( 'CoinEffectMove' )
  var i2231 = data
  return i2230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2233 = data
  request.r(i2233[0], i2233[1], 0, i2232, 'sharedMesh')
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2235 = data
  request.r(i2235[0], i2235[1], 0, i2234, 'additionalVertexStreams')
  i2234.enabled = !!i2235[2]
  request.r(i2235[3], i2235[4], 0, i2234, 'sharedMaterial')
  var i2237 = i2235[5]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 2) {
  request.r(i2237[i + 0], i2237[i + 1], 2, i2236, '')
  }
  i2234.sharedMaterials = i2236
  i2234.receiveShadows = !!i2235[6]
  i2234.shadowCastingMode = i2235[7]
  i2234.sortingLayerID = i2235[8]
  i2234.sortingOrder = i2235[9]
  i2234.lightmapIndex = i2235[10]
  i2234.lightmapSceneIndex = i2235[11]
  i2234.lightmapScaleOffset = new pc.Vec4( i2235[12], i2235[13], i2235[14], i2235[15] )
  i2234.lightProbeUsage = i2235[16]
  i2234.reflectionProbeUsage = i2235[17]
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2241 = data
  i2240.name = i2241[0]
  i2240.tagId = i2241[1]
  i2240.enabled = !!i2241[2]
  i2240.isStatic = !!i2241[3]
  i2240.layer = i2241[4]
  return i2240
}

Deserializers["HyperCasual.Gameplay.SequenceManager"] = function (request, data, root) {
  var i2242 = root || request.c( 'HyperCasual.Gameplay.SequenceManager' )
  var i2243 = data
  var i2245 = i2243[0]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 2) {
  request.r(i2245[i + 0], i2245[i + 1], 2, i2244, '')
  }
  i2242.m_LevelManagers = i2244
  return i2242
}

Deserializers["HyperCasual.Runner.PlayerController"] = function (request, data, root) {
  var i2248 = root || request.c( 'HyperCasual.Runner.PlayerController' )
  var i2249 = data
  request.r(i2249[0], i2249[1], 0, i2248, 'm_Animator')
  request.r(i2249[2], i2249[3], 0, i2248, 'm_SkinnedMeshRenderer')
  i2248.m_PlayerSpeed = i2249[4]
  i2248.m_CustomPlayerSpeed = i2249[5]
  i2248.m_AccelerationSpeed = i2249[6]
  i2248.m_DecelerationSpeed = i2249[7]
  i2248.m_HorizontalSpeedFactor = i2249[8]
  i2248.m_ScaleVelocity = i2249[9]
  i2248.m_AutoMoveForward = !!i2249[10]
  i2248.m_MaxXPosition = i2249[11]
  i2248.m_KeepMovingOnceStarted = !!i2249[12]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i2251 = data
  i2250.center = new pc.Vec3( i2251[0], i2251[1], i2251[2] )
  i2250.radius = i2251[3]
  i2250.height = i2251[4]
  i2250.direction = i2251[5]
  i2250.enabled = !!i2251[6]
  i2250.isTrigger = !!i2251[7]
  request.r(i2251[8], i2251[9], 0, i2250, 'material')
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i2252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i2253 = data
  i2252.mass = i2253[0]
  i2252.drag = i2253[1]
  i2252.angularDrag = i2253[2]
  i2252.useGravity = !!i2253[3]
  i2252.isKinematic = !!i2253[4]
  i2252.constraints = i2253[5]
  i2252.maxAngularVelocity = i2253[6]
  i2252.collisionDetectionMode = i2253[7]
  i2252.interpolation = i2253[8]
  return i2252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2255 = data
  request.r(i2255[0], i2255[1], 0, i2254, 'animatorController')
  request.r(i2255[2], i2255[3], 0, i2254, 'avatar')
  i2254.updateMode = i2255[4]
  i2254.hasTransformHierarchy = !!i2255[5]
  i2254.applyRootMotion = !!i2255[6]
  var i2257 = i2255[7]
  var i2256 = []
  for(var i = 0; i < i2257.length; i += 2) {
  request.r(i2257[i + 0], i2257[i + 1], 2, i2256, '')
  }
  i2254.humanBones = i2256
  i2254.enabled = !!i2255[8]
  return i2254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2261 = data
  request.r(i2261[0], i2261[1], 0, i2260, 'sharedMesh')
  var i2263 = i2261[2]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 2) {
  request.r(i2263[i + 0], i2263[i + 1], 2, i2262, '')
  }
  i2260.bones = i2262
  i2260.updateWhenOffscreen = !!i2261[3]
  i2260.localBounds = i2261[4]
  request.r(i2261[5], i2261[6], 0, i2260, 'rootBone')
  var i2265 = i2261[7]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2265[i + 0]) );
  }
  i2260.blendShapesWeights = i2264
  i2260.enabled = !!i2261[8]
  request.r(i2261[9], i2261[10], 0, i2260, 'sharedMaterial')
  var i2267 = i2261[11]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 2) {
  request.r(i2267[i + 0], i2267[i + 1], 2, i2266, '')
  }
  i2260.sharedMaterials = i2266
  i2260.receiveShadows = !!i2261[12]
  i2260.shadowCastingMode = i2261[13]
  i2260.sortingLayerID = i2261[14]
  i2260.sortingOrder = i2261[15]
  i2260.lightmapIndex = i2261[16]
  i2260.lightmapSceneIndex = i2261[17]
  i2260.lightmapScaleOffset = new pc.Vec4( i2261[18], i2261[19], i2261[20], i2261[21] )
  i2260.lightProbeUsage = i2261[22]
  i2260.reflectionProbeUsage = i2261[23]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2271 = data
  i2270.weight = i2271[0]
  return i2270
}

Deserializers["HyperCasual.Runner.InputManager"] = function (request, data, root) {
  var i2272 = root || request.c( 'HyperCasual.Runner.InputManager' )
  var i2273 = data
  i2272.m_InputSensitivity = i2273[0]
  return i2272
}

Deserializers["HyperCasual.Runner.Inventory"] = function (request, data, root) {
  var i2274 = root || request.c( 'HyperCasual.Runner.Inventory' )
  var i2275 = data
  i2274.m_GoldEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2275[0], i2274.m_GoldEventListener)
  i2274.m_KeyEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2275[1], i2274.m_KeyEventListener)
  i2274.m_WinEventListener = request.d('HyperCasual.Core.GenericGameEventListener', i2275[2], i2274.m_WinEventListener)
  return i2274
}

Deserializers["HyperCasual.Core.GenericGameEventListener"] = function (request, data, root) {
  var i2276 = root || request.c( 'HyperCasual.Core.GenericGameEventListener' )
  var i2277 = data
  request.r(i2277[0], i2277[1], 0, i2276, 'm_Event')
  i2276.EventHandler = request.d('System.Action', i2277[2], i2276.EventHandler)
  return i2276
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2278 = root || request.c( 'System.Action' )
  var i2279 = data
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2281 = data
  i2280.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2281[0], i2280.main)
  i2280.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2281[1], i2280.colorBySpeed)
  i2280.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2281[2], i2280.colorOverLifetime)
  i2280.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2281[3], i2280.emission)
  i2280.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2281[4], i2280.rotationBySpeed)
  i2280.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2281[5], i2280.rotationOverLifetime)
  i2280.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2281[6], i2280.shape)
  i2280.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2281[7], i2280.sizeBySpeed)
  i2280.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2281[8], i2280.sizeOverLifetime)
  i2280.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2281[9], i2280.textureSheetAnimation)
  i2280.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2281[10], i2280.velocityOverLifetime)
  i2280.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2281[11], i2280.noise)
  i2280.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2281[12], i2280.inheritVelocity)
  i2280.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2281[13], i2280.forceOverLifetime)
  i2280.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2281[14], i2280.limitVelocityOverLifetime)
  i2280.useAutoRandomSeed = !!i2281[15]
  i2280.randomSeed = i2281[16]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2282 = root || new pc.ParticleSystemMain()
  var i2283 = data
  i2282.duration = i2283[0]
  i2282.loop = !!i2283[1]
  i2282.prewarm = !!i2283[2]
  i2282.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[3], i2282.startDelay)
  i2282.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[4], i2282.startLifetime)
  i2282.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[5], i2282.startSpeed)
  i2282.startSize3D = !!i2283[6]
  i2282.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[7], i2282.startSizeX)
  i2282.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[8], i2282.startSizeY)
  i2282.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[9], i2282.startSizeZ)
  i2282.startRotation3D = !!i2283[10]
  i2282.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[11], i2282.startRotationX)
  i2282.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[12], i2282.startRotationY)
  i2282.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[13], i2282.startRotationZ)
  i2282.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2283[14], i2282.startColor)
  i2282.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2283[15], i2282.gravityModifier)
  i2282.simulationSpace = i2283[16]
  request.r(i2283[17], i2283[18], 0, i2282, 'customSimulationSpace')
  i2282.simulationSpeed = i2283[19]
  i2282.useUnscaledTime = !!i2283[20]
  i2282.scalingMode = i2283[21]
  i2282.playOnAwake = !!i2283[22]
  i2282.maxParticles = i2283[23]
  i2282.emitterVelocityMode = i2283[24]
  i2282.stopAction = i2283[25]
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2284 = root || new pc.MinMaxCurve()
  var i2285 = data
  i2284.mode = i2285[0]
  i2284.curveMin = new pc.AnimationCurve( { keys_flow: i2285[1] } )
  i2284.curveMax = new pc.AnimationCurve( { keys_flow: i2285[2] } )
  i2284.curveMultiplier = i2285[3]
  i2284.constantMin = i2285[4]
  i2284.constantMax = i2285[5]
  return i2284
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2286 = root || new pc.MinMaxGradient()
  var i2287 = data
  i2286.mode = i2287[0]
  i2286.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2287[1], i2286.gradientMin)
  i2286.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2287[2], i2286.gradientMax)
  i2286.colorMin = new pc.Color(i2287[3], i2287[4], i2287[5], i2287[6])
  i2286.colorMax = new pc.Color(i2287[7], i2287[8], i2287[9], i2287[10])
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2289 = data
  i2288.mode = i2289[0]
  var i2291 = i2289[1]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2291[i + 0]) );
  }
  i2288.colorKeys = i2290
  var i2293 = i2289[2]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2293[i + 0]) );
  }
  i2288.alphaKeys = i2292
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2294 = root || new pc.ParticleSystemColorBySpeed()
  var i2295 = data
  i2294.enabled = !!i2295[0]
  i2294.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2295[1], i2294.color)
  i2294.range = new pc.Vec2( i2295[2], i2295[3] )
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2299 = data
  i2298.color = new pc.Color(i2299[0], i2299[1], i2299[2], i2299[3])
  i2298.time = i2299[4]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2303 = data
  i2302.alpha = i2303[0]
  i2302.time = i2303[1]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2304 = root || new pc.ParticleSystemColorOverLifetime()
  var i2305 = data
  i2304.enabled = !!i2305[0]
  i2304.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2305[1], i2304.color)
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2306 = root || new pc.ParticleSystemEmitter()
  var i2307 = data
  i2306.enabled = !!i2307[0]
  i2306.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[1], i2306.rateOverTime)
  i2306.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2307[2], i2306.rateOverDistance)
  var i2309 = i2307[3]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2309[i + 0]) );
  }
  i2306.bursts = i2308
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemBurst()
  var i2313 = data
  i2312.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2313[0], i2312.count)
  i2312.cycleCount = i2313[1]
  i2312.minCount = i2313[2]
  i2312.maxCount = i2313[3]
  i2312.repeatInterval = i2313[4]
  i2312.time = i2313[5]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2314 = root || new pc.ParticleSystemRotationBySpeed()
  var i2315 = data
  i2314.enabled = !!i2315[0]
  i2314.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[1], i2314.x)
  i2314.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[2], i2314.y)
  i2314.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2315[3], i2314.z)
  i2314.separateAxes = !!i2315[4]
  i2314.range = new pc.Vec2( i2315[5], i2315[6] )
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2316 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2317 = data
  i2316.enabled = !!i2317[0]
  i2316.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[1], i2316.x)
  i2316.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[2], i2316.y)
  i2316.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2317[3], i2316.z)
  i2316.separateAxes = !!i2317[4]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2318 = root || new pc.ParticleSystemShape()
  var i2319 = data
  i2318.enabled = !!i2319[0]
  i2318.shapeType = i2319[1]
  i2318.randomDirectionAmount = i2319[2]
  i2318.sphericalDirectionAmount = i2319[3]
  i2318.randomPositionAmount = i2319[4]
  i2318.alignToDirection = !!i2319[5]
  i2318.radius = i2319[6]
  i2318.radiusMode = i2319[7]
  i2318.radiusSpread = i2319[8]
  i2318.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[9], i2318.radiusSpeed)
  i2318.radiusThickness = i2319[10]
  i2318.angle = i2319[11]
  i2318.length = i2319[12]
  i2318.boxThickness = new pc.Vec3( i2319[13], i2319[14], i2319[15] )
  i2318.meshShapeType = i2319[16]
  request.r(i2319[17], i2319[18], 0, i2318, 'mesh')
  request.r(i2319[19], i2319[20], 0, i2318, 'meshRenderer')
  request.r(i2319[21], i2319[22], 0, i2318, 'skinnedMeshRenderer')
  i2318.useMeshMaterialIndex = !!i2319[23]
  i2318.meshMaterialIndex = i2319[24]
  i2318.useMeshColors = !!i2319[25]
  i2318.normalOffset = i2319[26]
  i2318.arc = i2319[27]
  i2318.arcMode = i2319[28]
  i2318.arcSpread = i2319[29]
  i2318.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2319[30], i2318.arcSpeed)
  i2318.donutRadius = i2319[31]
  i2318.position = new pc.Vec3( i2319[32], i2319[33], i2319[34] )
  i2318.rotation = new pc.Vec3( i2319[35], i2319[36], i2319[37] )
  i2318.scale = new pc.Vec3( i2319[38], i2319[39], i2319[40] )
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2320 = root || new pc.ParticleSystemSizeBySpeed()
  var i2321 = data
  i2320.enabled = !!i2321[0]
  i2320.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[1], i2320.x)
  i2320.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[2], i2320.y)
  i2320.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2321[3], i2320.z)
  i2320.separateAxes = !!i2321[4]
  i2320.range = new pc.Vec2( i2321[5], i2321[6] )
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[1], i2322.x)
  i2322.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[2], i2322.y)
  i2322.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2323[3], i2322.z)
  i2322.separateAxes = !!i2323[4]
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2324 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2325 = data
  i2324.enabled = !!i2325[0]
  i2324.mode = i2325[1]
  i2324.animation = i2325[2]
  i2324.numTilesX = i2325[3]
  i2324.numTilesY = i2325[4]
  i2324.useRandomRow = !!i2325[5]
  i2324.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[6], i2324.frameOverTime)
  i2324.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[7], i2324.startFrame)
  i2324.cycleCount = i2325[8]
  i2324.rowIndex = i2325[9]
  i2324.flipU = i2325[10]
  i2324.flipV = i2325[11]
  i2324.spriteCount = i2325[12]
  var i2327 = i2325[13]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 2) {
  request.r(i2327[i + 0], i2327[i + 1], 2, i2326, '')
  }
  i2324.sprites = i2326
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2330 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2331 = data
  i2330.enabled = !!i2331[0]
  i2330.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[1], i2330.x)
  i2330.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[2], i2330.y)
  i2330.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[3], i2330.z)
  i2330.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[4], i2330.radial)
  i2330.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[5], i2330.speedModifier)
  i2330.space = i2331[6]
  i2330.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[7], i2330.orbitalX)
  i2330.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[8], i2330.orbitalY)
  i2330.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[9], i2330.orbitalZ)
  i2330.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[10], i2330.orbitalOffsetX)
  i2330.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[11], i2330.orbitalOffsetY)
  i2330.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[12], i2330.orbitalOffsetZ)
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2332 = root || new pc.ParticleSystemNoise()
  var i2333 = data
  i2332.enabled = !!i2333[0]
  i2332.separateAxes = !!i2333[1]
  i2332.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[2], i2332.strengthX)
  i2332.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[3], i2332.strengthY)
  i2332.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[4], i2332.strengthZ)
  i2332.frequency = i2333[5]
  i2332.damping = !!i2333[6]
  i2332.octaveCount = i2333[7]
  i2332.octaveMultiplier = i2333[8]
  i2332.octaveScale = i2333[9]
  i2332.quality = i2333[10]
  i2332.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[11], i2332.scrollSpeed)
  i2332.scrollSpeedMultiplier = i2333[12]
  i2332.remapEnabled = !!i2333[13]
  i2332.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[14], i2332.remapX)
  i2332.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[15], i2332.remapY)
  i2332.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[16], i2332.remapZ)
  i2332.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[17], i2332.positionAmount)
  i2332.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[18], i2332.rotationAmount)
  i2332.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[19], i2332.sizeAmount)
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2334 = root || new pc.ParticleSystemInheritVelocity()
  var i2335 = data
  i2334.enabled = !!i2335[0]
  i2334.mode = i2335[1]
  i2334.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[2], i2334.curve)
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2336 = root || new pc.ParticleSystemForceOverLifetime()
  var i2337 = data
  i2336.enabled = !!i2337[0]
  i2336.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[1], i2336.x)
  i2336.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[2], i2336.y)
  i2336.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[3], i2336.z)
  i2336.space = i2337[4]
  i2336.randomized = !!i2337[5]
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2338 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2339 = data
  i2338.enabled = !!i2339[0]
  i2338.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[1], i2338.limit)
  i2338.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[2], i2338.limitX)
  i2338.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[3], i2338.limitY)
  i2338.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[4], i2338.limitZ)
  i2338.dampen = i2339[5]
  i2338.separateAxes = !!i2339[6]
  i2338.space = i2339[7]
  i2338.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[8], i2338.drag)
  i2338.multiplyDragByParticleSize = !!i2339[9]
  i2338.multiplyDragByParticleVelocity = !!i2339[10]
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2341 = data
  request.r(i2341[0], i2341[1], 0, i2340, 'mesh')
  i2340.meshCount = i2341[2]
  i2340.activeVertexStreamsCount = i2341[3]
  i2340.alignment = i2341[4]
  i2340.renderMode = i2341[5]
  i2340.sortMode = i2341[6]
  i2340.lengthScale = i2341[7]
  i2340.velocityScale = i2341[8]
  i2340.cameraVelocityScale = i2341[9]
  i2340.normalDirection = i2341[10]
  i2340.sortingFudge = i2341[11]
  i2340.minParticleSize = i2341[12]
  i2340.maxParticleSize = i2341[13]
  i2340.pivot = new pc.Vec3( i2341[14], i2341[15], i2341[16] )
  request.r(i2341[17], i2341[18], 0, i2340, 'trailMaterial')
  i2340.applyActiveColorSpace = !!i2341[19]
  i2340.enabled = !!i2341[20]
  request.r(i2341[21], i2341[22], 0, i2340, 'sharedMaterial')
  var i2343 = i2341[23]
  var i2342 = []
  for(var i = 0; i < i2343.length; i += 2) {
  request.r(i2343[i + 0], i2343[i + 1], 2, i2342, '')
  }
  i2340.sharedMaterials = i2342
  i2340.receiveShadows = !!i2341[24]
  i2340.shadowCastingMode = i2341[25]
  i2340.sortingLayerID = i2341[26]
  i2340.sortingOrder = i2341[27]
  i2340.lightmapIndex = i2341[28]
  i2340.lightmapSceneIndex = i2341[29]
  i2340.lightmapScaleOffset = new pc.Vec4( i2341[30], i2341[31], i2341[32], i2341[33] )
  i2340.lightProbeUsage = i2341[34]
  i2340.reflectionProbeUsage = i2341[35]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2345 = data
  i2344.name = i2345[0]
  i2344.atlasId = i2345[1]
  i2344.mipmapCount = i2345[2]
  i2344.hdr = !!i2345[3]
  i2344.size = i2345[4]
  i2344.anisoLevel = i2345[5]
  i2344.filterMode = i2345[6]
  var i2347 = i2345[7]
  var i2346 = []
  for(var i = 0; i < i2347.length; i += 4) {
    i2346.push( UnityEngine.Rect.MinMaxRect(i2347[i + 0], i2347[i + 1], i2347[i + 2], i2347[i + 3]) );
  }
  i2344.rects = i2346
  i2344.wrapU = i2345[8]
  i2344.wrapV = i2345[9]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2351 = data
  i2350.name = i2351[0]
  i2350.index = i2351[1]
  i2350.startup = !!i2351[2]
  return i2350
}

Deserializers["PlayableSettings"] = function (request, data, root) {
  var i2352 = root || request.c( 'PlayableSettings' )
  var i2353 = data
  i2352.m_SkipMainMenu = !!i2353[0]
  i2352.m_UseCTAScreen = !!i2353[1]
  i2352.m_EndcardActivationSendsToStore = !!i2353[2]
  i2352.m_ShowEndcardAfterXTaps = !!i2353[3]
  i2352.m_TapsBeforeShowingEndcard = i2353[4]
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2355 = data
  i2354.pivot = new pc.Vec2( i2355[0], i2355[1] )
  i2354.anchorMin = new pc.Vec2( i2355[2], i2355[3] )
  i2354.anchorMax = new pc.Vec2( i2355[4], i2355[5] )
  i2354.sizeDelta = new pc.Vec2( i2355[6], i2355[7] )
  i2354.anchoredPosition3D = new pc.Vec3( i2355[8], i2355[9], i2355[10] )
  i2354.rotation = new pc.Quat(i2355[11], i2355[12], i2355[13], i2355[14])
  i2354.scale = new pc.Vec3( i2355[15], i2355[16], i2355[17] )
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2357 = data
  i2356.planeDistance = i2357[0]
  i2356.referencePixelsPerUnit = i2357[1]
  i2356.isFallbackOverlay = !!i2357[2]
  i2356.renderMode = i2357[3]
  i2356.renderOrder = i2357[4]
  i2356.sortingLayerName = i2357[5]
  i2356.sortingOrder = i2357[6]
  i2356.scaleFactor = i2357[7]
  request.r(i2357[8], i2357[9], 0, i2356, 'worldCamera')
  i2356.overrideSorting = !!i2357[10]
  i2356.pixelPerfect = !!i2357[11]
  i2356.targetDisplay = i2357[12]
  i2356.overridePixelPerfect = !!i2357[13]
  i2356.enabled = !!i2357[14]
  return i2356
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2358 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2359 = data
  i2358.m_UiScaleMode = i2359[0]
  i2358.m_ReferencePixelsPerUnit = i2359[1]
  i2358.m_ScaleFactor = i2359[2]
  i2358.m_ReferenceResolution = new pc.Vec2( i2359[3], i2359[4] )
  i2358.m_ScreenMatchMode = i2359[5]
  i2358.m_MatchWidthOrHeight = i2359[6]
  i2358.m_PhysicalUnit = i2359[7]
  i2358.m_FallbackScreenDPI = i2359[8]
  i2358.m_DefaultSpriteDPI = i2359[9]
  i2358.m_DynamicPixelsPerUnit = i2359[10]
  i2358.m_PresetInfoIsWorld = !!i2359[11]
  return i2358
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2360 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2361 = data
  i2360.m_IgnoreReversedGraphics = !!i2361[0]
  i2360.m_BlockingObjects = i2361[1]
  i2360.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2361[2] )
  return i2360
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i2362 = root || request.c( 'EndCardController' )
  var i2363 = data
  i2362.alwaysShowEndcardTESTING = !!i2363[0]
  i2362.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i2363[1], i2362.EndCardOpenedEvent)
  i2362._backgroundColor = new pc.Color(i2363[2], i2363[3], i2363[4], i2363[5])
  request.r(i2363[6], i2363[7], 0, i2362, '_backgroundTexture')
  request.r(i2363[8], i2363[9], 0, i2362, '_iconTexture')
  i2362._iconColor = new pc.Color(i2363[10], i2363[11], i2363[12], i2363[13])
  request.r(i2363[14], i2363[15], 0, i2362, '_buttonTexture')
  i2362._buttonColor = new pc.Color(i2363[16], i2363[17], i2363[18], i2363[19])
  i2362._endCardDescriptionText = i2363[20]
  i2362._CTAButtonText = i2363[21]
  i2362._useBestFitOnCTA = !!i2363[22]
  i2362._CTAFontColor = new pc.Color(i2363[23], i2363[24], i2363[25], i2363[26])
  i2362._descriptionFontColor = new pc.Color(i2363[27], i2363[28], i2363[29], i2363[30])
  request.r(i2363[31], i2363[32], 0, i2362, '_CTAFont')
  request.r(i2363[33], i2363[34], 0, i2362, '_descriptionFont')
  i2362._CTAFontSize = i2363[35]
  i2362._descriptionFontSize = i2363[36]
  i2362._centerDescriptionX = !!i2363[37]
  i2362._centerDescriptionY = !!i2363[38]
  i2362._centerButtonX = !!i2363[39]
  i2362._centerButtonY = !!i2363[40]
  i2362._descriptionPositionX = i2363[41]
  i2362._descriptionPositionY = i2363[42]
  i2362._buttonPositionX = i2363[43]
  i2362._buttonPositionY = i2363[44]
  i2362._CTAFontSizeLandscape = i2363[45]
  i2362._descriptionFontSizeLandscape = i2363[46]
  i2362._centerDescriptionXLandscape = !!i2363[47]
  i2362._centerDescriptionYLandscape = !!i2363[48]
  i2362._centerButtonXLandscape = !!i2363[49]
  i2362._centerButtonYLandscape = !!i2363[50]
  i2362._descriptionPositionXLandscape = i2363[51]
  i2362._descriptionPositionYLandscape = i2363[52]
  i2362._buttonPositionXLandscape = i2363[53]
  i2362._buttonPositionYLandscape = i2363[54]
  i2362._centerIconX = !!i2363[55]
  i2362._centerIconY = !!i2363[56]
  i2362._iconPositionX = i2363[57]
  i2362._iconPositionY = i2363[58]
  i2362._iconSize = i2363[59]
  i2362._roundEdgesOnIcon = !!i2363[60]
  i2362._centerIconXLandscape = !!i2363[61]
  i2362._centerIconYLandscape = !!i2363[62]
  i2362._iconPositionXLandscape = i2363[63]
  i2362._iconPositionYLandscape = i2363[64]
  i2362._iconSizeLandscape = i2363[65]
  i2362._roundEdgesOnIconLandscape = !!i2363[66]
  i2362._endCardClickableOptions = i2363[67]
  i2362._buttonAnimationType = i2363[68]
  i2362._endCardPortraitAnimationType = i2363[69]
  i2362._endCardLandscapeAnimationType = i2363[70]
  request.r(i2363[71], i2363[72], 0, i2362, '_backgroundImage')
  request.r(i2363[73], i2363[74], 0, i2362, '_CTAButton')
  request.r(i2363[75], i2363[76], 0, i2362, '_ScreenCTAButton')
  request.r(i2363[77], i2363[78], 0, i2362, '_CTAButtonTextText')
  request.r(i2363[79], i2363[80], 0, i2362, '_EndCardDescriptionTextText')
  request.r(i2363[81], i2363[82], 0, i2362, '_maskIcon')
  request.r(i2363[83], i2363[84], 0, i2362, '_iconRect')
  request.r(i2363[85], i2363[86], 0, i2362, '_iconRectMask')
  request.r(i2363[87], i2363[88], 0, i2362, '_descriptionRect')
  request.r(i2363[89], i2363[90], 0, i2362, '_buttonRect')
  request.r(i2363[91], i2363[92], 0, i2362, '_CTAButtonAnimator')
  request.r(i2363[93], i2363[94], 0, i2362, '_endCardAnimator')
  request.r(i2363[95], i2363[96], 0, i2362, '_iconImage')
  request.r(i2363[97], i2363[98], 0, i2362, '_CTAButtonImage')
  return i2362
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2364 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2365 = data
  i2364.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2365[0], i2364.m_PersistentCalls)
  return i2364
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2366 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2367 = data
  var i2369 = i2367[0]
  var i2368 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.add(request.d('UnityEngine.Events.PersistentCall', i2369[i + 0]));
  }
  i2366.m_Calls = i2368
  return i2366
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2372 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2373 = data
  request.r(i2373[0], i2373[1], 0, i2372, 'm_Target')
  i2372.m_TargetAssemblyTypeName = i2373[2]
  i2372.m_MethodName = i2373[3]
  i2372.m_Mode = i2373[4]
  i2372.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2373[5], i2372.m_Arguments)
  i2372.m_CallState = i2373[6]
  return i2372
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i2374 = root || request.c( 'EndCardSetScale' )
  var i2375 = data
  return i2374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2377 = data
  i2376.cullTransparentMesh = !!i2377[0]
  return i2376
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2378 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2379 = data
  i2378.m_AspectMode = i2379[0]
  i2378.m_AspectRatio = i2379[1]
  return i2378
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2380 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2381 = data
  request.r(i2381[0], i2381[1], 0, i2380, 'm_Texture')
  i2380.m_UVRect = UnityEngine.Rect.MinMaxRect(i2381[2], i2381[3], i2381[4], i2381[5])
  request.r(i2381[6], i2381[7], 0, i2380, 'm_Material')
  i2380.m_Maskable = !!i2381[8]
  i2380.m_Color = new pc.Color(i2381[9], i2381[10], i2381[11], i2381[12])
  i2380.m_RaycastTarget = !!i2381[13]
  i2380.m_RaycastPadding = new pc.Vec4( i2381[14], i2381[15], i2381[16], i2381[17] )
  return i2380
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i2382 = root || request.c( 'UnityEngine.UI.Mask' )
  var i2383 = data
  i2382.m_ShowMaskGraphic = !!i2383[0]
  return i2382
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2384 = root || request.c( 'UnityEngine.UI.Image' )
  var i2385 = data
  request.r(i2385[0], i2385[1], 0, i2384, 'm_Sprite')
  i2384.m_Type = i2385[2]
  i2384.m_PreserveAspect = !!i2385[3]
  i2384.m_FillCenter = !!i2385[4]
  i2384.m_FillMethod = i2385[5]
  i2384.m_FillAmount = i2385[6]
  i2384.m_FillClockwise = !!i2385[7]
  i2384.m_FillOrigin = i2385[8]
  i2384.m_UseSpriteMesh = !!i2385[9]
  i2384.m_PixelsPerUnitMultiplier = i2385[10]
  request.r(i2385[11], i2385[12], 0, i2384, 'm_Material')
  i2384.m_Maskable = !!i2385[13]
  i2384.m_Color = new pc.Color(i2385[14], i2385[15], i2385[16], i2385[17])
  i2384.m_RaycastTarget = !!i2385[18]
  i2384.m_RaycastPadding = new pc.Vec4( i2385[19], i2385[20], i2385[21], i2385[22] )
  return i2384
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2386 = root || request.c( 'UnityEngine.UI.Text' )
  var i2387 = data
  i2386.m_FontData = request.d('UnityEngine.UI.FontData', i2387[0], i2386.m_FontData)
  i2386.m_Text = i2387[1]
  request.r(i2387[2], i2387[3], 0, i2386, 'm_Material')
  i2386.m_Maskable = !!i2387[4]
  i2386.m_Color = new pc.Color(i2387[5], i2387[6], i2387[7], i2387[8])
  i2386.m_RaycastTarget = !!i2387[9]
  i2386.m_RaycastPadding = new pc.Vec4( i2387[10], i2387[11], i2387[12], i2387[13] )
  return i2386
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2388 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2389 = data
  request.r(i2389[0], i2389[1], 0, i2388, 'm_Font')
  i2388.m_FontSize = i2389[2]
  i2388.m_FontStyle = i2389[3]
  i2388.m_BestFit = !!i2389[4]
  i2388.m_MinSize = i2389[5]
  i2388.m_MaxSize = i2389[6]
  i2388.m_Alignment = i2389[7]
  i2388.m_AlignByGeometry = !!i2389[8]
  i2388.m_RichText = !!i2389[9]
  i2388.m_HorizontalOverflow = i2389[10]
  i2388.m_VerticalOverflow = i2389[11]
  i2388.m_LineSpacing = i2389[12]
  return i2388
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.UI.Button' )
  var i2391 = data
  i2390.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2391[0], i2390.m_OnClick)
  i2390.m_Navigation = request.d('UnityEngine.UI.Navigation', i2391[1], i2390.m_Navigation)
  i2390.m_Transition = i2391[2]
  i2390.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2391[3], i2390.m_Colors)
  i2390.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2391[4], i2390.m_SpriteState)
  i2390.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2391[5], i2390.m_AnimationTriggers)
  i2390.m_Interactable = !!i2391[6]
  request.r(i2391[7], i2391[8], 0, i2390, 'm_TargetGraphic')
  return i2390
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2393 = data
  i2392.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2393[0], i2392.m_PersistentCalls)
  return i2392
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2395 = data
  request.r(i2395[0], i2395[1], 0, i2394, 'm_ObjectArgument')
  i2394.m_ObjectArgumentAssemblyTypeName = i2395[2]
  i2394.m_IntArgument = i2395[3]
  i2394.m_FloatArgument = i2395[4]
  i2394.m_StringArgument = i2395[5]
  i2394.m_BoolArgument = !!i2395[6]
  return i2394
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2397 = data
  i2396.m_Mode = i2397[0]
  i2396.m_WrapAround = !!i2397[1]
  request.r(i2397[2], i2397[3], 0, i2396, 'm_SelectOnUp')
  request.r(i2397[4], i2397[5], 0, i2396, 'm_SelectOnDown')
  request.r(i2397[6], i2397[7], 0, i2396, 'm_SelectOnLeft')
  request.r(i2397[8], i2397[9], 0, i2396, 'm_SelectOnRight')
  return i2396
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2399 = data
  i2398.m_NormalColor = new pc.Color(i2399[0], i2399[1], i2399[2], i2399[3])
  i2398.m_HighlightedColor = new pc.Color(i2399[4], i2399[5], i2399[6], i2399[7])
  i2398.m_PressedColor = new pc.Color(i2399[8], i2399[9], i2399[10], i2399[11])
  i2398.m_SelectedColor = new pc.Color(i2399[12], i2399[13], i2399[14], i2399[15])
  i2398.m_DisabledColor = new pc.Color(i2399[16], i2399[17], i2399[18], i2399[19])
  i2398.m_ColorMultiplier = i2399[20]
  i2398.m_FadeDuration = i2399[21]
  return i2398
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2401 = data
  request.r(i2401[0], i2401[1], 0, i2400, 'm_HighlightedSprite')
  request.r(i2401[2], i2401[3], 0, i2400, 'm_PressedSprite')
  request.r(i2401[4], i2401[5], 0, i2400, 'm_SelectedSprite')
  request.r(i2401[6], i2401[7], 0, i2400, 'm_DisabledSprite')
  return i2400
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2403 = data
  i2402.m_NormalTrigger = i2403[0]
  i2402.m_HighlightedTrigger = i2403[1]
  i2402.m_PressedTrigger = i2403[2]
  i2402.m_SelectedTrigger = i2403[3]
  i2402.m_DisabledTrigger = i2403[4]
  return i2402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i2404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i2405 = data
  i2404.m_Alpha = i2405[0]
  i2404.m_Interactable = !!i2405[1]
  i2404.m_BlocksRaycasts = !!i2405[2]
  i2404.m_IgnoreParentGroups = !!i2405[3]
  i2404.enabled = !!i2405[4]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2407 = data
  i2406.type = i2407[0]
  i2406.color = new pc.Color(i2407[1], i2407[2], i2407[3], i2407[4])
  i2406.cullingMask = i2407[5]
  i2406.intensity = i2407[6]
  i2406.range = i2407[7]
  i2406.spotAngle = i2407[8]
  i2406.shadows = i2407[9]
  i2406.shadowNormalBias = i2407[10]
  i2406.shadowBias = i2407[11]
  i2406.shadowStrength = i2407[12]
  i2406.shadowResolution = i2407[13]
  i2406.lightmapBakeType = i2407[14]
  i2406.renderMode = i2407[15]
  request.r(i2407[16], i2407[17], 0, i2406, 'cookie')
  i2406.cookieSize = i2407[18]
  i2406.shadowNearPlane = i2407[19]
  i2406.occlusionMaskChannel = i2407[20]
  i2406.isBaked = !!i2407[21]
  i2406.mixedLightingMode = i2407[22]
  i2406.enabled = !!i2407[23]
  return i2406
}

Deserializers["SimpleDeactivateOnTap"] = function (request, data, root) {
  var i2408 = root || request.c( 'SimpleDeactivateOnTap' )
  var i2409 = data
  return i2408
}

Deserializers["DOTWeenPulseAnim"] = function (request, data, root) {
  var i2410 = root || request.c( 'DOTWeenPulseAnim' )
  var i2411 = data
  i2410.pulseSize = new pc.Vec2( i2411[0], i2411[1] )
  i2410.pulseDuration = i2411[2]
  i2410.ease = i2411[3]
  return i2410
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i2412 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i2413 = data
  i2412.m_hasFontAssetChanged = !!i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'm_baseMaterial')
  i2412.m_maskOffset = new pc.Vec4( i2413[3], i2413[4], i2413[5], i2413[6] )
  i2412.m_text = i2413[7]
  i2412.m_isRightToLeft = !!i2413[8]
  request.r(i2413[9], i2413[10], 0, i2412, 'm_fontAsset')
  request.r(i2413[11], i2413[12], 0, i2412, 'm_sharedMaterial')
  var i2415 = i2413[13]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 2) {
  request.r(i2415[i + 0], i2415[i + 1], 2, i2414, '')
  }
  i2412.m_fontSharedMaterials = i2414
  request.r(i2413[14], i2413[15], 0, i2412, 'm_fontMaterial')
  var i2417 = i2413[16]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 2) {
  request.r(i2417[i + 0], i2417[i + 1], 2, i2416, '')
  }
  i2412.m_fontMaterials = i2416
  i2412.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2413[17], i2413[18], i2413[19], i2413[20])
  i2412.m_fontColor = new pc.Color(i2413[21], i2413[22], i2413[23], i2413[24])
  i2412.m_enableVertexGradient = !!i2413[25]
  i2412.m_colorMode = i2413[26]
  i2412.m_fontColorGradient = request.d('TMPro.VertexGradient', i2413[27], i2412.m_fontColorGradient)
  request.r(i2413[28], i2413[29], 0, i2412, 'm_fontColorGradientPreset')
  request.r(i2413[30], i2413[31], 0, i2412, 'm_spriteAsset')
  i2412.m_tintAllSprites = !!i2413[32]
  request.r(i2413[33], i2413[34], 0, i2412, 'm_StyleSheet')
  i2412.m_TextStyleHashCode = i2413[35]
  i2412.m_overrideHtmlColors = !!i2413[36]
  i2412.m_faceColor = UnityEngine.Color32.ConstructColor(i2413[37], i2413[38], i2413[39], i2413[40])
  i2412.m_fontSize = i2413[41]
  i2412.m_fontSizeBase = i2413[42]
  i2412.m_fontWeight = i2413[43]
  i2412.m_enableAutoSizing = !!i2413[44]
  i2412.m_fontSizeMin = i2413[45]
  i2412.m_fontSizeMax = i2413[46]
  i2412.m_fontStyle = i2413[47]
  i2412.m_HorizontalAlignment = i2413[48]
  i2412.m_VerticalAlignment = i2413[49]
  i2412.m_textAlignment = i2413[50]
  i2412.m_characterSpacing = i2413[51]
  i2412.m_wordSpacing = i2413[52]
  i2412.m_lineSpacing = i2413[53]
  i2412.m_lineSpacingMax = i2413[54]
  i2412.m_paragraphSpacing = i2413[55]
  i2412.m_charWidthMaxAdj = i2413[56]
  i2412.m_enableWordWrapping = !!i2413[57]
  i2412.m_wordWrappingRatios = i2413[58]
  i2412.m_overflowMode = i2413[59]
  request.r(i2413[60], i2413[61], 0, i2412, 'm_linkedTextComponent')
  request.r(i2413[62], i2413[63], 0, i2412, 'parentLinkedComponent')
  i2412.m_enableKerning = !!i2413[64]
  i2412.m_enableExtraPadding = !!i2413[65]
  i2412.checkPaddingRequired = !!i2413[66]
  i2412.m_isRichText = !!i2413[67]
  i2412.m_parseCtrlCharacters = !!i2413[68]
  i2412.m_isOrthographic = !!i2413[69]
  i2412.m_isCullingEnabled = !!i2413[70]
  i2412.m_horizontalMapping = i2413[71]
  i2412.m_verticalMapping = i2413[72]
  i2412.m_uvLineOffset = i2413[73]
  i2412.m_geometrySortingOrder = i2413[74]
  i2412.m_IsTextObjectScaleStatic = !!i2413[75]
  i2412.m_VertexBufferAutoSizeReduction = !!i2413[76]
  i2412.m_useMaxVisibleDescender = !!i2413[77]
  i2412.m_pageToDisplay = i2413[78]
  i2412.m_margin = new pc.Vec4( i2413[79], i2413[80], i2413[81], i2413[82] )
  i2412.m_isUsingLegacyAnimationComponent = !!i2413[83]
  i2412.m_isVolumetricText = !!i2413[84]
  request.r(i2413[85], i2413[86], 0, i2412, 'm_Material')
  i2412.m_Maskable = !!i2413[87]
  i2412.m_Color = new pc.Color(i2413[88], i2413[89], i2413[90], i2413[91])
  i2412.m_RaycastTarget = !!i2413[92]
  i2412.m_RaycastPadding = new pc.Vec4( i2413[93], i2413[94], i2413[95], i2413[96] )
  return i2412
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i2418 = root || request.c( 'TMPro.VertexGradient' )
  var i2419 = data
  i2418.topLeft = new pc.Color(i2419[0], i2419[1], i2419[2], i2419[3])
  i2418.topRight = new pc.Color(i2419[4], i2419[5], i2419[6], i2419[7])
  i2418.bottomLeft = new pc.Color(i2419[8], i2419[9], i2419[10], i2419[11])
  i2418.bottomRight = new pc.Color(i2419[12], i2419[13], i2419[14], i2419[15])
  return i2418
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2421 = data
  request.r(i2421[0], i2421[1], 0, i2420, 'm_FirstSelected')
  i2420.m_sendNavigationEvents = !!i2421[2]
  i2420.m_DragThreshold = i2421[3]
  return i2420
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2423 = data
  i2422.m_HorizontalAxis = i2423[0]
  i2422.m_VerticalAxis = i2423[1]
  i2422.m_SubmitButton = i2423[2]
  i2422.m_CancelButton = i2423[3]
  i2422.m_InputActionsPerSecond = i2423[4]
  i2422.m_RepeatDelay = i2423[5]
  i2422.m_ForceModuleActive = !!i2423[6]
  i2422.m_SendPointerHoverToParent = !!i2423[7]
  return i2422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2425 = data
  request.r(i2425[0], i2425[1], 0, i2424, 'sharedMesh')
  i2424.convex = !!i2425[2]
  i2424.enabled = !!i2425[3]
  i2424.isTrigger = !!i2425[4]
  request.r(i2425[5], i2425[6], 0, i2424, 'material')
  return i2424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2427 = data
  i2426.center = new pc.Vec3( i2427[0], i2427[1], i2427[2] )
  i2426.size = new pc.Vec3( i2427[3], i2427[4], i2427[5] )
  i2426.enabled = !!i2427[6]
  i2426.isTrigger = !!i2427[7]
  request.r(i2427[8], i2427[9], 0, i2426, 'material')
  return i2426
}

Deserializers["Assets.Scripts.Water.WaterArea"] = function (request, data, root) {
  var i2428 = root || request.c( 'Assets.Scripts.Water.WaterArea' )
  var i2429 = data
  request.r(i2429[0], i2429[1], 0, i2428, 'waterProperties')
  return i2428
}

Deserializers["Assets.Scripts.Water.WaterPropertyBlockSetter"] = function (request, data, root) {
  var i2430 = root || request.c( 'Assets.Scripts.Water.WaterPropertyBlockSetter' )
  var i2431 = data
  var i2433 = i2431[0]
  var i2432 = []
  for(var i = 0; i < i2433.length; i += 2) {
  request.r(i2433[i + 0], i2433[i + 1], 2, i2432, '')
  }
  i2430.waterRenderers = i2432
  i2430.waterColor = new pc.Color(i2431[1], i2431[2], i2431[3], i2431[4])
  request.r(i2431[5], i2431[6], 0, i2430, 'waterTex')
  i2430.waterTile = new pc.Vec2( i2431[7], i2431[8] )
  i2430.textureVisibility = i2431[9]
  request.r(i2431[10], i2431[11], 0, i2430, 'distortionTex')
  i2430.distortionTile = new pc.Vec2( i2431[12], i2431[13] )
  i2430.waterHeight = i2431[14]
  i2430.waterDeep = i2431[15]
  i2430.waterDepthParam = i2431[16]
  i2430.waterMinAlpha = i2431[17]
  i2430.borderColor = new pc.Color(i2431[18], i2431[19], i2431[20], i2431[21])
  i2430.borderWidth = i2431[22]
  i2430.moveDirection = new pc.Vec2( i2431[23], i2431[24] )
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2437 = data
  i2436.aspect = i2437[0]
  i2436.orthographic = !!i2437[1]
  i2436.orthographicSize = i2437[2]
  i2436.backgroundColor = new pc.Color(i2437[3], i2437[4], i2437[5], i2437[6])
  i2436.nearClipPlane = i2437[7]
  i2436.farClipPlane = i2437[8]
  i2436.fieldOfView = i2437[9]
  i2436.depth = i2437[10]
  i2436.clearFlags = i2437[11]
  i2436.cullingMask = i2437[12]
  i2436.rect = i2437[13]
  request.r(i2437[14], i2437[15], 0, i2436, 'targetTexture')
  i2436.usePhysicalProperties = !!i2437[16]
  i2436.focalLength = i2437[17]
  i2436.sensorSize = new pc.Vec2( i2437[18], i2437[19] )
  i2436.lensShift = new pc.Vec2( i2437[20], i2437[21] )
  i2436.gateFit = i2437[22]
  i2436.commandBufferCount = i2437[23]
  i2436.cameraType = i2437[24]
  i2436.enabled = !!i2437[25]
  return i2436
}

Deserializers["HyperCasual.Runner.CameraManager"] = function (request, data, root) {
  var i2438 = root || request.c( 'HyperCasual.Runner.CameraManager' )
  var i2439 = data
  i2438.m_CameraAnglePreset = i2439[0]
  i2438.m_Offset = new pc.Vec3( i2439[1], i2439[2], i2439[3] )
  i2438.m_LookAtOffset = new pc.Vec3( i2439[4], i2439[5], i2439[6] )
  i2438.m_LockCameraPosition = !!i2439[7]
  i2438.m_SmoothCameraFollow = !!i2439[8]
  i2438.m_SmoothCameraFollowStrength = i2439[9]
  return i2438
}

Deserializers["CoinEffectManager"] = function (request, data, root) {
  var i2440 = root || request.c( 'CoinEffectManager' )
  var i2441 = data
  request.r(i2441[0], i2441[1], 0, i2440, 'coinEffectPrefab')
  request.r(i2441[2], i2441[3], 0, i2440, 'coinCounter')
  request.r(i2441[4], i2441[5], 0, i2440, 'player')
  i2440.speed = i2441[6]
  request.r(i2441[7], i2441[8], 0, i2440, 'm_CoinEvent')
  i2440.effectPoolCount = i2441[9]
  i2440.offsetZ = i2441[10]
  return i2440
}

Deserializers["HyperCasual.Runner.LevelManager"] = function (request, data, root) {
  var i2442 = root || request.c( 'HyperCasual.Runner.LevelManager' )
  var i2443 = data
  return i2442
}

Deserializers["HyperCasual.Runner.Gate"] = function (request, data, root) {
  var i2444 = root || request.c( 'HyperCasual.Runner.Gate' )
  var i2445 = data
  i2444.m_GateType = i2445[0]
  i2444.m_Value = i2445[1]
  request.r(i2445[2], i2445[3], 0, i2444, 'm_Text')
  i2444.m_SnapToGrid = !!i2445[4]
  return i2444
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i2446 = root || request.c( 'TMPro.TextMeshPro' )
  var i2447 = data
  i2446._SortingLayer = i2447[0]
  i2446._SortingLayerID = i2447[1]
  i2446._SortingOrder = i2447[2]
  i2446.m_hasFontAssetChanged = !!i2447[3]
  request.r(i2447[4], i2447[5], 0, i2446, 'm_renderer')
  i2446.m_maskType = i2447[6]
  i2446.m_text = i2447[7]
  i2446.m_isRightToLeft = !!i2447[8]
  request.r(i2447[9], i2447[10], 0, i2446, 'm_fontAsset')
  request.r(i2447[11], i2447[12], 0, i2446, 'm_sharedMaterial')
  var i2449 = i2447[13]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 2) {
  request.r(i2449[i + 0], i2449[i + 1], 2, i2448, '')
  }
  i2446.m_fontSharedMaterials = i2448
  request.r(i2447[14], i2447[15], 0, i2446, 'm_fontMaterial')
  var i2451 = i2447[16]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2446.m_fontMaterials = i2450
  i2446.m_fontColor32 = UnityEngine.Color32.ConstructColor(i2447[17], i2447[18], i2447[19], i2447[20])
  i2446.m_fontColor = new pc.Color(i2447[21], i2447[22], i2447[23], i2447[24])
  i2446.m_enableVertexGradient = !!i2447[25]
  i2446.m_colorMode = i2447[26]
  i2446.m_fontColorGradient = request.d('TMPro.VertexGradient', i2447[27], i2446.m_fontColorGradient)
  request.r(i2447[28], i2447[29], 0, i2446, 'm_fontColorGradientPreset')
  request.r(i2447[30], i2447[31], 0, i2446, 'm_spriteAsset')
  i2446.m_tintAllSprites = !!i2447[32]
  request.r(i2447[33], i2447[34], 0, i2446, 'm_StyleSheet')
  i2446.m_TextStyleHashCode = i2447[35]
  i2446.m_overrideHtmlColors = !!i2447[36]
  i2446.m_faceColor = UnityEngine.Color32.ConstructColor(i2447[37], i2447[38], i2447[39], i2447[40])
  i2446.m_fontSize = i2447[41]
  i2446.m_fontSizeBase = i2447[42]
  i2446.m_fontWeight = i2447[43]
  i2446.m_enableAutoSizing = !!i2447[44]
  i2446.m_fontSizeMin = i2447[45]
  i2446.m_fontSizeMax = i2447[46]
  i2446.m_fontStyle = i2447[47]
  i2446.m_HorizontalAlignment = i2447[48]
  i2446.m_VerticalAlignment = i2447[49]
  i2446.m_textAlignment = i2447[50]
  i2446.m_characterSpacing = i2447[51]
  i2446.m_wordSpacing = i2447[52]
  i2446.m_lineSpacing = i2447[53]
  i2446.m_lineSpacingMax = i2447[54]
  i2446.m_paragraphSpacing = i2447[55]
  i2446.m_charWidthMaxAdj = i2447[56]
  i2446.m_enableWordWrapping = !!i2447[57]
  i2446.m_wordWrappingRatios = i2447[58]
  i2446.m_overflowMode = i2447[59]
  request.r(i2447[60], i2447[61], 0, i2446, 'm_linkedTextComponent')
  request.r(i2447[62], i2447[63], 0, i2446, 'parentLinkedComponent')
  i2446.m_enableKerning = !!i2447[64]
  i2446.m_enableExtraPadding = !!i2447[65]
  i2446.checkPaddingRequired = !!i2447[66]
  i2446.m_isRichText = !!i2447[67]
  i2446.m_parseCtrlCharacters = !!i2447[68]
  i2446.m_isOrthographic = !!i2447[69]
  i2446.m_isCullingEnabled = !!i2447[70]
  i2446.m_horizontalMapping = i2447[71]
  i2446.m_verticalMapping = i2447[72]
  i2446.m_uvLineOffset = i2447[73]
  i2446.m_geometrySortingOrder = i2447[74]
  i2446.m_IsTextObjectScaleStatic = !!i2447[75]
  i2446.m_VertexBufferAutoSizeReduction = !!i2447[76]
  i2446.m_useMaxVisibleDescender = !!i2447[77]
  i2446.m_pageToDisplay = i2447[78]
  i2446.m_margin = new pc.Vec4( i2447[79], i2447[80], i2447[81], i2447[82] )
  i2446.m_isUsingLegacyAnimationComponent = !!i2447[83]
  i2446.m_isVolumetricText = !!i2447[84]
  request.r(i2447[85], i2447[86], 0, i2446, 'm_Material')
  i2446.m_Maskable = !!i2447[87]
  i2446.m_Color = new pc.Color(i2447[88], i2447[89], i2447[90], i2447[91])
  i2446.m_RaycastTarget = !!i2447[92]
  i2446.m_RaycastPadding = new pc.Vec4( i2447[93], i2447[94], i2447[95], i2447[96] )
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SphereCollider"] = function (request, data, root) {
  var i2452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SphereCollider' )
  var i2453 = data
  i2452.center = new pc.Vec3( i2453[0], i2453[1], i2453[2] )
  i2452.radius = i2453[3]
  i2452.enabled = !!i2453[4]
  i2452.isTrigger = !!i2453[5]
  request.r(i2453[6], i2453[7], 0, i2452, 'material')
  return i2452
}

Deserializers["HyperCasual.Runner.Collectable"] = function (request, data, root) {
  var i2454 = root || request.c( 'HyperCasual.Runner.Collectable' )
  var i2455 = data
  request.r(i2455[0], i2455[1], 0, i2454, 'm_Event')
  i2454.m_Count = i2455[2]
  i2454.m_Sound = i2455[3]
  i2454.m_Particle = i2455[4]
  i2454.m_SnapToGrid = !!i2455[5]
  return i2454
}

Deserializers["HyperCasual.Core.BobAndSpin"] = function (request, data, root) {
  var i2456 = root || request.c( 'HyperCasual.Core.BobAndSpin' )
  var i2457 = data
  i2456.UsePositionBasedOffset = !!i2457[0]
  i2456.PositionBasedScale = i2457[1]
  i2456.Bob = !!i2457[2]
  i2456.BobSpeed = i2457[3]
  i2456.BobHeight = i2457[4]
  i2456.Spin = !!i2457[5]
  i2456.SpinSpeed = i2457[6]
  return i2456
}

Deserializers["HyperCasual.Runner.FinishLine"] = function (request, data, root) {
  var i2458 = root || request.c( 'HyperCasual.Runner.FinishLine' )
  var i2459 = data
  request.r(i2459[0], i2459[1], 0, i2458, 'm_WinEvent')
  i2458.m_SnapToGrid = !!i2459[2]
  return i2458
}

Deserializers["OutroAnimationController"] = function (request, data, root) {
  var i2460 = root || request.c( 'OutroAnimationController' )
  var i2461 = data
  request.r(i2461[0], i2461[1], 0, i2460, 'winEvent')
  i2460.endCardDelay = i2461[2]
  var i2463 = i2461[3]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 2) {
  request.r(i2463[i + 0], i2463[i + 1], 2, i2462, '')
  }
  i2460.confettiParticles = i2462
  return i2460
}

Deserializers["CheerPhraseController"] = function (request, data, root) {
  var i2466 = root || request.c( 'CheerPhraseController' )
  var i2467 = data
  var i2469 = i2467[0]
  var i2468 = []
  for(var i = 0; i < i2469.length; i += 1) {
    i2468.push( i2469[i + 0] );
  }
  i2466.phrases = i2468
  i2466.cheerPhraseColour = new pc.Color(i2467[1], i2467[2], i2467[3], i2467[4])
  request.r(i2467[5], i2467[6], 0, i2466, 'cheerText')
  request.r(i2467[7], i2467[8], 0, i2466, 'cheerTextAnimator')
  request.r(i2467[9], i2467[10], 0, i2466, 'keyCollectEvent')
  return i2466
}

Deserializers["CollectableParticleManager"] = function (request, data, root) {
  var i2472 = root || request.c( 'CollectableParticleManager' )
  var i2473 = data
  request.r(i2473[0], i2473[1], 0, i2472, 'keyParticlePrefab')
  request.r(i2473[2], i2473[3], 0, i2472, 'coinParticlePrefab')
  i2472.keyParticleCount = i2473[4]
  i2472.coinParticlesCount = i2473[5]
  return i2472
}

Deserializers["HyperCasual.Gameplay.BootLoader"] = function (request, data, root) {
  var i2474 = root || request.c( 'HyperCasual.Gameplay.BootLoader' )
  var i2475 = data
  request.r(i2475[0], i2475[1], 0, i2474, 'm_SequenceManagerPrefab')
  return i2474
}

Deserializers["HyperCasual.Runner.SaveManager"] = function (request, data, root) {
  var i2476 = root || request.c( 'HyperCasual.Runner.SaveManager' )
  var i2477 = data
  return i2476
}

Deserializers["HyperCasual.Runner.AudioManager"] = function (request, data, root) {
  var i2478 = root || request.c( 'HyperCasual.Runner.AudioManager' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'm_MusicSource')
  request.r(i2479[2], i2479[3], 0, i2478, 'm_EffectSource')
  i2478.m_MinSoundInterval = i2479[4]
  var i2481 = i2479[5]
  var i2480 = []
  for(var i = 0; i < i2481.length; i += 1) {
    i2480.push( request.d('HyperCasual.Runner.AudioManager+SoundIDClipPair', i2481[i + 0]) );
  }
  i2478.m_Sounds = i2480
  return i2478
}

Deserializers["HyperCasual.Runner.AudioManager+SoundIDClipPair"] = function (request, data, root) {
  var i2484 = root || request.c( 'HyperCasual.Runner.AudioManager+SoundIDClipPair' )
  var i2485 = data
  i2484.m_SoundID = i2485[0]
  request.r(i2485[1], i2485[2], 0, i2484, 'm_AudioClip')
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'clip')
  request.r(i2487[2], i2487[3], 0, i2486, 'outputAudioMixerGroup')
  i2486.playOnAwake = !!i2487[4]
  i2486.loop = !!i2487[5]
  i2486.time = i2487[6]
  i2486.volume = i2487[7]
  i2486.pitch = i2487[8]
  i2486.enabled = !!i2487[9]
  return i2486
}

Deserializers["HyperCasual.Core.UIManager"] = function (request, data, root) {
  var i2488 = root || request.c( 'HyperCasual.Core.UIManager' )
  var i2489 = data
  request.r(i2489[0], i2489[1], 0, i2488, 'm_Canvas')
  request.r(i2489[2], i2489[3], 0, i2488, 'm_Root')
  request.r(i2489[4], i2489[5], 0, i2488, 'm_ViewLayer')
  return i2488
}

Deserializers["HyperCasual.Gameplay.Hud"] = function (request, data, root) {
  var i2490 = root || request.c( 'HyperCasual.Gameplay.Hud' )
  var i2491 = data
  request.r(i2491[0], i2491[1], 0, i2490, 'm_GoldText')
  var i2493 = i2491[2]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 2) {
  request.r(i2493[i + 0], i2493[i + 1], 2, i2492, '')
  }
  i2490.Keys = i2492
  i2490.gainKeyColor = new pc.Color(i2491[3], i2491[4], i2491[5], i2491[6])
  return i2490
}

Deserializers["HyperCasual.Runner.GameManager"] = function (request, data, root) {
  var i2496 = root || request.c( 'HyperCasual.Runner.GameManager' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'm_LoseEvent')
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2499 = data
  i2498.ambientIntensity = i2499[0]
  i2498.reflectionIntensity = i2499[1]
  i2498.ambientMode = i2499[2]
  i2498.ambientLight = new pc.Color(i2499[3], i2499[4], i2499[5], i2499[6])
  i2498.ambientSkyColor = new pc.Color(i2499[7], i2499[8], i2499[9], i2499[10])
  i2498.ambientGroundColor = new pc.Color(i2499[11], i2499[12], i2499[13], i2499[14])
  i2498.ambientEquatorColor = new pc.Color(i2499[15], i2499[16], i2499[17], i2499[18])
  i2498.fogColor = new pc.Color(i2499[19], i2499[20], i2499[21], i2499[22])
  i2498.fogEndDistance = i2499[23]
  i2498.fogStartDistance = i2499[24]
  i2498.fogDensity = i2499[25]
  i2498.fog = !!i2499[26]
  request.r(i2499[27], i2499[28], 0, i2498, 'skybox')
  i2498.fogMode = i2499[29]
  var i2501 = i2499[30]
  var i2500 = []
  for(var i = 0; i < i2501.length; i += 1) {
    i2500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2501[i + 0]) );
  }
  i2498.lightmaps = i2500
  i2498.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2499[31], i2498.lightProbes)
  i2498.lightmapsMode = i2499[32]
  i2498.mixedBakeMode = i2499[33]
  i2498.environmentLightingMode = i2499[34]
  i2498.ambientProbe = new pc.SphericalHarmonicsL2(i2499[35])
  request.r(i2499[36], i2499[37], 0, i2498, 'customReflection')
  request.r(i2499[38], i2499[39], 0, i2498, 'defaultReflection')
  i2498.defaultReflectionMode = i2499[40]
  i2498.defaultReflectionResolution = i2499[41]
  i2498.sunLightObjectId = i2499[42]
  i2498.pixelLightCount = i2499[43]
  i2498.defaultReflectionHDR = !!i2499[44]
  i2498.hasLightDataAsset = !!i2499[45]
  i2498.hasManualGenerate = !!i2499[46]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'lightmapColor')
  request.r(i2505[2], i2505[3], 0, i2504, 'lightmapDirection')
  request.r(i2505[4], i2505[5], 0, i2504, 'shadowMask')
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2506 = root || new UnityEngine.LightProbes()
  var i2507 = data
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2515 = data
  var i2517 = i2515[0]
  var i2516 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2517.length; i += 1) {
    i2516.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2517[i + 0]));
  }
  i2514.ShaderCompilationErrors = i2516
  i2514.name = i2515[1]
  i2514.guid = i2515[2]
  var i2519 = i2515[3]
  var i2518 = []
  for(var i = 0; i < i2519.length; i += 1) {
    i2518.push( i2519[i + 0] );
  }
  i2514.shaderDefinedKeywords = i2518
  var i2521 = i2515[4]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 1) {
    i2520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2521[i + 0]) );
  }
  i2514.passes = i2520
  var i2523 = i2515[5]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 1) {
    i2522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2523[i + 0]) );
  }
  i2514.usePasses = i2522
  var i2525 = i2515[6]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2525[i + 0]) );
  }
  i2514.defaultParameterValues = i2524
  request.r(i2515[7], i2515[8], 0, i2514, 'unityFallbackShader')
  i2514.readDepth = !!i2515[9]
  i2514.hasDepthOnlyPass = !!i2515[10]
  i2514.isCreatedByShaderGraph = !!i2515[11]
  i2514.disableBatching = !!i2515[12]
  i2514.compiled = !!i2515[13]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2529 = data
  i2528.shaderName = i2529[0]
  i2528.errorMessage = i2529[1]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2532 = root || new pc.UnityShaderPass()
  var i2533 = data
  i2532.id = i2533[0]
  i2532.subShaderIndex = i2533[1]
  i2532.name = i2533[2]
  i2532.passType = i2533[3]
  i2532.grabPassTextureName = i2533[4]
  i2532.usePass = !!i2533[5]
  i2532.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[6], i2532.zTest)
  i2532.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[7], i2532.zWrite)
  i2532.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[8], i2532.culling)
  i2532.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2533[9], i2532.blending)
  i2532.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2533[10], i2532.alphaBlending)
  i2532.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[11], i2532.colorWriteMask)
  i2532.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[12], i2532.offsetUnits)
  i2532.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[13], i2532.offsetFactor)
  i2532.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[14], i2532.stencilRef)
  i2532.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[15], i2532.stencilReadMask)
  i2532.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2533[16], i2532.stencilWriteMask)
  i2532.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2533[17], i2532.stencilOp)
  i2532.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2533[18], i2532.stencilOpFront)
  i2532.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2533[19], i2532.stencilOpBack)
  var i2535 = i2533[20]
  var i2534 = []
  for(var i = 0; i < i2535.length; i += 1) {
    i2534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2535[i + 0]) );
  }
  i2532.tags = i2534
  var i2537 = i2533[21]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 1) {
    i2536.push( i2537[i + 0] );
  }
  i2532.passDefinedKeywords = i2536
  var i2539 = i2533[22]
  var i2538 = []
  for(var i = 0; i < i2539.length; i += 1) {
    i2538.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2539[i + 0]) );
  }
  i2532.passDefinedKeywordGroups = i2538
  var i2541 = i2533[23]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2541[i + 0]) );
  }
  i2532.variants = i2540
  var i2543 = i2533[24]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2543[i + 0]) );
  }
  i2532.excludedVariants = i2542
  i2532.hasDepthReader = !!i2533[25]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2545 = data
  i2544.val = i2545[0]
  i2544.name = i2545[1]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2547 = data
  i2546.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[0], i2546.src)
  i2546.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[1], i2546.dst)
  i2546.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2547[2], i2546.op)
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2549 = data
  i2548.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[0], i2548.pass)
  i2548.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[1], i2548.fail)
  i2548.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[2], i2548.zFail)
  i2548.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2549[3], i2548.comp)
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2553 = data
  i2552.name = i2553[0]
  i2552.value = i2553[1]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2557 = data
  var i2559 = i2557[0]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( i2559[i + 0] );
  }
  i2556.keywords = i2558
  i2556.hasDiscard = !!i2557[1]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2563 = data
  i2562.passId = i2563[0]
  i2562.subShaderIndex = i2563[1]
  var i2565 = i2563[2]
  var i2564 = []
  for(var i = 0; i < i2565.length; i += 1) {
    i2564.push( i2565[i + 0] );
  }
  i2562.keywords = i2564
  i2562.vertexProgram = i2563[3]
  i2562.fragmentProgram = i2563[4]
  i2562.exportedForWebGl2 = !!i2563[5]
  i2562.readDepth = !!i2563[6]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2569 = data
  request.r(i2569[0], i2569[1], 0, i2568, 'shader')
  i2568.pass = i2569[2]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2573 = data
  i2572.name = i2573[0]
  i2572.type = i2573[1]
  i2572.value = new pc.Vec4( i2573[2], i2573[3], i2573[4], i2573[5] )
  i2572.textureValue = i2573[6]
  i2572.shaderPropertyFlag = i2573[7]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2575 = data
  i2574.name = i2575[0]
  request.r(i2575[1], i2575[2], 0, i2574, 'texture')
  i2574.aabb = i2575[3]
  i2574.vertices = i2575[4]
  i2574.triangles = i2575[5]
  i2574.textureRect = UnityEngine.Rect.MinMaxRect(i2575[6], i2575[7], i2575[8], i2575[9])
  i2574.packedRect = UnityEngine.Rect.MinMaxRect(i2575[10], i2575[11], i2575[12], i2575[13])
  i2574.border = new pc.Vec4( i2575[14], i2575[15], i2575[16], i2575[17] )
  i2574.transparency = i2575[18]
  i2574.bounds = i2575[19]
  i2574.pixelsPerUnit = i2575[20]
  i2574.textureWidth = i2575[21]
  i2574.textureHeight = i2575[22]
  i2574.nativeSize = new pc.Vec2( i2575[23], i2575[24] )
  i2574.pivot = new pc.Vec2( i2575[25], i2575[26] )
  i2574.textureRectOffset = new pc.Vec2( i2575[27], i2575[28] )
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2577 = data
  i2576.name = i2577[0]
  return i2576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2579 = data
  i2578.name = i2579[0]
  i2578.wrapMode = i2579[1]
  i2578.isLooping = !!i2579[2]
  i2578.length = i2579[3]
  var i2581 = i2579[4]
  var i2580 = []
  for(var i = 0; i < i2581.length; i += 1) {
    i2580.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2581[i + 0]) );
  }
  i2578.curves = i2580
  var i2583 = i2579[5]
  var i2582 = []
  for(var i = 0; i < i2583.length; i += 1) {
    i2582.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2583[i + 0]) );
  }
  i2578.events = i2582
  i2578.halfPrecision = !!i2579[6]
  i2578._frameRate = i2579[7]
  i2578.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2579[8], i2578.localBounds)
  i2578.hasMuscleCurves = !!i2579[9]
  var i2585 = i2579[10]
  var i2584 = []
  for(var i = 0; i < i2585.length; i += 1) {
    i2584.push( i2585[i + 0] );
  }
  i2578.clipMuscleConstant = i2584
  i2578.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2579[11], i2578.clipBindingConstant)
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2589 = data
  i2588.path = i2589[0]
  i2588.hash = i2589[1]
  i2588.componentType = i2589[2]
  i2588.property = i2589[3]
  i2588.keys = i2589[4]
  var i2591 = i2589[5]
  var i2590 = []
  for(var i = 0; i < i2591.length; i += 1) {
    i2590.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2591[i + 0]) );
  }
  i2588.objectReferenceKeys = i2590
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2595 = data
  i2594.functionName = i2595[0]
  i2594.floatParameter = i2595[1]
  i2594.intParameter = i2595[2]
  i2594.stringParameter = i2595[3]
  request.r(i2595[4], i2595[5], 0, i2594, 'objectReferenceParameter')
  i2594.time = i2595[6]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2597 = data
  i2596.center = new pc.Vec3( i2597[0], i2597[1], i2597[2] )
  i2596.extends = new pc.Vec3( i2597[3], i2597[4], i2597[5] )
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2601 = data
  var i2603 = i2601[0]
  var i2602 = []
  for(var i = 0; i < i2603.length; i += 1) {
    i2602.push( i2603[i + 0] );
  }
  i2600.genericBindings = i2602
  var i2605 = i2601[1]
  var i2604 = []
  for(var i = 0; i < i2605.length; i += 1) {
    i2604.push( i2605[i + 0] );
  }
  i2600.pptrCurveMapping = i2604
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2609 = data
  i2608.time = i2609[0]
  request.r(i2609[1], i2609[2], 0, i2608, 'value')
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.BlendTree"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.BlendTree' )
  var i2611 = data
  i2610.name = i2611[0]
  i2610.blendParameter = i2611[1]
  i2610.blendParameterY = i2611[2]
  i2610.blendType = i2611[3]
  var i2613 = i2611[4]
  var i2612 = []
  for(var i = 0; i < i2613.length; i += 1) {
    i2612.push( request.d('Luna.Unity.DTO.UnityEngine.Animations.ChildMotion', i2613[i + 0]) );
  }
  i2610.children = i2612
  i2610.useAutomaticThresholds = !!i2611[5]
  i2610.minThreshold = i2611[6]
  i2610.maxThreshold = i2611[7]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animations.ChildMotion"] = function (request, data, root) {
  var i2616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animations.ChildMotion' )
  var i2617 = data
  request.r(i2617[0], i2617[1], 0, i2616, 'motion')
  i2616.threshold = i2617[2]
  i2616.position = new pc.Vec2( i2617[3], i2617[4] )
  i2616.timeScale = i2617[5]
  i2616.cycleOffset = i2617[6]
  i2616.directBlendParameter = i2617[7]
  i2616.mirror = !!i2617[8]
  return i2616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2619 = data
  i2618.name = i2619[0]
  i2618.ascent = i2619[1]
  i2618.originalLineHeight = i2619[2]
  i2618.fontSize = i2619[3]
  var i2621 = i2619[4]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 1) {
    i2620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2621[i + 0]) );
  }
  i2618.characterInfo = i2620
  request.r(i2619[5], i2619[6], 0, i2618, 'texture')
  i2618.originalFontSize = i2619[7]
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2625 = data
  i2624.index = i2625[0]
  i2624.advance = i2625[1]
  i2624.bearing = i2625[2]
  i2624.glyphWidth = i2625[3]
  i2624.glyphHeight = i2625[4]
  i2624.minX = i2625[5]
  i2624.maxX = i2625[6]
  i2624.minY = i2625[7]
  i2624.maxY = i2625[8]
  i2624.uvBottomLeftX = i2625[9]
  i2624.uvBottomLeftY = i2625[10]
  i2624.uvBottomRightX = i2625[11]
  i2624.uvBottomRightY = i2625[12]
  i2624.uvTopLeftX = i2625[13]
  i2624.uvTopLeftY = i2625[14]
  i2624.uvTopRightX = i2625[15]
  i2624.uvTopRightY = i2625[16]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2627 = data
  i2626.name = i2627[0]
  var i2629 = i2627[1]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2629[i + 0]) );
  }
  i2626.layers = i2628
  var i2631 = i2627[2]
  var i2630 = []
  for(var i = 0; i < i2631.length; i += 1) {
    i2630.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2631[i + 0]) );
  }
  i2626.parameters = i2630
  i2626.animationClips = i2627[3]
  i2626.avatarUnsupported = i2627[4]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2635 = data
  i2634.name = i2635[0]
  i2634.defaultWeight = i2635[1]
  i2634.blendingMode = i2635[2]
  i2634.avatarMask = i2635[3]
  i2634.syncedLayerIndex = i2635[4]
  i2634.syncedLayerAffectsTiming = !!i2635[5]
  i2634.syncedLayers = i2635[6]
  i2634.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2635[7], i2634.stateMachine)
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2637 = data
  i2636.id = i2637[0]
  i2636.name = i2637[1]
  i2636.path = i2637[2]
  var i2639 = i2637[3]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2639[i + 0]) );
  }
  i2636.states = i2638
  var i2641 = i2637[4]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2641[i + 0]) );
  }
  i2636.machines = i2640
  var i2643 = i2637[5]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2643[i + 0]) );
  }
  i2636.entryStateTransitions = i2642
  var i2645 = i2637[6]
  var i2644 = []
  for(var i = 0; i < i2645.length; i += 1) {
    i2644.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2645[i + 0]) );
  }
  i2636.exitStateTransitions = i2644
  var i2647 = i2637[7]
  var i2646 = []
  for(var i = 0; i < i2647.length; i += 1) {
    i2646.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2647[i + 0]) );
  }
  i2636.anyStateTransitions = i2646
  i2636.defaultStateId = i2637[8]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2651 = data
  i2650.id = i2651[0]
  i2650.name = i2651[1]
  i2650.cycleOffset = i2651[2]
  i2650.cycleOffsetParameter = i2651[3]
  i2650.cycleOffsetParameterActive = !!i2651[4]
  i2650.mirror = !!i2651[5]
  i2650.mirrorParameter = i2651[6]
  i2650.mirrorParameterActive = !!i2651[7]
  i2650.motionId = i2651[8]
  i2650.nameHash = i2651[9]
  i2650.fullPathHash = i2651[10]
  i2650.speed = i2651[11]
  i2650.speedParameter = i2651[12]
  i2650.speedParameterActive = !!i2651[13]
  i2650.tag = i2651[14]
  i2650.tagHash = i2651[15]
  i2650.writeDefaultValues = !!i2651[16]
  var i2653 = i2651[17]
  var i2652 = []
  for(var i = 0; i < i2653.length; i += 2) {
  request.r(i2653[i + 0], i2653[i + 1], 2, i2652, '')
  }
  i2650.behaviours = i2652
  var i2655 = i2651[18]
  var i2654 = []
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2655[i + 0]) );
  }
  i2650.transitions = i2654
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2661 = data
  i2660.fullPath = i2661[0]
  i2660.canTransitionToSelf = !!i2661[1]
  i2660.duration = i2661[2]
  i2660.exitTime = i2661[3]
  i2660.hasExitTime = !!i2661[4]
  i2660.hasFixedDuration = !!i2661[5]
  i2660.interruptionSource = i2661[6]
  i2660.offset = i2661[7]
  i2660.orderedInterruption = !!i2661[8]
  i2660.destinationStateId = i2661[9]
  i2660.isExit = !!i2661[10]
  i2660.mute = !!i2661[11]
  i2660.solo = !!i2661[12]
  var i2663 = i2661[13]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2663[i + 0]) );
  }
  i2660.conditions = i2662
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2667 = data
  i2666.mode = i2667[0]
  i2666.parameter = i2667[1]
  i2666.threshold = i2667[2]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2673 = data
  i2672.destinationStateId = i2673[0]
  i2672.isExit = !!i2673[1]
  i2672.mute = !!i2673[2]
  i2672.solo = !!i2673[3]
  var i2675 = i2673[4]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2675[i + 0]) );
  }
  i2672.conditions = i2674
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2679 = data
  i2678.defaultBool = !!i2679[0]
  i2678.defaultFloat = i2679[1]
  i2678.defaultInt = i2679[2]
  i2678.name = i2679[3]
  i2678.nameHash = i2679[4]
  i2678.type = i2679[5]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2681 = data
  i2680.name = i2681[0]
  i2680.bytes64 = i2681[1]
  i2680.data = i2681[2]
  return i2680
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2682 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2683 = data
  request.r(i2683[0], i2683[1], 0, i2682, 'atlas')
  i2682.normalStyle = i2683[2]
  i2682.normalSpacingOffset = i2683[3]
  i2682.boldStyle = i2683[4]
  i2682.boldSpacing = i2683[5]
  i2682.italicStyle = i2683[6]
  i2682.tabSize = i2683[7]
  i2682.hashCode = i2683[8]
  request.r(i2683[9], i2683[10], 0, i2682, 'material')
  i2682.materialHashCode = i2683[11]
  i2682.m_Version = i2683[12]
  i2682.m_SourceFontFileGUID = i2683[13]
  request.r(i2683[14], i2683[15], 0, i2682, 'm_SourceFontFile_EditorRef')
  request.r(i2683[16], i2683[17], 0, i2682, 'm_SourceFontFile')
  i2682.m_AtlasPopulationMode = i2683[18]
  i2682.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2683[19], i2682.m_FaceInfo)
  var i2685 = i2683[20]
  var i2684 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.add(request.d('UnityEngine.TextCore.Glyph', i2685[i + 0]));
  }
  i2682.m_GlyphTable = i2684
  var i2687 = i2683[21]
  var i2686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.add(request.d('TMPro.TMP_Character', i2687[i + 0]));
  }
  i2682.m_CharacterTable = i2686
  var i2689 = i2683[22]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 2) {
  request.r(i2689[i + 0], i2689[i + 1], 2, i2688, '')
  }
  i2682.m_AtlasTextures = i2688
  i2682.m_AtlasTextureIndex = i2683[23]
  i2682.m_IsMultiAtlasTexturesEnabled = !!i2683[24]
  i2682.m_ClearDynamicDataOnBuild = !!i2683[25]
  var i2691 = i2683[26]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('UnityEngine.TextCore.GlyphRect', i2691[i + 0]));
  }
  i2682.m_UsedGlyphRects = i2690
  var i2693 = i2683[27]
  var i2692 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.add(request.d('UnityEngine.TextCore.GlyphRect', i2693[i + 0]));
  }
  i2682.m_FreeGlyphRects = i2692
  i2682.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2683[28], i2682.m_fontInfo)
  i2682.m_AtlasWidth = i2683[29]
  i2682.m_AtlasHeight = i2683[30]
  i2682.m_AtlasPadding = i2683[31]
  i2682.m_AtlasRenderMode = i2683[32]
  var i2695 = i2683[33]
  var i2694 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.add(request.d('TMPro.TMP_Glyph', i2695[i + 0]));
  }
  i2682.m_glyphInfoList = i2694
  i2682.m_KerningTable = request.d('TMPro.KerningTable', i2683[34], i2682.m_KerningTable)
  i2682.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2683[35], i2682.m_FontFeatureTable)
  var i2697 = i2683[36]
  var i2696 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2697.length; i += 2) {
  request.r(i2697[i + 0], i2697[i + 1], 1, i2696, '')
  }
  i2682.fallbackFontAssets = i2696
  var i2699 = i2683[37]
  var i2698 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2699.length; i += 2) {
  request.r(i2699[i + 0], i2699[i + 1], 1, i2698, '')
  }
  i2682.m_FallbackFontAssetTable = i2698
  i2682.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2683[38], i2682.m_CreationSettings)
  var i2701 = i2683[39]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('TMPro.TMP_FontWeightPair', i2701[i + 0]) );
  }
  i2682.m_FontWeightTable = i2700
  var i2703 = i2683[40]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( request.d('TMPro.TMP_FontWeightPair', i2703[i + 0]) );
  }
  i2682.fontWeights = i2702
  return i2682
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2704 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2705 = data
  i2704.m_FaceIndex = i2705[0]
  i2704.m_FamilyName = i2705[1]
  i2704.m_StyleName = i2705[2]
  i2704.m_PointSize = i2705[3]
  i2704.m_Scale = i2705[4]
  i2704.m_UnitsPerEM = i2705[5]
  i2704.m_LineHeight = i2705[6]
  i2704.m_AscentLine = i2705[7]
  i2704.m_CapLine = i2705[8]
  i2704.m_MeanLine = i2705[9]
  i2704.m_Baseline = i2705[10]
  i2704.m_DescentLine = i2705[11]
  i2704.m_SuperscriptOffset = i2705[12]
  i2704.m_SuperscriptSize = i2705[13]
  i2704.m_SubscriptOffset = i2705[14]
  i2704.m_SubscriptSize = i2705[15]
  i2704.m_UnderlineOffset = i2705[16]
  i2704.m_UnderlineThickness = i2705[17]
  i2704.m_StrikethroughOffset = i2705[18]
  i2704.m_StrikethroughThickness = i2705[19]
  i2704.m_TabWidth = i2705[20]
  return i2704
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2708 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2709 = data
  i2708.m_Index = i2709[0]
  i2708.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2709[1], i2708.m_Metrics)
  i2708.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2709[2], i2708.m_GlyphRect)
  i2708.m_Scale = i2709[3]
  i2708.m_AtlasIndex = i2709[4]
  i2708.m_ClassDefinitionType = i2709[5]
  return i2708
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2710 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2711 = data
  i2710.m_Width = i2711[0]
  i2710.m_Height = i2711[1]
  i2710.m_HorizontalBearingX = i2711[2]
  i2710.m_HorizontalBearingY = i2711[3]
  i2710.m_HorizontalAdvance = i2711[4]
  return i2710
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2712 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2713 = data
  i2712.m_X = i2713[0]
  i2712.m_Y = i2713[1]
  i2712.m_Width = i2713[2]
  i2712.m_Height = i2713[3]
  return i2712
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2716 = root || request.c( 'TMPro.TMP_Character' )
  var i2717 = data
  i2716.m_ElementType = i2717[0]
  i2716.m_Unicode = i2717[1]
  i2716.m_GlyphIndex = i2717[2]
  i2716.m_Scale = i2717[3]
  return i2716
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2722 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2723 = data
  i2722.Name = i2723[0]
  i2722.PointSize = i2723[1]
  i2722.Scale = i2723[2]
  i2722.CharacterCount = i2723[3]
  i2722.LineHeight = i2723[4]
  i2722.Baseline = i2723[5]
  i2722.Ascender = i2723[6]
  i2722.CapHeight = i2723[7]
  i2722.Descender = i2723[8]
  i2722.CenterLine = i2723[9]
  i2722.SuperscriptOffset = i2723[10]
  i2722.SubscriptOffset = i2723[11]
  i2722.SubSize = i2723[12]
  i2722.Underline = i2723[13]
  i2722.UnderlineThickness = i2723[14]
  i2722.strikethrough = i2723[15]
  i2722.strikethroughThickness = i2723[16]
  i2722.TabWidth = i2723[17]
  i2722.Padding = i2723[18]
  i2722.AtlasWidth = i2723[19]
  i2722.AtlasHeight = i2723[20]
  return i2722
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2726 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2727 = data
  i2726.id = i2727[0]
  i2726.x = i2727[1]
  i2726.y = i2727[2]
  i2726.width = i2727[3]
  i2726.height = i2727[4]
  i2726.xOffset = i2727[5]
  i2726.yOffset = i2727[6]
  i2726.xAdvance = i2727[7]
  i2726.scale = i2727[8]
  return i2726
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2728 = root || request.c( 'TMPro.KerningTable' )
  var i2729 = data
  var i2731 = i2729[0]
  var i2730 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.add(request.d('TMPro.KerningPair', i2731[i + 0]));
  }
  i2728.kerningPairs = i2730
  return i2728
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2734 = root || request.c( 'TMPro.KerningPair' )
  var i2735 = data
  i2734.xOffset = i2735[0]
  i2734.m_FirstGlyph = i2735[1]
  i2734.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2735[2], i2734.m_FirstGlyphAdjustments)
  i2734.m_SecondGlyph = i2735[3]
  i2734.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2735[4], i2734.m_SecondGlyphAdjustments)
  i2734.m_IgnoreSpacingAdjustments = !!i2735[5]
  return i2734
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2736 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2737 = data
  var i2739 = i2737[0]
  var i2738 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2739.length; i += 1) {
    i2738.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2739[i + 0]));
  }
  i2736.m_GlyphPairAdjustmentRecords = i2738
  return i2736
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2742 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2743 = data
  i2742.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2743[0], i2742.m_FirstAdjustmentRecord)
  i2742.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2743[1], i2742.m_SecondAdjustmentRecord)
  i2742.m_FeatureLookupFlags = i2743[2]
  return i2742
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2744 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2745 = data
  i2744.m_GlyphIndex = i2745[0]
  i2744.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2745[1], i2744.m_GlyphValueRecord)
  return i2744
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2746 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2747 = data
  i2746.m_XPlacement = i2747[0]
  i2746.m_YPlacement = i2747[1]
  i2746.m_XAdvance = i2747[2]
  i2746.m_YAdvance = i2747[3]
  return i2746
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2750 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2751 = data
  i2750.sourceFontFileName = i2751[0]
  i2750.sourceFontFileGUID = i2751[1]
  i2750.pointSizeSamplingMode = i2751[2]
  i2750.pointSize = i2751[3]
  i2750.padding = i2751[4]
  i2750.packingMode = i2751[5]
  i2750.atlasWidth = i2751[6]
  i2750.atlasHeight = i2751[7]
  i2750.characterSetSelectionMode = i2751[8]
  i2750.characterSequence = i2751[9]
  i2750.referencedFontAssetGUID = i2751[10]
  i2750.referencedTextAssetGUID = i2751[11]
  i2750.fontStyle = i2751[12]
  i2750.fontStyleModifier = i2751[13]
  i2750.renderMode = i2751[14]
  i2750.includeFontFeatures = !!i2751[15]
  return i2750
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2754 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2755 = data
  request.r(i2755[0], i2755[1], 0, i2754, 'regularTypeface')
  request.r(i2755[2], i2755[3], 0, i2754, 'italicTypeface')
  return i2754
}

Deserializers["HyperCasual.Gameplay.ItemPickedEvent"] = function (request, data, root) {
  var i2756 = root || request.c( 'HyperCasual.Gameplay.ItemPickedEvent' )
  var i2757 = data
  i2756.Count = i2757[0]
  return i2756
}

Deserializers["HyperCasual.Gameplay.LevelCompletedEvent"] = function (request, data, root) {
  var i2758 = root || request.c( 'HyperCasual.Gameplay.LevelCompletedEvent' )
  var i2759 = data
  return i2758
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2760 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2761 = data
  i2760.useSafeMode = !!i2761[0]
  i2760.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2761[1], i2760.safeModeOptions)
  i2760.timeScale = i2761[2]
  i2760.unscaledTimeScale = i2761[3]
  i2760.useSmoothDeltaTime = !!i2761[4]
  i2760.maxSmoothUnscaledTime = i2761[5]
  i2760.rewindCallbackMode = i2761[6]
  i2760.showUnityEditorReport = !!i2761[7]
  i2760.logBehaviour = i2761[8]
  i2760.drawGizmos = !!i2761[9]
  i2760.defaultRecyclable = !!i2761[10]
  i2760.defaultAutoPlay = i2761[11]
  i2760.defaultUpdateType = i2761[12]
  i2760.defaultTimeScaleIndependent = !!i2761[13]
  i2760.defaultEaseType = i2761[14]
  i2760.defaultEaseOvershootOrAmplitude = i2761[15]
  i2760.defaultEasePeriod = i2761[16]
  i2760.defaultAutoKill = !!i2761[17]
  i2760.defaultLoopType = i2761[18]
  i2760.debugMode = !!i2761[19]
  i2760.debugStoreTargetId = !!i2761[20]
  i2760.showPreviewPanel = !!i2761[21]
  i2760.storeSettingsLocation = i2761[22]
  i2760.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2761[23], i2760.modules)
  i2760.createASMDEF = !!i2761[24]
  i2760.showPlayingTweens = !!i2761[25]
  i2760.showPausedTweens = !!i2761[26]
  return i2760
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2762 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2763 = data
  i2762.logBehaviour = i2763[0]
  i2762.nestedTweenFailureBehaviour = i2763[1]
  return i2762
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2764 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2765 = data
  i2764.showPanel = !!i2765[0]
  i2764.audioEnabled = !!i2765[1]
  i2764.physicsEnabled = !!i2765[2]
  i2764.physics2DEnabled = !!i2765[3]
  i2764.spriteEnabled = !!i2765[4]
  i2764.uiEnabled = !!i2765[5]
  i2764.textMeshProEnabled = !!i2765[6]
  i2764.tk2DEnabled = !!i2765[7]
  i2764.deAudioEnabled = !!i2765[8]
  i2764.deUnityExtendedEnabled = !!i2765[9]
  i2764.epoOutlineEnabled = !!i2765[10]
  return i2764
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2766 = root || request.c( 'TMPro.TMP_Settings' )
  var i2767 = data
  i2766.m_enableWordWrapping = !!i2767[0]
  i2766.m_enableKerning = !!i2767[1]
  i2766.m_enableExtraPadding = !!i2767[2]
  i2766.m_enableTintAllSprites = !!i2767[3]
  i2766.m_enableParseEscapeCharacters = !!i2767[4]
  i2766.m_EnableRaycastTarget = !!i2767[5]
  i2766.m_GetFontFeaturesAtRuntime = !!i2767[6]
  i2766.m_missingGlyphCharacter = i2767[7]
  i2766.m_warningsDisabled = !!i2767[8]
  request.r(i2767[9], i2767[10], 0, i2766, 'm_defaultFontAsset')
  i2766.m_defaultFontAssetPath = i2767[11]
  i2766.m_defaultFontSize = i2767[12]
  i2766.m_defaultAutoSizeMinRatio = i2767[13]
  i2766.m_defaultAutoSizeMaxRatio = i2767[14]
  i2766.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2767[15], i2767[16] )
  i2766.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2767[17], i2767[18] )
  i2766.m_autoSizeTextContainer = !!i2767[19]
  i2766.m_IsTextObjectScaleStatic = !!i2767[20]
  var i2769 = i2767[21]
  var i2768 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2769.length; i += 2) {
  request.r(i2769[i + 0], i2769[i + 1], 1, i2768, '')
  }
  i2766.m_fallbackFontAssets = i2768
  i2766.m_matchMaterialPreset = !!i2767[22]
  request.r(i2767[23], i2767[24], 0, i2766, 'm_defaultSpriteAsset')
  i2766.m_defaultSpriteAssetPath = i2767[25]
  i2766.m_enableEmojiSupport = !!i2767[26]
  i2766.m_MissingCharacterSpriteUnicode = i2767[27]
  i2766.m_defaultColorGradientPresetsPath = i2767[28]
  request.r(i2767[29], i2767[30], 0, i2766, 'm_defaultStyleSheet')
  i2766.m_StyleSheetsResourcePath = i2767[31]
  request.r(i2767[32], i2767[33], 0, i2766, 'm_leadingCharacters')
  request.r(i2767[34], i2767[35], 0, i2766, 'm_followingCharacters')
  i2766.m_UseModernHangulLineBreakingRules = !!i2767[36]
  return i2766
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2770 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2771 = data
  request.r(i2771[0], i2771[1], 0, i2770, 'spriteSheet')
  var i2773 = i2771[2]
  var i2772 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.add(request.d('TMPro.TMP_Sprite', i2773[i + 0]));
  }
  i2770.spriteInfoList = i2772
  var i2775 = i2771[3]
  var i2774 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2775.length; i += 2) {
  request.r(i2775[i + 0], i2775[i + 1], 1, i2774, '')
  }
  i2770.fallbackSpriteAssets = i2774
  i2770.hashCode = i2771[4]
  request.r(i2771[5], i2771[6], 0, i2770, 'material')
  i2770.materialHashCode = i2771[7]
  i2770.m_Version = i2771[8]
  i2770.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2771[9], i2770.m_FaceInfo)
  var i2777 = i2771[10]
  var i2776 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2777.length; i += 1) {
    i2776.add(request.d('TMPro.TMP_SpriteCharacter', i2777[i + 0]));
  }
  i2770.m_SpriteCharacterTable = i2776
  var i2779 = i2771[11]
  var i2778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2779.length; i += 1) {
    i2778.add(request.d('TMPro.TMP_SpriteGlyph', i2779[i + 0]));
  }
  i2770.m_SpriteGlyphTable = i2778
  return i2770
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2782 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2783 = data
  i2782.name = i2783[0]
  i2782.hashCode = i2783[1]
  i2782.unicode = i2783[2]
  i2782.pivot = new pc.Vec2( i2783[3], i2783[4] )
  request.r(i2783[5], i2783[6], 0, i2782, 'sprite')
  i2782.id = i2783[7]
  i2782.x = i2783[8]
  i2782.y = i2783[9]
  i2782.width = i2783[10]
  i2782.height = i2783[11]
  i2782.xOffset = i2783[12]
  i2782.yOffset = i2783[13]
  i2782.xAdvance = i2783[14]
  i2782.scale = i2783[15]
  return i2782
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2788 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2789 = data
  i2788.m_Name = i2789[0]
  i2788.m_HashCode = i2789[1]
  i2788.m_ElementType = i2789[2]
  i2788.m_Unicode = i2789[3]
  i2788.m_GlyphIndex = i2789[4]
  i2788.m_Scale = i2789[5]
  return i2788
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2792 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2793 = data
  request.r(i2793[0], i2793[1], 0, i2792, 'sprite')
  i2792.m_Index = i2793[2]
  i2792.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2793[3], i2792.m_Metrics)
  i2792.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2793[4], i2792.m_GlyphRect)
  i2792.m_Scale = i2793[5]
  i2792.m_AtlasIndex = i2793[6]
  i2792.m_ClassDefinitionType = i2793[7]
  return i2792
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2794 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2795 = data
  var i2797 = i2795[0]
  var i2796 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2797.length; i += 1) {
    i2796.add(request.d('TMPro.TMP_Style', i2797[i + 0]));
  }
  i2794.m_StyleList = i2796
  return i2794
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2800 = root || request.c( 'TMPro.TMP_Style' )
  var i2801 = data
  i2800.m_Name = i2801[0]
  i2800.m_HashCode = i2801[1]
  i2800.m_OpeningDefinition = i2801[2]
  i2800.m_ClosingDefinition = i2801[3]
  i2800.m_OpeningTagArray = i2801[4]
  i2800.m_ClosingTagArray = i2801[5]
  i2800.m_OpeningTagUnicodeArray = i2801[6]
  i2800.m_ClosingTagUnicodeArray = i2801[7]
  return i2800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2803 = data
  var i2805 = i2803[0]
  var i2804 = []
  for(var i = 0; i < i2805.length; i += 1) {
    i2804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2805[i + 0]) );
  }
  i2802.files = i2804
  i2802.componentToPrefabIds = i2803[1]
  return i2802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2809 = data
  i2808.path = i2809[0]
  request.r(i2809[1], i2809[2], 0, i2808, 'unityObject')
  return i2808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2811 = data
  var i2813 = i2811[0]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2813[i + 0]) );
  }
  i2810.scriptsExecutionOrder = i2812
  var i2815 = i2811[1]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2815[i + 0]) );
  }
  i2810.sortingLayers = i2814
  var i2817 = i2811[2]
  var i2816 = []
  for(var i = 0; i < i2817.length; i += 1) {
    i2816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2817[i + 0]) );
  }
  i2810.cullingLayers = i2816
  i2810.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2811[3], i2810.timeSettings)
  i2810.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2811[4], i2810.physicsSettings)
  i2810.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2811[5], i2810.physics2DSettings)
  i2810.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2811[6], i2810.qualitySettings)
  i2810.enableRealtimeShadows = !!i2811[7]
  i2810.enableAutoInstancing = !!i2811[8]
  i2810.enableStaticBatching = !!i2811[9]
  i2810.enableDynamicBatching = !!i2811[10]
  i2810.usePreservativeDynamicBatching = !!i2811[11]
  i2810.lightmapEncodingQuality = i2811[12]
  i2810.desiredColorSpace = i2811[13]
  var i2819 = i2811[14]
  var i2818 = []
  for(var i = 0; i < i2819.length; i += 1) {
    i2818.push( i2819[i + 0] );
  }
  i2810.allTags = i2818
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2823 = data
  i2822.name = i2823[0]
  i2822.value = i2823[1]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2827 = data
  i2826.id = i2827[0]
  i2826.name = i2827[1]
  i2826.value = i2827[2]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2831 = data
  i2830.id = i2831[0]
  i2830.name = i2831[1]
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2833 = data
  i2832.fixedDeltaTime = i2833[0]
  i2832.maximumDeltaTime = i2833[1]
  i2832.timeScale = i2833[2]
  i2832.maximumParticleTimestep = i2833[3]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2835 = data
  i2834.gravity = new pc.Vec3( i2835[0], i2835[1], i2835[2] )
  i2834.defaultSolverIterations = i2835[3]
  i2834.bounceThreshold = i2835[4]
  i2834.autoSyncTransforms = !!i2835[5]
  i2834.autoSimulation = !!i2835[6]
  var i2837 = i2835[7]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2837[i + 0]) );
  }
  i2834.collisionMatrix = i2836
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2841 = data
  i2840.enabled = !!i2841[0]
  i2840.layerId = i2841[1]
  i2840.otherLayerId = i2841[2]
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2843 = data
  request.r(i2843[0], i2843[1], 0, i2842, 'material')
  i2842.gravity = new pc.Vec2( i2843[2], i2843[3] )
  i2842.positionIterations = i2843[4]
  i2842.velocityIterations = i2843[5]
  i2842.velocityThreshold = i2843[6]
  i2842.maxLinearCorrection = i2843[7]
  i2842.maxAngularCorrection = i2843[8]
  i2842.maxTranslationSpeed = i2843[9]
  i2842.maxRotationSpeed = i2843[10]
  i2842.baumgarteScale = i2843[11]
  i2842.baumgarteTOIScale = i2843[12]
  i2842.timeToSleep = i2843[13]
  i2842.linearSleepTolerance = i2843[14]
  i2842.angularSleepTolerance = i2843[15]
  i2842.defaultContactOffset = i2843[16]
  i2842.autoSimulation = !!i2843[17]
  i2842.queriesHitTriggers = !!i2843[18]
  i2842.queriesStartInColliders = !!i2843[19]
  i2842.callbacksOnDisable = !!i2843[20]
  i2842.reuseCollisionCallbacks = !!i2843[21]
  i2842.autoSyncTransforms = !!i2843[22]
  var i2845 = i2843[23]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2845[i + 0]) );
  }
  i2842.collisionMatrix = i2844
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2849 = data
  i2848.enabled = !!i2849[0]
  i2848.layerId = i2849[1]
  i2848.otherLayerId = i2849[2]
  return i2848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2851 = data
  var i2853 = i2851[0]
  var i2852 = []
  for(var i = 0; i < i2853.length; i += 1) {
    i2852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2853[i + 0]) );
  }
  i2850.qualityLevels = i2852
  var i2855 = i2851[1]
  var i2854 = []
  for(var i = 0; i < i2855.length; i += 1) {
    i2854.push( i2855[i + 0] );
  }
  i2850.names = i2854
  i2850.shadows = i2851[2]
  i2850.anisotropicFiltering = i2851[3]
  i2850.antiAliasing = i2851[4]
  i2850.lodBias = i2851[5]
  i2850.shadowCascades = i2851[6]
  i2850.shadowDistance = i2851[7]
  i2850.shadowmaskMode = i2851[8]
  i2850.shadowProjection = i2851[9]
  i2850.shadowResolution = i2851[10]
  i2850.softParticles = !!i2851[11]
  i2850.softVegetation = !!i2851[12]
  i2850.activeColorSpace = i2851[13]
  i2850.desiredColorSpace = i2851[14]
  i2850.masterTextureLimit = i2851[15]
  i2850.maxQueuedFrames = i2851[16]
  i2850.particleRaycastBudget = i2851[17]
  i2850.pixelLightCount = i2851[18]
  i2850.realtimeReflectionProbes = !!i2851[19]
  i2850.shadowCascade2Split = i2851[20]
  i2850.shadowCascade4Split = new pc.Vec3( i2851[21], i2851[22], i2851[23] )
  i2850.streamingMipmapsActive = !!i2851[24]
  i2850.vSyncCount = i2851[25]
  i2850.asyncUploadBufferSize = i2851[26]
  i2850.asyncUploadTimeSlice = i2851[27]
  i2850.billboardsFaceCameraPosition = !!i2851[28]
  i2850.shadowNearPlaneOffset = i2851[29]
  i2850.streamingMipmapsMemoryBudget = i2851[30]
  i2850.maximumLODLevel = i2851[31]
  i2850.streamingMipmapsAddAllCameras = !!i2851[32]
  i2850.streamingMipmapsMaxLevelReduction = i2851[33]
  i2850.streamingMipmapsRenderersPerFrame = i2851[34]
  i2850.resolutionScalingFixedDPIFactor = i2851[35]
  i2850.streamingMipmapsMaxFileIORequests = i2851[36]
  i2850.currentQualityLevel = i2851[37]
  return i2850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2861 = data
  i2860.weight = i2861[0]
  i2860.vertices = i2861[1]
  i2860.normals = i2861[2]
  i2860.tangents = i2861[3]
  return i2860
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2862 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2863 = data
  i2862.xPlacement = i2863[0]
  i2862.yPlacement = i2863[1]
  i2862.xAdvance = i2863[2]
  i2862.yAdvance = i2863[3]
  return i2862
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.SphereCollider":{"center":0,"radius":3,"enabled":4,"isTrigger":5,"material":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animations.BlendTree":{"name":0,"blendParameter":1,"blendParameterY":2,"blendType":3,"children":4,"useAutomaticThresholds":5,"minThreshold":6,"maxThreshold":7},"Luna.Unity.DTO.UnityEngine.Animations.ChildMotion":{"motion":0,"threshold":2,"position":3,"timeScale":5,"cycleOffset":6,"directBlendParameter":7,"mirror":8},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"81":[82],"83":[82],"84":[82],"85":[82],"86":[82],"87":[82],"88":[13],"89":[52],"90":[15],"91":[15],"92":[15],"93":[15],"94":[15],"95":[15],"96":[15],"97":[98],"99":[98],"100":[98],"101":[98],"102":[98],"103":[98],"104":[98],"105":[98],"106":[98],"107":[98],"108":[98],"109":[98],"110":[98],"111":[52],"112":[7],"113":[114],"115":[114],"25":[24],"62":[116],"117":[116],"118":[32],"119":[116],"120":[121],"122":[123],"124":[121],"125":[24],"126":[24],"28":[25],"38":[36,24],"37":[24],"27":[25],"127":[24],"128":[24],"129":[24],"130":[24],"131":[24],"132":[24],"133":[24],"34":[24],"134":[24],"31":[36,24],"135":[24],"136":[24],"137":[24],"138":[24],"33":[36,24],"139":[24],"140":[46],"141":[46],"47":[46],"142":[46],"143":[52],"144":[52],"145":[146],"147":[52],"148":[24],"58":[7,24],"44":[24,36],"149":[24],"150":[36,24],"151":[7],"152":[36,24],"153":[24],"154":[121]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","CoinEffectMove","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","HyperCasual.Gameplay.SequenceManager","UnityEngine.GameObject","HyperCasual.Runner.PlayerController","UnityEngine.Animator","UnityEngine.SkinnedMeshRenderer","UnityEngine.CapsuleCollider","UnityEngine.Rigidbody","UnityEditor.Animations.AnimatorController","HyperCasual.Runner.InputManager","HyperCasual.Runner.Inventory","HyperCasual.Gameplay.ItemPickedEvent","HyperCasual.Gameplay.LevelCompletedEvent","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","PlayableSettings","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","EndCardController","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","UnityEngine.Light","SimpleDeactivateOnTap","DOTWeenPulseAnim","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.MeshCollider","UnityEngine.BoxCollider","Assets.Scripts.Water.WaterArea","Assets.Scripts.Water.WaterPropertyBlockSetter","UnityEngine.Camera","UnityEngine.AudioListener","HyperCasual.Runner.CameraManager","CoinEffectManager","HyperCasual.Runner.LevelManager","HyperCasual.Runner.Gate","TMPro.TextMeshPro","UnityEngine.SphereCollider","HyperCasual.Runner.Collectable","HyperCasual.Core.BobAndSpin","HyperCasual.Runner.FinishLine","OutroAnimationController","CheerPhraseController","CollectableParticleManager","HyperCasual.Gameplay.BootLoader","HyperCasual.Runner.SaveManager","HyperCasual.Runner.AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","HyperCasual.Core.UIManager","HyperCasual.Gameplay.Hud","HyperCasual.Runner.GameManager","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Collider","HyperCasual.Runner.Obstacle","HyperCasual.Runner.HyperCasualButton","HyperCasual.Core.TriggerEvent","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.56f1";

Deserializers.productName = "Luna2022CleanTest";

Deserializers.lunaInitializationTime = "05/22/2026 06:29:55";

Deserializers.lunaDaysRunning = "0.4";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1727";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4621";

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

Deserializers.buildID = "6c1c8289-847c-4ead-a56e-7c3cb356a3c7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

