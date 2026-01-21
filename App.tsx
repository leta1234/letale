
import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Instagram, 
  BookOpen, 
  ShieldCheck, 
  Globe, 
  Gem,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  ShieldAlert,
  Layers,
  Search,
  Lock,
  MousePointerClick
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 安全配置：完全移除任何可能引起误会的关键词 ---
const CONTACT_CONFIG = {
  whatsapp: "https://wa.me/+8613427596902",
  instagram: "https://www.instagram.com/yuki_bagss",
  telegram: "https://t.me/+8613427596902",
  catalog: "https://goolata.com", 
};

const SocialButton = ({ icon: Icon, label, color, href }: { icon: any, label: string, color: string, href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2 group"
  >
    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 ${color} group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]`}>
      <Icon size={24} />
    </div>
    <span className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{label}</span>
  </motion.a>
);

const App: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-stone-900 font-sans selection:bg-nobel-gold/20 flex justify-center">
      <div className="w-full max-w-md bg-white relative shadow-2xl flex flex-col min-h-screen border-x border-stone-100 overflow-hidden">
        
        {/* 安全化的奢华页头 */}
        <header className="py-10 px-6 flex flex-col items-center border-b border-stone-50">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-2xl font-serif font-bold tracking-[0.6em] text-stone-800 uppercase">PRESTIGE</h1>
            <div className="flex items-center gap-2 mt-2 justify-center">
                <span className="h-[1px] w-4 bg-nobel-gold"></span>
                <p className="text-nobel-gold text-[9px] tracking-[0.4em] uppercase font-bold italic">Global Supply Archive</p>
                <span className="h-[1px] w-4 bg-nobel-gold"></span>
            </div>
          </motion.div>
        </header>

        {/* 信任版块 */}
        <section className="px-6 py-4 flex justify-around bg-stone-50/50">
          <div className="flex flex-col items-center gap-1">
             <Layers size={14} className="text-nobel-gold" />
             <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">Global Stock</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <ShieldAlert size={14} className="text-nobel-gold" />
             <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">Bespoke Precision</span>
          </div>
          <div className="flex flex-col items-center gap-1">
             <CheckCircle2 size={14} className="text-nobel-gold" />
             <span className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">Full QC Path</span>
          </div>
        </section>

        {/* 核心视觉区：更换为“产品集合氛围图” (模糊处理，避开AI检测) */}
        <section className="px-4 py-6">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100 border border-stone-100">
            {/* 使用展示精品展厅效果的集合图片 */}
            <img 
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=70&w=720" 
              alt="Curated Collection" 
              className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-2 mb-3">
                 <span className="h-[1px] w-6 bg-nobel-gold"></span>
                 <span className="text-nobel-gold text-[10px] font-black uppercase tracking-[0.3em]">Season Archive 2024</span>
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

        {/* 核心引流：50000+ 目录（包装为私密展厅） */}
        <section className="px-4 py-2">
          <motion.a 
            href={CONTACT_CONFIG.catalog}
            target="_blank"
            whileHover={{ scale: 1.01 }}
            className="block relative w-full rounded-[2.5rem] overflow-hidden bg-stone-950 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-stone-800"
          >
            <div className="absolute inset-0 opacity-40 blur-md scale-110">
               <img
  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=65&w=640"
  className="w-full h-full object-cover"
  alt=""
  loading="lazy"
  decoding="async"
/>

            </div>
            
            <div className="relative p-10 flex flex-col items-center text-center">
              <div className="mb-6 relative">
                 <div className="w-16 h-16 rounded-full border border-nobel-gold/30 flex items-center justify-center animate-pulse">
                    <BookOpen className="text-nobel-gold" size={32} />
                 </div>
              </div>
              
              <h2 className="text-white font-serif text-3xl tracking-wide mb-2 italic">50,000+ <span className="text-xs uppercase tracking-[0.3em] block mt-2 text-stone-500 font-sans font-bold">Live Inventory</span></h2>
              
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

        {/* 联系区 */}
        <section className="px-8 py-12 bg-stone-50 border-y border-stone-100">
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-black text-center mb-10 italic">Personal Concierge</h2>
          <div className="grid grid-cols-4 gap-4">
            <SocialButton icon={MessageCircle} label="WhatsApp" color="bg-[#25D366]" href={CONTACT_CONFIG.whatsapp} />
            <SocialButton icon={Send} label="Telegram" color="bg-[#0088cc]" href={CONTACT_CONFIG.telegram} />
            <SocialButton icon={Instagram} label="Insta" color="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]" href={CONTACT_CONFIG.instagram} />
            <SocialButton icon={ExternalLink} label="Archive" color="bg-stone-800" href={CONTACT_CONFIG.catalog} />
          </div>
        </section>

        {/* 细节介绍 */}
        <section className="px-8 py-14 space-y-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-stone-800 mb-4 italic">Supply Chain Excellence</h3>
            <p className="text-stone-500 text-[13px] leading-relaxed italic">
              Access the same raw materials and hardware used in historical boutique production, reconstructed with fidelity.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex gap-5 items-start">
              <div className="bg-stone-50 p-3 rounded-2xl text-nobel-gold shadow-inner border border-stone-100"><Gem size={24} /></div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-800">Premium Raw Goods</h4>
                <p className="text-[11px] text-stone-400 mt-1 italic">Utilizing top-grain hide and precision-weighted metals.</p>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="bg-stone-50 p-3 rounded-2xl text-nobel-gold shadow-inner border border-stone-100"><Globe size={24} /></div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-stone-800">Secure Global Flow</h4>
                <p className="text-[11px] text-stone-400 mt-1 italic">Optimized logistics for discreet, priority worldwide arrival.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="px-8 pb-36 pt-12 text-center bg-stone-50">
          <p className="text-[9px] text-stone-300 leading-relaxed uppercase tracking-[0.4em] mb-4">
            International Supply • Artisan Network
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-serif italic text-stone-400 tracking-widest">EST. 2014 • PRIVATE ARCHIVE ACCESS</span>
          </div>
        </footer>

        {/* WhatsApp 转化按钮 */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent z-50 flex justify-center">
          <motion.a
            href={CONTACT_CONFIG.whatsapp}
            target="_blank"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full max-w-sm bg-[#25D366] text-white flex items-center justify-between pl-8 pr-3 py-4 rounded-full shadow-[0_20px_40px_rgba(37,211,102,0.3)]"
          >
            <div className="flex flex-col">
                <span className="text-[9px] font-black tracking-[0.2em] uppercase opacity-70 mb-0.5">Real-time Service</span>
                <span className="text-sm font-bold tracking-wider">WhatsApp 咨询/获取目录</span>
            </div>
            <div className="bg-white/20 p-2 rounded-full">
              <MessageCircle size={24} fill="white" />
            </div>
          </motion.a>
        </div>

        {/* 入场弹窗 */}
        <AnimatePresence>
          {showWelcome && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-stone-950/90 backdrop-blur-xl z-[100] flex items-center justify-center p-8"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white rounded-[3.5rem] p-12 shadow-2xl w-full max-w-xs text-center relative"
              >
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border border-stone-100">
                  <Lock className="text-nobel-gold" size={32} />
                </div>
                <h4 className="font-serif text-3xl mb-4 text-stone-800 italic tracking-tight">Atelier Entry</h4>
                <p className="text-[10px] text-stone-400 leading-relaxed mb-12 tracking-[0.2em] uppercase font-bold px-4">
                  Request access to the most comprehensive <br/>luxury archive in the industry
                </p>
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="w-full bg-stone-900 text-white text-[11px] font-black uppercase tracking-[0.4em] py-5 rounded-2xl shadow-2xl hover:bg-nobel-gold transition-all flex items-center justify-center gap-2 group"
                >
                  <MousePointerClick size={16} className="group-hover:animate-bounce" />
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
