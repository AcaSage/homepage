import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import BgImage from './assets/bg.jpeg';
import DashBoard from './assets/db.png';
import FD from './assets/anya.jpeg';
import PodCast from './assets/db2.png';
import { Book, Users, Award, ArrowRight, Star, Heart, Sun, Moon, Highlighter, ShieldCheck,
    Brain, Globe, ChevronDown, Send, Check, Linkedin, Youtube, Github, Rocket
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import MoodTracker   from "./components/MoodTracker.jsx";

const translations = {
    English: {
        title: "Learn Smarter, Thrive Stronger",
        subtitle: "Bringing innovation to education — AcaSage is on its way",
        features: "What makes AcaSage different",
        stats: "Recent studies",
        testimonials: "Imagine the possibilities",
        cta: "Shape the future today",
        ctaSubtitle: "Be among the first to try AcaSage and make a difference",
        joinWaitlist: "Get early access",
        learnMore: "Explore our development",
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
        statDetails: [
            {
                value: "57.9%",
                label: "Student satisfaction with peer engagement in academic settings",
                source: "(QILT, 2024)",
                trend: [
                    { year: 2020, value: 64 },
                    { year: 2023, value: 57.9 },
                ],
            },
            {
                value: "66.7%",
                label: "Student satisfaction with university-provided support services",
                source: "(QILT, 2024)",
                trend: [
                    { year: 2020, value: 72 },
                    { year: 2023, value: 66.7 },
                ],
            },
            {
                value: "46.3%",
                label: "Percentage of students a strong sense of belonging within their educational communities",
                source: "(SES, 2023)",
                trend: [
                    { year: 2020, value: 52 },
                    { year: 2023, value: 46.3 },
                ],
            },
            {
                value: "38.8%",
                label: "Percentage of students experiencing significant mental health challenges",
                source: "(NMHC, 2024)",
                trend: [
                    {year: 2020, value: 30},
                    {year: 2023, value: 38.8},
                ],
            },
        ],
    },
    Español: {
        title: "Aprende con Inteligencia, Crece con Fuerza",
        subtitle: "Llevando innovación a la educación — AcaSage está en camino",
        features: "Qué hace diferente a AcaSage",
        stats: "Estudios recientes",
        testimonials: "Imagina las posibilidades",
        cta: "Forma el futuro hoy",
        ctaSubtitle: "Sé de los primeros en probar AcaSage y marcar la diferencia",
        joinWaitlist: "Obtén acceso anticipado",
        learnMore: "Explora nuestro desarrollo",
        founderTitle: "Sobre el Fundador",
        founderDescription:
            "Cuando luché por encontrar apoyo académico personalizado como estudiante, decidí tomar medidas. Usando mis habilidades como desarrollador de software e ideas de mi viaje, creé AcaSage: un compañero de aprendizaje diseñado para adaptarse al camino único de cada estudiante hacia el éxito.",
        linkedin: "Conéctate en LinkedIn",
        github: "Síguenos en GitHub",
        youtube: "Síguenos en YouTube",

        featureDetails: [
            { title: "Retroalimentación académica instantánea", description: "Recibe ideas personalizadas y accionables para mejorar tu aprendizaje en tiempo real" },
            { title: "Apoyo al bienestar emocional", description: "Monitorea tu estado de ánimo y accede a recursos de salud mental personalizados para la resiliencia" },
            { title: "Comunidades colaborativas", description: "Participa en mentorías entre pares, grupos de estudio y construye conexiones significativas" },
            { title: "Privacidad y seguridad", description: "Tus datos están encriptados y protegidos para garantizar una confidencialidad completa" },
            { title: "Documentos con marcas de agua", description: "Protege tu contenido con marcas de agua personalizadas para evitar el uso no autorizado" },
            { title: "Integración avanzada de IA", description: "Aprovecha la IA avanzada para mejorar los resultados de aprendizaje y optimizar los flujos de trabajo académicos" },
        ],
    },
    Français: {
        title: "Apprenez Mieux, Prospérez Plus Fort",
        subtitle: "Apportant l'innovation à l'éducation — AcaSage est en chemin",
        features: "Ce qui rend AcaSage unique",
        stats: "Études récentes",
        testimonials: "Imaginez les possibilités",
        cta: "Façonnez l'avenir aujourd'hui",
        ctaSubtitle: "Soyez parmi les premiers à essayer AcaSage et à faire une différence",
        joinWaitlist: "Obtenez un accès anticipé",
        learnMore: "Explorez notre développement",
        founderTitle: "À Propos du Fondateur",
        founderDescription:
            "Quand j'ai eu du mal à trouver un soutien académique personnalisé en tant qu'étudiant, j'ai décidé d'agir. En utilisant mes compétences en tant que développeur logiciel et les enseignements tirés de mon parcours, j'ai créé AcaSage : un compagnon d'apprentissage conçu pour s'adapter au parcours unique de chaque étudiant vers la réussite.",
        linkedin: "Connectez-vous sur LinkedIn",
        github: "Suivez-nous sur GitHub",
        youtube: "Suivez-nous sur YouTube",

        featureDetails: [
            { title: "Retour académique instantané", description: "Recevez des informations personnalisées et exploitables pour améliorer votre apprentissage en temps réel" },
            { title: "Soutien au bien-être émotionnel", description: "Suivez votre humeur et accédez à des ressources en santé mentale adaptées pour la résilience" },
            { title: "Communautés collaboratives", description: "Participez à des mentorats, des groupes d'étude et créez des connexions significatives" },
            { title: "Confidentialité et sécurité", description: "Vos données sont cryptées et protégées pour garantir une confidentialité totale" },
            { title: "Documents filigranés", description: "Protégez votre contenu avec des filigranes personnalisés pour éviter les partages non autorisés" },
            { title: "Intégration IA avancée", description: "Utilisez une IA avancée pour améliorer les résultats d'apprentissage et rationaliser les flux de travail académiques" },
        ],
        statDetails: [
            { value: "46.3%", label: "Sentiment d'appartenance", source: "(SES, 2023)", trend: [{ year: 2020, value: 52 }, { year: 2023, value: 46.3 }] },
            { value: "38.8%", label: "Défis en santé mentale", source: "(NMHC, 2024)", trend: [{ year: 2020, value: 30 }, { year: 2023, value: 38.8 }] },
        ],
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
            { title: "ชุมชนการเรียนรู้ร่วมกัน", description: "มีส่วนร่วมในการให้คำปรึกษา การศึกษากลุ่ม และสร้างการเชื่อมต่อที่มีความหมาย" },
            { title: "ความเป็นส่วนตัวและความปลอดภัย", description: "ข้อมูลของคุณได้รับการเข้ารหัสและป้องกันเพื่อรับรองความเป็นส่วนตัวอย่างสมบูรณ์" },
            { title: "เอกสารที่มีลายน้ำ", description: "ปกป้องเนื้อหาของคุณด้วยลายน้ำที่กำหนดเองเพื่อป้องกันการแชร์โดยไม่ได้รับอนุญาต" },
            { title: "การรวม AI ล้ำสมัย", description: "ใช้ประโยชน์จาก AI ขั้นสูงเพื่อปรับปรุงผลลัพธ์การเรียนรู้และทำให้งานด้านวิชาการเป็นระเบียบ" },
        ],
        statDetails: [
            { value: "46.3%", label: "ความรู้สึกเป็นส่วนหนึ่ง", source: "(SES, 2023)", trend: [{ year: 2020, value: 52 }, { year: 2023, value: 46.3 }] },
            { value: "38.8%", label: "ความท้าทายด้านสุขภาพจิต", source: "(NMHC, 2024)", trend: [{ year: 2020, value: 30 }, { year: 2023, value: 38.8 }] },
        ],
    },
    Deutsch: {
        title: "Lernen Sie Klüger, Wachsen Sie Stärker",
        subtitle: "Bringen Sie Innovation in die Bildung — AcaSage kommt bald",
        features: "Was macht AcaSage einzigartig",
        stats: "Neueste Studien",
        testimonials: "Stellen Sie sich die Möglichkeiten vor",
        cta: "Gestalten Sie die Zukunft heute",
        ctaSubtitle: "Seien Sie unter den Ersten, die AcaSage ausprobieren und etwas bewirken",
        joinWaitlist: "Erhalten Sie frühzeitigen Zugang",
        learnMore: "Erfahren Sie mehr über unsere Entwicklung",
        founderTitle: "Über den Gründer",
        founderDescription:
            "Als ich Schwierigkeiten hatte, individuelle akademische Unterstützung als Student zu finden, beschloss ich zu handeln. Mit meinen Fähigkeiten als Softwareentwickler und den Erkenntnissen aus meinem Weg habe ich AcaSage geschaffen – einen Lernbegleiter, der sich an den individuellen Weg jedes Studenten zum Erfolg anpasst.",
        linkedin: "Verbinden Sie sich auf LinkedIn",
        github: "Folgen Sie uns auf GitHub",
        youtube: "Folgen Sie uns auf YouTube",

        featureDetails: [
            { title: "Sofortiges akademisches Feedback", description: "Erhalten Sie umsetzbare, personalisierte Einblicke zur Verbesserung des Lernens in Echtzeit" },
            { title: "Unterstützung des emotionalen Wohlbefindens", description: "Verfolgen Sie Ihre Stimmung und greifen Sie auf maßgeschneiderte Ressourcen zur psychischen Gesundheit zu" },
            { title: "Kollaborative Gemeinschaften", description: "Engagieren Sie sich in Peer-Mentoring, Studiengruppen und bauen Sie sinnvolle Verbindungen auf" },
            { title: "Datenschutz und Sicherheit", description: "Ihre Daten sind verschlüsselt und geschützt, um vollständige Vertraulichkeit zu gewährleisten" },
            { title: "Wasserzeichen-Dokumente", description: "Schützen Sie Ihre Inhalte mit benutzerdefinierten Wasserzeichen, um unbefugtes Teilen zu verhindern" },
            { title: "Modernste KI-Integration", description: "Nutzen Sie fortschrittliche KI, um Lernergebnisse zu verbessern und akademische Arbeitsabläufe zu optimieren" },
        ],
        statDetails: [
            { value: "46.3%", label: "Gefühl der Zugehörigkeit", source: "(SES, 2023)", trend: [{ year: 2020, value: 52 }, { year: 2023, value: 46.3 }] },
            { value: "38.8%", label: "Psychische Herausforderungen", source: "(NMHC, 2024)", trend: [{ year: 2020, value: 30 }, { year: 2023, value: 38.8 }] },
        ],
    },
    Italiano: {
        title: "Impara in Modo Intelligente, Cresci con Forza",
        subtitle: "Portare innovazione nell'educazione — AcaSage sta arrivando",
        features: "Cosa rende AcaSage diverso",
        stats: "Studi recenti",
        testimonials: "Immagina le possibilità",
        cta: "Plasma il futuro oggi",
        ctaSubtitle: "Sii tra i primi a provare AcaSage e fare la differenza",
        joinWaitlist: "Ottieni accesso anticipato",
        learnMore: "Esplora il nostro sviluppo",
        founderTitle: "Informazioni sul Fondatore",
        founderDescription:
            "Quando ho avuto difficoltà a trovare supporto accademico personalizzato come studente, ho deciso di agire. Usando le mie competenze come sviluppatore di software e le intuizioni del mio percorso, ho creato AcaSage: un compagno di apprendimento progettato per adattarsi al percorso unico di ogni studente verso il successo.",
        linkedin: "Connettiti su LinkedIn",
        github: "Seguici su GitHub",
        youtube: "Seguici su YouTube",

        featureDetails: [
            { title: "Feedback accademico istantaneo", description: "Ricevi approfondimenti personalizzati e immediati per migliorare il tuo apprendimento" },
            { title: "Supporto per il benessere emotivo", description: "Monitora il tuo umore e accedi a risorse di salute mentale personalizzate" },
            { title: "Comunità collaborative", description: "Partecipa a mentorship tra pari, gruppi di studio e costruisci connessioni significative" },
            { title: "Privacy e sicurezza", description: "I tuoi dati sono criptati e protetti per garantire la massima riservatezza" },
            { title: "Documenti con filigrana", description: "Proteggi i tuoi contenuti con filigrane personalizzate per evitare condivisioni non autorizzate" },
            { title: "Integrazione avanzata di IA", description: "Sfrutta un'IA avanzata per migliorare i risultati di apprendimento e ottimizzare i flussi di lavoro accademici" },
        ],
        statDetails: [
            { value: "46.3%", label: "Senso di appartenenza", source: "(SES, 2023)", trend: [{ year: 2020, value: 52 }, { year: 2023, value: 46.3 }] },
            { value: "38.8%", label: "Sfide di salute mentale", source: "(NMHC, 2024)", trend: [{ year: 2020, value: 30 }, { year: 2023, value: 38.8 }] },
        ],
    },
    العربية: {
        title: "تعلّم بذكاء، وازدهر بقوة",
        subtitle: "جلب الابتكار إلى التعليم — أكا سيج في طريقه",
        features: "ما الذي يجعل أكا سيج مختلفاً",
        stats: "دراسات حديثة",
        testimonials: "تخيل الاحتمالات",
        cta: "شكّل المستقبل اليوم",
        ctaSubtitle: "كن من أوائل من يجرب أكا سيج ويحدث الفرق",
        joinWaitlist: "احصل على وصول مبكر",
        learnMore: "استكشف تطورنا",
        founderTitle: "عن المؤسس",
        founderDescription:
            "عندما واجهت صعوبة في العثور على دعم أكاديمي مخصص كطالب، قررت اتخاذ إجراء. باستخدام مهاراتي كمطور برامج ورؤى من رحلتي، أنشأت أكا سيج – رفيق تعليمي مصمم للتكيف مع المسار الفريد لكل طالب نحو النجاح.",
        linkedin: "تواصل على LinkedIn",
        github: "تابعنا على GitHub",
        youtube: "تابعنا على YouTube",

        featureDetails: [
            { title: "ملاحظات أكاديمية فورية", description: "احصل على رؤى قابلة للتنفيذ ومخصصة لتحسين التعلم في الوقت الفعلي" },
            { title: "دعم الصحة العاطفية", description: "تتبع حالتك المزاجية واحصل على موارد الصحة النفسية المصممة لاحتياجاتك" },
            { title: "مجتمعات تعاونية", description: "شارك في الإرشاد الجماعي والمجموعات الدراسية وبناء علاقات ذات مغزى" },
            { title: "الخصوصية والأمان", description: "بياناتك مشفرة ومحمية لضمان السرية الكاملة" },
            { title: "المستندات ذات العلامات المائية", description: "احمِ المحتوى الخاص بك باستخدام علامات مائية مخصصة لمنع المشاركة غير المصرح بها" },
            { title: "تكامل الذكاء الاصطناعي المتطور", description: "استفد من الذكاء الاصطناعي المتقدم لتحسين النتائج التعليمية وتبسيط سير العمل الأكاديمي" },
        ],
        statDetails: [
            { value: "46.3%", label: "الشعور بالانتماء", source: "(SES, 2023)", trend: [{ year: 2020, value: 52 }, { year: 2023, value: 46.3 }] },
            { value: "38.8%", label: "التحديات الصحية العقلية", source: "(NMHC, 2024)", trend: [{ year: 2020, value: 30 }, { year: 2023, value: 38.8 }] },
        ],
    },
    中文: {
        title: "智慧学习，茁壮成长",
        subtitle: "为教育带来创新 —— AcaSage 即将到来",
        features: "是什么让 AcaSage 与众不同",
        stats: "最新研究",
        testimonials: "想象无限可能",
        cta: "今天塑造未来",
        ctaSubtitle: "成为首批尝试 AcaSage 并有所作为的人",
        joinWaitlist: "抢先体验",
        learnMore: "探索我们的发展",
        founderTitle: "关于创始人",
        founderDescription:
            "当我作为学生难以找到个性化的学术支持时，我决定采取行动。利用我作为软件开发人员的技能和从我的旅程中获得的见解，我创建了 AcaSage——一个学习伙伴，旨在适应每个学生独特的成功之路。",
        linkedin: "在 LinkedIn 上连接",
        github: "在 GitHub 上关注",
        youtube: "在 YouTube 上关注",

        featureDetails: [
            { title: "即时学术反馈", description: "获取个性化的可操作洞察，实时改善学习" },
            { title: "情感健康支持", description: "追踪心情，获取定制的心理健康资源" },
            { title: "协作社区", description: "参与导师指导、学习小组，并建立有意义的联系" },
            { title: "隐私与安全", description: "您的数据是加密和保护的，以确保完全的保密性" },
            { title: "带水印的文件", description: "使用自定义水印保护您的内容，防止未经授权的分享" },
            { title: "尖端 AI 集成", description: "利用先进的人工智能提高学习成果并简化学术工作流程" },
        ],
        statDetails: [
            { value: "46.3%", label: "归属感", source: "(SES, 2023)", trend: [{ year: 2020, value: 52 }, { year: 2023, value: 46.3 }] },
            { value: "38.8%", label: "心理健康挑战", source: "(NMHC, 2024)", trend: [{ year: 2020, value: 30 }, { year: 2023, value: 38.8 }] },
        ],
    },
};

