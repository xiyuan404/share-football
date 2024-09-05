import stadium from "./stadium";
import question from './question'
import register from './register'
import login from './login'
import recharge from './recharge'
import cdkey from './cdkey'
import order from './order'

export default {
	...stadium,
	...question,
	...register,
	...login,
	...recharge,
	...cdkey,
	...order
}