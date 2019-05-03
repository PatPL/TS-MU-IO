import IMuBinary from "./IMuBinary";
declare type ColorAnimation = [[number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number], [number, number, number, number]];
export default class MuParticles {
    Emit: number;
    Shape: number;
    Shape3D: [number, number, number];
    Shape2D: [number, number];
    Shape1D: number;
    Color: [number, number, number, number];
    UseWorldSpace: number;
    Size: [number, number];
    Energy: [number, number];
    Emission: [number, number];
    WorldVelocity: [number, number, number];
    LocalVelocity: [number, number, number];
    RandomVelocity: [number, number, number];
    EmitterVelocityScale: number;
    AngularVelocity: number;
    RandomAngularVelocity: number;
    RandomRotation: number;
    DoesAnimateColor: number;
    ColorAnimation: ColorAnimation;
    WorldRotationAxis: [number, number, number];
    LocalRotationAxis: [number, number, number];
    SizeGrow: number;
    RandomForce: [number, number, number];
    Force: [number, number, number];
    Damping: number;
    CastShadows: number;
    ReceiveShadows: number;
    LengthScale: number;
    VelocityScale: number;
    MaxParticleSize: number;
    ParticleRenderMode: number;
    UVAnimation: [number, number, number];
    Count: number;
    constructor(array: IMuBinary);
    Serialize(data: number[]): void;
}
export {};
//# sourceMappingURL=MuParticles.d.ts.map