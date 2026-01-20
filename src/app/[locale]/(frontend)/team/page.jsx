"use client";

import { useEffect, useState } from "react";
 
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";

const TeamPage = () => {
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await fetch("/data/TeamMemberData.json");
        const data = await res.json();
        setTeams(data);
      } catch (error) {
        console.log("Data fetch error:", error);
      }
    };

    fetchTeams();
  }, []);

  if (!teams) return <p>Loading...</p>;

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-10 pt-30">
      <TeamSection title="Management Team" subtitle="efficient, customer-cen-tric development, and a commitment to excel-lence, we strive to empower businesses to transform, thrive, and achieve long-term success in an ever-evolving digital world." members={teams.management} />
      <TeamSection title="IT Team" subtitle="" members={teams.it} />
      <TeamSection title="Manufacturing & Product Team" subtitle="" members={teams.manufacturing} />
      <TeamSection title="Export & Import Team" subtitle="" members={teams.exportImport} />
      <TeamSection title="Transport & Logistics Team" subtitle=" " members={teams.transport} />
      <TeamSection title="Marketing Team"   members={teams.marketing} />
      <div className="mb-10">
        <FAQSection/>
      </div>
    </div>
    </div>
  );
};

export default TeamPage;
