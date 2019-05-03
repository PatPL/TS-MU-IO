class MuKey {
    
    public Time: number;
    public Value: number;
    // In, Out
    public Tangent: [number, number] = [0, 0];
    public TangentMode: number;
    
    constructor (array: IMuBinary) {
        this.Time = MuBitConverter.ReadFloat (array);
        this.Value = MuBitConverter.ReadFloat (array);
        this.Tangent[0] = MuBitConverter.ReadFloat (array);
        this.Tangent[1] = MuBitConverter.ReadFloat (array);
        this.TangentMode = MuBitConverter.ReadInt (array);
    }
    
    public Serialize (data: number[]) {
        MuBitConverter.WriteFloat (data, this.Time);
        MuBitConverter.WriteFloat (data, this.Value);
        MuBitConverter.WriteFloat (data, this.Tangent[0]);
        MuBitConverter.WriteFloat (data, this.Tangent[1]);
        MuBitConverter.WriteInt (data, this.TangentMode);
    }
    
}