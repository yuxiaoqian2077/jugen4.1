<template>
    <div id="he-plugin-simple"></div>
</template>

<script>
export default {
    mounted() {
        window.WIDGET = {
            "CONFIG": {
                "modules": "01234",
                "background": "4",
                "backgroundColor": "D5E9FA",
                "tmpColor": "000000",
                "tmpSize": "16",
                "cityColor": "000000",
                "citySize": "16",
                "aqiColor": "000000",
                "aqiSize": "16",
                "weatherIconSize": "24",
                "alertIconSize": "18",
                "padding": "10px 10px 10px 10px",
                "shadow": "1",
                "language": "auto",
                "borderRadius": "10",
                "fixed": "false",
                "vertical": "top",
                "horizontal": "left",
                "key": "80ceca33a53349ac8cbbd32e483bcdf1"
            }
        }
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://widget.qweather.net/simple/static/js/he-simple-common.js?v=2.0"
    document.getElementsByTagName("head")[0].appendChild(script)
    }

}
</script>

<style scoped>
</style>