# 🎵 KienVocal - Nền Tảng Đào Tạo Thanh Nhạc Trực Tuyến

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/PayOS-FF6B6B?style=for-the-badge&logoColor=white" alt="PayOS" />
</div>

<p align="center">
  <strong>🚀 Nền tảng học thanh nhạc trực tuyến hiện đại</strong>
</p>

<p align="center">
  Website học thanh nhạc của giảng viên Đinh Trung Kiên - với 30+ năm kinh nghiệm giảng dạy thanh nhạc chuyên nghiệp
</p>

---

## 🌟 Tính Năng Chính

### 🎯 **Học Tập Trực Tuyến**
- **📚 Khóa học có cấu trúc**: Khóa cơ bản (14 bài) và trung cấp với nội dung chi tiết
- **🎥 Video chất lượng cao**: Tích hợp Vimeo player để học tập mượt mà
- **📖 Theo dõi tiến độ**: Hệ thống đánh dấu bài học đã hoàn thành
- **💬 Bình luận tương tác**: Học viên có thể thảo luận và đặt câu hỏi trên từng bài học

### 🤖 **Trợ Lý AI Thông Minh**
- **💭 Chatbot tư vấn**: Sử dụng Google Gemini AI để tư vấn học viên 24/7
- **🎯 Hỗ trợ cá nhân hóa**: Trả lời câu hỏi về kỹ thuật thanh nhạc và khóa học
- **📞 Thông tin liên hệ**: Cung cấp thông tin giảng viên và lịch học

### 💳 **Thanh Toán & Quản Lý**
- **💸 Thanh toán trực tuyến**: Tích hợp PayOS hỗ trợ nhiều phương thức thanh toán
- **👤 Quản lý tài khoản**: Đăng ký, đăng nhập và quản lý thông tin cá nhân
- **🔐 Bảo mật cao**: Xác thực người dùng an toàn với Supabase Auth

### 📝 **Nội Dung Giáo Dục**
- **📰 Blog thanh nhạc**: Bài viết chuyên sâu về kỹ thuật và phương pháp học hát
- **💡 Kiến thức thực tế**: Chia sẻ kinh nghiệm từ giảng viên chuyên nghiệp
- **📱 Thiết kế responsive**: Giao diện thân thiện trên mọi thiết bị

---

## 🛠️ Công Nghệ Sử Dụng

### **Frontend - Giao Diện Người Dùng**
- ⚡ **Next.js 15.0.3** - Framework React hiện đại với App Router
- 🎨 **Tailwind CSS** - Framework CSS tiện ích
- 📱 **Responsive Design** - Thiết kế tương thích đa thiết bị
- 🎭 **Lucide React** - Thư viện icon đẹp mắt
- 🔥 **React Hot Toast** - Thông báo người dùng

### **Backend & Cơ Sở Dữ Liệu**
- 🗃️ **Supabase** - Nền tảng backend đám mây
- 🔒 **Supabase Auth** - Hệ thống xác thực bảo mật
- 📊 **PostgreSQL** - Cơ sở dữ liệu quan hệ mạnh mẽ
- 🔍 **Prisma ORM** - Công cụ quản lý database an toàn kiểu

### **Tích Hợp & AI**
- 🤖 **Google Gemini AI** - Trí tuệ nhân tạo cho chatbot
- 🎥 **Vimeo Player** - Phát video chất lượng cao
- 💳 **PayOS** - Cổng thanh toán Việt Nam
- 📧 **Email Templates** - Gửi email tự động

---

## 🏗️ Kiến Trúc Hệ Thống

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Người Dùng    │ ←→ │   Next.js Web   │ ←→ │    Supabase     │
│   (Web/Mobile)  │    │   Application   │    │    Backend      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │                        │
                              ↓                        ↓
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Google Gemini  │    │      PayOS      │    │   PostgreSQL    │
│   AI Chatbot    │    │   Thanh Toán    │    │   Cơ Sở Dữ Liệu │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ↓
                    ┌─────────────────┐
                    │  Vimeo Player   │
                    │   Video Học     │
                    └─────────────────┘
