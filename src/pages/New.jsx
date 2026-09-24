import React, { useState, useEffect } from 'react';
import { 
  LucideArrowLeft, 
  LucideArrowRight,
} from 'lucide-react';

const newsArticles = [
  {
    id: 1,
    date: "December 05, 2024",
    title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    excerpt: "বাংলাদেশ ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্যে একটি অনন্য উদ্যোগ নিয়ে এসেছে 'গাড়িবুক'। কোনো কমিশন ছাড়াই ইন্টারসিটি কার রেন্টাল পরিষেবা দেওয়া গাড়িবুক দেশের প্রথম এবং একমাত্র অ্যাপ।",
    publisher: "প্রথম আলো",
    publisherLogoText: "Prothom Alo",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 2,
    date: "December 04, 2024",
    title: 'Digital App to offer "Chander Gari"',
    excerpt: 'For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.',
    publisher: "Dhaka Tribune",
    publisherLogoText: "Dhaka Tribune",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    link: "#"
  },
  {
    id: 3,
    date: "December 04, 2024",
    title: "বাংলাদেশে প্রথমবারের মতো 'চান্দের গাড়ি' গাড়িবুক অ্যাপে",
    excerpt: "বাংলাদেশ পর্যটকদের জন্য জনপ্রিয় যানবাহন 'চান্দের গাড়ি' এবার যুক্ত হলো অনলাইন অ্যাপ ভিত্তিক প্ল্যাটফর্মে। গাড়িবুক দেশের প্রথম অ্যাপ হিসেবে পর্যটকদের জন্য এই বিশেষ যানটি বুকিং সুবিধা নিয়ে এলো।",
    publisher: "কালের কণ্ঠ",
    publisherLogoText: "Kaler Kantho",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    link: "#"
  }
];

const blogPosts = [
  {
    id: 1,
    date: "September 15, 2026",
    title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা",
    preview: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহুরে পরিবহন ব্যবস্থা এবং কিভাবে আন্তঃজেলা ভ্রমণে নতুন মাত্রা যোগ করছে।",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    date: "September 20, 2026",
    title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    preview: "সিলেটের দর্শনীয় স্থান, রাতারগুল, জাফলং এবং সেরা রিসোর্ট ও স্থানীয় ঐতিহ্যবাহী খাবারের পুর্ণাঙ্গ গাইড।",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    date: "September 20, 2026",
    title: "নওগাঁর দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    preview: "নওগাঁর দর্শনীয় স্থান সমূহ যেমন পাহাড়পুর বৌদ্ধ বিহার, ডানা পার্ক এবং স্থানীয় খাবার ও হোটেল গাইড।",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Atif Haider",
    role: "Banker",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    name: "Mohammad Habibur Rahman",
    role: "Banker",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    name: "Sadia Afrin",
    role: "Service Holder",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export default function NewPage() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-blue-100 selection:text-[#0d6efd]">
      {/* Full Screen Width Main Container */}
      <main className="w-full px-4 sm:px-8 lg:px-12 py-10 space-y-24">

        {/* News Section */}
        <section id="news" className="pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              We Featured by Top news Platforms
            </h2>
            <div className="flex items-center gap-3">
              <button className="w-11 h-11 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm">
                <LucideArrowLeft className="w-5 h-5" />
              </button>
              <button className="w-11 h-11 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors shadow-sm">
                <LucideArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <div 
                key={article.id} 
                className="group flex flex-col justify-between bg-white  p-4 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden mb-5">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full rounded-md object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-2">
                    <span className="text-xs font-medium text-slate-400 block mb-2">
                      {article.date}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#0d6efd] transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-2 pt-2 border-t border-slate-50 flex items-center justify-between">
                  <span className="font-extrabold text-slate-800 text-base italic tracking-tight">
                    {article.publisher}
                  </span>
                  <a 
                    href={article.link} 
                    className="inline-flex items-center gap-1.5 text-[#fdd300] hover:text-[#145FCF] font-semibold text-sm group/btn"
                  >
                    Read Article 
                    <LucideArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section id="blogs" className="pt-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                Beyond Destinations
              </h2>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#0d6efd] hover:text-[#0d6efd] font-bold text-base whitespace-nowrap group"
            >
              Show All Blogs 
              <LucideArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden mb-4 shadow-sm group-hover:shadow-lg transition-all duration-300">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-medium text-slate-400 block mb-2">
                  {post.date}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#0d6efd] transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">
                  {post.preview}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
}