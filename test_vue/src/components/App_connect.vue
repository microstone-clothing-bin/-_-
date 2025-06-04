<template>
  <div id="map" style="width: 100%; height: 800px;"></div>
</template>

<script>
export default {
  name: 'MapView',
  mounted() {
    // 네이버 지도 API 로드 확인 후 실행
    if (typeof naver !== "undefined" && naver.maps) {
      this.initMap();
    } else {
      // API가 아직 로드되지 않았을 경우 대기
      const interval = setInterval(() => {
        if (typeof naver !== "undefined" && naver.maps) {
          clearInterval(interval);
          this.initMap();
        }
      }, 100);
    }
  },
  methods: {
    initMap() {
      const map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(37.709538, 127.046644),
        zoom: 15
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.709538, 127.046644),
        map: map,
        icon: {
          url: require('@/assets/mapMarker.png'),  // Vue에서 정적 자원 경로로 불러오기
          size: new naver.maps.Size(30, 30),
          scaledSize: new naver.maps.Size(30, 30),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(11, 35)
        }
      });
    }
  }
}
</script>

<style scoped>
#map {
  width: 100%;
  height: 800px;
}
</style>