```

---

## 📊 Cơ Sở Dữ Liệu

### **Bảng Chính**
| Bảng | Mô Tả | Tính Năng |
|------|-------|-----------|
| **Course** | Quản lý khóa học | Giá động, nhiều loại khóa học |
| **Instructor** | Thông tin giảng viên | Thành tựu, tiểu sử chi tiết |
| **Testimonial** | Đánh giá học viên | Hệ thống phản hồi người dùng |
| **Purchases** | Đơn hàng | Theo dõi trạng thái thanh toán |

### **Bảng Tương Tác**
| Bảng | Mô Tả | Tính Năng |
|------|-------|-----------|
| **profiles** | Thông tin người dùng | Quản lý tài khoản cá nhân |
| **lesson_comments** | Bình luận bài học | Thảo luận có phân cấp và like |
| **videos** | Quản lý video | Liên kết với Vimeo ID |

---

## 🚀 Hướng Dẫn Cài Đặt

### **Yêu Cầu Hệ Thống**
```bash
Node.js >= 18.0.0
npm >= 8.0.0
Tài khoản Supabase (miễn phí)
```

### **Cài Đặt Dự Án**
```bash
# 1. Tải mã nguồn
git clone https://github.com/yourusername/webthanhnhac.git
cd webthanhnhac

# 2. Cài đặt dependencies
npm install

# 3. Thiết lập biến môi trường
cp .env.example .env.local
# Cấu hình Supabase, PayOS, và Google AI API

# 4. Chạy server phát triển
npm run dev
```

### **Biến Môi Trường**
```bash
# Cấu hình Supabase
NEXT_PUBLIC_SUPABASE_URL=url_supabase_của_bạn
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon_key_supabase
SUPABASE_SERVICE_KEY=service_key_supabase

# Google AI cho Chatbot
NEXT_PUBLIC_GOOGLE_API_KEY=api_key_google_gemini

# PayOS cho thanh toán
PAYOS_CLIENT_ID=client_id_payos
PAYOS_API_KEY=api_key_payos
PAYOS_CHECKSUM_KEY=checksum_key_payos

# Vimeo cho video
VIMEO_ACCESS_TOKEN=access_token_vimeo
```

---

## 📁 Cấu Trúc Dự Án

```
webthanhnhac/
├── 📂 src/
│   ├── 📂 app/                    # Trang web chính (Next.js App Router)
│   │   ├── 📂 api/               # API endpoints
│   │   ├── 📂 auth/              # Trang xác thực (đăng nhập/ký)
│   │   ├── 📂 courses/           # Trang khóa học
│   │   ├── 📂 learn/             # Trang học tập (video)
│   │   ├── 📂 blog/              # Blog thanh nhạc
│   │   └── 📂 payment/           # Trang thanh toán
│   ├── 📂 components/            # Component React tái sử dụng
│   │   ├── 📂 home/              # Trang chủ
│   │   ├── 📂 learn/             # Phần học tập
│   │   ├── 📂 shared/            # Shared UI
│   │   └── 📂 layout/            # Header, Footer
│   ├── 📂 lib/                   # Thư viện tiện ích
│   ├── 📂 hooks/                 # Custom React hooks
│   ├── 📂 contexts/              # React contexts
│   └── 📂 content/               # Nội dung blog (Markdown)
├── 📂 public/                    # Tài nguyên tĩnh (hình ảnh, icons)
└── 📄 README.md                  # Tài liệu dự án
```

---

## 🎯 Điểm Nổi Bật Kỹ Thuật

### **🤖 AI Chatbot Thông Minh**
```typescript
// Tích hợp Google Gemini AI tư vấn 24/7
const genAI = new GoogleGenerativeAI(apiKey)
const response = await genAI.generateContent(userQuery)

