import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Check, Upload, Clock, Play, Rewind, Forward, Lock, Save } from 'lucide-react';

const translations = {
    English: {
        title: "Track your mood",
        subtitle: "Understanding your emotional wellbeing is key to better learning",
        question: "How are you feeling today?",
        moodPoints: "Mood points",
        achievementTitle: "Achievement progress",
        achievements: [
            { level: "📚 Research Rookie", levelNum: 1, completed: true },
            { level: "🔍 Analysis Apprentice", levelNum: 2, completed: true },
            { level: "⚔️ Knowledge Knight", levelNum: 3, completed: true },
            { level: "🛡️ Wisdom Warrior", levelNum: 4, completed: false },
            { level: "👑 Learning Legend", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'Excellent', emoji: '😊', xp: 10 },
                { name: 'Good', emoji: '🙂', xp: 8 },
                { name: 'Calm', emoji: '😌', xp: 8 },
                { name: 'Motivated', emoji: '💪', xp: 9 },
                { name: 'Inspired', emoji: '💡', xp: 9 },
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
    Español: {
        title: "Registra tu Estado de Ánimo",
        subtitle: "Entender tu bienestar emocional es clave para un mejor aprendizaje",
        question: "¿Cómo te sientes hoy?",
        moodPoints: "Puntos de ánimo",
        achievementTitle: "Progreso de logros",
        achievements: [
            { level: "📚 Principiante en Investigación", levelNum: 1, completed: true },
            { level: "🔍 Aprendiz de Análisis", levelNum: 2, completed: true },
            { level: "⚔️ Caballero del Conocimiento", levelNum: 3, completed: true },
            { level: "🛡️ Guerrero de la Sabiduría", levelNum: 4, completed: false },
            { level: "👑 Leyenda del Aprendizaje", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'Excelente', emoji: '😊', xp: 10 },
                { name: 'Bien', emoji: '🙂', xp: 8 },
                { name: 'Tranquilo', emoji: '😌', xp: 8 },
                { name: 'Motivado', emoji: '💪', xp: 9 },
                { name: 'Inspirado', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: 'Confundido', emoji: '😕', xp: 5 },
                { name: 'Ansioso', emoji: '😰', xp: 5 },
                { name: 'Luchando', emoji: '😣', xp: 5 },
                { name: 'Cansado', emoji: '😴', xp: 5 },
                { name: 'Abrumado', emoji: '😩', xp: 5 },
            ],
        },
    },
    Français: {
        title: "Suivez votre humeur",
        subtitle: "Comprendre votre bien-être émotionnel est essentiel pour mieux apprendre",
        question: "Comment vous sentez-vous aujourd'hui ?",
        moodPoints: "Points d'humeur",
        achievementTitle: "Progression des réalisations",
        achievements: [
            { level: "📚 Débutant en Recherche", levelNum: 1, completed: true },
            { level: "🔍 Apprenti Analyste", levelNum: 2, completed: true },
            { level: "⚔️ Chevalier du Savoir", levelNum: 3, completed: true },
            { level: "🛡️ Guerrier de la Sagesse", levelNum: 4, completed: false },
            { level: "👑 Légende de l’Apprentissage", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'Excellent', emoji: '😊', xp: 10 },
                { name: 'Bien', emoji: '🙂', xp: 8 },
                { name: 'Calme', emoji: '😌', xp: 8 },
                { name: 'Motivé', emoji: '💪', xp: 9 },
                { name: 'Inspiré', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: 'Confus', emoji: '😕', xp: 5 },
                { name: 'Anxieux', emoji: '😰', xp: 5 },
                { name: 'En difficulté', emoji: '😣', xp: 5 },
                { name: 'Fatigué', emoji: '😴', xp: 5 },
                { name: 'Dépassé', emoji: '😩', xp: 5 },
            ],
        },
    },
    ภาษาไทย: {
        title: "บันทึกอารมณ์ของคุณ",
        subtitle: "การเข้าใจสุขภาพจิตของคุณเป็นกุญแจสำคัญสู่การเรียนรู้ที่ดีขึ้น",
        question: "วันนี้คุณรู้สึกอย่างไร",
        moodPoints: "คะแนนอารมณ์",
        achievementTitle: "ความก้าวหน้าของความสำเร็จ",
        achievements: [
            { level: "📚 ผู้เริ่มต้นด้านการวิจัย", levelNum: 1, completed: true },
            { level: "🔍 ผู้ฝึกงานด้านการวิเคราะห์", levelNum: 2, completed: true },
            { level: "⚔️ อัศวินแห่งความรู้", levelNum: 3, completed: true },
            { level: "🛡️ นักรบแห่งปัญญา", levelNum: 4, completed: false },
            { level: "👑 ตำนานแห่งการเรียนรู้", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'ยอดเยี่ยม', emoji: '😊', xp: 10 },
                { name: 'ดี', emoji: '🙂', xp: 8 },
                { name: 'สงบ', emoji: '😌', xp: 8 },
                { name: 'มีแรงจูงใจ', emoji: '💪', xp: 9 },
                { name: 'มีแรงบันดาลใจ', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: 'สับสน', emoji: '😕', xp: 5 },
                { name: 'วิตกกังวล', emoji: '😰', xp: 5 },
                { name: 'ต่อสู้', emoji: '😣', xp: 5 },
                { name: 'เหนื่อย', emoji: '😴', xp: 5 },
                { name: 'ท่วมท้น', emoji: '😩', xp: 5 },
            ],
        },
    },
    Deutsch: {
        title: "Verfolgen Sie Ihre Stimmung",
        subtitle: "Das Verständnis Ihres emotionalen Wohlbefindens ist der Schlüssel zu besserem Lernen",
        question: "Wie fühlen Sie sich heute?",
        moodPoints: "Stimmungspunkte",
        achievementTitle: "Leistungsfortschritt",
        achievements: [
            { level: "📚 Forschungsanfänger", levelNum: 1, completed: true },
            { level: "🔍 Analyse-Lehrling", levelNum: 2, completed: true },
            { level: "⚔️ Wissensritter", levelNum: 3, completed: true },
            { level: "🛡️ Weisheitskrieger", levelNum: 4, completed: false },
            { level: "👑 Lernlegende", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'Ausgezeichnet', emoji: '😊', xp: 10 },
                { name: 'Gut', emoji: '🙂', xp: 8 },
                { name: 'Ruhig', emoji: '😌', xp: 8 },
                { name: 'Motiviert', emoji: '💪', xp: 9 },
                { name: 'Inspiriert', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: 'Verwirrt', emoji: '😕', xp: 5 },
                { name: 'Ängstlich', emoji: '😰', xp: 5 },
                { name: 'Kämpfend', emoji: '😣', xp: 5 },
                { name: 'Müde', emoji: '😴', xp: 5 },
                { name: 'Überfordert', emoji: '😩', xp: 5 },
            ],
        },
    },
    Italiano: {
        title: "Monitora il tuo Umore",
        subtitle: "Comprendere il tuo benessere emotivo è la chiave per un apprendimento migliore",
        question: "Come ti senti oggi?",
        moodPoints: "Punti umore",
        achievementTitle: "Progresso dei traguardi",
        achievements: [
            { level: "📚 Principiante nella Ricerca", levelNum: 1, completed: true },
            { level: "🔍 Apprendista dell'Analisi", levelNum: 2, completed: true },
            { level: "⚔️ Cavaliere della Conoscenza", levelNum: 3, completed: true },
            { level: "🛡️ Guerriero della Saggezza", levelNum: 4, completed: false },
            { level: "👑 Leggenda dell'Apprendimento", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'Eccellente', emoji: '😊', xp: 10 },
                { name: 'Bene', emoji: '🙂', xp: 8 },
                { name: 'Calmo', emoji: '😌', xp: 8 },
                { name: 'Motivato', emoji: '💪', xp: 9 },
                { name: 'Ispirato', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: 'Confuso', emoji: '😕', xp: 5 },
                { name: 'Ansioso', emoji: '😰', xp: 5 },
                { name: 'In difficoltà', emoji: '😣', xp: 5 },
                { name: 'Stanco', emoji: '😴', xp: 5 },
                { name: 'Sopraffatto', emoji: '😩', xp: 5 },
            ],
        },
    },
    العربية: {
        title: "تتبع مزاجك",
        subtitle: "فهم صحتك العاطفية هو مفتاح التعلم الأفضل",
        question: "كيف تشعر اليوم؟",
        moodPoints: "نقاط المزاج",
        achievementTitle: "تقدم الإنجازات",
        achievements: [
            { level: "📚 مبتدئ في البحث", levelNum: 1, completed: true },
            { level: "🔍 متدرب في التحليل", levelNum: 2, completed: true },
            { level: "⚔️ فارس المعرفة", levelNum: 3, completed: true },
            { level: "🛡️ محارب الحكمة", levelNum: 4, completed: false },
            { level: "👑 أسطورة التعلم", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: 'ممتاز', emoji: '😊', xp: 10 },
                { name: 'جيد', emoji: '🙂', xp: 8 },
                { name: 'هادئ', emoji: '😌', xp: 8 },
                { name: 'متحمس', emoji: '💪', xp: 9 },
                { name: 'ملهم', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: 'مشوش', emoji: '😕', xp: 5 },
                { name: 'قلق', emoji: '😰', xp: 5 },
                { name: 'متعثر', emoji: '😣', xp: 5 },
                { name: 'متعب', emoji: '😴', xp: 5 },
                { name: 'مثقل', emoji: '😩', xp: 5 },
            ],
        },
    },
    中文: {
        title: "追踪你的心情",
        subtitle: "了解你的情绪健康是更好学习的关键",
        question: "你今天感觉如何？",
        moodPoints: "心情点数",
        achievementTitle: "成就进度",
        achievements: [
            { level: "📚 研究新手", levelNum: 1, completed: true },
            { level: "🔍 分析学徒", levelNum: 2, completed: true },
            { level: "⚔️ 知识骑士", levelNum: 3, completed: true },
            { level: "🛡️ 智慧战士", levelNum: 4, completed: false },
            { level: "👑 学习传奇", levelNum: 5, completed: false },
        ],
        moods: {
            positive: [
                { name: '极好', emoji: '😊', xp: 10 },
                { name: '良好', emoji: '🙂', xp: 8 },
                { name: '平静', emoji: '😌', xp: 8 },
                { name: '有动力', emoji: '💪', xp: 9 },
                { name: '有灵感', emoji: '💡', xp: 9 },
            ],
            negative: [
                { name: '困惑', emoji: '😕', xp: 5 },
                { name: '焦虑', emoji: '😰', xp: 5 },
                { name: '挣扎', emoji: '😣', xp: 5 },
                { name: '疲惫', emoji: '😴', xp: 5 },
                { name: '不堪重负', emoji: '😩', xp: 5 },
            ],
        },
    },
};

