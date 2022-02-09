import { Users } from "./users";
import { Base } from "./base";
import { applyMixins } from "./utils/applyMixins";

class ReachAPI extends Base {}
interface ReachAPI extends Users {}

applyMixins(ReachAPI, [Users])

export default ReachAPI
