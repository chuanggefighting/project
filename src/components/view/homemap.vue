<template>
    <div id="container">
    </div>
</template>
<script>
export default {
    name: "homemap",
    data() {
        return {
            x: 121.63763,
            y: 31.20097
        };
    },
    mounted() {
        // 百度地图API功能
        var map = new BMap.Map("container");
        map.centerAndZoom(new BMap.Point(121.444238,31.201263), 16);
        map.enableScrollWheelZoom(true);
        // 用经纬度设置地图中心点
        map.clearOverlays();
        var new_point = new BMap.Point(this.x, this.y);
        var marker = new BMap.Marker(new_point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(new_point);
        var opts = {
            // width : 200,
            // height: 100,
            title : "上海市玉兰香苑四期" ,
        }
        var infoWindow = new BMap.InfoWindow("地址：上海市玉兰香苑四期", opts);
        marker.addEventListener("click", function(){
            map.openInfoWindow(infoWindow,new_point);
        });
        map.openInfoWindow(infoWindow,new_point);
    }
}
</script>
<style lang="scss" scoped>
#container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
</style>