// Định dạng phản hồi thông minh
const formatResponse = (text: string) => {
  const sections = text.split('***').map(section => section.trim())
  return sections.map(section => formatSection(section))
}
```

### **💳 Hệ Thống Thanh Toán PayOS**
```typescript
// Tích hợp PayOS cho thanh toán Việt Nam
const createPaymentLink = async (courseData) => {
  const paymentLink = await payOS.createPaymentLink({
    orderCode: Number(String(Date.now()).slice(-6)),
    amount: courseData.price,
    description: courseData.title,
    returnUrl: `/payment/success`,
    cancelUrl: `/payment/cancel`
  })
}
```

### **🎥 Video Player Tùy Chỉnh**
```typescript
// Player Vimeo với theo dõi tiến độ
const VideoPlayer = ({ videoId, courseType, lessonId }) => {
  const handleTimeUpdate = (currentTime: number) => {
    // Cập nhật tiến độ học tập real-time
    updateUserProgress(courseType, lessonId, currentTime)
  }
  
  const handleVideoComplete = () => {
    // Đánh dấu bài học hoàn thành
    markLessonCompleted(courseType, lessonId)
  }
}
```

---

## 📈 Hiệu Suất & Tối Ưu

### **Tốc Độ Website**
- ⚡ **LCP**: < 2.5s (Tải nội dung chính)
- 🎯 **FID**: < 100ms (Phản hồi tương tác)  
- 📐 **CLS**: < 0.1 (Ổn định giao diện)

### **Tối Ưu SEO**
- 🔍 Meta tags động cho từng trang
- 📱 Responsive design chuẩn mobile-first
- 🗺️ Tự động tạo sitemap XML
- 🤖 Structured data markup

### **Phân Tích & Theo Dõi**
- 📊 Tích hợp Vercel Analytics
- ⚡ Speed Insights theo dõi tốc độ
- 👥 Theo dõi hành vi người dùng

---

## 🔒 Bảo Mật

- 🛡️ **Row Level Security (RLS)** trên Supabase
- 🔐 **JWT Authentication** bảo vệ API
- 🔒 **Kiểm tra input** và validation dữ liệu
- 💳 **Thanh toán an toàn** chuẩn PCI

---

## 🚀 Triển Khai

### **Vercel (Khuyến nghị)**
```bash
# Triển khai lên Vercel
npm i -g vercel
vercel --prod
```

### **Thiết Lập Production**
```bash
# Biến môi trường production
NEXT_PUBLIC_SUPABASE_URL=url_production
NEXT_PUBLIC_SUPABASE_ANON_KEY=key_production
# ... các cấu hình khác
```

---

## 🤝 Đóng Góp

1. **Fork** repository này
2. **Tạo** branch cho tính năng mới (`git checkout -b feature/TinhNangMoi`)
3. **Commit** thay đổi (`git commit -m 'Thêm tính năng mới'`)
4. **Push** lên branch (`git push origin feature/TinhNangMoi`)
5. **Tạo** Pull Request

---

## 📞 Liên Hệ

<div align="center">

**👨‍💻 Thông Tin Developer**  
📧 **Email:** zaikaman123@gmail.com
🔗 **LinkedIn:** https://www.linkedin.com/in/%C4%91inh-ph%C3%BAc-th%E1%BB%8Bnh-2561b5274/  
🐙 **GitHub:** https://github.com/zaikaman  
💼 **Portfolio:** https://dinhphucthinh.vercel.app/

---

**🎵 KienVocal - Giảng Viên Thanh Nhạc**  
👨‍🎤 **Giảng viên:** Đinh Trung Kiên  
📞 **Điện thoại:** 0903100887  
📧 **Email:** kienalai@gmail.com 
🏆 **Kinh nghiệm:** 30+ năm giảng dạy thanh nhạc  
🎯 **Thành tựu:** Hơn 1000+ học viên thành công

</div>

---

## 📊 Thống Kê Dự Án

- 🎯 **Tính năng hoàn chỉnh:** 95%+
- 📦 **Kích thước tối ưu:** < 500KB
- ⚡ **Tốc độ tải:** < 3 giây
- 🔄 **Uptime:** 99.9%
- 👥 **Người dùng:** Đang tăng trưởng

---

## 📝 Giấy Phép

Dự án này được cấp phép theo **MIT License** - xem file [LICENSE](LICENSE) để biết chi tiết.

---

<div align="center">
  <p><strong>⭐ Hãy star repository này nếu bạn thấy hữu ích!</strong></p>
  <p><strong>🔔 Watch để nhận thông báo cập nhật mới</strong></p>
  <p>Được tạo với ❤️ tại Việt Nam 🇻🇳</p>
  
  <br/>
  
  **[🚀 Website Live](https://kienvocal.com)**
</div>
