import React, { useState } from "react";
import {
  MessageCircle,
  Send,
  Instagram,
  BookOpen,
  Globe,
  Gem,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Layers,
  Lock,
  MousePointerClick,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * =========================
 * 1) 联系方式配置（所有跳转链接集中管理）
 *    - 方便你以后只改这里，不用到处找
 * =========================
 */
const CONTACT_CONFIG = {
  whatsapp: "https://wa.me/+8613427596902",
  instagram: "https://www.instagram.com/yuki_bagss",
  telegram: "https://t.me/+8613427596902",
  catalog: "https://goolata.com",
};

/**
 * =========================
 * 2) 合规页链接（Policy / Contact）
 *    - 建议用 Google Docs 或你自己的站内页面
 *    - Google Docs 必须设置：Anyone with the link can view
 * =========================
 */
const POLICY_LINKS = {
  privacy: "https://docs.google.com/document/d/XXXXXXXXXXXXXXX/edit?usp=sharing",
  terms: "https://docs.google.com/document/d/XXXXXXXXXXXXXXX/edit?usp=sharing",
  refund: "https://docs.google.com/document/d/XXXXXXXXXXXXXXX/edit?usp=sharing",
  contact: "https://docs.google.com/document/d/XXXXXXXXXXXXXXX/edit?usp=sharing",
};

/**
 * =========================
 * 3) 真实联系信息（合规必须）
 *    - Email 必须真实
 *    - Location 建议写国家/州（不要写虚假地址）
 * =========================
 */
const REAL_CONTACT = {
  email: "support@yourdomain.com", // ✅ 改成你的真实邮箱（必须真实）
  location: "United States", // ✅ 建议写真实地区（国家/州即可）
};

/**
 * =========================
 * 4) Pixel 事件上报工具
 *    - track：标准事件（Meta 内置事件名）
 *    - trackCustom：自定义事件（你要的 InstagramClick / PolicyView）
 *    - try/catch + 可选链：fbq没加载完也不会报错
 * =========================
 */

// 你要用的标准事件：Contact / ViewContent / Lead
type PixelEvent = "Contact" | "ViewContent" | "Lead";

/** 标准事件：用于广告优化（更常用、更稳） */
const track = (event: PixelEvent) => {
  try {
    // @ts-ignore - fbq 是 Pixel 注入到 window 的全局函数
    window.fbq?.("track", event);
  } catch {}
};

/** 自定义事件：用于单独统计（如 InstagramClick / PolicyView） */
const trackCustom = (eventName: string) => {
  try {
    // @ts-ignore
    window.fbq?.("trackCustom", eventName);
  } catch {}
};

/**
 * =========================
 * 5) SocialButton 组件（四个社交按钮用同一个组件）
 *    - onClick 是可选：有些按钮需要统计，有些不统计
 * =========================
 */
