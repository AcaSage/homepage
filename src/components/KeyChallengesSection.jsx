import React, { useState, useEffect, useRef } from "react";
import { Brain, Rocket, Users, TrendingUp, Award } from "lucide-react";

const AnimatedNumber = ({ value }) => {
    const [displayValue, setDisplayValue] = useState("0");
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true);
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!isVisible) return;

        const prefix = value.startsWith('$') ? '$' : '';
        const suffix = value.endsWith('%') ? '%' : '';
        const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
        const decimals = value.includes('.') ? 1 : 0;
        const duration = 2000; // 2 seconds
        const steps = 60;
        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const currentNumber = (numericValue * progress).toFixed(decimals);
            setDisplayValue(prefix + currentNumber + suffix);

            if (currentStep === steps) {
                clearInterval(interval);
                setDisplayValue(value);
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, [isVisible, value]);

    return (
        <span
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : '20px'})`,
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                display: 'inline-block'
            }}
        >
            {displayValue}
        </span>
    );
};

const KeyChallengesSection = ({ language = "English" }) => {
    const translations = {
        English: {
            title: "Addressing critical challenges",
            subtitle: "Latest insights on student engagement, mental health, and support",
            solution: "Our solution",
            solutionText:
                "AcaSage bridges the gap between academic excellence and mental wellbeing by providing an integrated platform that combines personalised learning support with evidence-based wellness tools",
            joinText: "Join us in transforming education",
            getStarted: "Get Started",
            challenges: [
                {
                    stat: "60%",
                    title: "Mental health impact",
                    description:
                        "Students experiencing mental health challenges during their academic journey",
                    source: "Healthy Minds Study, 2023",
                },
                {
                    stat: "$300B",
                    title: "EdTech growth",
                    description:
                        "Projected global education technology market value, reflecting increasing demand for innovative solutions",
                    source: "Grand View Research, 2023",
                },
                {
                    stat: "46.3%",
                    title: "Community impact",
                    description: "Students feeling a strong sense of belonging in their educational communities",
                    source: "SES Report, 2023",
                },
                {
                    stat: "38.8%",
                    title: "Support need",
                    description:
                        "Young adults seeking better mental health and academic support systems",
                    source: "NMHC Report, 2024",
                },
            ],
        },
        ภาษาไทย: {
            title: "แก้ไขความท้าทายที่สำคัญ",
            subtitle: "ข้อมูลเชิงลึกล่าสุดเกี่ยวกับการมีส่วนร่วมของนักเรียน สุขภาพจิต และการสนับสนุน",
            solution: "วิธีการของเรา",
            solutionText:
                "AcaSage เชื่อมช่องว่างระหว่างความเป็นเลิศทางวิชาการและสุขภาพจิตโดยให้แพลตฟอร์มที่ผสมผสานการสนับสนุนการเรียนรู้ที่ปรับแต่งได้กับเครื่องมือเพื่อสุขภาพที่มีหลักฐานรองรับ",
            joinText: "ร่วมกับเราในการเปลี่ยนแปลงการเรียนรู้",
            getStarted: "เริ่มต้นใช้งาน",
            challenges: [
                {
                    stat: "60%",
                    title: "ผลกระทบด้านสุขภาพจิต",
                    description: "นักเรียนที่ประสบปัญหาสุขภาพจิตระหว่างการเรียน",
                    source: "Healthy Minds, 2023",
                },
                {
                    stat: "$300B",
                    title: "การเติบโตของ EdTech",
                    description: "มูลค่าตลาดเทคโนโลยีการศึกษาทั่วโลกที่คาดการณ์ไว้",
                    source: "Grand View Research, 2023",
                },
                {
                    stat: "46.3%",
                    title: "ผลกระทบต่อชุมชน",
                    description: "นักเรียนที่รู้สึกเป็นส่วนหนึ่งของชุมชนการศึกษา",
                    source: "รายงาน SES, 2023",
                },
                {
                    stat: "38.8%",
                    title: "ความต้องการการสนับสนุน",
                    description: "นักศึกษาที่ต้องการระบบสนับสนุนด้านสุขภาพจิตและการศึกษาที่ดีขึ้น",
                    source: "รายงาน NMHC, 2024",
                },
            ],
        },
    };

    const t = translations[language];
    const icons = [<Brain />, <TrendingUp />, <Users />, <Rocket />];

    return (
        <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        {t.title}
                    </h2>
                    <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-8 rounded-2xl hover:shadow-xl transition-all duration-200 group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 bg-orange-50 dark:bg-gray-700 rounded-xl transition-colors duration-200 text-orange-500 dark:text-orange-400">
                                    {React.cloneElement(icons[index], { className: "w-8 h-8" })}
                                </div>
                                <h3 className="text-4xl font-bold text-orange-500 dark:text-orange-400">
                                    <AnimatedNumber value={challenge.stat} />
                                </h3>
                            </div>
                            <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                                {challenge.title}
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                                {challenge.description}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {challenge.source}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-white dark:bg-gray-800 p-12 rounded-2xl hover:shadow-xl transition-all duration-200">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-4 mb-6">
                            <Award className="w-10 h-10 text-orange-500 dark:text-orange-400" />
                            <h3 className="text-3xl font-bold text-orange-500 dark:text-orange-400">
                                {t.solution}
                            </h3>
                        </div>
                        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {t.solutionText}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyChallengesSection;