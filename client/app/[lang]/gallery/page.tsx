import { Play, Camera } from 'lucide-react';
import type { Locale } from '@/lib/i18n/config';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  return {
    title: lang === 'bn' ? 'গ্যালারি' : 'Gallery',
    description:
      lang === 'bn'
        ? 'সাস্ট ফিটনেস ক্লাবের ছবি ও ভিডিও'
        : 'Photos and videos from SUST Fitness Club',
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  const categories = lang === 'bn' ? [
    { id: 'all', label: 'সব' },
    { id: 'gym', label: 'জিম' },
    { id: 'events', label: 'ইভেন্ট' },
    { id: 'training', label: 'ট্রেনিং' },
  ] : [
    { id: 'all', label: 'All' },
    { id: 'gym', label: 'Gym' },
    { id: 'events', label: 'Events' },
    { id: 'training', label: 'Training' },
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop', span: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop', span: '' },
    { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop', span: '' },
    { src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop', span: '' },
    { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=400&fit=crop', span: 'col-span-2' },
    { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop', span: '' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop', span: '' },
    { src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&h=400&fit=crop', span: '' },
    { src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=400&fit=crop', span: 'col-span-2' },
  ];

  const featuredVideos = lang === 'bn' ? [
    { title: 'ওয়েট ট্রেনিং টিউটোরিয়াল', duration: '১২:৩০ মিনিট' },
    { title: 'যোগব্যায়াম সেশন', duration: '১৫:০০ মিনিট' },
    { title: 'কার্ডিও ওয়ার্কআউট', duration: '৮:৪৫ মিনিট' },
  ] : [
    { title: 'Weight Training Tutorial', duration: '12:30 min' },
    { title: 'Yoga Session', duration: '15:00 min' },
    { title: 'Cardio Workout', duration: '8:45 min' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 px-4">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/10 via-transparent to-[#1e3a5f]/10 dark:from-[#2ecc71]/5 dark:via-transparent dark:to-[#5ce1e6]/5" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#2ecc71]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#1e3a5f]/20 dark:bg-[#5ce1e6]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2ecc71]/10 dark:bg-[#5ce1e6]/20 border border-[#2ecc71]/20 dark:border-[#5ce1e6]/30 mb-6">
            <Camera className="w-8 h-8 text-[#27ae60] dark:text-[#5ce1e6]" />
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">{lang === 'bn' ? 'গ্যালারি' : 'Gallery'}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {lang === 'bn'
              ? 'আমাদের জিম, ইভেন্ট এবং ট্রেনিং সেশনের মুহূর্তগুলো দেখুন'
              : 'Explore moments from our gym, events, and training sessions'}
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 px-4 bg-white dark:bg-neutral-900/50 border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={category.id}
                className={`px-6 py-2.5 text-sm font-medium rounded-xl transition-all ${
                  index === 0
                    ? 'bg-[#2ecc71] dark:bg-[#5ce1e6] text-white dark:text-[#0d1117]'
                    : 'bg-gray-100 dark:bg-[#2d3f50] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3d4f60]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gray-50 dark:bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid auto-rows-[200px] grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl ${item.span}`}
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white rounded-xl text-sm font-medium">
                    {lang === 'bn' ? 'দেখুন' : 'View'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="btn-secondary px-8 py-3">
              {lang === 'bn' ? 'আরও দেখুন' : 'Load More'}
            </button>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {lang === 'bn' ? 'ফিচার্ড ভিডিও' : 'Featured Videos'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {lang === 'bn' ? 'আমাদের ট্রেনিং ভিডিও দেখুন' : 'Watch our training videos'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className="card overflow-hidden hover:shadow-xl transition-all group cursor-pointer dark:bg-[#71e8de10] dark:border-[#2d3f50] hover:-translate-y-1"
              >
                <div className="relative h-48 bg-gray-100 dark:bg-[#2d3f50]">
                  <img
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1534438327276-14e5300c3a48' : index === 1 ? '1544367567-0f2fcb009e0b' : '1571019613454-1cb2f99b2d8b'}?w=600&h=400&fit=crop`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full bg-[#2ecc71] dark:bg-[#5ce1e6] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white dark:text-[#0d1117] ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {video.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#2ecc71] dark:text-[#5ce1e6]">
                    {video.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
