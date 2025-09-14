import Accordion from "@/components/ui/accordion";

const items = [
  {
    title: "Precision excellence",
    content:
      "We maintain ±0.001mm standards not because it's required, but because it's who we are. Every measurement matters, every detail counts.",
  },
  {
    title: "Reliability & consistency",
    content:
      "Our clients plan their success around our delivery. We honor that trust by delivering on time, every time, without exceptions.",
  },
  {
    title: "Continuous innovation",
    content:
      "We invest in the latest technology and techniques, constantly improving our processes to deliver better, faster, and more efficient solutions.",
  },
  {
    title: "Quality without compromise",
    content:
      "From material selection to final inspection, we never cut corners. Our reputation is built on parts that perform perfectly.",
  },
  {
    title: "Partnership over transaction",
    content:
      "We succeed when our clients succeed. Their challenges become our challenges, their wins become our wins.",
  },
];

export default function ValuesAccordion() {
  return <Accordion items={items} />;
}
