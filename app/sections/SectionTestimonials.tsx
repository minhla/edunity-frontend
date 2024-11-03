import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TESTIMONIALS = [
  {
    name: "John Doe",
    title: "CEO",
    company: "Edwards",
    content:
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orcinulla pellentesque dignissim enim. Amet consectetur adipiscing",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Edwards",
    content:
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orcinulla pellentesque dignissim enim. Amet consectetur adipiscing",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Edwards",
    content:
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orcinulla pellentesque dignissim enim. Amet consectetur adipiscing",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Edwards",
    content:
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orcinulla pellentesque dignissim enim. Amet consectetur adipiscing",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Edwards",
    content:
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orcinulla pellentesque dignissim enim. Amet consectetur adipiscing",
  },
  {
    name: "John Doe",
    title: "CEO",
    company: "Edwards",
    content:
      "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orcinulla pellentesque dignissim enim. Amet consectetur adipiscing",
  },
];

const SectionTestimonials = () => {
  return (
    <div className="bg-testimonial min-h-[700px] py-20">
      <div className="content-wrapper flex flex-col items-center  gap-10">
        <div className="uppercase font-body bg-[#E9E2FF] rounded-md text-edunity-primary w-fit px-4 py-1">
          Testimonial
        </div>
        <h1 className="text-edunity-secondary font-bold text-5xl w-1/2 text-center leading-[58px]">
          Creating A Community Of Life Long Learners.
        </h1>
        <div>
          <Carousel>
            <CarouselContent className="-ml-20 pt-12">
              {TESTIMONIALS.map((testimonial, index) => {
                const { name, title, company, content } = testimonial;
                return (
                  <CarouselItem
                    className="md:basis-1/3 pl-20 relative"
                    key={`testimonial-${index}`}
                  >
                    <div className="rounded-2xl border border-edunity-secondary p-6 flex flex-col gap-4 before:content-quote before:absolute before:top-[-30px] before:left-[60px]">
                      <p className="text-lg leading-9">{content}</p>
                      <h3 className="text-edunity-secondary font-bold text-xl">
                        {name}
                      </h3>
                      <h4 className="text-edunity-primary text-lg">{`${title} at ${company}`}</h4>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SectionTestimonials;