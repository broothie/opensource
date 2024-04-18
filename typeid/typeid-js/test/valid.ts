/**
 * Each example contains:
 * - The TypeID in its canonical string representation.
 * - The prefix
 * - The decoded UUID as a hex string
 *
 * Data copied over from the typeid valid.yml spec file
 *
 * Last updated: 2024-04-17 (for version 0.3.0 of the spec)
 */
export default [
  {
    name: "nil",
    typeid: "00000000000000000000000000",
    prefix: "",
    uuid: "00000000-0000-0000-0000-000000000000",
  },
  {
    name: "one",
    typeid: "00000000000000000000000001",
    prefix: "",
    uuid: "00000000-0000-0000-0000-000000000001",
  },
  {
    name: "ten",
    typeid: "0000000000000000000000000a",
    prefix: "",
    uuid: "00000000-0000-0000-0000-00000000000a",
  },
  {
    name: "sixteen",
    typeid: "0000000000000000000000000g",
    prefix: "",
    uuid: "00000000-0000-0000-0000-000000000010",
  },
  {
    name: "thirty-two",
    typeid: "00000000000000000000000010",
    prefix: "",
    uuid: "00000000-0000-0000-0000-000000000020",
  },
  {
    name: "max-valid",
    typeid: "7zzzzzzzzzzzzzzzzzzzzzzzzz",
    prefix: "",
    uuid: "ffffffff-ffff-ffff-ffff-ffffffffffff",
  },
  {
    name: "valid-alphabet",
    typeid: "prefix_0123456789abcdefghjkmnpqrs",
    prefix: "prefix",
    uuid: "0110c853-1d09-52d8-d73e-1194e95b5f19",
  },
  {
    name: "valid-uuidv7",
    typeid: "prefix_01h455vb4pex5vsknk084sn02q",
    prefix: "prefix",
    uuid: "01890a5d-ac96-774b-bcce-b302099a8057",
  },
  {
    // Tests below were added in v0.3.0 when we started allowing '_' within the type prefix.
    name: "prefix-underscore",
    typeid: "pre_fix_00000000000000000000000000",
    prefix: "pre_fix",
    uuid: "00000000-0000-0000-0000-000000000000",
  },
];
