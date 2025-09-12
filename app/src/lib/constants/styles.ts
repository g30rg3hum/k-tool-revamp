// All spacing should be in multiples of 3

// SPACING AND LAYOUT
export const VERTICAL_PADDING = "py-15 sm:py-18";
export const HORIZONTAL_PADDING = "px-6 sm:px-9";
export const MAX_WIDTH = "max-w-7xl";
export const CONTENT_LAYOUT = `${HORIZONTAL_PADDING} ${MAX_WIDTH} mx-auto`;

// SECTIONS
export const SPACE_BETWEEN_SECTIONS = "space-y-15 sm:space-y-18"; // aligns with VERTICAL_PADDING
// These should be inside <h2>
export const SECTION_HEADING = "text-xl md:text-2xl lg:text-3xl font-bold";
// These should be inside <h3>, gap between label and heading should be 3
export const SECTION_LABEL = "font-bold";
// These should be inside <h4>
export const CONTENT_HEADING = "text-lg font-bold";

// TEXT STYLING RULES
// - Bolded content should just be font-bold
//   - For the serif font, bolded content needs to be font-semibold.
// - Gap 9 between different parts (within the same section).
// - Gap 6 between different elements (e.g. heading and paragraph)
// - Gap 3 between similar elements (e.g. heading and subheading)
