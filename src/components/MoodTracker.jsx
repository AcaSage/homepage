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
                { name: 'Excelente', emoji: '😊', xp: 5 },
                { name: 'Bien', emoji: '🙂', xp: 5 },
                { name: 'Tranquilo', emoji: '😌', xp: 5 },
                { name: 'Motivado', emoji: '💪', xp: 5 },
                { name: 'Inspirado', emoji: '💡', xp: 5 },
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
                { name: 'Excellent', emoji: '😊', xp: 5 },
                { name: 'Bien', emoji: '🙂', xp: 5 },
                { name: 'Calme', emoji: '😌', xp: 5 },
                { name: 'Motivé', emoji: '💪', xp: 5 },
                { name: 'Inspiré', emoji: '💡', xp: 5 },
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
                { name: 'ยอดเยี่ยม', emoji: '😊', xp: 5 },
                { name: 'ดี', emoji: '🙂', xp: 5 },
                { name: 'สงบ', emoji: '😌', xp: 5 },
                { name: 'มีแรงจูงใจ', emoji: '💪', xp: 5 },
                { name: 'มีแรงบันดาลใจ', emoji: '💡', xp: 5 },
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
                { name: 'Ausgezeichnet', emoji: '😊', xp: 5 },
                { name: 'Gut', emoji: '🙂', xp: 5 },
                { name: 'Ruhig', emoji: '😌', xp: 5 },
                { name: 'Motiviert', emoji: '💪', xp: 5 },
                { name: 'Inspiriert', emoji: '💡', xp: 5 },
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

const goalTranslations = {
    English: {
        title: "Today's challenges",
        challenges: [
            { task: "Complete 3 focused study sessions", xp: 50, completed: false },
            { task: "Write 500 meaningful words", xp: 30, completed: true },
            { task: "Review 2 peer-submitted papers", xp: 40, completed: false },
            { task: "Participate in a group study session", xp: 20, completed: true },
            { task: "Take a mindful meditation break", xp: 25, completed: false },
        ],
    },
    Español: {
        title: "Retos de hoy",
        challenges: [
            { task: "Completa 3 sesiones de estudio enfocadas", xp: 50, completed: false },
            { task: "Escribe 500 palabras significativas", xp: 30, completed: true },
            { task: "Revisa 2 trabajos enviados por compañeros", xp: 40, completed: false },
            { task: "Participa en una sesión de estudio grupal", xp: 20, completed: true },
            { task: "Tómate un descanso de meditación consciente", xp: 25, completed: false },
        ],
    },
    Français: {
        title: "Défis d'aujourd'hui",
        challenges: [
            { task: "Réalisez 3 sessions d'étude concentrées", xp: 50, completed: false },
            { task: "Écrivez 500 mots significatifs", xp: 30, completed: true },
            { task: "Examinez 2 articles soumis par vos pairs", xp: 40, completed: false },
            { task: "Participez à une session d'étude en groupe", xp: 20, completed: true },
            { task: "Prenez une pause méditative en pleine conscience", xp: 25, completed: false },
        ],
    },
    ภาษาไทย: {
        title: "ความท้าทายสำหรับวันนี้",
        challenges: [
            { task: "ทำการเรียนที่มีสมาธิ 3 ครั้ง", xp: 50, completed: false },
            { task: "เขียนคำที่มีความหมาย 500 คำ", xp: 30, completed: true },
            { task: "ทบทวนเอกสารที่เพื่อนส่งมา 2 ชิ้น", xp: 40, completed: false },
            { task: "เข้าร่วมกลุ่มศึกษา", xp: 20, completed: true },
            { task: "พักสมาธิอย่างมีสติ", xp: 25, completed: false },
        ],
    },
    العربية: {
        title: "تحديات اليوم",
        challenges: [
            { task: "أكمل 3 جلسات دراسية مركزة", xp: 50, completed: false },
            { task: "اكتب 500 كلمة ذات مغزى", xp: 30, completed: true },
            { task: "قم بمراجعة ورقتين مقدمتين من الزملاء", xp: 40, completed: false },
            { task: "شارك في جلسة دراسة جماعية", xp: 20, completed: true },
            { task: "خذ استراحة للتأمل الواعي", xp: 25, completed: false },
        ],
    },
    中文: {
        title: "今天的挑战",
        challenges: [
            { task: "完成3次专注学习", xp: 50, completed: false },
            { task: "写500个有意义的字", xp: 30, completed: true },
            { task: "审阅2篇同学提交的论文", xp: 40, completed: false },
            { task: "参加一个小组学习会议", xp: 20, completed: true },
            { task: "进行一次正念冥想休息", xp: 25, completed: false },
        ],
    },
    Deutsch: {
        title: "Heutige Herausforderungen",
        challenges: [
            { task: "Absolvieren Sie 3 fokussierte Lerneinheiten", xp: 50, completed: false },
            { task: "Schreiben Sie 500 bedeutungsvolle Wörter", xp: 30, completed: true },
            { task: "Überprüfen Sie 2 von Kollegen eingereichte Arbeiten", xp: 40, completed: false },
            { task: "Nehmen Sie an einer Gruppenlernsitzung teil", xp: 20, completed: true },
            { task: "Machen Sie eine achtsame Meditationspause", xp: 25, completed: false },
        ],
    },
    Italiano: {
        title: "Sfide di oggi",
        challenges: [
            { task: "Completa 3 sessioni di studio mirate", xp: 50, completed: false },
            { task: "Scrivi 500 parole significative", xp: 30, completed: true },
            { task: "Revisione di 2 lavori inviati dai colleghi", xp: 40, completed: false },
            { task: "Partecipa a una sessione di studio di gruppo", xp: 20, completed: true },
            { task: "Fai una pausa di meditazione consapevole", xp: 25, completed: false },
        ],
    },
};

