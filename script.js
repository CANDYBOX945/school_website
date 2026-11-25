// 1. 校園建築資料庫
const campusData = {
  b1: {
    title: "元智一館 (Building 1)",
    image: "images/building/building 1.jpg", // 請替換為你的實際圖片路徑
    desc: "位於校園西側，主要為管理學院與部分行政辦公室所在地，緊鄰圓環與大草坪。"
  },
  b2: {
    title: "元智二館 (Building 2)",
    image: "images/building/building 2.jpg",
    desc: "校園內極具特色的八角形建築，主要是工程學院相關系所、實驗室與大型階梯教室的所在地。"
  },
  b3: {
    title: "元智三館 (Building 3)",
    image: "images/building/building 3.jpg",
    desc: "位於校園中心地帶，為資訊學院與電機通訊學院的重要教學與研究大樓。"
  },
  b5: {
    title: "元智五館 & 圖書館",
    image: "images/building/building 5.jpg",
    desc: "結合教學空間、人文社會學院與元智大學圖書館，擁有豐富的藏書與舒適的數位學習空間。"
  },
    b6: {
    title: "元智六館 (Building 6)",
    image: "images/building/building 6.jpg",
    desc: "2002 年完工，座落於校園中軸線端點、與五館相互呼應，是結合教學研究、行政與藝文展演的重要建築。"
  },
  b7: {
    title: "元智七館 (Building 7)",
    image: "images/building/building 7.jpg",
    desc: "建築造型現代，鄰近彥公廳與有庠廳，是舉辦大型演講、藝文活動與電機通訊課程的基地。"
  },
  dorm: {
    title: "學生宿舍區 (Dormitory)",
    image: "images/building/dorm 1.jpg",
    desc: "位於校園東北側（男一宿、女一宿、男女二宿），鄰近操場、網球場與學生餐廳，生活機能便利。"
  },
  b8: {
    title: "體育館",
    image: "images/building/building8.jpg", // 請替換為你的實際圖片路徑
    desc: "充滿熱血激情的地方"
  }
};

// 2. 取得 DOM 元素
const modal = document.getElementById("info-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.getElementById("close-btn");
const hotspots = document.querySelectorAll(".hotspot");

// 3. 綁定每個熱區的點擊事件
hotspots.forEach(spot => {
  spot.addEventListener("click", () => {
    const id = spot.getAttribute("data-id");
    const data = campusData[id];

    if (data) {
      modalTitle.textContent = data.title;
      modalImg.src = data.image;
      modalDesc.textContent = data.desc;
      modal.classList.remove("hidden");
    }
  });
});

// 4. 關閉視窗邏輯 (點擊 X 或點擊視窗外部暗處)
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});5



function formatRelativeTime(createdAt) {
  if (!createdAt) return "剛剛";
  const diffSec = Math.floor((Date.now() - createdAt) / 1000);
  if (diffSec < 60) return "剛剛";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin} 分鐘前`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr} 小時前`;
  const diffDay = Math.floor(diffHr / 24);
  return `${diffDay} 天前`;
}


