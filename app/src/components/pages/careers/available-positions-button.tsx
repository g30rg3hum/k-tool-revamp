"use client";

import Button from "@/components/ui/button";

export default function AvailablePositionsButton() {
  const scrollToSection = () => {
    const element = document.getElementById("available-positions");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      console.log(elementPosition);
      console.log(window.pageYOffset);
      const offsetPosition = elementPosition + window.pageYOffset - 170;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button variant="primary" onClick={scrollToSection}>
      See available positions
    </Button>
  );
}
