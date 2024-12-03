import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Check, Clock, Lock } from 'lucide-react';
import StudyPodcastGenerator from './StudyPodcastGenerator';

const translations = {
    English: {
        overview: {
            title: "Your learning journey",
            subtitle: "Track progress, manage emotions, and learn effectively",
        },
        mood: {
            title: "Track your mood",
            subtitle: "Understanding your emotional wellbeing is key to better learning",
            question: "How are you feeling today?",
            moodPoints: "Mood points",
            moods: {
                positive: [
                    { name: 'Excellent', emoji: '😊', xp: 5 },
                    { name: 'Good', emoji: '🙂', xp: 5 },
                    { name: 'Calm', emoji: '😌', xp: 5 },
                    { name: 'Motivated', emoji: '💪', xp: 5 },
                    { name: 'Inspired', emoji: '💡', xp: 5 },
                ],
                negative: [
                    { name: 'Confused', emoji: '😕', xp: 5 },
                    { name: 'Anxious', emoji: '😰', xp: 5 },
                    { name: 'Struggling', emoji: '😣', xp: 5 },
                    { name: 'Tired', emoji: '😴', xp: 5 },
                    { name: 'Overwhelmed', emoji: '😩', xp: 5 },
                ],
            },
        },
        challenges: {
            title: "Today's challenges",
            items: [
                { task: "Complete 3 focused study sessions", xp: 50, completed: false },
                { task: "Write 500 meaningful words", xp: 30, completed: true },
                { task: "Review 2 peer-submitted papers", xp: 40, completed: false },
                { task: "Participate in a group study session", xp: 20, completed: true },
                { task: "Take a mindful meditation break", xp: 25, completed: false },
            ],
        },
        achievements: {
            title: "Achievement progress",
            items: [
                { level: "📚 Research Rookie", levelNum: 1, completed: true },
                { level: "🔍 Analysis Apprentice", levelNum: 2, completed: true },
                { level: "⚔️ Knowledge Knight", levelNum: 3, completed: true },
                { level: "🛡️ Wisdom Warrior", levelNum: 4, completed: false },
                { level: "👑 Learning Legend", levelNum: 5, completed: false },
            ],
        },
        metrics: [
            { value: "5 XP", label: "Per mood check-in" },
            { value: "50 XP", label: "Daily challenge completion" },
            { value: "5", label: "Achievement levels" },
            { value: "24h", label: "Privacy protection" },
        ],
    },
    ภาษาไทย: {
        overview: {
            title: "การเดินทางแห่งการเรียนรู้ของคุณ",
            subtitle: "ติดตามความก้าวหน้า จัดการอารมณ์ และเรียนรู้อย่างมีประสิทธิภาพ",
        },
        mood: {
            title: "ติดตามอารมณ์ของคุณ",
            subtitle: "การเข้าใจสุขภาพจิตเป็นกุญแจสำคัญสู่การเรียนรู้ที่ดีขึ้น",
            question: "วันนี้คุณรู้สึกอย่างไร?",
            moodPoints: "คะแนนอารมณ์",
            moods: {
                positive: [
                    { name: 'ยอดเยี่ยม', emoji: '😊', xp: 5 },
                    { name: 'ดี', emoji: '🙂', xp: 5 },
                    { name: 'สงบ', emoji: '😌', xp: 5 },
                    { name: 'มีแรงจูงใจ', emoji: '💪', xp: 5 },
                    { name: 'มีแรงบันดาลใจ', emoji: '💡', xp: 5 },
                ],
                negative: [
                    { name: 'สับสน', emoji: '😕', xp: 5 },
                    { name: 'วิตกกังวล', emoji: '😰', xp: 5 },
                    { name: 'กำลังลำบาก', emoji: '😣', xp: 5 },
                    { name: 'เหนื่อยล้า', emoji: '😴', xp: 5 },
                    { name: 'รู้สึกหนักใจ', emoji: '😩', xp: 5 },
                ],
            },
        },
        challenges: {
            title: "ความท้าทายในวันนี้",
            items: [
                { task: "ทำเซสชันเรียนที่เน้น 3 ครั้งให้เสร็จ", xp: 50, completed: false },
                { task: "เขียนคำที่มีความหมาย 500 คำ", xp: 30, completed: true },
                { task: "ทบทวนเอกสารที่เพื่อนส่งมา 2 ฉบับ", xp: 40, completed: false },
                { task: "เข้าร่วมการเรียนกลุ่ม", xp: 20, completed: true },
                { task: "หยุดพักสมาธิอย่างตั้งใจ", xp: 25, completed: false },
            ],
        },
        achievements: {
            title: "ความคืบหน้าของความสำเร็จ",
            items: [
                { level: "📚 นักวิจัยมือใหม่", levelNum: 1, completed: true },
                { level: "🔍 ผู้ฝึกฝนการวิเคราะห์", levelNum: 2, completed: true },
                { level: "⚔️ อัศวินแห่งความรู้", levelNum: 3, completed: true },
                { level: "🛡️ นักรบแห่งปัญญา", levelNum: 4, completed: false },
                { level: "👑 ตำนานแห่งการเรียนรู้", levelNum: 5, completed: false },
            ],
        },
        metrics: [
            { value: "5 XP", label: "ต่อการตรวจสอบอารมณ์" },
            { value: "50 XP", label: "การทำความท้าทายรายวันสำเร็จ" },
            { value: "5", label: "ระดับความสำเร็จ" },
            { value: "24 ชั่วโมง", label: "การป้องกันความเป็นส่วนตัว" },
        ],
    },
};