const PodcastInterface = ({ language = "English" }) => {
    const [previewText, setPreviewText] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState("British English");

    const t = podcastTranslations[language] || podcastTranslations.English;

    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-6 shadow-lg"
        >
            {/* Data Privacy Notice */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.dataPrivacyTitle}</h3>
                <div className="space-y-2">
                    {t.dataPrivacyDetails.map((detail, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="text-green-600 dark:text-green-400"/>
                            <span className="text-gray-800 dark:text-gray-300">{detail}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Compose Note Section */}
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.writeNoteTitle}</h3>
                    <select
                        className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-300"
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
                <Upload className="w-8 h-8 mx-auto mb-4 text-gray-400 dark:text-gray-500"/>
                <p className="text-gray-600 dark:text-gray-300">{t.fileUploadText}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{t.supportedFormats}</p>
            </div>

            {/* Voice Settings Section */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.voiceSettingsTitle}</h3>
                <div className="space-y-6">
                    {/* Playback Speed */}
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-medium text-gray-900 dark:text-white">{t.speedLabel}</label>
                        <input
                            type="range"
                            className="w-full"
                            min="0"
                            max="100"
                            defaultValue="50"
                            aria-label={t.speedLabel}
                        />
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                            {t.speedRange.map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                    </div>
                    {/* Voice Pitch */}
                    <div className="space-y-2">
                        <label
                            className="block text-sm font-medium text-gray-900 dark:text-white">{t.pitchLabel}</label>
                        <input
                            type="range"
                            className="w-full"
                            min="0"
                            max="100"
                            defaultValue="30"
                            aria-label={t.pitchLabel}
                        />
                        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
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
                        <button><Play className="w-6 h-6 text-gray-900 dark:text-white"/></button>
                            <span className="text-gray-900 dark:text-white">2:34</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button><Rewind className="w-6 h-6 text-gray-900 dark:text-white"/></button>
                        <button><Save className="w-6 h-6 text-gray-900 dark:text-white"/></button>
                    </div>
                    <span className="text-gray-900 dark:text-white">-1:37</span>
                </div>
                <button
                    className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                    {t.generateButton}
                </button>
            </div>
        </motion.div>
    );
};

const MoodTracker = ({language = "English"}) => {
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
                <div>
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h2>
                        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300">{t.subtitle}</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg dark:shadow-gray-900/30">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-gray-900 dark:text-white text-center">{t.question}</h3>
                        <div className="space-y-6 sm:space-y-8">
                            {Object.entries(t.moods).map(([type, moods]) => (
                                <div
                                    key={type}
                                    className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3 sm:gap-4"
                                >
                                    {moods.map((mood) => (
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
                                            <span className="text-sm sm:text-lg font-medium">{mood.name}</span>
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
                            ))}
                        </div>
                    </div>
                </div>

                {/* Podcast and Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Podcast Interface */}
                    <PodcastInterface language={language}/>

                    {/* Goal & Achievements Section */}
                    <div className="space-y-8">
                        {/* Challenges Section */}
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-3 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                {goalTranslations[language].title}
                            </h3>
                            {goalTranslations[language].challenges.map((challenge, index) => (
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

                        {/* Achievements Section */}
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8}}
                            viewport={{once: true}}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 space-y-3 shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                {t.achievementTitle}
                            </h3>
                            {t.achievements.map((achievement, index) => (
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
                                        <Check className="w-5 h-5 text-green-500"/>
                                    ) : (
                                        <Lock className="w-5 h-5 text-gray-400 dark:text-gray-500"/>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
            </div>
        </div>
</section>
)
    ;
};

export default MoodTracker;