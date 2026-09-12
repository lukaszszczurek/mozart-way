import ResumeLayout from "@/components/resume-page/ResumeLayout";
import { TECH_DATA } from "@/data/resume-data-tech";

export default function TechResume() {
  return (
    <ResumeLayout
      data={TECH_DATA}
      otherVersions={[
        { href: "/resume", label: "wersja ogólna" },
        { href: "/salesresume", label: "wersja sales" },
      ]}
      hackathonsTitle="Postmortemy"
      hackathonsHeading="Lubię rozkładać systemy na czynniki pierwsze"
      hackathonsDescription="Kilka produkcyjnych awarii, które nauczyły mnie więcej niż niejeden kurs."
    />
  );
}
