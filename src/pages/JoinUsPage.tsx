import React from 'react';
import JoinUsHero from '../components/join-us/JoinUsHero';
import SeasonStatus from '../components/join-us/SeasonStatus';
import CrewPrivileges from '../components/join-us/CrewPrivileges';
import WhoIsThisFor from '../components/join-us/WhoIsThisFor';
import HowItWorks from '../components/join-us/HowItWorks';
import CrewWall from '../components/join-us/CrewWall';
import TheCommitment from '../components/join-us/TheCommitment';
import JoinUsFAQ from '../components/join-us/JoinUsFAQ';
import FinalApplyCTA from '../components/join-us/FinalApplyCTA';

export default function JoinUsPage() {
  return (
    <div className="bg-pure-black min-h-screen text-pastel-beige overflow-hidden">
      {/* SECTION 1 — HERO */}
      <JoinUsHero />

      {/* SEASON PROGRESS BAR & STATUS */}
      <SeasonStatus />

      {/* SECTION 2 — CREW PRIVILEGES */}
      <CrewPrivileges />

      {/* SECTION 3 — WHO THIS IS FOR */}
      <WhoIsThisFor />

      {/* SECTION 4 — HOW IT WORKS */}
      <HowItWorks />

      {/* CREW WALL ARCHIVE */}
      <CrewWall />

      {/* SECTION 5 — THE COMMITMENT */}
      <TheCommitment />

      {/* SECTION 6 — FAQ + HELP CTA */}
      <JoinUsFAQ />

      {/* SECTION 7 — FINAL APPLY CTA */}
      <FinalApplyCTA />
    </div>
  );
}
