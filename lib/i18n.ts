export type Language = 'en' | 'vi'

export const languages: Record<Language, string> = {
  en: 'English',
  vi: 'Tiếng Việt'
}

export const translations = {
  en: {
    // Navigation
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    resume: 'Resume',
    
    // Hero Section
    title: 'Mobile Developer',
    subtitle: 'Crafting native and cross-platform mobile experiences. Specialized in Android, iOS, and React Native development with a focus on performance and user experience.',
    
    // Projects Section
    viewMoreProjects: 'View More Projects',
    showLess: 'Show Less',
    
    // Project Descriptions
    remindlyDescription: 'Smart Task & Reminder App - A modern reminder app that helps you stay organized and never miss a task. Set reminders by time, date, or location with a clean, user-friendly interface. View your day in a simple timeline, customize alerts, and manage tasks with ease. Features dark/light themes, repeat options, and full privacy—no data sharing.',
    aiImageGeneratorDescription: 'Native Android application that transforms text prompts into stunning AI-generated images. Built with Jetpack Compose for a modern, fluid UI and integrated with advanced text-to-image AI models. Features include customizable generation parameters, image history, sharing capabilities, and style presets.',
    giotMauVangDescription: 'A blood donation management application that helps users register and participate in blood donation activities. Features include donor registration, blood donation history tracking, and blood quality management. Built with modern Android architecture and best practices.',
    meEasyDescription: 'A social networking application that helps mothers connect with each other to share knowledge about pregnancy, raising children, and understanding their bodies. Features include pregnancy tracking, dietary advice, and emotional journaling.',
    locStocDescription: 'A platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and fulfillment support.',
    locStocRetailDescription: 'A retail management platform that helps businesses manage their operations efficiently. Features include inventory management, sales tracking, and customer relationship management.',
    
    // Tech Stack Section
    techStack: 'Tech Stack',
    crossPlatform: 'Cross-Platform',
    android: 'Android',
    ios: 'iOS',
    toolsServices: 'Tools & Services',
    
    // Contact Section
    contactTitle: 'Contact',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    messageSent: 'Message sent successfully!',
    errorSending: 'Something went wrong. Please try again.',
    
    // Footer
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    
    // Privacy Policy
    privacyTitle: 'Privacy Policy',
    effectiveDate: 'Effective Date: June 15, 2025',
    privacyIntro: 'Remindly respects your privacy. This policy explains how we collect, use, and safeguard your information when you use our mobile application.',
    backToHome: 'Back to Home',
    
    // Terms & Conditions
    termsTitle: 'Terms and Conditions',
    termsIntro: 'Welcome to Remindly. These Terms and Conditions outline the rules and regulations for using our mobile application.',
    
    // Common
    thankYou: 'Thank you for using Remindly!'
  },
  vi: {
    // Navigation
    about: 'Giới thiệu',
    projects: 'Dự án',
    contact: 'Liên hệ',
    resume: 'Sơ yếu lý lịch',
    
    // Hero Section
    title: 'Lập trình viên Mobile',
    subtitle: 'Tạo ra những trải nghiệm mobile native và đa nền tảng. Chuyên về phát triển Android, iOS và React Native với tập trung vào hiệu suất và trải nghiệm người dùng.',
    
    // Projects Section
    viewMoreProjects: 'Xem thêm dự án',
    showLess: 'Thu gọn',
    
    // Project Descriptions
    remindlyDescription: 'Ứng dụng Nhắc nhở & Quản lý Công việc Thông minh - Một ứng dụng nhắc nhở hiện đại giúp bạn luôn có tổ chức và không bao giờ bỏ lỡ công việc. Đặt nhắc nhở theo thời gian, ngày tháng hoặc vị trí với giao diện sạch sẽ, thân thiện với người dùng. Xem ngày của bạn trong timeline đơn giản, tùy chỉnh cảnh báo và quản lý công việc một cách dễ dàng. Tính năng giao diện tối/sáng, tùy chọn lặp lại và bảo mật hoàn toàn—không chia sẻ dữ liệu.',
    aiImageGeneratorDescription: 'Ứng dụng Android native chuyển đổi văn bản thành hình ảnh AI tuyệt đẹp. Được xây dựng với Jetpack Compose cho giao diện hiện đại, mượt mà và tích hợp với các mô hình AI text-to-image tiên tiến. Tính năng bao gồm tham số tạo tùy chỉnh, lịch sử hình ảnh, khả năng chia sẻ và preset phong cách.',
    giotMauVangDescription: 'Ứng dụng quản lý hiến máu giúp người dùng đăng ký và tham gia các hoạt động hiến máu. Tính năng bao gồm đăng ký người hiến, theo dõi lịch sử hiến máu và quản lý chất lượng máu. Được xây dựng với kiến trúc Android hiện đại và các thực hành tốt nhất.',
    meEasyDescription: 'Ứng dụng mạng xã hội giúp các bà mẹ kết nối với nhau để chia sẻ kiến thức về thai kỳ, nuôi dạy con cái và hiểu về cơ thể của mình. Tính năng bao gồm theo dõi thai kỳ, tư vấn dinh dưỡng và ghi chép cảm xúc.',
    locStocDescription: 'Nền tảng được thiết kế cho khu vực, cung cấp cho khách hàng trải nghiệm mua sắm trực tuyến dễ dàng, an toàn và nhanh chóng thông qua hỗ trợ thanh toán và thực hiện mạnh mẽ.',
    locStocRetailDescription: 'Nền tảng quản lý bán lẻ giúp doanh nghiệp quản lý hoạt động một cách hiệu quả. Tính năng bao gồm quản lý kho hàng, theo dõi bán hàng và quản lý mối quan hệ khách hàng.',
    
    // Tech Stack Section
    techStack: 'Công nghệ',
    crossPlatform: 'Đa nền tảng',
    android: 'Android',
    ios: 'iOS',
    toolsServices: 'Công cụ & Dịch vụ',
    
    // Contact Section
    contactTitle: 'Liên hệ',
    name: 'Tên',
    email: 'Email',
    message: 'Tin nhắn',
    sendMessage: 'Gửi tin nhắn',
    sending: 'Đang gửi...',
    messageSent: 'Tin nhắn đã được gửi thành công!',
    errorSending: 'Đã xảy ra lỗi. Vui lòng thử lại.',
    
    // Footer
    allRightsReserved: 'Bảo lưu mọi quyền.',
    privacyPolicy: 'Chính sách bảo mật',
    termsConditions: 'Điều khoản & Điều kiện',
    
    // Privacy Policy
    privacyTitle: 'Chính sách bảo mật',
    effectiveDate: 'Ngày hiệu lực: 15 tháng 6 năm 2025',
    privacyIntro: 'Remindly tôn trọng quyền riêng tư của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi sử dụng ứng dụng di động của chúng tôi.',
    backToHome: 'Về trang chủ',
    
    // Terms & Conditions
    termsTitle: 'Điều khoản và Điều kiện',
    termsIntro: 'Chào mừng đến với Remindly. Những Điều khoản và Điều kiện này nêu rõ các quy tắc và quy định để sử dụng ứng dụng di động của chúng tôi.',
    
    // Common
    thankYou: 'Cảm ơn bạn đã sử dụng Remindly!'
  }
} as const

export type TranslationKey = keyof typeof translations.en 