import SectionCuatro from "@/components/landing/SectionCuatro";
import SectionCard from "@/components/landing/SectionCard";
import SectionAction from "@/components/landing/SectionAction";
import SectionFooter from "@/components/landing/SectionFooter";
import HeaderMobile from "@/components/landing/ HeaderMobile";
import SectionFromContact from "@/components/landing/SectionFormContact";

import React from "react";
import SectionTeam from "@/components/landing/SectionTeam";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-white to-primary/20">
      <div className="absolute top-0 left-0 h-full w-full -z-10">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary opacity-50 blur-[80px]"></div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#adadad_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <HeaderMobile />
      <SectionCard />
      <SectionCuatro />
      <SectionAction />
      <SectionTeam />
      <SectionFromContact />
      <SectionFooter />
    </main>
  );
}
