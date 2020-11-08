/**
 * 提供经度，纬度，获取两个坐标系之间的距离
 * lng是Longitude的简写,表示经度
 * lat是Latitude的简写,表示纬度
 */

const getDistance = (lat1, lng1, lat2, lng2) => {
    // 地球半径
    const worldRadius = 6371.393
    // 1度在弧度制中的常量（PI为弧度制，对应角度制的180度）
    const oneAngleRad = Math.PI / 180

    const radLat1 = lat1 * oneAngleRad
    const radLat2 = lat2 * oneAngleRad
    const radLng1 = lng1 * oneAngleRad
    const radLng2 = lng2 * oneAngleRad

    const latDiff = radLat1 - radLat2
    const lngDiff = radLng1 - radLng2

    const tmp = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(latDiff / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(lngDiff / 2), 2)))

    return Math.round(tmp * 10000 * worldRadius) / 10000
}


console.log('距离为',getDistance(10.0,113.0,12.0,114.0))
