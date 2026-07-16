"use client";

import AboutPreview from "@/components/home/AboutPreview";
import DocumentsPreview from "@/components/home/DocumentsPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import ProjectsActivities from "@/components/home/ProjectsActivities";
import ImportantAnnouncement, {
  selectImportantAnnouncement,
} from "@/components/news/ImportantAnnouncement";
import News from "@/components/news/news";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import type { PublicPost } from "@/lib/news";

interface UkMacWebsiteProps {
  posts: PublicPost[];
  postsError?: boolean;
}

export default function UkMacWebsite({ posts, postsError }: UkMacWebsiteProps) {
  const importantPost = selectImportantAnnouncement(posts);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-white font-sans text-stone-900 selection:bg-brand-green-500/20 selection:text-brand-green-900">
      <HeroSection />
      <ImportantAnnouncement post={importantPost} />
      <News
        posts={posts}
        error={postsError}
        excludePostId={importantPost?.id}
      />
      <AboutPreview />
      <ProjectsActivities />
      <GalleryPreview posts={posts} />
      <DocumentsPreview />
      <ContactSection />
    </main>
  );
}
