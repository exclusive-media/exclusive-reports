// src/components/organisms/HomepageHero.tsx
"use client";

import { RevealText } from "@/lib/motion/RevealText";
import { Button } from "@heroui/react";
import { ArticleCard } from "../molecules/ArticleCard";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { m } from "framer-motion";

interface HomepageHeroProps {
  mainStory: any; // Using any temporarily for testing, will map to Article type later
  adConfig: {
    title: string;
    description: string;
    link: string;
    buttonText: string;
  };
}

export function HomepageHero({ mainStory, adConfig }: HomepageHeroProps) {
  // Defensive check: if no data, don't crash
  if (!mainStory) return null;

  return (
    <SectionContainer paddingY="lg" bg="default" className="border-b border-border/60">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <PageContainer maxWidth="lg" paddingX="md">
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-8">
            <RevealText
              text="The Lead Story"
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent"
            />
            <div className="h-[1px] flex-1 bg-border/20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Featured Content (75%) */}
            <div className="lg:col-span-9">
              <ArticleCard
                {...mainStory}
                publishedAt={mainStory.publishDate}
                variant="featured"
              />
            </div>

            {/* Institutional Sidebar (25%) */}
            <aside className="lg:col-span-3">
              <div className="sticky top-24 space-y-8">
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-background-secondary border border-border/50 p-6 rounded-sm"
                >
                  <span className="text-[9px] uppercase tracking-widest text-accent font-bold mb-4 block">
                    Exclusive Publication
                  </span>
                  <h4 className="font-display italic text-xl mb-3 text-foreground leading-tight">
                    {adConfig.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {adConfig.description}
                  </p>
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    className="text-[10px] uppercase font-bold tracking-wider"
                  >
                    {adConfig.buttonText}
                  </Button>
                </m.div>

                <div className="pt-6 border-t border-border/40 hidden lg:block">
                  <p className="text-[11px] text-muted-foreground italic leading-snug">
                    "Institutional reporting for policymakers, investors, and professionals who value context over speed."
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </PageContainer>
      </m.div>
    </SectionContainer>
  );
}