<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">หน้าแรก</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">รายชื่อ</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">บริการ</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">ติดต่อ-สอบถาม</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>การประชุมและลงพื้นที่ติดตามผลการดำเนินงาน </h2>
      <h2>สำนักงานปลัดกระทรวงสาธารณสุข </h2>
      <h2>ส่วนกลางและส่วนภูมิภาค นอกสถานที่ </h2>
      <h2>ครั้งที่ 6 ประจำปีงบประมาณ พ.ศ.2566 ระหว่างวันที่ 16-18 มกราคม 2566 </h2>
      <h2>ณ ห้องประชุมอาเซียน เอ็กซิบิชั่น คอนเวนชั่น โรงแรมพีลูส </h2>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.container h2 {
  text-align: center;
  margin: 25px auto;
}
</style>