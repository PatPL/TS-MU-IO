var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "../MuBitConverter", "../MuEnum"], function (require, exports, MuBitConverter_1, MuEnum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    MuBitConverter_1 = __importDefault(MuBitConverter_1);
    class MuColliderSphere {
        constructor(array, isTwo) {
            this.IsTrigger = 0;
            if (window.muTSlog) {
                console.log(`Reading MuColliderSphere @${array.offset}`);
            }
            ;
            this.HasTrigger = isTwo;
            if (this.HasTrigger) {
                this.IsTrigger = MuBitConverter_1.default.ReadByte(array);
            }
            this.Radius = MuBitConverter_1.default.ReadFloat(array);
            this.Center = MuBitConverter_1.default.ReadVector(array);
        }
        Serialize(data) {
            if (this.HasTrigger) {
                MuBitConverter_1.default.WriteInt(data, MuEnum_1.MuEnum.ET_SPHERE_COLLIDER2);
                MuBitConverter_1.default.WriteByte(data, this.IsTrigger);
            }
            else {
                MuBitConverter_1.default.WriteInt(data, MuEnum_1.MuEnum.ET_SPHERE_COLLIDER);
            }
            MuBitConverter_1.default.WriteFloat(data, this.Radius);
            MuBitConverter_1.default.WriteVector(data, this.Center);
        }
    }
    exports.default = MuColliderSphere;
});
//# sourceMappingURL=MuColliderSphere.js.map