const podcastTranslations = {
    English: {
        dataPrivacyTitle: "Your privacy matters",
        dataPrivacyDetails: [
            "All files and notes are securely processed and encrypted during transmission to protect your data.",
            "Your content is automatically deleted within 24 hours after podcast generation for complete privacy.",
        ],
        writeNoteTitle: "Compose your note",
        placeholderText: "Start typing or paste your content here to begin...",
        languageOptions: ["British English", "American English", "Australian English"],
        voiceSettingsTitle: "Customise voice settings",
        speedLabel: "Playback speed",
        speedRange: ["Slow", "Normal", "Fast"],
        pitchLabel: "Voice pitch",
        pitchRange: ["Low", "Normal", "High"],
        previewTitle: "Audio preview",
        generateButton: "Create podcast",
        fileUploadText: "Drag and drop files here, or click to upload.",
        supportedFormats: "Supported formats: TXT, DOC, DOCX, PDF, MD",
    },
    Español: {
        dataPrivacyTitle: "Tu privacidad importa",
        dataPrivacyDetails: [
            "Todos los archivos y notas se procesan de forma segura y se encriptan durante la transmisión para proteger tus datos.",
            "Tu contenido se elimina automáticamente dentro de las 24 horas posteriores a la generación del podcast para garantizar tu privacidad.",
        ],
        writeNoteTitle: "Escribe tu nota",
        placeholderText: "Comienza a escribir o pega tu contenido aquí...",
        languageOptions: ["Inglés británico", "Inglés americano"],
        voiceSettingsTitle: "Personaliza los ajustes de voz",
        speedLabel: "Velocidad de reproducción",
        speedRange: ["Lento", "Normal", "Rápido"],
        pitchLabel: "Tono de voz",
        pitchRange: ["Bajo", "Normal", "Alto"],
        previewTitle: "Vista previa de audio",
        generateButton: "Crear podcast",
        fileUploadText: "Arrastra y suelta archivos aquí, o haz clic para cargar.",
        supportedFormats: "Formatos admitidos: TXT, DOC, DOCX, PDF, MD",
    },
    Français: {
        dataPrivacyTitle: "Votre confidentialité est importante",
        dataPrivacyDetails: [
            "Tous vos fichiers et notes sont traités en toute sécurité et cryptés pendant la transmission pour protéger vos données.",
            "Votre contenu est automatiquement supprimé dans les 24 heures suivant la génération du podcast pour garantir votre confidentialité.",
        ],
        writeNoteTitle: "Rédigez votre note",
        placeholderText: "Commencez à écrire ou collez votre contenu ici...",
        languageOptions: ["Anglais britannique", "Anglais américain"],
        voiceSettingsTitle: "Personnalisez les paramètres de la voix",
        speedLabel: "Vitesse de lecture",
        speedRange: ["Lent", "Normal", "Rapide"],
        pitchLabel: "Tonalité de la voix",
        pitchRange: ["Bas", "Normal", "Haut"],
        previewTitle: "Aperçu audio",
        generateButton: "Créer un podcast",
        fileUploadText: "Glissez-déposez vos fichiers ici, ou cliquez pour télécharger.",
        supportedFormats: "Formats pris en charge : TXT, DOC, DOCX, PDF, MD",
    },
    ภาษาไทย: {
        dataPrivacyTitle: "ความเป็นส่วนตัวของคุณสำคัญ",
        dataPrivacyDetails: [
            "ไฟล์และบันทึกทั้งหมดของคุณจะถูกประมวลผลและเข้ารหัสอย่างปลอดภัยระหว่างการส่งข้อมูลเพื่อปกป้องข้อมูลของคุณ",
            "เนื้อหาของคุณจะถูกลบโดยอัตโนมัติภายใน 24 ชั่วโมงหลังจากการสร้างพอดแคสต์เพื่อความเป็นส่วนตัวอย่างสมบูรณ์",
        ],
        writeNoteTitle: "เขียนบันทึกของคุณ",
        placeholderText: "เริ่มพิมพ์หรือวางเนื้อหาของคุณที่นี่...",
        languageOptions: ["ภาษาอังกฤษแบบอังกฤษ", "ภาษาอังกฤษแบบอเมริกัน"],
        voiceSettingsTitle: "ปรับแต่งการตั้งค่าเสียง",
        speedLabel: "ความเร็วในการเล่น",
        speedRange: ["ช้าลง", "ปกติ", "เร็วขึ้น"],
        pitchLabel: "โทนเสียง",
        pitchRange: ["ต่ำ", "ปกติ", "สูง"],
        previewTitle: "ดูตัวอย่างเสียง",
        generateButton: "สร้างพอดแคสต์",
        fileUploadText: "ลากและวางไฟล์ที่นี่ หรือคลิกเพื่ออัปโหลด",
        supportedFormats: "รองรับรูปแบบ: TXT, DOC, DOCX, PDF, MD",
    },
    Deutsch: {
        dataPrivacyTitle: "Ihre Privatsphäre zählt",
        dataPrivacyDetails: [
            "Alle Dateien und Notizen werden sicher verarbeitet und während der Übertragung verschlüsselt, um Ihre Daten zu schützen.",
            "Ihr Inhalt wird automatisch innerhalb von 24 Stunden nach der Podcast-Erstellung gelöscht, um Ihre Privatsphäre zu gewährleisten.",
        ],
        writeNoteTitle: "Verfassen Sie Ihre Notiz",
        placeholderText: "Beginnen Sie mit dem Schreiben oder fügen Sie hier Ihren Inhalt ein...",
        languageOptions: ["Britisches Englisch", "Amerikanisches Englisch"],
        voiceSettingsTitle: "Stimmeinstellungen anpassen",
        speedLabel: "Wiedergabegeschwindigkeit",
        speedRange: ["Langsamer", "Normal", "Schneller"],
        pitchLabel: "Stimmlage",
        pitchRange: ["Tiefer", "Normal", "Höher"],
        previewTitle: "Audio-Vorschau",
        generateButton: "Podcast erstellen",
        fileUploadText: "Dateien hier ablegen oder klicken, um hochzuladen.",
        supportedFormats: "Unterstützte Formate: TXT, DOC, DOCX, PDF, MD",
    },
    Italiano: {
        dataPrivacyTitle: "La tua privacy è importante",
        dataPrivacyDetails: [
            "Tutti i file e le note sono elaborati in modo sicuro e crittografati durante la trasmissione per proteggere i tuoi dati.",
            "Il tuo contenuto viene eliminato automaticamente entro 24 ore dalla generazione del podcast per garantire la tua privacy.",
        ],
        writeNoteTitle: "Scrivi la tua nota",
        placeholderText: "Inizia a scrivere o incolla il tuo contenuto qui...",
        languageOptions: ["Inglese britannico", "Inglese americano"],
        voiceSettingsTitle: "Personalizza le impostazioni vocali",
        speedLabel: "Velocità di riproduzione",
        speedRange: ["Lento", "Normale", "Veloce"],
        pitchLabel: "Tono della voce",
        pitchRange: ["Basso", "Normale", "Alto"],
        previewTitle: "Anteprima audio",
        generateButton: "Crea podcast",
        fileUploadText: "Trascina e rilascia i file qui o fai clic per caricarli.",
        supportedFormats: "Formati supportati: TXT, DOC, DOCX, PDF, MD",
    },
    العربية: {
        dataPrivacyTitle: "خصوصيتك مهمة",
        dataPrivacyDetails: [
            "يتم معالجة جميع الملفات والملاحظات بشكل آمن وتشفيرها أثناء النقل لحماية بياناتك.",
            "يتم حذف المحتوى الخاص بك تلقائيًا في غضون 24 ساعة بعد إنشاء البودكاست لضمان الخصوصية الكاملة.",
        ],
        writeNoteTitle: "اكتب ملاحظتك",
        placeholderText: "ابدأ الكتابة أو الصق المحتوى الخاص بك هنا...",
        languageOptions: ["الإنجليزية البريطانية", "الإنجليزية الأمريكية"],
        voiceSettingsTitle: "تخصيص إعدادات الصوت",
        speedLabel: "سرعة التشغيل",
        speedRange: ["أبطأ", "عادي", "أسرع"],
        pitchLabel: "نبرة الصوت",
        pitchRange: ["أخفض", "عادي", "أعلى"],
        previewTitle: "معاينة الصوت",
        generateButton: "إنشاء بودكاست",
        fileUploadText: "اسحب الملفات هنا أو انقر لتحميلها.",
        supportedFormats: "الصيغ المدعومة: TXT, DOC, DOCX, PDF, MD",
    },
    中文: {
        dataPrivacyTitle: "您的隐私很重要",
        dataPrivacyDetails: [
            "所有文件和笔记在传输过程中都会被安全处理并加密，以保护您的数据。",
            "您的内容将在生成播客后 24 小时内自动删除，以确保隐私。",
        ],
        writeNoteTitle: "撰写您的笔记",
        placeholderText: "开始书写或在此处粘贴内容...",
        languageOptions: ["英式英语", "美式英语"],
        voiceSettingsTitle: "自定义语音设置",
        speedLabel: "播放速度",
        speedRange: ["慢速", "正常", "快速"],
        pitchLabel: "语音音高",
        pitchRange: ["较低", "正常", "较高"],
        previewTitle: "音频预览",
        generateButton: "创建播客",
        fileUploadText: "拖放文件到此处，或点击上传。",
        supportedFormats: "支持的格式：TXT, DOC, DOCX, PDF, MD",
    },
};

