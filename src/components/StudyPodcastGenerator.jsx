import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Play, Pause, Upload, Volume2, VolumeX,
    Download, Trash2, RefreshCw, Check,
    Loader2, Mic
} from 'lucide-react';

const StudyPodcastGenerator = ({ language = "English" }) => {
    const [content, setContent] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.8);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    const [selectedAccent, setSelectedAccent] = useState("en-GB");
    const [voiceSpeed, setVoiceSpeed] = useState(1);
    const [voicePitch, setVoicePitch] = useState(1);
    const [status, setStatus] = useState("ready");
    const [isGenerating, setIsGenerating] = useState(false);

    const translations = {
        English: {
            title: "Study podcast generator",
            subtitle: "Transform your notes into audio learning materials",
            privacy: {
                title: "Privacy & security",
                details: [
                    "End-to-end encryption for all uploads",
                    "Automatic deletion after 24 hours",
                    "No data storage or sharing"
                ]
            },
            input: {
                textPlaceholder: "Type or paste your study notes here...",
                uploadText: "Drag and drop files here, or click to select",
                supportedFormats: "Supports TXT, DOC, DOCX, PDF, and MD files",
                characterLimit: "Character limit:",
                wordCount: "Word count:"
            },
            voice: {
                settings: "Voice settings",
                accent: "Accent",
                accents: {
                    "en-GB": "British English",
                    "en-US": "American English"
                }
            },
            audio: {
                generate: "Generate podcast",
                download: "Download audio",
                delete: "Delete audio",
                regenerate: "Regenerate"
            },
            status: {
                ready: "Ready to generate",
                processing: "Processing your content...",
                success: "Podcast generated successfully!",
                error: "An error occurred. Please try again.",
                empty: "Please add some content first"
            }
        },
        ภาษาไทย: {
            title: "เครื่องมือสร้างพอดแคสต์",
            subtitle: "แปลงบันทึกของคุณให้เป็นสื่อการเรียนรู้ออดิโอ",
            privacy: {
                title: "ความเป็นส่วนตัวและความปลอดภัย",
                details: [
                    "การเข้ารหัสข้อมูลแบบ End-to-End สำหรับไฟล์ที่อัปโหลดทั้งหมด",
                    "ลบโดยอัตโนมัติหลังจาก 24 ชั่วโมง",
                    "ไม่มีการจัดเก็บหรือแบ่งปันข้อมูล"
                ]
            },
            input: {
                textPlaceholder: "พิมพ์หรือวางบันทึกการเรียนของคุณที่นี่...",
                uploadText: "ลากและวางไฟล์ที่นี่ หรือคลิกเพื่อเลือก",
                supportedFormats: "รองรับ TXT, DOC, DOCX, PDF และ MD",
                characterLimit: "จำกัดจำนวนตัวอักษร:",
                wordCount: "จำนวนคำ:"
            },
            voice: {
                settings: "การตั้งค่าเสียง",
                accent: "สำเนียง",
                accents: {
                    "en-GB": "ภาษาอังกฤษแบบอังกฤษ",
                    "en-US": "ภาษาอังกฤษแบบอเมริกัน"
                }
            },
            audio: {
                generate: "สร้างพอดแคสต์",
                download: "ดาวน์โหลดเสียง",
                delete: "ลบเสียง",
                regenerate: "สร้างใหม่"
            },
            status: {
                ready: "พร้อมสำหรับการสร้าง",
                processing: "กำลังประมวลผลเนื้อหาของคุณ...",
                success: "สร้างพอดแคสต์เรียบร้อยแล้ว!",
                error: "เกิดข้อผิดพลาด โปรดลองอีกครั้ง",
                empty: "โปรดเพิ่มเนื้อหาก่อน"
            }
        }
    };

    const t = translations[language];

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = (e) => setContent(e.target.result);
            reader.readAsText(file);
        }
    };

    const generatePodcast = () => {
        if (!content.trim()) {
            setStatus("empty");
            return;
        }
        setIsGenerating(true);
        setStatus("processing");

        setTimeout(() => {
            setIsGenerating(false);
            setStatus("success");
            setDuration(300); // Simulated duration for generated audio
        }, 3000); // Simulated delay for podcast generation
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            {/* Header */}
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{t.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{t.subtitle}</p>
            </div>

            {/* Content */}
            <div className="space-y-6">
                {/* Input Section */}
                <div>
          <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={t.input.textPlaceholder}
              className="w-full h-48 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                        <span>{t.input.wordCount} {content.trim().split(/\s+/).length}</span>
                        <span>{t.input.characterLimit} {content.length}/5000</span>
                    </div>
                </div>

                {/* File Upload */}
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6">
                    <div className="flex flex-col items-center">
                        <Upload className="w-12 h-12 text-gray-400 mb-4" />
                        <input
                            type="file"
                            onChange={handleFileUpload}
                            accept=".txt,.doc,.docx,.pdf,.md"
                            className="hidden"
                            id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer text-center"
                        >
                            <p className="text-gray-700 dark:text-gray-300">{t.input.uploadText}</p>
                            <p className="text-sm text-gray-500 mt-1">{t.input.supportedFormats}</p>
                        </label>
                    </div>
                </div>

                {/* Status */}
                {status === "success" && (
                    <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                                </button>
                                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.1"
                                    value={isMuted ? 0 : volume}
                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                    className="w-24"
                                />
                            </div>
                        </div>

                        {/* Playback Controls */}
                        <div className="flex justify-between">
                            <select
                                value={playbackRate}
                                onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                                className="px-2 py-1 rounded border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
                            >
                                {[0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map((rate) => (
                                    <option key={rate} value={rate}>{rate}x</option>
                                ))}
                            </select>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => setStatus("ready")}
                                    className="flex items-center gap-1 px-3 py-1 rounded bg-red-100 text-red-600 hover:bg-red-200"
                                >
                                    <Trash2 className="w-4 h-4" />
                                    {t.audio.delete}
                                </button>
                                <button className="flex items-center gap-1 px-3 py-1 rounded bg-green-100 text-green-600 hover:bg-green-200">
                                    <Download className="w-4 h-4" />
                                    {t.audio.download}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Generate Button */}
                <button
                    onClick={generatePodcast}
                    disabled={isGenerating || !content.trim()}
                    className="w-full py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isGenerating ? (
                        <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-5 h-5 animate-spin" />
                            {t.status.processing}
            </span>
                    ) : (
                        t.audio.generate
                    )}
                </button>
            </div>
        </div>
    );
};

export default StudyPodcastGenerator;