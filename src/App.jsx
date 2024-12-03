import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import BgImage from './assets/bg.png';
import DashBoard from './assets/db.png';
import FD from './assets/anya.jpeg';
import PodCast from './assets/db2.png';
import { Book, Users, Award, ArrowRight, Star, Heart, Sun, Moon, Highlighter, ShieldCheck,
    Brain, Globe, ChevronDown, Send, Check, Linkedin, Youtube, Github, Rocket, TrendingUp
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import MoodTracker   from "./components/MoodTracker.jsx";
import KeyChallengesSection from "./components/KeyChallengesSection.jsx";

const translations = {
    English: {
        title: "Learn Smarter, Thrive Stronger",
        subtitle: "Bringing innovation to education — AcaSage is on its way",
        features: "What makes AcaSage different",
        featuresDescription: "Discover the features designed to enhance your learning experience",
        testimonials: "Imagine the possibilities",
        cta: "Shape the future today",
        ctaSubtitle: "Be among the first to try AcaSage and make a difference",
        joinWaitlist: "Get on the waitlist",
        learnMore: "Investors — let's talk!",
        founderTitle: "About the Founder",
        founderDescription:
            "When I struggled to find personalised academic support as a student, I decided to take action. Using my skills as a software developer and insights from my journey, I created AcaSage — a learning companion designed to adapt to each student’s individual path to success",
        linkedin: "Connect on LinkedIn",
        github: "Follow on GitHub",
        youtube: "Follow on YouTube",

        featureDetails: [
            { title: "Instant academic feedback", description: "Receive actionable, personalised insights to improve learning in real time" },
            { title: "Emotional well-being support", description: "Track your mood and access tailored mental health resources for resilience" },
            { title: "Collaborative communities", description: "Engage in peer mentorship, study groups, and build meaningful connections" },
            { title: "Privacy and security", description: "Your data is encrypted and protected to ensure complete confidentiality" },
            { title: "Watermarked documents", description: "Protect your content with custom watermarks to prevent unauthorised sharing" },
            { title: "Cutting-edge AI integration", description: "Leverage advanced AI to enhance learning outcomes and streamline academic workflows" },
        ],
        footer: {
            aboutTitle: "About",
            aboutText:
                "Redefining learning by delivering innovative academic tools and personalised wellness support. AcaSage is designed to address the evolving needs of students, aligning with SES 2023 insights on support, engagement, and mental health.",
            contactTitle: "Contact",
            contactDetails: ["founder@acasage.com", "Melbourne, AU", "Dublin, IE"],
            followTitle: "Follow",
            followLinks: {
                linkedin: "Follow us on LinkedIn",
                github: "Follow us on GitHub",
            },
            memberText: "Member of",
            memberLink: {
                text: "StartSpace",
                url: "https://startspacehq.com",
            },
            poweredBy: "powered by State Library Victoria",
            copyright: "All rights reserved",
        },
    },
    ภาษาไทย: {
        title: "เรียนรู้ได้อย่างชาญฉลาด ก้าวหน้าได้อย่างแข็งแกร่ง",
        subtitle: "นำความล้ำสมัยมาสู่การศึกษา — AcaSage กำลังมาถึง",
        features: "อะไรทำให้ AcaSage แตกต่าง",
        stats: "การศึกษาเมื่อเร็วๆ นี้",
        testimonials: "จินตนาการถึงความเป็นไปได้",
        cta: "สร้างอนาคตของคุณวันนี้",
        ctaSubtitle: "เป็นคนแรกๆ ที่ได้ลอง AcaSage และสร้างความเปลี่ยนแปลง",
        joinWaitlist: "รับสิทธิ์เข้าถึงก่อนใคร",
        learnMore: "สำรวจการพัฒนาของเรา",
        founderTitle: "เกี่ยวกับผู้ก่อตั้ง",
        founderDescription:
            "เมื่อฉันประสบปัญหาในการหาการสนับสนุนทางวิชาการที่ปรับให้เหมาะสมกับตัวเองในฐานะนักเรียน ฉันจึงตัดสินใจลงมือทำ ด้วยทักษะในฐานะนักพัฒนาซอฟต์แวร์และข้อมูลเชิงลึกจากการเดินทางของฉัน ฉันได้สร้าง AcaSage — เพื่อนร่วมการเรียนรู้ที่ออกแบบมาเพื่อปรับให้เข้ากับเส้นทางเฉพาะตัวของนักเรียนแต่ละคนสู่ความสำเร็จ",
        linkedin: "เชื่อมต่อกับ LinkedIn",
        github: "ติดตามบน GitHub",
        youtube: "ติดตามบน YouTube",

        featureDetails: [
            { title: "คำแนะนำเชิงวิชาการแบบทันที", description: "รับข้อมูลเชิงลึกส่วนบุคคลที่สามารถนำไปปฏิบัติได้เพื่อพัฒนาการเรียนรู้แบบเรียลไทม์" },
            { title: "สนับสนุนความเป็นอยู่ทางอารมณ์", description: "ติดตามอารมณ์ของคุณและเข้าถึงทรัพยากรด้านสุขภาพจิตที่ปรับให้เหมาะสม" },
            { title: "ชุมชนการเรียนรู้ร่วมกัน", description: "มีส่วนร่วมในการให้คำปรึกษา กลุ่มการเรียนรู้ และสร้างเครือข่ายที่มีความหมาย" },
            { title: "ความเป็นส่วนตัวและความปลอดภัย", description: "ข้อมูลของคุณได้รับการเข้ารหัสและป้องกันเพื่อรับรองความเป็นส่วนตัวอย่างสมบูรณ์" },
            { title: "เอกสารที่มีลายน้ำ", description: "ปกป้องเนื้อหาของคุณด้วยลายน้ำที่กำหนดเองเพื่อป้องกันการแชร์โดยไม่ได้รับอนุญาต" },
            { title: "การรวม AI ล้ำสมัย", description: "ใช้ประโยชน์จาก AI ขั้นสูงเพื่อปรับปรุงผลลัพธ์การเรียนรู้และทำให้งานด้านวิชาการเป็นระเบียบ" },
        ],
        footer: {
            aboutTitle: "เกี่ยวกับเรา",
            aboutText:
                "เรากำหนดรูปแบบการเรียนรู้ใหม่โดยมอบเครื่องมือการเรียนรู้ที่ล้ำสมัยและการสนับสนุนสุขภาพจิตที่ปรับให้เหมาะสม AcaSage ได้รับการออกแบบมาเพื่อตอบสนองความต้องการของนักเรียนที่พัฒนาไปเรื่อย ๆ โดยสอดคล้องกับข้อมูลเชิงลึกของ SES 2023 เกี่ยวกับการสนับสนุน การมีส่วนร่วม และสุขภาพจิต",
            contactTitle: "ติดต่อ",
            contactDetails: ["founder@acasage.com", "เมลเบิร์น ออสเตรเลีย, ดับลิน, ไอร์แลนด์"],
            followTitle: "ติดตามเรา",
            followLinks: {
                linkedin: "ติดตามเราบน LinkedIn",
                github: "ติดตามเราบน GitHub",
            },
            memberText: "สมาชิกของ",
            memberLink: {
                text: "StartSpace",
                url: "https://startspacehq.com",
            },
            poweredBy: "ขับเคลื่อนโดยหอสมุดแห่งรัฐวิคตอเรีย",
            copyright: "สงวนลิขสิทธิ์",
        },
    },
};
const features = [
    {
        icon: <Heart className="w-12 h-12" />,
        title: "Instant academic feedback",
        description: "Receive actionable, personalised insights to improve learning in real time"
    },
    {
        icon: <Brain className="w-12 h-12" />,
        title: "Emotional well-being support",
        description: "Track your mood and access tailored mental health resources for resilience"
    },
    {
        icon: <Users className="w-12 h-12"  />,
        title: "Collaborative communities",
        description: "Engage in peer mentorship, study groups, and build meaningful connections"
    },
    {
        icon: <ShieldCheck className="w-12 h-12" />,
        title: "Privacy and security",
        description: "Your data is encrypted and protected to ensure complete confidentiality"
    },
    {
        icon: <Highlighter className="w-12 h-12" />,
        title: "Watermarked documents",
        description: "Protect your content with custom watermarks to prevent unauthorised sharing"
    },
    {
        icon: <Rocket className="w-12 h-12" />,
        title: "Cutting-edge AI integration",
        description: "Leverage advanced AI to enhance learning outcomes and streamline academic workflows"
    }
];

const AcaSagePage = () => {
    const [language, setLanguage] = useState("English");
    const [showLanguage, setShowLanguage] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    const t = translations[language];

    useEffect(() => {
        setIsVisible(true);
        // Check system preference on mount
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    // Dark mode effect
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);


    return (
        <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
            <div
                className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="fixed top-4 left-4 z-50 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {darkMode ? (
                        <Sun className="w-6 h-6 text-gray-800 dark:text-white"/>
                    ) : (
                        <Moon className="w-6 h-6 text-gray-800 dark:text-white"/>
                    )}
                </button>

                {/* Language Selector */}
                <div className="fixed top-4 right-4 z-50">
                    <button
                        onClick={() => setShowLanguage(!showLanguage)}
                        className="flex items-center gap-2 bg-white p-2 sm:p-4 dark:bg-gray-800 px-4 py-2 rounded-full shadow-md dark:text-white"
                    >
                        <Globe size={20}/>
                        <span className="text-sm sm:text-base">{language}</span>
                        <ChevronDown size={20}/>
                    </button>

                    {showLanguage && (
                        <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 w-40 sm:w-48" // Adjust width
                        >
                            {Object.keys(translations).map((lang) => (
                                <button
                                    key={lang}
                                    className="w-full px-4 py-2 text-left hover:bg-orange-50 dark:hover:bg-gray-700 dark:text-white text-sm sm:text-base" // Smaller font
                                    onClick={() => {
                                        setLanguage(lang);
                                        setShowLanguage(false);
                                    }}
                                >
                                    {lang}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Hero Section */}
                <motion.section
                    initial={{opacity: 0}}
                    animate={{opacity: isVisible ? 1 : 0}}
                    className="relative h-screen flex items-center justify-center overflow-hidden"
                >
                    <div className="absolute inset-0 z-0">
                        <img
                            src={BgImage}
                            alt="Students collaborating"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40"/>
                    </div>

                    <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                        <motion.h1
                            initial={{y: 50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.2}}
                            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
                        >
                            {t.title}
                        </motion.h1>
                        <motion.p
                            initial={{y: 50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.4}}
                            className="text-xl md:text-3xl lg:text-xl mb-9"
                        >
                            {t.subtitle}
                        </motion.p>
                        <motion.div
                            initial={{y: 50, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.6}}
                            className="text-center"
                        >
                            <a
                                href="mailto:founder@acasage.com"
                                className="text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full font-medium transition-all flex items-center justify-center gap-2 w-fit mx-auto"
                            >
                                {t.joinWaitlist} <ArrowRight className="w-10 h-10"/>
                            </a>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Key Challenges */}
                <KeyChallengesSection language={language}/>

                {/* Features Section */}
                <section className="py-20 bg-orange-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6 dark:text-white">{t.features}</h2>
                            <p className="text-2xl font-bold dark:text-white">{t.featuresDescription}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t.featureDetails.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{opacity: 0, y: 50}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8}}
                                    viewport={{once: true, amount: 0.3}}
                                    className="bg-white dark:bg-gray-900 rounded-2xl p-9 shadow-lg"
                                >
                                    <div
                                        className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-6">
                                        {features[index]?.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xl text-gray-600 dark:text-gray-300">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mood Tracker */}
                <MoodTracker language={language}/>

                {/* App Preview */}
                <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                            <div className="relative group">
                                <div
                                    className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                <img
                                    src={DashBoard}
                                    alt="AcaSage Dashboard"
                                    className="rounded-lg shadow-2xl relative dark:shadow-gray-900/30"
                                />
                            </div>
                            <div className="mt-8 grid md:grid-cols-4 gap-4">
                                {[
                                    "Smart study plan",
                                    "Wellness support",
                                    "Podcast mode",
                                    "Peer review"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Check className="w-10 h-10 text-green-500"/>
                                        <span className="text-xl font-medium text-gray-800 dark:text-gray-200">
                            {feature}
                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Podcast Preview */}
                <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-8">
                            <div className="relative group">
                                <div
                                    className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                <img
                                    src={PodCast}
                                    alt="AcaSage Dashboard"
                                    className="rounded-lg shadow-2xl relative dark:shadow-gray-900/30"
                                />
                            </div>
                            <div className="mt-8 grid md:grid-cols-4 gap-4">
                                {[
                                    "Peer profile",
                                    "Categorisation",
                                    "Visual summary",
                                    "Privacy control"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Check className="w-10 h-10 text-green-500"/>
                                        <span className="text-xl font-medium text-gray-800 dark:text-gray-200">
                            {feature}
                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founder Section */}
                <section className="py-20 bg-white dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-4xl font-bold mb-6 dark:text-white">{t.founderTitle}</h2>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{t.founderDescription}</p>
                                <div className="flex gap-7 mt-14">
                                    <a
                                        href="https://linkedin.com/in/anyachueayen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                        aria-label={t.linkedin}
                                    >
                                        <Linkedin className="w-12 h-12"/>
                                    </a>
                                    <a
                                        href="https://github.com/anyapages"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                        aria-label={t.github}
                                    >
                                        <Github className="w-12 h-12"/>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@anyaworks"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                        aria-label={t.youtube}
                                    >
                                        <Youtube className="w-12 h-12"/>
                                    </a>
                                </div>
                            </div>
                            <div className="relative group">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
                                <div className="relative">
                                    <div className="aspect-square w-full rounded-lg overflow-hidden">
                                        <img
                                            src={FD}
                                            alt="Founder"
                                            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="py-20 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 text-white">
                    <div className="max-w-4xl mx-auto text-center px-4">
                        <h2 className="text-4xl font-bold mb-6">{t.cta}</h2>
                        <p className="text-xl mb-8">{t.ctaSubtitle}</p>
                        <div className="text-lg flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:founder@acasage.com"
                                className="bg-white dark:bg-gray-900 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-lg">
                                {t.joinWaitlist}

                            </a>
                            <a
                                href="mailto:founder@acasage.com"
                                className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600/50 dark:hover:bg-orange-700/50 transition-all">
                                {t.learnMore}
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        {/* Center the sections */}
                        <div className="flex flex-col md:flex-row md:justify-center items-center gap-12 mb-12">
                            {/* About Section */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-4">{translations[language].footer.aboutTitle}</h3>
                                <p className="text-gray-400 text-lg">
                                    {translations[language].footer.aboutText}
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-4">{translations[language].footer.contactTitle}</h3>
                                <ul className="space-y-2 text-gray-400 text-lg">
                                    {translations[language].footer.contactDetails.map((contact, index) => (
                                        <li key={index}>{contact}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Follow Section */}
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-4">{translations[language].footer.followTitle}</h3>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <a
                                        href="https://linkedin.com/company/acasage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label={translations[language].footer.followLinks.linkedin}
                                    >
                                        <Linkedin className="w-10 h-10"/>
                                    </a>
                                    <a
                                        href="https://github.com/acasage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label={translations[language].footer.followLinks.github}
                                    >
                                        <Github className="w-10 h-10"/>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Footer Bottom */}
                        <div className="border-t border-gray-800 pt-8 mt-8">
                            <div className="text-center space-y-4">
                                <div className="space-y-2">
                                    {/* Member of Section */}
                                    <p className="text-lg text-gray-400">
                                        {translations[language].footer.memberText}{' '}
                                        <a
                                            href={translations[language].footer.memberLink.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-400 hover:text-orange-300 transition-colors"
                                        >
                                            {translations[language].footer.memberLink.text}
                                        </a>{' '}
                                        {translations[language].footer.poweredBy}
                                    </p>
                                    {/* Copyright */}
                                    <p className="text-xl text-gray-400">
                                        &copy; {new Date().getFullYear()} AcaSage. {translations[language].footer.copyright}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default AcaSagePage;