import { Users } from "./users";
import { Base } from "./base";
import { applyMixins } from "./utils/applyMixins";

// Creating ReachAPI
class ReachAPI extends Base {}
interface ReachAPI extends Users {}

// Applying child fucntions of the user class to the REachAPI Base class
applyMixins(ReachAPI, [Users])

export default ReachAPI
