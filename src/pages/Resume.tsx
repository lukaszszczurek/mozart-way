import ResumeLayout from "@/components/resume-page/ResumeLayout";
import { DATA } from "@/data/resume-data";

export default function Resume() {
  return (
    <ResumeLayout
      data={DATA}
      otherVersions={[
        { href: "/salesresume", label: "wersja sales" },
        { href: "/techresume", label: "wersja tech" },
      ]}
    />
  );
}
