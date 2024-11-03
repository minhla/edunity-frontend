import SectionCategories from "./sections/SectionCategories";
import SectionTestimonials from "./sections/SectionTestimonials";
import SectionHero from "./sections/SectionHero";
import SectionCourses from "./sections/SectionCourses";

export default async function LandingPage() {
  return (
    <>
      <SectionHero />
      <SectionCategories />
      <SectionCourses />
      <SectionTestimonials />
    </>
  );
}
