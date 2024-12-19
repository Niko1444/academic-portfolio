# Academic Portfolio Template

A simple and modern academic portfolio built with React, Vite, and TailwindCSS. Perfect for students and academics to showcase their work, projects, and publications.

## 📌 Live Demo
[View Live Demo](https://academic-portfolio-beige.vercel.app/)

## 🎯 What You Can Do With This Template

### 1. Personal Showcase
- Display your professional information
- Showcase your academic background
- Present your CV/Resume in a clean format
- Share your contact information

### 2. Project Portfolio
- Add your academic and personal projects
- Include project descriptions and images
- Categorize projects by type or technology
- Link to live demos or GitHub repositories

### 3. Publications Section
- List your academic publications
- Add paper abstracts and citations
- Link to publication sources
- Sort publications by year or type

### 4. Customization Options
- Modify the color scheme
- Update layout and components
- Add new sections as needed
- Customize responsive design

## 🛠️ Built With
- React 18
- Vite
- TailwindCSS
- React Router DOM
- React Icons
- ESLint
- Prettier

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/academic-portfolio.git
cd academic-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure
```
academic-portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── Sidebar/
│   ├── pages/       # Main page components
│   │   ├── Home/
│   │   ├── Projects/
│   │   ├── Publications/
│   │   └── CV/
│   ├── data/        # JSON data files
│   │   ├── ProjectsData.json
│   │   └── PublicationsData.json
│   ├── assets/      # Images and other assets
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.json
├── .prettierrc
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🔧 Customization Guide

### 1. Update Personal Information
Edit `src/data/PersonalData.json`:
```json
{
  "name": "Your Name",
  "title": "Your Title",
  "bio": "Your bio...",
  "contact": {
    "email": "your@email.com",
    "linkedin": "your-linkedin",
    "github": "your-github"
  }
}
```

### 2. Add Projects
Edit `src/data/ProjectsData.json`:
```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description...",
      "technologies": ["React", "Node.js"],
      "image": "/images/project.png",
      "github": "repo-link",
      "demo": "demo-link"
    }
  ]
}
```

## 📱 Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## ⚙️ Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments
- [React Documentation](https://react.dev)
- [Vite](https://vitejs.dev)
- [TailwindCSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)

---

Built with 💻 by [Tien Phat / Nikola](https://github.com/Niko1444)
