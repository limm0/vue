import Home from "./components/home.vue"
import News from "./components/news.vue"
import User from "./components/user.vue"

export default {
	routes:[
		{path:"/home",component:Home},
		{path:"/news",component:News},
		{path:"/user",component:User},
		{path:"/",redirect:"/home"},
		{path:"*",redirect:"/home"}
	]
}