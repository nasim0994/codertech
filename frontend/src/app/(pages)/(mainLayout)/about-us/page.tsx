import "react-vertical-timeline-component/style.min.css";
import AboutCom from "@/components/shared/main/AboutCom";
import WhyChooseCom from "@/components/shared/main/WhyChooseCom";
import CtaCom from "@/components/shared/main/CtaCom";

export default function AboutPage() {
  return (
    <section className="py-10">
      <div className="container">
        <AboutCom />
        <div className={"mt-20"}>
          <WhyChooseCom />
        </div>
        <div className={"mt-20"}>
          <CtaCom />
        </div>
      </div>
    </section>
  );
}