const MoodTracker = ({ language = "English" }) => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [showXP, setShowXP] = useState(false);

    const t = translations[language];

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
        setShowXP(true);
        setTimeout(() => setShowXP(false), 2000);
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 space-y-16">
                {/* Overview Section */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                                {t.overview.title}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                {t.overview.subtitle}
                            </p>
                        </motion.div>

                        {/* Metrics Overview */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                            {t.metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-xl text-center shadow-lg"
                                >
                                    <h3 className="text-3xl font-bold text-orange-500 dark:text-orange-400 mb-2">
                                        {metric.value}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">{metric.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mood Selection */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-900 dark:text-white text-center">
                        {t.mood.question}
                    </h3>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                        {[...t.mood.moods.positive, ...t.mood.moods.negative].map((mood) => (
                            <motion.button
                                key={mood.name}
                                onClick={() => handleMoodSelect(mood)}
                                className={`relative flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl transition-all ${
                                    selectedMood?.name === mood.name
                                        ? 'bg-green-100 text-green-600'
                                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-3xl sm:text-4xl">{mood.emoji}</span>
                                <span className="text-sm sm:text-lg font-medium text-center">{mood.name}</span>
                                {selectedMood?.name === mood.name && showXP && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: -20 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1"
                                    >
                                        <Trophy className="w-5 sm:w-7 h-5 sm:h-7" />
                                        <span className="text-sm sm:text-lg font-medium">+{mood.xp} XP</span>
                                    </motion.div>
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Podcast and Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Study Podcast Generator */}
                    <StudyPodcastGenerator language={language} />

                    {/* Achievements Section */}
                    <div className="space-y-8">
                        {/* Challenges */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-3 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                {t.challenges.title}
                            </h3>
                            {t.challenges.items.map((challenge, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                                        challenge.completed
                                            ? 'bg-green-50 dark:bg-green-900/30'
                                            : 'bg-gray-50 dark:bg-gray-700'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-gray-800 dark:text-gray-200">{challenge.task}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">+{challenge.xp} XP</span>
                                        {challenge.completed ? (
                                            <Check className="w-5 h-5 text-green-500" />
                                        ) : (
                                            <Clock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Achievements */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-3 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                {t.achievements.title}
                            </h3>
                            {t.achievements.items.map((achievement, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                                        achievement.completed
                                            ? 'bg-green-50 dark:bg-green-900/30'
                                            : 'bg-gray-50 dark:bg-gray-700'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                    <span className="text-lg text-gray-800 dark:text-gray-200">
                      {achievement.level}
                    </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                      Level {achievement.levelNum}
                    </span>
                                    </div>
                                    {achievement.completed ? (
                                        <Check className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoodTracker;