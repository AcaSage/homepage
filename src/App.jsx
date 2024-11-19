import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import BgImage from './assets/bg.jpeg';
import DashBoard from './assets/db.png';
import { Book, Users, Award, ArrowRight, Star, Heart, Brain, Globe, ChevronDown, Send, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const translations = {
    English: {
        title: "Transform Your Academic Journey",
        subtitle: "Join the next generation of academic excellence with AcaSage",
        features: "Why Choose AcaSage?",
        stats: "The Impact",
        testimonials: "Student Stories",
        cta: "Ready to Excel?",
        ctaSubtitle: "Join thousands of students achieving their academic goals",
        joinWaitlist: "Join Waitlist",
        learnMore: "Learn More"
    },
    Español: {
        title: "Transforma tu Viaje Académico",
        subtitle: "Únete a la próxima generación de excelencia académica con AcaSage",
        features: "¿Por qué elegir AcaSage?",
        stats: "El Impacto",
        testimonials: "Historias de Estudiantes",
        cta: "¿Listo para Sobresalir?",
        ctaSubtitle: "Únete a miles de estudiantes logrando sus metas académicas",
        joinWaitlist: "Unirse a la Lista",
        learnMore: "Saber Más"
    },
    Français: {
        title: "Transformez Votre Parcours Académique",
        subtitle: "Rejoignez la nouvelle génération d'excellence académique avec AcaSage",
        features: "Pourquoi Choisir AcaSage?",
        stats: "L'Impact",
        testimonials: "Témoignages d'Étudiants",
        cta: "Prêt à Exceller?",
        ctaSubtitle: "Rejoignez des milliers d'étudiants atteignant leurs objectifs",
        joinWaitlist: "Rejoindre la Liste",
        learnMore: "En Savoir Plus"
    },
    ภาษาไทย: {
        title: "เปลี่ยนแปลงเส้นทางการเรียนรู้ของคุณ",
        subtitle: "เข้าร่วมกับรุ่นใหม่ของความเป็นเลิศทางการศึกษาไปกับ AcaSage",
        features: "ทำไมต้องเลือก AcaSage?",
        stats: "ผลกระทบ",
        testimonials: "เรื่องราวของนักเรียน",
        cta: "พร้อมที่จะก้าวหน้า?",
        ctaSubtitle: "เข้าร่วมกับนักเรียนหลายพันคนที่กำลังบรรลุเป้าหมายทางการศึกษา",
        joinWaitlist: "เข้าร่วมรายชื่อรอ",
        learnMore: "เรียนรู้เพิ่มเติม"
    }
};

const features = [
    {
        icon: <Heart className="w-6 h-6" />,
        title: "Real-time academic feedback",
        description: "Personalized insights that students can act on immediately"
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Emotional well-being check-ins",
        description: "Mood tracking and mental health resources to support student resilience"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Collaborative learning",
        description: "Peer mentorship, study groups, and community-building to foster belonging"
    }
];

const stats = [
    {
        value: "46.3%",
        label: "of students feel a strong sense of belonging",
        source: "(SES, 2023)",
        trend: [
            { year: 2020, value: 52 },
            { year: 2021, value: 48 },
            { year: 2022, value: 47 },
            { year: 2023, value: 46.3 }
        ]
    },
    {
        value: "76.7%",
        label: "satisfaction rate in education experience",
        source: "(SES, 2023)",
        trend: [
            { year: 2020, value: 82 },
            { year: 2021, value: 78 },
            { year: 2022, value: 77 },
            { year: 2023, value: 76.7 }
        ]
    },
    {
        value: "38.8%",
        label: "of young adults experiencing mental health challenges",
        source: "(NMHC, 2024)",
        trend: [
            { year: 2020, value: 30 },
            { year: 2021, value: 34 },
            { year: 2022, value: 36 },
            { year: 2023, value: 38.8 }
        ]
    }
];

const AcaSagePage = () => {
    const [language, setLanguage] = useState("English");
    const [showLanguage, setShowLanguage] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const t = translations[language];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
            {/* Language Selector */}
            <div className="fixed top-4 right-4 z-50">
                <button
                    onClick={() => setShowLanguage(!showLanguage)}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md"
                >
                    <Globe size={16} />
                    {language}
                    <ChevronDown size={16} />
                </button>

                {showLanguage && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-12 right-0 bg-white rounded-lg shadow-lg py-2"
                    >
                        {Object.keys(translations).map((lang) => (
                            <button
                                key={lang}
                                className="w-full px-4 py-2 text-left hover:bg-orange-50"
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
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                className="relative h-screen flex items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0 z-0">
                    <img
                        src={BgImage}
                        alt="Students collaborating"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl font-bold mb-6"
                    >
                        {t.title}
                    </motion.h1>
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl mb-8"
                    >
                        {t.subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 mx-auto">
                            {t.joinWaitlist} <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">{t.stats}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-6 rounded-2xl shadow-lg"
                            >
                                <div className="h-40 mb-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={stat.trend}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="year" />
                                            <YAxis />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#f97316"
                                                strokeWidth={2}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-600 mb-2">{stat.label}</p>
                                <p className="text-sm text-gray-500">{stat.source}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-orange-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-16">{t.features}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-gray-100 rounded-2xl p-8">
                        <img
                            src={DashBoard}
                            alt="AcaSage Dashboard"
                            className="rounded-lg shadow-2xl"
                        />
                        <div className="mt-8 grid md:grid-cols-4 gap-4">
                            {[
                                "Smart study plan",
                                "Integrated wellness support",
                                "Podcast learning mode",
                                "Peer review & study groups"
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-green-500" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange-500 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-4xl font-bold mb-6">{t.cta}</h2>
                    <p className="text-xl mb-8">{t.ctaSubtitle}</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
                            {t.joinWaitlist}
                        </button>
                        <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all">
                            {t.learnMore}
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <p className="text-center text-sm text-gray-400">
                        Solutions aligned with SES 2023 insights on student needs for support, engagement, and mental health
                    </p>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} AcaSage. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default AcaSagePage;