const SocialButton = ({
  icon: Icon,
  label,
  color,
  href,
  onClick,
}: {
  icon: any;
  label: string;
  color: string;
  href: string;
  onClick?: () => void;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick} // ✅ 点击时触发 Pixel（如果传了 onClick）
    whileHover={{ y: -5 }} // ✅ 悬停动效（不影响 Pixel）
    whileTap={{ scale: 0.95 }} // ✅ 点击动效
    className="flex flex-col items-center gap-2 group"
  >
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 ${color} group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]`}
    >
      <Icon size={24} />
    </div>

    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">
      {label}
    </span>
  </motion.a>
);

const App: React.FC = () => {
  /**
   * =========================
   * 6) 弹窗显示状态
   *    - true：显示入场弹窗
   *    - false：隐藏弹窗，进入主页内容
   * =========================
   */
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-nobel-gold/20 flex justify-center">
      <div className="w-full max-w-md bg-white relative shadow-2xl flex flex-col min-h-screen border-x border-stone-100 overflow-hidden">
        {/* =========================
            7) 页头（品牌展示区）
           ========================= */}
        <header className="py-10 px-6 flex flex-col items-center border-b border-stone-50">
          <motion.div
            initial={{ opacity: 0, y: -10 }} // ✅ 入场动画
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-2xl font-serif font-bold tracking-[0.6em] text-stone-800 uppercase">
              PRESTIGE
            </h1>
            <div className="flex items-center gap-2 mt-2 justify-center">
              <span className="h-[1px] w-4 bg-nobel-gold"></span>
              <p className="text-nobel-gold text-[9px] tracking-[0.4em] uppercase font-bold italic">
                Global Supply Archive
              </p>
              <span className="h-[1px] w-4 bg-nobel-gold"></span>
            </div>
          </motion.div>
        </header>

        {/* =========================
            8) 信任版块（展示服务优势）
           ========================= */}
        <section className="px-6 py-4 flex justify-around bg-stone-50/50">
          <div className="flex flex-col items-center gap-1">
            <Layers size={14} className="text-nobel-gold" />
            <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">
              Global Stock
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <ShieldAlert size={14} className="text-nobel-gold" />
            <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">
              Bespoke Precision
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <CheckCircle2 size={14} className="text-nobel-gold" />
            <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">
              Full QC Path
            </span>
          </div>
        </section>

        {/* =========================
            9) 核心视觉主图（首屏大图）
            - loading="eager"：首屏尽快加载
            - decoding="async"：异步解码减少卡顿
           ========================= */}
        <section className="px-4 py-6">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100 border border-stone-100">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=70&w=720"
              alt="Curated Collection"
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
              loading="eager"
              decoding="async"
              // @ts-ignore - 浏览器支持 fetchpriority；TS 可能没有这个属性类型
              fetchpriority="high"
            />

            {/* 主图上的渐变遮罩：提升文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            {/* 主图上的文案区 */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-6 bg-nobel-gold"></span>
                <span className="text-nobel-gold text-[10px] font-black uppercase tracking-[0.3em]">
                  Season Archive 2024
                </span>
              </div>

              <p className="text-white font-serif text-2xl italic tracking-tight leading-tight">
                An exhaustive collection of artisan-grade masterpieces.
              </p>

              <p className="text-stone-400 text-[10px] mt-4 uppercase tracking-[0.15em] font-medium leading-relaxed">
                Source directly from the world's most sophisticated leather workshops.
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            10) 目录入口卡片（重要转化点）
            ✅ 点击触发：track("ViewContent")
           ========================= */}
        <section className="px-4 py-2">
          <motion.a
            href={CONTACT_CONFIG.catalog}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("ViewContent")} // ✅ 目录点击事件（标准事件）
            whileHover={{ scale: 1.01 }}
            className="block relative w-full rounded-[2.5rem] overflow-hidden bg-stone-950 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-stone-800"
          >
            {/* 背景图片：懒加载，减少首屏压力 */}
            <div className="absolute inset-0 opacity-40 blur-md scale-110">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=65&w=640"
                className="w-full h-full object-cover"
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 前景内容 */}
            <div className="relative p-10 flex flex-col items-center text-center">
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full border border-nobel-gold/30 flex items-center justify-center animate-pulse">
                  <BookOpen className="text-nobel-gold" size={32} />
                </div>
              </div>

              <h2 className="text-white font-serif text-3xl tracking-wide mb-2 italic">
                50,000+{" "}
                <span className="text-xs uppercase tracking-[0.3em] block mt-2 text-stone-500 font-sans font-bold">
                  Live Inventory
                </span>
              </h2>

              <div className="h-[1px] w-16 bg-nobel-gold/40 my-6"></div>

              <p className="text-stone-400 text-[11px] leading-relaxed max-w-[260px] mb-8 uppercase tracking-[0.1em] font-medium">
                Bags, Watches, Footwear & Accessories. Updated in real-time.
              </p>

              <div className="flex items-center gap-3 bg-white text-stone-950 px-10 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-nobel-gold hover:text-white transition-all">
                <span>进入私密目录</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </motion.a>
        </section>

        {/* =========================
            11) 联系区（按钮区）
            ✅ WhatsApp：Contact
            ✅ Instagram：InstagramClick（自定义事件，后台显示独立事件名）
            ✅ Archive：ViewContent
            - Telegram：不统计（你没要求）
           ========================= */}
        <section className="px-8 py-12 bg-stone-50 border-y border-stone-100">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-black text-center mb-10 italic">
            Personal Concierge
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {/* WhatsApp 点击：用于广告核心优化（Contact） */}
            <SocialButton
              icon={MessageCircle}
              label="WhatsApp"
              color="bg-[#25D366]"
              href={CONTACT_CONFIG.whatsapp}
              onClick={() => track("Contact")}
            />

            {/* Telegram 不统计 */}
            <SocialButton
              icon={Send}
              label="Telegram"
              color="bg-[#0088cc]"
              href={CONTACT_CONFIG.telegram}
            />

            {/* Instagram：自定义事件 InstagramClick（你要求后台单独事件名） */}
            <SocialButton
              icon={Instagram}
              label="Insta"
              color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]"
              href={CONTACT_CONFIG.instagram}
              onClick={() => trackCustom("InstagramClick")}
            />

            {/* Archive：ViewContent */}
            <SocialButton
              icon={ExternalLink}
              label="Archive"
              color="bg-stone-800"
              href={CONTACT_CONFIG.catalog}
              onClick={() => track("ViewContent")}
            />
          </div>
        </section>

        {/* =========================
            12) 细节介绍（内容区）
            - 仅展示文案，不做 Pixel
           ========================= */}
        <section className="px-8 py-14 space-y-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-stone-800 mb-4 italic">
              Supply Chain Excellence
            </h3>
            <p className="text-stone-500 text-[13px] leading-relaxed italic">
              Access the same raw materials and hardware used in historical boutique production, reconstructed with fidelity.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="bg-stone-50 p-3 rounded-2xl text-nobel-gold shadow-inner border border-stone-100">
                <Gem size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-800">
                  Premium Raw Goods
                </h4>
                <p className="text-[11px] text-stone-400 mt-1 italic">
                  Utilizing top-grain hide and precision-weighted metals.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="bg-stone-50 p-3 rounded-2xl text-nobel-gold shadow-inner border border-stone-100">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-800">
                  Secure Global Flow
                </h4>
                <p className="text-[11px] text-stone-400 mt-1 italic">
                  Optimized logistics for discreet, priority worldwide arrival.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            ✅ 13) 页脚（B 方案：奢侈品风格列表 Footer + 合规链接 + 真实 Contact）
            ✅ 每个 policy 点击会打点：trackCustom("PolicyView_xxx")
           ========================= */}
        <footer className="px-8 pb-36 pt-12 bg-stone-50">
          {/* 顶部品牌小字（保留你原风格，但更精致） */}
          <div className="text-center">
            <p className="text-[9px] text-stone-300 leading-relaxed uppercase tracking-[0.4em] mb-3">
              International Supply • Artisan Network
            </p>
            <span className="text-[10px] font-serif italic text-stone-400 tracking-widest">
              EST. 2014 • PRIVATE ARCHIVE ACCESS
            </span>
          </div>

          {/* 分割线 */}
          <div className="mt-8 h-px w-full bg-stone-200/80" />

          {/* Policies 标题 */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="h-[1px] w-10 bg-nobel-gold/60" />
            <span className="text-[9px] uppercase tracking-[0.35em] font-black text-stone-400">
              Policies
            </span>
            <span className="h-[1px] w-10 bg-nobel-gold/60" />
          </div>

          {/* 合规链接列表（B 方案核心：一行一个链接，更高级） */}
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white/70 shadow-sm overflow-hidden">
            {/* Privacy */}
            <a
              href={POLICY_LINKS.privacy}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustom("PolicyView_Privacy")}
              className="group flex items-center justify-between px-5 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-stone-600 hover:bg-white transition"
            >
              <span>Privacy Policy</span>
              <span className="text-stone-300 group-hover:text-nobel-gold transition">
                →
              </span>
            </a>
            <div className="h-px bg-stone-200/70" />

            {/* Terms */}
            <a
              href={POLICY_LINKS.terms}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustom("PolicyView_Terms")}
              className="group flex items-center justify-between px-5 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-stone-600 hover:bg-white transition"
            >
              <span>Terms of Service</span>
              <span className="text-stone-300 group-hover:text-nobel-gold transition">
                →
              </span>
            </a>
            <div className="h-px bg-stone-200/70" />

            {/* Refund */}
            <a
              href={POLICY_LINKS.refund}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustom("PolicyView_Refund")}
              className="group flex items-center justify-between px-5 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-stone-600 hover:bg-white transition"
            >
              <span>Refund / Return Policy</span>
              <span className="text-stone-300 group-hover:text-nobel-gold transition">
                →
              </span>
            </a>
            <div className="h-px bg-stone-200/70" />

            {/* Contact */}
            <a
              href={POLICY_LINKS.contact}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCustom("PolicyView_Contact")}
              className="group flex items-center justify-between px-5 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-stone-600 hover:bg-white transition"
            >
              <span>Contact Us</span>
              <span className="text-stone-300 group-hover:text-nobel-gold transition">
                →
              </span>
            </a>
          </div>

          {/* 真实联系信息卡片（合规关键：必须有真实邮箱/地区） */}
          <div className="mt-6 rounded-2xl border border-stone-200 bg-white/70 shadow-sm px-5 py-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-nobel-gold/60" />
              <span className="text-[9px] uppercase tracking-[0.35em] font-black text-stone-400">
                Support
              </span>
            </div>

            <div className="space-y-3 text-[10px] text-stone-500">
              {/* Email */}
              <div className="flex items-center justify-between gap-4">
                <span className="uppercase tracking-[0.25em] text-stone-300 font-bold">
                  Email
                </span>
                <a
                  href={`mailto:${REAL_CONTACT.email}`}
                  className="font-semibold text-stone-700 hover:text-stone-900 underline decoration-stone-300 underline-offset-4 truncate"
                  title={REAL_CONTACT.email}
                >
                  {REAL_CONTACT.email}
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between gap-4">
                <span className="uppercase tracking-[0.25em] text-stone-300 font-bold">
                  Location
                </span>
                <span className="font-semibold text-stone-700">
                  {REAL_CONTACT.location}
                </span>
              </div>
            </div>
          </div>

          {/* 底部版权 */}
          <p className="mt-8 text-center text-[9px] text-stone-300 uppercase tracking-[0.35em]">
            © {new Date().getFullYear()} Prestige • All Rights Reserved
          </p>
        </footer>

        {/* =========================
            14) 底部 WhatsApp 固定按钮（最重要转化点）
            ✅ 点击触发：track("Contact")
           ========================= */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent z-50 flex justify-center">
          <motion.a
            href={CONTACT_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("Contact")} // ✅ WhatsApp 转化事件
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-sm bg-[#25D366] text-white flex items-center justify-between pl-8 pr-3 py-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)]"
          >
            <div className="flex flex-col">
              <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70 mb-0.5">
                Real-time Service
              </span>
              <span className="text-sm font-bold tracking-wider">
                WhatsApp Consultation / Catalogue
              </span>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <MessageCircle size={24} fill="white" />
            </div>
          </motion.a>
        </div>

        {/* =========================
            15) 入场弹窗（次转化点）
            ✅ 点击按钮触发：track("Lead")
           ========================= */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div
              initial={{ opacity: 0 }} // ✅ 遮罩淡入
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-950/90 backdrop-blur-sm z-[100] flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }} // ✅ 弹窗弹入动画
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-[3.5rem] p-12 shadow-2xl w-full max-w-xs text-center relative"
              >
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-stone-100">
                  <Lock className="text-nobel-gold" size={32} />
                </div>

                <h4 className="font-serif text-3xl mb-4 text-stone-800 italic tracking-tight">
                  Atelier Entry
                </h4>

                <p className="text-[10px] text-stone-400 leading-relaxed mb-12 tracking-[0.2em] uppercase font-bold px-4">
                  Request access to the most comprehensive <br />
                  luxury archive in the industry
                </p>

                <button
                  onClick={() => {
                    track("Lead"); // ✅ 弹窗按钮点击：Lead（次转化）
                    setShowWelcome(false); // ✅ 关闭弹窗
                  }}
                  className="w-full bg-stone-900 text-white text-[11px] font-black uppercase tracking-[0.4em] py-5 rounded-2xl shadow-2xl hover:bg-nobel-gold transition-all flex items-center justify-center gap-2 group"
                >
                  <MousePointerClick
                    size={16}
                    className="group-hover:animate-bounce"
                  />
                  <span>Request Entry</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
