<template>
    <div>
		<div>
			<h3 class = "work">Term</h3>
			
				<div class = "divmain" align = "Right">
				
						<button v-on:click = "terms" class = "button"> Change </button>
				</div>
		</div>

		<div class = "div">
			<h3 class = "work">Sessions</h3>
				<div class = "divmain" align = "Right">
					<input type = "button" class = "button" value = "Change">
				</div>
		</div>

		<div class = "div">
			<h3 class = "work">Course Status</h3>
				<div class = "divmain" align = "Right">
					<input type = "button" class = "button" value = "Change">
				</div>
		</div>


	</div>
</template>

<script>
export default {
	name: 'MainFilters',
	
}


</script>

<style scoped>
.button {
	background-color: white;
	border-radius: 4px;
	border: 1.5px solid #DCDCDC;
	font-size: 12px;
	padding: 10px 20px;
	text-align: center;
	font-weight: bold;

}


</style>