const features = [
    {
        icon: <Heart className="w-20 h-20" />,
        title: "Instant academic feedback",
        description: "Receive actionable, personalised insights to improve learning in real time"
    },
    {
        icon: <Brain className="w-20 h-20" />,
        title: "Emotional well-being support",
        description: "Track your mood and access tailored mental health resources for resilience"
    },
    {
        icon: <Users className="w-20 h-20" />,
        title: "Collaborative communities",
        description: "Engage in peer mentorship, study groups, and build meaningful connections"
    },
    {
        icon: <ShieldCheck className="w-20 h-20" />,
        title: "Privacy and security",
        description: "Your data is encrypted and protected to ensure complete confidentiality"
    },
    {
        icon: <Highlighter className="w-20 h-20" />,
        title: "Watermarked documents",
        description: "Protect your content with custom watermarks to prevent unauthorised sharing"
    },
    {
        icon: <Rocket className="w-20 h-20" />,
        title: "Cutting-edge AI integration",
        description: "Leverage advanced AI to enhance learning outcomes and streamline academic workflows"
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

                {/* Language Selector - update with dark mode styles */}
                <div className="fixed top-4 right-4 z-50">
                    <button
                        onClick={() => setShowLanguage(!showLanguage)}
                        className="flex items-center gap-2 bg-white p-4 dark:bg-gray-800 px-4 py-2 rounded-full shadow-md dark:text-white"
                    >
                        <Globe size={22}/>
                        {language}
                        <ChevronDown size={22}/>
                    </button>

                    {showLanguage && (
                        <motion.div
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            className="absolute top-12 right-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2"
                        >
                            {Object.keys(translations).map((lang) => (
                                <button
                                    key={lang}
                                    className="w-full px-4 py-2 text-left hover:bg-orange-50 dark:hover:bg-gray-700 dark:text-white"
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
                            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
                        >
                            {t.title}
                        </motion.h1>
                        <motion.p
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-3xl lg:text-xl mb-9"
                        >
                            {t.subtitle}
                        </motion.p>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-center"
                        >
                            <a
                                href="mailto:hi.acasage@gmail.com"
                                className="text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full font-medium transition-all flex items-center justify-center gap-2 w-fit mx-auto"
                            >
                                {t.joinWaitlist} <ArrowRight className="w-10 h-10" />
                            </a>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Stats Section */}
                <div className="flex flex-col items-center text-center mb-20">
                    <h2 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                        {t.stats}
                    </h2>
                    <div className="grid gap-8 max-w-7xl w-full px-4 lg:grid-cols-2 md:grid-cols-2">
                        {t.statDetails.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.2}}
                                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg dark:shadow-gray-900/30"
                            >
                                <div className="h-56 mb-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <LineChart data={stat.trend}>
                                            <CartesianGrid
                                                strokeDasharray="3 3"
                                                stroke={darkMode ? '#374151' : '#e5e7eb'}
                                            />
                                            <XAxis
                                                dataKey="year"
                                                stroke={darkMode ? '#9ca3af' : '#4b5563'}
                                                tick={{
                                                    fill: darkMode ? '#9ca3af' : '#4b5563',
                                                    fontSize: '16px', // Adjust tick font size
                                                }}
                                                style={{fontSize: '16px'}} // Optional for consistency
                                            />
                                            <YAxis
                                                stroke={darkMode ? '#9ca3af' : '#4b5563'}
                                                tick={{
                                                    fill: darkMode ? '#9ca3af' : '#4b5563',
                                                    fontSize: '16px', // Adjust tick font size
                                                }}
                                                style={{fontSize: '16px'}} // Optional for consistency
                                            />
                                            <Line
                                                type="monotone"
                                                dataKey="value"
                                                stroke="#f97316"
                                                strokeWidth={2}
                                            />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <h3 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                                    {stat.value}
                                </h3>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{stat.label}</p>
                                <p className="text-lg text-gray-500 dark:text-gray-400">{stat.source}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <section className="py-20 bg-orange-50 dark:bg-gray-800">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">{t.features}</h2>
                        <div
                            className={`grid ${t.featureDetails.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-8`}>
                            {t.featureDetails.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{y: 50, opacity: 0}}
                                    whileInView={{y: 0, opacity: 1}}
                                    transition={{delay: index * 0.2}}
                                    className="bg-white dark:bg-gray-900 rounded-2xl p-9 hover:shadow-lg transition-all"
                                >
                                    <div
                                        className="w-40 h-40 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl mb-6">
                                        {features[index]?.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-4 dark:text-white">{feature.title}</h3>
                                    <p className="text-xl text-gray-600 dark:text-gray-300">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mood Tracker */}
                <MoodTracker language={language} />

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
                                        <Linkedin className="w-16 h-16"/>
                                    </a>
                                    <a
                                        href="https://github.com/anyapages"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                        aria-label={t.github}
                                    >
                                        <Github className="w-16 h-16"/>
                                    </a>
                                    <a
                                        href="https://www.youtube.com/@anyaworks"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-orange-500 hover:text-orange-600 transition-colors"
                                        aria-label={t.youtube}
                                    >
                                        <Youtube className="w-16 h-16"/>
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
                            <button
                                className="bg-white dark:bg-gray-900 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all shadow-lg">
                                {t.joinWaitlist}
                            </button>
                            <button
                                className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600/50 dark:hover:bg-orange-700/50 transition-all">
                                {t.learnMore}
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-6xl mx-auto px-4">
                        {/* Center the sections */}
                        <div className="flex flex-col md:flex-row md:justify-center items-center gap-12 mb-12">
                            <div className="text-center md:text-left">
                                <h3 className="text-lg font-semibold mb-4">About</h3>
                                <p className="text-gray-400 text-lg">
                                    Redefining learning by delivering innovative academic tools and personalised
                                    wellness support.
                                    AcaSage is designed to address the evolving needs of students, aligning with SES
                                    2023 insights on support, engagement, and mental health
                                </p>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                                <ul className="space-y-2 text-gray-400 text-lg">
                                    <li>hi.acasage@gmail.com</li>
                                    <li>Melbourne, Australia</li>
                                </ul>
                            </div>
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold mb-4">Follow</h3>
                                <div className="flex justify-center md:justify-start gap-4">
                                    <a
                                        href="https://linkedin.com/company/acasage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Follow us on LinkedIn"
                                    >
                                        <Linkedin className="w-12 h-12"/>
                                    </a>
                                    <a
                                        href="https://github.com/acasage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-white transition-colors"
                                        aria-label="Follow us on GitHub"
                                    >
                                        <Github className="w-12 h-12"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 pt-8 mt-8">
                            <div className="text-center space-y-4">
                                <div className="space-y-2">
                                    <p className="text-lg text-gray-400">
                                        Member of{' '}
                                        <a
                                            href="https://startspacehq.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-400 hover:text-orange-300 transition-colors"
                                        >
                                            StartSpace
                                        </a>
                                        , powered by State Library Victoria
                                    </p>
                                    <p className="text-xl text-gray-400">
                                        &copy; {new Date().getFullYear()} AcaSage. All rights reserved.
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