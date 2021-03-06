class MuColliderMesh {
    
    public HasTrigger: boolean;
    public IsTrigger: number = 0;
    public Convex: number;
    public Mesh: MuMesh;
    
    constructor (array: IMuBinary, isTwo: boolean) {
        if ((window as any).muTSlog) { console.log (`Reading MuColliderMesh @${array.offset}`) };
        
        this.HasTrigger = isTwo;
        if (this.HasTrigger) {
            this.IsTrigger = MuBitConverter.ReadByte (array);
        }
        this.Convex = MuBitConverter.ReadByte (array);
        this.Mesh = new MuMesh (array);
    }
    
    public Serialize (data: number[]) {
        if (this.HasTrigger) {
            MuBitConverter.WriteInt (data, MuEnum.ET_MESH_COLLIDER2);
            MuBitConverter.WriteByte (data, this.IsTrigger);
        } else {
            MuBitConverter.WriteInt (data, MuEnum.ET_MESH_COLLIDER);
        }
        MuBitConverter.WriteByte (data, this.Convex);
        this.Mesh.Serialize (data);
    }
    
}