const PodcastInterface = ({ language = "English" }) => {
    const [previewText, setPreviewText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("British English");

    const t = podcastTranslations[language] || podcastTranslations.English;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-6 shadow-lg"
        >
            {/* Data Privacy Notice */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t.dataPrivacyTitle}</h3>
                <div className="space-y-2">
                    {t.dataPrivacyDetails.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="text-green-500" />
                            <span>{detail}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compose Note Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{t.writeNoteTitle}</h3>
                    <select
                        className="p-2 rounded-lg border border-gray-200 dark:border-gray-700"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                        {t.languageOptions.map((option, index) => (
                            <option key={index}>{option}</option>
                        ))}
                    </select>
                </div>
                <textarea
                    className="w-full h-32 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                    placeholder={t.placeholderText}
                    value={previewText}
                    onChange={(e) => setPreviewText(e.target.value)}
                    aria-label={t.writeNoteTitle}
                />
            </div>

            {/* File Upload Section */}
            <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center">
                <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 dark:text-gray-300">{t.fileUploadText}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{t.supportedFormats}</p>
            </div>

            {/* Voice Settings Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">{t.voiceSettingsTitle}</h3>
                <div className="space-y-6">
                    {/* Playback Speed */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">{t.speedLabel}</label>
                        <input
                            type="range"
                            className="w-full"
                            min="0"
                            max="100"
                            defaultValue="50"
                            aria-label={t.speedLabel}
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                            {t.speedRange.map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                    </div>
                    {/* Voice Pitch */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium">{t.pitchLabel}</label>
                        <input
                            type="range"
                            className="w-full"
                            min="0"
                            max="100"
                            defaultValue="30"
                            aria-label={t.pitchLabel}
                        />
                        <div className="flex justify-between text-sm text-gray-500">
                            {t.pitchRange.map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Audio Preview Section */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Play className="w-6 h-6" />
                        <span>2:34</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Rewind className="w-6 h-6" />
                        <Save className="w-6 h-6" />
                    </div>
                    <span>-1:37</span>
                </div>
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    {t.generateButton}
                </button>
            </div>
        </motion.div>
    );
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
                {/* Mood Tracker */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
                        <p className="text-2xl text-gray-600 dark:text-gray-300">{t.subtitle}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/30">
                        <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white text-center">{t.question}</h3>
                        {Object.entries(t.moods).map(([type, moods]) => (
                            <div key={type} className="flex justify-around mb-8">
                                {moods.map((mood) => (
                                    <motion.button
                                        key={mood.name}
                                        onClick={() => handleMoodSelect(mood)}
                                        className={`relative flex flex-col items-center gap-3 p-4 rounded-xl transition-all ${
                                            selectedMood?.name === mood.name
                                                ? 'bg-green-100 text-green-600'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span className="text-4xl">{mood.emoji}</span>
                                        <span className="text-lg font-medium">{mood.name}</span>
                                        {selectedMood?.name === mood.name && showXP && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: -20 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex items-center gap-1"
                                            >
                                                <Trophy className="w-7 h-7" />
                                                <span className="text-lg font-medium">+{mood.xp}</span>
                                            </motion.div>
                                        )}
                                    </motion.button>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Podcast and Achievements */}
                <div className="grid md:grid-cols-2 gap-8">
                    <PodcastInterface language={language} />
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-3 shadow-lg"
                    >
                        <h3 className="text-xl font-semibold mb-4">{t.achievementTitle}</h3>
                        {t.achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`flex items-center justify-between p-3 rounded-lg ${
                                    achievement.completed
                                        ? 'bg-green-50 dark:bg-green-900'
                                        : 'bg-gray-50 dark:bg-gray-700'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-lg">{achievement.level}</span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">Level {achievement.levelNum}</span>
                                </div>
                                {achievement.completed ? (
                                    <Check className="w-5 h-5 text-green-500" />
                                ) : (
                                    <Lock className="w-5 h-5 text-gray-400" />
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MoodTracker;