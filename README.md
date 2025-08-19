# 🎵 KienVocal - Online Vocal Training Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.0.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
  <img src="https://img.shields.io/badge/PayOS-FF6B6B?style=for-the-badge&logoColor=white" alt="PayOS" />
</div>

<p align="center">
  <strong>🚀 Modern online vocal training platform</strong>
</p>

<p align="center">
  Professional vocal training website by instructor Dinh Trung Kien - with 30+ years of teaching experience
</p>

---

## 🌟 Key Features

### 🎯 **Online Learning**
- **📚 Structured Courses**: Basic course (14 lessons) and intermediate level with detailed content
- **🎥 High-Quality Videos**: Seamless learning with integrated Vimeo player
- **📖 Progress Tracking**: System to mark completed lessons
- **💬 Interactive Comments**: Students can discuss and ask questions on each lesson

### 🤖 **Smart AI Assistant**
- **💭 Chatbot Consultation**: 24/7 student support using Google Gemini AI
- **🎯 Personalized Support**: Answers questions about vocal techniques and courses
- **📞 Contact Information**: Provides instructor information and schedules

### 💳 **Payment & Management**
- **💸 Online Payment**: PayOS integration supporting multiple payment methods
- **👤 Account Management**: Registration, login, and personal information management
- **🔐 High Security**: Secure user authentication with Supabase Auth

### 📝 **Educational Content**
- **📰 Vocal Blog**: In-depth articles on singing techniques and methods
- **💡 Practical Knowledge**: Experience sharing from professional instructors
- **📱 Responsive Design**: User-friendly interface across all devices

---

## 🛠️ Tech Stack

### **Frontend - User Interface**
- ⚡ **Next.js 15.0.3** - Modern React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Multi-device compatible design
- 🎭 **Lucide React** - Beautiful icon library
- 🔥 **React Hot Toast** - User notifications

### **Backend & Database**
- 🗃️ **Supabase** - Cloud backend platform
- 🔒 **Supabase Auth** - Secure authentication system
- 📊 **PostgreSQL** - Powerful relational database
- 🔍 **Prisma ORM** - Type-safe database management tool

### **Integrations & AI**
- 🤖 **Google Gemini AI** - Artificial intelligence for chatbot
- 🎥 **Vimeo Player** - High-quality video streaming
- 💳 **PayOS** - Vietnamese payment gateway
- 📧 **Email Templates** - Automated email sending

---

## 🏗️ System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     Users       │ ←→ │   Next.js Web   │ ←→ │    Supabase     │
│  (Web/Mobile)   │    │   Application   │    │    Backend      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │                        │
                              ↓                        ↓
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Google Gemini  │    │      PayOS      │    │   PostgreSQL    │
│   AI Chatbot    │    │    Payment      │    │    Database     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ↓
                    ┌─────────────────┐
                    │  Vimeo Player   │
                    │  Video Learning │
                    └─────────────────┘
```

---

## 📊 Database Schema

### **Core Tables**
| Table | Description | Features |
|-------|-------------|----------|
| **Course** | Course management | Dynamic pricing, multiple course types |
| **Instructor** | Instructor information | Achievements, detailed biography |
| **Testimonial** | Student reviews | User feedback system |
| **Purchases** | Orders | Payment status tracking |

### **Interactive Tables**
| Table | Description | Features |
|-------|-------------|----------|
| **profiles** | User information | Personal account management |
| **lesson_comments** | Lesson comments | Hierarchical discussions with likes |
| **videos** | Video management | Vimeo ID integration |

---

## 🚀 Getting Started

### **System Requirements**
```bash
Node.js >= 18.0.0
npm >= 8.0.0
Supabase account (free)
```

### **Project Installation**
```bash
# 1. Clone the repository
git clone https://github.com/zaikaman/webthanhnhac.git
cd webthanhnhac

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Configure Supabase, PayOS, and Google AI API

# 4. Run development server
npm run dev
```

### **Environment Variables**
```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_KEY=your_service_key

# Google AI for Chatbot
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_gemini_api_key

# PayOS for Payment
PAYOS_CLIENT_ID=your_payos_client_id
PAYOS_API_KEY=your_payos_api_key
PAYOS_CHECKSUM_KEY=your_payos_checksum_key

# Vimeo for Videos
VIMEO_ACCESS_TOKEN=your_vimeo_access_token
```

---

## 📁 Project Structure

```
webthanhnhac/
├── 📂 src/
│   ├── 📂 app/                    # Main application (Next.js App Router)
│   │   ├── 📂 api/               # API endpoints
│   │   ├── 📂 auth/              # Authentication pages (login/register)
│   │   ├── 📂 courses/           # Course pages
│   │   ├── 📂 learn/             # Learning pages (videos)
│   │   ├── 📂 blog/              # Vocal blog
│   │   └── 📂 payment/           # Payment pages
│   ├── 📂 components/            # Reusable React components
│   │   ├── 📂 home/              # Homepage components
│   │   ├── 📂 learn/             # Learning section
│   │   ├── 📂 shared/            # Shared UI components
│   │   └── 📂 layout/            # Header, Footer
│   ├── 📂 lib/                   # Utility libraries
│   ├── 📂 hooks/                 # Custom React hooks
│   ├── 📂 contexts/              # React contexts
│   └── 📂 content/               # Blog content (Markdown)
├── 📂 public/                    # Static assets (images, icons)
└── 📄 README.md                  # Project documentation
```

---

## 🎯 Technical Highlights

### **🤖 Smart AI Chatbot**
```typescript
// Google Gemini AI integration for 24/7 consultation
const genAI = new GoogleGenerativeAI(apiKey)
const response = await genAI.generateContent(userQuery)

// Smart response formatting
const formatResponse = (text: string) => {
  const sections = text.split('***').map(section => section.trim())
  return sections.map(section => formatSection(section))
}
```

### **💳 PayOS Payment System**
```typescript
// PayOS integration for Vietnamese payments
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

### **🎥 Custom Video Player**
```typescript
// Vimeo player with progress tracking
const VideoPlayer = ({ videoId, courseType, lessonId }) => {
  const handleTimeUpdate = (currentTime: number) => {
    // Update learning progress in real-time
    updateUserProgress(courseType, lessonId, currentTime)
  }
  
  const handleVideoComplete = () => {
    // Mark lesson as completed
    markLessonCompleted(courseType, lessonId)
  }
}
```

---

## 📈 Performance & Optimization

### **Website Speed**
- ⚡ **LCP**: < 2.5s (Largest Contentful Paint)
- 🎯 **FID**: < 100ms (First Input Delay)  
- 📐 **CLS**: < 0.1 (Cumulative Layout Shift)

### **SEO Optimization**
- 🔍 Dynamic meta tags for each page
- 📱 Mobile-first responsive design
- 🗺️ Automatic XML sitemap generation
- 🤖 Structured data markup

### **Analytics & Monitoring**
- 📊 Vercel Analytics integration
- ⚡ Speed Insights performance tracking
- 👥 User behavior monitoring

---

## 🔒 Security

- 🛡️ **Row Level Security (RLS)** on Supabase
- 🔐 **JWT Authentication** for API protection
- 🔒 **Input validation** and data sanitization
- 💳 **Secure payments** with PCI compliance

---

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Deploy to Vercel
npm i -g vercel
vercel --prod
```

### **Production Setup**
```bash
# Production environment variables
NEXT_PUBLIC_SUPABASE_URL=production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=production_key
# ... other production configs
```

---

## 🤝 Contributing

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📞 Contact

<div align="center">

**👨‍💻 Developer Information**  
📧 **Email:** zaikaman123@gmail.com  
🔗 **LinkedIn:** https://www.linkedin.com/in/%C4%91inh-ph%C3%BAc-th%E1%BB%8Bnh-2561b5274/  
🐙 **GitHub:** https://github.com/zaikaman  
💼 **Portfolio:** https://dinhphucthinh.vercel.app/

---

**🎵 KienVocal - Vocal Instructor**  
👨‍🎤 **Instructor:** Dinh Trung Kien  
📞 **Phone:** 0903100887  
📧 **Email:** kienalai@gmail.com  
🏆 **Experience:** 30+ years in vocal training  
🎯 **Achievement:** 1000+ successful students

</div>

---

## 📊 Project Statistics

- 🎯 **Feature Completion:** 95%+
- 📦 **Bundle Size:** Optimized < 500KB
- ⚡ **Load Time:** < 3 seconds
- 🔄 **Uptime:** 99.9%
- 👥 **Users:** Growing daily

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p><strong>⭐ Star this repository if you find it helpful!</strong></p>
  <p><strong>🔔 Watch for updates and new features</strong></p>
  <p>Made with ❤️ in Vietnam 🇻🇳</p>
  
  <br/>
  
  **[🚀 Live Website](https://kienvocal.com)**
</div>
