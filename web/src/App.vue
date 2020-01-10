<template>
	<el-container>
		<el-aside class="aside">
			<Menu></Menu>
		</el-aside>
		<el-container>
			<el-header class="header">this is a header</el-header>
			<el-main class="main">
				<div id="app">
					<HelloWorld msg="内容区域" :info="info" />
				</div>
				<router-link to="/a">view link a</router-link>
				<router-link to="/b">view link b</router-link>
				<el-button @click="go">go</el-button>
				<router-view></router-view>
			</el-main>
			<el-footer class="footer">footer</el-footer>
		</el-container>
	</el-container>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld.vue";
	import Menu from "@/components/Menu.vue";
	export default {
		name: "app",
		components: {
			HelloWorld,
			Menu
		},
		data() {
			return {
				info: null
			};
		},
		mounted() {
			this.axios
				.get("https://api.coindesk.com/v1/bpi/currentprice.json")
				.then(
					response =>
						(this.info = "this is test data :" + JSON.stringify(response))
				);
		},
		methods: {
			go: function() {
				this.info = "hello";
				this.$router.push({ name: "a" });
			}
		}
	};
</script>

<style>
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	.header {
		background-color: #409eff;
		text-align: center;
		vertical-align: text-bottom;
		line-height: 100px;
	}

	.aside {
		background-color: #409eff;
	}

	.main {
		background-color: #409eff;
	}

	.footer {
		background-color: #409eff;
	}
</style>
