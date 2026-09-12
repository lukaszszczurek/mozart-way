import ResumeLayout from "@/components/resume-page/ResumeLayout";
import { SALES_DATA } from "@/data/resume-data-sales";

export default function SalesResume() {
  return (
    <ResumeLayout
      data={SALES_DATA}
      otherVersions={[
        { href: "/resume", label: "wersja ogólna" },
        { href: "/techresume", label: "wersja tech" },
      ]}
      hackathonsTitle="Wygrane"
      hackathonsHeading="Sprzedaż, którą można zmierzyć"
      hackathonsDescription="Kilka sytuacji, w których dobry proces sprzedażowy — i AI, które go pilnuje — zrobiło realną różnicę."
    />
  );
}
